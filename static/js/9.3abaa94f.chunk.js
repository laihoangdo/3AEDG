(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,n){(function(t){var n="Expected a function",a=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,f=u||m||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,E=function(){return f.Date.now()};function h(e,t,a){var i,r,c,o,l,s,u=0,m=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError(n);function h(t){var n=i,a=r;return i=r=void 0,u=t,o=e.apply(a,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=c}function y(){var e=E();if(g(e))return C(e);l=setTimeout(y,function(e){var n=t-(e-s);return f?v(n,c-(e-u)):n}(e))}function C(e){return l=void 0,d&&i?h(e):(i=r=void 0,o)}function w(){var e=E(),n=g(e);if(i=arguments,r=this,s=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(y,t),m?h(e):o}(s);if(f)return l=setTimeout(y,t),h(s)}return void 0===l&&(l=setTimeout(y,t)),o}return t=b(t)||0,N(a)&&(m=!!a.leading,c=(f="maxWait"in a)?p(b(a.maxWait)||0,t):c,d="trailing"in a?!!a.trailing:d),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=s=r=l=void 0},w.flush=function(){return void 0===l?o:C(E())},w}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==i}(e))return a;if(N(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=N(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):c.test(e)?a:+e}e.exports=function(e,t,a){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return N(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),h(e,t,{leading:i,maxWait:t,trailing:r})}}).call(this,n(23))},157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});var a=n(6),i=n(7),r=n(9),c=n(8),o=n(10),l=n(0),s=n.n(l),u=n(13),m=n.n(u),f=n(158),d=n.n(f),p=n(121),v=n.n(p),E=n(94),h=n.n(E),N=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={didViewCountUp:!1},n.onVisibilityChange=function(e){e&&n.setState({didViewCountUp:!0})},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{id:"aboutus",className:"fun-facts ptb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 text-center"},s.a.createElement(h.a,{animateIn:"fadeInUp"},s.a.createElement("div",{className:"section-title"},s.a.createElement("h2",null,this.props.sectionTitle),s.a.createElement("h3",null,this.props.sectionDescription),s.a.createElement("span",{className:"section-title-bg"},this.props.SectionbgTitle))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"count-box text-center"},s.a.createElement("div",{className:"glyph"},s.a.createElement(m.a,{icon:"icofont-group-students"})),s.a.createElement("p",null,"H\u1eccC VI\xcaN"),s.a.createElement("h2",{className:"counter"},s.a.createElement(v.a,{onChange:this.onVisibilityChange,offset:{top:10},delayedCall:!0},s.a.createElement(d.a,{start:0,end:this.state.didViewCountUp?250:0,duration:3}))))),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"count-box text-center"},s.a.createElement("div",{className:"glyph"},s.a.createElement(m.a,{icon:"icofont-graduate-alt"})),s.a.createElement("p",null,"\u0110\xc3 HO\xc0N TH\xc0NH KH\xd3A H\u1eccC"),s.a.createElement("h2",{className:"counter"},s.a.createElement(v.a,{onChange:this.onVisibilityChange,offset:{top:10},delayedCall:!0},s.a.createElement(d.a,{start:0,end:this.state.didViewCountUp?150:0,duration:3}))))),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"count-box text-center"},s.a.createElement("div",{className:"glyph"},s.a.createElement(m.a,{icon:"icofont-trophy-alt"})),s.a.createElement("p",null,"VINH DANH"),s.a.createElement("h2",{className:"counter"},s.a.createElement(v.a,{onChange:this.onVisibilityChange,offset:{top:10},delayedCall:!0},s.a.createElement(d.a,{start:0,end:this.state.didViewCountUp?20:0,duration:3})))))))))}}]),t}(l.PureComponent);N.defaultProps={SectionbgTitle:"\u0110\u1ed2 H\u1eccA ANH EM",sectionTitle:"\u0110\u1ed2 H\u1eccA ANH EM GI\xdaP B\u1ea0N G\u1ea6N H\u01a0N V\u1edaI TH\xc0NH C\xd4NG",sectionDescription:"CH\xdaNG T\xd4I \u0110\xc3 V\xc0 \u0110ANG \u0110\xc0O T\u1ea0O"}}}]);
//# sourceMappingURL=9.3abaa94f.chunk.js.map