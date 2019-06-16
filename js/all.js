///<jscompress sourcefile="zepto.js" />
/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});;
///<jscompress sourcefile="touch.js" />
//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture,
    down, up, move,
    eventMap,
    initialized = false

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  // helper function for tests, so they check for different APIs
  function unregisterTouchEvents(){
    if (!initialized) return
    $(document).off(eventMap.down, down)
      .off(eventMap.up, up)
      .off(eventMap.move, move)
      .off(eventMap.cancel, cancelAll)
    $(window).off('scroll', cancelAll)
    cancelAll()
    initialized = false
  }

  function setup(__eventMap){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    unregisterTouchEvents()

    eventMap = (__eventMap && ('down' in __eventMap)) ? __eventMap :
      ('ontouchstart' in document ?
      { 'down': 'touchstart', 'up': 'touchend',
        'move': 'touchmove', 'cancel': 'touchcancel' } :
      'onpointerdown' in document ?
      { 'down': 'pointerdown', 'up': 'pointerup',
        'move': 'pointermove', 'cancel': 'pointercancel' } :
       'onmspointerdown' in document ?
      { 'down': 'MSPointerDown', 'up': 'MSPointerUp',
        'move': 'MSPointerMove', 'cancel': 'MSPointerCancel' } : false)

    // No API availables for touch events
    if (!eventMap) return

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body

      $(document)
        .bind('MSGestureEnd', function(e){
          var swipeDirectionFromVelocity =
            e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null
          if (swipeDirectionFromVelocity) {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
          }
        })
    }

    down = function(e){
      if((_isPointerType = isPointerEventType(e, 'down')) &&
        !isPrimaryTouch(e)) return
      firstTouch = _isPointerType ? e : e.touches[0]
      if (e.touches && e.touches.length === 1 && touch.x2) {
        // Clear out touch movement data if we have it sticking around
        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
        touch.x2 = undefined
        touch.y2 = undefined
      }
      now = Date.now()
      delta = now - (touch.last || now)
      touch.el = $('tagName' in firstTouch.target ?
        firstTouch.target : firstTouch.target.parentNode)
      touchTimeout && clearTimeout(touchTimeout)
      touch.x1 = firstTouch.pageX
      touch.y1 = firstTouch.pageY
      if (delta > 0 && delta <= 250) touch.isDoubleTap = true
      touch.last = now
      longTapTimeout = setTimeout(longTap, longTapDelay)
      // adds the current touch contact for IE gesture recognition
      if (gesture && _isPointerType) gesture.addPointer(e.pointerId)
    }

    move = function(e){
      if((_isPointerType = isPointerEventType(e, 'move')) &&
        !isPrimaryTouch(e)) return
      firstTouch = _isPointerType ? e : e.touches[0]
      cancelLongTap()
      touch.x2 = firstTouch.pageX
      touch.y2 = firstTouch.pageY

      deltaX += Math.abs(touch.x1 - touch.x2)
      deltaY += Math.abs(touch.y1 - touch.y2)
    }

    up = function(e){
      if((_isPointerType = isPointerEventType(e, 'up')) &&
        !isPrimaryTouch(e)) return
      cancelLongTap()

      // swipe
      if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
          (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

        swipeTimeout = setTimeout(function() {
          if (touch.el){
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
          }
          touch = {}
        }, 0)

      // normal tap
      else if ('last' in touch)
        // don't fire tap when delta position changed by more than 30 pixels,
        // for instance when moving to a point and back to origin
        if (deltaX < 30 && deltaY < 30) {
          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
          // ('tap' fires before 'scroll')
          tapTimeout = setTimeout(function() {

            // trigger universal 'tap' with the option to cancelTouch()
            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
            var event = $.Event('tap')
            event.cancelTouch = cancelAll
            // [by paper] fix -> "TypeError: 'undefined' is not an object (evaluating 'touch.el.trigger'), when double tap
            if (touch.el) touch.el.trigger(event)

            // trigger double tap immediately
            if (touch.isDoubleTap) {
              if (touch.el) touch.el.trigger('doubleTap')
              touch = {}
            }

            // trigger single tap after 250ms of inactivity
            else {
              touchTimeout = setTimeout(function(){
                touchTimeout = null
                if (touch.el) touch.el.trigger('singleTap')
                touch = {}
              }, 250)
            }
          }, 0)
        } else {
          touch = {}
        }
        deltaX = deltaY = 0
    }

    $(document).on(eventMap.up, up)
      .on(eventMap.down, down)
      .on(eventMap.move, move)

    // when the browser window loses focus,
    // for example when a modal dialog is shown,
    // cancel all ongoing events
    $(document).on(eventMap.cancel, cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)

    initialized = true
  }

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })

  $.touch = { setup: setup } 

  $(document).ready(setup)
})(Zepto);
///<jscompress sourcefile="coffee.js" />
/**
 *  音符漂浮插件
 *  -----------------------------
 *  时间：2014-03-21
 *  准则：zepto
 *  一张网页，要经历怎样的过程，才能抵达用户面前
 *  一个特效，要经历这样的修改，才能让用户点个赞
 *  一个产品，创意源于生活，源于内心，需要慢慢品味
 *********************************************************************************************
 *  
 * -----------保持队形------------------
 *  <div id='coffee'></div>
 *********************************************************************************************/
//     Zepto.js
//     (c) 2010-2014 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, (duration * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

