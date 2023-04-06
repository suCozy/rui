import{j as h,F as k,a as r}from"./jsx-runtime-93f93352.js";import{r as a}from"./index-ba39e096.js";import{S as q,b as M,i as V,a as $,g as S}from"./util-640a97cb.js";import{s,e as C,k as F,C as b,r as c,c as x,g as j,l as D}from"./variables-d39d1161.js";import{$ as O}from"./index.module-b6f71448.js";import{g as m,e as L}from"./index-f3a581e2.js";import"./_commonjsHelpers-042e6b4d.js";import"./control_favorite_on-4f971eb0.js";import"./icon_arrow_right_double_s-efcbd90a.js";import"./icon_arrow_right_s-bda9810d.js";import"./icon_close_s-d21862cb.js";import"./icon_spinner_s-5dce1a3f.js";import"./index-3e1d4d7f.js";const T=()=>Math.random().toString(36).slice(2,9);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}const H=a.forwardRef((e,t)=>a.createElement(O.label,y({},e,{ref:t,onMouseDown:n=>{var o;(o=e.onMouseDown)===null||o===void 0||o.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),z=s.div`
  display: flex;
  align-items: center;
  border: 1px solid ${C};
  border-radius: 4px;
  padding: 0 12px;
  background-color: ${F};
  gap: 8px;

  transition: border-color 0.2s, background-color 0.2s;

  ${({hasError:e,disabled:t})=>[e?b`
          border-color: ${c};
        `:b`
          &:focus-within {
            border-color: ${x};
          }
        `,t&&b`
        background-color: ${j};
      `]}
`,A=s.input`
  ${m("Body1_M")}

  display: block;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  border: 0;
  color: ${x};
  background-color: transparent;

  &:placeholder-shown {
    ${L()}
  }

  &::placeholder {
    color: ${D};
  }

  &:focus {
    outline: none;
  }
`,G=s(H)`
  ${m("Headline4_B")}
  display: block;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  > mark {
    all: unset;
    color: ${c};
  }
`,J=s.div`
  ${m("Body2_M")}
  color: ${c};

  margin-top: 8px;
`,K=s.span`
  ${m("Body1_M")}
  color: ${({textColor:e})=>({roleRed:c,contents000:x,contents300:C})[e??"roleRed"]??c};
  white-space: nowrap;
`,Q=s.button`
  all: unset;
  appearance: none;
  cursor: pointer;

  > svg {
    display: block;
  }
`,U=({className:e,label:t,leftElement:n,rightElement:o,disabled:i,hintText:d,hintTextColor:g,errorMessage:f,...l},N)=>{const[I]=a.useState(T()),[E]=a.useState(T()),[w,P]=a.useState(!1),B=l.type==="password"&&l.hasTogglePasswordVisibilityButton&&w;return h(k,{children:[t&&h(G,{id:E,htmlFor:I,children:[t,l.required&&r("mark",{children:"*"})]}),h(z,{disabled:i,hasError:!!f,className:e,children:[n,r(A,{disabled:i,id:I,"aria-labelledby":t?E:void 0,...l,type:B?"text":l.type??"text",ref:N}),d&&r(K,{textColor:g,children:d}),l.type==="password"&&l.hasTogglePasswordVisibilityButton&&r(W,{value:w,onChange:P}),o]}),f&&r(J,{children:f})]})},W=({value:e,onChange:t})=>r(Q,{role:"switch","aria-checked":e?"true":"false","aria-label":"비밀번호 표시",onClick:()=>{t(!e)},children:e?r(q,{}):r(M,{})}),u=a.memo(a.forwardRef(U));try{u.displayName="TextInput",u.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},hintTextColor:{defaultValue:null,description:"",name:"hintTextColor",required:!1,type:{name:"enum",value:[{value:'"roleRed"'},{value:'"contents000"'},{value:'"contents300"'}]}},leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"ReactNode"}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},hasTogglePasswordVisibilityButton:{defaultValue:null,description:"",name:"hasTogglePasswordVisibilityButton",required:!0,type:{name:"boolean"}}}}}catch{}const de={title:"Example/Input",component:u,argTypes:{type:{control:"select",options:["text","email","number","search","tel","url","password"],defaultValue:"text"},hasTogglePasswordVisibilityButton:{type:"boolean",defaultValue:!1,if:{arg:"type",eq:"password"}},placeholder:{defaultValue:"PlaceHolder",type:"string"},hintText:{type:"string"},hintTextColor:{control:"select",options:["roleRed","contents000","contents300"],defaultValue:"roleRed"},leftElement:{control:"select",options:V},rightElement:{control:"select",options:V},label:{type:"string"},required:{type:"boolean",defaultValue:!1},errorMessage:{type:"string"},disabled:{type:"boolean",defaultValue:!1}}},p={render:({leftElement:e,rightElement:t,...n})=>{const o=String(e),i=String(t),d=e&&$(o)&&a.createElement(S(o)),g=t&&$(i)&&a.createElement(S(i));return r(u,{...n,leftElement:d,rightElement:g})}};var R,_,v;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ({
    leftElement,
    rightElement,
    ...args
  }) => {
    const leftIconString = String(leftElement);
    const RightIconString = String(rightElement);
    const renderedLeftElement = leftElement && isIconName(leftIconString) && createElement(getIconComponentFromName(leftIconString));
    const renderedRightElement = rightElement && isIconName(RightIconString) && createElement(getIconComponentFromName(RightIconString));
    return <TextInput {...args} leftElement={renderedLeftElement} rightElement={renderedRightElement} />;
  }
}`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const pe=["Default"];export{p as Default,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=TextInput.stories-cbb9ddda.js.map
