import{a}from"./jsx-runtime-93f93352.js";import{r as p}from"./index-ba39e096.js";import{i as l,a as g,g as u}from"./util-640a97cb.js";import{B as c}from"./index-6c1ec6ab.js";import"./_commonjsHelpers-042e6b4d.js";import"./control_favorite_on-4f971eb0.js";import"./icon_arrow_right_double_s-efcbd90a.js";import"./icon_arrow_right_s-bda9810d.js";import"./icon_close_s-d21862cb.js";import"./icon_spinner_s-5dce1a3f.js";import"./index-69c81ae4.js";import"./variables-d39d1161.js";import"./utils-3af668cd.js";import"./common-446df02b.js";import"./index-f3a581e2.js";const O={title:"Buttons/Button",component:c,argTypes:{icon:{control:"select",options:l},color:{control:"color"}}},o={render:({icon:t,...m})=>{const n=String(t),s=t&&g(n)&&p.createElement(u(n));return a(c,{...m,icon:s,children:"버튼"})}};var r,e,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    icon,
    ...args
  }) => {
    const iconString = String(icon);
    const iconElement = icon && isIconName(iconString) && createElement(getIconComponentFromName(iconString));
    return <Button {...args} icon={iconElement}>
        버튼
      </Button>;
  }
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const T=["Default"];export{o as Default,T as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-8a9d5ed2.js.map
