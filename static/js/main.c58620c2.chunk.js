(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(14),n(8)),l=n(1),i=n(2),u=n(4),d=n(3),m=n(5),h=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo.map(function(e,n){return o.a.createElement("li",{className:"list-group-item",key:n},e,o.a.createElement("button",{className:"waves-effect waves-light btn newbtn",onClick:function(){return t.props.deleteButton(e)}},"undo"))});return o.a.createElement("main",{className:"container"},o.a.createElement("div",{className:"todo-area"},o.a.createElement("ul",{className:"list-group  list"},e)))}}]),e}(a.Component),p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={text:"",todos:[]},n.deleteButton=function(t){var e=n.state.todos.filter(function(e){return e!==t});n.setState({todos:e})},n.handleChange=function(t){var e=t.target.value;n.setState({text:e}),console.log("text",e)},n.handleSubmit=function(t){t.preventDefault(),n.setState({todos:[].concat(Object(s.a)(n.state.todos),[n.state.text]),text:""})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",value:this.state.text,placeholder:"type your list",onChange:this.handleChange}),o.a.createElement("button",{className:"waves-effect waves-light btn"},"Add")),o.a.createElement(h,{todo:this.state.todos,input:this.state.text,deleteButton:this.deleteButton}))}}]),e}(a.Component);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"ToDo's"),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c58620c2.chunk.js.map