// 音符的漂浮的插件制作--zpeto扩展
;(function($){
  // 利用zpeto的animate的动画-css3的动画-easing为了css3的easing(zpeto没有提供easing的扩展)
	$.fn.coffee = function(option){
    // 动画定时器
    var __time_val=null;
    var __time_wind=null;
    var __flyFastSlow = 'cubic-bezier(.09,.64,.16,.94)';

    // 初始化函数体，生成对应的DOM节点
		var $coffee = $(this);
		var opts = $.extend({},$.fn.coffee.defaults,option);  // 继承传入的值

    // 漂浮的DOM
    var coffeeSteamBoxWidth = opts.steamWidth;
    var $coffeeSteamBox = $('<div class="coffee-steam-box"></div>')
      .css({
        'height'   : opts.steamHeight,
        'width'    : opts.steamWidth,
        'left'     : 60,
        'top'      : -50,
        'position' : 'absolute',
        'overflow' : 'hidden',
        'z-index'  : 0 
      })
      .appendTo($coffee);

    // 动画停止函数处理
    $.fn.coffee.stop = function(){
      clearInterval(__time_val);
      clearInterval(__time_wind);
    }

    // 动画开始函数处理
    $.fn.coffee.start = function(){
      __time_val = setInterval(function(){
        steam();
      }, rand( opts.steamInterval / 2 , opts.steamInterval * 2 ));

      __time_wind = setInterval(function(){
        wind();
      },rand( 100 , 1000 )+ rand( 1000 , 3000))
    }
		return $coffee;
		
    // 生成漂浮物
    function steam(){	
      // 设置飞行体的样式
			var fontSize = rand( 8 , opts.steamMaxSize  ) ;     // 字体大小
      var steamsFontFamily = randoms( 1, opts.steamsFontFamily ); // 字体类型
      var color = '#'+ randoms(6 , '0123456789ABCDEF' );  // 字体颜色
			var position = rand( 0, 44 );                       // 起初位置
			var rotate = rand(-90,89);                          // 旋转角度
			var scale = rand02(0.4,1);                          // 大小缩放
      var transform =  $.fx.cssPrefix+'transform';        // 设置音符的旋转角度和大小
          transform = transform+':rotate('+rotate+'deg) scale('+scale+');'

      // 生成fly飞行体
			var $fly = $('<span class="coffee-steam">'+ randoms( 1, opts.steams ) +'</span>');
			var left = rand( 0 , coffeeSteamBoxWidth - opts.steamWidth - fontSize );
			if( left > position ) left = rand( 0 , position );
			$fly
        .css({
          'position'     : 'absolute',
          'left'         : position,
          'top'          : opts.steamHeight,
          'font-size:'   : fontSize+'px',
          'color'        : color,
          'font-family'  : steamsFontFamily,
          'display'      : 'block',
          'opacity'      : 1
        })
        .attr('style',$fly.attr('style')+transform)
        .appendTo($coffeeSteamBox)
        .animate({
  				top		: rand(opts.steamHeight/2,0),
  				left	: left,
  				opacity	: 0
			  },rand( opts.steamFlyTime / 2 , opts.steamFlyTime * 1.2 ),__flyFastSlow,function(){
				  $fly.remove();
				  $fly = null;			
			 });
		};
		
    // 风行，可以让漂浮体，左右浮动
		function wind(){
      // 左右浮动的范围值
      var left = rand( -10 , 10 );
      left += parseInt($coffeeSteamBox.css('left'));
      if(left>=54) left=54;
      else if(left<=34) left=34;

      // 移动的函数
      $coffeeSteamBox.animate({
        left  : left 
      } , rand( 1000 , 3000) ,__flyFastSlow);
		};
		
    // 随即一个值
    // 可以传入一个数组和一个字符串
    // 传入数组的话，随即获取一个数组的元素
    // 传入字符串的话，随即获取其中的length的字符
		function randoms( length , chars ) {
			length = length || 1 ;
			var hash = '';                  // 
			var maxNum = chars.length - 1;  // last-one
			var num = 0;                    // fisrt-one
			for( i = 0; i < length; i++ ) {
				num = rand( 0 , maxNum - 1  );
				hash += chars.slice( num , num + 1 );
			}
			return hash;
		};

    // 随即一个数值的范围中的值--整数
		function rand(mi,ma){   
			var range = ma - mi;
			var out = mi + Math.round( Math.random() * range) ;	
			return parseInt(out);
		};	

    // 随即一个数值的范围中的值--浮点
		function rand02(mi,ma){   
			var range = ma - mi;
			var out = mi + Math.random() * range;	
			return parseFloat(out);
		};		
	};

	$.fn.coffee.defaults = {
		steams				    : ['jQuery','HTML5','HTML6','CSS2','CSS3','JS','$.fn()','char','short','if','float','else','type','case','function','travel','return','array()','empty()','eval','C++','JAVA','PHP','JSP','.NET','while','this','$.find();','float','$.ajax()','addClass','width','height','Click','each','animate','cookie','bug','Design','Julying','$(this)','i++','Chrome','Firefox','Firebug','IE6','Guitar' ,'Music' ,'攻城师' ,'旅行' ,'王子墨','啤酒'], /*漂浮物的类型，种类*/
		steamsFontFamily	: ['Verdana','Geneva','Comic Sans MS','MS Serif','Lucida Sans Unicode','Times New Roman','Trebuchet MS','Arial','Courier New','Georgia'],  /*漂浮物的字体类型*/
		steamFlyTime		  : 5000 , /*Steam飞行的时间,单位 ms 。（决定steam飞行速度的快慢）*/
		steamInterval	    : 500 ,  /*制造Steam时间间隔,单位 ms.*/
		steamMaxSize		  : 30 ,   /*随即获取漂浮物的字体大小*/
		steamHeight	  	  : 200,   /*飞行体的高度*/
		steamWidth	      : 300    /*飞行体的宽度*/
	};
	$.fn.coffee.version = '2.0.0'; // 更新为音符的悬浮---重构的代码
})(Zepto);

