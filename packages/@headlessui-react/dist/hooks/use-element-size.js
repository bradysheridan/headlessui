import{useMemo as o,useReducer as h}from"react";import{useIsoMorphicEffect as s}from'./use-iso-morphic-effect.js';function f(e){if(e===null)return{width:0,height:0};let{width:t,height:r}=e.getBoundingClientRect();return{width:t,height:r}}function d(e,t=!1){let[r,u]=h(()=>({}),{}),i=o(()=>f(e),[e,r]);return s(()=>{if(!e)return;let n=new ResizeObserver(u);return n.observe(e),()=>{n.disconnect()}},[e]),t?{width:`${i.width}px`,height:`${i.height}px`}:i}export{d as useElementSize};
