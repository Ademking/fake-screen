parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"M2pF":[function(require,module,exports) {
var define;
var t;!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof t&&t.amd?t(n):e.dayjs=n()}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,o=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+d(n,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),s=e-r<0,i=t.clone().add(n+(s?-1:1),"months");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},f="en",l={};l[f]=h;var m=function(t){return t instanceof D},y=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),e&&(l[t]=e,r=t);else{var s=t.name;l[s]=t,r=s}return n||(f=r),r},M=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new D(n)},S=function(t,e){return M(t,{locale:e.$L})},p=$;p.parseLocale=y,p.isDayjs=m,p.wrapper=S;var D=function(){function h(t){this.parse(t)}var d=h.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):p.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},d.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||f},d.$utils=function(){return p},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.$compare=function(t){return this.valueOf()-M(t).valueOf()},d.isSame=function(t){return 0===this.$compare(t)},d.isBefore=function(t){return this.$compare(t)<0},d.isAfter=function(t){return this.$compare(t)>0},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,c){var o=this,h=!!p.isUndefined(c)||c,d=function(t,e){var n=S(new Date(o.$y,e,t),o);return h?n:n.endOf(s)},$=function(t,e){return S(o.toDate()[t].apply(o.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),o)};switch(p.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case"date":return $("setHours",0);case r:return $("setMinutes",1);case n:return $("setSeconds",2);case e:return $("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,c){switch(p.prettyUnit(i)){case s:this.$d.setDate(this.$D+(c-this.$W));break;case"date":this.$d.setDate(c);break;case a:this.$d.setMonth(c);break;case u:this.$d.setFullYear(c);break;case r:this.$d.setHours(c);break;case n:this.$d.setMinutes(c);break;case e:this.$d.setSeconds(c);break;case t:this.$d.setMilliseconds(c)}return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,c){var o=this;t=Number(t);var h,d=p.prettyUnit(c),$=function(e,n){var r=o.set("date",1).set(e,n+t);return r.set("date",Math.min(o.$D,r.daysInMonth()))},f=function(e){var n=new Date(o.$d);return n.setDate(n.getDate()+e*t),S(n,o)};if(d===a)return $(a,this.$M);if(d===u)return $(u,this.$y);if(d===s)return f(1);if(d===i)return f(7);switch(d){case n:h=6e4;break;case r:h=36e5;break;case e:h=1e3;break;default:h=1}var l=this.valueOf()+t*h;return S(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",r=p.padZoneStr(this.$d.getTimezoneOffset()),s=this.$locale(),i=s.weekdays,a=s.months,u=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)};return n.replace(o,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return p.padStart(e.$M+1,2,"0");case"MMM":return u(s.monthsShort,e.$M,a,3);case"MMMM":return a[e.$M];case"D":return String(e.$D);case"DD":return p.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(s.weekdaysMin,e.$W,i,2);case"ddd":return u(s.weekdaysShort,e.$W,i,3);case"dddd":return i[e.$W];case"H":return String(e.$H);case"HH":return p.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:p.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return p.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return p.padStart(e.$s,2,"0");case"SSS":return p.padStart(e.$ms,3,"0");case"Z":return r;default:return r.replace(":","")}})},d.diff=function(t,c,o){var h=p.prettyUnit(c),d=M(t),$=this-d,f=p.monthDiff(this,d);switch(h){case u:f/=12;break;case a:break;case"quarter":f/=3;break;case i:f=$/6048e5;break;case s:f=$/864e5;break;case r:f=$/36e5;break;case n:f=$/6e4;break;case e:f=$/1e3;break;default:f=$}return o?f:p.absFloor(f)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.toDate().toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},h}();return M.extend=function(t,e){return t(e,D,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[f],M});
},{}],"UyjF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDay=r,exports.formatHintDay=o,exports.Timer=void 0;var t=i(require("dayjs"));function i(t){return t&&t.__esModule?t:{default:t}}function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}function r(i){return(0,t.default)().add(i,"day")}function o(t){return t.format("M/D/YYYY HH:mm:ss")}var u=function(){function t(i){e(this,t),this.day=i,this.hour=0,this.minute=0,this.second=0,this.isTimeUp=!1}return s(t,[{key:"tick",value:function(){if(!this.isTimeUp)return 0===this.second?0===this.minute?0===this.hour?0===this.day?(this.isTimeUp=!0,!1):(this.hour=23,this.minute=59,this.second=59,this.day-=1,!0):(this.minute=59,this.second=59,this.hour-=1,!0):(this.second=59,this.minute-=1,!0):(this.second-=1,!0)}},{key:"format",value:function(){var t=(this.day>9?"":"0")+this.day.toString(),i=(this.hour>9?"":"0")+this.hour.toString(),e=(this.minute>9?"":"0")+this.minute.toString(),n=(this.second>9?"":"0")+this.second.toString();return"".concat(t,":").concat(i,":").concat(e,":").concat(n)}}]),t}();exports.Timer=u;
},{"dayjs":"M2pF"}],"cxht":[function(require,module,exports) {

},{}],"Xz1E":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0,require("babel-polyfill");var e=require("./time.js");require("./wannacry.scss");var r=n(require("./wannacry.pug"));function n(e){return e&&e.__esModule?e:{default:e}}var t=function(){return setTimeout(a),r.default};function a(){document.querySelector("#pay-on").innerHTML=(0,e.formatHintDay)((0,e.getDay)(3)),document.querySelector("#lost-on").innerHTML=(0,e.formatHintDay)((0,e.getDay)(7));var r=document.querySelector("#pay"),n=document.querySelector("#lost"),t=new e.Timer(3);r.innerHTML=t.format();var a=setInterval(function(){t.tick()&&document.querySelector(".wannacry-wrapper")?r.innerHTML=t.format():clearInterval(a)},1e3),o=new e.Timer(7);n.innerHTML=o.format();var u=setInterval(function(){o.tick()&&document.querySelector(".wannacry-wrapper")?n.innerHTML=o.format():clearInterval(u)},1e3)}exports.render=t;
},{"babel-polyfill":"JIy0","./time.js":"UyjF","./wannacry.scss":"cxht","./wannacry.pug":"4odx"}]},{},[], null)
//# sourceMappingURL=/fake-screen/wannacry.97c62a79.map