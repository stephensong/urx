(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,O=b["".concat(p,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(O,c(c({ref:t},l),{},{components:r})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(100)),p={id:"_urx_src_pipe_.operator",title:"Interface: Operator<Input, Output>",sidebar_label:"Operator",hide_title:!0},c={unversionedId:"api/interfaces/_urx_src_pipe_.operator",id:"api/interfaces/_urx_src_pipe_.operator",isDocsHomePage:!1,title:"Interface: Operator<Input, Output>",description:"Interface: Operator",source:"@site/docs/api/interfaces/_urx_src_pipe_.operator.md",slug:"/api/interfaces/_urx_src_pipe_.operator",permalink:"/docs/api/interfaces/_urx_src_pipe_.operator",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/api/interfaces/_urx_src_pipe_.operator.md",version:"current",sidebar_label:"Operator",sidebar:"docs",previous:{title:"Interface: Comparator<T>",permalink:"/docs/api/interfaces/_urx_src_pipe_.comparator"},next:{title:"Interface: System",permalink:"/docs/api/interfaces/_urx_src_system_.system"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],l={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-operatorinput-output"},"Interface: Operator<Input, Output",">"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_urx_src_pipe_"}),'"urx/src/pipe"'),".Operator"),Object(o.b)("p",null,"Operators can transform and control the flow of values.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_urx_src_pipe_#pipe"}),"pipe")," is used to transform one Emitter into another by stacking operators to its values.\nTo build your own operator that looks like the built-in ones,\ncreate a function which returns an operator.\nThe following custom operator multiplies the passed value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function multiplyBy(multiplier: number): Operator<number> {\n return done => value => done(value * multiplier)\n}\n\nconst foo = stream<number>()\nconst multipliedFoo = pipe(foo, multiplyBy(3))\nsubscribe(multipliedFoo, value => console.log(value))\npublish(foo, 42)\n")),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Input")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Output")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input")))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Operator"))),Object(o.b)("h2",{id:"callable"},"Callable"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"done"),": (value: Output) => void): function"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/66c85c5/packages/urx/src/pipe.ts#L42"}),"urx/src/pipe.ts:42"))),Object(o.b)("p",null,"Operators can transform and control the flow of values.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/_urx_src_pipe_#pipe"}),"pipe")," is used to transform one Emitter into another by stacking operators to its values.\nTo build your own operator that looks like the built-in ones,\ncreate a function which returns an operator.\nThe following custom operator multiplies the passed value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function multiplyBy(multiplier: number): Operator<number> {\n return done => value => done(value * multiplier)\n}\n\nconst foo = stream<number>()\nconst multipliedFoo = pipe(foo, multiplyBy(3))\nsubscribe(multipliedFoo, value => console.log(value))\npublish(foo, 42)\n")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"done")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(value: Output) => void")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," function"))}u.isMDXComponent=!0}}]);