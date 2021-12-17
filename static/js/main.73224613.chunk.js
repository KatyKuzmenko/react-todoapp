(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return L}));var o=n(0),i=n.n(o),c=n(8),r=n.n(c),a=n(2),s=n(3),l=n(5),u=n(4),d=(n(19),"todos/init"),p="todo/add",h="todo/delete",f="todo/toggle",j="todo/edit",b="todos/toggle-all",g="todos/clear-completed",O=function(t,e){return fetch("".concat("http://localhost:3001").concat(t),e).then((function(t){return t.ok?t.json():"".concat(t.status," - ").concat(t.statusText)}))},m=function(t){return O(t,{method:"DELETE"})},v=function(t,e){return O(t,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})},y=function(t){return e={title:t},O("/todos",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)});var e},x=function(t,e){return v("/todos/".concat(t),{title:e})},T=function(t,e){return v("/todos/".concat(t),{iscompleted:e})},C=function(t){return v("/todos",{iscompleted:t})},k=function(t){return m("/todos/".concat(t))},N=function(){return m("/todos/")},w=n(1),A=(i.a.Component,i.a.Component,n(6)),E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).addTodo=function(e){"Enter"===e.key&&e.target.value&&y(e.target.value).then((function(n){t.props.onAdding(n,e.target.value),e.target.value=""})).catch((function(t){return console.warn(t)}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("header",{className:"header",children:[Object(w.jsx)("h1",{children:"todos"}),Object(w.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyDown:this.addTodo})]})}}]),n}(i.a.Component),S=Object(A.b)((function(t){return{store:t}}),(function(t){return{onAdding:function(e,n){t({type:p,options:{id:e,title:n}})}}}))(E),D=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).clearCompleted=function(){N().then((function(){t.props.onClear()}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.store.filter((function(t){return!t.iscompleted})),e=this.props.store.filter((function(t){return t.iscompleted}));return this.props.store.length>0&&Object(w.jsxs)("footer",{className:"footer",children:[Object(w.jsxs)("span",{className:"todo-count",children:[t.length," items left"]}),Object(w.jsxs)("ul",{className:"filters",children:[Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#/",className:"selected",children:"All"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#/active","data-filter":"active",className:"",children:"Active"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"#/completed",className:"","data-filter":"completed",children:"Completed"})})]}),e.length>0&&Object(w.jsx)("button",{className:"clear-completed",onClick:this.clearCompleted,children:"Clear completed"})]})}}]),n}(i.a.Component),I=Object(A.b)((function(t){return{store:t}}),(function(t){return{onClear:function(){t({type:g})}}}))(D),B=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isEditing:!1},t.toggleTodo=function(e){t.props.onToggle(+e.target.dataset.inputId,e.target.checked),T(+e.target.dataset.inputId,e.target.checked).then((function(t){return t})).catch((function(t){return console.warn(t)}))},t.editTitle=function(){t.setState({isEditing:!0})},t.setTitleOnEnter=function(e){e.target.value.trim()&&"Enter"===e.key&&(t.props.onChangeTitle(+e.target.id,e.target.value),x(+e.target.id,e.target.value).then((function(t){return t})).catch((function(t){return console.warn(t)})),t.setState({isEditing:!1}))},t.setTitleOnBlur=function(e){e.target.value.trim()&&(t.props.onChangeTitle(+e.target.id,e.target.value),x(+e.target.id,e.target.value).then((function(t){return t})).catch((function(t){return console.warn(t)})),t.setState({isEditing:!1}))},t.openModalWindow=function(){},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title,o=t.iscompleted,i=this.state.isEditing;return Object(w.jsxs)("li",{className:o?"todo-list__item completed":"todo-list__item","data-todo-id":e,children:[Object(w.jsxs)("div",{className:i?"invisible view"+e:"view"+e,children:[Object(w.jsx)("input",{id:"todo-"+e,"data-input-id":e,className:"toggle",type:"checkbox",checked:o,onChange:this.toggleTodo}),Object(w.jsx)("label",{className:"todo-title","data-label-id":e,onDoubleClick:this.editTitle,children:n}),Object(w.jsx)("button",{className:"destroy","data-destroy-id":e,onClick:this.openModalWindow})]}),Object(w.jsx)("input",{className:i?"edit-field edit"+e:"edit-field invisible edit"+e,id:e,type:"text",defaultValue:n,onKeyDown:this.setTitleOnEnter,onBlur:this.setTitleOnBlur})]})}}]),n}(i.a.Component),J=Object(A.b)((function(t){return{store:t}}),(function(t){return{onToggle:function(e,n){t({type:f,options:{id:e,iscompleted:n}})},onChangeTitle:function(e,n){t({type:j,options:{id:e,title:n}})}}}))(B),M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={filterType:"all"},t.toggleAll=function(e){t.props.onToggleAll(e.target.checked),C(e.target.checked).then((function(t){return t})).catch((function(t){return console.warn(t)}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.filterType,e=this.props.store.filter((function(t){return!t.iscompleted})),n=this.props.store.filter((function(t){return t.iscompleted})),o={all:this.props.store,active:e,completed:n}[t];return Object(w.jsx)("section",{className:this.props.store.length>0?"main":"main invisible",children:Object(w.jsxs)("span",{className:"toggle-all-container",children:[Object(w.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:0===e.length,onChange:this.toggleAll}),Object(w.jsx)("label",{htmlFor:"toggle-all"}),Object(w.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(w.jsx)(J,{todo:t},t.id)}))})]})})}}]),n}(i.a.Component),_=Object(A.b)((function(t){return{store:t}}),(function(t){return{onToggleAll:function(e){t({type:b,options:{iscompleted:e}})}}}))(M),F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;O("/todos").then((function(e){t.props.onInitialize(e)})).catch((function(t){return console.warn(t)}))}},{key:"render",value:function(){return console.log(this.props.store),Object(w.jsxs)("section",{className:"todoapp",children:[Object(w.jsx)(S,{}),Object(w.jsx)(_,{}),Object(w.jsx)(I,{})]})}}]),n}(i.a.Component),W=Object(A.b)((function(t){return{store:t}}),(function(t){return{onAdding:function(e,n){t({type:p,options:{id:e,title:n}})},onInitialize:function(e){t({type:d,options:e})}}}))(F),z=n(11),K=n(7),P=n(12);var U=n(14),H=n.n(U),L=Object(z.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(P.a)(e.options);case p:return[].concat(Object(P.a)(t),[{id:e.options.id,title:e.options.title,iscompleted:!1}]);case f:return t.map((function(t){return t.id===e.options.id?Object(K.a)(Object(K.a)({},t),{},{iscompleted:e.options.iscompleted}):t}));case h:return t.filter((function(t){return e.options.id!==t.id}));case j:return t.map((function(t){return t.id===e.options.id?Object(K.a)(Object(K.a)({},t),{},{title:e.options.title}):t}));case b:return t.map((function(t){return Object(K.a)(Object(K.a)({},t),{},{iscompleted:e.options.iscompleted})}));case g:return t.filter((function(t){return!1===t.iscompleted}));default:return t}}),Object(z.a)(H.a));r.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(A.a,{store:L,children:Object(w.jsx)(W,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.73224613.chunk.js.map