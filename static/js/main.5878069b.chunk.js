(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{41:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="FETCH_BLOGS_SUCCESS";function r(e){return console.log("trigger action"),{type:a,value:e}}},52:function(e,t,n){e.exports=n(85)},58:function(e,t,n){},62:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(57),n(1)),i=n(7),u=n(8),s=n(10),m=n(9),h=n(11),p=n(12),f=n(44),d=n.n(f),b=n(87),E=(n(58),n(28)),j=n.n(E),O=(n(62),n(32)),v=n.n(O),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"link-text"},r.a.createElement("a",{href:"tel: 0938636843",title:"Li\xean h\u1ec7 : 0938.6368.43"},r.a.createElement("div",{className:"yourPhone"},r.a.createElement("p",null,r.a.createElement(v.a,{icon:"icofont-ui-dial-phone icofont-3x"}))))))}}]),t}(a.PureComponent),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(j.a,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition"}),r.a.createElement(j.a,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition"},r.a.createElement(g,null))))}}]),t}(a.PureComponent),w=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(7)]).then(n.bind(null,243))}),C=r.a.lazy(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,246))}),k=r.a.lazy(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,245))}),N=[{path:"/home",component:w},{path:"/aboutus",component:r.a.lazy(function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,157))})},{path:"/blog-posts/:id",component:C},{path:"/khoa-hoc/:id",component:k},{path:"/",component:w,exact:!0},{path:"*",component:r.a.lazy(function(){return n.e(10).then(n.bind(null,241))})}],P=(n(81),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"divLoader"},r.a.createElement("svg",{className:"svgLoader",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"10em",height:"10em"},r.a.createElement("path",{fill:"#fc0904",d:""})))}}]),t}(a.PureComponent)),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{loader:"comet-spin",color:"#1452d9",size:50},r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(P,null)},r.a.createElement(p.d,{render:function(e){var t=e.location;return r.a.createElement(b.a,{key:t.key,timeout:{enter:900,exit:900},classNames:"fade"},r.a.createElement("section",{className:"route-section"},r.a.createElement(p.g,{location:t},N.map(function(e){var t=Object(l.a)({},e);return r.a.createElement(p.d,Object.assign({key:t.path},t))}))))}})),r.a.createElement(g,null),r.a.createElement(y,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(25),z=n(14),A=n(41);var L=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1],function(e){e(Object(A.a)()),fetch("https://nodejssalesforce.herokuapp.com/blogs").then(function(e){return e.json()}).then(function(e){if(console.log("res",e),e.error)throw e.error;return e}).catch(function(e){throw e})}},S=Object(z.c)({blogs:L}),T=n(49),B=n(42),H=Object(T.createLogger)(),J=Object(z.d)(S,Object(z.a)(H));c.a.render(r.a.createElement(B.a,{store:J},r.a.createElement(F.HashRouter,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,3,4]]]);
//# sourceMappingURL=main.5878069b.chunk.js.map