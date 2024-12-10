import{Fragment as B,computed as d,defineComponent as y,h as b,inject as H,onMounted as M,provide as I,ref as v,watch as P}from"vue";import{useControllable as j}from'../../hooks/use-controllable.js';import{useId as G}from'../../hooks/use-id.js';import{useResolveButtonType as V}from'../../hooks/use-resolve-button-type.js';import{Hidden as F,Features as O}from'../../internal/hidden.js';import{Keys as S}from'../../keyboard.js';import{dom as A}from'../../utils/dom.js';import{attemptSubmit as N}from'../../utils/form.js';import{compact as $,omit as U,render as w}from'../../utils/render.js';import{Description as _,useDescriptions as q}from'../description/description.js';import{Label as z,useLabels as J}from'../label/label.js';let g=Symbol("GroupContext"),ie=y({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:p,attrs:o}){let a=v(null),f=J({name:"SwitchLabel",props:{htmlFor:d(()=>{var n;return(n=a.value)==null?void 0:n.id}),onClick(n){a.value&&(n.currentTarget.tagName==="LABEL"&&n.preventDefault(),a.value.click(),a.value.focus({preventScroll:!0}))}}}),t=q({name:"SwitchDescription"});return I(g,{switchRef:a,labelledby:f,describedby:t}),()=>w({theirProps:l,ourProps:{},slot:{},slots:p,attrs:o,name:"SwitchGroup"})}}),oe=y({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${G()}`},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(l,{emit:p,attrs:o,slots:a,expose:f}){let t=H(g,null),[i,n]=j(d(()=>l.modelValue),e=>p("update:modelValue",e),d(()=>l.defaultChecked));function s(){n(!i.value)}let k=v(null),u=t===null?k:t.switchRef,C=V(d(()=>({as:l.as,type:o.type})),u);f({el:u,$el:u});function E(e){e.preventDefault(),s()}function L(e){e.key===S.Space?(e.preventDefault(),s()):e.key===S.Enter&&N(e.currentTarget)}function D(e){e.preventDefault()}let c=d(()=>{var e,r;return(r=(e=A(u))==null?void 0:e.closest)==null?void 0:r.call(e,"form")});return M(()=>{P([c],()=>{if(!c.value||l.defaultChecked===void 0)return;function e(){n(l.defaultChecked)}return c.value.addEventListener("reset",e),()=>{var r;(r=c.value)==null||r.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{id:e,name:r,value:R,form:x,tabIndex:m,...h}=l,K={checked:i.value},T={id:e,ref:u,role:"switch",type:C.value,tabIndex:m===-1?0:m,"aria-checked":i.value,"aria-labelledby":t==null?void 0:t.labelledby.value,"aria-describedby":t==null?void 0:t.describedby.value,onClick:E,onKeyup:L,onKeypress:D};return b(B,[r!=null&&i.value!=null?b(F,$({features:O.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,form:x,disabled:h.disabled,name:r,value:R})):null,w({ourProps:T,theirProps:{...o,...U(h,["modelValue","defaultChecked"])},slot:K,attrs:o,slots:a,name:"Switch"})])}}}),ue=z,de=_;export{oe as Switch,de as SwitchDescription,ie as SwitchGroup,ue as SwitchLabel};
