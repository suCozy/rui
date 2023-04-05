import{j,a as x}from"./jsx-runtime-93f93352.js";import{r as n}from"./index-ba39e096.js";import{$ as B,a as I,b as T,c as q}from"./index.module-6542499f.js";import{a as M,$ as E}from"./index.module-b6f71448.js";import{s as C,e as H,j as N,C as $,k as X}from"./variables-d39d1161.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3e1d4d7f.js";function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},b.apply(this,arguments)}function D(e){const t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function L(e){const[t,r]=n.useState(void 0);return B(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let s,a;if("borderBoxSize"in i){const d=i.borderBoxSize,l=Array.isArray(d)?d[0]:d;s=l.inlineSize,a=l.blockSize}else s=e.offsetWidth,a=e.offsetHeight;r({width:s,height:a})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else r(void 0)},[e]),t}const O="Switch",[W,le]=I(O),[F,U]=W(O),V=n.forwardRef((e,t)=>{const{__scopeSwitch:r,name:c,checked:o,defaultChecked:i,required:s,disabled:a,value:d="on",onCheckedChange:l,...w}=e,[u,g]=n.useState(null),A=M(t,f=>g(f)),k=n.useRef(!1),S=u?!!u.closest("form"):!0,[h=!1,z]=T({prop:o,defaultProp:i,onChange:l});return n.createElement(F,{scope:r,checked:h,disabled:a},n.createElement(E.button,b({type:"button",role:"switch","aria-checked":h,"aria-required":s,"data-state":P(h),"data-disabled":a?"":void 0,disabled:a,value:d},w,{ref:A,onClick:q(e.onClick,f=>{z(R=>!R),S&&(k.current=f.isPropagationStopped(),k.current||f.stopPropagation())})})),S&&n.createElement(G,{control:u,bubbles:!k.current,name:c,value:d,checked:h,required:s,disabled:a,style:{transform:"translateX(-100%)"}}))}),K="SwitchThumb",Y=n.forwardRef((e,t)=>{const{__scopeSwitch:r,...c}=e,o=U(K,r);return n.createElement(E.span,b({"data-state":P(o.checked),"data-disabled":o.disabled?"":void 0},c,{ref:t}))}),G=e=>{const{control:t,checked:r,bubbles:c=!0,...o}=e,i=n.useRef(null),s=D(r),a=L(t);return n.useEffect(()=>{const d=i.current,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"checked").set;if(s!==r&&u){const g=new Event("click",{bubbles:c});u.call(d,r),d.dispatchEvent(g)}},[s,r,c]),n.createElement("input",b({type:"checkbox","aria-hidden":!0,defaultChecked:r},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function P(e){return e?"checked":"unchecked"}const J=V,Q=Y,Z=C.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,ee=C(J)`
  all: unset;
  background-color: ${H};
  border-radius: 24px;
  position: relative;
  cursor: pointer;

  /* focus hover 디자인 미정 */
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
  &[data-state='checked'] {
    background-color: ${N};
  }

  ${({size:e})=>e==="small"&&$`
        width: 36px;
        height: 20px;
      `||e==="large"&&$`
        width: 64px;
        height: 38px;
      `};
`,te=C(Q)`
  display: block;
  background-color: ${X};
  border-radius: 50%;
  transition: transform 100ms ease-out;
  will-change: transform;

  ${({size:e})=>e==="small"&&$`
        width: 14px;
        height: 14px;
        transform: translateX(3px);
        &[data-state='checked'] {
          transform: translateX(19px);
        }
      `||e==="large"&&$`
        width: 28px;
        height: 28px;
        transform: translateX(5px);
        &[data-state='checked'] {
          transform: translateX(31px);
        }
      `};
`;function m({children:e,id:t,size:r="small",...c}){return j(Z,{htmlFor:t,children:[x(ee,{id:t,size:r,role:"switch","aria-label":e==null?void 0:e.toString(),...c,children:x(te,{size:r,"aria-hidden":"true"})}),e]})}try{m.displayName="Switch",m.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:re}=__STORYBOOK_MODULE_CLIENT_API__,ue={title:"Controls/Switch",component:m,args:{size:"small",checked:!1,onCheckedChange:()=>{}}},p={render:({onCheckedChange:e,...t})=>{const[{checked:r},c]=re();return x(m,{onCheckedChange:()=>c({checked:!r}),...t,children:"Children으로 라벨을 지정할 수 있습니다."})}};var v,_,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    onCheckedChange,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleCheck = () => updateArgs({
      checked: !checked
    });
    return <Switch onCheckedChange={handleCheck} {...args}>
        Children으로 라벨을 지정할 수 있습니다.
      </Switch>;
  }
}`,...(y=(_=p.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const be=["Default"];export{p as Default,be as __namedExportsOrder,ue as default};
//# sourceMappingURL=Switch.stories-7274ae0e.js.map
