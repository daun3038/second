"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[413],{"./src/stories/OnBoardingPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OnBoardingPage_stories});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),Button=__webpack_require__("./src/stories/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OnboardingPage=()=>(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:"#5467f5",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,jsx_runtime.jsx)("img",{src:"../../Logo.svg",alt:"맛있다 로고",style:{width:"200px",marginBottom:"20px"}}),(0,jsx_runtime.jsx)(dist.N_,{to:"/profile-setup",children:(0,jsx_runtime.jsx)(Button.$,{label:"시작하기",type:"border"})})]}),OnBoardingPage=OnboardingPage;OnboardingPage.__docgenInfo={description:"",methods:[],displayName:"OnboardingPage"};const OnBoardingPage_stories={title:"Pages/OnBoardingPage",component:OnBoardingPage,parameters:{viewport:{defaultViewport:"iPhone14"}}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{type,backgroundColor,size,label,...props}=_ref,mode="storybook-button--primary";switch(type){case"border":mode="storybook-button--border";break;case"warning":mode="storybook-button--warning"}return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",disabled:!1,onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled status of Button",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},type:{description:"Type of Button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'border'",computed:!1},{value:"'warning'",computed:!1}]},required:!1},selection:{description:"Selection type of Button",type:{name:"bool"},required:!1},width:{description:"width of Button",type:{name:"string"},required:!1}}}}}]);