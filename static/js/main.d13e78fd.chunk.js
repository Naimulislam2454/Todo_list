(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),r=(n(13),n(8)),l=n(6),d=n(3),o=(n(14),n(0)),j=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),s=Object(d.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(""),f=Object(d.a)(b,2),m=f[0],O=f[1],h=Object(c.useState)(!1),x=Object(d.a)(h,2),v=x[0],g=x[1],p=function(){if(n)if(n&&v)u(j.map((function(e){return e.id===m?Object(l.a)(Object(l.a)({},e),{},{name:n}):e}))),a(""),O(null),g(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(r.a)(j),[e])),a("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(j))}),[j]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:"./images/todo.svg",alt:"todologo"}),Object(o.jsx)("figcaption",{children:"Add Your List Here \u270c"})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u270d Add Item",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),v?Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:p}):Object(o.jsx)("i",{className:"fa fa-plus add-btn",onClick:p})]}),Object(o.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),g(!0)}(e.id)}}),Object(o.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems",children:Object(o.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(o.jsx)("span",{children:" CHECK LIST"})})})]})})})};n(16);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.d13e78fd.chunk.js.map