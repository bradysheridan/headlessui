import{computed as o,defineComponent as O,h as g,inject as q,nextTick as ie,onMounted as L,onUnmounted as ue,provide as se,ref as y,watchEffect as pe}from"vue";import{FocusTrap as P}from'../../components/focus-trap/focus-trap.js';import{useDocumentOverflowLockedEffect as de}from'../../hooks/document-overflow/use-document-overflow.js';import{useEventListener as fe}from'../../hooks/use-event-listener.js';import{useId as b}from'../../hooks/use-id.js';import{useInert as W}from'../../hooks/use-inert.js';import{useOutsideClick as ge}from'../../hooks/use-outside-click.js';import{useRootContainers as ce}from'../../hooks/use-root-containers.js';import{State as x,useOpenClosed as ve}from'../../internal/open-closed.js';import{ForcePortalRoot as $}from'../../internal/portal-force-root.js';import{StackMessage as Y,useStackProvider as me}from'../../internal/stack-context.js';import{Keys as De}from'../../keyboard.js';import{dom as F}from'../../utils/dom.js';import{match as _}from'../../utils/match.js';import{getOwnerDocument as ye}from'../../utils/owner.js';import{Features as z,render as C}from'../../utils/render.js';import{Description as Se,useDescriptions as he}from'../description/description.js';import{Portal as G,PortalGroup as Oe,useNestedPortals as Pe}from'../portal/portal.js';var be=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(be||{});let j=Symbol("DialogContext");function T(t){let n=q(j,null);if(n===null){let l=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,T),l}return n}let I="DC8F892D-2EBD-447C-A4C8-A03058436FF4",qe=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:I},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${b()}`},role:{type:String,default:"dialog"}},emits:{close:t=>!0},setup(t,{emit:n,attrs:l,slots:u,expose:i}){var U;let r=y(!1);L(()=>{r.value=!0});let s=!1,v=o(()=>t.role==="dialog"||t.role==="alertdialog"?t.role:(s||(s=!0,console.warn(`Invalid role [${v}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),m=y(0),S=ve(),R=o(()=>t.open===I&&S!==null?(S.value&x.Open)===x.Open:t.open),c=y(null),E=o(()=>ye(c));if(i({el:c,$el:c}),!(t.open!==I||S!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof R.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R.value===I?void 0:t.open}`);let f=o(()=>r.value&&R.value?0:1),k=o(()=>f.value===0),w=o(()=>m.value>1),H=q(j,null)!==null,[V,J]=Pe(),{resolveContainers:A,mainTreeNodeRef:N,MainTreeNode:Q}=ce({portals:V,defaultContainers:[o(()=>{var e;return(e=h.panelRef.value)!=null?e:c.value})]}),X=o(()=>w.value?"parent":"leaf"),K=o(()=>S!==null?(S.value&x.Closing)===x.Closing:!1),Z=o(()=>H||K.value?!1:k.value),ee=o(()=>{var e,a,p;return(p=Array.from((a=(e=E.value)==null?void 0:e.querySelectorAll("body > *"))!=null?a:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(F(N))&&d instanceof HTMLElement))!=null?p:null});W(ee,Z);let te=o(()=>w.value?!0:k.value),le=o(()=>{var e,a,p;return(p=Array.from((a=(e=E.value)==null?void 0:e.querySelectorAll("[data-headlessui-portal]"))!=null?a:[]).find(d=>d.contains(F(N))&&d instanceof HTMLElement))!=null?p:null});W(le,te),me({type:"Dialog",enabled:o(()=>f.value===0),element:c,onUpdate:(e,a)=>{if(a==="Dialog")return _(e,{[Y.Add]:()=>m.value+=1,[Y.Remove]:()=>m.value-=1})}});let ae=he({name:"DialogDescription",slot:o(()=>({open:R.value}))}),M=y(null),h={titleId:M,panelRef:y(null),dialogState:f,setTitleId(e){M.value!==e&&(M.value=e)},close(){n("close",!1)}};se(j,h);let oe=o(()=>!(!k.value||w.value));ge(A,(e,a)=>{e.preventDefault(),h.close(),ie(()=>a==null?void 0:a.focus())},oe);let re=o(()=>!(w.value||f.value!==0));fe((U=E.value)==null?void 0:U.defaultView,"keydown",e=>{re.value&&(e.defaultPrevented||e.key===De.Escape&&(e.preventDefault(),e.stopPropagation(),h.close()))});let ne=o(()=>!(K.value||f.value!==0||H));return de(E,ne,e=>{var a;return{containers:[...(a=e.containers)!=null?a:[],A]}}),pe(e=>{if(f.value!==0)return;let a=F(c);if(!a)return;let p=new ResizeObserver(d=>{for(let B of d){let D=B.target.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&h.close()}});p.observe(a),e(()=>p.disconnect())}),()=>{let{id:e,open:a,initialFocus:p,...d}=t,B={...l,ref:c,id:e,role:v.value,"aria-modal":f.value===0?!0:void 0,"aria-labelledby":M.value,"aria-describedby":ae.value},D={open:f.value===0};return g($,{force:!0},()=>[g(G,()=>g(Oe,{target:c.value},()=>g($,{force:!1},()=>g(P,{initialFocus:p,containers:A,features:k.value?_(X.value,{parent:P.features.RestoreFocus,leaf:P.features.All&~P.features.FocusLock}):P.features.None},()=>g(J,{},()=>C({ourProps:B,theirProps:{...d,...l},slot:D,attrs:l,slots:u,visible:f.value===0,features:z.RenderStrategy|z.Static,name:"Dialog"})))))),g(Q)])}}}),We=O({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${b()}`}},setup(t,{attrs:n,slots:l}){let u=T("DialogOverlay");function i(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),u.close())}return()=>{let{id:r,...s}=t;return C({ourProps:{id:r,"aria-hidden":!0,onClick:i},theirProps:s,slot:{open:u.dialogState.value===0},attrs:n,slots:l,name:"DialogOverlay"})}}}),Ye=O({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${b()}`}},inheritAttrs:!1,setup(t,{attrs:n,slots:l,expose:u}){let i=T("DialogBackdrop"),r=y(null);return u({el:r,$el:r}),L(()=>{if(i.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:s,...v}=t,m={id:s,ref:r,"aria-hidden":!0};return g($,{force:!0},()=>g(G,()=>C({ourProps:m,theirProps:{...n,...v},slot:{open:i.dialogState.value===0},attrs:n,slots:l,name:"DialogBackdrop"})))}}}),_e=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${b()}`}},setup(t,{attrs:n,slots:l,expose:u}){let i=T("DialogPanel");u({el:i.panelRef,$el:i.panelRef});function r(s){s.stopPropagation()}return()=>{let{id:s,...v}=t,m={id:s,ref:i.panelRef,onClick:r};return C({ourProps:m,theirProps:v,slot:{open:i.dialogState.value===0},attrs:n,slots:l,name:"DialogPanel"})}}}),ze=O({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${b()}`}},setup(t,{attrs:n,slots:l}){let u=T("DialogTitle");return L(()=>{u.setTitleId(t.id),ue(()=>u.setTitleId(null))}),()=>{let{id:i,...r}=t;return C({ourProps:{id:i},theirProps:r,slot:{open:u.dialogState.value===0},attrs:n,slots:l,name:"DialogTitle"})}}}),Ge=Se;export{qe as Dialog,Ye as DialogBackdrop,Ge as DialogDescription,We as DialogOverlay,_e as DialogPanel,ze as DialogTitle};