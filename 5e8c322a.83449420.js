(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(100)),i={id:"index",title:"README",slug:"/api",sidebar_label:"README",hide_title:!0},o={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"README",description:"urx: Stream-Based Reactive State Management Library",source:"@site/docs/api/index.md",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/api/index.md",version:"current",sidebar_label:"README"},c=[{value:"What&#39;s urx Suitable For?",id:"whats-urx-suitable-for",children:[]},{value:"urx in 3 Minutes",id:"urx-in-3-minutes",children:[]},{value:"Stream Systems",id:"stream-systems",children:[]},{value:"Installation",id:"installation",children:[]},{value:"urx and React",id:"urx-and-react",children:[]},{value:"urx for RxJS Developers",id:"urx-for-rxjs-developers",children:[]},{value:"Credits",id:"credits",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"urx-stream-based-reactive-state-management-library"},"urx: Stream-Based Reactive State Management Library"),Object(s.b)("p",null,"urx (pronounced ","[ju:reks]",", like Durex) is a minimal, opinionated state management library based on the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Reactive_programming"}),"Reactive Programming")," paradigm."),Object(s.b)("p",null,"urx is designed to be:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Simple and intuitive;"),Object(s.b)("li",{parentName:"ul"},"Tiny sized, suitable for embedding in other libraries;"),Object(s.b)("li",{parentName:"ul"},"Extensively documented;"),Object(s.b)("li",{parentName:"ul"},"Typescript-native;"),Object(s.b)("li",{parentName:"ul"},"Extensible")),Object(s.b)("p",null,"urx can be used as a standalone library, or as a state manager framework for React components."),Object(s.b)("h2",{id:"whats-urx-suitable-for"},"What's urx Suitable For?"),Object(s.b)("p",null,"urx is especially useful when a complex state management with input parameters which vary independently over time.\nThe reactive programming model enforced by the library abstracts sync / async operations and the different inputs' change sequence."),Object(s.b)("h2",{id:"urx-in-3-minutes"},"urx in 3 Minutes"),Object(s.b)("p",null,"urx implements ",Object(s.b)("strong",{parentName:"p"},"data streams")," - primitives which support publishing data to one or more subscriptions."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe } from 'urx'\nconst myStream = stream<number>()\n\nsubscribe(myStream, (value) => console.log(`#1 got ${value}`))\nsubscribe(myStream, (value) => console.log(`#2 got ${value}`))\npublish(myStream, 2)\n")),Object(s.b)("p",null,"Streams are either ",Object(s.b)("strong",{parentName:"p"},"stateless")," or ",Object(s.b)("strong",{parentName:"p"},"stateful"),". Stateless streams pass the data to existing subscriptions when published. Stateful streams remember the last published value and immediately publish it to new subscriptions."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe } from 'urx'\n// stateful streams always start with an initial value\nconst myStatefulStream = statefulStream(2)\n\nsubscribe(myStream, (value) => console.log(`#1 got ${value}`))\nsubscribe(myStream, (value) => console.log(`#2 got ${value}`))\npublish(myStream, 3)\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Actions"),", like ",Object(s.b)("inlineCode",{parentName:"p"},"publish")," and ",Object(s.b)("inlineCode",{parentName:"p"},"subscribe")," operate with streams and values."),Object(s.b)("p",null,"Stream values can be transformed and controlled by ",Object(s.b)("strong",{parentName:"p"},"piping")," through ",Object(s.b)("strong",{parentName:"p"},"operators"),". urx includes several operators like ",Object(s.b)("inlineCode",{parentName:"p"},"map"),", ",Object(s.b)("inlineCode",{parentName:"p"},"filter"),", ",Object(s.b)("inlineCode",{parentName:"p"},"scan"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"throttleTime"),". The ",Object(s.b)("inlineCode",{parentName:"p"},"withLatestFrom")," operator allows the combination of values from other streams."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe, map } from 'urx'\nconst myStream = stream<number>()\n// the return value of pipe is an emitter - the \"output end\" of a stream.\n// emitters be subscribed to, but not published in.\n// pipe accepts one or more operators as arguments.\nconst streamX2 = pipe(\n  myStream,\n  map((value) => value * 2)\n)\n\nsubscribe(streamX2, (value) => console.log(`got ${value}`))\npublish(myStream, 2)\n")),Object(s.b)("p",null,"In addition to ",Object(s.b)("inlineCode",{parentName:"p"},"pipe"),", urx ships a few more ",Object(s.b)("strong",{parentName:"p"},"stream transformers")," like ",Object(s.b)("inlineCode",{parentName:"p"},"connect"),", ",Object(s.b)("inlineCode",{parentName:"p"},"combineLatest")," and ",Object(s.b)("inlineCode",{parentName:"p"},"merge"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe, map } from 'urx'\nconst stream1 = stream<number>()\nconst stream2 = stream<number>()\n\nsubscribe(merge(stream1, stream2), (value) => console.log(`got ${value}`)) // 2, 3\nsubscribe(combineLatest(stream1, stream2), (value) => console.log(`got ${value}`)) // [2, 3]\npublish(stream1, 2)\npublish(stream2, 3)\n")),Object(s.b)("h2",{id:"stream-systems"},"Stream Systems"),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/13347/90911290-6e8b6f80-e3e1-11ea-8e9e-e9cd54579b22.png",alt:"A reactive program"}))),Object(s.b)("p",null,"\u2014"," A relatively simple reactive system (credit: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://wonderopolis.org/wonder/what-is-a-rube-goldberg-machine"}),"Wonderopolis"),")"),Object(s.b)("p",null,"Reactive programs implement their logic as ",Object(s.b)("strong",{parentName:"p"},"graphs")," from input and output streams, combined and connected through operators and transformers.\nurx refers to these graphs as ",Object(s.b)("strong",{parentName:"p"},"systems")," and provides a construction utility, called ",Object(s.b)("inlineCode",{parentName:"p"},"system"),".\n",Object(s.b)("inlineCode",{parentName:"p"},"system")," is a function which has one required parameter: a constructor function that must return a map of streams."),Object(s.b)("p",null,"The example below implements an system with two input streams and one output stream that sums the two inputs."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe, map, run, system } from 'urx'\n\nconst sum = system(() => {\n  const a = stream<number>()\n  const b = stream<number>()\n\n  const result = pipe(\n    combineLatest(a, b),\n    map(([a, b]) => a + b)\n  )\n\n  return {\n    // a and b are the input streams\n    a,\n    b,\n    // result is the output stream\n    result,\n  }\n})\n\nconst { a, b, result } = run(sum)\n\nsubscribe(result, (value) => console.log(value)) // 5\npublish(a, 2)\npublish(b, 3)\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"system")," function implements a ",Object(s.b)("strong",{parentName:"p"},"dependency injection")," mechanism, allowing systems to specify other systems as dependencies. This allows decomposing complex systems into smaller, testable chunks.\nThe example below breaks apart the previous logic into three separate systems."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { stream, publish, subscribe, map, run, system, tup } from 'urx'\n\nconst aSys = system(() => {\n  const a = stream<number>()\n  return { a }\n})\n\nconst bSys = system(() => {\n  const b = stream<number>()\n  return { b }\n})\n\nconst sum = system(([{ a }, { b }]) => {\n  const result = pipe(\n    combineLatest(a, b),\n    map(([a, b]) => a + b)\n  )\n  return { a, b, result }\n  // tup is a typescript utility for constructing tuples.\n  // If you use plain JS, you can pass [aSys, bSys] instead.\n  // see https://stackoverflow.com/a/52445008/1009797\n}, tup(aSys, bSys))\n\n// run will first instantiate an instance of aSys and bSys,\n// and then pass their systems as arguments to the sum constructor.\nconst { a, b, result } = run(sum)\n")),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("h2",{id:"urx-and-react"},"urx and React"),Object(s.b)("h2",{id:"urx-for-rxjs-developers"},"urx for RxJS Developers"),Object(s.b)("h2",{id:"credits"},"Credits"),Object(s.b)("p",null,"urx borrows concepts and ideas from ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://rxjs-dev.firebaseapp.com/guide/overview"}),"RxJS")," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/callbag/callbag"}),"Callbag"),"."))}b.isMDXComponent=!0}}]);