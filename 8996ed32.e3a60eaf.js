(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(91)),i={id:"urx-vs-rxjs",title:"urx for RxJS Developers",sidebar_label:"urx for RxJS Developers",slug:"/urx-vs-rxjs"},s={unversionedId:"urx-vs-rxjs",id:"urx-vs-rxjs",isDocsHomePage:!1,title:"urx for RxJS Developers",description:"RxJS is general purpose, mature, extremely popular, favors OOP style, and ships a myriad of operators.",source:"@site/docs/urx-vs-rxjs.md",slug:"/urx-vs-rxjs",permalink:"/docs/urx-vs-rxjs",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/urx-vs-rxjs.md",version:"current",sidebar_label:"urx for RxJS Developers",sidebar:"docs",previous:{title:"urx for Redux Developers",permalink:"/docs/urx-vs-redux"},next:{title:"Module: urx/src/actions",permalink:"/docs/api/modules/_urx_src_actions_"}},c=[{value:"Should I migrate from RxJS to urx?",id:"should-i-migrate-from-rxjs-to-urx",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{class:"lead"},"RxJS is general purpose, mature, extremely popular, favors OOP style, and ships a myriad of operators. Urx is several times smaller, picks subjectively easier names for concepts, is purely functional, prescribes tools for building stream systems, and comes with a react adapter. Urx does not implement finite streams and error handlers."),Object(o.b)("p",null,"The first version of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://virtuoso.dev/"}),"React Virtuoso")," component was actually built with RxJS;\none of the first criticisms received was that the cost of adding RxJS to the bundle was too high for the final size of the applications. Hence, a poor mans implementation of RxJS was born."),Object(o.b)("p",null,"If you are familiar with RxJS terms, the following mapping can help you quickly grasp urx:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Urx"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RxJS"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stream"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subject")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"StatefulStream"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BehaviorSubject")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pipe"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Observable.pipe")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Publish"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subject.next")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subscribe"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Observable.subscribe")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Observable.subscribe")))),Object(o.b)("p",null,"Most urx operators and transformers are named after their functional equivalents in RxJS."),Object(o.b)("h2",{id:"should-i-migrate-from-rxjs-to-urx"},"Should I migrate from RxJS to urx?"),Object(o.b)("p",null,"The answer of this question depends on what you use RxJS for and how much you use from it. urx ships only a small subset of all RxJS capabilities; there's no point in moving to it if you are going to end up reimplementing a bunch of operators you are missing."),Object(o.b)("p",null,"This being said, you can certainly get some inspiration from the way urx integrates with React. For example, the react-urx adapter can easily be ported to produce components managed by RxJS based systems."))}u.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return r?a.a.createElement(d,s(s({ref:t},l),{},{components:r})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);