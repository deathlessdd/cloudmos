"use strict";(self.webpackChunk_leap_cosmos_extension=self.webpackChunk_leap_cosmos_extension||[]).push([[5066],{555066:(R,g,t)=>{t.r(g),t.d(g,{default:()=>j});var m=t(964266),E=t(896538),o=t(892742),i=t(910416),u=t(64125),h=t(830911),e=t(202784),D=t(410289),x=t(856514),A=t(712878),C=t(759413),O=t(339279),T=t(726089),L=t(389320),P=t(8891),M=t.n(P),I=t(15815);function B({selectedAirdrop:a}){const r=a?.CTAInfo?.type==="internal"?`${L.x3}${a?.CTAInfo?.href}`:a?.CTAInfo?.href,c=()=>{if(!(0,I.l)())try{M().track(i.B_.ButtonClick,{buttonType:i.L$.AIRDROPS,buttonName:i.$S.CLAIM_AIRDROP,redirectURL:r,time:Date.now()/1e3})}catch(l){(0,T.Tb)(l)}};return e.createElement(O.Buttons.Generic,{size:"normal",className:"w-full mb-6 !bg-black-100 dark:!bg-white-100 text-white-100 dark:text-black-100",title:a?.CTAInfo?.text,onClick:()=>{c(),window.open(r,"_blank")}},e.createElement("div",{className:"flex items-center gap-2"},a?.CTAInfo?.text,e.createElement("span",{className:"material-icons-round",style:{fontSize:20}},"open_in_new")))}var d=t(94608),S=t(719063);function W({claimStartDate:a,claimEndDate:r,isClaimPeriodOver:c}){return e.createElement("div",{className:"flex flex-col gap-2 mb-6"},e.createElement(d.Z,{size:"md",className:"font-bold gap-2"},e.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100",style:{fontSize:20}},"calendar_today"),"Claim period"),e.createElement("div",null,c&&e.createElement(d.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium"},"Claim period of this Airdrop has passed."),e.createElement(d.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium"},a?`${(0,S.Z)(a,"dd MMM, yyyy")} - ${r&&(0,S.Z)(r,"dd MMM, yyyy")}`:"The claim period of this airdrop hasn\u2019t been announced yet. Stay tuned for more details.")))}var z=t(606367),w=t(625890),N=t(508181),Z=t(170849),U=t(111819);function K({selectedAirdrop:a}){const[r,c]=(0,e.useState)(!1),[l,v]=(0,e.useState)(!1),{activeWallet:s}=(0,w.ZP)(),p=s?.walletType===m._KQ.LEDGER&&!z.li.test(s.name)?`${L.dN[s.walletType]} Wallet ${s.addressIndex+1}`:(0,U.k)(s?.name||""),f=(0,e.useMemo)(()=>{if(s?.avatar)return s.avatar;if((0,I.l)())return N.r.Logos.CompassCircle},[s?.avatar]);(0,e.useEffect)(()=>{a?.tokenInfo?.find(b=>!b?.address)&&c(!0)},[a]),(0,e.useEffect)(()=>{let n;return l&&(n=setTimeout(()=>v(!1),2e3)),()=>clearTimeout(n)},[l]);const y=n=>{n&&(Z.i.copyText(n),v(!0))};return e.createElement("div",{className:"flex flex-col gap-2"},e.createElement(d.Z,{size:"md",className:"font-bold gap-2"},e.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100",style:{fontSize:20}},"account_balance_wallet"),"Eligible wallets"),e.createElement("div",{className:"bg-white-100 dark:bg-gray-950 p-4 rounded-2xl mt-1"},e.createElement("div",{className:"flex items-center gap-2 mb-3"},f?e.createElement("img",{className:"w-5 h-5 rounded-full",src:f,alt:"wallet-avatar"}):e.createElement("img",{className:"w-5 h-5",src:N.r.Logos.LeapLogo28,alt:"wallet-avatar"}),e.createElement(d.Z,{size:"sm",className:"font-bold"},(0,A.fy)(p,10))),e.createElement("div",{className:"flex flex-wrap gap-3"},a?.tokenInfo?.map((n,b)=>{if(n?.address)return e.createElement("div",{key:b,className:"flex gap-2 py-2 px-3 rounded-3xl bg-gray-100 dark:bg-gray-900"},e.createElement(d.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium"},(0,m.Hnh)(n?.address)),e.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100 cursor-pointer",style:{fontSize:20},onClick:()=>y(n?.address)},l?"check_circle_outline":"copy"))}),r&&e.createElement("div",{className:"flex items-center bg-gray-100 dark:bg-gray-900 rounded-2xl border border-red-300 p-4 gap-3"},e.createElement("div",{className:"material-icons-round text-red-300",style:{fontSize:20}},"error_outline"),e.createElement("p",{className:"text-sm font-medium text-gray-800 dark:text-gray-200"},"We are unable to fetch airdrops for some addresses. Please try again later.")))))}var $=t(128844),F=t(15377);function G(){const[a,r]=(0,e.useState)(!1),[c,l]=(0,e.useState)(1),v=(0,F.u)(),p=(0,m._2_)()===null;(0,e.useEffect)(()=>(r(p),()=>r(!1)),[p]);const f=()=>{if(!(0,I.l)())try{M().track(i.B_.ButtonClick,{buttonType:i.L$.AIRDROPS,buttonName:i.$S.RETRY_AIRDROP,redirectURL:"",numberOfRetries:c,time:Date.now()/1e3})}catch(n){(0,T.Tb)(n)}},y=()=>{r(!0),l(n=>n+1),v(),f(),setTimeout(()=>{r(!1)},1e4)};return e.createElement("div",{className:"flex flex-col gap-6 h-full"},e.createElement("div",{className:"bg-white-100 dark:bg-gray-950 rounded-xl py-8 px-4 flex flex-col items-center justify-center flex-1"},a?e.createElement("div",{className:"flex justify-center items-center"},e.createElement($.Z,null),e.createElement(d.Z,{className:"mt-16"},"Loading Airdrop")):e.createElement(e.Fragment,null,e.createElement("img",{src:N.r.Airdrop.airdropFailed,alt:"airdrop_banner",className:"mb-6"}),e.createElement(d.Z,{size:"xl",className:"font-bold mb-2"},"Woops!"),e.createElement(d.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium text-center"},"We aren\u2019t able to load details for this ",e.createElement("br",null)," Airdrop. You can try again later."))),e.createElement(O.Buttons.Generic,{size:"normal",className:"w-full !bg-black-100 dark:!bg-white-100 text-white-100 dark:text-black-100",title:"Retry",disabled:a,onClick:y},a?"Loading":e.createElement("div",{className:"flex items-center gap-2"},"Retry",e.createElement("span",{className:"material-icons-round",style:{fontSize:20,transform:"rotateY(180deg)"}},"replay"))))}function Y({selectedAirdrop:a,isClaimPeriodOver:r,isClaimable:c}){const l=(0,m.LHZ)(String(a?.totalAmount),a?.tokenInfo?.[0]?.denom,2);return e.createElement("div",{className:"flex flex-col items-center gap-6 mb-6"},r?e.createElement("img",{src:N.r.Airdrop.airdropOver,alt:"airdrop_banner"}):e.createElement("div",{className:"relative"},e.createElement("img",{src:N.r.Airdrop.airdropBanner,alt:"airdrop_banner"}),e.createElement("img",{src:a?.airdropIcon,alt:"airdrop_token",className:"absolute w-[78px] h-[78px] top-[5px] right-[65px] rounded-full"})),e.createElement("div",{className:"text-xl font-bold text-center text-black-100 dark:text-white-100"},r?"You were eligible for":c?"You can claim":"You are eligible for",e.createElement("br",null),e.createElement("span",{className:"text-green-600"},a?.totalAmount?l:a?.name)," ","Airdrop"))}function j(){const a=(0,D.s0)(),r=new URLSearchParams((0,D.TH)().search).get("airdropId"),c=(0,m._2_)()||{},l=Object.values(c).filter(Q=>Q?.id===r)?.[0],v=l?.claimStartDate?new Date(l.claimStartDate):null,s=l?.claimEndDate?new Date(l.claimEndDate):null,p=new Date,f=s?s<p:!1,y=!!l?.CTAInfo?.text,n=l?.status==="failed",[b,k]=(0,e.useState)(!1);(0,h.a)(`${i.q.Airdrops} ${l?.name}`),(0,e.useEffect)(()=>{l||a("/airdrops",{replace:!0})},[]);const H=(0,e.useCallback)(()=>k(!0),[]);return e.createElement(u.E.div,{className:"relative h-full w-full"},e.createElement(o.Z,{header:e.createElement(E.m,{title:(0,A.fy)(l?.name,18),imgSrc:e.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100",style:{fontSize:20}},"info_outline"),onImgClick:H,action:{onClick:()=>a(-1),type:x.Y.BACK},dontShowFilledArrowIcon:!0})},e.createElement("div",{className:"p-7 overflow-y-auto",style:{height:"calc(100% - 72px)"}},n||!l?e.createElement(G,null):e.createElement(e.Fragment,null,e.createElement(Y,{selectedAirdrop:l,isClaimPeriodOver:f,isClaimable:y}),y&&!f&&e.createElement(B,{selectedAirdrop:l}),e.createElement(W,{claimStartDate:v,claimEndDate:s,isClaimPeriodOver:f}),e.createElement(K,{selectedAirdrop:l})))),e.createElement(C.k,{isOpen:b,onClose:()=>k(!1)}))}},163637:(R,g,t)=>{t.d(g,{Z:()=>O});var m=t(726089),E=t(294184),o=t.n(E),i=t(94608),u=t(910416),h=t(389320),e=t(8891),D=t.n(e),x=t(202784),A=t(15815);const C=`${h.x3}/airdrops`;function O({className:T=""}){const L=()=>{if(!(0,A.l)())try{D().track(u.B_.ButtonClick,{buttonType:u.L$.AIRDROPS,buttonName:u.$S.GO_TO_LEAPBOARD,redirectURL:C,time:Date.now()/1e3})}catch(P){(0,m.Tb)(P)}};return x.createElement("div",{className:o()("flex gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-3xl w-fit items-center cursor-pointer",T),onClick:()=>{window.open(C,"_blank"),L()}},x.createElement("img",{src:"https://assets.leapwallet.io/Leapboard.png",alt:"leapboard_logo",width:16,height:16}),x.createElement(i.Z,{size:"xs",className:"font-bold"},"Go to Leapboard"),x.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100",style:{fontSize:16}},"launch"))}},759413:(R,g,t)=>{t.d(g,{k:()=>u});var m=t(240483),E=t(94608),o=t(202784),i=t(163637);const u=({isOpen:h,onClose:e})=>o.createElement(m.Z,{isOpen:h,closeOnBackdropClick:!0,onClose:e,title:"About Airdrops"},o.createElement(E.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium mb-3"},"Only active airdrops that Leap has partnered with for eligibility tracking are displayed here. For information on other airdrops, visit our web dashboard."),o.createElement(i.Z,null),o.createElement("div",{className:"flex gap-2 mt-8 mb-2 items-center"},o.createElement("div",{className:"material-icons-round text-black-100 dark:text-white-100",style:{fontSize:20}},"info"),o.createElement(E.Z,{size:"md",className:"font-bold"},"Disclaimer")),o.createElement(E.Z,{size:"sm",color:"text-gray-800 dark:text-gray-200",className:"font-medium"},"We aggregate airdrops data without endorsing or verifying it. Accuracy, relevance, or timeliness of data not guaranteed. Conduct your own research before engaging."))}}]);