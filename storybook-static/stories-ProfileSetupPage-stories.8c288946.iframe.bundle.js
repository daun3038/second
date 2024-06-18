"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[288],{"./src/stories/ProfileSetupPage.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProfileSetupPage_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),Image=__webpack_require__("./src/stories/Image.jsx"),TextBox=__webpack_require__("./src/stories/TextBox.jsx"),Button=__webpack_require__("./src/stories/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProfileSetupPage=()=>{const[nickname,setNickname]=(0,react.useState)(""),[isSignUpButtonEnabled,setIsSignUpButtonEnabled]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsSignUpButtonEnabled(nickname.trim().length>0)}),[nickname]);return(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:"#fff",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,jsx_runtime.jsxs)("h2",{children:["맛있다에서 사용할 ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{style:{color:"#495EF6"},children:"닉네임과 프로필"}),"을 설정해주세요"]}),(0,jsx_runtime.jsxs)("div",{style:{position:"relative",width:"100px",height:"100px"},children:[(0,jsx_runtime.jsx)(Image.A,{src:"../../status=view.svg",alt:"프로필 이미지",width:"100px",height:"100px"}),(0,jsx_runtime.jsx)("img",{src:"../../Edit-icon.svg",alt:"편집 버튼",style:{position:"absolute",bottom:0,right:0,width:"30px",height:"30px",cursor:"pointer"},onClick:()=>alert("편집 기능 구현 필요")})]}),(0,jsx_runtime.jsxs)("div",{style:{marginTop:"20px"},children:[(0,jsx_runtime.jsxs)("h5",{children:["닉네임",(0,jsx_runtime.jsx)("br",{})]}),(0,jsx_runtime.jsx)(TextBox.A,{value:nickname,onChange:setNickname,maxLength:10,placeholder:"10글자 이내로 입력해주세요"})]}),(0,jsx_runtime.jsxs)(dist.N_,{to:"/survey-start",children:[" ",(0,jsx_runtime.jsx)(Button.$,{onClick:()=>{(nickname=>{localStorage.setItem("nickname",nickname)})(nickname),console.log("가입 완료:",nickname)},disabled:!isSignUpButtonEnabled,label:"가입 완료",type:"primary",size:"medium",style:{marginTop:"20px"}})]})]})},stories_ProfileSetupPage=ProfileSetupPage;ProfileSetupPage.__docgenInfo={description:"",methods:[],displayName:"ProfileSetupPage"};const ProfileSetupPage_stories={title:"Pages/ProfileSetupPage",component:stories_ProfileSetupPage},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{type,backgroundColor,size,label,...props}=_ref,mode="storybook-button--primary";switch(type){case"border":mode="storybook-button--border";break;case"warning":mode="storybook-button--warning"}return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",disabled:!1,onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Disabled status of Button",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},type:{description:"Type of Button",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'border'",computed:!1},{value:"'warning'",computed:!1}]},required:!1},selection:{description:"Selection type of Button",type:{name:"bool"},required:!1},width:{description:"width of Button",type:{name:"string"},required:!1}}}},"./src/stories/Image.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Image=_ref=>{let{src,alt,width,height,style,onClick,showLoader=!0}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{position:"relative",display:"inline-block",...style},children:[showLoader&&isLoading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"loader"})," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src,alt,width,height,onLoad:()=>{setIsLoading(!1)},onClick:()=>{onClick&&onClick()},style:{display:isLoading?"none":"block",cursor:onClick?"pointer":"default"}})]})},__WEBPACK_DEFAULT_EXPORT__=Image;Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{showLoader:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./src/stories/TextBox.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const allowedCharsMap={alphanumeric:"a-zA-Z0-9",numeric:"0-9",numericWithDecimal:"0-9.",alphabetic:"a-zA-Z"},TextBox=_ref=>{let{value:propValue,placeholder,maxLength,showCharCount,allowedCharsType,customText,onChange}=_ref;const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue||""),[charCount,setCharCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((propValue||"").length);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setValue(propValue),setCharCount((propValue||"").length)}),[propValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{position:"relative",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value,onChange:e=>{const inputValue=e.target.value,allowedChars=allowedCharsMap[allowedCharsType]||"";if(allowedChars){if(!new RegExp("^[".concat(allowedChars,"]*$")).test(inputValue))return}inputValue.length<=maxLength&&(setValue(inputValue),setCharCount(inputValue.length),"function"==typeof onChange&&onChange(inputValue))},placeholder,style:{width:"100%",padding:"10px",border:"none",borderBottom:"2px solid #ccc",transition:"border-bottom-color 0.3s ease",outline:"none"}}),customText&&!showCharCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",bottom:0,right:0,color:"#ccc",fontSize:"12px",marginRight:"10px",marginBottom:"8px"},children:customText}),showCharCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{position:"absolute",bottom:0,right:0,color:charCount>maxLength?"red":"#ccc",fontSize:"12px",marginRight:"10px",marginBottom:"8px"},children:[charCount,"/",maxLength]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"2px",backgroundColor:value?"#495EF6":"#ccc",transition:"background-color 0.3s ease"}})]})};TextBox.defaultProps={showCharCount:!0,allowedCharsType:"",customText:""};const __WEBPACK_DEFAULT_EXPORT__=TextBox;TextBox.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{showCharCount:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},allowedCharsType:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"enum",value:[{value:"'alphanumeric'",computed:!1},{value:"'numeric'",computed:!1},{value:"'numericWithDecimal'",computed:!1},{value:"'alphabetic'",computed:!1},{value:"''",computed:!1}]},required:!1},customText:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},maxLength:{description:"",type:{name:"number"},required:!0},onChange:{description:"",type:{name:"func"},required:!1}}}}}]);