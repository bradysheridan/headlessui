import{Fragment as j,computed as T,defineComponent as K,h as R,inject as _,onMounted as ee,onUnmounted as te,provide as U,ref as F,shallowRef as ie,watchEffect as q}from"vue";import{useNestedPortals as se}from'../../components/portal/portal.js';import{useEventListener as pe}from'../../hooks/use-event-listener.js';import{useId as L}from'../../hooks/use-id.js';import{useOutsideClick as fe}from'../../hooks/use-outside-click.js';import{useResolveButtonType as ve}from'../../hooks/use-resolve-button-type.js';import{useMainTreeNode as ce,useRootContainers as de}from'../../hooks/use-root-containers.js';import{Direction as w,useTabDirection as oe}from'../../hooks/use-tab-direction.js';import{Hidden as z,Features as J}from'../../internal/hidden.js';import{State as x,useOpenClosed as ne,useOpenClosedProvider as Pe}from'../../internal/open-closed.js';import{Keys as D}from'../../keyboard.js';import{dom as r}from'../../utils/dom.js';import{Focus as C,FocusResult as Q,FocusableMode as me,focusIn as B,getFocusableElements as X,isFocusableElement as be}from'../../utils/focus-management.js';import{match as H}from'../../utils/match.js';import'../../utils/micro-task.js';import{getOwnerDocument as A}from'../../utils/owner.js';import{Features as W,render as G}from'../../utils/render.js';var Se=(p=>(p[p.Open=0]="Open",p[p.Closed=1]="Closed",p))(Se||{});let re=Symbol("PopoverContext");function V(P){let b=_(re,null);if(b===null){let p=new Error(`<${P} /> is missing a parent <${ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,V),p}return b}let le=Symbol("PopoverGroupContext");function ae(){return _(le,null)}let ue=Symbol("PopoverPanelContext");function ge(){return _(ue,null)}let ye=K({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(P,{slots:b,attrs:p,expose:h}){var v;let t=F(null);h({el:t,$el:t});let e=F(1),c=F(null),d=F(null),O=F(null),f=F(null),y=T(()=>A(t)),M=T(()=>{var Y,Z;if(!r(c)||!r(f))return!1;for(let k of document.querySelectorAll("body > *"))if(Number(k==null?void 0:k.contains(r(c)))^Number(k==null?void 0:k.contains(r(f))))return!0;let o=X(),a=o.indexOf(r(c)),g=(a+o.length-1)%o.length,E=(a+1)%o.length,N=o[g],$=o[E];return!((Y=r(f))!=null&&Y.contains(N))&&!((Z=r(f))!=null&&Z.contains($))}),l={popoverState:e,buttonId:F(null),panelId:F(null),panel:f,button:c,isPortalled:M,beforePanelSentinel:d,afterPanelSentinel:O,togglePopover(){e.value=H(e.value,{[0]:1,[1]:0})},closePopover(){e.value!==1&&(e.value=1)},close(o){l.closePopover();let a=(()=>o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?r(o):r(l.button):r(l.button))();a==null||a.focus()}};U(re,l),Pe(T(()=>H(e.value,{[0]:x.Open,[1]:x.Closed})));let m={buttonId:l.buttonId,panelId:l.panelId,close(){l.closePopover()}},S=ae(),I=S==null?void 0:S.registerPopover,[s,u]=se(),i=de({mainTreeNodeRef:S==null?void 0:S.mainTreeNodeRef,portals:s,defaultContainers:[c,f]});function n(){var o,a,g,E;return(E=S==null?void 0:S.isFocusWithinPopoverGroup())!=null?E:((o=y.value)==null?void 0:o.activeElement)&&(((a=r(c))==null?void 0:a.contains(y.value.activeElement))||((g=r(f))==null?void 0:g.contains(y.value.activeElement)))}return q(()=>I==null?void 0:I(m)),pe((v=y.value)==null?void 0:v.defaultView,"focus",o=>{var a,g;o.target!==window&&o.target instanceof HTMLElement&&e.value===0&&(n()||c&&f&&(i.contains(o.target)||(a=r(l.beforePanelSentinel))!=null&&a.contains(o.target)||(g=r(l.afterPanelSentinel))!=null&&g.contains(o.target)||l.closePopover()))},!0),fe(i.resolveContainers,(o,a)=>{var g;l.closePopover(),be(a,me.Loose)||(o.preventDefault(),(g=r(c))==null||g.focus())},T(()=>e.value===0)),()=>{let o={open:e.value===0,close:l.close};return R(j,[R(u,{},()=>G({theirProps:{...P,...p},ourProps:{ref:t},slot:o,slots:b,attrs:p,name:"Popover"})),R(i.MainTreeNode)])}}}),Ge=K({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${L()}`}},inheritAttrs:!1,setup(P,{attrs:b,slots:p,expose:h}){let t=V("PopoverButton"),e=T(()=>A(t.button));h({el:t.button,$el:t.button}),ee(()=>{t.buttonId.value=P.id}),te(()=>{t.buttonId.value=null});let c=ae(),d=c==null?void 0:c.closeOthers,O=ge(),f=T(()=>O===null?!1:O.value===t.panelId.value),y=F(null),M=`headlessui-focus-sentinel-${L()}`;f.value||q(()=>{t.button.value=r(y)});let l=ve(T(()=>({as:P.as,type:b.type})),y);function m(n){var v,o,a,g,E;if(f.value){if(t.popoverState.value===1)return;switch(n.key){case D.Space:case D.Enter:n.preventDefault(),(o=(v=n.target).click)==null||o.call(v),t.closePopover(),(a=r(t.button))==null||a.focus();break}}else switch(n.key){case D.Space:case D.Enter:n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(d==null||d(t.buttonId.value)),t.togglePopover();break;case D.Escape:if(t.popoverState.value!==0)return d==null?void 0:d(t.buttonId.value);if(!r(t.button)||(g=e.value)!=null&&g.activeElement&&!((E=r(t.button))!=null&&E.contains(e.value.activeElement)))return;n.preventDefault(),n.stopPropagation(),t.closePopover();break}}function S(n){f.value||n.key===D.Space&&n.preventDefault()}function I(n){var v,o;P.disabled||(f.value?(t.closePopover(),(v=r(t.button))==null||v.focus()):(n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(d==null||d(t.buttonId.value)),t.togglePopover(),(o=r(t.button))==null||o.focus()))}function s(n){n.preventDefault(),n.stopPropagation()}let u=oe();function i(){let n=r(t.panel);if(!n)return;function v(){H(u.value,{[w.Forwards]:()=>B(n,C.First),[w.Backwards]:()=>B(n,C.Last)})===Q.Error&&B(X().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),H(u.value,{[w.Forwards]:C.Next,[w.Backwards]:C.Previous}),{relativeTo:r(t.button)})}v()}return()=>{let n=t.popoverState.value===0,v={open:n},{id:o,...a}=P,g=f.value?{ref:y,type:l.value,onKeydown:m,onClick:I}:{ref:y,id:o,type:l.value,"aria-expanded":t.popoverState.value===0,"aria-controls":r(t.panel)?t.panelId.value:void 0,disabled:P.disabled?!0:void 0,onKeydown:m,onKeyup:S,onClick:I,onMousedown:s};return R(j,[G({ourProps:g,theirProps:{...b,...a},slot:v,attrs:b,slots:p,name:"PopoverButton"}),n&&!f.value&&t.isPortalled.value&&R(z,{id:M,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i})])}}}),$e=K({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(P,{attrs:b,slots:p}){let h=V("PopoverOverlay"),t=`headlessui-popover-overlay-${L()}`,e=ne(),c=T(()=>e!==null?(e.value&x.Open)===x.Open:h.popoverState.value===0);function d(){h.closePopover()}return()=>{let O={open:h.popoverState.value===0};return G({ourProps:{id:t,"aria-hidden":!0,onClick:d},theirProps:P,slot:O,attrs:b,slots:p,features:W.RenderStrategy|W.Static,visible:c.value,name:"PopoverOverlay"})}}}),je=K({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${L()}`}},inheritAttrs:!1,setup(P,{attrs:b,slots:p,expose:h}){let{focus:t}=P,e=V("PopoverPanel"),c=T(()=>A(e.panel)),d=`headlessui-focus-sentinel-before-${L()}`,O=`headlessui-focus-sentinel-after-${L()}`;h({el:e.panel,$el:e.panel}),ee(()=>{e.panelId.value=P.id}),te(()=>{e.panelId.value=null}),U(ue,e.panelId),q(()=>{var u,i;if(!t||e.popoverState.value!==0||!e.panel)return;let s=(u=c.value)==null?void 0:u.activeElement;(i=r(e.panel))!=null&&i.contains(s)||B(r(e.panel),C.First)});let f=ne(),y=T(()=>f!==null?(f.value&x.Open)===x.Open:e.popoverState.value===0);function M(s){var u,i;switch(s.key){case D.Escape:if(e.popoverState.value!==0||!r(e.panel)||c.value&&!((u=r(e.panel))!=null&&u.contains(c.value.activeElement)))return;s.preventDefault(),s.stopPropagation(),e.closePopover(),(i=r(e.button))==null||i.focus();break}}function l(s){var i,n,v,o,a;let u=s.relatedTarget;u&&r(e.panel)&&((i=r(e.panel))!=null&&i.contains(u)||(e.closePopover(),((v=(n=r(e.beforePanelSentinel))==null?void 0:n.contains)!=null&&v.call(n,u)||(a=(o=r(e.afterPanelSentinel))==null?void 0:o.contains)!=null&&a.call(o,u))&&u.focus({preventScroll:!0})))}let m=oe();function S(){let s=r(e.panel);if(!s)return;function u(){H(m.value,{[w.Forwards]:()=>{var n;B(s,C.First)===Q.Error&&((n=r(e.afterPanelSentinel))==null||n.focus())},[w.Backwards]:()=>{var i;(i=r(e.button))==null||i.focus({preventScroll:!0})}})}u()}function I(){let s=r(e.panel);if(!s)return;function u(){H(m.value,{[w.Forwards]:()=>{let i=r(e.button),n=r(e.panel);if(!i)return;let v=X(),o=v.indexOf(i),a=v.slice(0,o+1),E=[...v.slice(o+1),...a];for(let N of E.slice())if(N.dataset.headlessuiFocusGuard==="true"||n!=null&&n.contains(N)){let $=E.indexOf(N);$!==-1&&E.splice($,1)}B(E,C.First,{sorted:!1})},[w.Backwards]:()=>{var n;B(s,C.Previous)===Q.Error&&((n=r(e.button))==null||n.focus())}})}u()}return()=>{let s={open:e.popoverState.value===0,close:e.close},{id:u,focus:i,...n}=P,v={ref:e.panel,id:u,onKeydown:M,onFocusout:t&&e.popoverState.value===0?l:void 0,tabIndex:-1};return G({ourProps:v,theirProps:{...b,...n},attrs:b,slot:s,slots:{...p,default:(...o)=>{var a;return[R(j,[y.value&&e.isPortalled.value&&R(z,{id:d,ref:e.beforePanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}),(a=p.default)==null?void 0:a.call(p,...o),y.value&&e.isPortalled.value&&R(z,{id:O,ref:e.afterPanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I})])]}},features:W.RenderStrategy|W.Static,visible:y.value,name:"PopoverPanel"})}}}),Ae=K({name:"PopoverGroup",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(P,{attrs:b,slots:p,expose:h}){let t=F(null),e=ie([]),c=T(()=>A(t)),d=ce();h({el:t,$el:t});function O(l){let m=e.value.indexOf(l);m!==-1&&e.value.splice(m,1)}function f(l){return e.value.push(l),()=>{O(l)}}function y(){var S;let l=c.value;if(!l)return!1;let m=l.activeElement;return(S=r(t))!=null&&S.contains(m)?!0:e.value.some(I=>{var s,u;return((s=l.getElementById(I.buttonId.value))==null?void 0:s.contains(m))||((u=l.getElementById(I.panelId.value))==null?void 0:u.contains(m))})}function M(l){for(let m of e.value)m.buttonId.value!==l&&m.close()}return U(le,{registerPopover:f,unregisterPopover:O,isFocusWithinPopoverGroup:y,closeOthers:M,mainTreeNodeRef:d.mainTreeNodeRef}),()=>R(j,[G({ourProps:{ref:t},theirProps:{...P,...b},slot:{},attrs:b,slots:p,name:"PopoverGroup"}),R(d.MainTreeNode)])}});export{ye as Popover,Ge as PopoverButton,Ae as PopoverGroup,$e as PopoverOverlay,je as PopoverPanel};