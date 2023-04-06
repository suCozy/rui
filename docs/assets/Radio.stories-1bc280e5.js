import{j as u,a as t}from"./jsx-runtime-93f93352.js";import{C}from"./styles-aaa92a2e.js";import{s as g,j as k}from"./variables-d39d1161.js";import{F as f}from"./Flex-95fa49e5.js";import"./index-ba39e096.js";import"./_commonjsHelpers-042e6b4d.js";const _=g.input`
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:checked {
    accent-color: ${k};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;function a({children:d,disabled:e=!1,checked:o,onCheckedChange:c,id:n,name:i,...p}){return u(C,{htmlFor:n,children:[t(_,{id:n,name:i,type:"radio","aria-checked":o,"aria-label":i,tabIndex:0,checked:o,disabled:e,onChange:m=>{e||c(m)},...p}),d]})}try{a.displayName="Radio",a.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onCheckedChange:{defaultValue:null,description:"",name:"onCheckedChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const{useArgs:b}=__STORYBOOK_MODULE_CLIENT_API__,q={title:"Controls/Radio",component:a,args:{disabled:!1,required:!1,name:"Radio",checked:!1,onCheckedChange:()=>{}}},r={render:({onCheckedChange:d,...e})=>{const[{checked:o},c]=b(),n=()=>c({checked:!o});return u(f,{gap:"10px",justify:"start",align:"start",direction:"column",children:[t(a,{onCheckedChange:n,...e,children:"radio button1"}),t(a,{onCheckedChange:n,...e,children:"radio button2"}),t(a,{onCheckedChange:n,...e,children:"radio button3"})]})}};var s,l,h;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    return <Flex gap="10px" justify="start" align="start" direction="column">
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button1
        </Radio>
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button2
        </Radio>
        <Radio onCheckedChange={handleCheck} {...args}>
          radio button3
        </Radio>
      </Flex>;
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,q as default};
//# sourceMappingURL=Radio.stories-1bc280e5.js.map
