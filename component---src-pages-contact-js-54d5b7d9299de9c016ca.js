webpackJsonp([70144966829960],{634:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function l(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function u(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&g(e))this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!v(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return x.indexOf(t)>-1?t:e}function c(e,t){t=t||{};var n=t.body;if(e instanceof c){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function m(e){var t=new o,n=e.replace(/\r?\n[\t ]+/g," ");return n.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function y(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},v=ArrayBuffer.isView||function(e){return e&&w.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];c.prototype.clone=function(){return new c(this,{body:this._bodyInit})},f.call(c.prototype),f.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];y.redirect=function(e,t){if(E.indexOf(t)===-1)throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=c,e.Response=y,e.fetch=function(e,t){return new Promise(function(n,r){var o=new c(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new y(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},327:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return e.raw=t,e}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=s(["\n  max-width: ",";\n  margin: 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  input,\n  textarea {\n    font-family: inherit;\n    font-size: inherit;\n    border: none;\n    outline: none;\n    background: ",";\n    color: ",";\n    border-radius: 2px;\n    padding: 1em;\n    &::-webkit-input-placeholder {\n      color: gray;\n    }\n    &::-moz-placeholder {\n      color: gray;\n    }\n    &:-ms-input-placeholder {\n      color: gray;\n    }\n    &:-moz-placeholder {\n      color: gray;\n    }\n    &:required {\n      box-shadow: none;\n    }\n    &:focus {\n      outline: none;\n    }\n  }\n  &::before {\n    content: '';\n    background: black;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    transition: 0.2s all;\n    opacity: ",";\n    visibility: ",";\n  }\n"],["\n  max-width: ",";\n  margin: 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  input,\n  textarea {\n    font-family: inherit;\n    font-size: inherit;\n    border: none;\n    outline: none;\n    background: ",";\n    color: ",";\n    border-radius: 2px;\n    padding: 1em;\n    &::-webkit-input-placeholder {\n      color: gray;\n    }\n    &::-moz-placeholder {\n      color: gray;\n    }\n    &:-ms-input-placeholder {\n      color: gray;\n    }\n    &:-moz-placeholder {\n      color: gray;\n    }\n    &:required {\n      box-shadow: none;\n    }\n    &:focus {\n      outline: none;\n    }\n  }\n  &::before {\n    content: '';\n    background: black;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    transition: 0.2s all;\n    opacity: ",";\n    visibility: ",";\n  }\n"]),d=s(["\n  margin: 0 0 1em 0;\n  width: 100%;\n  @media (min-width: ",") {\n    width: 49%;\n  }\n"],["\n  margin: 0 0 1em 0;\n  width: 100%;\n  @media (min-width: ",") {\n    width: 49%;\n  }\n"]),f=s(["\n  width: 100%;\n  margin: 0 0 1em 0;\n  line-height: 1.6;\n  min-height: 250px;\n  resize: vertical;\n"],["\n  width: 100%;\n  margin: 0 0 1em 0;\n  line-height: 1.6;\n  min-height: 250px;\n  resize: vertical;\n"]),h=s(["\n  background: "," !important;\n  color: white !important;\n  cursor: pointer;\n  transition: 0.2s;\n  &:hover {\n    background: "," !important;\n  }\n"],["\n  background: "," !important;\n  color: white !important;\n  cursor: pointer;\n  transition: 0.2s;\n  &:hover {\n    background: "," !important;\n  }\n"]),c=s(["\n  background: white;\n  padding: 2em;\n  border-radius: 2px;\n  position: fixed;\n  min-width: 75%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n  z-index: 99;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  transition: 0.2s all;\n  opacity: ",";\n  visibility: ",";\n  @media screen and (min-width: ",") {\n    min-width: inherit;\n    max-width: 400px;\n  }\n  p {\n    line-height: 1.6;\n    margin: 0 0 2em 0;\n  }\n"],["\n  background: white;\n  padding: 2em;\n  border-radius: 2px;\n  position: fixed;\n  min-width: 75%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n  z-index: 99;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  transition: 0.2s all;\n  opacity: ",";\n  visibility: ",";\n  @media screen and (min-width: ",") {\n    min-width: inherit;\n    max-width: 400px;\n  }\n  p {\n    line-height: 1.6;\n    margin: 0 0 2em 0;\n  }\n"]),p=s(["\n  background: ",";\n  font-size: 1em;\n  display: inline-block;\n  margin: 0 auto;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: white;\n  padding: 1em;\n  border-radius: 2px;\n  text-decoration: none;\n  transition: 0.2s;\n  z-index: 99;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: ",";\n  }\n"],["\n  background: ",";\n  font-size: 1em;\n  display: inline-block;\n  margin: 0 auto;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: white;\n  padding: 1em;\n  border-radius: 2px;\n  text-decoration: none;\n  transition: 0.2s;\n  z-index: 99;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background: ",";\n  }\n"]),m=n(1),y=r(m),b=n(7),w=r(b),g=n(11),v=r(g);n(634);var x=v.default.form(u,function(e){return e.theme.sizes.maxWidthCentered},function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base},function(e){return e.overlay?".8":"0"},function(e){return e.overlay?"visible":"hidden"}),E=v.default.input(d,function(e){return e.theme.responsive.small}),_=v.default.input(d,function(e){return e.theme.responsive.small}),T=v.default.textarea(f),B=v.default.input(h,function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),A=v.default.div(c,function(e){return e.visible?"1":"0"},function(e){return e.visible?"visible":"hidden"},function(e){return e.theme.responsive.small}),P=v.default.div(p,function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight}),k=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},O=function(e){function t(n){o(this,t);var r=i(this,e.call(this,n));return r.handleInputChange=function(e){var t,n=e.target,o=n.value,i=n.name;r.setState((t={},t[i]=o,t))},r.handleSubmit=function(e){fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:k(l({"form-name":"contact"},r.state))}).then(r.handleSuccess).catch(function(e){return alert(e)}),e.preventDefault()},r.handleSuccess=function(){r.setState({name:"",email:"",message:"",showModal:!0})},r.closeModal=function(){r.setState({showModal:!1})},r.state={name:"",email:"",message:"",showModal:!1},r}return a(t,e),t.prototype.render=function(){return y.default.createElement(x,{name:"contact",onSubmit:this.handleSubmit,"data-netlify":"true","data-netlify-honeypot":"bot",overlay:this.state.showModal,onClick:this.closeModal},y.default.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),y.default.createElement("p",{hidden:!0},y.default.createElement("label",null,"Don’t fill this out:"," ",y.default.createElement("input",{name:"bot",onChange:this.handleInputChange}))),y.default.createElement(E,{name:"name",type:"text",placeholder:"Full Name",value:this.state.name,onChange:this.handleInputChange,required:!0}),y.default.createElement(_,{name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleInputChange,required:!0}),y.default.createElement(T,{name:"message",type:"text",placeholder:"Message",value:this.state.message,onChange:this.handleInputChange,required:!0}),y.default.createElement(B,{name:"submit",type:"submit",value:"Send"}),y.default.createElement(A,{visible:this.state.showModal},y.default.createElement("p",null,"Thank you for reaching out. I will get back to you as soon as possible."),y.default.createElement(P,{onClick:this.closeModal},"Okay")))},t}(y.default.Component);O.propTypes={data:w.default.object},t.default=O,e.exports=t.default},336:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),i=r(o),a=n(48),s=r(a),l=n(50),u=r(l),d=n(70),f=r(d),h=n(100),c=r(h),p=n(327),m=r(p),y=n(101),b=r(y),w=function(e){var t=(e.data,{title:"Contact - "+u.default.siteTitle});return i.default.createElement("div",null,i.default.createElement(s.default,null,i.default.createElement("title",null,"Contact - "+u.default.siteTitle)),i.default.createElement(b.default,{postNode:t,pagePath:"contact",customTitle:!0}),i.default.createElement(f.default,null,i.default.createElement(c.default,null,"Contact"),i.default.createElement(m.default,null)))};t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-54d5b7d9299de9c016ca.js.map