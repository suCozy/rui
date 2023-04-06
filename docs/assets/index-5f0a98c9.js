import{a as u,j as x,F as v}from"./jsx-runtime-93f93352.js";import{r as m}from"./index-ba39e096.js";import{S as _}from"./index-69c81ae4.js";import{c,k,e as B,s as $,C as t,p as g,m as n,n as S}from"./variables-d39d1161.js";import{g as C}from"./index-f3a581e2.js";const r={small:{typography:"Body2_M",height:"32px",minWidth:"68px",padding:"0 16px"},medium:{typography:"Body1_M",height:"36px",minWidth:"78px",padding:"0 20px"},large:{typography:"Headline4_M",height:"44px",minWidth:"108px",padding:"0 20px"},xLarge:{typography:"Headline4_M",height:"52px",minWidth:"116px",padding:"0 24px"}},d={primary:{backgroundColor:c,color:k},outline:{backgroundColor:B,color:c}},N={small:"small",medium:"small",large:"medium",xLarge:"medium"},w={small:"4px",medium:"4px",large:"8px",xLarge:"8px"},q=$.button(({variant:e,$size:o,layout:l,$color:a})=>[t`
      all: unset;
      appearance: none;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;

      display: ${l==="inline"?"inline-flex":"flex"};
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      gap: ${w[o]};

      ${C(r[o].typography)}
      ${l==="fullBlock"&&"width: 100%;"}
      min-width: ${r[o].minWidth};
      height: ${r[o].height};
      padding: ${r[o].padding};
      border-radius: 4px;

      color: ${(e==="outline"?a:null)??d[e].color};

      &:disabled {
        cursor: not-allowed;

        &::before {
          display: none;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${g};
        opacity: 0;
        pointer-events: none;

        transition: opacity 0.2s;
      }
      @media (hover: hover) {
        &:hover::before {
          opacity: 0.1;
        }
      }
      &:active::before {
        opacity: 0.2;
      }
    `,e==="primary"&&t`
        background-color: ${a??d[e].backgroundColor};
        &:disabled {
          background-color: ${n};
        }
        &::before {
          background-color: ${g};
          mix-blend-mode: luminosity;
        }
      `,e==="outline"&&t`
        border: 1px solid ${a??d[e].backgroundColor};
        &:disabled {
          border-color: ${n};
          color: ${n};
        }
        &::before {
          background-color: ${a??S};
          mix-blend-mode: luminosity;
        }
      `]),M=({children:e,color:o,size:l="small",variant:a="primary",layout:h="block",isLoading:i=!1,icon:p,iconPosition:s,...f},b)=>u(q,{$color:o,$size:l,variant:a,layout:h,isLoading:i,"aria-live":"polite","aria-busy":i,ref:b,...f,children:i?u(_,{size:N[l]}):x(v,{children:[s==="left"&&p,e,s==="right"&&p]})}),y=m.memo(m.forwardRef(M));try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'}]}},layout:{defaultValue:{value:"block"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'},{value:'"fullBlock"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{y as B};
//# sourceMappingURL=index-5f0a98c9.js.map
