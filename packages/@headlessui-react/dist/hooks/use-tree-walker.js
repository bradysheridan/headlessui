import{useEffect as T,useRef as E}from"react";import{getOwnerDocument as d}from'../utils/owner.js';import{useIsoMorphicEffect as N}from'./use-iso-morphic-effect.js';function F(c,{container:e,accept:t,walk:r}){let o=E(t),l=E(r);T(()=>{o.current=t,l.current=r},[t,r]),N(()=>{if(!e||!c)return;let n=d(e);if(!n)return;let f=o.current,p=l.current,i=Object.assign(m=>f(m),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}export{F as useTreeWalker};