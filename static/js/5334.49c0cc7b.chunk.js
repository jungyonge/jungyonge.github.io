"use strict";(self.webpackChunksuperbee_front=self.webpackChunksuperbee_front||[]).push([[5334],{6889:function(t,e,n){n.d(e,{W:function(){return h}});var r=n(15671),i=n(43144),a=n(97326),s=n(60136),c=n(29388),o=n(40744),u=n(20710),h=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var i;(0,r.Z)(this,n);var s=t.chains,c=void 0===s?u.gL9:s,h=t.options;return i=e.call(this),(0,o._)((0,a.Z)(i),"id",void 0),(0,o._)((0,a.Z)(i),"name",void 0),(0,o._)((0,a.Z)(i),"chains",void 0),(0,o._)((0,a.Z)(i),"options",void 0),(0,o._)((0,a.Z)(i),"ready",void 0),i.chains=c,i.options=h,i}return(0,i.Z)(n,[{key:"getBlockExplorerUrls",value:function(t){var e,n,r=null!==(e=null===(n=t.explorers)||void 0===n?void 0:n.map((function(t){return t.url})))&&void 0!==e?e:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(t){return!this.chains.some((function(e){return e.chainId===t}))}},{key:"updateChains",value:function(t){this.chains=t}}]),n}(n(52134).Z)},12885:function(t,e,n){n.d(e,{A:function(){return d},C:function(){return l},R:function(){return v},S:function(){return Z},U:function(){return b},a:function(){return f}});var r=n(43144),i=n(15671),a=n(97326),s=n(60136),c=n(29388),o=n(98737),u=n(40744),h=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t,r){var s;(0,i.Z)(this,n);var c=r.cause,o=r.code,h=r.data;if(!Number.isInteger(o))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');return s=e.call(this,"".concat(t,". Cause: ").concat(c)),(0,u._)((0,a.Z)(s),"cause",void 0),(0,u._)((0,a.Z)(s),"code",void 0),(0,u._)((0,a.Z)(s),"data",void 0),s.cause=c,s.code=o,s.data=h,s}return(0,r.Z)(n)}((0,o.Z)(Error)),p=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t,r){(0,i.Z)(this,n);var a=r.cause,s=r.code,c=r.data;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return e.call(this,t,{cause:a,code:s,data:c})}return(0,r.Z)(n)}(h),d=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;return(0,i.Z)(this,n),t=e.apply(this,arguments),(0,u._)((0,a.Z)(t),"name","AddChainError"),(0,u._)((0,a.Z)(t),"message","Error adding chain"),t}return(0,r.Z)(n)}((0,o.Z)(Error)),l=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;(0,i.Z)(this,n);var s=t.chainId,c=t.connectorId;return r=e.call(this,'Chain "'.concat(s,'" not configured for connector "').concat(c,'".')),(0,u._)((0,a.Z)(r),"name","ChainNotConfigured"),r}return(0,r.Z)(n)}((0,o.Z)(Error)),f=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;return(0,i.Z)(this,n),t=e.apply(this,arguments),(0,u._)((0,a.Z)(t),"name","ConnectorNotFoundError"),(0,u._)((0,a.Z)(t),"message","Connector not found"),t}return(0,r.Z)(n)}((0,o.Z)(Error)),v=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;return(0,i.Z)(this,n),r=e.call(this,"Resource unavailable",{cause:t,code:-32002}),(0,u._)((0,a.Z)(r),"name","ResourceUnavailable"),r}return(0,r.Z)(n)}(h),Z=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;return(0,i.Z)(this,n),r=e.call(this,"Error switching chain",{cause:t,code:4902}),(0,u._)((0,a.Z)(r),"name","SwitchChainError"),r}return(0,r.Z)(n)}(p),b=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;return(0,i.Z)(this,n),r=e.call(this,"User rejected request",{cause:t,code:4001}),(0,u._)((0,a.Z)(r),"name","UserRejectedRequestError"),r}return(0,r.Z)(n)}(p)},65334:function(t,e,n){n.r(e),n.d(e,{WalletConnectConnector:function(){return q}});var r=n(84506),i=n(93433),a=n(29439),s=n(74165),c=n(15861),o=n(1413),u=n(15671),h=n(43144),p=n(97326),d=n(60136),l=n(29388),f=n(46039),v=n(95768),Z=n(40744),b=n(28552),m=n(64249),w=n(52009),g=n(92692),x=n(6889),k=n(12885),y=(n(52134),"eip155"),C="wagmi.requestedChains",_="wallet_addEthereumChain",I="last-used-chain-id",E=new WeakMap,S=new WeakMap,N=new WeakMap,U=new WeakSet,A=new WeakSet,W=new WeakSet,L=new WeakSet,M=new WeakSet,P=new WeakSet,D=new WeakSet,O=new WeakSet,q=function(t){(0,d.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,u.Z)(this,n),r=e.call(this,(0,o.Z)((0,o.Z)({},t),{},{options:(0,o.Z)({isNewChainsStale:!0},t.options)})),(0,f._)((0,p.Z)(r),O),(0,f._)((0,p.Z)(r),D),(0,f._)((0,p.Z)(r),P),(0,f._)((0,p.Z)(r),M),(0,f._)((0,p.Z)(r),L),(0,f._)((0,p.Z)(r),W),(0,f._)((0,p.Z)(r),A),(0,f._)((0,p.Z)(r),U),(0,Z._)((0,p.Z)(r),"id",g.w.walletConnect),(0,Z._)((0,p.Z)(r),"name","WalletConnect"),(0,Z._)((0,p.Z)(r),"ready",!0),(0,v._)((0,p.Z)(r),E,{writable:!0,value:void 0}),(0,v._)((0,p.Z)(r),S,{writable:!0,value:void 0}),(0,v._)((0,p.Z)(r),N,{writable:!0,value:void 0}),(0,Z._)((0,p.Z)(r),"onAccountsChanged",(function(t){0===t.length?r.emit("disconnect"):r.emit("change",{account:b.getAddress(t[0])})})),(0,Z._)((0,p.Z)(r),"onChainChanged",(function(t){var e=Number(t),n=r.isChainUnsupported(e);(0,v.b)((0,p.Z)(r),N).setItem(I,String(t)),r.emit("change",{chain:{id:e,unsupported:n}})})),(0,Z._)((0,p.Z)(r),"onDisconnect",(function(){(0,f.a)((0,p.Z)(r),M,B).call((0,p.Z)(r),[]),(0,v.b)((0,p.Z)(r),N).removeItem(I),r.emit("disconnect")})),(0,Z._)((0,p.Z)(r),"onDisplayUri",(function(t){r.emit("message",{type:"display_uri",data:t})})),(0,Z._)((0,p.Z)(r),"onConnect",(function(){r.emit("connect",{provider:(0,v.b)((0,p.Z)(r),E)})})),(0,v.a)((0,p.Z)(r),N,t.options.storage),(0,f.a)((0,p.Z)(r),U,j).call((0,p.Z)(r)),r}return(0,h.Z)(n,[{key:"connect",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n,r,i,a,c,o,u,h,p,d,l,Z,w,g=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=(e=g.length>0&&void 0!==g[0]?g[0]:{}).chainId,r=e.pairingTopic,t.prev=1,i=n){t.next=9;break}return t.next=6,(0,v.b)(this,N).getItem(I);case 6:a=t.sent,c=a?parseInt(a):void 0,i=c&&!this.isChainUnsupported(c)?c:null===(o=this.chains[0])||void 0===o?void 0:o.chainId;case 9:if(i){t.next=11;break}throw new Error("No chains found on connector.");case 11:return t.next=13,this.getProvider();case 13:return u=t.sent,this.setupListeners(),t.next=17,(0,f.a)(this,W,V).call(this);case 17:if(h=t.sent,!u.session||!h){t.next=21;break}return t.next=21,u.disconnect();case 21:if(u.session&&!h){t.next=27;break}return p=this.chains.filter((function(t){return t.chainId!==i})).map((function(t){return t.chainId})),this.emit("message",{type:"connecting"}),t.next=26,u.connect({pairingTopic:r,chains:[i],optionalChains:p.length>0?p:[i]});case 26:(0,f.a)(this,M,B).call(this,this.chains.map((function(t){return t.chainId})));case 27:return t.next=29,u.enable();case 29:if(0!==(d=t.sent).length){t.next=32;break}throw new Error("No accounts found on provider.");case 32:return l=b.getAddress(d[0]),t.next=35,this.getChainId();case 35:return Z=t.sent,w=this.isChainUnsupported(Z),t.abrupt("return",{account:l,chain:{id:Z,unsupported:w},provider:new m.Q(u)});case 40:if(t.prev=40,t.t0=t.catch(1),!/user rejected/i.test(null===t.t0||void 0===t.t0?void 0:t.t0.message)){t.next=44;break}throw new k.U(t.t0);case 44:throw t.t0;case 45:case"end":return t.stop()}}),t,this,[[1,40]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getProvider();case 2:return e=t.sent,t.prev=3,t.next=6,e.disconnect();case 6:t.next=12;break;case 8:if(t.prev=8,t.t0=t.catch(3),/No matching key/i.test(t.t0.message)){t.next=12;break}throw t.t0;case 12:return t.prev=12,(0,f.a)(this,L,z).call(this),(0,f.a)(this,M,B).call(this,[]),t.finish(12);case 16:case"end":return t.stop()}}),t,this,[[3,8,12,16]])})));return function(){return t.apply(this,arguments)}}()},{key:"getAccount",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getProvider();case 2:if(e=t.sent,0!==(n=e.accounts).length){t.next=6;break}throw new Error("No accounts found on provider.");case 6:return t.abrupt("return",b.getAddress(n[0]));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getChainId",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getProvider();case 2:return e=t.sent,n=e.chainId,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProvider",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n.length>0&&void 0!==n[0]?n[0]:{}).chainId,(0,v.b)(this,E)){t.next=4;break}return t.next=4,(0,f.a)(this,U,j).call(this);case 4:if(!e){t.next=7;break}return t.next=7,this.switchChain(e);case 7:if((0,v.b)(this,E)){t.next=9;break}throw new Error("No provider found.");case 9:return t.abrupt("return",(0,v.b)(this,E));case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getSigner",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n,r,i,c,o=arguments;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,t.next=3,Promise.all([this.getProvider({chainId:e}),this.getAccount()]);case 3:return n=t.sent,r=(0,a.Z)(n,2),i=r[0],c=r[1],t.abrupt("return",new m.Q(i,e).getSigner(c));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,n,r,i,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([this.getAccount(),this.getProvider()]);case 3:return e=t.sent,n=(0,a.Z)(e,2),r=n[0],i=n[1],t.next=9,(0,f.a)(this,W,V).call(this);case 9:if(c=t.sent,r){t.next=12;break}return t.abrupt("return",!1);case 12:if(!c||!i.session){t.next=21;break}return t.prev=13,t.next=16,i.disconnect();case 16:t.next=20;break;case 18:t.prev=18,t.t0=t.catch(13);case 20:return t.abrupt("return",!1);case 21:return t.abrupt("return",!0);case 24:return t.prev=24,t.t1=t.catch(0),t.abrupt("return",!1);case 27:case"end":return t.stop()}}),t,this,[[0,24],[13,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var n,r,a,c,u,h,p,d;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.chains.find((function(t){return t.chainId===e}))){t.next=3;break}throw new k.S("Chain with ID: ".concat(e,", not found on connector."));case 3:return t.prev=3,t.next=6,this.getProvider();case 6:if(r=t.sent,a=(0,f.a)(this,D,G).call(this),c=(0,f.a)(this,O,K).call(this),a.includes(e)||!c.includes(_)){t.next=19;break}return h=null!==(u=n.explorers)&&void 0!==u&&u.length?{blockExplorerUrls:[n.explorers[0].url]}:{},t.next=14,r.request({method:_,params:[(0,o.Z)({chainId:w.hexValue(n.chainId),chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:(0,i.Z)(n.rpc)},h)]});case 14:return t.next=16,(0,f.a)(this,P,F).call(this);case 16:(p=t.sent).push(e),(0,f.a)(this,M,B).call(this,p);case 19:return t.next=21,r.request({method:"wallet_switchEthereumChain",params:[{chainId:w.hexValue(e)}]});case 21:return t.abrupt("return",n);case 24:if(t.prev=24,t.t0=t.catch(3),d="string"===typeof t.t0?t.t0:null===t.t0||void 0===t.t0?void 0:t.t0.message,!/user rejected request/i.test(d)){t.next=29;break}throw new k.U(t.t0);case 29:throw new k.S(t.t0);case 30:case"end":return t.stop()}}),t,this,[[3,24]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,v.b)(this,E)){t.next=2;break}return t.abrupt("return");case 2:(0,f.a)(this,L,z).call(this),(0,v.b)(this,E).on("accountsChanged",this.onAccountsChanged),(0,v.b)(this,E).on("chainChanged",this.onChainChanged),(0,v.b)(this,E).on("disconnect",this.onDisconnect),(0,v.b)(this,E).on("session_delete",this.onDisconnect),(0,v.b)(this,E).on("display_uri",this.onDisplayUri),(0,v.b)(this,E).on("connect",this.onConnect);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(x.W);function j(){return T.apply(this,arguments)}function T(){return(T=(0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,v.b)(this,S)||(0,v.a)(this,S,(0,f.a)(this,A,R).call(this)),t.abrupt("return",(0,v.b)(this,S));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function R(){return Q.apply(this,arguments)}function Q(){return(Q=(0,c.Z)((0,s.Z)().mark((function t(){var e,i,a,c,u,h,p,d;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(5043).then(n.bind(n,65043));case 2:if(e=t.sent,i=e.default,a=e.OPTIONAL_EVENTS,c=e.OPTIONAL_METHODS,u=this.chains.map((function(t){return t.chainId})),h=(0,r.Z)(u),p=h[0],d=h.slice(1),!p){t.next=15;break}return t.t0=v.a,t.t1=this,t.t2=E,t.next=13,i.init({showQrModal:!1!==this.options.qrcode,projectId:this.options.projectId,optionalMethods:c,optionalEvents:a,chains:[p],optionalChains:d,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.chains.map((function(t){return[t.chainId,t.rpc[0]]}))),qrModalOptions:(0,o.Z)((0,o.Z)({},this.options.qrModalOptions),{},{explorerAllowList:[],explorerDenyList:[]})});case 13:t.t3=t.sent,(0,t.t0)(t.t1,t.t2,t.t3);case 15:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function V(){return J.apply(this,arguments)}function J(){return(J=(0,c.Z)((0,s.Z)().mark((function t(){var e,n,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,f.a)(this,O,K).call(this).includes(_)){t.next=3;break}return t.abrupt("return",!1);case 3:if(this.options.isNewChainsStale){t.next=5;break}return t.abrupt("return",!1);case 5:return t.next=7,(0,f.a)(this,P,F).call(this);case 7:if(e=t.sent,n=this.chains.map((function(t){return t.chainId})),!(r=(0,f.a)(this,D,G).call(this)).length||r.some((function(t){return n.includes(t)}))){t.next=12;break}return t.abrupt("return",!1);case 12:return t.abrupt("return",!n.every((function(t){return e.includes(t)})));case 13:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(){(0,v.b)(this,E)&&((0,v.b)(this,E).removeListener("accountsChanged",this.onAccountsChanged),(0,v.b)(this,E).removeListener("chainChanged",this.onChainChanged),(0,v.b)(this,E).removeListener("disconnect",this.onDisconnect),(0,v.b)(this,E).removeListener("session_delete",this.onDisconnect),(0,v.b)(this,E).removeListener("display_uri",this.onDisplayUri),(0,v.b)(this,E).removeListener("connect",this.onConnect))}function B(t){(0,v.b)(this,N).setItem(C,JSON.stringify(t))}function F(){return H.apply(this,arguments)}function H(){return(H=(0,c.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,v.b)(this,N).getItem(C);case 2:return e=t.sent,t.abrupt("return",e?JSON.parse(e):[]);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function G(){var t,e,n;if(!(0,v.b)(this,E))return[];var r=null===(t=(0,v.b)(this,E).session)||void 0===t||null===(e=t.namespaces[y])||void 0===e||null===(n=e.chains)||void 0===n?void 0:n.map((function(t){return parseInt(t.split(":")[1]||"")}));return null!==r&&void 0!==r?r:[]}function K(){var t,e;if(!(0,v.b)(this,E))return[];var n=null===(t=(0,v.b)(this,E).session)||void 0===t||null===(e=t.namespaces[y])||void 0===e?void 0:e.methods;return null!==n&&void 0!==n?n:[]}}}]);