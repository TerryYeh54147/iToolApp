"use strict";(self.webpackChunktool_app=self.webpackChunktool_app||[]).push([[249],{4376:(e,o,r)=>{r.r(o),r.d(o,{default:()=>b});var t=r(1861),l=r(5043),n=r(579);const a=(0,l.createContext)(["default",e=>{}]),s=e=>{let{children:o}=e;const[r,t]=(0,l.useState)("default");return(0,n.jsx)(a.Provider,{value:[r,t],children:o})},d=()=>(0,l.useContext)(a);var c=r(1499);const i=()=>{const[e,o]=d(),r=(e,r)=>{"function"===typeof o&&o(r),e.dataTransfer.effectAllowed="move"},t="border-2 rounded p-2";return(0,n.jsxs)("aside",{className:"space-y-2",children:[(0,n.jsx)("div",{className:"description",children:"You can drag these nodes to the pane on the right."}),(0,n.jsx)("div",{className:`${t} border-blue-500`,onDragStart:e=>r(e,"input"),draggable:!0,children:"Input Node"}),(0,n.jsx)("div",{className:`${t} border-zinc-500`,onDragStart:e=>r(e,"color-selector"),draggable:!0,children:"Color Picker"}),(0,n.jsx)("div",{className:`${t} border-pink-500`,onDragStart:e=>r(e,"output"),draggable:!0,children:"Output Node"})]})},u=[],p={"position-logger":(0,l.memo)((function(e){let{positionAbsoluteX:o,positionAbsoluteY:r,data:l}=e;const a=`${Math.round(o)}px`,s=`${Math.round(r)}px`;return(0,n.jsxs)("div",{className:"react-flow__node-default",children:[l.label&&(0,n.jsx)("div",{children:l.label}),(0,n.jsxs)("div",{children:[a," ",s]}),(0,n.jsx)(t.h7,{type:"source",position:c.yX.Bottom})]})})),"color-selector":(0,l.memo)((e=>{let{data:o,isConnectable:r}=e;return(0,n.jsxs)("div",{className:"border-zinc-500 border-2 rounded p-2 bg-gray-400",children:[(0,n.jsxs)("div",{className:"text-wrap text-center",children:[(0,n.jsxs)("div",{className:"font-bold",children:[" ",o.label]}),(0,n.jsx)("input",{className:"nodrag",type:"color",onChange:o.onColorChange,defaultValue:o.color})]}),(0,n.jsx)(t.h7,{type:"source",position:c.yX.Right,id:"b",style:{background:"#555"},isConnectable:r})]})}))},f={};var h=r(2580);let x=0;function g(){const e=(0,l.useRef)(null),[o,r,a]=(0,t.ck)(u),[s,g,b]=(0,t.fM)([]),{screenToFlowPosition:v}=(0,t.VH)(),[j,m]=d(),C=(0,l.useCallback)((e=>g((o=>(0,c.rN)(e,o)))),[g]),y=(0,l.useCallback)((e=>{e.preventDefault(),e.dataTransfer.dropEffect="move"}),[]),N=(0,l.useCallback)((e=>{if(e.preventDefault(),!j)return;const o=v({x:e.clientX,y:e.clientY}),t={id:"dndnode_"+x++,type:j,position:o,data:{label:`${j} node`,color:k,onColorChange:D}};r((e=>[...e,t]))}),[v,j]),[k,w]=(0,l.useState)("#ffffff"),D=e=>{const o=e.target.value;w(o),r((e=>e.map((e=>"color-selector"===e.type?{...e,data:{...e.data,color:o}}:e))))};return(0,l.useEffect)((()=>{let e=[...u,{id:"e",type:"color-selector",position:{x:150,y:200},data:{label:"Color Picker",color:k,onColorChange:D}}];r(e)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{id:"dndFlow",className:"flex flex-row flex-wrap-reverse md:flex-nowrap",children:[(0,n.jsx)("div",{className:"place-center w-full h-[84dvh]",ref:e,children:(0,n.jsxs)(t.Gc,{colorMode:h.z?"dark":"light",nodes:o,nodeTypes:p,onNodesChange:a,edges:s,edgeTypes:f,onEdgesChange:b,onConnect:C,onDrop:N,onDragOver:y,fitView:!0,children:[(0,n.jsx)(t.VS,{}),(0,n.jsx)(t.of,{nodeStrokeColor:e=>"input"===e.type?"#0041d0":"output"===e.type?"#ff0072":"#000000",nodeColor:e=>{var o;return"color-selector"===e.type?null===(o=e.data)||void 0===o?void 0:o.color:"#fff"}}),(0,n.jsx)(t.H2,{})]})}),(0,n.jsx)("div",{className:"border-4 p-2 w-full md:max-w-fit",children:(0,n.jsx)(i,{})})]})})}r(411);const b=()=>(0,n.jsx)(t.Ln,{children:(0,n.jsx)(s,{children:(0,n.jsx)(g,{})})})}}]);
//# sourceMappingURL=249.9155d828.chunk.js.map