;
///<jscompress sourcefile="preload.js" />
(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.preLoad = factory();
	}
})(this, function() {
	/**   
	 * @param imgList 要加载的图片元素列表，[]  或者获取图片列表的回调函数 
	 * @param callback 每成功加载一个图片之后的回调，并传入“已加载的图片总数/要加载的图片总数”表示进度 ，times 表示耗费的时间  
	 * @param timeout 每个图片加载的超时时间，默认为2s   
	 */
	   
	var  loader  =   function (imgList,  callback,  timeout)  {   
		timeout  =  timeout  ||  3000;   
		$imgList  =  $.isArray(imgList)  &&  imgList  ||  $.isFunction(imgList) && imgList.call(this) || [];   
		callback  = $.isFunction(callback) &&  callback;   
		var  total  =  $imgList.length, //图片总数
			loaded  =  0, //已加载数量
			imgages  =   [],
			times = 0, //花费的时间毫秒
			_on  =   function ($source, isimg, fromtime)  { //正在加载的回调函数 
				times = times + new Date().getTime() - fromtime;
				loaded  <  total  &&  (++loaded,  callback  &&  callback(loaded  /  total, times));   
				if(isimg) {
					$source.attr("src", $source.data("src"))
				} else {
					$source.css('background-image', 'url(' + $source.data("src") + ')');
				}
			};   
		if (!total)  {   
			return  callback  &&  callback(1);   
		}   
		//预加载
		var num = 0;
		for (var  i  =  0;  i  <  total;  i++)  {  
			var $img = $imgList[i];  //let 
			//如果是img
			if($img.is('img')) {
				if(!$img.attr("src") && $img.attr('data-src')) { //如果没有图片
					imgages[num]  = new  Image();
					imgages[num].onload = imgages[num].onerror = (function($img) {
						_on.call($img, $img, true, new Date().getTime());
					})($img)  
					imgages[num].src = $img.data("src"); 
					num++;
				}
			} // 如果是背景图 
			else {
				if((!$img.css("background-image") || $img.css("background-image") == "none") && $img.attr('data-src')) {
					imgages[num]  = new  Image();   
					imgages[num].onload = imgages[num].onerror = (function($img) {
						_on.call(this, $img, false, new Date().getTime());
					} )($img)  
					imgages[num].src = $img.data("src"); 
					num++;
				}
			}

		}   
		/**   
		 * 如果timeout * total时间范围内，仍有图片未加载出来（判断条件是loaded < total），通知外部环境所有图片均已加载   
		 * 目的是避免用户等待时间过长   
		 */
		 
		setTimeout(function ()  {   
			loaded  <  total  &&  (loaded  =  total,  callback  &&  callback(loaded  /  total, times));   
		},  timeout  *  total);   
	};  
	return loader; 
})  ;
///<jscompress sourcefile="loader.js" />
/* super inefficient right now, could be improved */
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if(!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if(!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());
var lightLoader = function(c) {
	ctx = c.getContext('2d'),
		cw = c.width /*= 400*/ ,
		ch = c.height /* = 300*/ ,
		rand = function(a, b) {
			return ~~((Math.random() * (b - a + 1)) + a);
		},
		dToR = function(degrees) {
			return degrees * (Math.PI / 180);
		},
		circle = {
			x: (cw / 2) + 5,
			y: (ch / 2) + 22,
			radius: 80,
			speed: 7,
			rotation: 0,
			angleStart: 270,
			angleEnd: 90,
			hue: 220,
			thickness: 18,
			blur: 25
		},
		particles = [],
		particleMax = 100,
		updateCircle = function() {
			if(circle.rotation < 360) {
				circle.rotation += circle.speed;
			} else {
				circle.rotation = 0;
			}
		},
		renderCircle = function() {
			ctx.save();
			ctx.translate(circle.x, circle.y);
			ctx.rotate(dToR(circle.rotation));
			ctx.beginPath();
			ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
			ctx.lineWidth = circle.thickness;
			ctx.strokeStyle = gradient1;
			ctx.stroke();
			ctx.restore();
		},
		renderCircleBorder = function() {
			ctx.save();
			ctx.translate(circle.x, circle.y);
			ctx.rotate(dToR(circle.rotation));
			ctx.beginPath();
			ctx.arc(0, 0, circle.radius + (circle.thickness / 2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
			ctx.lineWidth = 2;
			ctx.strokeStyle = gradient2;
			ctx.stroke();
			ctx.restore();
		},
		renderCircleFlare = function() {
			ctx.save();
			ctx.translate(circle.x, circle.y);
			ctx.rotate(dToR(circle.rotation + 185));
			ctx.scale(1, 1);
			ctx.beginPath();
			ctx.arc(0, circle.radius, 30, 0, Math.PI * 2, false);
			ctx.closePath();
			var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 30);
			gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .35)');
			gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
			ctx.fillStyle = gradient3;
			ctx.fill();
			ctx.restore();
		},
		renderCircleFlare2 = function() {
			ctx.save();
			ctx.translate(circle.x, circle.y);
			ctx.rotate(dToR(circle.rotation + 165));
			ctx.scale(1.5, 1);
			ctx.beginPath();
			ctx.arc(0, circle.radius, 25, 0, Math.PI * 2, false);
			ctx.closePath();
			var gradient4 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 25);
			gradient4.addColorStop(0, 'hsla(30, 100%, 50%, .2)');
			gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
			ctx.fillStyle = gradient4;
			ctx.fill();
			ctx.restore();
		},
		createParticles = function() {
			if(particles.length < particleMax) {
				particles.push({
					x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
					y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
					vx: (rand(0, 100) - 50) / 1000,
					vy: (rand(0, 100) - 50) / 1000,
					radius: rand(1, 6) / 2,
					alpha: rand(10, 20) / 100
				});
			}
		},
		updateParticles = function() {
			var i = particles.length;
			while(i--) {
				var p = particles[i];
				p.vx += (rand(0, 100) - 50) / 750;
				p.vy += (rand(0, 100) - 50) / 750;
				p.x += p.vx;
				p.y += p.vy;
				p.alpha -= .01;

				if(p.alpha < .02) {
					particles.splice(i, 1)
				}
			}
		},
		renderParticles = function() {
			var i = particles.length;
			while(i--) {
				var p = particles[i];
				ctx.beginPath();
				ctx.fillRect(p.x, p.y, p.radius, p.radius);
				ctx.closePath();
				ctx.fillStyle = 'hsla(0, 0%, 100%, ' + p.alpha + ')';
			}
		},
		clear = function() {
			ctx.globalCompositeOperation = 'destination-out';
			ctx.fillStyle = 'rgba(0, 0, 0, .1)';
			ctx.fillRect(0, 0, cw, ch);
			ctx.globalCompositeOperation = 'lighter';

		},
		loop = function() {
			var timer = window.requestAnimationFrame(loop, c);
			clear();
			updateCircle();
			renderCircle();
			renderCircleBorder();
			renderCircleFlare();
			renderCircleFlare2();
			createParticles();
			updateParticles();
			renderParticles();
			return timer;
		}

	/* Append Canvas */
	//document.body.appendChild(c);

	/* Set Constant Properties */
	ctx.shadowBlur = circle.blur;
	ctx.shadowColor = 'hsla(' + circle.hue + ', 80%, 60%, 1)';
	ctx.lineCap = 'round'

	var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
	gradient1.addColorStop(0, 'hsla(' + circle.hue + ', 60%, 50%, .25)');
	gradient1.addColorStop(1, 'hsla(' + circle.hue + ', 60%, 50%, 0)');

	var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
	gradient2.addColorStop(0, 'hsla(' + circle.hue + ', 100%, 50%, 0)');
	gradient2.addColorStop(.1, 'hsla(' + circle.hue + ', 100%, 100%, .7)');
	gradient2.addColorStop(1, 'hsla(' + circle.hue + ', 100%, 50%, 0)');

	/* Loop It, Loop It Good */
	//setInterval(loop, 16);

	this.start = function() {
		this.timerid = loop();
	}
	this.stop = function() {
		window.cancelAnimationFrame(this.timerid)
	}
	this.remove = function() {
		this.stop();
		ctx.clearRect(0, 0, cw, ch);
		document.body.removeChild(c);
	}

}


