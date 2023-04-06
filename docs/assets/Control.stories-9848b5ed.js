import{a as l,j as v}from"./jsx-runtime-93f93352.js";import{S as g,a as _,b,c as y,d as O,e as x,f as q,g as I}from"./control_favorite_on-4f971eb0.js";import{j as S,e as V}from"./variables-d39d1161.js";import{C as M,a as A}from"./styles-aaa92a2e.js";import"./index-ba39e096.js";import"./_commonjsHelpers-042e6b4d.js";const i={check:{on:g,off:_},checkbox:{on:b,off:y},favorite:{on:O,off:x},bookmark:{on:q,off:I}};function s({checked:e,size:n,option:o}){const a=n==="small"?16:24,r=e?i[o].on:i[o].off;return l(r,{width:a,height:a,"aria-hidden":"true",color:e?S:V})}try{s.displayName="ControlOptionIcon",s.__docgenInfo={description:"",displayName:"ControlOptionIcon",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"check"'},{value:'"favorite"'},{value:'"bookmark"'}]}}}}}catch{}function c({children:e,checked:n,disabled:o=!1,size:a="medium",option:r="checkbox",onCheckedChange:h,id:d,name:f,...C}){return v(M,{htmlFor:d,children:[l(A,{id:d,type:"checkbox","aria-checked":n,"aria-label":f,tabIndex:0,checked:n,disabled:o,onChange:k=>{o||h(k)},...C}),l(s,{checked:n,size:a,option:r}),e]})}try{c.displayName="Control",c.__docgenInfo={description:"",displayName:"Control",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"",name:"onCheckedChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},option:{defaultValue:{value:"checkbox"},description:"",name:"option",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"check"'},{value:'"favorite"'},{value:'"bookmark"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const{useArgs:N}=__STORYBOOK_MODULE_CLIENT_API__,L={title:"Controls/Control",component:c,args:{disabled:!1,required:!1,name:"Control",option:"checkbox",checked:!1,onCheckedChange:()=>{}}},t={render:({onCheckedChange:e,...n})=>{const[{checked:o},a]=N();return l(c,{onCheckedChange:()=>a({checked:!o}),...n,children:"Children으로 라벨을 지정할 수 있습니다."})}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <Control onCheckedChange={handleCheck} {...args}>
        Children으로 라벨을 지정할 수 있습니다.
      </Control>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,L as default};
//# sourceMappingURL=Control.stories-9848b5ed.js.map
