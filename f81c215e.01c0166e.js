(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),o=p(a),O=r,m=o["".concat(c,".").concat(O)]||o[O]||u[O]||b;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),b=(a(0),a(104)),c={id:"_urx_src_actions_",title:"urx/src/actions",sidebar_label:"urx/src/actions"},s={unversionedId:"modules/_urx_src_actions_",id:"modules/_urx_src_actions_",isDocsHomePage:!1,title:"urx/src/actions",description:'Documentation \u203a "urx/src/actions"',source:"@site/docs/modules/_urx_src_actions_.md",permalink:"/docs/modules/_urx_src_actions_",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/modules/_urx_src_actions_.md",sidebar_label:"urx/src/actions",sidebar:"typedoc",previous:{title:"urx in React",permalink:"/docs/urx-in-react"},next:{title:"urx/src/pipe",permalink:"/docs/modules/_urx_src_pipe_"}},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"connect",id:"connect",children:[]},{value:"getValue",id:"getvalue",children:[]},{value:"handleNext",id:"handlenext",children:[]},{value:"publish",id:"publish",children:[]},{value:"reset",id:"reset",children:[]},{value:"subscribe",id:"subscribe",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/_urx_src_actions_"}),'"urx/src/actions"')),Object(b.b)("p",null,"urx Actions operate on streams - ",Object(b.b)("inlineCode",{parentName:"p"},"publish")," publishes data in a stream, and ",Object(b.b)("inlineCode",{parentName:"p"},"subscribe")," attaches a subscription to a stream."),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"interfaces"},"Interfaces"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("h3",{id:"functions"},"Functions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#connect"}),"connect")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#getvalue"}),"getValue")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#handlenext"}),"handleNext")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#publish"}),"publish")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#reset"}),"reset")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/modules/_urx_src_actions_#subscribe"}),"subscribe"))),Object(b.b)("h2",{id:"functions-1"},"Functions"),Object(b.b)("h3",{id:"connect"},"connect"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"connect"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"publisher"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L132"}),"urx/src/actions.ts:132"))),Object(b.b)("p",null,"Connects two streams - any value emitted from the emitter will be published in the publisher."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>();\nconst bar = stream<number>();\nsubscribe(bar, (value) => console.log(`Bar emitted ${value}`));\n\nconnect(foo, bar);\npublish(foo);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"publisher")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,"an ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe")," handle which will disconnect the two streams."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getvalue"},"getValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getValue"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"depot"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L116"}),"urx/src/actions.ts:116"))),Object(b.b)("p",null,"Extracts the current value from a stateful stream. Use it only as an escape hatch, as it violates the concept of reactive programming."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = statefulStream(42);\nconsole.log(getValue(foo));\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"depot")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"T")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handlenext"},"handleNext"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"handleNext"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"subscription"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L146"}),"urx/src/actions.ts:146"))),Object(b.b)("p",null,"Executes the passed subscription at most once, for the next emit from the emitter."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>()\nhandleNext(foo, value => console.log(value)) // called once, with 42\npublish(foo, 42)\npublish(foo, 43)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subscription")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,"an ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe")," handle to unbind the subscription if necessary."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"publish"},"publish"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"publish"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"publisher"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),"\u2039T\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": T): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L92"}),"urx/src/actions.ts:92"))),Object(b.b)("p",null,"Publishes the value into the passed ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>();\npublish(foo, 42);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"publisher")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),"\u2039T\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reset"},"reset"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"reset"),"(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039any\u203a): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L105"}),"urx/src/actions.ts:105"))),Object(b.b)("p",null,"Clears all subscriptions from the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>();\nsubscribe(foo, (value) => console.log(value));\nreset(foo);\npublish(foo, 42);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039any\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribe"},"subscribe"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribe"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"subscription"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/f2764e6/packages/urx/src/actions.ts#L80"}),"urx/src/actions.ts:80"))),Object(b.b)("p",null,"Subscribes the specified ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription")," to the updates from the Emitter.\nThe emitter calls the subscription with the new data each time new data is published into it."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>();\nsubscribe(foo, (value) => console.log(value));\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subscription")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"Subscription"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe"))),Object(b.b)("p",null,"an ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.unsubscribe"}),"Unsubscribe")," handle  - calling it will unbind the subscription from the emitter."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const foo = stream<number>();\nconst unsub = subscribe(foo, (value) => console.log(value));\nunsub();\n")))}p.isMDXComponent=!0}}]);