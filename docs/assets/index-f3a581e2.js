import{C as e}from"./variables-d39d1161.js";const l={Headline2_B:{fontSize:24,lineHeight:34,fontWeight:600},Headline3_B:{fontSize:20,lineHeight:26,fontWeight:600},Headline4_B:{fontSize:16,lineHeight:26,fontWeight:600},Headline4_M:{fontSize:16,lineHeight:26,fontWeight:400},Body1_B:{fontSize:14,lineHeight:24,fontWeight:600},Body1_M:{fontSize:14,lineHeight:24,fontWeight:400},Body2_B:{fontSize:12,lineHeight:19,fontWeight:600},Body2_M:{fontSize:12,lineHeight:19,fontWeight:400},Caption_B:{fontSize:10,lineHeight:14,fontWeight:600}},r="Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",f=t=>{const{fontSize:i,lineHeight:o,fontWeight:n}=l[t];return e`
    font-size: ${i}px;
    line-height: ${o}px;
    font-weight: ${n};
    font-family: ${r};
  `};e`
  white-space: pre-line;
  word-break: normal;
  word-wrap: break-word;
`;e`
  word-break: break-all;
  word-wrap: break-word;
`;e`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;const a=e`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h=(t=1)=>t===1?a:e`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${t};
  `;export{l as T,h as e,f as g};
//# sourceMappingURL=index-f3a581e2.js.map
