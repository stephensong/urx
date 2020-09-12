(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var s=n(2),a=n(6),r=(n(0),n(87)),c={id:"_urx_src_system_",title:"urx/src/system",sidebar_label:"urx/src/system"},b={unversionedId:"modules/_urx_src_system_",id:"modules/_urx_src_system_",isDocsHomePage:!1,title:"urx/src/system",description:'Documentation \u203a "urx/src/system"',source:"@site/docs/modules/_urx_src_system_.md",permalink:"/docs/modules/_urx_src_system_",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/modules/_urx_src_system_.md",sidebar_label:"urx/src/system",sidebar:"typedoc",previous:{title:"urx/src/streams",permalink:"/docs/modules/_urx_src_streams_"},next:{title:"urx/src/transformers",permalink:"/docs/modules/_urx_src_transformers_"}},i=[{value:"Thinking in Systems",id:"thinking-in-systems",children:[{value:"Depots",id:"depots",children:[]},{value:"Input Streams",id:"input-streams",children:[]},{value:"Data Processing",id:"data-processing",children:[]},{value:"Output Streams",id:"output-streams",children:[]}]},{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"SystemConstructor",id:"systemconstructor",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"init",id:"init",children:[]},{value:"system",id:"system",children:[]}]}],p={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_"}),'"urx/src/system"')),Object(r.b)("h2",{id:"thinking-in-systems"},"Thinking in Systems"),Object(r.b)("p",null,"systems are a stateful ",Object(r.b)("strong",{parentName:"p"},"data-processing machines")," which accept input through ",Object(r.b)("strong",{parentName:"p"},"input streams"),",\ninit and maintain state in ",Object(r.b)("strong",{parentName:"p"},"depots")," and, in certain conditions, emit values to subscriptions through ",Object(r.b)("strong",{parentName:"p"},"output streams"),".\nSystems can specify other systems as dependencies, and can act as singletons in the resulting dependency tree."),Object(r.b)("h3",{id:"depots"},"Depots"),Object(r.b)("p",null,"The first, and probably the most critical part to understand are ",Object(r.b)("strong",{parentName:"p"},"the depots"),"\nmostly because they are somewhat implicit.\nUnlike other state management paradigms, the depots are not kept in a single data structure.\nInsted, depots are defined and maintained as stateful streams, stateful transfomers\nlike ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_transformers_#combinelatest"}),"combineLatest")," or stateful operators like[ []withLatestFrom] or ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_pipe_#scan"}),"scan"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Depots persist values over time"),".\nIf it was not for them, the system had to re-receive its entire input state simultaneously in order to calculate the values for its output stream."),Object(r.b)("p",null,"Of course, strictly speaking, it is possible to implement a pure, stateless system as a form of a complex map/reduce. urx would not mind that ;)."),Object(r.b)("h3",{id:"input-streams"},"Input Streams"),Object(r.b)("p",null,"The system receives updates from the rest of the world through values published in its input streams.\nThe streams used can be either stateless (acting as means to send ",Object(r.b)("strong",{parentName:"p"},"signals"),") or stateful, where the initial stream state acts as the default value for that system parameter."),Object(r.b)("p",null,"The effects of the input streams are up to the system data-processing logic. It can change its depots' state, and/or emit values through its output streams."),Object(r.b)("h3",{id:"data-processing"},"Data Processing"),Object(r.b)("p",null,"The actual system behavior is exclusively implemented by ",Object(r.b)("strong",{parentName:"p"},"applying transformers and operators")," to the input streams, producing the respective output streams.\nIn the final state the system streams are organized in a directed graph, where incoming data is routed through certain edges and nodes.\nSimple systems like the one in ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://urx.virtuoso.dev/docs/urx-by-example"}),"urx by example")," can use a straightforward single-step transformation (in this case, ",Object(r.b)("inlineCode",{parentName:"p"},"combineLatest")," and ",Object(r.b)("inlineCode",{parentName:"p"},"map"),"),\nwhile complex ones can introduce multiple intermediate streams to model their logic."),Object(r.b)("h3",{id:"output-streams"},"Output Streams"),Object(r.b)("p",null,"The system publishes updates to its clients (other systems or an UI bound to it) by publishing data in its output streams.\nState-reflecting output streams, like ",Object(r.b)("inlineCode",{parentName:"p"},"sum")," in the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://urx.virtuoso.dev/docs/urx-by-example"}),"urx by example")," should use stateful streams as output streams.\nSignal-like output should use regular, stateless streams. In general, stateless input streams tend to have a symmetrical stateless streams, and the opposite."),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"))),Object(r.b)("h3",{id:"type-aliases"},"Type aliases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#systemconstructor"}),"SystemConstructor"))),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#init"}),"init")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#system"}),"system"))),Object(r.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(r.b)("h3",{id:"systemconstructor"},"SystemConstructor"),Object(r.b)("p",null,"\u01ac ",Object(r.b)("strong",{parentName:"p"},"SystemConstructor"),": ",Object(r.b)("em",{parentName:"p"},"function")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/dd44bb0/packages/urx/src/system.ts#L101"}),"urx/src/system.ts:101"))),Object(r.b)("p",null,"The system constructor is a function which initializes and connects streams and returns them as a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System"),".\nIf the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_#system"}),"system")," call specifies system dependencies, the constructor receives the dependencies as an array argument."),Object(r.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(r.b)("p",null,"\u25b8 (",Object(r.b)("inlineCode",{parentName:"p"},"dependencies"),": SpecResults\u2039D\u203a): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dependencies")),Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"SpecResults\u2039D\u203a")))),Object(r.b)("h2",{id:"functions-1"},"Functions"),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"\u2039",Object(r.b)("strong",{parentName:"p"},"SS"),"\u203a(",Object(r.b)("inlineCode",{parentName:"p"},"systemSpec"),": SS): ",Object(r.b)("em",{parentName:"p"},"SR\u2039SS\u203a")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/dd44bb0/packages/urx/src/system.ts#L193"}),"urx/src/system.ts:193"))),Object(r.b)("p",null,"Initializes a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec")," by recursively initializing its dependencies."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"// a simple system with two streams\nconst sys1 = system(() => {\n const a = stream<number>()\n const b = stream<number>()\n\n connect(pipe(a, map(value => value * 2)), b)\n return { a, b }\n})\n\nconst { a, b } = init(sys1)\nsubscribe(b, b => console.log(b))\npublish(a, 2)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"SS"),": ",Object(r.b)("em",{parentName:"p"},"AnySystemSpec")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"systemSpec")),Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"SS"),Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"the system spec to initialize.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"SR\u2039SS\u203a")),Object(r.b)("p",null,"the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System")," constructed by the spec constructor."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"system"},"system"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"system"),"\u2039",Object(r.b)("strong",{parentName:"p"},"F"),", ",Object(r.b)("strong",{parentName:"p"},"D"),"\u203a(",Object(r.b)("inlineCode",{parentName:"p"},"constructor"),": F, ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies"),": D, ",Object(r.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),"\u2039D, F\u203a")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/dd44bb0/packages/urx/src/system.ts#L156"}),"urx/src/system.ts:156"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"system")," defines a specification of a system - its constructor, dependencies and if it should act as a singleton in a system dependency tree.\nWhen called, system returns a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),", which is then initialized along with its dependencies by passing it to ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_#init"}),"init"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"@import { subscribe, publish, system, init, tup, connect, map, pipe } from 'urx'\n\n// a simple system with two streams\nconst sys1 = system(() => {\n const a = stream<number>()\n const b = stream<number>()\n\n connect(pipe(a, map(value => value * 2)), b)\n return { a, b }\n})\n\n// a second system which depends on the streams from the first one\nconst sys2 = system(([ {a, b} ]) => {\n const c = stream<number>()\n connect(pipe(b, map(value => value * 2)), c)\n // re-export the `a` stream, keep `b` internal\n return { a, c }\n}, tup(sys1))\n\n// init will recursively initialize sys2 dependencies, in this case sys1\nconst { a, c } = init(sys2)\nsubscribe(c, c => console.log(`Value multiplied by 4`, c))\npublish(a, 2)\n")),Object(r.b)("h4",{id:"singletons-in-dependency-tree"},"Singletons in Dependency Tree"),Object(r.b)("p",null,"By default, systems will be initialized only once if encountered multiple times in the dependency tree.\nIn the below dependency system tree, systems ",Object(r.b)("inlineCode",{parentName:"p"},"b")," and ",Object(r.b)("inlineCode",{parentName:"p"},"c")," will receive the same stream instances from system ",Object(r.b)("inlineCode",{parentName:"p"},"a")," when system ",Object(r.b)("inlineCode",{parentName:"p"},"d")," is initialized."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-txt"}),"  a\n / \\\nb   c\n \\ /\n  d\n")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"a")," gets ",Object(r.b)("inlineCode",{parentName:"p"},"{singleton: false}")," as a last argument, ",Object(r.b)("inlineCode",{parentName:"p"},"init")," creates two separate instances - one for ",Object(r.b)("inlineCode",{parentName:"p"},"b")," and one for ",Object(r.b)("inlineCode",{parentName:"p"},"c"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"F"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"/docs/modules/_urx_src_system_#systemconstructor"}),"SystemConstructor"),"\u2039D\u203a")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"D"),": ",Object(r.b)("em",{parentName:"p"},"SystemSpecs")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"constructor"),": ",Object(r.b)("em",{parentName:"p"},"F")),Object(r.b)("p",null,"the system constructor function. Initialize and connect the streams in its body."),Object(r.b)("p",null,"\u25aa",Object(r.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(r.b)("strong",{parentName:"p"},"dependencies"),": ",Object(r.b)("em",{parentName:"p"},"D"),"= ([] as unknown) as D"),Object(r.b)("p",null,"the system dependencies, which the constructor will receive as arguments.\nUse the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/modules/_urx_src_utils_#tup"}),"tup")," utility ",Object(r.b)("strong",{parentName:"p"},"For TypeScript type inference to work correctly"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"const sys3 = system(() => { ... }, tup(sys2, sys1))\n")),Object(r.b)("p",null,"\u25aa",Object(r.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(r.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(r.b)("em",{parentName:"p"},"object"),"= { singleton: true }"),Object(r.b)("p",null,"Options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"singleton")),Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"determines if the system will act as a singleton in a system dependency tree. ",Object(r.b)("inlineCode",{parentName:"td"},"true")," by default.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(s.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),"\u2039D, F\u203a")))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=s,d=m["".concat(c,".").concat(u)]||m[u]||o[u]||r;return n?a.a.createElement(d,b(b({ref:t},p),{},{components:n})):a.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:s,c[1]=b;for(var p=2;p<r;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);