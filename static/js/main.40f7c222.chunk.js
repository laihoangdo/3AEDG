(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{28:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"d",function(){return p});var a=n(14),r=n.n(a),o=n(33),c="FETCH_BLOGS_SUCCESS",l="FETCH_BLOGS_DETAIL_SUCCESS",s="FETCH_BLOGS_ERROR",i=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://nodejssalesforce.herokuapp.com/blogs",{method:"GET",mode:"cors",Headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:c,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:s,payload:e.t0.response.data});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},u=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://nodejssalesforce.herokuapp.com/blogs-limit",{method:"GET",mode:"cors",Headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:c,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:s,payload:e.t0.response.data});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://nodejssalesforce.herokuapp.com/blogs/"+e);case 3:return a=t.sent,t.next=6,a.json();case 6:o=t.sent,n({type:l,payload:o}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"FETCH_BLOGS_DETAIL_ERROR",payload:t.t0.response.data});case 13:case"end":return t.stop()}},t,null,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},64:function(e,t,n){e.exports=n(99)},70:function(e,t,n){},74:function(e,t,n){},93:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=(n(69),n(1)),s=n(22),i=n(23),u=n(25),p=n(24),m=n(26),d=n(10),h=n(55),f=n.n(h),b=n(101),v=(n(70),n(39)),y=n.n(v),E=(n(74),n(43)),j=n.n(E);function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"link-text"},r.a.createElement("a",{href:"tel: 0938636843",title:"Li\xean h\u1ec7 : 0938.6368.43"},r.a.createElement("div",{className:"yourPhone"},r.a.createElement("p",null,r.a.createElement(j.a,{icon:"icofont-ui-dial-phone icofont-3x"}))))))}function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(y.a,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition"}),r.a.createElement(y.a,{ContainerClassName:"AnyClassForContainer",TransitionClassName:"AnyClassForTransition"},r.a.createElement(O,null))))}var g=r.a.lazy(function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,259))}),C=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(7)]).then(n.bind(null,265))}),k=r.a.lazy(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,261))}),x=r.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,262))}),T=[{path:"/home",component:C},{path:"/aboutus",component:r.a.lazy(function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,166))})},{path:"/tin-tuc/tat-ca",component:g},{path:"/tin-tuc/:id",component:k},{path:"/khoa-hoc/:id",component:x},{path:"/",component:C,exact:!0},{path:"*",component:r.a.lazy(function(){return n.e(11).then(n.bind(null,263))})}],S=(n(93),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"divLoader"},r.a.createElement("svg",{className:"svgLoader",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"10em",height:"10em"},r.a.createElement("path",{fill:"#fc0904",d:""})))}}]),t}(a.PureComponent)),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{loader:"comet-spin",color:"#1452d9",size:50},r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(d.d,{render:function(e){var t=e.location;return r.a.createElement(b.a,{key:t.key,timeout:{enter:900,exit:900},classNames:"fade"},r.a.createElement("section",{className:"route-section"},r.a.createElement(d.g,{location:t},T.map(function(e){var t=Object(l.a)({},e);return r.a.createElement(d.d,Object.assign({key:t.path},t))}))))}})),r.a.createElement(O,null),r.a.createElement(w,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(35),F=n(9),_=n(34),L=n(28),R={blogs:[],blogDetail:{}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log("accction",t),t.type){case L.c:return Object(_.a)({},e,{blogs:t.payload});case L.b:return console.log(t.payload),Object(_.a)({},e);case L.a:return Object(_.a)({},e,{blogDetail:t.payload});default:return e}},B=Object(F.combineReducers)({blog:z}),H=n(45),P=n(60),G=n(61),D=[P.a],I=Object(F.createStore)(B,Object(G.composeWithDevTools)(F.applyMiddleware.apply(void 0,D)));c.a.render(r.a.createElement(H.a,{store:I},r.a.createElement(N.HashRouter,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[64,3,4]]]);
//# sourceMappingURL=main.40f7c222.chunk.js.map