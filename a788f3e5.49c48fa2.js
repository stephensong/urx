(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var n=r(2),a=r(6),o=(r(0),r(87)),p={id:"_urx_src_pipe_.operator",title:"Operator",sidebar_label:"Operator"},c={unversionedId:"interfaces/_urx_src_pipe_.operator",id:"interfaces/_urx_src_pipe_.operator",isDocsHomePage:!1,title:"Operator",description:'Documentation \u203a "urx/src/pipe" \u203a Operator',source:"@site/docs/interfaces/_urx_src_pipe_.operator.md",permalink:"/docs/interfaces/_urx_src_pipe_.operator",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/interfaces/_urx_src_pipe_.operator.md",sidebar_label:"Operator",sidebar:"typedoc",previous:{title:"Comparator",permalink:"/docs/interfaces/_urx_src_pipe_.comparator"},next:{title:"System",permalink:"/docs/interfaces/_urx_src_system_.system"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],b={rightToc:l};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/_urx_src_pipe_"}),'"urx/src/pipe"')," \u203a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_pipe_.operator"}),"Operator")),Object(o.b)("p",null,"Operators can transform and control the flow of values.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/_urx_src_pipe_#pipe"}),"pipe")," is used to transform one Emitter into another by stacking operators to its values.\nTo build your own operator that looks like the built-in ones,\ncreate a function which returns an operator.\nThe following custom operator multiplies the passed value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function multiplyBy(multiplier: number): Operator<number> {\n return done => value => done(value * multiplier)\n}\n\nconst foo = stream<number>()\nconst multipliedFoo = pipe(foo, multiplyBy(3))\nsubscribe(multipliedFoo, value => console.log(value))\npublish(foo, 42)\n")),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Input")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Output")),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Operator"))),Object(o.b)("h2",{id:"callable"},"Callable"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"done"),": function): ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/dd44bb0/packages/urx/src/pipe.ts#L42"}),"urx/src/pipe.ts:42"))),Object(o.b)("p",null,"Operators can transform and control the flow of values.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/_urx_src_pipe_#pipe"}),"pipe")," is used to transform one Emitter into another by stacking operators to its values.\nTo build your own operator that looks like the built-in ones,\ncreate a function which returns an operator.\nThe following custom operator multiplies the passed value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"function multiplyBy(multiplier: number): Operator<number> {\n return done => value => done(value * multiplier)\n}\n\nconst foo = stream<number>()\nconst multipliedFoo = pipe(foo, multiplyBy(3))\nsubscribe(multipliedFoo, value => console.log(value))\npublish(foo, 42)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"done"),": ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"value"),": Output): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Output")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"value"),": Input): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input")))))}i.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,O=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var b=2;b<o;b++)p[b]=r[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);