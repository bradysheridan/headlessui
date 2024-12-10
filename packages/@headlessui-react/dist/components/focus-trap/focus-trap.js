"use client";import L,{useRef as M}from"react";import{useDisposables as W}from'../../hooks/use-disposables.js';import{useEvent as A}from'../../hooks/use-event.js';import{useEventListener as K}from'../../hooks/use-event-listener.js';import{useIsMounted as P}from'../../hooks/use-is-mounted.js';import{useIsTopLayer as O}from'../../hooks/use-is-top-layer.js';import{useOnUnmount as V}from'../../hooks/use-on-unmount.js';import{useOwnerDocument as q}from'../../hooks/use-owner.js';import{useServerHandoffComplete as J}from'../../hooks/use-server-handoff-complete.js';import{useSyncRefs as X}from'../../hooks/use-sync-refs.js';import{Direction as H,useTabDirection as z}from'../../hooks/use-tab-direction.js';import{useWatch as y}from'../../hooks/use-watch.js';import{Hidden as C,HiddenFeatures as _}from'../../internal/hidden.js';import{history as b}from'../../utils/active-element-history.js';import{Focus as T,FocusResult as S,focusElement as p,focusIn as E}from'../../utils/focus-management.js';import{match as h}from'../../utils/match.js';import{microTask as j}from'../../utils/micro-task.js';import{forwardRefWithAs as Q,useRender as Y}from'../../utils/render.js';function U(o){if(!o)return new Set;if(typeof o=="function")return new Set(o());let e=new Set;for(let t of o.current)t.current instanceof HTMLElement&&e.add(t.current);return e}let Z="div";var x=(n=>(n[n.None=0]="None",n[n.InitialFocus=1]="InitialFocus",n[n.TabLock=2]="TabLock",n[n.FocusLock=4]="FocusLock",n[n.RestoreFocus=8]="RestoreFocus",n[n.AutoFocus=16]="AutoFocus",n))(x||{});function $(o,e){let t=M(null),r=X(t,e),{initialFocus:s,initialFocusFallback:a,containers:n,features:u=15,...f}=o;J()||(u=0);let l=q(t);ee(u,{ownerDocument:l});let i=te(u,{ownerDocument:l,container:t,initialFocus:s,initialFocusFallback:a});re(u,{ownerDocument:l,container:t,containers:n,previousActiveElement:i});let R=z(),g=A(c=>{let m=t.current;if(!m)return;(G=>G())(()=>{h(R.current,{[H.Forwards]:()=>{E(m,T.First,{skipElements:[c.relatedTarget,a]})},[H.Backwards]:()=>{E(m,T.Last,{skipElements:[c.relatedTarget,a]})}})})}),v=O(!!(u&2),"focus-trap#tab-lock"),N=W(),F=M(!1),k={ref:r,onKeyDown(c){c.key=="Tab"&&(F.current=!0,N.requestAnimationFrame(()=>{F.current=!1}))},onBlur(c){if(!(u&4))return;let m=U(n);t.current instanceof HTMLElement&&m.add(t.current);let d=c.relatedTarget;d instanceof HTMLElement&&d.dataset.headlessuiFocusGuard!=="true"&&(I(m,d)||(F.current?E(t.current,h(R.current,{[H.Forwards]:()=>T.Next,[H.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&p(c.target)))}},B=Y();return L.createElement(L.Fragment,null,v&&L.createElement(C,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:_.Focusable}),B({ourProps:k,theirProps:f,defaultTag:Z,name:"FocusTrap"}),v&&L.createElement(C,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:_.Focusable}))}let D=Q($),ye=Object.assign(D,{features:x});function w(o=!0){let e=M(b.slice());return y(([t],[r])=>{r===!0&&t===!1&&j(()=>{e.current.splice(0)}),r===!1&&t===!0&&(e.current=b.slice())},[o,b,e]),A(()=>{var t;return(t=e.current.find(r=>r!=null&&r.isConnected))!=null?t:null})}function ee(o,{ownerDocument:e}){let t=!!(o&8),r=w(t);y(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&p(r())},[t]),V(()=>{t&&p(r())})}function te(o,{ownerDocument:e,container:t,initialFocus:r,initialFocusFallback:s}){let a=M(null),n=O(!!(o&1),"focus-trap#initial-focus"),u=P();return y(()=>{if(o===0)return;if(!n){s!=null&&s.current&&p(s.current);return}let f=t.current;f&&j(()=>{if(!u.current)return;let l=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===l){a.current=l;return}}else if(f.contains(l)){a.current=l;return}if(r!=null&&r.current)p(r.current);else{if(o&16){if(E(f,T.First|T.AutoFocus)!==S.Error)return}else if(E(f,T.First)!==S.Error)return;if(s!=null&&s.current&&(p(s.current),(e==null?void 0:e.activeElement)===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=e==null?void 0:e.activeElement})},[s,n,o]),a}function re(o,{ownerDocument:e,container:t,containers:r,previousActiveElement:s}){let a=P(),n=!!(o&4);K(e==null?void 0:e.defaultView,"focus",u=>{if(!n||!a.current)return;let f=U(r);t.current instanceof HTMLElement&&f.add(t.current);let l=s.current;if(!l)return;let i=u.target;i&&i instanceof HTMLElement?I(f,i)?(s.current=i,p(i)):(u.preventDefault(),u.stopPropagation(),p(l)):p(s.current)},!0)}function I(o,e){for(let t of o)if(t.contains(e))return!0;return!1}export{ye as FocusTrap,x as FocusTrapFeatures};