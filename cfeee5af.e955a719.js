(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=o,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||a;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";var o=n(0),r={name:"urx-example",version:"1.0.0",description:"urx example",keywords:["typescript","react","starter"],main:"src/index.tsx",dependencies:{"@virtuoso.dev/urx":"latest","@virtuoso.dev/react-urx":"latest",react:"^16.12.0","react-dom":"^16.12.0","react-scripts":"3.3.0"},devDependencies:{"@types/react":"16.9.19","@types/react-dom":"16.9.5",typescript:"3.7.5"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]};function a(e){var t=e.target.parentElement.nextElementSibling.querySelector(".prism-code").innerText;fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:{"package.json":{content:r},"src/example.tsx":{content:t},"src/index.tsx":{content:'\nimport * as React from "react";\nimport { render } from "react-dom";\n\nimport App from "./example";\n\nconst rootElement = document.getElementById("root");\nrender(<App />, rootElement);\n'},"public/index.html":{content:'<div id="root"></div>'}}})}).then((function(e){return e.json()})).then((function(e){window.open("https://codesandbox.io/s/"+e.sandbox_id+"?file=/src/example.tsx","_blank")}))}t.a=function(){return o.createElement("div",{style:{position:"relative",zIndex:2}},o.createElement("button",{className:"open-in-sandbox",onClick:a},"Open in Sandbox"))}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(3),r=n(7),a=(n(0),n(100)),s=n(122),i={id:"urx-in-react",title:"urx in React",sidebar_label:"urx in React"},c={unversionedId:"urx-in-react",id:"urx-in-react",isDocsHomePage:!1,title:"urx in React",description:"The @virtuoso.dev/react-urx systemToComponent wraps urx systems in UI logic provider components by mapping the system input and output streams to the component input/output outlets.",source:"@site/docs/urx-in-react.md",slug:"/urx-in-react",permalink:"/docs/urx-in-react",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/urx-in-react.md",version:"current",sidebar_label:"urx in React",sidebar:"docs",previous:{title:"Thinking in Systems",permalink:"/docs/thinking-in-systems"},next:{title:"urx for Redux Developers",permalink:"/docs/urx-vs-redux"}},p=[{value:"Component Props to Streams",id:"component-props-to-streams",children:[]},{value:"Hooks to Streams",id:"hooks-to-streams",children:[]},{value:"Specifying Root Component",id:"specifying-root-component",children:[]},{value:"Typed Component Refs",id:"typed-component-refs",children:[]},{value:"Server-Side Rendering",id:"server-side-rendering",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",{className:"lead"},"The ",Object(a.b)("code",null,"@virtuoso.dev/react-urx")," ",Object(a.b)("code",null,"systemToComponent")," wraps urx systems in UI ",Object(a.b)("strong",null,"logic provider components")," by mapping the system input and output streams to the component input/output outlets."),Object(a.b)(s.a,{mdxType:"OpenInSandbox"}),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport { systemToComponent } from "@virtuoso.dev/react-urx";\nimport { system, statefulStream } from "@virtuoso.dev/urx";\n\nconst sys = system(() => {\n  const foo = statefulStream(42);\n  return { foo };\n});\n\nconst { Component: MyComponent, useEmitterValue } = systemToComponent(sys, {\n  required: { fooProp: "foo" },\n});\n\nconst Child = () => {\n  const foo = useEmitterValue("foo");\n  return <div>{foo}</div>;\n};\n\nexport default function App() {\n  return (\n    <MyComponent fooProp={42}>\n      <Child />\n    </MyComponent>\n  );\n}\n')),Object(a.b)("h2",{id:"component-props-to-streams"},"Component Props to Streams"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"systemToComponent")," accepts a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"./api/interfaces/_urx_src_system_.systemspec"}),"SystemSpec")," and a map object, which lists the component:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"required properties"),Object(a.b)("li",{parentName:"ul"},"optional properties"),Object(a.b)("li",{parentName:"ul"},"event properties"),Object(a.b)("li",{parentName:"ul"},"methods")),Object(a.b)("p",null,"The function does not do a formal check if the specified streams are suitable for the type of property.\nCheck the table below for what kind of stream works for what kind of property."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Component Traits"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Mapped Stream Type"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Notes"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Value properties"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Stateful input streams (Publishers)"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Value properties can be thought of as system parameters, which can change over time. In practice, such parameters must have some sort of initial value, even if it is undefined.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Event properties"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Stateless output streams (Emitters)"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Component events are special properties which accept callbacks. The mapping applies those callbacks as subscriptions to the specified stream. It is counter intuitive to fire event handlers upon component initialization, so you should use stateless streams for events.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Methods"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Stateless input streams (Publishers)"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Component methods (limited to a single argument) publish the passed argument into the specified stream.")))),Object(a.b)("h2",{id:"hooks-to-streams"},"Hooks to Streams"),Object(a.b)("p",null,"The resulting React component does not render UI. Instead, it exposes hooks which allow its child components to interact with the underlying system.\nIn React, this happens through the following hooks:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Hook"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Stream Type"),Object(a.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Notes"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"useEmitterValue")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Stateful output streams"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"The hook uses ",Object(a.b)("inlineCode",{parentName:"td"},"useState")," internally and re-renders the component when the stream emits a value. Works only with stateful streams.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"useEmitter")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Output streams"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Calls the specified callback when the stream emits a value. Does not re-render the component, works with both stateful and stateless streams.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"usePublisher")),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Input streams"),Object(a.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Returns a function which can publish the passed argument into the stream. Works with both stateful and stateless streams.")))),Object(a.b)("h4",{id:"hooks-example"},"Hooks Example"),Object(a.b)("p",null,'The example below shows the three types of hooks wired up to a simple system. Press the "open in sandbox button" to see the example in action and tweak it further.'),Object(a.b)(s.a,{mdxType:"OpenInSandbox"}),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport { systemToComponent } from "@virtuoso.dev/react-urx";\n\nimport {\n  system,\n  statefulStream,\n  map,\n  pipe,\n  statefulStreamFromEmitter,\n} from "@virtuoso.dev/urx";\n\nconst sys = system(() => {\n  const foo = statefulStream(2);\n\n  const bar = statefulStreamFromEmitter(\n    pipe(\n      foo,\n      map((value) => value * 2)\n    ),\n    4\n  );\n\n  return {\n    // input\n    foo,\n    // output\n    bar,\n  };\n});\n\nconst {\n  Component,\n  useEmitter,\n  usePublisher,\n  useEmitterValue,\n} = systemToComponent(sys, {\n  optional: { foo: "foo" },\n});\n\nconst Child1 = () => {\n  const fooValue = useEmitterValue("foo");\n  return <div>{fooValue}</div>;\n};\n\nconst Child2 = () => {\n  useEmitter("bar", (value) => console.info(value));\n  return (\n    <div>\n      <hr /> Open the console to see bar value\n    </div>\n  );\n};\n\nconst Child3 = () => {\n  const changeFooTo = usePublisher("foo");\n  return (\n    <div>\n      <hr />\n      <button onClick={() => changeFooTo(33)}>Change foo to 33</button>\n    </div>\n  );\n};\n\nexport default function App() {\n  return (\n    <Component foo={42}>\n      <Child1 />\n      <Child2 />\n      <Child3 />\n    </Component>\n  );\n}\n')),Object(a.b)("h2",{id:"specifying-root-component"},"Specifying Root Component"),Object(a.b)("p",null,"Some React components accept a common set of HTML attributes (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", ",Object(a.b)("inlineCode",{parentName:"p"},"style"),", ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label"),", etc.) and pass them to their root element.\nThis is possible with ",Object(a.b)("inlineCode",{parentName:"p"},"systemToComponent")," too. Pass a react component (",Object(a.b)("inlineCode",{parentName:"p"},"React.ComponentType"),") as a last argument.\nWhile possible, it is not recommended to accept logical properties through that mechanism - use the streams to properties mechanism instead."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Explicitly typing the Root component in the example below produces accurate prop typings for the generated component as well."),Object(a.b)(s.a,{mdxType:"OpenInSandbox"}),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport { systemToComponent } from "@virtuoso.dev/react-urx";\nimport { system, statefulStream } from "@virtuoso.dev/urx";\n\nconst sys = system(() => {\n  const foo = statefulStream(42);\n  return { foo };\n});\n\nconst Root: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {\n  const foo = useEmitterValue("foo");\n  return <div {...props}>{foo}</div>;\n};\n\nconst { Component: MyComponent, useEmitterValue } = systemToComponent(\n  sys,\n  {\n    required: { fooProp: "foo" },\n  },\n  Root\n);\n\nexport default function App() {\n  return <MyComponent fooProp={42} style={{ color: "red" }} />;\n}\n')),Object(a.b)("h2",{id:"typed-component-refs"},"Typed Component Refs"),Object(a.b)("p",null,"Interacting with components with methods requires a ref to the component - correctly typing that ref can be tricky.\nThe package exports ",Object(a.b)("inlineCode",{parentName:"p"},"RefHandle")," type for that purpose."),Object(a.b)(s.a,{mdxType:"OpenInSandbox"}),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport { systemToComponent, RefHandle } from "@virtuoso.dev/react-urx";\nimport { system, statefulStream } from "@virtuoso.dev/urx";\n\nconst sys = system(() => {\n  const foo = statefulStream(42);\n  return { foo };\n});\n\nconst Root: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {\n  const foo = useEmitterValue("foo");\n  return <div {...props}>{foo}</div>;\n};\n\nconst { Component: MyComponent, useEmitterValue } = systemToComponent(\n  sys,\n  {\n    required: { fooProp: "foo" },\n    methods: { setFoo: "foo" },\n  },\n  Root\n);\n\nexport default function App() {\n  const ref = React.useRef<RefHandle<typeof MyComponent>>();\n\n  return (\n    <div>\n      <button onClick={() => ref.current.setFoo(35)}>Set Foo to 35</button>\n      <MyComponent ref={ref} fooProp={42} />\n    </div>\n  );\n}\n')),Object(a.b)("h2",{id:"server-side-rendering"},"Server-Side Rendering"),Object(a.b)("p",null,"The generated React component publishes its properties to the associated streams in an ",Object(a.b)("inlineCode",{parentName:"p"},"useEffect")," function body.\nThis is deliberate: child components may re-render in response to the new values, causing React to throw an exception.\nHowever, this also means that the generated components cannot execute any logic on the server."),Object(a.b)("p",null,"To work-around that, specify the streams to accept properties in the body of the root component function through ",Object(a.b)("inlineCode",{parentName:"p"},"ssrProps"),"."),Object(a.b)(s.a,{mdxType:"OpenInSandbox"}),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'import * as React from "react";\nimport { systemToComponent, RefHandle } from "@virtuoso.dev/react-urx";\nimport { system, statefulStream } from "@virtuoso.dev/urx";\n\nconst sys = system(() => {\n  const foo = statefulStream(0);\n  return { foo };\n});\n\nconst Root: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {\n  const foo = useEmitterValue("foo");\n  return <div {...props}>{foo}</div>;\n};\n\nconst { Component: MyComponent, useEmitterValue } = systemToComponent(\n  sys,\n  {\n    required: { fooProp: "foo" },\n    ssrProps: ["foo"],\n  },\n  Root\n);\n\nexport default function App() {\n  return <MyComponent fooProp={42} />;\n}\n')),Object(a.b)("h2",{id:"summary"},"Summary"),Object(a.b)("p",null,"Unifying the component I/O points to streams makes it easy to implement complex but resilient React components.\nThe React components remain relatively simple, while the system specifies the bulk of the logic.\nSystems are easy (and fast) to test outside of the React environment."))}m.isMDXComponent=!0}}]);