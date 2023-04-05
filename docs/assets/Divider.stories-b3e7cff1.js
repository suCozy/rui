import{a as i,j as p}from"./jsx-runtime-93f93352.js";import{r as f}from"./index-ba39e096.js";import{$}from"./index.module-b6f71448.js";import{s as y,d as D}from"./variables-d39d1161.js";import{F as O}from"./Flex-95fa49e5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3e1d4d7f.js";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s.apply(this,arguments)}const l="horizontal",b=["horizontal","vertical"],h=f.forwardRef((e,t)=>{const{decorative:o,orientation:r=l,...d}=e,c=g(r)?r:l,x=o?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return f.createElement($.div,s({"data-orientation":c},x,d,{ref:t}))});h.propTypes={orientation(e,t,o){const r=e[t],d=String(r);return r&&!g(r)?new Error(_(d,o)):null}};function _(e,t){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`}function g(e){return b.includes(e)}const w=h,E=y(w)`
  background-color: ${({color:e=D})=>e};
  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`,a=e=>i(E,{...e});try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Common/Divider",component:a},n={render:()=>p("div",{style:{width:"100%",maxWidth:300,padding:"15px",background:"white"},children:[i("p",{style:{fontWeight:500},children:"리멤버 디자인시스템"}),i("p",{children:"An open-source design system library."}),i(a,{style:{margin:"15px 0"}}),p(O,{height:"20px",children:[i("p",{children:"Blog"}),i(a,{decorative:!0,orientation:"vertical",style:{margin:"0 15px"}}),i("p",{children:"Docs"}),i(a,{decorative:!0,orientation:"vertical",style:{margin:"0 15px"}}),i("p",{children:"Source"})]})]})};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: 300,
    padding: '15px',
    background: 'white'
  }}>
      <p style={{
      fontWeight: 500
    }}>리멤버 디자인시스템</p>
      <p>An open-source design system library.</p>
      <Divider style={{
      margin: '15px 0'
    }} />
      <Flex height="20px">
        <p>Blog</p>
        <Divider decorative orientation="vertical" style={{
        margin: '0 15px'
      }} />
        <p>Docs</p>
        <Divider decorative orientation="vertical" style={{
        margin: '0 15px'
      }} />
        <p>Source</p>
      </Flex>
    </div>
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const P=["Default"];export{n as Default,P as __namedExportsOrder,z as default};
//# sourceMappingURL=Divider.stories-b3e7cff1.js.map
