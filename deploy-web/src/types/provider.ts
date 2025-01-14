export interface RpcProvider {
  owner: string;
  host_uri: string;
  // attributes: Array<{
  //   key: string;
  //   value: string;
  // }>;
  info: {
    email: string;
    website: string;
  };
}

export interface ProviderSnapshot {
  id: string;
  isOnline: boolean;
  checkDate: string;
  error: string;
  deploymentCount: number;
  leaseCount: number;
  activeCPU: number;
  activeGPU: number;
  activeMemory: number;
  activeStorage: number;
  pendingCPU: number;
  pendingGPU: number;
  pendingMemory: number;
  pendingStorage: number;
  availableCPU: number;
  availableGPU: number;
  availableMemory: number;
  availableStorage: number;
}

export interface ApiProvider {
  owner: string;
  name: string;
  hostUri: string;
  createdHeight: number;
  email: string;
  website: string;
  lastCheckDate: string;
  deploymentCount: number;
  leaseCount: number;
  cosmosSdkVersion: string;
  akashVersion: string;
  uptime7d: number;
  uptime: Array<ProviderSnapshot>;
  ipRegion: string;
  ipRegionCode: string;
  ipCountry: string;
  ipCountryCode: string;
  ipLat: string;
  ipLon: string;
  attributes: Array<{
    key: string;
    value: string;
    auditedBy: Array<string>;
  }>;
  activeStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  pendingStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  availableStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  isValidVersion: boolean;
}

export interface MergedProvider extends RpcProvider, ApiProvider {
  isActive: boolean;
  isAudited: boolean;
  userLeases?: number;
  userActiveLeases?: number;
}

export interface ProviderDetail extends MergedProvider, ProviderStatusDto {}

export interface ProviderStatus {
  cluster: {
    leases: number;
    inventory: {
      error: string;
      active: Array<{
        cpu: number;
        gpu: number;
        memory: number;
        storage_ephemeral: number;
      }>;
      pending: Array<{
        cpu: number;
        gpu: number;
        memory: number;
        storage_ephemeral: number;
      }>;
      available: {
        nodes: Array<{
          cpu: number;
          gpu: number;
          memory: number;
          storage_ephemeral: number;
        }>;
      };
    };
  };
  bidengine: {
    orders: number;
  };
  manifest: {
    deployments: number;
  };
  cluster_public_hostname: string;
  address: string;
}

export interface ProviderVersion {
  akash: {
    version: string;
    commit: string;
    buildTags: string;
    go: string;
    cosmosSdkVersion: string;
  };
  kube: {
    major: string;
    minor: string;
    gitVersion: string;
    gitCommit: string;
    gitTreeState: string;
    buildDate: string;
    goVersion: string;
    compiler: string;
    platform: string;
  };
}

export interface ProviderStatusDto {
  name: string;
  orderCount: number;
  deploymentCount: number;
  leaseCount: number;
  error: string;
  active: Array<{
    cpu: number;
    gpu: number;
    memory: number;
    storage_ephemeral: number;
  }>;
  pending: Array<{
    cpu: number;
    gpu: number;
    memory: number;
    storage_ephemeral: number;
  }>;
  available: {
    nodes: Array<{
      cpu: number;
      gpu: number;
      memory: number;
      storage_ephemeral: number;
    }>;
  };
  akash: {
    version: string;
    commit: string;
    buildTags: string;
    go: string;
    cosmosSdkVersion: string;
  };
  kube: {
    major: string;
    minor: string;
    gitVersion: string;
    gitCommit: string;
    gitTreeState: string;
    buildDate: string;
    goVersion: string;
    compiler: string;
    platform: string;
  };
}

export interface ApiProviderList {
  owner: string;
  name: string;
  hostUri: string;
  createdHeight: number;
  email: string;
  website: string;
  lastCheckDate: Date;
  deploymentCount: number;
  leaseCount: number;
  cosmosSdkVersion: string;
  akashVersion: string;
  ipRegion: string;
  ipRegionCode: string;
  ipCountry: string;
  ipCountryCode: string;
  ipLat: string;
  ipLon: string;
  uptime1d: number;
  uptime7d: number;
  uptime30d: number;
  isValidVersion: boolean;
  isOnline: boolean;
  isAudited: boolean;
  activeStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  pendingStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  availableStats: {
    cpu: number;
    gpu: number;
    memory: number;
    storage: number;
  };
  attributes: Array<{
    key: string;
    value: string;
    auditedBy: string[];
  }>;

  // Attributes schema
  host: string;
  organization: string;
  statusPage: string;
  locationRegion: string;
  country: string;
  city: string;
  timezone: string;
  locationType: string;
  hostingProvider: string;
  hardwareCpu: string;
  hardwareCpuArch: string;
  hardwareGpuVendor: string;
  hardwareGpuModels: string[];
  hardwareDisk: string[];
  featPersistentStorage: boolean;
  featPersistentStorageType: string[];
  hardwareMemory: string;
  networkProvider: string;
  networkSpeedDown: number;
  networkSpeedUp: number;
  tier: string;
  featEndpointCustomDomain: boolean;
  workloadSupportChia: boolean;
  workloadSupportChiaCapabilities: string[];
  featEndpointIp: boolean;
}

export interface ClientProviderList extends ApiProviderList {
  userLeases?: number;
  userActiveLeases?: number;
}

export interface ApiProviderDetail extends ApiProviderList {
  uptime: Array<{
    id: string;
    isOnline: boolean;
    checkDate: Date;
  }>;
}

export type Auditor = {
  id: string;
  name: string;
  address: string;
  website: string;
};
