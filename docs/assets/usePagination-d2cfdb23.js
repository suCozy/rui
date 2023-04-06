import{C as o,s as n,c as g,g as w,h as k,e as u,b as $}from"./variables-d39d1161.js";import{g as c}from"./index-f3a581e2.js";import{r as h}from"./index-ba39e096.js";const m=768,r=s=>o`
  @media only screen and (max-width: ${m}px) {
    ${s}
  }
`,f=s=>o`
  @media only screen and (min-width: ${m+1}px) {
    ${s}
  }
`;o`
  ${r(o`
    display: none !important;
  `)}
`;o`
  ${f(o`
    display: none !important;
  `)}
`;const D=n.nav`
  all: unset;
  display: inline-flex;
  list-style-type: none;
  box-sizing: border-box;
  user-select: none;
  margin: 0;
  padding: 0;
  gap: 16px;

  ${r(o`
    gap: 8px;
  `)};
`,F=n.div`
  all: unset;

  ${c("Body1_M")}
  gap: 16px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
`,O=n.span`
  ${c("Body1_B")}
`,S=n.ul`
  all: unset;
  display: inherit;
  gap: 4px;
`,E=n.li``,y=n.button`
  all: unset;
  appearance: none;
  box-sizing: border-box;

  ${c("Body1_M")}
  display: grid;
  place-items: center;

  min-width: 34px;
  height: 34px;
  cursor: pointer;
  color: ${g};
  border-radius: 4px;

  &:disabled {
    color: ${g};
    cursor: not-allowed;
    pointer-events: none;
  }
`,N=n(y)`
  ${f(o`
    &:hover {
      background-color: ${w};
    }
    &:active {
      background-color: ${k};
    }
  `)}

  ${r(o`
    min-width: 44px;
    height: 44px;
  `)}
`,L=n(y)`
  &:hover,
  &:focus {
    border: solid 1px ${u};
    border-radius: 4px;
    background-color: ${$};
  }

  ${r(o`
    min-width: 44px;
    height: 44px;
  `)}
`,T=n(L)`
  ${({selected:s})=>s&&o`
      border: solid 1px ${u};
      border-radius: 4px;
      background-color: ${$};
    `}
`;function j({itemCountPerPage:s,pageRangeDisplayed:t,totalItemCount:e,activePage:a}){const P=a%t===0?1:0,l=Math.max(1,Math.floor(a/t-P)*t+1),i=Math.ceil(e/s),d=h.useMemo(()=>Math.min(i,Math.ceil(a/t)*t),[a,t,i]),p=h.useMemo(()=>e?Math.ceil(e/s):1,[e,s]),b=l-1,x=d+1,B=b<1,M=x>i;return{firstPage:l,rangeLastPage:d,totalLastPage:p,totalPages:i,prevPage:b,nextPage:x,isPrevPageDisabled:B,isNextPageDisabled:M,isFirstPageDisabled:a===1,isLastPageDisabled:a===p}}export{N as A,F as C,D as P,O as a,S as b,E as c,T as d,j as u};
//# sourceMappingURL=usePagination-d2cfdb23.js.map
