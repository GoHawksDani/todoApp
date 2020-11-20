(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{11:function(e,t,o){e.exports={menuContainer:"style_menuContainer__22IKf",menuItem:"style_menuItem__3bLVH",circle:"style_circle__2LxtK",noSelect:"style_noSelect__2R0QZ",addTodoContainer:"style_addTodoContainer__1XnvO",addTodoTextarea:"style_addTodoTextarea__18POU",addTodoTitleInput:"style_addTodoTitleInput__3TH2N",addTodoButton:"style_addTodoButton__qf7sK",neutralAddTodoButton:"style_neutralAddTodoButton__3iMSl style_addTodoButton__qf7sK",positiveAddTodoButton:"style_positiveAddTodoButton__35AxM style_addTodoButton__qf7sK",disabledAddTodoButton:"style_disabledAddTodoButton__3uYR9 style_addTodoButton__qf7sK",shake:"style_shake__1EXtY",addTodoLabels:"style_addTodoLabels__2dBRe",datePickerContainer:"style_datePickerContainer__25UbV",menuContainerRight:"style_menuContainerRight__3KDO1",menuItemRightGithub:"style_menuItemRightGithub__1d_nX",githubLogoImg:"style_githubLogoImg__xeqAU",menuItemRight:"style_menuItemRight__3iEMZ style_menuItem__3bLVH",loggedInUserContainer:"style_loggedInUserContainer__3jHjE",loggedInUserNameEmail:"style_loggedInUserNameEmail__2ysIa",userPhoto:"style_userPhoto__3QP3z",addedTodoNoti:"style_addedTodoNoti__oLUak"}},94:function(e,t,o){},96:function(e,t,o){"use strict";o.r(t);var a=o(9),n=o(0),c=o(14),d=o.n(c),i=o(23),s=o(28),l="ADD_TODO",r="TOGGLE_TODO",u="SET_FILTER",b=0,j=o(11),m=o.n(j),h=o(20),O=o(124),p=o(68),f=o(59);try{f.a.initializeApp({apiKey:"AIzaSyA5XT8kXxvt2oq6l59tvefY5kpnqgCKUrE",authDomain:"todo-app-f9dba.firebaseapp.com",databaseURL:"https://todo-app-f9dba.firebaseio.com",projectId:"todo-app-f9dba",storageBucket:"todo-app-f9dba.appspot.com",messagingSenderId:"60057717887",appId:"1:60057717887:web:83f33b2ff0c49e4d57834a"})}catch(G){/already exists/.test(G.message)||console.error("Firebase initialization error",G.stack)}var _=f.a,g=Object(s.b)(null,{addTodo:function(e,t,o){return{type:l,payload:{id:++b,title:e,body:t,deadline:o}}}})((function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),o=t[0],c=t[1],d=Object(n.useState)(""),s=Object(i.a)(d,2),l=s[0],r=s[1],u=Object(n.useState)("2020-11-18"),b=Object(i.a)(u,2),j=b[0],f=b[1],g=Object(n.useState)(""),y=Object(i.a)(g,2),T=y[0],x=y[1],v=Object(n.useState)(""),I=Object(i.a)(v,2),N=I[0],C=I[1],L=Object(n.useRef)(null);Object(n.useEffect)((function(){_.auth().onAuthStateChanged((function(e){e&&x(e.uid)}))}),[]);return Object(a.jsxs)("div",{className:m.a.addTodoContainer,children:[N?Object(a.jsx)("p",{className:m.a.addedTodoNoti,children:N}):null,Object(a.jsxs)("label",{className:m.a.addTodoLabels,children:["Title:",Object(a.jsx)("input",{placeholder:"title of the Todo",type:"text",className:m.a.addTodoTitleInput,onChange:function(e){return r(e.target.value)},value:l})]}),Object(a.jsxs)("label",{className:m.a.addTodoLabels,children:["Description:",Object(a.jsx)("textarea",{placeholder:"short description of the Todo",cols:40,rows:5,onChange:function(e){return c(e.target.value)},value:o,className:m.a.addTodoTextarea})]}),Object(a.jsx)("div",{className:m.a.datePickerContainer,children:Object(a.jsx)(h.a,{utils:p.a,children:Object(a.jsx)(O.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:j,onChange:function(e){var t=e.getMonth()+1,o=e.getDate(),a=e.getFullYear()+"-"+(t>9?"":"0")+t+"-"+(o>9?"":"0")+o;f(a)},KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(a.jsx)("button",{ref:L,className:m.a.neutralAddTodoButton,onMouseEnter:function(){L.current.className=l&&o?m.a.positiveAddTodoButton:m.a.disabledAddTodoButton},onMouseLeave:function(){L.current.className=m.a.neutralAddTodoButton},onClick:function(){if(l&&o&&j){var e={title:l,body:o,deadline:_.firestore.Timestamp.fromDate(new Date(j)),completed:!1};_.firestore().collection("todos").doc(T).collection("userTodos").add(e).then((function(){c(""),r(""),C("TODO ADDED"),setTimeout((function(){C("")}),1e3)}))}},children:"Add Todo"})]})})),y=o(51),T=o(34),x=o.n(T),v=Object(s.b)(null,{toggleTodo:function(e){return{type:r,payload:{id:e}}}})((function(e){var t=e.todo,o=e.userId,c=Object(n.useState)(t.completed),d=Object(i.a)(c,2),s=d[0],l=d[1];Object(n.useEffect)((function(){console.log(t),l(t.completed)}),[]);return Object(a.jsx)("li",{className:"todo-item",onClick:function(){_.firestore().collection("todos").doc(o).collection("userTodos").doc(t.id).update({completed:!0}).then((function(){console.log("doc updated"),l(!s)})).catch((function(e){console.error("Error updating document: ",e)}))},children:Object(a.jsxs)("div",{className:"todoInternalContainer",children:[Object(a.jsxs)("label",{className:x()("todoLabel",t&&s&&"todo-item--completed"),children:["Title:",Object(a.jsx)("span",{className:x()("todo-item__title",t&&s&&"todo-item--completed"),children:t.title})]}),Object(a.jsxs)("label",{className:x()("todoLabel",t&&s&&"todo-item--completed"),children:["Description:",Object(a.jsx)("span",{className:x()("todo-item__text",t&&s&&"todo-item--completed"),children:t.body})]}),Object(a.jsxs)("label",{className:x()("todoLabel",t&&s&&"todo-item--completed"),children:["Deadline:",Object(a.jsx)("span",{className:t&&s?"todo-item--completed":"",children:new Date(1e3*t.deadline.seconds).toLocaleDateString("en-US")})]}),Object(a.jsx)("p",{children:"Checkmark icon"}),Object(a.jsx)("p",{children:"Delete icon"})]})})})),I=o(24),N={ALL:"all",COMPLETED:"completed",INCOMPLETE:"incomplete"},C=function(e){return e.todos},L=function(e){return function(e){return C(e)?C(e).allIds:[]}(e).map((function(t){return function(e,t){return C(e)?Object(I.a)(Object(I.a)({},C(e).byIds[t]),{},{id:t}):{}}(e,t)}))},E=Object(s.b)((function(e){return{todos:function(e,t){var o=L(e);switch(t){case N.COMPLETED:return o.filter((function(e){return e.completed}));case N.INCOMPLETE:return o.filter((function(e){return!e.completed}));case N.ALL:default:return o}}(e,e.visibilityFilter)}}))((function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),o=t[0],c=t[1],d=Object(n.useState)([]),s=Object(i.a)(d,2),l=s[0],r=s[1];return Object(n.useEffect)((function(){_.auth().onAuthStateChanged((function(e){e&&c(e.uid)})),o&&_.firestore().collection("todos").doc(o).collection("userTodos").get().then((function(e){e.forEach((function(e){if(e.exists){var t={id:e.id,title:e.data().title,body:e.data().body,deadline:e.data().deadline,completed:e.data().completed};r((function(e){return[].concat(Object(y.a)(e),[t])}))}else console.log("No such document!")}))})).catch((function(e){console.log("Error getting document:",e)}))}),[o]),Object(a.jsx)("ul",{className:"todo-list",children:l&&l.length?l.map((function(e){return Object(a.jsx)(v,{todo:e,userId:o},"todo-".concat(e.id))})):"No todos, yay!"})})),A=(o(94),Object(s.b)((function(e){return{activeFilter:e.visibilityFilter}}),{setFilter:function(e){return{type:u,payload:{filter:e}}}})((function(e){var t=e.activeFilter,o=e.setFilter;return Object(a.jsx)("div",{className:"visibility-filters",children:Object.keys(N).map((function(e){var n=N[e];return Object(a.jsx)("span",{className:x()("filter",n===t&&"filter--active"),onClick:function(){o(n)},children:n},"visibility-filter-".concat(n))}))})}))),S=o(52),k=o(18),D=o(122),B=o.p+"static/media/github-logo.c12e6ca9.png";function R(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),o=t[0],c=t[1],d=Object(n.useState)({}),s=Object(i.a)(d,2),l=s[0],r=s[1];_.auth().onAuthStateChanged((function(e){e?(c(!0),r(e)):c(!1)}));return Object(a.jsxs)(S.a,{children:[Object(a.jsxs)(D.a,{className:m.a.menuContainer,square:!0,children:[Object(a.jsxs)(S.b,{to:"/",className:m.a.menuItem,children:[Object(a.jsx)("span",{className:m.a.noSelect,children:"Todos"}),Object(a.jsx)("div",{className:m.a.circle})]}),Object(a.jsxs)(S.b,{to:"/add_todo",className:m.a.menuItem,children:[Object(a.jsx)("span",{className:m.a.noSelect,children:"Add new Todo"}),Object(a.jsx)("div",{className:m.a.circle})]}),o?Object(a.jsxs)("div",{className:m.a.menuContainerRight,children:[Object(a.jsxs)("div",{className:m.a.loggedInUserContainer,children:[Object(a.jsx)("p",{className:m.a.loggedInUserNameEmail,children:l?l.displayName?l.displayName:l.email:""}),l.photoURL?Object(a.jsx)("img",{src:l.photoURL,alt:"photo of user",className:m.a.userPhoto}):null]}),Object(a.jsx)("a",{onClick:function(){_.auth().signOut().then((function(){console.log("user logged out")}))},className:m.a.menuItemRight,children:"Log out"})]}):Object(a.jsx)("div",{className:m.a.menuContainerRight,children:Object(a.jsx)("a",{className:m.a.menuItemRightGithub,onClick:function(){_.auth().signInWithPopup(new _.auth.GithubAuthProvider).then((function(e){r(e.user),c(!0),console.log(l)}))},href:"#void",children:Object(a.jsx)("img",{src:B,alt:"github logo",className:m.a.githubLogoImg})})})]}),Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/add_todo",children:Object(a.jsx)(g,{})}),Object(a.jsx)(k.a,{path:"/",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(A,{})]})})]})]})}var P=o(40),U=N.ALL,M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload.filter;default:return e}},w=o(46),F={allIds:[],byIds:{}},K=Object(P.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var o=t.payload,a=o.id,n=o.title,c=o.body,d=o.deadline;return Object(I.a)(Object(I.a)({},e),{},{allIds:[].concat(Object(y.a)(e.allIds),[a]),byIds:Object(I.a)(Object(I.a)({},e.byIds),{},Object(w.a)({},a,{title:n,body:c,deadline:d,completed:!1}))});case r:var i=t.payload.id;return Object(I.a)(Object(I.a)({},e),{},{byIds:Object(I.a)(Object(I.a)({},e.byIds),{},Object(w.a)({},i,Object(I.a)(Object(I.a)({},e.byIds[i]),{},{completed:!e.byIds[i].completed})))});default:return e}},visibilityFilter:M}),q=Object(P.c)(K);d.a.render(Object(a.jsx)(s.a,{store:q,children:Object(a.jsx)(R,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.95a8849b.chunk.js.map