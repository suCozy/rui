import{a}from"./jsx-runtime-93f93352.js";import{U as c,s as m,C as i}from"./variables-d39d1161.js";import{S as p,a as u}from"./icon_spinner_s-5dce1a3f.js";const d=c`
  to { transform: rotate(360deg); };
`,f=m.div(({$color:e,layout:n})=>i`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    ${n==="full"&&i`
      width: 100%;
      height: 100%;
    `}

    ${e&&`color: ${e};`};

    > svg {
      animation: ${d} 1.5s linear infinite;
    }
  `),S={medium:p,small:u},l=({size:e="small",className:n,color:r,layout:o="block"})=>{const t=typeof e=="string",s=S[t?e:"small"];return a(f,{className:n,$color:r,layout:o,children:a(s,{...!t&&{width:e,height:e}})})};try{l.displayName="Spinner",l.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"SpinnerSize"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"block"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"full"'}]}}}}}catch{}export{l as S};
//# sourceMappingURL=index-69c81ae4.js.map
