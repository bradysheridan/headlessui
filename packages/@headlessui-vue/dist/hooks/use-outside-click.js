import{computed as p,ref as d}from"vue";import{dom as C}from'../utils/dom.js';import{FocusableMode as h,isFocusableElement as T}from'../utils/focus-management.js';import{isMobile as M}from'../utils/platform.js';import{useDocumentEvent as l}from'./use-document-event.js';import{useWindowEvent as y}from'./use-window-event.js';const f=30;function R(s,m,r=p(()=>!0)){function c(t,o){if(t.defaultPrevented)return;let e=o(t);if(e===null||!e.getRootNode().contains(e))return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:C(u);if(n!=null&&n.contains(e)||t.composed&&t.composedPath().includes(n))return}return!T(e,h.Loose)&&e.tabIndex!==-1&&t.preventDefault(),m(t,e)}let i=d(null);l(r,"pointerdown",t=>{var o,e;i.value=((e=(o=t.composedPath)==null?void 0:o.call(t))==null?void 0:e[0])||t.target},!0),l(r,"mousedown",t=>{var o,e;i.value=((e=(o=t.composedPath)==null?void 0:o.call(t))==null?void 0:e[0])||t.target},!0),l(r,"click",t=>{M()||i.value&&(c(t,()=>i.value),i.value=null)},!0);let a={x:0,y:0};l(r,"touchstart",t=>{a.x=t.touches[0].clientX,a.y=t.touches[0].clientY},!0),l(r,"touchend",t=>{let o={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY};if(!(Math.abs(o.x-a.x)>=f||Math.abs(o.y-a.y)>=f))return c(t,()=>t.target instanceof HTMLElement?t.target:null)},!0),y(r,"blur",t=>c(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{R as useOutsideClick};