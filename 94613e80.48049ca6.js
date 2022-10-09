(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return i})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return b}));var o=s(1),n=s(6),a=(s(0),s(148)),r={id:"how-to-style",title:"How to style",sidebar_label:"How to style"},i={id:"how-to-style",title:"How to style",description:"## Override css variables",source:"@site/docs/how-to-style.md",permalink:"/react-toastify/how-to-style",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/how-to-style.md",sidebar_label:"How to style",sidebar:"someSidebar",previous:{title:"Multi containers",permalink:"/react-toastify/multi-containers"},next:{title:"Dispatch toast outside of react component",permalink:"/react-toastify/dispatch-toast-outside-of-react-component"}},c=[{value:"Override css variables",id:"override-css-variables",children:[]},{value:"Override existing css classes",id:"override-existing-css-classes",children:[]},{value:"Build your own style using the scss files",id:"build-your-own-style-using-the-scss-files",children:[]},{value:"Passing css classes to component",id:"passing-css-classes-to-component",children:[]},{value:"Css classes as function",id:"css-classes-as-function",children:[]},{value:"How to style with styled-components",id:"how-to-style-with-styled-components",children:[{value:"Extend existing css classes",id:"extend-existing-css-classes",children:[]},{value:"Pass css classes to props",id:"pass-css-classes-to-props",children:[]}]},{value:"Styling from scratch",id:"styling-from-scratch",children:[]},{value:"Inject style on demand",id:"inject-style-on-demand",children:[]},{value:"Mobile",id:"mobile",children:[]}],l={rightToc:c};function b(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"override-css-variables"},"Override css variables"),Object(a.b)("p",null,"Below the list of the css variables that are exposed by the library. You can accomplish a lot by overriding some of them."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),':root {\n  --toastify-color-light: #fff;\n  --toastify-color-dark: #121212;\n  --toastify-color-info: #3498db;\n  --toastify-color-success: #07bc0c;\n  --toastify-color-warning: #f1c40f;\n  --toastify-color-error: #e74c3c;\n  --toastify-color-transparent: rgba(255, 255, 255, 0.7);\n\n  --toastify-icon-color-info: var(--toastify-color-info);\n  --toastify-icon-color-success: var(--toastify-color-success);\n  --toastify-icon-color-warning: var(--toastify-color-warning);\n  --toastify-icon-color-error: var(--toastify-color-error);\n\n  --toastify-toast-width: 320px;\n  --toastify-toast-background: #fff;\n  --toastify-toast-min-height: 64px;\n  --toastify-toast-max-height: 800px;\n  --toastify-font-family: sans-serif;\n  --toastify-z-index: 9999;\n\n  --toastify-text-color-light: #757575;\n  --toastify-text-color-dark: #fff;\n\n  //Used only for colored theme\n  --toastify-text-color-info: #fff;\n  --toastify-text-color-success: #fff;\n  --toastify-text-color-warning: #fff;\n  --toastify-text-color-error: #fff;\n\n  --toastify-spinner-color: #616161;\n  --toastify-spinner-color-empty-area: #e0e0e0;\n\n  // Used when no type is provided\n  // toast("**hello**")\n  --toastify-color-progress-light: linear-gradient(\n    to right,\n    #4cd964,\n    #5ac8fa,\n    #007aff,\n    #34aadc,\n    #5856d6,\n    #ff2d55\n  );\n  // Used when no type is provided\n  --toastify-color-progress-dark: #bb86fc;\n  --toastify-color-progress-info: var(--toastify-color-info);\n  --toastify-color-progress-success: var(--toastify-color-success);\n  --toastify-color-progress-warning: var(--toastify-color-warning);\n  --toastify-color-progress-error: var(--toastify-color-error);\n}\n')),Object(a.b)("h2",{id:"override-existing-css-classes"},"Override existing css classes"),Object(a.b)("p",null,"If overriding the css variables is not enough for you, you can override the existing CSS classes. Below, a list of the CSS classes used(classes used for animation and media query are omitted)"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-css"}),"/** Used to define container behavior: width, position: fixed etc... **/\n.Toastify__toast-container {\n}\n\n/** Used to define the position of the ToastContainer **/\n.Toastify__toast-container--top-left {\n}\n.Toastify__toast-container--top-center {\n}\n.Toastify__toast-container--top-right {\n}\n.Toastify__toast-container--bottom-left {\n}\n.Toastify__toast-container--bottom-center {\n}\n.Toastify__toast-container--bottom-right {\n}\n\n/** Classes for the displayed toast **/\n.Toastify__toast {\n}\n.Toastify__toast--rtl {\n}\n.Toastify__toast-body {\n}\n\n/** Used to position the icon **/\n.Toastify__toast-icon {\n}\n\n/** handle the notification color and the text color based on the theme **/\n.Toastify__toast-theme--dark {\n}\n.Toastify__toast-theme--light {\n}\n.Toastify__toast-theme--colored.Toastify__toast--default {\n}\n.Toastify__toast-theme--colored.Toastify__toast--info {\n}\n.Toastify__toast-theme--colored.Toastify__toast--success {\n}\n.Toastify__toast-theme--colored.Toastify__toast--warning {\n}\n.Toastify__toast-theme--colored.Toastify__toast--error {\n}\n\n.Toastify__progress-bar {\n}\n.Toastify__progress-bar--rtl {\n}\n.Toastify__progress-bar-theme--light {\n}\n.Toastify__progress-bar-theme--dark {\n}\n.Toastify__progress-bar--info {\n}\n.Toastify__progress-bar--success {\n}\n.Toastify__progress-bar--warning {\n}\n.Toastify__progress-bar--error {\n}\n/** colored notifications share the same progress bar color **/\n.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,\n.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,\n.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,\n.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {\n}\n\n/** Classes for the close button. Better use your own closeButton **/\n.Toastify__close-button {\n}\n.Toastify__close-button--default {\n}\n.Toastify__close-button > svg {\n}\n.Toastify__close-button:hover,\n.Toastify__close-button:focus {\n}\n")),Object(a.b)("h2",{id:"build-your-own-style-using-the-scss-files"},"Build your own style using the scss files"),Object(a.b)("p",null,"Grab the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/fkhadra/react-toastify/tree/master/scss"}),"scss directory")," of the repository and build your own stylesheet. If you just want to change some colors, most of them are defined inside the ",Object(a.b)("inlineCode",{parentName:"p"},"_variables.scss")," file."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"scss\n\u251c\u2500\u2500 _closeButton.scss\n\u251c\u2500\u2500 _progressBar.scss\n\u251c\u2500\u2500 _toast.scss\n\u251c\u2500\u2500 _toastContainer.scss\n\u251c\u2500\u2500 _variables.scss\n\u251c\u2500\u2500 \ud83d\udcc1 animations\n\u2502  \u251c\u2500\u2500 _bounce.scss\n\u2502  \u251c\u2500\u2500 _flip.scss\n\u2502  \u251c\u2500\u2500 _slide.scss\n\u2502  \u2514\u2500\u2500 _zoom.scss\n\u251c\u2500\u2500 main.scss\n\u2514\u2500\u2500 minimal.scss\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You built an amazing theme and you want to share it with the community, please let me know. Contributions are welcome!"))),Object(a.b)("h2",{id:"passing-css-classes-to-component"},"Passing css classes to component"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ToastContainer")," accept the following props for styling:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"className: applied to the container"),Object(a.b)("li",{parentName:"ul"},"toastClassName: applied on the toast wrapper"),Object(a.b)("li",{parentName:"ul"},"bodyClassName: applied on the toast body"),Object(a.b)("li",{parentName:"ul"},"progressClassName: applied on the progress bar"),Object(a.b)("li",{parentName:"ul"},"style: inline style applied to the container")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<ToastContainer className="foo" style={{ width: "2000px" }} />\n')),Object(a.b)("p",null,"When displaying a notification you can also set some css classes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"className: applied on the toast wrapper (this override ",Object(a.b)("inlineCode",{parentName:"li"},"toastClassName")," is set by the container )"),Object(a.b)("li",{parentName:"ul"},"bodyClassName: applied on the toast body (this override ",Object(a.b)("inlineCode",{parentName:"li"},"bodyClassName")," is set by the container )"),Object(a.b)("li",{parentName:"ul"},"progressClassName: applied on the progress bar (this override ",Object(a.b)("inlineCode",{parentName:"li"},"progressClassName")," is set by the container )"),Object(a.b)("li",{parentName:"ul"},"style: inline style applied to the toast")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'toast("Custom style", {\n  className: "black-background",\n  bodyClassName: "grow-font-size",\n  progressClassName: "fancy-progress-bar",\n});\n')),Object(a.b)("h2",{id:"css-classes-as-function"},"Css classes as function"),Object(a.b)("p",null,"You can also provide a function. This is what it looks like with tailwind css"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const contextClass = {\n  success: "bg-blue-600",\n  error: "bg-red-600",\n  info: "bg-gray-600",\n  warning: "bg-orange-400",\n  default: "bg-indigo-600",\n  dark: "bg-white-600 font-gray-300",\n};\n\nconst App = ()=> {\n  return (\n   <Main />\n   <ToastContainer\n      toastClassName={({ type }) => contextClass[type || "default"] +\n        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"\n      }\n      bodyClassName={() => "text-sm font-white font-med block p-3"}\n      position="bottom-left"\n      autoClose={3000}\n    />\n  )\n}\n')),Object(a.b)("h2",{id:"how-to-style-with-styled-components"},"How to style with styled-components"),Object(a.b)("h3",{id:"extend-existing-css-classes"},"Extend existing css classes"),Object(a.b)("p",null,"You can override the css classes with ",Object(a.b)("inlineCode",{parentName:"p"},"styled-components"),". You can find the list of the css classes used ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/react-toastify/how-to-style#override-existing-css-classes"}),"here"),". This is where you will also define the style for your notification."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport styled from "styled-components";\nimport { ToastContainer } from "react-toastify";\n\nconst StyledContainer = styled(ToastContainer)`\n  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity\n  &&&.Toastify__toast-container {\n  }\n  .Toastify__toast {\n  }\n  .Toastify__toast-body {\n  }\n  .Toastify__progress-bar {\n  }\n`;\n')),Object(a.b)("h3",{id:"pass-css-classes-to-props"},"Pass css classes to props"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const StyledToastContainer = styled(ToastContainer).attrs({\n  className: "toast-container",\n  toastClassName: "toast",\n  bodyClassName: "body",\n  progressClassName: "progress",\n})`\n  /* .toast-container */\n  width: 100%;\n\n  /* .toast is passed to toastClassName */\n  .toast {\n    background-color: var(--color-black);\n  }\n\n  button[aria-label="close"] {\n    display: none;\n  }\n\n  /* .body is passed to bodyClassName */\n  .body {\n  }\n\n  /* .progress is passed to progressClassName */\n  .progress {\n  }\n`;\n')),Object(a.b)("h2",{id:"styling-from-scratch"},"Styling from scratch"),Object(a.b)("p",null,"If you want to style from scratch simply include the bare minimum style and you are good to go."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'import "react-toastify/dist/ReactToastify.minimal.css";\n')),Object(a.b)("h2",{id:"inject-style-on-demand"},"Inject style on demand"),Object(a.b)("p",null,"If you don't have a css loader or you want to inject the style on demand(convenient with css module), the library provide a helper for that"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'import { injectStyle } from "react-toastify/dist/inject-style";\n\n// CALL IT ONCE IN YOUR APP\ninjectStyle();\n')),Object(a.b)("iframe",{src:"https://codesandbox.io/embed/react-toastify-inject-style-qfg0l?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"react-toastify-inject-style",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(a.b)("h2",{id:"mobile"},"Mobile"),Object(a.b)("p",null,"On mobile, the toast will take all the available width."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/5574267/28754040-ae7195ea-753d-11e7-86e1-f23c5e6bc531.gif",alt:"react toastiy mobile"}))))}b.isMDXComponent=!0},148:function(e,t,s){"use strict";s.d(t,"a",(function(){return d})),s.d(t,"b",(function(){return y}));var o=s(0),n=s.n(o);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)s=a[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)s=a[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i({},t,{},e)),s},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var s=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(s),f=o,y=d["".concat(r,".").concat(f)]||d[f]||p[f]||a;return s?n.a.createElement(y,i({ref:t},l,{components:s})):n.a.createElement(y,i({ref:t},l))}));function y(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=s.length,r=new Array(a);r[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<a;l++)r[l]=s[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,s)}f.displayName="MDXCreateElement"}}]);