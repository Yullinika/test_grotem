(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(14),n(2)),s=n(3),l=n(5),u=n(4),d=n(6),m=n(1),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).checkedItem=function(){this.isChecked=!this.isChecked},e.isChecked=!1,e.checkedItem=e.checkedItem.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.isChecked&&this.props.toBasket?null:r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"product-list",id:this.props.id,onClick:this.checkedItem})),r.a.createElement("td",null,this.props.nameCategory),r.a.createElement("td",null,this.props.productName),r.a.createElement("td",null,this.props.productPrice))}}]),t}(a.Component),p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).addToBasket=function(){this.setState({isOrdered:!0})},e.state={price_list:null,isLoad:!1,isOrdered:!1},e.addToBasket=e.addToBasket.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ssdev.superagent.ru/TestApp/Values/GetWithParent").then(function(e){return e.json()}).then(function(t){e.setState({isLoad:!0,price_list:Object.values(t)})})}},{key:"render",value:function(){var e=this.state.isOrdered;if(this.state.isLoad){var t=this.state.price_list.map(function(t){return Object.values(t.skus).map(function(n){return r.a.createElement(h,{nameCategory:t.group.name,key:t.group.name+"_"+t.group.id+"_"+n.id,id:t.group.name+"_"+t.group.id+"_"+n.id,productName:n.name,productPrice:n.price,toBasket:e})})}),n=r.a.createElement("table",{className:"table table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430"))),r.a.createElement("tbody",null,t));return r.a.createElement("div",{className:"row"},n,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.addToBasket},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))}return r.a.createElement("div",null,"Loading...")}}]),t}(a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.4ee5d7c7.chunk.js.map