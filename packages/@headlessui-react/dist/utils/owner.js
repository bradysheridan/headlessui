import{env as n}from'./env.js';function u(r){return n.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}export{u as getOwnerDocument};
