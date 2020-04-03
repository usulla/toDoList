(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{41:function(e,t,a){e.exports={disabled:"styles_disabled__33I_R",text:"styles_text__BtA7S"}},44:function(e,t,a){e.exports={card:"styles_card__RhpLt"}},59:function(e,t,a){e.exports=a(74)},64:function(e,t,a){},65:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),i=a.n(s),c=(a(64),a(29)),l=a(15),o=a(16),u=a(12),m=a(17),d=a(18),p=a(22),f=a(24),h=(a(65),a(44)),y=a.n(h),O=a(97),v=a(52),b=a.n(v),k=a(36),I=a(41),S=a.n(I),E=a(48),g=a.n(E),j=a(46),L=a.n(j),T=a(45),_=a.n(T),w={display:"flex",justifyContent:"space-between",alignItems:"center"},x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item,a=this.props.keyList,n=function(){return t.status?r.a.createElement(L.a,{style:{color:"green"},onClick:function(){return e.props.complete(a,t.key)}}):r.a.createElement(_.a,{onClick:function(){return e.props.complete(a,t.key)}})};return r.a.createElement(k.a,{as:"li",style:w,className:t.status?S.a.disabled:null},r.a.createElement(n,null),r.a.createElement("span",{className:S.a.text},t.text),r.a.createElement(g.a,{onClick:function(){return e.props.delete(a,t.key)}}))}}]),a}(n.Component),D=a(53),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createTasks=n.createTasks.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"createTasks",value:function(e){return r.a.createElement(x,{keyList:this.props.keyList,key:e.key,item:e,delete:this.props.delete,complete:this.props.complete})}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement(D.a,{as:"ul",className:"todo-list"},e)}}]),a}(n.Component),M=a(54),C=a(33),J=a(42),A=a(34),B=a(99),F=a(95),R=a(96),W=a(98);function $(){var e=Object(p.a)(["\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n"]);return $=function(){return e},e}function q(){var e=Object(p.a)(["\n  color:#000000;\n"]);return q=function(){return e},e}f.a.h2(q());var z=f.a.div($()),G=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).taskInput=r.a.createRef(),n.setLocalStorage=n.setLocalStorage.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"setLocalStorage",value:function(e){localStorage.setItem("TODO_ITEMS",JSON.stringify(e))}},{key:"render",value:function(){var e=this.props.title,t=this.props.keyList,a=this.props.deleteList;return r.a.createElement(B.a,{className:y.a.card},r.a.createElement(F.a,null,r.a.createElement(z,null,r.a.createElement(R.a,{variant:"h4",component:"h2",gutterBottom:!0},e),r.a.createElement(O.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(){return a(t)}},r.a.createElement(b.a,null))),r.a.createElement("div",{className:"header"},r.a.createElement(M.a,{onSubmit:this.props.addItem.bind(this,t,this.taskInput)},r.a.createElement(C.a,{controlId:"formAddItem"},r.a.createElement(J.a,{className:"mb-3"},r.a.createElement(A.a,{ref:this.taskInput,placeholder:"enter task"}),r.a.createElement(J.a.Append,null,r.a.createElement(W.a,{type:"submit",variant:"contained",color:"primary"},"Add")))))),r.a.createElement(N,{keyList:t,entries:this.props.items,delete:this.props.deleteItem,complete:this.props.completeItem})))}}]),a}(n.Component),H=(a(73),a(40));function K(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap:wrap;\n"]);return K=function(){return e},e}function P(){var e=Object(p.a)(["\n  color:#000000;\n  text-align:center;\n"]);return P=function(){return e},e}var Q=f.a.h1(P()),U=f.a.section(K()),V=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={lists:[]},n.addList=n.addList.bind(Object(u.a)(n)),n.deleteList=n.deleteList.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.completeItem=n.completeItem.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getFromStorage();var e=[{id:Date.now(),title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b",items:[{text:"\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",status:!1,key:Date.now()}]}],t=localStorage.getItem("TODO_ITEMS")?JSON.parse(localStorage.getItem("TODO_ITEMS")):e;this.setState({lists:t})}},{key:"getFromStorage",value:function(){var e=localStorage.getItem("TODO_ITEMS");return e?JSON.parse(e):[]}},{key:"setLocalStorage",value:function(e){localStorage.setItem("TODO_ITEMS",JSON.stringify(e))}},{key:"addList",value:function(){var e={id:Date.now(),title:"\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b",items:[]};this.setState((function(t){return{lists:t.lists.concat(e)}}))}},{key:"deleteList",value:function(e){var t=this.state.lists.filter((function(t){return t.id!==e}));this.setState({lists:t}),localStorage.setItem("TODO_ITEMS",JSON.stringify(t))}},{key:"addItem",value:function(e,t,a){var n=this;if(a.preventDefault(),""!==t.current.value){var r={text:t.current.value,status:!1,key:Date.now()},s=this.state.lists.map((function(t){return t.id==e?Object(c.a)({},t,{items:t.items.concat(r)}):t}));this.setState((function(e){return{lists:s}})),setTimeout((function(){n.setLocalStorage(s)}),1e3),t.current.value=""}}},{key:"deleteItem",value:function(e,t){var a=this.state.lists.map((function(a){return a.id==e?Object(c.a)({},a,{items:a.items.filter((function(e){return e.key!==t}))}):a}));this.setState({lists:a}),localStorage.setItem("TODO_ITEMS",JSON.stringify(a))}},{key:"completeItem",value:function(e,t){var a=this.state.lists.map((function(a){return a.id==e?Object(c.a)({},a,{items:a.items.map((function(e){return e.key==t?Object(c.a)({},e,{status:!e.status}):e}))}):a}));this.setState({lists:a}),localStorage.setItem("TODO_ITEMS",JSON.stringify(a))}},{key:"render",value:function(){var e=this,t=this.state.lists;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{variant:"primary",onClick:this.addList},"Add List"),r.a.createElement(Q,null,"My happy list"),r.a.createElement(U,null,t.map((function(t){return r.a.createElement(G,{list:t,key:t.id,title:t.title,items:t.items,keyList:t.id,deleteList:e.deleteList,addItem:e.addItem,deleteItem:e.deleteItem,completeItem:e.completeItem})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.94f972b8.chunk.js.map