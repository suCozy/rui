import{a as u,j as x,F as v}from"./jsx-runtime-93f93352.js";import{r as m}from"./index-ba39e096.js";import{S as _}from"./index-69c81ae4.js";import{c,k,e as B,s as $,C as i,m as n,p as g,n as S}from"./variables-d39d1161.js";import{a as C}from"./utils-3af668cd.js";import{g as N}from"./index-f3a581e2.js";const l={small:{typography:"Body2_M",height:"32px",minWidth:"68px",padding:"0 16px"},medium:{typography:"Body1_M",height:"36px",minWidth:"78px",padding:"0 20px"},large:{typography:"Headline4_M",height:"44px",minWidth:"108px",padding:"0 20px"},xLarge:{typography:"Headline4_M",height:"52px",minWidth:"116px",padding:"0 24px"}},d={primary:{backgroundColor:c,color:k},outline:{backgroundColor:B,color:c}},q={small:"small",medium:"small",large:"medium",xLarge:"medium"},M={small:"4px",medium:"4px",large:"8px",xLarge:"8px"},V=$.button(({variant:e,$size:a,layout:r,$color:o})=>[i`
      all: unset;
      appearance: none;
      box-sizing: border-box;
      user-select: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      display: ${r==="inline"?"inline-flex":"flex"};
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      gap: ${M[a]};

      ${N(l[a].typography)}
      ${r==="fullBlock"&&"width: 100%;"}
      min-width: ${l[a].minWidth};
      height: ${l[a].height};
      padding: ${l[a].padding};
      border-radius: 4px;

      color: ${(e==="outline"?o:null)??d[e].color};

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
        background-color: rgba(${C(g)});
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
    `,e==="primary"&&i`
        background-color: ${o??d[e].backgroundColor};
        &:disabled {
          background-color: ${n};
        }
        &::before {
          background-color: ${g};
        }
      `,e==="outline"&&i`
        border: 1px solid ${o??d[e].backgroundColor};
        &:disabled {
          border-color: ${n};
          color: ${n};
        }
        &::before {
          background-color: ${o??S};
        }
      `]),w=({children:e,color:a,size:r="small",variant:o="primary",layout:f="block",isLoading:t=!1,icon:p,iconPosition:s,...h},b)=>u(V,{$color:a,$size:r,variant:o,layout:f,isLoading:t,"aria-live":"polite","aria-busy":t,ref:b,...h,children:t?u(_,{size:q[r]}):x(v,{children:[s==="left"&&p,e,s==="right"&&p]})}),y=m.memo(m.forwardRef(w));try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xLarge"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"outline"'}]}},layout:{defaultValue:{value:"block"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'},{value:'"fullBlock"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{y as B};
//# sourceMappingURL=index-6c1ec6ab.js.map
