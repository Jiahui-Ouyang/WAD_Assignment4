(this.webpackJsonpmj=this.webpackJsonpmj||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),o=(n(84),n(114)),d=n(115),l=n(111),s=n(66),j=n(14),u=n(12),b=n.n(u),h=n(22),O=n(13),x=n(113),p=n(78),m=n(52),y=n(54),f=n(25),g=n(11),C=n(42),v=n(112),A=n(63),D=n(51),k=n(31),S=(n(77),n(73),n(3));0===k.a.apps.length&&k.a.initializeApp({apiKey:"AIzaSyBB1VQeCU12rjy_e6Lr2DREmXtvEc5ZoRI",authDomain:"money-journey-jiahuiouyang.firebaseapp.com",databaseUrl:"https://money-journey-jiahuiouyang-default-rtdb.firebaseio.com/",projectId:"money-journey-jiahuiouyang",storageBucket:"money-journey-jiahuiouyang.appspot.com",messagingSenderId:"224576104559",appId:"1:224576104559:web:51c21d53cd9b3c4d2fc59a"});var w=k.a.firestore(),F=(k.a.auth(),[{id:0,name:"-- All --"},{id:1,name:"Food"},{id:2,name:"Fun"},{id:3,name:"Transportation"},{id:4,name:"Uncategorised"}]);function E(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(A.a)(),i=r.register,o=r.handleSubmit,d=Object(c.useState)(!1),l=Object(O.a)(d,2),s=l[0],j=l[1],u=Object(c.useState)([]),k=Object(O.a)(u,2),E=k[0],R=k[1],T=Object(c.useState)(0),B=Object(O.a)(T,2),U=B[0],V=B[1],L=Object(c.useState)(!1),M=Object(O.a)(L,2),P=M[0],J=M[1],q=Object(c.useState)({id:null,createdAt:new Date,description:"",amount:0,category:F[0]}),_=Object(O.a)(q,2),N=_[0],H=_[1],z=w.collection("money"),K=z.orderBy("createdAt","asc").limitToLast(100),G=Object(D.a)(K,{idField:"id"}),Q=Object(O.a)(G,1)[0];console.log("REACT_APP_PROJECT_ID","money-journey-jiahuiouyang"),Object(c.useEffect)((function(){if(Q){var e=0,t=Q.map((function(t,n){return e+=t.amount,Object(S.jsx)(I,{data:t,i:n,onDeleteClick:W,onEditClick:Y})}));R(t),V(e)}}),[Q]);var X=function(){H({id:null,createdAt:new Date,description:"",amount:0,category:F[0]}),a({}),j(!1),J(!1)},Z=function(){var e=Object(h.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={description:t.description,amount:parseFloat(t.amount),createdAt:new Date(t.createdAt),category:n},console.log("onSubmit",c),!P){e.next=8;break}return console.log("UPDATING!!!!",t.id),e.next=6,z.doc(t.id).set(c).then((function(){return console.log("moneyRef has been set")})).catch((function(e){console.error("Error: ",e),alert(e)}));case 6:e.next=10;break;case 8:return e.next=10,z.add(c).then((function(){return console.log("New record has been added.")})).catch((function(e){console.error("Errror:",e),alert(e)}));case 10:X();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){console.log("handleDeleteClick in Journal id:",e),window.confirm("Are you sure to delete this record?")&&z.doc(e).delete()},Y=function(e){var t={id:e.id,description:e.description,amount:parseFloat(e.amount),createdAt:e.createdAt.toDate(),category:n};console.log("handleEditClick",t),H(t),a(e.category),j(!0),J(!0)};return Object(S.jsxs)(m.a,{children:[Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("h1",{children:"Journal"})}),Object(S.jsxs)(g.a,{children:["Category:",Object(S.jsx)(C.a,{options:F,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(e){if(console.log("filter",e),Q){var t=0,n=Q.filter((function(t){return 0==e.id||t.category.id==e.id})).map((function(e,n){return console.log("filter",e),t+=e.amount,Object(S.jsx)(I,{data:e,i:n})}));R(n),V(t)}}})]})]}),Object(S.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Date"}),Object(S.jsx)("th",{children:"Description"}),Object(S.jsx)("th",{children:"Category"}),Object(S.jsx)("th",{children:"Amount"})]})}),Object(S.jsx)("tbody",{children:E}),Object(S.jsx)("tfooter",{children:Object(S.jsx)("td",{colSpan:5,children:Object(S.jsxs)("h2",{children:["Total: ",U]})})})]}),Object(S.jsx)(x.a,{show:s,onHide:X,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(S.jsxs)("form",{onSubmit:o(Z),children:[Object(S.jsx)("input",{type:"hidden",placeholder:"ID",ref:i({required:!1}),name:"id",id:"id",defaultValue:N.id}),Object(S.jsx)(x.a.Header,{closeButton:!0,children:Object(S.jsx)(x.a.Title,{children:P?"Edit Record":"Add New Record"})}),Object(S.jsxs)(x.a.Body,{children:[Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"createdAt",children:"Date"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"date",placeholder:"Date",ref:i({required:!0}),name:"createdAt",id:"createdAt",defaultValue:Object(v.a)(N.createdAt,"yyyy-MM-dd")})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"category",children:"Category"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(C.a,{id:"category",name:"category",value:n,placeholder:"Category",options:F.filter((function(e){return 0!=e.id})),onChange:function(e){console.log("handleCategoryChange",e),a(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"description",children:"Description"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"text",placeholder:"Description",ref:i({required:!0}),name:"description",id:"description",defaultValue:N.description})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"amount",children:"Amount"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"number",step:"any",min:"0",placeholder:"Amount",ref:i({required:!0}),name:"amount",id:"amount",defaultValue:N.amount})})]})]}),Object(S.jsxs)(x.a.Footer,{children:[Object(S.jsx)(p.a,{variant:"secondary",onClick:X,children:"Close"}),Object(S.jsx)(p.a,{variant:P?"success":"primary",type:"submit",children:P?"Save Record":"Add Record"})]})]})})]})}function I(e){var t=e.data;e.i;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(v.a)(t.createdAt.toDate(),"yyyy-MM-dd")}),Object(S.jsx)("td",{children:t.description}),Object(S.jsx)("td",{children:t.category.name}),Object(S.jsx)("td",{children:t.amount})]})}var R=n(49);0===k.a.apps.length&&k.a.initializeApp({apiKey:"AIzaSyBB1VQeCU12rjy_e6Lr2DREmXtvEc5ZoRI",authDomain:"money-journey-jiahuiouyang.firebaseapp.com",databaseUrl:"https://money-journey-jiahuiouyang-default-rtdb.firebaseio.com/",projectId:"money-journey-jiahuiouyang",storageBucket:"money-journey-jiahuiouyang.appspot.com",messagingSenderId:"224576104559",appId:"1:224576104559:web:51c21d53cd9b3c4d2fc59a"});var T=k.a.firestore(),B=(k.a.auth(),[{id:0,name:"-- All --"},{id:1,name:"Food"},{id:2,name:"Fun"},{id:3,name:"Transportation"}]);function U(){var e=Object(c.useState)(),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(A.a)(),i=r.register,o=r.handleSubmit,d=Object(c.useState)(!1),l=Object(O.a)(d,2),s=l[0],j=l[1],u=Object(c.useState)([]),k=Object(O.a)(u,2),w=k[0],F=k[1],E=Object(c.useState)(0),I=Object(O.a)(E,2),U=I[0],L=I[1],M=Object(c.useState)(!1),P=Object(O.a)(M,2),J=P[0],q=P[1],_=Object(c.useState)({id:null,createdAt:new Date,description:"",amount:0,category:"Uncategorised",defaultCategory:"Uncategoriesd"}),N=Object(O.a)(_,2),H=N[0],z=N[1],K=T.collection("money"),G=K.orderBy("createdAt","asc").limitToLast(100),Q=Object(D.a)(G,{idField:"id"}),X=Object(O.a)(Q,1)[0];console.log("REACT_APP_PROJECT_ID","money-journey-jiahuiouyang"),Object(c.useEffect)((function(){if(X){var e=0,t=X.map((function(t,n){return e+=t.amount,Object(S.jsx)(V,{data:t,i:n,onDeleteClick:Y,onEditClick:$})}));F(t),L(e)}}),[X]);var Z=function(){z({id:null,createdAt:new Date,description:"",amount:0,category:"Uncategorised",defaultCategory:"Uncategoriesd"}),a({}),j(!1),q(!1)},W=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={description:t.description,amount:parseFloat(t.amount),createdAt:new Date(t.createdAt),category:"Uncategorised",defaultCategory:"Uncategoriesd"},console.log("onSubmit",n),!J){e.next=8;break}return console.log("UPDATING!!!!",t.id),e.next=6,K.doc(t.id).set(n).then((function(){return console.log("moneyRef has been set")})).catch((function(e){console.error("Error: ",e),alert(e)}));case 6:e.next=10;break;case 8:return e.next=10,K.add(n).then((function(){return console.log("New record has been added.")})).catch((function(e){console.error("Errror:",e),alert(e)}));case 10:Z();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){console.log(X.defaultCategory,"handleDeleteClick in Journal id:",e),window.confirm("Are you sure to delete this record?")&&K.doc(e).delete()},$=function(e){var t={id:e.id,description:e.description,amount:parseFloat(e.amount),createdAt:e.createdAt.toDate(),category:n};console.log("handleEditClick",t),z(t),a(e.category),j(!0),q(!0)};return Object(S.jsxs)(m.a,{children:[Object(S.jsxs)(f.a,{children:[Object(S.jsxs)(g.a,{children:[Object(S.jsx)("h1",{children:"Category Management"}),Object(S.jsxs)(p.a,{variant:"outline-dark",onClick:function(){return j(!0)},children:[Object(S.jsx)(R.b,{})," Add"]})]}),Object(S.jsxs)(g.a,{children:["Category:",Object(S.jsx)(C.a,{options:B,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(e){if(console.log("filter",e),X){var t=0,n=X.filter((function(t){return 0==e.id||t.category.id==e.id})).map((function(e,n){return console.log("filter",e),t+=e.amount,Object(S.jsx)(V,{data:e,i:n})}));F(n),L(t)}}})]})]}),Object(S.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:"Date"}),Object(S.jsx)("th",{children:"Description"}),Object(S.jsx)("th",{children:"Category"}),Object(S.jsx)("th",{children:"Amount"})]})}),Object(S.jsx)("tbody",{children:w}),Object(S.jsx)("tfooter",{children:Object(S.jsx)("td",{colSpan:5,children:Object(S.jsxs)("h2",{children:["Total: ",U]})})})]}),Object(S.jsx)(x.a,{show:s,onHide:Z,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(S.jsxs)("form",{onSubmit:o(W),children:[Object(S.jsx)("input",{type:"hidden",placeholder:"ID",ref:i({required:!1}),name:"id",id:"id",defaultValue:H.id}),Object(S.jsx)(x.a.Header,{closeButton:!0,children:Object(S.jsx)(x.a.Title,{children:J?"Edit Record":"Add New Record"})}),Object(S.jsxs)(x.a.Body,{children:[Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"createdAt",children:"Date"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"date",placeholder:"Date",ref:i({required:!0}),name:"createdAt",id:"createdAt",defaultValue:Object(v.a)(H.createdAt,"yyyy-MM-dd")})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"category",children:"Category"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)(C.a,{id:"category",name:"category",value:n,placeholder:"Category",options:B.filter((function(e){return 0!=e.id})),onChange:function(e){console.log("handleCategoryChange",e),a(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"defaultCategory",children:"DefaultCategory: "})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{id:"defaultCategory",name:"defaultCategory",value:"Uncategoried",disabled:!0,placeholder:"123"})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"description",children:"Description"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"text",placeholder:"Description",ref:i({required:!0}),name:"description",id:"description",defaultValue:H.description})})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{children:Object(S.jsx)("label",{htmlFor:"amount",children:"Amount"})}),Object(S.jsx)(g.a,{children:Object(S.jsx)("input",{type:"number",step:"any",min:"0",placeholder:"Amount",ref:i({required:!0}),name:"amount",id:"amount",defaultValue:H.amount})})]})]}),Object(S.jsxs)(x.a.Footer,{children:[Object(S.jsx)(p.a,{variant:"secondary",onClick:Z,children:"Close"}),Object(S.jsx)(p.a,{variant:J?"success":"primary",type:"submit",children:J?"Save Record":"Add Record"})]})]})})]})}function V(e){var t=e.data;e.i;return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[Object(S.jsx)(R.c,{onClick:function(){return e.onDeleteClick(t.id)}}),Object(S.jsx)(R.a,{onClick:function(){return e.onEditClick(t)}}),t.default]}),Object(S.jsx)("td",{children:Object(v.a)(t.createdAt.toDate(),"yyyy-MM-dd")}),Object(S.jsx)("td",{children:t.description}),Object(S.jsx)("td",{children:t.category.name}),Object(S.jsx)("td",{children:t.amount})]})}function L(){return Object(S.jsx)("h1",{children:"Home"})}var M=function(){return Object(S.jsxs)(s.a,{children:[Object(S.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(S.jsx)(o.a.Brand,{href:"/",children:"Money Journey"}),Object(S.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(S.jsxs)(d.a,{className:"mr-auto",children:[Object(S.jsx)(d.a.Link,{children:Object(S.jsx)(s.b,{to:"/journal",children:"Journal"})}),Object(S.jsx)(d.a.Link,{children:Object(S.jsx)(s.b,{to:"/category",children:"Category"})}),Object(S.jsxs)(l.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(S.jsx)(l.a.Item,{href:"#action/3.1",children:"Action"}),Object(S.jsx)(l.a.Item,{href:"#action/3.2",children:"Another action"}),Object(S.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(S.jsx)(l.a.Divider,{}),Object(S.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(S.jsx)(d.a,{children:Object(S.jsx)(d.a.Link,{eventKey:2,href:"#memes",children:"Sign Out"})})]})]}),Object(S.jsxs)(j.c,{children:[Object(S.jsx)(j.a,{path:"/journal",children:Object(S.jsx)(E,{})}),Object(S.jsx)(j.a,{path:"/category",children:Object(S.jsx)(U,{})}),Object(S.jsx)(j.a,{path:"/",children:Object(S.jsx)(L,{})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),P()}},[[106,1,2]]]);
//# sourceMappingURL=main.e3d701d8.chunk.js.map