(this["webpackJsonpmobile-todo-list"]=this["webpackJsonpmobile-todo-list"]||[]).push([[0],{71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),a=n.n(r),i=n(9),o=n.n(i),l=(n(71),n(13));function s(e){var t=Object(r.useState)(e),n=Object(l.a)(t,2),c=n[0],a=n[1];return[c,function(e){a(e.target.value)},function(e){a("")}]}var d=n(78),j=n(124),u=n(22),b=n(54),O=n(125),h=function(e,t){switch(t.type){case"add":return[].concat(Object(b.a)(e),[{id:Object(O.a)(),task:t.task,completed:!1}]);case"delete":return e.filter((function(e){return e.id!==t.id}));case"toggle":return e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e}));case"edit":return e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{task:t.text}):e}));default:return e}};var x=Object(r.createContext)(),m=Object(r.createContext)(),g=[{id:1,task:"Learn Code",completed:!1},{id:2,task:"Go to Gym",completed:!1}];function f(e){var t=function(e,t,n){var c=Object(r.useReducer)(n,t,(function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(c){n=t}return n})),a=Object(l.a)(c,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,o]}("todos",g,h),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(c.jsx)(x.Provider,{value:a,children:Object(c.jsx)(m.Provider,{value:i,children:e.children})})}function p(e){var t=s(""),n=Object(l.a)(t,3),a=n[0],i=n[1],o=n[2],u=Object(r.useContext)(m);return Object(c.jsx)(d.a,{style:{margin:"1rem 0",padding:"1rem 0"},children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),u({type:"add",task:a}),o("")},children:Object(c.jsx)(j.a,{onChange:i,type:"text",value:a,placeholder:"New Task",margin:"normal",fullWidth:!0})})})}var v=function(e){var t=Object(r.useContext)(m),n=s(e.task),a=Object(l.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(n){n.preventDefault(),t({type:"edit",id:e.id,text:i}),e.toggle()},style:{marginLeft:"1rem",width:"50%"},children:Object(c.jsx)(j.a,{style:{width:"100%"},margin:"normal",value:i,onChange:o,autoFocus:!0})})},y=n(116),k=n(117),C=n(126),w=n(118),S=n(53),F=n.n(S),I=n(52),T=n.n(I),D=n(119);function L(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],o=Object(r.useContext)(m);function s(){i(!a)}return Object(c.jsx)(y.a,{style:{height:"64px"},children:a?Object(c.jsx)(v,{task:e.task,id:e.id,toggle:s}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(k.a,{style:{textDecoration:e.completed?"line-through":"none"},children:[Object(c.jsx)(C.a,{tabIndex:-1,checked:e.completed,onClick:function(){return o({type:"toggle",id:e.id})}}),e.task]}),Object(c.jsxs)(D.a,{children:[Object(c.jsx)(w.a,{"aria-label":"Edit",onClick:s,children:Object(c.jsx)(T.a,{})}),Object(c.jsx)(w.a,{"aria-label":"Delete",style:{color:"orangered"},onClick:function(){return o({type:"delete",id:e.id})},children:Object(c.jsx)(F.a,{})})]})]})})}var E=Object(r.memo)(L),J=n(115),N=n(120);function P(e){var t=Object(r.useContext)(x);return Object(c.jsx)(d.a,{children:Object(c.jsxs)(J.a,{style:{clear:"both"},children:[Object(c.jsx)("h1",{style:{color:"slateGrey"},children:"Todo List"}),t.map((function(e,n){return Object(c.jsxs)(a.a.Fragment,{children:[Object(r.createElement)(E,Object(u.a)(Object(u.a)({},e),{},{completed:e.completed,key:e.id})),n<t.length-1&&Object(c.jsx)(N.a,{})]},e.id)}))]})})}var G=n(39),z=n(121),B=n(122),A=n(123);function M(){return Object(c.jsxs)(d.a,{style:{padding:0,margin:0,height:"100vh",clear:"both",backgroundColor:"#b0aacc",backgroundImage:'url("https://www.transparenttextures.com/patterns/black-linen.png")',backgroundSize:"100vh",boxSizing:"border-box",overflow:"hidden",overflowY:"scroll"},elevation:0,children:[Object(c.jsx)(z.a,{color:"primary",position:"static",style:{height:"64px"},children:Object(c.jsx)(B.a,{children:Object(c.jsx)(G.a,{color:"inherit",children:"TODO LIST V2"})})}),Object(c.jsx)(A.a,{container:!0,justify:"center",style:{marginTop:"1rem"},children:Object(c.jsx)(A.a,{item:!0,xs:11,md:8,lg:4,children:Object(c.jsxs)(f,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(P,{})]})})})]})}n(76);var R=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(M,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),V()}},[[77,1,2]]]);
//# sourceMappingURL=main.c5a0bacd.chunk.js.map