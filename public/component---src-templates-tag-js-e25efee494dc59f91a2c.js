webpackJsonp([0x758a40cb69e9],[,,,,,,,,,function(t,e,n){var r=n(86),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){var n=Array.isArray;t.exports=n},,,function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(173),i=n(191);t.exports=r},,,function(t,e,n){function r(t){return null==t?void 0===t?c:u:s&&s in Object(t)?i(t):a(t)}var o=n(22),i=n(188),a=n(215),u="[object Null]",c="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},,,,,function(t,e,n){var r=n(9),o=r.Symbol;t.exports=o},,function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(201),i=n(202),a=n(203),u=n(204),c=n(205);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(61);t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(198);t.exports=r},function(t,e,n){var r=n(13),o=r(Object,"create");t.exports=o},function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(30),i=1/0;t.exports=r},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=n(16),i=n(17),a="[object Symbol]";t.exports=r},,,,,,,,,,,function(t,e,n){var r=n(13),o=n(9),i=r(o,"Map");t.exports=i},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(206),i=n(207),a=n(208),u=n(209),c=n(210);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(u.test(t)||!a.test(t)||null!=e&&t in Object(e))}var o=n(10),i=n(30),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(91),i=n(45);t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){function r(t){return a(t)?o(t):i(t)}var o=n(166),i=n(175),a=n(44);t.exports=r},,,,,,,,,,,,,,function(t,e){function n(t,e){var n=typeof t;return e=null==e?r:e,!!e&&("number"==n||"symbol"!=n&&o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(170),o=n(17),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){return"undefined"==typeof j&&"undefined"!=typeof window&&window.IntersectionObserver&&(j=new window.IntersectionObserver(function(t){t.forEach(function(t){w.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(j.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),j}e.__esModule=!0;var i=n(33),a=r(i),u=n(37),c=r(u),s=n(36),f=r(s),l=n(102),p=r(l),d=n(71),v=r(d),h=n(1),y=r(h),b=n(7),g=r(b),x=function(t){var e=(0,v.default)({},t);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},m={},_=function(t){var e=x(t),n=e.sizes?e.sizes.src:e.resolutions.src;return!!m[n]||(m[n]=!0,!1)},j=void 0,w=[],O=function(t,e){o().observe(t),w.push([t,e])},S=null,E=function(){if(null!==S)return S;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return S=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},z=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.sizes?'sizes="'+t.sizes+'" ':"",o=t.title?'title="'+t.title+'" ':"",i=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",c=t.opacity?t.opacity:"1",s=t.transitionDelay?t.transitionDelay:"0.5s";return"<img "+a+u+e+n+i+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+s+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},A=function(t){var e=t.style,n=t.onLoad,r=(0,p.default)(t,["style","onLoad"]);return y.default.createElement("img",(0,v.default)({},r,{onLoad:n,style:(0,v.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};A.propTypes={style:g.default.object,onLoad:g.default.func};var L=function(t){function e(n){(0,a.default)(this,e);var r=(0,c.default)(this,t.call(this,n)),o=!0,i=!0,u=!1,s=_(n);return!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,u=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,f.default)(e,t),e.prototype.handleRef=function(t){var e=this;this.state.IOSupported&&t&&O(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var t=this,e=x(this.props),n=e.title,r=e.alt,o=e.className,i=e.outerWrapperClassName,a=e.style,u=void 0===a?{}:a,c=e.imgStyle,s=void 0===c?{}:c,f=e.placeholderStyle,l=void 0===f?{}:f,p=e.sizes,d=e.resolutions,h=e.backgroundColor,b=e.Tag,g=void 0;g="boolean"==typeof h?"lightgray":h;var m=(0,v.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},s,l),_=(0,v.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},s);if(p){var j=p;return j.srcWebp&&j.srcSetWebp&&E()&&(j.src=j.srcWebp,j.srcSet=j.srcSetWebp),y.default.createElement(b,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(b,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,v.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},y.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&y.default.createElement(A,{alt:r,title:n,src:j.base64,style:m}),j.tracedSVG&&y.default.createElement(A,{alt:r,title:n,src:j.tracedSVG,style:m}),g&&y.default.createElement(b,{title:n,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(A,{alt:r,title:n,srcSet:j.srcSet,src:j.src,sizes:j.sizes,style:_,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,v.default)({alt:r,title:n},j))}})))}if(d){var w=d,O=(0,v.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},u);return"inherit"===u.display&&delete O.display,w.srcWebp&&w.srcSetWebp&&E()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(b,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},y.default.createElement(b,{className:(o?o:"")+" gatsby-image-wrapper",style:O,ref:this.handleRef},w.base64&&y.default.createElement(A,{alt:r,title:n,src:w.base64,style:m}),w.tracedSVG&&y.default.createElement(A,{alt:r,title:n,src:w.tracedSVG,style:m}),g&&y.default.createElement(b,{title:n,style:{backgroundColor:g,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&y.default.createElement(A,{alt:r,title:n,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:_,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,v.default)({alt:r,title:n,width:w.width,height:w.height},w))}})))}return null},e}(y.default.Component);L.defaultProps={fadeIn:!0,alt:"",Tag:"div"},L.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,placeholderStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},e.default=L},,,function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(24),i=n(220),a=n(221),u=n(222),c=n(223),s=n(224);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(84),i=n(28);t.exports=r},function(t,e,n){function r(t,e,n,a,u){return t===e||(null==t||null==e||!i(t)&&!i(e)?t!==t&&e!==e:o(t,e,n,a,r,u))}var o=n(171),i=n(17);t.exports=r},function(t,e,n){function r(t,e){return o(t)?t:i(t,e)?[t]:a(u(t))}var o=n(10),i=n(43),a=n(225),u=n(232);t.exports=r},function(t,e,n){function r(t,e,n,r,s,f){var l=n&u,p=t.length,d=e.length;if(p!=d&&!(l&&d>p))return!1;var v=f.get(t);if(v&&f.get(e))return v==e;var h=-1,y=!0,b=n&c?new o:void 0;for(f.set(t,e),f.set(e,t);++h<p;){var g=t[h],x=e[h];if(r)var m=l?r(x,g,h,e,t,f):r(g,x,h,t,e,f);if(void 0!==m){if(m)continue;y=!1;break}if(b){if(!i(e,function(t,e){if(!a(b,e)&&(g===t||s(g,t,n,r,f)))return b.push(e)})){y=!1;break}}else if(g!==x&&!s(g,x,n,r,f)){y=!1;break}}return f.delete(t),f.delete(e),y}var o=n(162),i=n(167),a=n(182),u=1,c=2;t.exports=r},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){function r(t){return t===t&&!o(t)}var o=n(29);t.exports=r},function(t,e){function n(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}t.exports=n},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},function(t,e,n){(function(t){var r=n(9),o=n(231),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i,c=u?r.Buffer:void 0,s=c?c.isBuffer:void 0,f=s||o;t.exports=f}).call(e,n(49)(t))},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==u||e==c||e==a||e==s}var o=n(16),i=n(29),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},function(t,e,n){var r=n(174),o=n(118),i=n(214),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},,,,,,,,,,,,,,,,,,,,,,,function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=n},function(t,e,n){function r(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?u(t)?i(t[0],t[1]):o(t):c(t)}var o=n(176),i=n(177),a=n(62),u=n(10),c=n(229);t.exports=r},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return t.raw=e,t}e.__esModule=!0;var i=o(["\n  border: 1px solid ",";\n  border-radius: 2px;\n  margin: 0 0 1em 0;\n  width: 100%;\n  transition: background 0.2s;\n  @media screen and (min-width: ",") {\n    flex: 0 0 49%;\n    margin: 0 0 2vw 0;\n  }\n  @media screen and (min-width: ",") {\n    flex: 0 0 32%;\n  }\n  &:hover {\n    background: ",";\n  }\n  a {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    width: 100%;\n    color: ",";\n    text-decoration: none;\n    .gatsby-image-wrapper {\n      height: 0;\n      padding-bottom: 60%;\n    }\n  }\n"],["\n  border: 1px solid ",";\n  border-radius: 2px;\n  margin: 0 0 1em 0;\n  width: 100%;\n  transition: background 0.2s;\n  @media screen and (min-width: ",") {\n    flex: 0 0 49%;\n    margin: 0 0 2vw 0;\n  }\n  @media screen and (min-width: ",") {\n    flex: 0 0 32%;\n  }\n  &:hover {\n    background: ",";\n  }\n  a {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    width: 100%;\n    color: ",";\n    text-decoration: none;\n    .gatsby-image-wrapper {\n      height: 0;\n      padding-bottom: 60%;\n    }\n  }\n"]),a=o(["\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 1rem 1rem 0.5rem 1rem;\n"],["\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 1rem 1rem 0.5rem 1rem;\n"]),u=o(["\n  margin: 0 1rem 1.5rem 1rem;\n  color: gray;\n"],["\n  margin: 0 1rem 1.5rem 1rem;\n  color: gray;\n"]),c=o(["\n  margin: 0 1rem 1rem 1rem;\n  line-height: 1.6;\n"],["\n  margin: 0 1rem 1rem 1rem;\n  line-height: 1.6;\n"]),s=n(1),f=r(s),l=n(11),p=r(l),d=n(79),v=r(d),h=n(78),y=r(h),b=p.default.li(i,function(t){return t.theme.colors.secondary},function(t){return t.theme.responsive.small},function(t){return t.theme.responsive.medium},function(t){return t.theme.colors.tertiary},function(t){return t.theme.colors.base}),g=p.default.h2(a),x=p.default.h3(u),m=p.default.p(c),_=function(t){return f.default.createElement(b,null,f.default.createElement(v.default,{to:"/"+t.slug+"/"},f.default.createElement(y.default,{sizes:t.image.sizes,backgroundColor:"#eeeeee"}),f.default.createElement(g,null,t.title),f.default.createElement(x,null,t.date),f.default.createElement(m,{dangerouslySetInnerHTML:{__html:t.excerpt.childMarkdownRemark.excerpt}})))};e.default=_,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return t.raw=e,t}e.__esModule=!0;var i=o(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n  &::after {\n    content: '';\n    flex: 0 0 32%;\n  }\n"],["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin: 0 auto;\n  &::after {\n    content: '';\n    flex: 0 0 32%;\n  }\n"]),a=n(1),u=r(a),c=n(11),s=r(c),f=s.default.ul(i),l=function(t){return u.default.createElement(f,null,t.children)};e.default=l,t.exports=e.default},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(13),o=n(9),i=r(o,"DataView");t.exports=i},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(193),i=n(194),a=n(195),u=n(196),c=n(197);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,e,n){var r=n(13),o=n(9),i=r(o,"Promise");t.exports=i},function(t,e,n){var r=n(13),o=n(9),i=r(o,"Set");t.exports=i},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new o;++e<n;)this.add(t[e])}var o=n(42),i=n(217),a=n(218);r.prototype.add=r.prototype.push=i,r.prototype.has=a,t.exports=r},function(t,e,n){var r=n(9),o=r.Uint8Array;t.exports=o},function(t,e,n){var r=n(13),o=n(9),i=r(o,"WeakMap");t.exports=i},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}t.exports=n},function(t,e,n){function r(t,e){var n=a(t),r=!n&&i(t),f=!n&&!r&&u(t),p=!n&&!r&&!f&&s(t),d=n||r||f||p,v=d?o(t.length,String):[],h=v.length;for(var y in t)!e&&!l.call(t,y)||d&&("length"==y||f&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,h))||v.push(y);return v}var o=n(180),i=n(63),a=n(10),u=n(90),c=n(60),s=n(92),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},function(t,e,n){function r(t,e,n){var r=e(t);return i(t)?r:o(r,n(t))}var o=n(116),i=n(10);t.exports=r},function(t,e){function n(t,e){return null!=t&&e in Object(t)}t.exports=n},function(t,e,n){function r(t){return i(t)&&o(t)==a}var o=n(16),i=n(17),a="[object Arguments]";t.exports=r},function(t,e,n){function r(t,e,n,r,y,g){var x=s(t),m=s(e),_=x?v:c(t),j=m?v:c(e);_=_==d?h:_,j=j==d?h:j;var w=_==h,O=j==h,S=_==j;if(S&&f(t)){if(!f(e))return!1;x=!0,w=!1}if(S&&!w)return g||(g=new o),x||l(t)?i(t,e,n,r,y,g):a(t,e,_,n,r,y,g);if(!(n&p)){var E=w&&b.call(t,"__wrapped__"),z=O&&b.call(e,"__wrapped__");if(E||z){var A=E?t.value():t,L=z?e.value():e;return g||(g=new o),y(A,L,n,r,g)}}return!!S&&(g||(g=new o),u(t,e,n,r,y,g))}var o=n(81),i=n(85),a=n(184),u=n(185),c=n(190),s=n(10),f=n(90),l=n(92),p=1,d="[object Arguments]",v="[object Array]",h="[object Object]",y=Object.prototype,b=y.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r){var c=n.length,s=c,f=!r;if(null==t)return!s;for(t=Object(t);c--;){var l=n[c];if(f&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++c<s;){l=n[c];var p=l[0],d=t[p],v=l[1];if(f&&l[2]){if(void 0===d&&!(p in t))return!1}else{var h=new o;if(r)var y=r(d,v,p,t,e,h);if(!(void 0===y?i(v,d,a|u,r,h):y))return!1}}return!0}var o=n(81),i=n(83),a=1,u=2;t.exports=r},function(t,e,n){function r(t){if(!a(t)||i(t))return!1;var e=o(t)?v:s;return e.test(u(t))}var o=n(91),i=n(199),a=n(29),u=n(89),c=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,d=l.hasOwnProperty,v=RegExp("^"+p.call(d).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return a(t)&&i(t.length)&&!!k[o(t)]}var o=n(16),i=n(45),a=n(17),u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",p="[object Function]",d="[object Map]",v="[object Number]",h="[object Object]",y="[object RegExp]",b="[object Set]",g="[object String]",x="[object WeakMap]",m="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",E="[object Int32Array]",z="[object Uint8Array]",A="[object Uint8ClampedArray]",L="[object Uint16Array]",T="[object Uint32Array]",k={};k[j]=k[w]=k[O]=k[S]=k[E]=k[z]=k[A]=k[L]=k[T]=!0,k[u]=k[c]=k[m]=k[s]=k[_]=k[f]=k[l]=k[p]=k[d]=k[v]=k[h]=k[y]=k[b]=k[g]=k[x]=!1,t.exports=r},function(t,e,n){function r(t){if(!o(t))return i(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(200),i=n(213),a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=i(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||o(n,t,e)}}var o=n(172),i=n(187),a=n(88);t.exports=r},function(t,e,n){function r(t,e){return u(t)&&c(e)?s(f(t),e):function(n){var r=i(n,t);return void 0===r&&r===e?a(n,t):o(e,r,l|p)}}var o=n(83),i=n(226),a=n(227),u=n(43),c=n(87),s=n(88),f=n(28),l=1,p=2;t.exports=r},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e,n){function r(t){return function(e){return o(e,t)}}var o=n(82);t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(u(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}var o=n(22),i=n(115),a=n(10),u=n(30),c=1/0,s=o?o.prototype:void 0,f=s?s.toString:void 0;t.exports=r},function(t,e){function n(t,e){return t.has(e)}t.exports=n},function(t,e,n){var r=n(9),o=r["__core-js_shared__"];t.exports=o},function(t,e,n){function r(t,e,n,r,o,w,S){switch(n){case j:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!w(new i(t),new i(e)));case p:case d:case y:return a(+t,+e);case v:return t.name==e.name&&t.message==e.message;case b:case x:return t==e+"";case h:var E=c;case g:var z=r&f;if(E||(E=s),t.size!=e.size&&!z)return!1;var A=S.get(t);if(A)return A==e;r|=l,S.set(t,e);var L=u(E(t),E(e),r,o,w,S);return S.delete(t),L;case m:if(O)return O.call(t)==O.call(e)}return!1}var o=n(22),i=n(163),a=n(61),u=n(85),c=n(211),s=n(219),f=1,l=2,p="[object Boolean]",d="[object Date]",v="[object Error]",h="[object Map]",y="[object Number]",b="[object RegExp]",g="[object Set]",x="[object String]",m="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",w=o?o.prototype:void 0,O=w?w.valueOf:void 0;t.exports=r},function(t,e,n){function r(t,e,n,r,a,c){var s=n&i,f=o(t),l=f.length,p=o(e),d=p.length;if(l!=d&&!s)return!1;for(var v=l;v--;){var h=f[v];if(!(s?h in e:u.call(e,h)))return!1}var y=c.get(t);if(y&&c.get(e))return y==e;var b=!0;c.set(t,e),c.set(e,t);for(var g=s;++v<l;){h=f[v];var x=t[h],m=e[h];if(r)var _=s?r(m,x,h,e,t,c):r(x,m,h,t,e,c);if(!(void 0===_?x===m||a(x,m,n,r,c):_)){b=!1;break}g||(g="constructor"==h)}if(b&&!g){var j=t.constructor,w=e.constructor;j!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof j&&j instanceof j&&"function"==typeof w&&w instanceof w)&&(b=!1)}return c.delete(t),c.delete(e),b}var o=n(186),i=1,a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){return o(t,a,i)}var o=n(168),i=n(189),a=n(46);t.exports=r},function(t,e,n){function r(t){for(var e=i(t),n=e.length;n--;){var r=e[n],a=t[r];e[n]=[r,a,o(a)]}return e}var o=n(87),i=n(46);t.exports=r},function(t,e,n){function r(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}var o=n(22),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){var r=n(165),o=n(230),i=Object.prototype,a=i.propertyIsEnumerable,u=Object.getOwnPropertySymbols,c=u?function(t){return null==t?[]:(t=Object(t),r(u(t),function(e){return a.call(t,e)}))}:o;t.exports=c},function(t,e,n){var r=n(158),o=n(41),i=n(160),a=n(161),u=n(164),c=n(16),s=n(89),f="[object Map]",l="[object Object]",p="[object Promise]",d="[object Set]",v="[object WeakMap]",h="[object DataView]",y=s(r),b=s(o),g=s(i),x=s(a),m=s(u),_=c;(r&&_(new r(new ArrayBuffer(1)))!=h||o&&_(new o)!=f||i&&_(i.resolve())!=p||a&&_(new a)!=d||u&&_(new u)!=v)&&(_=function(t){var e=c(t),n=e==l?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case y:return h;case b:return f;case g:return p;case x:return d;case m:return v}return e}),t.exports=_},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(t,e,n){e=o(e,t);for(var r=-1,f=e.length,l=!1;++r<f;){var p=s(e[r]);if(!(l=null!=t&&n(t,p)))break;t=t[p]}return l||++r!=f?l:(f=null==t?0:t.length,!!f&&c(f)&&u(p,f)&&(a(t)||i(t)))}var o=n(84),i=n(63),a=n(10),u=n(60),c=n(45),s=n(28);t.exports=r},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(27);t.exports=r},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return u.call(e,t)?e[t]:void 0}var o=n(27),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(27),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(27),i="__lodash_hash_undefined__";t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(183),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e){function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}var r=Object.prototype;t.exports=n},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}var o=n(25),i=Array.prototype,a=i.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(25);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(25);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(25);t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(159),i=n(24),a=n(41);t.exports=r},function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(26);t.exports=r},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(26);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(26);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(26);t.exports=r},function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}t.exports=n},function(t,e,n){function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(228),i=500;t.exports=r},function(t,e,n){var r=n(216),o=r(Object.keys,Object);t.exports=o},function(t,e,n){(function(t){var r=n(86),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o,u=a&&r.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t?t:u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(e,n(49)(t))},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}t.exports=n},function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(24);t.exports=r},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<u-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(r)}return n.set(t,e),this.size=n.size,this}var o=n(24),i=n(41),a=n(42),u=200;t.exports=r},function(t,e,n){var r=n(212),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)}),e});t.exports=a},function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(82);t.exports=r},function(t,e,n){function r(t,e){return null!=t&&i(t,e,o)}var o=n(169),i=n(192);t.exports=r},function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(42),i="Expected a function";r.Cache=o,t.exports=r},function(t,e,n){function r(t){return a(t)?o(u(t)):i(t)}var o=n(178),i=n(179),a=n(43),u=n(28);t.exports=r},function(t,e){function n(){return[]}t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(181);t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(1),i=r(o),a=n(523),u=r(a),c=n(48),s=r(c),f=n(50),l=r(f),p=n(127),d=r(p),v=n(128),h=r(v),y=n(100),b=r(y),g=n(70),x=r(g),m=function(t){var e=t.data,n=e.contentfulTag,r=n.title,o=n.slug,a=(0,u.default)(e.contentfulTag.post,"publishDate").reverse();return i.default.createElement("div",null,i.default.createElement(s.default,null,i.default.createElement("title",null,"Tag: "+r+" - "+l.default.siteTitle),i.default.createElement("meta",{property:"og:title",content:"Tag: "+r+" - "+l.default.siteTitle}),i.default.createElement("meta",{property:"og:url",content:l.default.siteUrl+"/tag/"+o+"/"})),i.default.createElement(x.default,null,i.default.createElement(b.default,{small:!0},"Tag: “",r,"”"),i.default.createElement(h.default,null,a.map(function(t){return i.default.createElement(d.default,{key:t.id,slug:t.slug,image:t.heroImage,title:t.title,date:t.publishDate,excerpt:t.body})}))))};e.query="** extracted graphql fragment **";e.default=m},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){var r=n(503),o=n(511),i=o(r);t.exports=i},,function(t,e,n){function r(t,e,n,a,u){var c=-1,s=t.length;for(n||(n=i),u||(u=[]);++c<s;){var f=t[c];e>0&&n(f)?e>1?r(f,e-1,n,a,u):o(u,f):a||(u[u.length]=f)}return u}var o=n(116),i=n(515);t.exports=r},function(t,e,n){var r=n(512),o=r();t.exports=o},function(t,e,n){function r(t,e){return t&&o(t,e,i)}var o=n(502),i=n(46);t.exports=r},function(t,e,n){function r(t,e){var n=-1,r=i(t)?Array(t.length):[];return o(t,function(t,o,i){r[++n]=e(t,o,i)}),r}var o=n(499),i=n(44);t.exports=r},function(t,e,n){function r(t,e,n){var r=-1;e=o(e.length?e:[f],c(i));var l=a(t,function(t,n,i){var a=o(e,function(e){return e(t)});return{criteria:a,index:++r,value:t}});return u(l,function(t,e){return s(t,e,n)})}var o=n(115),i=n(117),a=n(504),u=n(508),c=n(118),s=n(510),f=n(62);t.exports=r},function(t,e,n){function r(t,e){return a(i(t,e,o),t+"")}var o=n(62),i=n(517),a=n(518);t.exports=r},function(t,e,n){var r=n(520),o=n(514),i=n(62),a=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=a},function(t,e){function n(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}t.exports=n},function(t,e,n){function r(t,e){if(t!==e){var n=void 0!==t,r=null===t,i=t===t,a=o(t),u=void 0!==e,c=null===e,s=e===e,f=o(e);if(!c&&!f&&!a&&t>e||a&&u&&s&&!c&&!f||r&&u&&s||!n&&s||!i)return 1;if(!r&&!a&&!f&&t<e||f&&n&&i&&!r&&!a||c&&n&&i||!u&&i||!s)return-1}return 0}var o=n(30);t.exports=r},function(t,e,n){function r(t,e,n){for(var r=-1,i=t.criteria,a=e.criteria,u=i.length,c=n.length;++r<u;){var s=o(i[r],a[r]);if(s){if(r>=c)return s;var f=n[r];return s*("desc"==f?-1:1)}}return t.index-e.index}var o=n(509);t.exports=r},function(t,e,n){function r(t,e){return function(n,r){if(null==n)return n;if(!o(n))return t(n,r);for(var i=n.length,a=e?i:-1,u=Object(n);(e?a--:++a<i)&&r(u[a],a,u)!==!1;);return n}}var o=n(44);t.exports=r},function(t,e){function n(t){return function(e,n,r){for(var o=-1,i=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++o];if(n(i[c],c,i)===!1)break}return e}}t.exports=n},,function(t,e,n){var r=n(13),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){function r(t){return a(t)||i(t)||!!(u&&t&&t[u])}var o=n(22),i=n(63),a=n(10),u=o?o.isConcatSpreadable:void 0;t.exports=r},function(t,e,n){function r(t,e,n){
if(!u(n))return!1;var r=typeof e;return!!("number"==r?i(n)&&a(e,n.length):"string"==r&&e in n)&&o(n[e],t)}var o=n(61),i=n(44),a=n(60),u=n(29);t.exports=r},function(t,e,n){function r(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,a=-1,u=i(r.length-e,0),c=Array(u);++a<u;)c[a]=r[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=r[a];return s[e]=n(c),o(t,this,s)}}var o=n(498),i=Math.max;t.exports=r},function(t,e,n){var r=n(507),o=n(519),i=o(r);t.exports=i},function(t,e){function n(t){var e=0,n=0;return function(){var a=i(),u=o-(a-n);if(n=a,u>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;t.exports=n},function(t,e){function n(t){return function(){return t}}t.exports=n},,,function(t,e,n){var r=n(501),o=n(505),i=n(506),a=n(516),u=i(function(t,e){if(null==t)return[];var n=e.length;return n>1&&a(t,e[0],e[1])?e=[]:n>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),o(t,r(e,1),[])});t.exports=u}]);
//# sourceMappingURL=component---src-templates-tag-js-e25efee494dc59f91a2c.js.map