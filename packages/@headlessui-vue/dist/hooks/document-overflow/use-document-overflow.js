import{computed as o,watch as s}from"vue";import{useStore as v}from'../../hooks/use-store.js';import{overflows as u}from'./overflow-store.js';function w(t,a,n){let i=v(u),l=o(()=>{let e=t.value?i.value.get(t.value):void 0;return e?e.count>0:!1});return s([t,a],([e,m],[r],p)=>{if(!e||!m)return;u.dispatch("PUSH",e,n);let f=!1;p(()=>{f||(u.dispatch("POP",r!=null?r:e,n),f=!0)})},{immediate:!0}),l}export{w as useDocumentOverflowLockedEffect};