;
///<jscompress sourcefile="index.js" />
/*https://wnworld.com/archives/204.html*/
/*翻页插件*/
(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;  
	} else {
		root.PageSlider = factory();
	}
})(this, function() {   
	var page = {
		loop: true, //是否翻页循环,
		indexAnimate: false, //首页是否支持转场动画
		loadingAnimate: true, //打开时是否显示加载动画。
		pageIndicator: true, //是否添加页面指示器  
		upIcon: true, //是否添加向上箭头
		preload: true, //设置是否自动预加载图片,默认自动预加载。自动预加载是页面一打开就自动预加载
		preLoadPages: 2, //预加载图片的页数
		pageIndicatorColor: [] //指示器颜色值
	};
	//总页数	
	var totalPage = $(".wrap .page").each(function(i, e) {
		//给每个页面添加唯一标志,给每个页面下的幻灯片添加唯一标志
		$(this).data('id', "page-" + (i + 1)).children(".slide").each(function(i2, e2) {
			$(this).data('id', "page-" + (i + 1) + "-" + (i2 + 1));
		})
	}).size(); 
	/*初始化参数*/
	var $wrap = $(".wrap").addClass("perspective"); //添加css3d透视
	var options = $wrap.data("options");
	if(options != undefined) {
		options="{"+options+"}"; 
		options = eval("(" + options + ")");
		$.extend(page, options);
	}

	/*新页*/
	var now = {
			row: 1,
			col: 1
		},
		/*上一页*/
		last = {
			row: 0,
			col: 0
		};
	var towards = {
		up: 1,
		right: 2,
		down: 3,
		left: 4
	};
	//动画是否正在进行，动画正在进行不能切换
	var isAnimating = false;
	var preLoadPage = 1; //预加载第几页
	//解决iPhone触摸问题
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
	//向上翻页
	page.up = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if(last.row < totalPage) {
			now.row = last.row + 1;
			now.col = 1;
			pageMove(towards.up, false);
		} else if(page.loop) {
			now.row = 1;
			now.col = 1;
			pageMove(towards.up, false);
		}
	}
	//切换页
	page.switchPage = function(pageNo) {
		if(isAnimating) return;
		//切换页在1-总页数之间
		if(pageNo >= 1 && pageNo <= totalPage) {
			last.row = now.row; //上一页
			last.col = 1;
			now.row = pageNo; //当前页等于要切换的页面
			now.col = 1;
			pageMove(towards.up, false);
		}

	}
	//向下翻页
	page.down = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if(last.row > 1) {
			now.row = last.row - 1;
			now.col = 1;
			pageMove(towards.down, false);
		} else if(page.loop) {
			now.row = totalPage;
			now.col = 1;
			//如果预加载图片  则刚开始不支持向下翻页，便于预加载图片
			if(page.preload && now.row >= preLoadPage) {
				now.row = last.row;
				now.col = last.col;
				page.up();
				return;
			}
			pageMove(towards.down, false);
		}
	}
	//向左幻灯片
	page.left = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if(last.row >= 1 && last.row <= totalPage && pageSlides > 1) {
			now.row = last.row;
			if(last.col < pageSlides) {
				now.col = last.col + 1;
				pageMove(towards.left, false);
			} else if(page.loop) {
				now.col = 1;
				pageMove(towards.left, false);
			}
		}
	}
	//向右幻灯片
	page.right = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if(last.row >= 1 && last.row <= totalPage && pageSlides > 1) {
			now.row = last.row;
			if(last.col > 1) {
				now.col = last.col - 1;
				pageMove(towards.right, false);
			} else if(page.loop) {
				now.col = pageSlides;
				pageMove(towards.right, false);
			}
		}
	}
	page.switchSlide = function(no) {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.col = no;
		now.row = last.row;
		pageMove(towards.left, false);

	}
	//向上滑动
	$(document).swipeUp(function() {
		page.up();
	})
	//向下滑动
	$(document).swipeDown(function() {
		page.down();
	})
	//左滑动，屏增加
	$(document).swipeLeft(function() {
		page.left();
	})
	//右滑动，屏减少
	$(document).swipeRight(function() {
		page.right();
	});
	//如果不支持触摸,比如PC端，则单击向上图标切换页面
	if(!document.hasOwnProperty("ontouchstart")) {
		$(".img-up").on('click', function(e) {
			page.up(); 
		})
	}

	//启动
	function start() {
		//预加载插件
		if(page.preload) {
			preLoadImg(true);
		} else if(page.loadingAnimate) {
			buildLightLoader();
		} else {
			//启动初始化
			pageMove(towards.up, true);
			//生成页面指示器
			buildPageIndicator();
		}

	}
	page.preLoadImg = function() {
		page.preload = true;
		preLoadImg(true);
	}
	//预加载图片  firststart是否是第一次启动
	function preLoadImg(firststart, tw) {
		if(firststart || now.row == (preLoadPage - 1)) {
			//预加载页数 
			preLoadPage = preLoadPage + page.preLoadPages;
			var selector = "";
			var i = firststart ? now.row : now.row + 1;
			var len = preLoadPage > totalPage ? totalPage + 1 : preLoadPage;
			for(; i < len; i++) {
				selector = selector + ",.page-" + i + " img" + ",.page-" + i + " .preload-bg";
			}
			selector = selector.substr(1);
			if(selector != "") {
				//预加载页面范围
				var aImgs = []
				$(selector).each(function(i, e) {
					aImgs.push($(this));
				});
				if(firststart && page.loadingAnimate && !page.__lightLoader) { //启动加载画面 
					isAnimating = true;
					buildLightLoader();
				}
				preLoad(aImgs, function(percentage, times) {
					//启动初始化  
					if(firststart) {
						var percentT = percentage * 100;
						if(percentage == 1) {
							setTimeout(function() {
								page.__lightLoader && page.__lightLoader.remove();
								page.__$loader && page.__$loader.remove();
								pageMove(towards.up, firststart);
								//生成页面指示器 
								buildPageIndicator();
								isAnimating = false;
							}, (times > 2000 ? 0 : 2000))
						}
					}
				}, 3000);
			}

		}
	}
	//构建加载启动动画
	function buildLightLoader() {
		var $loader = $("<div id='loader'><div class='stars'></div></div>").appendTo(".wrap");
		var c = document.createElement('canvas');
		var _lightLoader;
		if(!!(c.getContext && c.getContext('2d'))) {
			c.width = 300;
			c.height = 300;
			document.body.appendChild(c);
			_lightLoader = new lightLoader(c);
			_lightLoader.start();
			page.__lightLoader = _lightLoader;
			page.__$loader = $loader;
		}
	}

	function getPageSelector(page, notslide) {
		page = page || now;
		if(notslide) {
			return ".page-" + page.row;
		}
		//同一行不同列
		if(last.row == now.row && last.col != now.col) {
			return ".page-" + page.row + "-" + page.col;
		}
		return ".page-" + page.row;
	}
	page.getNextPageSelector = function() {
		var n = now.row + 1 > totalPage ? 1 : now.row + 1;
		return ".page-" + n;
	}

	function getPageSlidesSelector(page, notslide) {
		return getPageSelector(page, notslide) + " .slide";
	}

	function getPageSlideIndicatorID(page, num) {
		return "slide-indicator-" + page.row + "-" + num;
	}

	function getPageIndicatorID(page, num) {
		return "page-indicator-" + num;
	}
	//动画结束事件名
	var animEndEventName = (function animationEnd() {
		var body = document.body || document.documentElement;
		var animEndEventNames = {
			animation: 'animationend',
			WebkitAnimation: 'webkitAnimationEnd'
		}
		for(var name in animEndEventNames) {
			if(typeof body.style[name] === "string") {
				return animEndEventNames[name]
			}
		}
	})();
	//获取随机安全色
	function getRandomSafeColor() {
		var base = ['00', '33', '66', '99', 'CC', 'FF']; //基础色代码
		var len = base.length; //基础色长度
		var bg = new Array(); //返回的结果
		var random = Math.ceil(Math.random() * 215 + 1); //获取1-216之间的随机数
		var res;
		for(var r = 0; r < len; r++) {
			for(var g = 0; g < len; g++) {
				for(var b = 0; b < len; b++) {
					bg.push('#' + base[r].toString() + base[g].toString() + base[b].toString());
				}
			};
		};
		res = bg[random];
		return res;
	}
	//生成页面指示器
	function buildPageIndicator() {
		//添加页面指示器
		if(page.pageIndicator) {
			var $ul = $('<ul class="page-indicator"></ul>').appendTo(".wrap");
			for(i = 0; i < totalPage; i++) {
				var $li = $('<li><span></span></li>').data("id", i + 1)
					.attr("id", getPageIndicatorID(now, i + 1)).css("background", page.pageIndicatorColor[i] || getRandomSafeColor())
					.appendTo($ul).on("click", function() {
						page.switchPage($(this).data("id"));
					});
				if(i == 0) {
					$li.addClass("on")
				}
			}
		}
	}
	//页面切换
	function pageMove(tw, start) {
		var lastPage = getPageSelector(last),
			nowPage = getPageSelector(now),
			$lastPage = $(lastPage),
			$nowPage = $(nowPage),
			nowPageAnimEnd = false, //当前页动画结束
			lastPageAnimEnd = false; //上一页动画结束
		//如果就是当页则不切换
		if($lastPage.data("id") == $nowPage.data("id")) {
			return;
		}
		//当前页显示
		$nowPage.addClass("show threeD").find(".hide").removeClass("hide");
		//当前页下的第一个幻灯片显示
		$nowPage.children(".slide").first().addClass("show");
		//上下翻页时 ，为当前页幻灯片添加指示条
		var pageSlides = $(getPageSlidesSelector(now, true)).size();
		if(pageSlides > 1) {
			if(tw == towards.up || tw == towards.down) {
				if($nowPage.children(".slide-indicator").size() <= 0) { //没有指示器则创建
					var $ul = $('<ul class="slide-indicator"></ul>').attr("id", "slide-indicator-" + now.row).appendTo($nowPage);
					for(i = 0; i < pageSlides; i++) {
						var $li = $('<li></li>').data("id", i + 1)
							.attr("id", getPageSlideIndicatorID(now, i + 1))
							.appendTo($ul).on("click", function() {
								page.switchSlide($(this).data("id"));
							});
						if(i == 0) {
							$li.addClass("on")
						}
					}
				} else {
					//第一个显示样式
					$("#slide-indicator-" + now.row + " li").removeClass("on").first().addClass("on");
				}
			} else if(tw == towards.left || tw == towards.right) {
				$("#slide-indicator-" + now.row + " li").removeClass("on");
				$("#slide-indicator-" + now.row + "-" + now.col).addClass("on");
			}
		}
		//翻页时改变页面指示器 
		if(page.pageIndicator) {
			$(".page-indicator li").removeClass("on");
			$("#page-indicator-" + now.row).addClass("on");
		}
		//如果是启动画面（）第一个画面则不添加转场效果 
		if(start && !page.indexAnimate) {
			return;
		}
		//是否预加载图片
		if(page.preload) {
			preLoadImg(false, tw);
		}

		var animationClassObj = page.getAnimationClass($nowPage.data("animation")); //获取当前页的动画类型
		var outClass = animationClassObj.outClass;
		var inClass = animationClassObj.inClass;
		//表示动画正在运行
		isAnimating = true;
		//上一页退出效果
		$lastPage.addClass(outClass).on(animEndEventName, function() {
			$lastPage.off(animEndEventName);
			$lastPage.removeClass(outClass).removeClass("perspective threeD show");
			//$lastPage.addClass("hide");
			lastPageAnimEnd = true; //上一页动画结束
			if(nowPageAnimEnd) {
				isAnimating = false;
			}
		});
		//当前页显示效果
		$nowPage.addClass(inClass).on(animEndEventName, function() {
			$nowPage.off(animEndEventName);
			$(nowPage).addClass("show perspective threeD");
			//$(nowPage).removeClass("hide"); 
			$(nowPage).removeClass(inClass);
			nowPageAnimEnd = true; //当前页动画结束
			if(lastPageAnimEnd) {
				isAnimating = false;
			}
		});

	}
	page.getAnimationClass = function getAnimationClass(animationType) {
		animationClassList = page.getAnimationClassList();
		if(animationType && animationType <= animationClassList.length && animationType >= 1) {
			animationType = animationType - 1;
		} else {
			animationType = parseInt(Math.random() * animationClassList.length, 10);
		}
		return animationClassList[animationType];
	}
	/**
	 * 获取页面转场动画类样式
	 * @param {Object} animationType 动画类型，数字，1-67
	 */
	page.getAnimationClassList = function() {
		var animationClassList = [{
				outClass: 'pt-page-moveToLeft',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-moveToRight',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-moveToTop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-moveToBottom',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromRight pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromLeft pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromBottom pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromTop pt-page-ontop'
			},
			{
				outClass: 'pt-page-moveToLeftFade',
				inClass: 'pt-page-moveFromRightFade'
			},
			{
				outClass: 'pt-page-moveToRightFade',
				inClass: 'pt-page-moveFromLeftFade'
			},
			{
				outClass: 'pt-page-moveToTopFade',
				inClass: 'pt-page-moveFromBottomFade'
			},
			{
				outClass: 'pt-page-moveToBottomFade',
				inClass: 'pt-page-moveFromTopFade'
			},
			{
				outClass: 'pt-page-moveToLeftEasing pt-page-ontop',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-moveToRightEasing pt-page-ontop',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-moveToTopEasing pt-page-ontop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-moveToBottomEasing pt-page-ontop',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromRight pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromLeft pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromBottom pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromTop pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-scaleUpDown pt-page-delay300'
			},
			{
				outClass: 'pt-page-scaleDownUp',
				inClass: 'pt-page-scaleUp pt-page-delay300'
			},
			{
				outClass: 'pt-page-moveToLeft pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToRight pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToTop pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToBottom pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-scaleDownCenter',
				inClass: 'pt-page-scaleUpCenter pt-page-delay400'
			},
			{
				outClass: 'pt-page-rotateRightSideFirst',
				inClass: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateLeftSideFirst',
				inClass: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateTopSideFirst',
				inClass: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateBottomSideFirst',
				inClass: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-flipOutRight',
				inClass: 'pt-page-flipInLeft pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutLeft',
				inClass: 'pt-page-flipInRight pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutTop',
				inClass: 'pt-page-flipInBottom pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutBottom',
				inClass: 'pt-page-flipInTop pt-page-delay500'
			},
			{
				outClass: 'pt-page-rotateFall pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-rotateOutNewspaper',
				inClass: 'pt-page-rotateInNewspaper pt-page-delay500'
			},
			{
				outClass: 'pt-page-rotatePushLeft',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-rotatePushRight',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-rotatePushTop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-rotatePushBottom',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-rotatePushLeft',
				inClass: 'pt-page-rotatePullRight pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushRight',
				inClass: 'pt-page-rotatePullLeft pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushTop',
				inClass: 'pt-page-rotatePullBottom pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushBottom',
				inClass: 'pt-page-rotatePullTop pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotateFoldLeft',
				inClass: 'pt-page-moveFromRightFade'
			},
			{
				outClass: 'pt-page-rotateFoldRight',
				inClass: 'pt-page-moveFromLeftFade'
			},
			{
				outClass: 'pt-page-rotateFoldTop',
				inClass: 'pt-page-moveFromBottomFade'
			},
			{
				outClass: 'pt-page-rotateFoldBottom',
				inClass: 'pt-page-moveFromTopFade'
			},
			{
				outClass: 'pt-page-moveToRightFade',
				inClass: 'pt-page-rotateUnfoldLeft'
			},
			{
				outClass: 'pt-page-moveToLeftFade',
				inClass: 'pt-page-rotateUnfoldRight'
			},
			{
				outClass: 'pt-page-moveToBottomFade',
				inClass: 'pt-page-rotateUnfoldTop'
			},
			{
				outClass: 'pt-page-moveToTopFade',
				inClass: 'pt-page-rotateUnfoldBottom'
			},
			{
				outClass: 'pt-page-rotateRoomLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomLeftIn'
			},
			{
				outClass: 'pt-page-rotateRoomRightOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomRightIn'
			},
			{
				outClass: 'pt-page-rotateRoomTopOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomTopIn'
			},
			{
				outClass: 'pt-page-rotateRoomBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomBottomIn'
			},
			{
				outClass: 'pt-page-rotateCubeLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeLeftIn'
			},
			{
				outClass: 'pt-page-rotateCubeRightOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeRightIn'
			},
			{
				outClass: 'pt-page-rotateCubeTopOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeTopIn'
			},
			{
				outClass: 'pt-page-rotateCubeBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeBottomIn'
			},
			{
				outClass: 'pt-page-rotateCarouselLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselLeftIn'
			},
			{
				outClass: 'pt-page-rotateCarouselRightOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselRightIn'
			},
			{
				outClass: 'pt-page-rotateCarouselTopOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselTopIn'
			},
			{
				outClass: 'pt-page-rotateCarouselBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselBottomIn'
			},
			{
				outClass: 'pt-page-rotateSidesOut',
				inClass: 'pt-page-rotateSidesIn pt-page-delay200'
			},
			{
				outClass: 'pt-page-rotateSlideOut',
				inClass: 'pt-page-rotateSlideIn'
			}
		];
		return animationClassList;
	};
	//启动
	start();
	return page;
});

