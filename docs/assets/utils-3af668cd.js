import{i as o}from"./common-446df02b.js";function h(r){return r.slice(4,-1)}function c(r){return`var(${h(r)}__rgb)`}function g(r){let e=r.replace("#","");if(e.length!==3&&e.length!==6)throw new Error("Invalid hex color");e.length===3&&(e=[...e].map(t=>t.repeat(2)).join());const[,n,a,i]=e.split(/(..)(..)(..)/).map(t=>parseInt(t,16));return`${n},${a},${i}`}function l(){return!o()&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}export{c as a,l as g,g as h};
//# sourceMappingURL=utils-3af668cd.js.map
