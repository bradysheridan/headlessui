import{useRef as l}from"react";import{getTextValue as i}from'../utils/get-text-value.js';import{useEvent as o}from'./use-event.js';function s(c){let t=l(""),r=l("");return o(()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=i(e).trim().toLowerCase();return t.current=u,r.current=n,n})}export{s as useTextValue};
