!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t){var n=function(){var e=!1;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}();n.open("GET",e,!0),n.setRequestHeader("Accept-Language","zh-CN,zh;q=0.9"),n.send(),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;t(e)}else 4==n.readyState&&200!=n.status&&t()}};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={zh_cn:{name:"zh_cn",lang:{}}},f={item:[],eimt:function(e){this.item.forEach((function(e){e(u[l.langType]&&u[l.langType].lang)}))},addUpdateEvent:function(e){this.item.push(e)}},l={name:"echlang"};l.lang=u,l.langType="zh_cn",l.init=function(e,t){var n=e.langType,r=void 0===n?"zh_cn":n,a=e.fileUrl,i="".concat(void 0===a?"/lang":a,"/").concat(r,".json"),c=this;o(i,(function(e){e?c.addLang(r,JSON.parse(e)):console.warn("lang file load fail"),l.setLangType(r),t&&t()}))},l.onUpdateLang=function(e){f.item.push(e)},l.badge="",l.connect=function(e){this.badge=e(this)},l.setLangType=function(e){l.langType=e,f.eimt()},l.addLang=function(e,t,n){u[e]||(u[e]={name:e,lang:{}}),u[e].lang=n?t:i(i({},u[e].lang),t)},l.utils={},l.utils.getDefaultMessage=function(e){var t=u[l.langType]&&u[l.langType].lang&&u[l.langType].lang[e.id];return t?(e.values&&(t=t.format(e.values)),l.badge?l.create(i({message:t},e),l.badge):t):(console.warn("can not find defaultMessage id ".concat(e.id," ").concat(e.defaultMessage)),t=e.defaultMessage,e.values&&(t=t.format(e.values)),l.badge?l.create(i({message:t},e),l.badge):t)},l.utils.getCookies=function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},o=0;o<t.length;o++){var r=t[o].split("=");n[r[0]]=r[1]}return n[e]}},l.utils.setCookies=function(e,t){if("undefined"!=typeof document&&(!arguments.length||e)){var n=document.cookie?document.cookie.split("; "):[];n.push("".concat(e,"=").concat(t)),document.cookie=n.join("; ")}},String.prototype.format=function(e){var t=this;if(arguments.length>0)if(1==arguments.length&&"object"==r(e)){for(var n in e)if(null!=e[n]){var o=new RegExp("({"+n+"})","g");t=t.replace(o,e[n])}}else for(var a=0;a<arguments.length;a++)if(null!=arguments[a]){o=new RegExp("({)"+a+"(})","g");t=t.replace(o,arguments[a])}return t},String.format=function(){if(0==arguments.length)return null;for(var e=arguments[0],t=1;t<arguments.length;t++){var n=new RegExp("\\{"+(t-1)+"\\}","gm");e=e.replace(n,arguments[t])}return e};t.default=l}])}));