/*声音插件*/
(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.Page = factory();
	}
})(this, function() {
	//声音模块
	var audio = {
		_audioNode: $('.u-audio'), // 声音模块
		_audio: null, // 声音对象
		_audio_val: true, // 声音是否开启控制
		/**
		 *  media资源管理
		 *  -->绑定声音控制事件
		 *  -->函数处理声音的开启和关闭
		 *  -->异步加载声音插件（延迟做）
		 *  -->声音初始化
		 *  -->视频初始化
		 *  -->声音和视频切换的控制
		 */
		// 声音初始化
		audio_init: function() {
			// media资源的加载
			var options_audio = {
				loop: true,
				preload: "auto",
				src: audio._audioNode.attr('data-src')
			}
			audio._audio = new Audio();
			for(var key in options_audio) {
				if(options_audio.hasOwnProperty(key) && (key in audio._audio)) {
					audio._audio[key] = options_audio[key];
				}
			}
			audio._audio.load();
			// 音符飘逸  
			var base64img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAABARmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDQtMjJUMTA6MzQ6MTgrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wNC0yMlQxNDowMjo1MSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDQtMjJUMTQ6MDI6NTErMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpPjgyNzMxMkFGOEM3QTgzMzU2QjU0M0JGNDNFQTEwQ0ZGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QzNENDc5NDdBMzVCOTlDQUM1RTlCQUY0MjU1RkZDMTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5GMjFCODdBQ0NFMkRBQzI0RDE2ODcyOThDQkVDMTg2QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUJERTczQTYwRUM2RTMxMUE1Nzg4M0E0RUUxNDYyQTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFFNTE3MUVEQzkzNDExRTM4NEZERDI2MkIyNkI2MzcwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyMDk4MDNENzY0QUExMUUzOTYyN0JBQzU3MTg0N0RFQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjU0MDQwOUM2NEFBMTFFM0EzNkZGRjJBRUIxQjg0RTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM0MTI5OUFFRjIzNEUzMTE4ODNGQjI1NjhBMDYxQzZGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2ODI1QzM1QTY0QTgxMUUzQjcxOTk2REQ5RTNBNTU5NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzFDNzU3RjUyRUM2RTMxMUE1Nzg4M0E0RUUxNDYyQTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc4MjZBQjczMzRDNkUzMTFBNTc4ODNBNEVFMTQ2MkE2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3QjI2QUI3MzM0QzZFMzExQTU3ODgzQTRFRTE0NjJBNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N2M2Yjk5NTEtNzE4NC00YTQyLWJjNDgtYWRmMGQ0NDMzNTgzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MDI2QUI3MzM0QzZFMzExQTU3ODgzQTRFRTE0NjJBNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUE4NzA3ODM2NEIwMTFFMzlGQTBCODA3MjEyNTVGQzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkEyMUMyMDQwMDFDNkUzMTFBMzA5RDY1NEUyQkQxMTdBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDMjY3QTE5MkUwQjgxMUUwODAxOUMxMkYzQTY5NEE2NjwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmUyZTljYTE1LWQ3MDUtNGZkMS1iMGMzLTcxYzI3MDEwMjRkMzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpjZjYxMzIwMi1iNDQ0LTQxNzEtOTExNS00ZjdmMGZhOTI5MDk8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpjZjYxMzIwMi1iNDQ0LTQxNzEtOTExNS00ZjdmMGZhOTI5MDk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Y2Y2MTMyMDItYjQ0NC00MTcxLTkxMTUtNGY3ZjBmYTkyOTA5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTA0LTIyVDEwOjM0OjE4KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZTJlOWNhMTUtZDcwNS00ZmQxLWIwYzMtNzFjMjcwMTAyNGQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTA0LTIyVDE0OjAyOjUxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PqMwb9IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAQtJREFUeNqc0r8rRWEYB/CPm8iP2JVuKTIqExZRipTd30DKIjFYlMWCP0Ay2Aw2ySKZLVYpFt1Sd1P0WM6ti3vO4f3W0zlvz/mc933qbYsIBdlBDUetmhXFGcFEXrMMv2IqFT+hir4UXM+e5ym40Z/BwX9xG96z91Xs/QcPYhOzuMMGVv6Ku7K5rzGJXRxiDNpL8Ad6m9bbGMctespwq8wjsFSRliuspeJLdKXiGl5ScT+eU/EA7lNxLy5S8GI2c60Mv6Gzad2BOZy1umFVLGAIjxjFzQ98igcQEY3aiojP+J3ppm++VWPnfaznHL07d6jsz0UZzttZRJwVwOM82MDLEVFvUSdFMCJ8DQBRR/KhOnuUMQAAAABJRU5ErkJggg==";
			$('#coffee_flow').coffee({
				steams: ["<img src='"+base64img+"' />", "<img src='"+base64img+"' />"],//steams: ["<img src='"+base64img+"' />", "<img src='../img/audio_widget_01@2x.png' />"],
				steamHeight: 100,
				steamWidth: 44
			});  
		},

		// 声音事件绑定
		audio_addEvent: function() {
			if(audio._audioNode.length <= 0) return;

			// 声音按钮点击事件
			var txt = audio._audioNode.find('.txt_audio'),
				time_txt = null;
			audio._audioNode.find('.btn_audio').on('click', audio.audio_contorl);

			// 声音打开事件
			$(audio._audio).on('play', function() {
				audio._audio_val = false;
				audio_txt(txt, true, time_txt);

				// 开启音符冒泡
				$.fn.coffee.start();
				$('.coffee-steam-box').show(500);
			})

			// 声音关闭事件
			$(audio._audio).on('pause', function() {
				audio_txt(txt, false, time_txt)

				// 关闭音符冒泡
				$.fn.coffee.stop();
				$('.coffee-steam-box').hide(500);
			})

			function audio_txt(txt, val, time_txt) {
				if(val) txt.text('打开');
				else txt.text('关闭');

				if(time_txt) clearTimeout(time_txt);

				txt.removeClass('z-move z-hide');
				time_txt = setTimeout(function() {
					txt.addClass('z-move').addClass('z-hide');
				}, 1000)
			}
		},

		// 声音控制函数
		audio_contorl: function() {
			if(!audio._audio_val) {
				audio.audio_stop();
			} else {
				audio.audio_play();
			}
		},

		// 声音播放
		audio_play: function() {
			audio._audio_val = false;
			if(audio._audio) audio._audio.play();
		},

		// 声音停止
		audio_stop: function() {
			audio._audio_val = true;
			if(audio._audio) audio._audio.pause();
		}, //处理声音和动画的切换
		media_control: function() {
			if(!audio._audio) return;
			if($('video').length <= 0) return;

			$(audio._audio).on('play', function() {
				$('video').each(function() {
					if(!this.paused) {
						this.pause();
					}
				});
			});

			$('video').on('play', function() {
				if(!audio._audio_val) {
					audio.audio_contorl();
				}
			});
		},
		// media管理初始化
		media_init: function() {
			// 声音初始化
			audio.audio_init();
			// 绑定音乐加载事件
			audio.audio_addEvent();
			// 音频切换
			audio.media_control();

		}

	}
	// loading执行一次
	var loading_time = new Date().getTime();
	$(window).on('load', function() {
		var now = new Date().getTime();
		var loading_end = false;
		var time;
		var time_del = now - loading_time;
		if(time_del >= 2200) {
			loading_end = true;
		}
		if(loading_end) {
			time = 0;
		} else {
			time = 2200 - time_del;
		}
		// loading完成后请求
		setTimeout(function() {
			// media初始化
			audio.media_init();
			// 播放声音
			if(!audio._audio) return;
			audio._audioNode.removeClass('hide');
			audio._audio.play();

			// 声音启动
			$(document).one("touchstart", function() {
				audio._audio.play();
			});
		}, time)
	})
});
/*右键菜单选择动画效果*/
(function() {
	var $md = $('<div class="md-modal md-effect-4"><div class="md-content"><h3>选择动画效果</h3><div><p>得到</p></div><button class="md-close">Close me!</button></div></div></div>').appendTo("body");
	//添加动画样式单选框 
	var str = "";
	for(var i = 1; i <= PageSlider.getAnimationClassList().length; i++) {
		str += '<span><input type="radio" class="magic-radio"  name="myAnimation" value="' + i + '" id="radio' + i + '"/><label for="radio' + i + '" class="radio2">效果' + i + '</label> </span>';
	}
	$md.find(".md-content p").html(str).find("input[name=myAnimation]").on("click", function() {
		$(PageSlider.getNextPageSelector()).data("animation", $(this).val());
	})

	$(document).on("contextmenu", function(e) {
		e.preventDefault();
		$md.addClass("md-show").find(".md-close").on("click", function() {
			$md.removeClass("md-show");
		})
	})
})();
