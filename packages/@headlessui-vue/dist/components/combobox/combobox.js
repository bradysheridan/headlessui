import{useVirtualizer as re}from"@tanstack/vue-virtual";import{Fragment as de,cloneVNode as se,computed as b,defineComponent as j,h as W,inject as ee,nextTick as H,onMounted as X,onUnmounted as ve,provide as te,reactive as fe,ref as A,toRaw as L,watch as q,watchEffect as Y}from"vue";import{useControllable as pe}from'../../hooks/use-controllable.js';import{useFrameDebounce as be}from'../../hooks/use-frame-debounce.js';import{useId as z}from'../../hooks/use-id.js';import{useOutsideClick as ce}from'../../hooks/use-outside-click.js';import{useResolveButtonType as me}from'../../hooks/use-resolve-button-type.js';import{useTrackedPointer as xe}from'../../hooks/use-tracked-pointer.js';import{useTreeWalker as ge}from'../../hooks/use-tree-walker.js';import{Hidden as Se,Features as Oe}from'../../internal/hidden.js';import{State as G,useOpenClosed as Ce,useOpenClosedProvider as Re}from'../../internal/open-closed.js';import{Keys as k}from'../../keyboard.js';import{MouseButton as ye}from'../../mouse.js';import{history as oe}from'../../utils/active-element-history.js';import{Focus as w,calculateActiveIndex as le}from'../../utils/calculate-active-index.js';import{disposables as ae}from'../../utils/disposables.js';import{dom as x}from'../../utils/dom.js';import{sortByDomNode as Te}from'../../utils/focus-management.js';import{objectToFormEntries as Ie}from'../../utils/form.js';import{match as $}from'../../utils/match.js';import{getOwnerDocument as he}from'../../utils/owner.js';import{isMobile as Pe}from'../../utils/platform.js';import{Features as Q,compact as we,omit as Z,render as U}from'../../utils/render.js';function De(a,I){return a===I}var Ve=(u=>(u[u.Open=0]="Open",u[u.Closed=1]="Closed",u))(Ve||{}),Ee=(u=>(u[u.Single=0]="Single",u[u.Multi=1]="Multi",u))(Ee||{}),Ae=(O=>(O[O.Pointer=0]="Pointer",O[O.Focus=1]="Focus",O[O.Other=2]="Other",O))(Ae||{});let ne=Symbol("ComboboxContext");function N(a){let I=ee(ne,null);if(I===null){let u=new Error(`<${a} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,N),u}return I}let ie=Symbol("VirtualContext"),Fe=j({name:"VirtualProvider",setup(a,{slots:I}){let u=N("VirtualProvider"),O=b(()=>{let r=x(u.optionsRef);if(!r)return{start:0,end:0};let v=window.getComputedStyle(r);return{start:parseFloat(v.paddingBlockStart||v.paddingTop),end:parseFloat(v.paddingBlockEnd||v.paddingBottom)}}),t=re(b(()=>({scrollPaddingStart:O.value.start,scrollPaddingEnd:O.value.end,count:u.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return x(u.optionsRef)},overscan:12}))),e=b(()=>{var r;return(r=u.virtual.value)==null?void 0:r.options}),C=A(0);return q([e],()=>{C.value+=1}),te(ie,u.virtual.value?t:null),()=>[W("div",{style:{position:"relative",width:"100%",height:`${t.value.getTotalSize()}px`},ref:r=>{r&&u.activationTrigger.value!==0&&u.activeOptionIndex.value!==null&&u.virtual.value.options.length>u.activeOptionIndex.value&&t.value.scrollToIndex(u.activeOptionIndex.value)}},t.value.getVirtualItems().map(r=>se(I.default({option:u.virtual.value.options[r.index],open:u.comboboxState.value===0})[0],{key:`${C.value}-${r.index}`,"data-index":r.index,"aria-setsize":u.virtual.value.options.length,"aria-posinset":r.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${r.start}px)`,overflowAnchor:"none"}})))]}}),lt=j({name:"Combobox",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(a,{slots:I,attrs:u,emit:O}){let t=A(1),e=A(null),C=A(null),r=A(null),v=A(null),p=A({static:!1,hold:!1}),c=A([]),g=A(null),P=A(2),D=A(!1);function E(l=i=>i){let i=g.value!==null?c.value[g.value]:null,s=l(c.value.slice()),f=s.length>0&&s[0].dataRef.order.value!==null?s.sort((y,F)=>y.dataRef.order.value-F.dataRef.order.value):Te(s,y=>x(y.dataRef.domRef)),R=i?f.indexOf(i):null;return R===-1&&(R=null),{options:f,activeOptionIndex:R}}let M=b(()=>a.multiple?1:0),K=b(()=>a.nullable),[B,d]=pe(b(()=>a.modelValue),l=>O("update:modelValue",l),b(()=>a.defaultValue)),o=b(()=>B.value===void 0?$(M.value,{[1]:[],[0]:void 0}):B.value),m=null,S=null;function h(l){return $(M.value,{[0](){return d==null?void 0:d(l)},[1]:()=>{let i=L(n.value.value).slice(),s=L(l),f=i.findIndex(R=>n.compare(s,L(R)));return f===-1?i.push(s):i.splice(f,1),d==null?void 0:d(i)}})}let T=b(()=>{var l;return(l=a.virtual)==null?void 0:l.options});q([T],([l],[i])=>{if(n.virtual.value&&l&&i&&g.value!==null){let s=l.indexOf(i[g.value]);s!==-1?g.value=s:g.value=null}});let n={comboboxState:t,value:o,mode:M,compare(l,i){if(typeof a.by=="string"){let s=a.by;return(l==null?void 0:l[s])===(i==null?void 0:i[s])}return a.by===null?De(l,i):a.by(l,i)},calculateIndex(l){return n.virtual.value?a.by===null?n.virtual.value.options.indexOf(l):n.virtual.value.options.findIndex(i=>n.compare(i,l)):c.value.findIndex(i=>n.compare(i.dataRef.value,l))},defaultValue:b(()=>a.defaultValue),nullable:K,immediate:b(()=>a.immediate),virtual:b(()=>{var l;return a.virtual?{options:a.virtual.options,disabled:(l=a.virtual.disabled)!=null?l:()=>!1}:null}),inputRef:C,labelRef:e,buttonRef:r,optionsRef:v,disabled:b(()=>a.disabled),options:c,change(l){d(l)},activeOptionIndex:b(()=>{if(D.value&&g.value===null&&(n.virtual.value?n.virtual.value.options.length>0:c.value.length>0)){if(n.virtual.value){let i=n.virtual.value.options.findIndex(s=>{var f;return!((f=n.virtual.value)!=null&&f.disabled(s))});if(i!==-1)return i}let l=c.value.findIndex(i=>!i.dataRef.disabled);if(l!==-1)return l}return g.value}),activationTrigger:P,optionsPropsRef:p,closeCombobox(){D.value=!1,!a.disabled&&t.value!==1&&(t.value=1,g.value=null)},openCombobox(){if(D.value=!0,!a.disabled&&t.value!==0){if(n.value.value){let l=n.calculateIndex(n.value.value);l!==-1&&(g.value=l)}t.value=0}},setActivationTrigger(l){P.value=l},goToOption(l,i,s){D.value=!1,m!==null&&cancelAnimationFrame(m),m=requestAnimationFrame(()=>{if(a.disabled||v.value&&!p.value.static&&t.value===1)return;if(n.virtual.value){g.value=l===w.Specific?i:le({focus:l},{resolveItems:()=>n.virtual.value.options,resolveActiveIndex:()=>{var y,F;return(F=(y=n.activeOptionIndex.value)!=null?y:n.virtual.value.options.findIndex(J=>{var _;return!((_=n.virtual.value)!=null&&_.disabled(J))}))!=null?F:null},resolveDisabled:y=>n.virtual.value.disabled(y),resolveId(){throw new Error("Function not implemented.")}}),P.value=s!=null?s:2;return}let f=E();if(f.activeOptionIndex===null){let y=f.options.findIndex(F=>!F.dataRef.disabled);y!==-1&&(f.activeOptionIndex=y)}let R=l===w.Specific?i:le({focus:l},{resolveItems:()=>f.options,resolveActiveIndex:()=>f.activeOptionIndex,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});g.value=R,P.value=s!=null?s:2,c.value=f.options})},selectOption(l){let i=c.value.find(f=>f.id===l);if(!i)return;let{dataRef:s}=i;h(s.value)},selectActiveOption(){if(n.activeOptionIndex.value!==null){if(n.virtual.value)h(n.virtual.value.options[n.activeOptionIndex.value]);else{let{dataRef:l}=c.value[n.activeOptionIndex.value];h(l.value)}n.goToOption(w.Specific,n.activeOptionIndex.value)}},registerOption(l,i){let s=fe({id:l,dataRef:i});if(n.virtual.value){c.value.push(s);return}S&&cancelAnimationFrame(S);let f=E(R=>(R.push(s),R));g.value===null&&n.isSelected(i.value.value)&&(f.activeOptionIndex=f.options.indexOf(s)),c.value=f.options,g.value=f.activeOptionIndex,P.value=2,f.options.some(R=>!x(R.dataRef.domRef))&&(S=requestAnimationFrame(()=>{let R=E();c.value=R.options,g.value=R.activeOptionIndex}))},unregisterOption(l,i){if(m!==null&&cancelAnimationFrame(m),i&&(D.value=!0),n.virtual.value){c.value=c.value.filter(f=>f.id!==l);return}let s=E(f=>{let R=f.findIndex(y=>y.id===l);return R!==-1&&f.splice(R,1),f});c.value=s.options,g.value=s.activeOptionIndex,P.value=2},isSelected(l){return $(M.value,{[0]:()=>n.compare(L(n.value.value),L(l)),[1]:()=>L(n.value.value).some(i=>n.compare(L(i),L(l)))})},isActive(l){return g.value===n.calculateIndex(l)}};ce([C,r,v],()=>n.closeCombobox(),b(()=>t.value===0)),te(ne,n),Re(b(()=>$(t.value,{[0]:G.Open,[1]:G.Closed})));let V=b(()=>{var l;return(l=x(C))==null?void 0:l.closest("form")});return X(()=>{q([V],()=>{if(!V.value||a.defaultValue===void 0)return;function l(){n.change(a.defaultValue)}return V.value.addEventListener("reset",l),()=>{var i;(i=V.value)==null||i.removeEventListener("reset",l)}},{immediate:!0})}),()=>{var y,F,J;let{name:l,disabled:i,form:s,...f}=a,R={open:t.value===0,disabled:i,activeIndex:n.activeOptionIndex.value,activeOption:n.activeOptionIndex.value===null?null:n.virtual.value?n.virtual.value.options[(y=n.activeOptionIndex.value)!=null?y:0]:(J=(F=n.options.value[n.activeOptionIndex.value])==null?void 0:F.dataRef.value)!=null?J:null,value:o.value};return W(de,[...l!=null&&o.value!=null?Ie({[l]:o.value}).map(([_,ue])=>W(Se,we({features:Oe.Hidden,key:_,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,disabled:i,name:_,value:ue}))):[],U({theirProps:{...u,...Z(f,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:R,slots:I,attrs:u,name:"Combobox"})])}}}),at=j({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-combobox-label-${z()}`}},setup(a,{attrs:I,slots:u}){let O=N("ComboboxLabel");function t(){var e;(e=x(O.inputRef))==null||e.focus({preventScroll:!0})}return()=>{let e={open:O.comboboxState.value===0,disabled:O.disabled.value},{id:C,...r}=a,v={id:C,ref:O.labelRef,onClick:t};return U({ourProps:v,theirProps:r,slot:e,attrs:I,slots:u,name:"ComboboxLabel"})}}}),nt=j({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${z()}`}},setup(a,{attrs:I,slots:u,expose:O}){let t=N("ComboboxButton");O({el:t.buttonRef,$el:t.buttonRef});function e(v){t.disabled.value||(t.comboboxState.value===0?t.closeCombobox():(v.preventDefault(),t.openCombobox()),H(()=>{var p;return(p=x(t.inputRef))==null?void 0:p.focus({preventScroll:!0})}))}function C(v){switch(v.key){case k.ArrowDown:v.preventDefault(),v.stopPropagation(),t.comboboxState.value===1&&t.openCombobox(),H(()=>{var p;return(p=t.inputRef.value)==null?void 0:p.focus({preventScroll:!0})});return;case k.ArrowUp:v.preventDefault(),v.stopPropagation(),t.comboboxState.value===1&&(t.openCombobox(),H(()=>{t.value.value||t.goToOption(w.Last)})),H(()=>{var p;return(p=t.inputRef.value)==null?void 0:p.focus({preventScroll:!0})});return;case k.Escape:if(t.comboboxState.value!==0)return;v.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&v.stopPropagation(),t.closeCombobox(),H(()=>{var p;return(p=t.inputRef.value)==null?void 0:p.focus({preventScroll:!0})});return}}let r=me(b(()=>({as:a.as,type:I.type})),t.buttonRef);return()=>{var P,D;let v={open:t.comboboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:p,...c}=a,g={ref:t.buttonRef,id:p,type:r.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(P=x(t.optionsRef))==null?void 0:P.id,"aria-expanded":t.comboboxState.value===0,"aria-labelledby":t.labelRef.value?[(D=x(t.labelRef))==null?void 0:D.id,p].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:C,onClick:e};return U({ourProps:g,theirProps:c,slot:v,attrs:I,slots:u,name:"ComboboxButton"})}}}),it=j({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${z()}`}},emits:{change:a=>!0},setup(a,{emit:I,attrs:u,slots:O,expose:t}){let e=N("ComboboxInput"),C=b(()=>he(x(e.inputRef))),r={value:!1};t({el:e.inputRef,$el:e.inputRef});function v(){e.change(null);let o=x(e.optionsRef);o&&(o.scrollTop=0),e.goToOption(w.Nothing)}let p=b(()=>{var m;let o=e.value.value;return x(e.inputRef)?typeof a.displayValue!="undefined"&&o!==void 0?(m=a.displayValue(o))!=null?m:"":typeof o=="string"?o:"":""});X(()=>{q([p,e.comboboxState,C],([o,m],[S,h])=>{if(r.value)return;let T=x(e.inputRef);T&&((h===0&&m===1||o!==S)&&(T.value=o),requestAnimationFrame(()=>{var l;if(r.value||!T||((l=C.value)==null?void 0:l.activeElement)!==T)return;let{selectionStart:n,selectionEnd:V}=T;Math.abs((V!=null?V:0)-(n!=null?n:0))===0&&n===0&&T.setSelectionRange(T.value.length,T.value.length)}))},{immediate:!0}),q([e.comboboxState],([o],[m])=>{if(o===0&&m===1){if(r.value)return;let S=x(e.inputRef);if(!S)return;let h=S.value,{selectionStart:T,selectionEnd:n,selectionDirection:V}=S;S.value="",S.value=h,V!==null?S.setSelectionRange(T,n,V):S.setSelectionRange(T,n)}})});let c=A(!1);function g(){c.value=!0}function P(){ae().nextFrame(()=>{c.value=!1})}let D=be();function E(o){switch(r.value=!0,D(()=>{c.value||(r.value=!1)}),o.key){case k.Enter:if(r.value=!1,e.comboboxState.value!==0||c.value)return;if(o.preventDefault(),o.stopPropagation(),e.activeOptionIndex.value===null){e.closeCombobox();return}e.selectActiveOption(),e.mode.value===0&&e.closeCombobox();break;case k.ArrowDown:return r.value=!1,o.preventDefault(),o.stopPropagation(),$(e.comboboxState.value,{[0]:()=>e.goToOption(w.Next),[1]:()=>e.openCombobox()});case k.ArrowUp:return r.value=!1,o.preventDefault(),o.stopPropagation(),$(e.comboboxState.value,{[0]:()=>e.goToOption(w.Previous),[1]:()=>{e.openCombobox(),H(()=>{e.value.value||e.goToOption(w.Last)})}});case k.Home:if(o.shiftKey)break;return r.value=!1,o.preventDefault(),o.stopPropagation(),e.goToOption(w.First);case k.PageUp:return r.value=!1,o.preventDefault(),o.stopPropagation(),e.goToOption(w.First);case k.End:if(o.shiftKey)break;return r.value=!1,o.preventDefault(),o.stopPropagation(),e.goToOption(w.Last);case k.PageDown:return r.value=!1,o.preventDefault(),o.stopPropagation(),e.goToOption(w.Last);case k.Escape:if(r.value=!1,e.comboboxState.value!==0)return;o.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&o.stopPropagation(),e.nullable.value&&e.mode.value===0&&e.value.value===null&&v(),e.closeCombobox();break;case k.Tab:if(r.value=!1,e.comboboxState.value!==0)return;e.mode.value===0&&e.activationTrigger.value!==1&&e.selectActiveOption(),e.closeCombobox();break}}function M(o){I("change",o),e.nullable.value&&e.mode.value===0&&o.target.value===""&&v(),e.openCombobox()}function K(o){var S,h,T;let m=(S=o.relatedTarget)!=null?S:oe.find(n=>n!==o.currentTarget);if(r.value=!1,!((h=x(e.optionsRef))!=null&&h.contains(m))&&!((T=x(e.buttonRef))!=null&&T.contains(m))&&e.comboboxState.value===0)return o.preventDefault(),e.mode.value===0&&(e.nullable.value&&e.value.value===null?v():e.activationTrigger.value!==1&&e.selectActiveOption()),e.closeCombobox()}function B(o){var S,h,T;let m=(S=o.relatedTarget)!=null?S:oe.find(n=>n!==o.currentTarget);(h=x(e.buttonRef))!=null&&h.contains(m)||(T=x(e.optionsRef))!=null&&T.contains(m)||e.disabled.value||e.immediate.value&&e.comboboxState.value!==0&&(e.openCombobox(),ae().nextFrame(()=>{e.setActivationTrigger(1)}))}let d=b(()=>{var o,m,S,h;return(h=(S=(m=a.defaultValue)!=null?m:e.defaultValue.value!==void 0?(o=a.displayValue)==null?void 0:o.call(a,e.defaultValue.value):null)!=null?S:e.defaultValue.value)!=null?h:""});return()=>{var V,l,i,s,f,R,y;let o={open:e.comboboxState.value===0},{id:m,displayValue:S,onChange:h,...T}=a,n={"aria-controls":(V=e.optionsRef.value)==null?void 0:V.id,"aria-expanded":e.comboboxState.value===0,"aria-activedescendant":e.activeOptionIndex.value===null?void 0:e.virtual.value?(l=e.options.value.find(F=>!e.virtual.value.disabled(F.dataRef.value)&&e.compare(F.dataRef.value,e.virtual.value.options[e.activeOptionIndex.value])))==null?void 0:l.id:(i=e.options.value[e.activeOptionIndex.value])==null?void 0:i.id,"aria-labelledby":(R=(s=x(e.labelRef))==null?void 0:s.id)!=null?R:(f=x(e.buttonRef))==null?void 0:f.id,"aria-autocomplete":"list",id:m,onCompositionstart:g,onCompositionend:P,onKeydown:E,onInput:M,onFocus:B,onBlur:K,role:"combobox",type:(y=u.type)!=null?y:"text",tabIndex:0,ref:e.inputRef,defaultValue:d.value,disabled:e.disabled.value===!0?!0:void 0};return U({ourProps:n,theirProps:T,slot:o,attrs:u,slots:O,features:Q.RenderStrategy|Q.Static,name:"ComboboxInput"})}}}),ut=j({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(a,{attrs:I,slots:u,expose:O}){let t=N("ComboboxOptions"),e=`headlessui-combobox-options-${z()}`;O({el:t.optionsRef,$el:t.optionsRef}),Y(()=>{t.optionsPropsRef.value.static=a.static}),Y(()=>{t.optionsPropsRef.value.hold=a.hold});let C=Ce(),r=b(()=>C!==null?(C.value&G.Open)===G.Open:t.comboboxState.value===0);ge({container:b(()=>x(t.optionsRef)),enabled:b(()=>t.comboboxState.value===0),accept(p){return p.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});function v(p){p.preventDefault()}return()=>{var P,D,E;let p={open:t.comboboxState.value===0},c={"aria-labelledby":(E=(P=x(t.labelRef))==null?void 0:P.id)!=null?E:(D=x(t.buttonRef))==null?void 0:D.id,id:e,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0,onMousedown:v},g=Z(a,["hold"]);return U({ourProps:c,theirProps:g,slot:p,attrs:I,slots:t.virtual.value&&t.comboboxState.value===0?{...u,default:()=>[W(Fe,{},u.default)]}:u,features:Q.RenderStrategy|Q.Static,visible:r.value,name:"ComboboxOptions"})}}}),rt=j({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(a,{slots:I,attrs:u,expose:O}){let t=N("ComboboxOption"),e=`headlessui-combobox-option-${z()}`,C=A(null),r=b(()=>{var d;return a.disabled||((d=t.virtual.value)==null?void 0:d.disabled(a.value))});O({el:C,$el:C});let v=b(()=>{var d;return t.virtual.value?t.activeOptionIndex.value===t.calculateIndex(a.value):t.activeOptionIndex.value===null?!1:((d=t.options.value[t.activeOptionIndex.value])==null?void 0:d.id)===e}),p=b(()=>t.isSelected(a.value)),c=ee(ie,null),g=b(()=>({disabled:a.disabled,value:a.value,domRef:C,order:b(()=>a.order)}));X(()=>t.registerOption(e,g)),ve(()=>t.unregisterOption(e,v.value)),Y(()=>{let d=x(C);d&&(c==null||c.value.measureElement(d))}),Y(()=>{t.comboboxState.value===0&&v.value&&(t.virtual.value||t.activationTrigger.value!==0&&H(()=>{var d,o;return(o=(d=x(C))==null?void 0:d.scrollIntoView)==null?void 0:o.call(d,{block:"nearest"})}))});function P(d){d.preventDefault(),d.button===ye.Left&&(r.value||(t.selectOption(e),Pe()||requestAnimationFrame(()=>{var o;return(o=x(t.inputRef))==null?void 0:o.focus({preventScroll:!0})}),t.mode.value===0&&t.closeCombobox()))}function D(){var o;if(a.disabled||(o=t.virtual.value)!=null&&o.disabled(a.value))return t.goToOption(w.Nothing);let d=t.calculateIndex(a.value);t.goToOption(w.Specific,d)}let E=xe();function M(d){E.update(d)}function K(d){var m;if(!E.wasMoved(d)||a.disabled||(m=t.virtual.value)!=null&&m.disabled(a.value)||v.value)return;let o=t.calculateIndex(a.value);t.goToOption(w.Specific,o,0)}function B(d){var o;E.wasMoved(d)&&(a.disabled||(o=t.virtual.value)!=null&&o.disabled(a.value)||v.value&&(t.optionsPropsRef.value.hold||t.goToOption(w.Nothing)))}return()=>{let{disabled:d}=a,o={active:v.value,selected:p.value,disabled:d},m={id:e,ref:C,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onMousedown:P,onFocus:D,onPointerenter:M,onMouseenter:M,onPointermove:K,onMousemove:K,onPointerleave:B,onMouseleave:B},S=Z(a,["order","value"]);return U({ourProps:m,theirProps:S,slot:o,attrs:u,slots:I,name:"ComboboxOption"})}}});export{lt as Combobox,nt as ComboboxButton,it as ComboboxInput,at as ComboboxLabel,rt as ComboboxOption,ut as ComboboxOptions};