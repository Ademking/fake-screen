parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XiHI":[function(require,module,exports) {

},{}],"M+eS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0;var e=t(require("./google.pug"));require("./google.scss");var r=t(require("./search.pug"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,n,o,u,c){try{var a=e[u](c),i=a.value}catch(s){return void t(s)}a.done?r(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(o,u){var c=e.apply(r,t);function a(e){n(c,o,u,a,i,"next",e)}function i(e){n(c,o,u,a,i,"throw",e)}a(void 0)})}}var u=function(r){r.innerHTML=e.default;try{c()}catch(t){throw t}};function c(){var t=document.querySelector(".google-wrapper"),n=t.querySelector("#enter"),u=t.querySelector("#search");function a(e){return i.apply(this,arguments)}function i(){return(i=o(regeneratorRuntime.mark(function n(o){var u,a,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o.length){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,require("_bundle_loader")(require.resolve("./search.scss"));case 4:t.innerHTML=r.default,u=t.querySelector("#search-in-content"),a=t.querySelector("#search"),i=t.querySelector(".logo"),u.textContent=o,a.value=o,a.focus(),a.onkeypress=function(e){13===e.keyCode&&(u.textContent=a.value)},i.onclick=function(){t.outerHTML=e.default,c()};case 13:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}n.onclick=function(){a(u.value).catch(function(e){throw e})},u.onkeypress=function(e){13===e.keyCode&&a(u.value).then(function(){return console.log("what do you want?")}).catch(function(e){throw e})}}exports.render=u;
},{"./google.pug":"QsY9","./google.scss":"XiHI","./search.pug":"hPj6","_bundle_loader":"z1Am","./search.scss":[["search.977b2dd8.css","lInj"],"search.977b2dd8.map","lInj"]}],"Bh1I":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"z1Am":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new u(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(s))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function s(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),s=n[i];return s?o[e]=s(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}):void 0}function u(r){this.executor=r,this.promise=null}u.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},u.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Bh1I"}],"ln2R":[function(require,module,exports) {
module.exports=function(e){return new Promise(function(n,o){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onerror=function(e){r.onerror=r.onload=null,o(e)},r.onload=function(){r.onerror=r.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("css",require("ln2R"));b.load([["google.2a101e59.html","QsY9"],["search.1507ed3e.html","hPj6"]]).then(function(){require("M+eS");});
},{}]},{},[0], null)
//# sourceMappingURL=/google404.068a82f4.map