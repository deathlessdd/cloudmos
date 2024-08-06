import { certificateManager } from "@akashnetwork/akashjs/build/certificates/certificate-manager";
import { SDL } from "@akashnetwork/akashjs/build/sdl";
import type { Registry } from "@cosmjs/proto-signing";
import { WalletService } from "@test/services/wallet.service";
import axios from "axios";
import * as fs from "node:fs";
import * as path from "node:path";
import { container } from "tsyringe";

import { app } from "@src/app";
import { config } from "@src/billing/config";
import { USER_WALLET_SCHEMA, UserWalletSchema } from "@src/billing/providers";
import { TYPE_REGISTRY } from "@src/billing/providers/type-registry.provider";
import { MasterWalletService } from "@src/billing/services";
import { ApiPgDatabase, POSTGRES_DB } from "@src/core";
import { USER_SCHEMA, UserSchema } from "@src/user/providers";

jest.setTimeout(30000);

const yml = fs.readFileSync(path.resolve(__dirname, "../mocks/hello-world-sdl.yml"), "utf8");

// TODO: finish this test to create a lease and then close the deployment
describe("Tx Sign", () => {
  const registry = container.resolve<Registry>(TYPE_REGISTRY);
  const db = container.resolve<ApiPgDatabase>(POSTGRES_DB);
  const userWalletSchema = container.resolve<UserWalletSchema>(USER_WALLET_SCHEMA);
  const userSchema = container.resolve<UserSchema>(USER_SCHEMA);
  const walletService = new WalletService(app);
  const masterWalletService = container.resolve(MasterWalletService);

  afterEach(async () => {
    await Promise.all([db.delete(userWalletSchema), db.delete(userSchema)]);
  });

  describe("POST /v1/tx", () => {
    it("should create a deployment for a user", async () => {
      const { user, token, wallet } = await walletService.createUserAndWallet();
      const res = await app.request("/v1/tx", {
        method: "POST",
        body: await createMessagePayload(user.id, wallet.address),
        headers: new Headers({ "Content-Type": "application/json", authorization: `Bearer ${token}` })
      });
      const result = await res.json();

      console.log("DEBUG result", result);

      expect(res.status).toBe(200);
      expect(result).toMatchObject({ data: { code: 0, transactionHash: expect.any(String) } });
    });
  });

  async function createMessagePayload(userId: string, address: string) {
    const { cert, publicKey } = certificateManager.generatePEM(address);

    const sdl = SDL.fromString(yml, "beta3", "sandbox");

    return JSON.stringify({
      data: {
        userId: userId,
        messages: [
          {
            typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
            value: {
              owner: address,
              cert: Buffer.from(cert).toString("base64"),
              pubkey: Buffer.from(publicKey).toString("base64")
            }
          },
          {
            typeUrl: "/akash.deployment.v1beta3.MsgCreateDeployment",
            value: {
              id: {
                owner: address,
                dseq: await getCurrentHeight()
              },
              groups: sdl.groups(),
              version: await sdl.manifestVersion(),
              deposit: { denom: config.DEPLOYMENT_GRANT_DENOM, amount: "5000000" },
              depositor: await masterWalletService.getFirstAddress()
            }
          }
        ].map(message => ({ typeUrl: message.typeUrl, value: Buffer.from(registry.encode(message)).toString("base64") }))
      }
    });
  }

  async function getCurrentHeight() {
    // TODO: extract this base url to env var
    const response = await axios.get(`https://api.sandbox-01.aksh.pw/blocks/latest`);
    return response.data.block.header.height;
  }
});