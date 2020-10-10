(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),s=r(6),o=(r(0),r(91)),a={id:"urx-vs-redux",title:"urx for Redux Developers",sidebar_label:"urx for Redux Developers",slug:"/urx-vs-redux"},i={unversionedId:"urx-vs-redux",id:"urx-vs-redux",isDocsHomePage:!1,title:"urx for Redux Developers",description:"Redux is based on the concept of a single state tree - an object which is the source of truth for the state of the UI.  urx is organised around systems - sets of connected streams which accept input through input streams (Publishers) and emit processed results through output streams (Emitters).",source:"@site/docs/urx-vs-redux.md",slug:"/urx-vs-redux",permalink:"/docs/urx-vs-redux",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/urx-vs-redux.md",version:"current",sidebar_label:"urx for Redux Developers",sidebar:"docs",previous:{title:"urx in React",permalink:"/docs/urx-in-react"},next:{title:"urx for RxJS Developers",permalink:"/docs/urx-vs-rxjs"}},u=[{value:"System = Tree + Actions + Selectors",id:"system--tree--actions--selectors",children:[]}],c={rightToc:u};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{class:"lead"},"Redux is based on the concept of a single state tree - an object which is the source of truth for the state of the UI.  urx is organised around systems - sets of connected streams which accept input through input streams (Publishers) and emit processed results through output streams (Emitters)."),Object(o.b)("p",null,'When used in React, react-urx places the instance of a system in a React context, wires up streams to properties and exposes the system inputs and outputs through hooks.\nThe stream system is static and immutable - it acts as the transformation "engine" which converts input to output.'),Object(o.b)("p",null,"While not necessary, a system can be (and most likely will be) stateful - stateful streams\nand buffering operators and transformers like ",Object(o.b)("inlineCode",{parentName:"p"},"combineLatest"),", ",Object(o.b)("inlineCode",{parentName:"p"},"withLatestFrom")," and ",Object(o.b)("inlineCode",{parentName:"p"},"merge")," allow signals sent through streams to interact with each other, accumulate data, and so on.\nHowever, the state of the system is implicit and not something to focus on - only the relevant values are emitted through the respective output streams."),Object(o.b)("h2",{id:"system--tree--actions--selectors"},"System = Tree + Actions + Selectors"),Object(o.b)("p",null,"The urx system logic is implemented in the input stream subscriptions, which apply incoming data to the existing state and eventually output results to the output streams.\nSpeaking loosely, input streams subscriptions can be considered the equivalent of actions or state mutators.\nAs the changes propagate down the system streams, a subset of the newly calculated data is emitted through the output streams.\nThe transformations that build these emitted values can be thought of as selectors."))}l.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),s=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return r?s.a.createElement(h,i(i({ref:t},c),{},{components:r})):s.a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);