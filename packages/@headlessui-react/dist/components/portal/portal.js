"use client";import f,{Fragment as R,createContext as g,useContext as T,useEffect as E,useMemo as c,useRef as A,useState as G}from"react";import{createPortal as O}from"react-dom";import{useEvent as L}from'../../hooks/use-event.js';import{useIsoMorphicEffect as x}from'../../hooks/use-iso-morphic-effect.js';import{useOnUnmount as h}from'../../hooks/use-on-unmount.js';import{useOwnerDocument as _}from'../../hooks/use-owner.js';import{useServerHandoffComplete as F}from'../../hooks/use-server-handoff-complete.js';import{optionalRef as U,useSyncRefs as P}from'../../hooks/use-sync-refs.js';import{usePortalRoot as D}from'../../internal/portal-force-root.js';import{env as C}from'../../utils/env.js';import{forwardRefWithAs as m,useRender as d}from'../../utils/render.js';function N(u){let r=D(),n=T(v),e=_(u),[o,l]=G(()=>{var t;if(!r&&n!==null)return(t=n.current)!=null?t:null;if(C.isServer)return null;let p=e==null?void 0:e.getElementById("headlessui-portal-root");if(p)return p;if(e===null)return null;let a=e.createElement("div");return a.setAttribute("id","headlessui-portal-root"),e.body.appendChild(a)});return E(()=>{o!==null&&(e!=null&&e.body.contains(o)||e==null||e.body.appendChild(o))},[o,e]),E(()=>{r||n!==null&&l(n.current)},[n,l,r]),o}let M=R,S=m(function(r,n){let e=r,o=A(null),l=P(U(i=>{o.current=i}),n),p=_(o),a=N(o),[t]=G(()=>{var i;return C.isServer?null:(i=p==null?void 0:p.createElement("div"))!=null?i:null}),s=T(y),b=F();x(()=>{!a||!t||a.contains(t)||(t.setAttribute("data-headlessui-portal",""),a.appendChild(t))},[a,t]),x(()=>{if(t&&s)return s.register(t)},[s,t]),h(()=>{var i;!a||!t||(t instanceof Node&&a.contains(t)&&a.removeChild(t),a.childNodes.length<=0&&((i=a.parentElement)==null||i.removeChild(a)))});let H=d();return b?!a||!t?null:O(H({ourProps:{ref:l},theirProps:e,slot:{},defaultTag:M,name:"Portal"}),t):null});function j(u,r){let n=P(r),{enabled:e=!0,...o}=u,l=d();return e?f.createElement(S,{...o,ref:n}):l({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:M,name:"Portal"})}let W=R,v=g(null);function I(u,r){let{target:n,...e}=u,l={ref:P(r)},p=d();return f.createElement(v.Provider,{value:n},p({ourProps:l,theirProps:e,defaultTag:W,name:"Popover.Group"}))}let y=g(null);function te(){let u=T(y),r=A([]),n=L(l=>(r.current.push(l),u&&u.register(l),()=>e(l))),e=L(l=>{let p=r.current.indexOf(l);p!==-1&&r.current.splice(p,1),u&&u.unregister(l)}),o=c(()=>({register:n,unregister:e,portals:r}),[n,e,r]);return[r,c(()=>function({children:p}){return f.createElement(y.Provider,{value:o},p)},[o])]}let J=m(j),X=m(I),re=Object.assign(J,{Group:X});export{re as Portal,X as PortalGroup,te as useNestedPortals};