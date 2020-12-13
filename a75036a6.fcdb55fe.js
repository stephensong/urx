(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(r),f=a,m=b["".concat(i,".").concat(f)]||b[f]||l[f]||c;return r?n.a.createElement(m,s(s({ref:t},p),{},{components:r})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(100)),i={id:"_urx_src_actions_.publisher",title:"Interface: Publisher<T>",sidebar_label:"Publisher",hide_title:!0},s={unversionedId:"api/interfaces/_urx_src_actions_.publisher",id:"api/interfaces/_urx_src_actions_.publisher",isDocsHomePage:!1,title:"Interface: Publisher<T>",description:"Interface: Publisher",source:"@site/docs/api/interfaces/_urx_src_actions_.publisher.md",slug:"/api/interfaces/_urx_src_actions_.publisher",permalink:"/docs/api/interfaces/_urx_src_actions_.publisher",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/api/interfaces/_urx_src_actions_.publisher.md",version:"current",sidebar_label:"Publisher",sidebar:"docs",previous:{title:"Interface: Emitter<T>",permalink:"/docs/api/interfaces/_urx_src_actions_.emitter"},next:{title:"Interface: StatefulStream<T>",permalink:"/docs/api/interfaces/_urx_src_actions_.statefulstream"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]}],p={rightToc:o};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-publishert"},"Interface: Publisher<T",">"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/_urx_src_actions_"}),'"urx/src/actions"'),".Publisher"),Object(c.b)("p",null,"A Publisher is the ",Object(c.b)("strong",{parentName:"p"},"input end")," of a Stream. The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/_urx_src_actions_#publish"}),"publish")," action publishes values in publishers."),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the type of values to be published.")))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Publisher")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/_urx_src_actions_.stream"}),"Stream")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream")))))}u.isMDXComponent=!0}}]);