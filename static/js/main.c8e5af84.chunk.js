(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(2),s=n.n(i),c=n(5),r=n.n(c),d=(n(21),n(13)),u=n(8),o=n(9),l=n(3),h=n(15),j=n(14),m=(n.p,n(22),n(23),n(10)),b=n(11);var p=function(t){var e=t.items.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(a.jsx)("span",{children:Object(a.jsx)(m.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},"item.key")}));return Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{duration:400,easing:"ease-in-out",children:e})})},f=n(4),v=n(12);f.b.add(v.a);var x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a.setUpdate=a.setUpdate.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(d.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter the work to-do",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})}),Object(a.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(s.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.c8e5af84.chunk.js.map