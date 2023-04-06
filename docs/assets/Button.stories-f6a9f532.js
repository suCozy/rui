import{a}from"./jsx-runtime-93f93352.js";import{r as p}from"./index-ba39e096.js";import{i as l,a as g,g as u}from"./util-640a97cb.js";import{B as i}from"./index-5f0a98c9.js";import"./_commonjsHelpers-042e6b4d.js";import"./control_favorite_on-4f971eb0.js";import"./icon_arrow_right_double_s-efcbd90a.js";import"./icon_arrow_right_s-bda9810d.js";import"./icon_close_s-d21862cb.js";import"./icon_spinner_s-5dce1a3f.js";import"./index-69c81ae4.js";import"./variables-d39d1161.js";import"./index-f3a581e2.js";const j={title:"Buttons/Button",component:i,argTypes:{icon:{control:"select",options:l},color:{control:"color"}}},o={render:({icon:t,...m})=>{const n=String(t),s=t&&g(n)&&p.createElement(u(n));return a(i,{...m,icon:s,children:"버튼"})}};var r,e,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(e=o.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};const y=["Default"];export{o as Default,y as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-f6a9f532.js.map
