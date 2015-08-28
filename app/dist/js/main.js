/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;
/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,t){'use strict';function L(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.4/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Ya(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:I(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(C(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(lc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Na.call(b,d)&&a.call(c,b[d],d,b);return b}function mc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function nc(b){return function(a,c){b(c,a)}}function Ud(){return++mb}function oc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||C(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],q=g[n];c&&D(q)?ca(q)?b[n]=new Date(q.valueOf()):Oa(q)?
b[n]=new RegExp(q):(D(b[n])||(b[n]=G(q)?[]:{}),Mb(b[n],[q],!0)):b[n]=q}}oc(b,d);return b}function Q(b){return Mb(b,xa.call(arguments,1),!1)}function Vd(b){return Mb(b,xa.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return Q(Object.create(b),a)}function v(){}function Za(b){return b}function qa(b){return function(){return b}}function pc(b){return C(b.toString)&&b.toString!==Object.prototype.toString}function y(b){return"undefined"===typeof b}function x(b){return"undefined"!==
typeof b}function D(b){return null!==b&&"object"===typeof b}function lc(b){return null!==b&&"object"===typeof b&&!qc(b)}function I(b){return"string"===typeof b}function X(b){return"number"===typeof b}function ca(b){return"[object Date]"===sa.call(b)}function C(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===sa.call(b)}function Ya(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function rc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Ya(b)||$a(b))throw Ea("cpws");if(sc.test(sa.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];D(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?
a.length=0:m(a,function(b,c){delete a[c]});if(lc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Na.call(b,e)&&(a[e]=fa(b[e],null,c,d));oc(a,f)}}else if(a=b,D(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(sc.test(sa.call(b)))a=new b.constructor(b);else if(ca(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else return e=Object.create(qc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ca(b))return ca(a)?
ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Ya(b)||Ya(a)||G(a)||ca(a)||Oa(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!C(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||C(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(xa.call(a,c))}function tc(b,a){var c=2<arguments.length?xa.call(arguments,2):[];return!C(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ya(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;X(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function uc(b){return I(b)?JSON.parse(b):b}function vc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,
a,c){c=c?-1:1;var d=vc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return b[0].nodeType===Pa?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function wc(b){try{return decodeURIComponent(b)}catch(a){}}function xc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=
b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=wc(e),x(e)&&(f=x(f)?wc(f):!0,Na.call(a,e)?G(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,I(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),
a(c,d?[d]:[],e))}function yc(b,a,c){D(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=z(b);if(b.injector()){var d=b[0]===W?"document":ua(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");aa.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};C(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=aa.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}
function zc(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Ac){var a=ob();la=O.jQuery;x(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(z=la,Q(la.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):z=R;aa.element=
z;Ac=!0}}function pb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&G(b)&&(b=b[b.length-1]);pb(C(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&C(b)?tc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
if(!a)break;c.push(a)}while(a!==b);return z(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=L("$injector"),d=L("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||L;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return B}}function b(a,c){return function(b,
e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return B}}if(!g)throw c("nomod",f);var d=[],e=[],r=[],u=a("$injector","invoke","push",e),B={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:u,run:function(a){r.push(a);return this}};h&&u(h);return B})}})}function ee(b){Q(b,{bootstrap:yc,copy:fa,extend:Q,merge:Vd,equals:ka,element:z,forEach:m,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Za,isUndefined:y,isDefined:x,isString:I,isFunction:C,isObject:D,isNumber:X,isElement:rc,isArray:G,version:fe,isDate:ca,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:L,$$csp:Fa,reloadWithDebugInfo:$d});
Rb=de(O);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,
ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(sb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,
$httpBackend:ff,$location:gf,$log:hf,$parse:jf,$rootScope:kf,$q:lf,$$q:mf,$sce:nf,$sceDelegate:of,$sniffer:pf,$templateCache:qf,$templateRequest:rf,$$testability:sf,$timeout:tf,$window:uf,$$rAF:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function fb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,"Moz$1")}function Kc(b){b=b.nodeType;return b===pa||!b||9===b}function Lc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));
d=(Bf.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=W;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:
(c=Lc(b,a))?c.childNodes:[]}Mc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Nc(b,a,c,d){if(x(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(x(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,
a){var c=b.ng339,d=c&&gb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Nc(b)),delete gb[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&gb[c];a&&!c&&(b.ng339=c=++Ef,c=gb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Kc(b)){var d=x(c),e=!d&&a&&!D(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Mc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Oc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=z.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Pc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Wb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);
else z(a).on("load",b)}function Qc(b,a){var c=Ab[a.toLowerCase()];return c&&Rc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Sc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(D(b))m(b,nc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(C(b)||G(b))b=r.instantiate(b);if(!b.$get)throw Ha("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=
B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){pb(y(a)||G(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{I(a)?(c=Rb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(r.invoke(a)):G(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw G(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,a,g),l,r,n;r=0;for(l=k.length;r<l;r++){n=k[r];if("string"!==
typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||C(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");q[a]=b;u[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},r=q.$injector=h(q,function(a,b){aa.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),u={},B=u.$injector=h(u,function(a,b){var c=r.get(a+"Provider",b);return B.invoke(c.$get,c,t,a)});m(g(b),function(a){a&&B.invoke(a)});return B}function Qe(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():rc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=I(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ff(function(){d.$evalAsync(g)})});return g}]}function hb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){I(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return D(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,xa.call(arguments,
1))}finally{if(B--,0===B)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{w=n.state;break a}catch(a){}w=void 0}w=y(w)?null:w;ka(w,F)&&(w=F);F=w}function h(){if(A!==l.url()||p!==w)A=l.url(),p=w,m(N,function(a){a(l.url(),w)})}var l=this,k=b.location,n=b.history,q=b.setTimeout,r=b.clearTimeout,u={};l.isMock=!1;var B=0,K=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){B++};l.notifyWhenNoOutstandingRequests=function(a){0===B?a():
K.push(a)};var w,p,A=k.href,s=a.find("base"),H=null;g();p=w;l.url=function(a,c,e){y(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(A===a&&(!d.history||f))return l;var h=A&&Ja(A)===Ja(a);A=a;p=e;if(!d.history||h&&f){if(!h||H)H=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=w;return l}return H||k.href.replace(/%27/g,"'")};l.state=function(){return w};var N=[],J=!1,F=
null;l.onUrlChange=function(a){if(!J){if(d.history)z(b).on("popstate",f);z(b).on("hashchange",f);J=!0}N.push(a);return a};l.$$applicationDestroyed=function(){z(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=s.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;B++;c=q(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};l.defer.cancel=function(a){return u[a]?(delete u[a],r(a),e(v),!0):!1}}function Ve(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=q&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw L("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},q=null,r=null;return a[b]={put:function(a,b){if(!y(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(r.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==q&&(q=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};q=r=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qf(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function Cc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");I(a)?(d(a),pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);C(h)?h={compile:qa(h)}:!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};D(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));D(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(D(n.bindToController)){var S=l.controller,B=l.controllerAs;if(!S)throw ea("noctrl",r);var ha;a:if(B&&I(B))ha=B;else{if(I(S)){var m=Vc.exec(S);if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",
r);}var s=k.$$bindings=n;D(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,nc(r));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return x(a)?
(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,w,p,A,s,H,N,J){function F(a,b){try{a.addClass(b)}catch(c){}}function V(a,b,c,d,e){a instanceof z||(a=z(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);V.$$addScopeClass(a);var g=null;return function(b,c,d){pb(b,"scope");d=d||{};
var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?z(Xb(g,z("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);V.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,r,n,u,N;if(p)for(N=Array(c.length),r=0;r<
h.length;r+=3)f=h[r],N[f]=c[f];else N=c;r=0;for(n=h.length;r<n;)if(l=N[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(k=a.$new(),V.$$addScopeInfo(z(l),k),u=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",u)}else k=a;u=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null;c(f,k,l,d,u,c)}else f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,r,n,p,u=0;u<a.length;u++){l=new aa;k=ha(a[u],[],l,0===u?d:t,e);(f=k.length?E(k,a[u],l,b,c,null,[],[],f):null)&&f.scope&&
V.$$addScopeClass(l.$$element);l=f&&f.terminal||!(r=a[u].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(u,f,l),n=!0,p=p||f;f=null}return n?g:null}function P(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case pa:x(b,va(ta(a)),"E",d,e);for(var k,r,n,p=a.attributes,
u=0,N=p&&p.length;u<N;u++){var K=!1,J=!1;k=p[u];l=k.name;r=T(k.value);k=va(l);if(n=ia.test(k))l=l.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=k.replace(/(Start|End)$/,"");L(S)&&k===S+"Start"&&(K=l,J=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(n||!c.hasOwnProperty(k))c[k]=r,Qc(a,k)&&(c[k]=!0);X(a,b,r,k,n);x(b,k,"A",d,e,K,J)}a=a.className;D(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;l=g.exec(a);)k=va(l[2]),x(b,k,"C",d,
e)&&(c[k]=T(l[3])),a=a.substr(l.index+l[0].length);break;case Pa:if(11===Va)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);wa(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=va(l[1]),x(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(B){}}b.sort(za);return b}function ya(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&
e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function Wc(a,b,c){return function(d,e,f,g,h){e=ya(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=Wc(a,c,d));a.require=E.require;a.directiveName=x;if(P===E||E.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Wc(b,c,d));b.require=E.require;b.directiveName=x;if(P===E||E.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function u(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=
b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=u(a,b[g],c,d);return e||null}function N(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===P||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=l.controller;"@"==r&&(r=b[l.name]);k=p(r,k,!0,l.controllerAs);g[l.name]=k;s||a.data("$"+l.name+
"Controller",k.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;$a(a)||(c=b,b=a,a=t);s&&(d=A);c||(c=s?ja.parent():ja);return g(a,b,d,c,ya)}var n,p,J,B,A,ha,ja;b===e?(f=d,ja=d.$$element):(ja=z(e),f=new aa(ja,d));P&&(B=c.$new(!0));g&&(ha=r,ha.$$boundTransclude=g);w&&(A=N(ja,f,ha,w,B,c));P&&(V.$$addScopeInfo(ja,B,!0,!(F&&(F===P||F===P.$$originalDirective))),V.$$addScopeClass(ja,!0),B.$$isolateBindings=P.$$isolateBindings,Y(c,f,B,B.$$isolateBindings,P,B));if(A){var m=P||S,H;m&&A[m.name]&&
(p=m.$$bindings.bindToController,(J=A[m.name])&&J.identifier&&p&&(H=J,l.$$destroyBindings=Y(c,f,J.instance,p,m)));for(n in A){J=A[n];var E=J();E!==J.instance&&(J.instance=E,ja.data("$"+n+"Controller",E),J===H&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,E,p,m)))}}n=0;for(l=h.length;n<l;n++)p=h[n],$(p,p.isolateScope?B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha);var ya=c;P&&(P.template||null===P.templateUrl)&&(ya=B);a&&a(ya,e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],$(p,p.isolateScope?
B:c,ja,f,p.require&&u(p.directiveName,p.require,ja,A),ha)}r=r||{};for(var J=-Number.MAX_VALUE,S=r.newScopeDirective,w=r.controllerDirectives,P=r.newIsolateScopeDirective,F=r.templateDirective,A=r.nonTlbTranscludeDirective,m=!1,H=!1,s=r.hasElementTranscludeDirective,ba=d.$$element=z(b),E,x,v,y=e,za,wa=0,L=a.length;wa<L;wa++){E=a[wa];var Bb=E.$$start,M=E.$$end;Bb&&(ba=ya(b,Bb,M));v=t;if(J>E.priority)break;if(v=E.scope)E.templateUrl||(D(v)?(O("new/isolated scope",P||S,E,ba),P=E):O("new/isolated scope",
P,E,ba)),S=S||E;x=E.name;!E.templateUrl&&E.controller&&(v=E.controller,w=w||ga(),O("'"+x+"' controller",w[x],E,ba),w[x]=E);if(v=E.transclude)m=!0,E.$$tlb||(O("transclusion",A,E,ba),A=E),"element"==v?(s=!0,J=E.priority,v=ba,ba=d.$$element=z(W.createComment(" "+x+": "+d[x]+" ")),b=ba[0],U(f,xa.call(v,0),b),y=V(v,e,J,g&&g.name,{nonTlbTranscludeDirective:A})):(v=z(Ub(b)).contents(),ba.empty(),y=V(v,e));if(E.template)if(H=!0,O("template",F,E,ba),F=E,v=C(E.template)?E.template(ba,d):E.template,v=fa(v),
E.replace){g=E;v=Sb.test(v)?Yc(Xb(E.templateNamespace,T(v))):[];b=v[0];if(1!=v.length||b.nodeType!==pa)throw ea("tplrt",x,"");U(f,ba,b);L={$attr:{}};v=ha(b,[],L);var Q=a.splice(wa+1,a.length-(wa+1));P&&Zc(v);a=a.concat(v).concat(Q);$c(d,L);L=a.length}else ba.html(v);if(E.templateUrl)H=!0,O("template",F,E,ba),F=E,E.replace&&(g=E),K=Lf(a.splice(wa,a.length-wa),ba,d,f,m&&y,h,k,{controllerDirectives:w,newScopeDirective:S!==E&&S,newIsolateScopeDirective:P,templateDirective:F,nonTlbTranscludeDirective:A}),
L=a.length;else if(E.compile)try{za=E.compile(ba,d,y),C(za)?n(null,za,Bb,M):za&&n(za.pre,za.post,Bb,M)}catch(R){c(R,ua(ba))}E.terminal&&(K.terminal=!0,J=Math.max(J,E.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=m;K.templateOnThisElement=H;K.transclude=y;r.hasElementTranscludeDirective=s;return K}function Zc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function x(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var p=
0,u=d.length;p<u;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(l&&(n=Nb(n,{$$start:l,$$end:k})),b.push(n),h=n)}catch(J){c(J)}}return h}function L(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,l){var k=[],r,n,p=b[0],u=a.shift(),J=Nb(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=C(u.templateUrl)?u.templateUrl(b,c):u.templateUrl,B=u.templateNamespace;b.empty();d(N).then(function(d){var K,w;d=fa(d);if(u.replace){d=Sb.test(d)?Yc(Xb(B,T(d))):[];K=d[0];if(1!=d.length||K.nodeType!==
pa)throw ea("tplrt",u.name,N);d={$attr:{}};U(e,b,K);var A=ha(K,[],d);D(u.scope)&&Zc(A);a=A.concat(a);$c(c,d)}else K=p,b.html(d);a.unshift(J);r=E(a,K,c,f,b,u,g,h,l);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);k.length;){d=k.shift();w=k.shift();var H=k.shift(),V=k.shift(),A=b[0];if(!d.$$destroyed){if(w!==p){var ya=w.className;l.hasElementTranscludeDirective&&u.replace||(A=Ub(K));U(H,z(w),A);F(z(A),ya)}w=r.transcludeOnThisElement?P(d,r.transclude,V):V;r(n,d,A,e,w,r)}}k=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(r.transcludeOnThisElement&&(a=P(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function za(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function wa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&V.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||V.$$addBindingClass(e);V.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return H.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}function X(a,c,d,e,
f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var r=h[e];r!==d&&(l=r&&b(r,!0,g,f),d=r);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,
f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);z.hasData(d)&&(z(c).data(z(d).data()),la?(Qb=!0,la.cleanData([d])):delete z.cache[d[z.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return Q(function(){return a.apply(null,
arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var l=e.attrName,k=e.optional,r,n,p,K;switch(e.mode){case "@":k||Na.call(c,l)||(d[g]=c[l]=void 0);c.$observe(l,function(a){I(a)&&(d[g]=a)});c.$$observers[l].$$scope=a;I(c[l])&&(d[g]=b(c[l])(a));break;case "=":if(!Na.call(c,l)){if(k)break;c[l]=void 0}if(k&&!c[l])break;n=w(c[l]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==b};p=n.assign||function(){r=d[g]=n(a);throw ea("nonassign",
c[l],f.name);};r=d[g]=n(a);k=function(b){K(b,d[g])||(K(b,r)?p(a,b=d[g]):d[g]=b);return r=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(w(c[l],k),null,n.literal);h=h||[];h.push(k);break;case "&":n=c.hasOwnProperty(l)?w(c[l]):v;if(n===v&&k)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};aa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Qc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=zc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var r=2*k,g=g+J(T(h[r]),!0),g=g+(" "+T(h[r+1]));h=T(h[2*k]).split(/\s/);g+=J(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
m(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Za:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;V.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",
c)}:v;V.$$addBindingClass=n?function(a){F(a,"ng-binding")}:v;V.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;V.$$addScopeClass=n?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:v;return V}]}function va(b){return fb(b.replace(Xc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Yc(b){b=z(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");D(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,q;h=!0===h;l&&I(l)&&(q=l);if(I(f)){l=f.match(Vc);if(!l)throw Nf("ctrlfmt",f);n=l[1];q=q||l[3];f=b.hasOwnProperty(n)?b[n]:Bc(g.$scope,
n,!0)||(a?Bc(d,n,!0):t);Sa(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,n||f.name),Q(function(){var a=c.invoke(f,k,g,n);a!==k&&(D(a)||C(a))&&(k=a,q&&e(g,q,k,n||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,n);q&&e(g,q,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return z(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b){return D(b)?
ca(b)?b.toISOString():db(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];mc(b,function(b,d){null===b||y(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Yb(b)))}):a.push(ma(d)+"="+ma(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||y(b)||(G(b)?m(b,function(b,c){a(b,e+"["+(D(b)?c:"")+"]")}):D(b)&&!ca(b)?mc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Yb(b))))}if(!b)return"";var c=
[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(I(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=uc(c))}}return b}function cd(b){var a=ga(),c;I(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&m(b,function(b,c){var f=M(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?
(c=a[M(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(C(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return D(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia($b),put:ia($b),patch:ia($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
a=!1;this.useApplyAsync=function(b){return x(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function n(a){function d(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,d={};m(a,function(a,e){C(a)?(c=a(b),null!=
c&&(d[e]=c)):d[e]=a});return d}if(!aa.isObject(a))throw L("$http")("badreq",a);var f=Q({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=Q({},a.headers),f,g,h,c=Q({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ia(a))}(a);f.method=rb(f.method);f.paramSerializer=I(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var g=
[function(a){var c=a.headers,e=ed(a.data,dd(c),t,a.transformRequest);y(e)&&m(c,function(a,b){"content-type"===M(b)&&delete c[b]});y(a.withCredentials)&&!y(b.withCredentials)&&(a.withCredentials=b.withCredentials);return q(a,e).then(d,d)},t],h=l.when(f);for(m(B,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,"fn");h.then(function(b){a(b.data,
b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function q(c,d){function g(b,c,d,e){function f(){k(c,b,d,e)}F&&(200<=b&&300>b?F.put(P,[b,c,cd(d),e]):F.remove(P));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function k(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?N.resolve:N.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function q(a){k(a.data,a.status,
ia(a.headers()),a.statusText)}function B(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var N=l.defer(),J=N.promise,F,m,S=c.headers,P=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);J.then(B,B);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=D(c.cache)?c.cache:D(b.cache)?b.cache:u);F&&(m=F.get(P),x(m)?m&&C(m.then)?m.then(q,q):G(m)?k(m[1],m[0],ia(m[2]),m[3]):k(m,200,{},"OK"):F.put(P,J));y(m)&&((m=gd(c.url)?f()[c.xsrfCookieName||
b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,P,d,g,S,c.timeout,c.withCredentials,c.responseType));return J}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");b.paramSerializer=I(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var B=[];m(d,function(a){B.unshift(I(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete",
"head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function Rf(){return new O.XMLHttpRequest}function ff(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",
n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,q,r,u){function B(){p&&p();A&&A.abort()}function K(a,d,e,f,g){H!==t&&c.cancel(H);p=A=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==
M(e)){var w="_"+(d.counter++).toString(36);d[w]=function(a){d[w].data=a;d[w].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(a,b){K(k,a,d[w].data,"",b);d[w]=v})}else{var A=a();A.open(e,h,!0);m(n,function(a,b){x(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);K(k,c,b,A.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,
"")};A.onerror=e;A.onabort=e;r&&(A.withCredentials=!0);if(u)try{A.responseType=u}catch(s){if("json"!==u)throw s;}A.send(l)}if(0<q)var H=c(B,q);else q&&C(q.then)&&q.then(B)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(q,a)}function h(f,h,n,q){function w(a){try{var b=a;a=n?e.getTrusted(n,
b):e.valueOf(b);var c;if(q&&!x(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,m,s=0,H=[],N=[],J=f.length,F=[],V=[];s<J;)if(-1!=(p=f.indexOf(b,s))&&-1!=(m=f.indexOf(a,p+l)))s!==p&&F.push(g(f.substring(s,p))),s=f.substring(p+l,m),H.push(s),N.push(c(s,w)),s=m+k,V.push(F.length),F.push("");else{s!==J&&F.push(g(f.substring(s)));break}n&&1<F.length&&Ka.throwNoconcat(f);if(!h||H.length){var S=
function(a){for(var b=0,c=H.length;b<c;b++){if(q&&y(a[b]))return;F[V[b]]=a[b]}return F.join("")};return Q(function(a){var b=0,c=H.length,e=Array(c);try{for(;b<c;b++)e[b]=N[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(N,function(d,e){var f=S(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=
function(){return a};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,q=n?xa.call(arguments,4):[],r=a.setInterval,u=a.clearInterval,B=0,K=x(k)&&!k,w=(K?d:c).defer(),p=w.promise;l=x(l)?l:0;p.then(null,null,n?function(){e.apply(null,q)}:e);p.$$intervalId=r(function(){w.notify(B++);0<l&&B>=l&&(w.resolve(B),u(p.$$intervalId),delete f[p.$$intervalId]);K||b.$apply()},h);f[p.$$intervalId]=w;return p}var f={};e.cancel=function(b){return b&&
b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function hd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=
xc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";hd(b,this);this.$$parse=function(b){var c=ra(a,b);if(!I(c))throw Db("ipthprfx",b,a);id(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=
Pb(this.$$search),c=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ra(b,d))!==t?(g=f,g=(f=ra(c,f))!==t?a+(ra("/",f)||f):b+g):(f=ra(a,d))!==t?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function cc(b,a,c){hd(b,this);this.$$parse=function(d){var e=ra(b,d)||ra(a,d),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(b=d,this.replace())):
(f=ra(c,e),y(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ra(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function kd(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function gf(){var b="",a={enabled:!1,requireBase:!0,
rewriteLinks:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):D(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,
b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var q=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(n||"/");n=e.history?bc:jd}else r=Ja(q),n=cc;var u=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,u,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var B=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=
z(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);B.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Cb(k.absUrl())!=Cb(q)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){y(ra(u,a))?g.location.href=a:(c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||n)K=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function hf(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Wa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=
c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,
a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&
!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=
!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===s.Identifier||b.type===s.MemberExpression}function pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||
b.body[0].expression.type===s.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return C(b.valueOf)?b.valueOf():Yf.call(b)}function jf(){var b=ga(),a=ga();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var l=d,g=g[0];return a.$watch(function(a){var b=
g(a);d(b,l)||(h=e(a,t,t,[b]),l=b&&dc(b));return h},b,c,f)}for(var k=[],n=[],q=0,m=g.length;q<m;q++)k[q]=d,n[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!d(l,k[c])))n[c]=l,k[c]=l&&dc(l)}b&&(h=e(a,t,t,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;m(a,function(a){x(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){C(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},q={csp:k,expensiveChecks:!0};return function(d,k,B){var m,w,p;switch(typeof d){case "string":p=d=d.trim();var s=B?a:b;m=s[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),B=B?q:n,m=new ec(B),m=(new fc(m,c,B)).parse(d),m.constant?m.$$watchDelegate=h:w?m.$$watchDelegate=m.literal?g:f:m.inputs&&(m.$$watchDelegate=e),
s[p]=m);return l(m,k);case "function":return l(d,k);default:return v}}}]}function lf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function mf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}
function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{C(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=L("$q",TypeError);Q(d.prototype,{then:function(a,b,c){if(y(a)&&
y(b)&&y(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});Q(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(D(b)||C(b))d=b&&b.then;C(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(C(b)?b(c):c)}catch(h){a(h)}}})}});var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return l(e,!1)}return d&&C(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function u(a){if(!C(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=n;q.resolve=n;q.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function vf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=
0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}
function kf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=L("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++mb;this.$$phase=
this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function K(){for(;H.length;)try{H.shift()()}catch(a){g(a)}e=
null}function w(){null===e&&(e=l.defer(function(){p.$apply(K)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,
a);var g=this,l=g.$$watchers,k={fn:b,last:s,get:f,exp:e||a,eq:!!c};d=null;C(b)||(k.fn=v);l||(l=g.$$watchers=[]);l.unshift(k);r(this,1);return function(){0<=bb(l,k)&&r(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,
b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(Da(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,
k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,n=h(a,c),q=[],r={},p=!0,u=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(D(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Na.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,r,u=a,m,w=[],E,H;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),K());d=
null;do{r=!1;for(m=this;t.length;){try{H=t.shift(),H.scope.$eval(H.expression,H.locals)}catch(v){g(v)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===s?f:h,m),5>u&&(E=4-u,w[E]||(w[E]=[]),w[E].push({msg:C(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){r=!1;break a}}catch(y){g(y)}if(!(k=m.$$watchersCount&&
m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||t.length)&&!u--)throw p.$$phase=null,c("infdig",a,w);}while(r||t.length);for(p.$$phase=null;x.length;)try{x.shift()()}catch(z){g(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=
null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{p.$$phase=null}}catch(b){g(b)}finally{try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&H.push(b);w()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=cb([h],arguments,1),k,n;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(n=d.length;k<n;k++)if(d[k])try{d[k].apply(null,l)}catch(q){g(q)}else d.splice(k,
1),k--,n--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&
c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],x=p.$$postDigestQueue=[],H=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;
return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function vd(b){var a=[];x(b)&&m(b,function(b){a.push(Zf(b))});return a}function of(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[oa.HTML]=
e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var g=Aa(e.toString()),q,r,u=!1;q=0;for(r=b.length;q<r;q++)if(d(b[q],
g)){u=!0;break}if(u)for(q=0,r=a.length;q<r;q++)if(d(a[q],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function nf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Va)throw Ca("iequirks");var d=ia(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=
c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Za);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(oa,function(a,b){var c=M(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function pf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var q in l)if(k=h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Va)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function rf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;I(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function sf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=aa.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function tf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){C(f)||(k=l,l=f,f=v);var n=xa.call(arguments,3),q=x(k)&&!k,r=(q?d:c).defer(),
u=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete g[u.$$timeoutId]}q||b.$apply()},l);u.$$timeoutId=m;g[m]=r;return u}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Va&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,
search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function gd(b){b=I(b)?Aa(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function uf(){this.$get=qa(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Jc(b){function a(c,d){if(D(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,
a,c){if(!Da(b)){if(null==b)return b;throw L("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ka:C(a)||(a=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!pc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=gc(b),g=gc(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!C(e)&&!y(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){y(d)&&(d=a.CURRENCY_SYM);y(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",q=0,r=a.lgSize,u=a.gSize;if(h.length>=r+u)for(q=h.length-r,k=0;k<q;k++)0===(q-k)%u&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%r&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),
Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=fg.test(c)?Y(c):a(c));X(c)&&(c=new Date(c));if(!ca(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=vc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){y(a)&&(a=2);return db(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;X(b)&&(b=b.toString());if(!G(b)&&!I(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Za;if(C(a))h=a;else if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Da(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);g.push({get:function(){return{}},
descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(pc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],u=0;c.type===f.type?c.value!==
f.value&&(u=c.value<f.value?-1:1):u=c.type<f.type?-1:1;if(c=u*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){C(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,
a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Xa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ca(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-
1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,n){function q(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function r(a){return x(a)?ca(a)?a:c(a):t}Id(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,m;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,m),u&&(b=Ob(b,u)),b):t});h.$formatters.push(function(a){if(a&&!ca(a))throw kb("datefmt",a);if(q(a))return(m=a)&&u&&(m=Ob(m,u,!0)),n("date")(a,d,u);m=null;return""});if(x(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!q(a)||y(s)||c(a)>=s};g.$observe("min",function(a){s=
r(a);h.$validate()})}if(x(g.max)||g.ngMax){var w;h.$validators.max=function(a){return!q(a)||y(w)||c(a)<=w};g.$observe("max",function(a){w=r(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(x(d)){b=b(d);if(!b.constant)throw kb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=
[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):D(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%
2===a){var k=e(b||[]);if(!n){var m=l(k,1);h.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&
f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+zc(b,"-"):"";a(lb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=
d.$invalid=t,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,M=function(b){return I(b)?b.toLowerCase():b},Na=Object.prototype.hasOwnProperty,rb=function(b){return I(b)?b.toUpperCase():b},Va,z,la,xa=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,qc=Object.getPrototypeOf,
Ea=L("ng"),aa=O.angular||(O.angular={}),Rb,mb=0;Va=W.documentMode;v.$inject=[];Za.$inject=[];var G=Array.isArray,sc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return I(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var b=W.querySelector("[ng-csp]")||W.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");
Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},ob=function(){if(x(ob.name_))return ob.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Qb,pa=1,Pa=3,fe={full:"1.4.4",
major:1,minor:4,dot:4,codeName:"pylon-requirement"};R.expando="ng339";var gb=R.cache={},Ef=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\:\-\_]+(.))/g,Af=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=L("jqLite"),Df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Bf=/<([\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?z(this[b]):z(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Rc={};m("input select option textarea button form details".split(" "),function(b){Rc[b]=!0});var Sc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Vb,removeData:ub,hasData:function(b){for(var a in gb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,
inheritedData:zb,scope:function(b){return z.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z.data(b,"$isolateScope")||z.data(b,"$isolateScopeNoTemplate")},controller:Oc,injector:function(b){return zb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=fb(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=M(a),Ab[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(y(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(y(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(y(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Pc&&(2==b.length&&b!==wb&&b!==Oc?a:d)===t){if(D(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,
on:function a(c,d,e,f){if(x(f))throw Tb("onargs");if(Kc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Nc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;tb(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=z(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;y(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,
c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)y(g)?(g=a(this[h],c,e,f),x(g)&&(g=z(g))):Mc(g,a(this[h],c,e,f));return x(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];
return c}};var xf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=L("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw I(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Sa(a[c],"fn"),
e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=L("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));d=function(a,c){var d=!1;a&&(a=I(a)?a.split(" "):G(a)?a:[],m(a,function(a){a&&
(d=!0,k[a]=c)}));return d};f=d(f,!0);l=d(l,!1);!f&&!l||1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},
Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",
function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&z(g);h=h&&z(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,
e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=hb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=hb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=hb(l.addClass,e);l.removeClass=hb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=hb(k.tempClasses,l||
"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise().catch(a)},"finally":function(a){return this.getPromise().finally(a)}};
return function(c,f){function g(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);h||l.done();h=!0});return l}f.from&&(c.css(f.from),f.from=null);var h,l=new d;return{start:g,end:g}}}]},ea=L("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Xc=/^((?:x|data)[\:\-_])/i,Nf=L("$controller"),Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?
!c.nodeType&&c instanceof z&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},bd="application/json",$b={"Content-Type":bd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,og=L("$http"),fd=function(a){return function(){throw og("legacy",a);}},Ka=aa.$interpolateMinErr=L("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=
L("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||X(a))a=
a.toString(),this.$$search=xc(a);else if(D(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");
this.$$state=y(c)?null:c;return this}});var da=L("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);
else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+
this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:s.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,
value:null},undefined:{type:s.Literal,value:t},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Wa,Ba,ld,Xf,md,a);this.state=
this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,q;e=e||v;if(!g&&x(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case s.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case s.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case s.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case s.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Wa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,
q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),q=l+"("+n.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});
h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):q=l+"("+n.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,
h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});q="["+n.join(",")+"]";this.assign(c,q);e(q);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){n.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+n.join(",")+"}";this.assign(c,q);e(q);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,
"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Wa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case s.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var r=[],m=0;m<h.length;++m)r.push(h[m](a,d,e,g));a=f.apply(t,r,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,q){var r=f(a,d,e,q),m;if(null!=r.value){Ba(r.context,g.expression);ld(r.value,g.expression);m=[];for(var s=0;s<h.length;++s)m.push(Ba(h[s](a,d,e,q),
g.expression));m=Ba(r.value.apply(r.context,m),g.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var m=e(a,d,h,q);a=f(a,d,h,q);Ba(m.value,g.expression);m.context[m.name]=a;return c?{value:a}:a};case s.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case s.ObjectExpression:return h=[],m(a.properties,
function(a){h.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=x(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=x(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(x(l)?l:0)-(x(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&Ba(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),q,m;null!=n&&(q=c(g,h,l,k),Wa(q,f),e&&1!==e&&n&&!n[q]&&(n[q]={}),m=n[q],Ba(m,f));return d?{context:n,name:q,value:m}:m}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Fb(c))&&Ba(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Ca=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=L("$compile"),Z=W.createElement("a"),wd=Aa(O.location.href);xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];
var Dd=".",hg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":
"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=qa(M),dg=qa(rb);Bd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=va("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m(Sc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=va("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Va&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,
$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,g){d.addClass(Xa).addClass(lb);var h=g.name?"name":a&&g.ngForm?"ngForm":!1;return{pre:function(a,d,f,g){if(!("action"in f)){var m=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});
c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var s=g.$$parentForm,B=h?e(g.$name):v;h&&(B(a,g),f.$observe(h,function(c){g.$name!==c&&(B(a,t),s.$$renameControl(g,c),B=e(g.$name),B(a,g))}));d.on("$destroy",function(){s.$removeControl(g);B(a,t);Q(g,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e)},date:jb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Qd,Kb(Qd,
"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",kc,function(a,c){if(ca(a))return a;if(I(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,
c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw kb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||y(h)||a>=h};d.$observe("min",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:t;e.$validate()})}if(x(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
y(l)||a<=l};d.$observe("max",function(a){x(a)&&!X(a)&&(a=parseFloat(a,10));l=X(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){y(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,
button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=jc("",!0),se=jc("Odd",0),re=jc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],Ic={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);Ic[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",
function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:aa.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,r,s){var t=0,v,w,p,A=function(){w&&(w.remove(),w=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){w=null}),w=p,p=null)};e.$watch(g,function(g){var m=function(){!x(l)||l&&!e.$eval(l)||c()},q=++t;g?(a(g,!0).then(function(a){if(q===t){var c=e.$new();r.template=a;a=s(c,function(a){A();d.enter(a,null,f).then(m)});v=c;p=a;v.$emit("$includeContentLoaded",
g);e.$eval(h)}},function(){q===t&&(A(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(A(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!y(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Kd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Md="ng-pending",kb=L("ngModel"),xg=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var q=f(d.ngModel),r=q.assign,s=q,B=r,
K=null,w,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");s=function(a){var d=q(a);C(d)&&(d=c(a));return d};B=function(a,c){C(q(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!q.assign)throw kb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};var A=e.inheritedData("$formController")||Ib,z=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:A,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Xa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Xa);g.addClass(e,Jb);A.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(K);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!X(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,
c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!C(k.then))throw kb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===z&&p.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=p.$$parserName||"parse";if(w===t)g(a,null);else return w||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,
null)})),g(a,w),w;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(K);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(w=y(c)?t:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),y(c)){w=!1;break}X(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=s(a));var e=p.$modelValue,
f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){B(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
function(c){var d=0,e=p.$options;e&&x(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));h.cancel(K);d?K=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=s(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;w=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),zg=L("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,ua(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:r);var v=a&&c(a)||d,w=t&&c(t),p=t?function(a,c){return w(e,c)}:function(a){return Ga(a)},A=function(a,c){return p(a,C(a,c))},x=c(m[2]||m[1]),z=c(m[3]||""),y=c(m[4]||""),J=c(m[8]),F={},C=s?function(a,c){F[s]=c;F[r]=a;return F}:function(a){F[r]=a;return F};return{trackBy:t,
getTrackByValue:A,getWatchables:c(J,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=C(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=x(e,k),c.push(h);m[4]&&(k=y(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=J(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var q=d===g?m:g[m],r=C(d[q],q),s=v(e,r),q=p(s,r),u=x(e,r),w=z(e,r),r=y(e,r),s=new f(q,s,u,w,r);a.push(s);c[q]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[A(a)]},
getViewValueFromOption:function(a){return t?aa.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
a.nextSibling,Wb(a),a=c}function s(a){var c=p&&p[0],d=J&&J[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=F&&w.readValue();F=D.getOptions();var c={},d=h[0].firstChild;N&&h.prepend(p);d=s(d);F.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):
(k=q(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=w.readValue();(D.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var w=k[0];k=l.multiple;for(var p,x=0,y=h.children(),C=y.length;x<C;x++)if(""===y[x].value){p=y.eq(x);break}var N=!!p,J=z(e.cloneNode(!1));J.val("?");var F,D=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},w.writeValue=function(a){F.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=F.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},w.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){(a=F.selectValueMap[a])&&!a.disabled&&c.push(F.getViewValueFromOption(a))});return c},D.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return D.getTrackByValue(a)})},function(){v.$render()})):(w.writeValue=function(a){var c=F.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(J.remove(),N||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||N?(J.remove(),N||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(N||p.remove(),h.prepend(J),h.val("?"),J.prop("selected",!0),J.attr("selected",!0))},w.readValue=function(){var a=F.selectValueMap[h.val()];return a&&!a.disabled?(N||p.remove(),J.remove(),F.getViewValueFromOption(a)):null},D.trackBy&&c.$watch(function(){return D.getTrackByValue(v.$viewValue)},
function(){v.$render()}));N?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=z(e.cloneNode(!1));t();c.$watchCollection(D.getWatchables,t)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,q=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,s=g.$eval(q)||{},t={},x=c.startSymbol(),w=c.endSymbol(),p=x+n+"-"+r+w,A=aa.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),s[d]=h.attr(l.$attr[c]))});
m(s,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===z||f&&X(z)&&isNaN(z)||(A(),f=t[e],y(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),A=v,k()):A=g.$watch(f,k),z=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=L("ngRepeat"),e=function(a,c,d,e,k,n,m){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],q=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],x=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var w,p,A,y,C={$id:Ga};s?w=a(s):(A=function(a,c){return Ga(c)},y=function(a){return a});return function(a,f,g,k,n){w&&(p=function(c,d,e){x&&(C[x]=c);C[v]=d;C.$index=e;return w(a,C)});var s=ga();a.$watchCollection(q,function(g){var k,q,u=f[0],w,C=ga(),D,F,I,G,L,H,M;r&&(a[r]=g);if(Da(g))L=g,q=p||A;else for(M in q=p||y,L=[],g)g.hasOwnProperty(M)&&"$"!==M.charAt(0)&&L.push(M);D=L.length;M=Array(D);for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],G=q(F,I,k),s[G])H=s[G],delete s[G],C[G]=H,M[k]=H;else{if(C[G])throw m(M,
function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",h,G,I);M[k]={id:G,scope:t,clone:t};C[G]=!0}for(w in s){H=s[w];G=qb(H.clone);c.leave(G);if(G[0].parentNode)for(k=0,q=G.length;k<q;k++)G[k].$$NG_REMOVED=!0;H.scope.$destroy()}for(k=0;k<D;k++)if(F=g===L?k:L[k],I=g[F],H=M[k],H.scope){w=u;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);H.clone[0]!=w&&c.move(qb(H.clone),null,z(u));u=H.clone[H.clone.length-1];e(H.scope,k,v,I,x,F,D)}else n(function(a,d){H.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,z(u));u=f;H.clone=a;C[H.id]=H;e(H.scope,k,v,I,x,F,D)});s=C})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw L("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=z(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=x(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=qa({restrict:"E",
terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||y(f)||f.test(a)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(aa),aa.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,g=e;t===g&&(g=Math.min(c(a),3));Math.pow(10,g);return 1==f&&0==g?"one":"other"}})}]),z(W).ready(function(){Zd(W,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

;
/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

;
/*
 AngularJS v1.4.4
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

;
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20140901
 */
/*global window, SM2_DEFER, sm2Debugger, console, document, navigator, setTimeout, setInterval, clearInterval, Audio, opera, module, define */
/*jslint regexp: true, sloppy: true, white: true, nomen: true, plusplus: true, todo: true */
/**
 * About this file
 * -------------------------------------------------------------------------------------
 * This is the fully-commented source version of the SoundManager 2 API,
 * recommended for use during development and testing.
 *
 * See soundmanager2-nodebug-jsmin.js for an optimized build (~11KB with gzip.)
 * http://schillmania.com/projects/soundmanager2/doc/getstarted/#basic-inclusion
 * Alternately, serve this file with gzip for 75% compression savings (~30KB over HTTP.)
 *
 * You may notice <d> and </d> comments in this source; these are delimiters for
 * debug blocks which are removed in the -nodebug builds, further optimizing code size.
 *
 * Also, as you may note: Whoa, reliable cross-platform/device audio support is hard! ;)
 */
(function(window, _undefined) {
    "use strict";
    if(!window || !window.document) {
        // Don't cross the [environment] streams. SM2 expects to be running in a browser, not under node.js etc.
        // Additionally, if a browser somehow manages to fail this test, as Egon said: "It would be bad."
        throw new Error('SoundManager requires a browser with window and document objects.');
    }
    var soundManager = null;
    /**
     * The SoundManager constructor.
     *
     * @constructor
     * @param {string} smURL Optional: Path to SWF files
     * @param {string} smID Optional: The ID to use for the SWF container element
     * @this {SoundManager}
     * @return {SoundManager} The new SoundManager instance
     */

    function SoundManager(smURL, smID) {
        /**
         * soundManager configuration options list
         * defines top-level configuration properties to be applied to the soundManager instance (eg. soundManager.flashVersion)
         * to set these properties, use the setup() method - eg., soundManager.setup({url: '/swf/', flashVersion: 9})
         */
        this.setupOptions = {
            'url': (smURL || null), // path (directory) where SoundManager 2 SWFs exist, eg., /path/to/swfs/
            'flashVersion': 8, // flash build to use (8 or 9.) Some API features require 9.
            'debugMode': true, // enable debugging output (console.log() with HTML fallback)
            'debugFlash': false, // enable debugging output inside SWF, troubleshoot Flash/browser issues
            'useConsole': true, // use console.log() if available (otherwise, writes to #soundmanager-debug element)
            'consoleOnly': true, // if console is being used, do not create/write to #soundmanager-debug
            'waitForWindowLoad': false, // force SM2 to wait for window.onload() before trying to call soundManager.onload()
            'bgColor': '#ffffff', // SWF background color. N/A when wmode = 'transparent'
            'useHighPerformance': false, // position:fixed flash movie can help increase js/flash speed, minimize lag
            'flashPollingInterval': null, // msec affecting whileplaying/loading callback frequency. If null, default of 50 msec is used.
            'html5PollingInterval': null, // msec affecting whileplaying() for HTML5 audio, excluding mobile devices. If null, native HTML5 update events are used.
            'flashLoadTimeout': 1000, // msec to wait for flash movie to load before failing (0 = infinity)
            'wmode': null, // flash rendering mode - null, 'transparent', or 'opaque' (last two allow z-index to work)
            'allowScriptAccess': 'always', // for scripting the SWF (object/embed property), 'always' or 'sameDomain'
            'useFlashBlock': false, // *requires flashblock.css, see demos* - allow recovery from flash blockers. Wait indefinitely and apply timeout CSS to SWF, if applicable.
            'useHTML5Audio': true, // use HTML5 Audio() where API is supported (most Safari, Chrome versions), Firefox (no MP3/MP4.) Ideally, transparent vs. Flash API where possible.
            'html5Test': /^(probably|maybe)$/i, // HTML5 Audio() format support test. Use /^probably$/i; if you want to be more conservative.
            'preferFlash': false, // overrides useHTML5audio, will use Flash for MP3/MP4/AAC if present. Potential option if HTML5 playback with these formats is quirky.
            'noSWFCache': false, // if true, appends ?ts={date} to break aggressive SWF caching.
            'idPrefix': 'sound' // if an id is not provided to createSound(), this prefix is used for generated IDs - 'sound0', 'sound1' etc.
        };
        this.defaultOptions = {
            /**
             * the default configuration for sound objects made with createSound() and related methods
             * eg., volume, auto-load behaviour and so forth
             */
            'autoLoad': false, // enable automatic loading (otherwise .load() will be called on demand with .play(), the latter being nicer on bandwidth - if you want to .load yourself, you also can)
            'autoPlay': false, // enable playing of file as soon as possible (much faster if "stream" is true)
            'from': null, // position to start playback within a sound (msec), default = beginning
            'loops': 1, // how many times to repeat the sound (position will wrap around to 0, setPosition() will break out of loop when >0)
            'onid3': null, // callback function for "ID3 data is added/available"
            'onload': null, // callback function for "load finished"
            'whileloading': null, // callback function for "download progress update" (X of Y bytes received)
            'onplay': null, // callback for "play" start
            'onpause': null, // callback for "pause"
            'onresume': null, // callback for "resume" (pause toggle)
            'whileplaying': null, // callback during play (position update)
            'onposition': null, // object containing times and function callbacks for positions of interest
            'onstop': null, // callback for "user stop"
            'onfailure': null, // callback function for when playing fails
            'onfinish': null, // callback function for "sound finished playing"
            'multiShot': true, // let sounds "restart" or layer on top of each other when played multiple times, rather than one-shot/one at a time
            'multiShotEvents': false, // fire multiple sound events (currently onfinish() only) when multiShot is enabled
            'position': null, // offset (milliseconds) to seek to within loaded sound data.
            'pan': 0, // "pan" settings, left-to-right, -100 to 100
            'stream': true, // allows playing before entire file has loaded (recommended)
            'to': null, // position to end playback within a sound (msec), default = end
            'type': null, // MIME-like hint for file pattern / canPlay() tests, eg. audio/mp3
            'usePolicyFile': false, // enable crossdomain.xml request for audio on remote domains (for ID3/waveform access)
            'volume': 100 // self-explanatory. 0-100, the latter being the max.
        };
        this.flash9Options = {
            /**
             * flash 9-only options,
             * merged into defaultOptions if flash 9 is being used
             */
            'isMovieStar': null, // "MovieStar" MPEG4 audio mode. Null (default) = auto detect MP4, AAC etc. based on URL. true = force on, ignore URL
            'usePeakData': false, // enable left/right channel peak (level) data
            'useWaveformData': false, // enable sound spectrum (raw waveform data) - NOTE: May increase CPU load.
            'useEQData': false, // enable sound EQ (frequency spectrum data) - NOTE: May increase CPU load.
            'onbufferchange': null, // callback for "isBuffering" property change
            'ondataerror': null // callback for waveform/eq data access error (flash playing audio in other tabs/domains)
        };
        this.movieStarOptions = {
            /**
             * flash 9.0r115+ MPEG4 audio options,
             * merged into defaultOptions if flash 9+movieStar mode is enabled
             */
            'bufferTime': 3, // seconds of data to buffer before playback begins (null = flash default of 0.1 seconds - if AAC playback is gappy, try increasing.)
            'serverURL': null, // rtmp: FMS or FMIS server to connect to, required when requesting media via RTMP or one of its variants
            'onconnect': null, // rtmp: callback for connection to flash media server
            'duration': null // rtmp: song duration (msec)
        };
        this.audioFormats = {
            /**
             * determines HTML5 support + flash requirements.
             * if no support (via flash and/or HTML5) for a "required" format, SM2 will fail to start.
             * flash fallback is used for MP3 or MP4 if HTML5 can't play it (or if preferFlash = true)
             */
            'mp3': {
                'type': ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
                'required': true
            },
            'mp4': {
                'related': ['aac', 'm4a', 'm4b'], // additional formats under the MP4 container
                'type': ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
                'required': false
            },
            'ogg': {
                'type': ['audio/ogg; codecs=vorbis'],
                'required': false
            },
            'opus': {
                'type': ['audio/ogg; codecs=opus', 'audio/opus'],
                'required': false
            },
            'wav': {
                'type': ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'],
                'required': false
            }
        };
        // HTML attributes (id + class names) for the SWF container
        this.movieID = 'sm2-container';
        this.id = (smID || 'sm2movie');
        this.debugID = 'soundmanager-debug';
        this.debugURLParam = /([#?&])debug=1/i;
        // dynamic attributes
        this.versionNumber = 'V2.97a.20140901';
        this.version = null;
        this.movieURL = null;
        this.altURL = null;
        this.swfLoaded = false;
        this.enabled = false;
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.muted = false;
        this.didFlashBlock = false;
        this.filePattern = null;
        this.filePatterns = {
            'flash8': /\.mp3(\?.*)?$/i,
            'flash9': /\.mp3(\?.*)?$/i
        };
        // support indicators, set at init
        this.features = {
            'buffering': false,
            'peakData': false,
            'waveformData': false,
            'eqData': false,
            'movieStar': false
        };
        // flash sandbox info, used primarily in troubleshooting
        this.sandbox = {
            // <d>
            'type': null,
            'types': {
                'remote': 'remote (domain-based) rules',
                'localWithFile': 'local with file access (no internet access)',
                'localWithNetwork': 'local with network (internet access only, no local access)',
                'localTrusted': 'local, trusted (local+internet access)'
            },
            'description': null,
            'noRemote': null,
            'noLocal': null
            // </d>
        };
        /**
         * format support (html5/flash)
         * stores canPlayType() results based on audioFormats.
         * eg. { mp3: boolean, mp4: boolean }
         * treat as read-only.
         */
        this.html5 = {
            'usingFlash': null // set if/when flash fallback is needed
        };
        // file type support hash
        this.flash = {};
        // determined at init time
        this.html5Only = false;
        // used for special cases (eg. iPad/iPhone/palm OS?)
        this.ignoreFlash = false;
        /**
         * a few private internals (OK, a lot. :D)
         */
        var SMSound,
            sm2 = this,
            globalHTML5Audio = null,
            flash = null,
            sm = 'soundManager',
            smc = sm + ': ',
            h5 = 'HTML5::',
            id, ua = navigator.userAgent,
            wl = window.location.href.toString(),
            doc = document,
            doNothing, setProperties, init, fV, on_queue = [],
            debugOpen = true,
            debugTS, didAppend = false,
            appendSuccess = false,
            didInit = false,
            disabled = false,
            windowLoaded = false,
            _wDS, wdCount = 0,
            initComplete, mixin, assign, extraOptions, addOnEvent, processOnEvents, initUserOnload, delayWaitForEI, waitForEI, rebootIntoHTML5, setVersionInfo, handleFocus, strings, initMovie, preInit, domContentLoaded, winOnLoad, didDCLoaded, getDocument, createMovie, catchError, setPolling, initDebug, debugLevels = ['log', 'info', 'warn', 'error'],
            defaultFlashVersion = 8,
            disableObject, failSafely, normalizeMovieURL, oRemoved = null,
            oRemovedHTML = null,
            str, flashBlockHandler, getSWFCSS, swfCSS, toggleDebug, loopFix, policyFix, complain, idCheck, waitingForEI = false,
            initPending = false,
            startTimer, stopTimer, timerExecute, h5TimerCount = 0,
            h5IntervalTimer = null,
            parseURL, messages = [],
            canIgnoreFlash, needsFlash = null,
            featureCheck, html5OK, html5CanPlay, html5Ext, html5Unload, domContentLoadedIE, testHTML5, event, slice = Array.prototype.slice,
            useGlobalHTML5Audio = false,
            lastGlobalHTML5URL, hasFlash, detectFlash, badSafariFix, html5_events, showSupport, flushMessages, wrapCallback, idCounter = 0,
            is_iDevice = ua.match(/(ipad|iphone|ipod)/i),
            isAndroid = ua.match(/android/i),
            isIE = ua.match(/msie/i),
            isWebkit = ua.match(/webkit/i),
            isSafari = (ua.match(/safari/i) && !ua.match(/chrome/i)),
            isOpera = (ua.match(/opera/i)),
            mobileHTML5 = (ua.match(/(mobile|pre\/|xoom)/i) || is_iDevice || isAndroid),
            isBadSafari = (!wl.match(/usehtml5audio/i) && !wl.match(/sm2\-ignorebadua/i) && isSafari && !ua.match(/silk/i) && ua.match(/OS X 10_6_([3-7])/i)), // Safari 4 and 5 (excluding Kindle Fire, "Silk") occasionally fail to load/play HTML5 audio on Snow Leopard 10.6.3 through 10.6.7 due to bug(s) in QuickTime X and/or other underlying frameworks. :/ Confirmed bug. https://bugs.webkit.org/show_bug.cgi?id=32159
            hasConsole = (window.console !== _undefined && console.log !== _undefined),
            isFocused = (doc.hasFocus !== _undefined ? doc.hasFocus() : null),
            tryInitOnFocus = (isSafari && (doc.hasFocus === _undefined || !doc.hasFocus())),
            okToDisable = !tryInitOnFocus,
            flashMIME = /(mp3|mp4|mpa|m4a|m4b)/i,
            msecScale = 1000,
            emptyURL = 'about:blank', // safe URL to unload, or load nothing from (flash 8 + most HTML5 UAs)
            emptyWAV = 'data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==', // tiny WAV for HTML5 unloading
            overHTTP = (doc.location ? doc.location.protocol.match(/http/i) : null),
            http = (!overHTTP ? 'http:/' + '/' : ''),
            // mp3, mp4, aac etc.
            netStreamMimeTypes = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            // Flash v9.0r115+ "moviestar" formats
            netStreamTypes = ['mpeg4', 'aac', 'flv', 'mov', 'mp4', 'm4v', 'f4v', 'm4a', 'm4b', 'mp4v', '3gp', '3g2'],
            netStreamPattern = new RegExp('\\.(' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i; // default mp3 set
        // use altURL if not "online"
        this.useAltURL = !overHTTP;
        swfCSS = {
            'swfBox': 'sm2-object-box',
            'swfDefault': 'movieContainer',
            'swfError': 'swf_error', // SWF loaded, but SM2 couldn't start (other error)
            'swfTimedout': 'swf_timedout',
            'swfLoaded': 'swf_loaded',
            'swfUnblocked': 'swf_unblocked', // or loaded OK
            'sm2Debug': 'sm2_debug',
            'highPerf': 'high_performance',
            'flashDebug': 'flash_debug'
        };
        /**
         * basic HTML5 Audio() support test
         * try...catch because of IE 9 "not implemented" nonsense
         * https://github.com/Modernizr/Modernizr/issues/224
         */
        this.hasHTML5 = (function() {
            try {
                // new Audio(null) for stupid Opera 9.64 case, which throws not_enough_arguments exception otherwise.
                return(Audio !== _undefined && (isOpera && opera !== _undefined && opera.version() < 10 ? new Audio(null) : new Audio()).canPlayType !== _undefined);
            } catch(e) {
                return false;
            }
        }());
        /**
         * Public SoundManager API
         * -----------------------
         */
        /**
         * Configures top-level soundManager properties.
         *
         * @param {object} options Option parameters, eg. { flashVersion: 9, url: '/path/to/swfs/' }
         * onready and ontimeout are also accepted parameters. call soundManager.setup() to see the full list.
         */
        this.setup = function(options) {
            var noURL = (!sm2.url);
            // warn if flash options have already been applied
            if(options !== _undefined && didInit && needsFlash && sm2.ok() && (options.flashVersion !== _undefined || options.url !== _undefined || options.html5Test !== _undefined)) {
                complain(str('setupLate'));
            }
            // TODO: defer: true?
            assign(options);
            // special case 1: "Late setup". SM2 loaded normally, but user didn't assign flash URL eg., setup({url:...}) before SM2 init. Treat as delayed init.
            if(options) {
                if(noURL && didDCLoaded && options.url !== _undefined) {
                    sm2.beginDelayedInit();
                }
                // special case 2: If lazy-loading SM2 (DOMContentLoaded has already happened) and user calls setup() with url: parameter, try to init ASAP.
                if(!didDCLoaded && options.url !== _undefined && doc.readyState === 'complete') {
                    setTimeout(domContentLoaded, 1);
                }
            }
            return sm2;
        };
        this.ok = function() {
            return(needsFlash ? (didInit && !disabled) : (sm2.useHTML5Audio && sm2.hasHTML5));
        };
        this.supported = this.ok; // legacy
        this.getMovie = function(smID) {
            // safety net: some old browsers differ on SWF references, possibly related to ExternalInterface / flash version
            return id(smID) || doc[smID] || window[smID];
        };
        /**
         * Creates a SMSound sound object instance.
         *
         * @param {object} oOptions Sound options (at minimum, id and url parameters are required.)
         * @return {object} SMSound The new SMSound object.
         */
        this.createSound = function(oOptions, _url) {
            var cs, cs_string, options, oSound = null;
            // <d>
            cs = sm + '.createSound(): ';
            cs_string = cs + str(!didInit ? 'notReady' : 'notOK');
            // </d>
            if(!didInit || !sm2.ok()) {
                complain(cs_string);
                return false;
            }
            if(_url !== _undefined) {
                // function overloading in JS! :) ..assume simple createSound(id, url) use case
                oOptions = {
                    'id': oOptions,
                    'url': _url
                };
            }
            // inherit from defaultOptions
            options = mixin(oOptions);
            options.url = parseURL(options.url);
            // generate an id, if needed.
            if(options.id === undefined) {
                options.id = sm2.setupOptions.idPrefix + (idCounter++);
            }
            // <d>
            if(options.id.toString().charAt(0).match(/^[0-9]$/)) {
                sm2._wD(cs + str('badID', options.id), 2);
            }
            sm2._wD(cs + options.id + (options.url ? ' (' + options.url + ')' : ''), 1);
            // </d>
            if(idCheck(options.id, true)) {
                sm2._wD(cs + options.id + ' exists', 1);
                return sm2.sounds[options.id];
            }

            function make() {
                options = loopFix(options);
                sm2.sounds[options.id] = new SMSound(options);
                sm2.soundIDs.push(options.id);
                return sm2.sounds[options.id];
            }
            if(html5OK(options)) {
                oSound = make();
                sm2._wD(options.id + ': Using HTML5');
                oSound._setup_html5(options);
            } else {
                if(sm2.html5Only) {
                    sm2._wD(options.id + ': No HTML5 support for this sound, and no Flash. Exiting.');
                    return make();
                }
                // TODO: Move HTML5/flash checks into generic URL parsing/handling function.
                if(sm2.html5.usingFlash && options.url && options.url.match(/data\:/i)) {
                    // data: URIs not supported by Flash, either.
                    sm2._wD(options.id + ': data: URIs not supported via Flash. Exiting.');
                    return make();
                }
                if(fV > 8) {
                    if(options.isMovieStar === null) {
                        // attempt to detect MPEG-4 formats
                        options.isMovieStar = !! (options.serverURL || (options.type ? options.type.match(netStreamMimeTypes) : false) || (options.url && options.url.match(netStreamPattern)));
                    }
                    // <d>
                    if(options.isMovieStar) {
                        sm2._wD(cs + 'using MovieStar handling');
                        if(options.loops > 1) {
                            _wDS('noNSLoop');
                        }
                    }
                    // </d>
                }
                options = policyFix(options, cs);
                oSound = make();
                if(fV === 8) {
                    flash._createSound(options.id, options.loops || 1, options.usePolicyFile);
                } else {
                    flash._createSound(options.id, options.url, options.usePeakData, options.useWaveformData, options.useEQData, options.isMovieStar, (options.isMovieStar ? options.bufferTime : false), options.loops || 1, options.serverURL, options.duration || null, options.autoPlay, true, options.autoLoad, options.usePolicyFile);
                    if(!options.serverURL) {
                        // We are connected immediately
                        oSound.connected = true;
                        if(options.onconnect) {
                            options.onconnect.apply(oSound);
                        }
                    }
                }
                if(!options.serverURL && (options.autoLoad || options.autoPlay)) {
                    // call load for non-rtmp streams
                    oSound.load(options);
                }
            }
            // rtmp will play in onconnect
            if(!options.serverURL && options.autoPlay) {
                oSound.play();
            }
            return oSound;
        };
        /**
         * Destroys a SMSound sound object instance.
         *
         * @param {string} sID The ID of the sound to destroy
         */
        this.destroySound = function(sID, _bFromSound) {
            // explicitly destroy a sound before normal page unload, etc.
            if(!idCheck(sID)) {
                return false;
            }
            var oS = sm2.sounds[sID],
                i;
            // Disable all callbacks while the sound is being destroyed
            oS._iO = {};
            oS.stop();
            oS.unload();
            for(i = 0; i < sm2.soundIDs.length; i++) {
                if(sm2.soundIDs[i] === sID) {
                    sm2.soundIDs.splice(i, 1);
                    break;
                }
            }
            if(!_bFromSound) {
                // ignore if being called from SMSound instance
                oS.destruct(true);
            }
            oS = null;
            delete sm2.sounds[sID];
            return true;
        };
        /**
         * Calls the load() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {object} oOptions Optional: Sound options
         */
        this.load = function(sID, oOptions) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].load(oOptions);
        };
        /**
         * Calls the unload() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         */
        this.unload = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].unload();
        };
        /**
         * Calls the onPosition() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {number} nPosition The position to watch for
         * @param {function} oMethod The relevant callback to fire
         * @param {object} oScope Optional: The scope to apply the callback to
         * @return {SMSound} The SMSound object
         */
        this.onPosition = function(sID, nPosition, oMethod, oScope) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].onposition(nPosition, oMethod, oScope);
        };
        // legacy/backwards-compability: lower-case method name
        this.onposition = this.onPosition;
        /**
         * Calls the clearOnPosition() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {number} nPosition The position to watch for
         * @param {function} oMethod Optional: The relevant callback to fire
         * @return {SMSound} The SMSound object
         */
        this.clearOnPosition = function(sID, nPosition, oMethod) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].clearOnPosition(nPosition, oMethod);
        };
        /**
         * Calls the play() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {object} oOptions Optional: Sound options
         * @return {SMSound} The SMSound object
         */
        this.play = function(sID, oOptions) {
            var result = null,
                // legacy function-overloading use case: play('mySound', '/path/to/some.mp3');
                overloaded = (oOptions && !(oOptions instanceof Object));
            if(!didInit || !sm2.ok()) {
                complain(sm + '.play(): ' + str(!didInit ? 'notReady' : 'notOK'));
                return false;
            }
            if(!idCheck(sID, overloaded)) {
                if(!overloaded) {
                    // no sound found for the given ID. Bail.
                    return false;
                }
                if(overloaded) {
                    oOptions = {
                        url: oOptions
                    };
                }
                if(oOptions && oOptions.url) {
                    // overloading use case, create+play: .play('someID', {url:'/path/to.mp3'});
                    sm2._wD(sm + '.play(): Attempting to create "' + sID + '"', 1);
                    oOptions.id = sID;
                    result = sm2.createSound(oOptions).play();
                }
            } else if(overloaded) {
                // existing sound object case
                oOptions = {
                    url: oOptions
                };
            }
            if(result === null) {
                // default case
                result = sm2.sounds[sID].play(oOptions);
            }
            return result;
        };
        this.start = this.play; // just for convenience
        /**
         * Calls the setPosition() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {number} nMsecOffset Position (milliseconds)
         * @return {SMSound} The SMSound object
         */
        this.setPosition = function(sID, nMsecOffset) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].setPosition(nMsecOffset);
        };
        /**
         * Calls the stop() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.stop = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            sm2._wD(sm + '.stop(' + sID + ')', 1);
            return sm2.sounds[sID].stop();
        };
        /**
         * Stops all currently-playing sounds.
         */
        this.stopAll = function() {
            var oSound;
            sm2._wD(sm + '.stopAll()', 1);
            for(oSound in sm2.sounds) {
                if(sm2.sounds.hasOwnProperty(oSound)) {
                    // apply only to sound objects
                    sm2.sounds[oSound].stop();
                }
            }
        };
        /**
         * Calls the pause() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.pause = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].pause();
        };
        /**
         * Pauses all currently-playing sounds.
         */
        this.pauseAll = function() {
            var i;
            for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                sm2.sounds[sm2.soundIDs[i]].pause();
            }
        };
        /**
         * Calls the resume() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.resume = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].resume();
        };
        /**
         * Resumes all currently-paused sounds.
         */
        this.resumeAll = function() {
            var i;
            for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                sm2.sounds[sm2.soundIDs[i]].resume();
            }
        };
        /**
         * Calls the togglePause() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.togglePause = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].togglePause();
        };
        /**
         * Calls the setPan() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {number} nPan The pan value (-100 to 100)
         * @return {SMSound} The SMSound object
         */
        this.setPan = function(sID, nPan) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].setPan(nPan);
        };
        /**
         * Calls the setVolume() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @param {number} nVol The volume value (0 to 100)
         * @return {SMSound} The SMSound object
         */
        this.setVolume = function(sID, nVol) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].setVolume(nVol);
        };
        /**
         * Calls the mute() method of either a single SMSound object by ID, or all sound objects.
         *
         * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
         */
        this.mute = function(sID) {
            var i = 0;
            if(sID instanceof String) {
                sID = null;
            }
            if(!sID) {
                sm2._wD(sm + '.mute(): Muting all sounds');
                for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                    sm2.sounds[sm2.soundIDs[i]].mute();
                }
                sm2.muted = true;
            } else {
                if(!idCheck(sID)) {
                    return false;
                }
                sm2._wD(sm + '.mute(): Muting "' + sID + '"');
                return sm2.sounds[sID].mute();
            }
            return true;
        };
        /**
         * Mutes all sounds.
         */
        this.muteAll = function() {
            sm2.mute();
        };
        /**
         * Calls the unmute() method of either a single SMSound object by ID, or all sound objects.
         *
         * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
         */
        this.unmute = function(sID) {
            var i;
            if(sID instanceof String) {
                sID = null;
            }
            if(!sID) {
                sm2._wD(sm + '.unmute(): Unmuting all sounds');
                for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                    sm2.sounds[sm2.soundIDs[i]].unmute();
                }
                sm2.muted = false;
            } else {
                if(!idCheck(sID)) {
                    return false;
                }
                sm2._wD(sm + '.unmute(): Unmuting "' + sID + '"');
                return sm2.sounds[sID].unmute();
            }
            return true;
        };
        /**
         * Unmutes all sounds.
         */
        this.unmuteAll = function() {
            sm2.unmute();
        };
        /**
         * Calls the toggleMute() method of a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.toggleMute = function(sID) {
            if(!idCheck(sID)) {
                return false;
            }
            return sm2.sounds[sID].toggleMute();
        };
        /**
         * Retrieves the memory used by the flash plugin.
         *
         * @return {number} The amount of memory in use
         */
        this.getMemoryUse = function() {
            // flash-only
            var ram = 0;
            if(flash && fV !== 8) {
                ram = parseInt(flash._getMemoryUse(), 10);
            }
            return ram;
        };
        /**
         * Undocumented: NOPs soundManager and all SMSound objects.
         */
        this.disable = function(bNoDisable) {
            // destroy all functions
            var i;
            if(bNoDisable === _undefined) {
                bNoDisable = false;
            }
            if(disabled) {
                return false;
            }
            disabled = true;
            _wDS('shutdown', 1);
            for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                disableObject(sm2.sounds[sm2.soundIDs[i]]);
            }
            // fire "complete", despite fail
            initComplete(bNoDisable);
            event.remove(window, 'load', initUserOnload);
            return true;
        };
        /**
         * Determines playability of a MIME type, eg. 'audio/mp3'.
         */
        this.canPlayMIME = function(sMIME) {
            var result;
            if(sm2.hasHTML5) {
                result = html5CanPlay({
                    type: sMIME
                });
            }
            if(!result && needsFlash) {
                // if flash 9, test netStream (movieStar) types as well.
                result = (sMIME && sm2.ok() ? !! ((fV > 8 ? sMIME.match(netStreamMimeTypes) : null) || sMIME.match(sm2.mimePattern)) : null); // TODO: make less "weird" (per JSLint)
            }
            return result;
        };
        /**
         * Determines playability of a URL based on audio support.
         *
         * @param {string} sURL The URL to test
         * @return {boolean} URL playability
         */
        this.canPlayURL = function(sURL) {
            var result;
            if(sm2.hasHTML5) {
                result = html5CanPlay({
                    url: sURL
                });
            }
            if(!result && needsFlash) {
                result = (sURL && sm2.ok() ? !! (sURL.match(sm2.filePattern)) : null);
            }
            return result;
        };
        /**
         * Determines playability of an HTML DOM &lt;a&gt; object (or similar object literal) based on audio support.
         *
         * @param {object} oLink an HTML DOM &lt;a&gt; object or object literal including href and/or type attributes
         * @return {boolean} URL playability
         */
        this.canPlayLink = function(oLink) {
            if(oLink.type !== _undefined && oLink.type) {
                if(sm2.canPlayMIME(oLink.type)) {
                    return true;
                }
            }
            return sm2.canPlayURL(oLink.href);
        };
        /**
         * Retrieves a SMSound object by ID.
         *
         * @param {string} sID The ID of the sound
         * @return {SMSound} The SMSound object
         */
        this.getSoundById = function(sID, _suppressDebug) {
            if(!sID) {
                return null;
            }
            var result = sm2.sounds[sID];
            // <d>
            if(!result && !_suppressDebug) {
                sm2._wD(sm + '.getSoundById(): Sound "' + sID + '" not found.', 2);
            }
            // </d>
            return result;
        };
        /**
         * Queues a callback for execution when SoundManager has successfully initialized.
         *
         * @param {function} oMethod The callback method to fire
         * @param {object} oScope Optional: The scope to apply to the callback
         */
        this.onready = function(oMethod, oScope) {
            var sType = 'onready',
                result = false;
            if(typeof oMethod === 'function') {
                // <d>
                if(didInit) {
                    sm2._wD(str('queue', sType));
                }
                // </d>
                if(!oScope) {
                    oScope = window;
                }
                addOnEvent(sType, oMethod, oScope);
                processOnEvents();
                result = true;
            } else {
                throw str('needFunction', sType);
            }
            return result;
        };
        /**
         * Queues a callback for execution when SoundManager has failed to initialize.
         *
         * @param {function} oMethod The callback method to fire
         * @param {object} oScope Optional: The scope to apply to the callback
         */
        this.ontimeout = function(oMethod, oScope) {
            var sType = 'ontimeout',
                result = false;
            if(typeof oMethod === 'function') {
                // <d>
                if(didInit) {
                    sm2._wD(str('queue', sType));
                }
                // </d>
                if(!oScope) {
                    oScope = window;
                }
                addOnEvent(sType, oMethod, oScope);
                processOnEvents({
                    type: sType
                });
                result = true;
            } else {
                throw str('needFunction', sType);
            }
            return result;
        };
        /**
         * Writes console.log()-style debug output to a console or in-browser element.
         * Applies when debugMode = true
         *
         * @param {string} sText The console message
         * @param {object} nType Optional log level (number), or object. Number case: Log type/style where 0 = 'info', 1 = 'warn', 2 = 'error'. Object case: Object to be dumped.
         */
        this._writeDebug = function(sText, sTypeOrObject) {
            // pseudo-private console.log()-style output
            // <d>
            var sDID = 'soundmanager-debug',
                o, oItem;
            if(!sm2.debugMode) {
                return false;
            }
            if(hasConsole && sm2.useConsole) {
                if(sTypeOrObject && typeof sTypeOrObject === 'object') {
                    // object passed; dump to console.
                    console.log(sText, sTypeOrObject);
                } else if(debugLevels[sTypeOrObject] !== _undefined) {
                    console[debugLevels[sTypeOrObject]](sText);
                } else {
                    console.log(sText);
                }
                if(sm2.consoleOnly) {
                    return true;
                }
            }
            o = id(sDID);
            if(!o) {
                return false;
            }
            oItem = doc.createElement('div');
            if(++wdCount % 2 === 0) {
                oItem.className = 'sm2-alt';
            }
            if(sTypeOrObject === _undefined) {
                sTypeOrObject = 0;
            } else {
                sTypeOrObject = parseInt(sTypeOrObject, 10);
            }
            oItem.appendChild(doc.createTextNode(sText));
            if(sTypeOrObject) {
                if(sTypeOrObject >= 2) {
                    oItem.style.fontWeight = 'bold';
                }
                if(sTypeOrObject === 3) {
                    oItem.style.color = '#ff3333';
                }
            }
            // top-to-bottom
            // o.appendChild(oItem);
            // bottom-to-top
            o.insertBefore(oItem, o.firstChild);
            o = null;
            // </d>
            return true;
        };
        // <d>
        // last-resort debugging option
        if(wl.indexOf('sm2-debug=alert') !== -1) {
            this._writeDebug = function(sText) {
                window.alert(sText);
            };
        }
        // </d>
        // alias
        this._wD = this._writeDebug;
        /**
         * Provides debug / state information on all SMSound objects.
         */
        this._debug = function() {
            // <d>
            var i, j;
            _wDS('currentObj', 1);
            for(i = 0, j = sm2.soundIDs.length; i < j; i++) {
                sm2.sounds[sm2.soundIDs[i]]._debug();
            }
            // </d>
        };
        /**
         * Restarts and re-initializes the SoundManager instance.
         *
         * @param {boolean} resetEvents Optional: When true, removes all registered onready and ontimeout event callbacks.
         * @param {boolean} excludeInit Options: When true, does not call beginDelayedInit() (which would restart SM2).
         * @return {object} soundManager The soundManager instance.
         */
        this.reboot = function(resetEvents, excludeInit) {
            // reset some (or all) state, and re-init unless otherwise specified.
            // <d>
            if(sm2.soundIDs.length) {
                sm2._wD('Destroying ' + sm2.soundIDs.length + ' SMSound object' + (sm2.soundIDs.length !== 1 ? 's' : '') + '...');
            }
            // </d>
            var i, j, k;
            for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                sm2.sounds[sm2.soundIDs[i]].destruct();
            }
            // trash ze flash (remove from the DOM)
            if(flash) {
                try {
                    if(isIE) {
                        oRemovedHTML = flash.innerHTML;
                    }
                    oRemoved = flash.parentNode.removeChild(flash);
                } catch(e) {
                    // Remove failed? May be due to flash blockers silently removing the SWF object/embed node from the DOM. Warn and continue.
                    _wDS('badRemove', 2);
                }
            }
            // actually, force recreate of movie.
            oRemovedHTML = oRemoved = needsFlash = flash = null;
            sm2.enabled = didDCLoaded = didInit = waitingForEI = initPending = didAppend = appendSuccess = disabled = useGlobalHTML5Audio = sm2.swfLoaded = false;
            sm2.soundIDs = [];
            sm2.sounds = {};
            idCounter = 0;
            if(!resetEvents) {
                // reset callbacks for onready, ontimeout etc. so that they will fire again on re-init
                for(i in on_queue) {
                    if(on_queue.hasOwnProperty(i)) {
                        for(j = 0, k = on_queue[i].length; j < k; j++) {
                            on_queue[i][j].fired = false;
                        }
                    }
                }
            } else {
                // remove all callbacks entirely
                on_queue = [];
            }
            // <d>
            if(!excludeInit) {
                sm2._wD(sm + ': Rebooting...');
            }
            // </d>
            // reset HTML5 and flash canPlay test results
            sm2.html5 = {
                'usingFlash': null
            };
            sm2.flash = {};
            // reset device-specific HTML/flash mode switches
            sm2.html5Only = false;
            sm2.ignoreFlash = false;
            window.setTimeout(function() {
                preInit();
                // by default, re-init
                if(!excludeInit) {
                    sm2.beginDelayedInit();
                }
            }, 20);
            return sm2;
        };
        this.reset = function() {
            /**
             * Shuts down and restores the SoundManager instance to its original loaded state, without an explicit reboot. All onready/ontimeout handlers are removed.
             * After this call, SM2 may be re-initialized via soundManager.beginDelayedInit().
             * @return {object} soundManager The soundManager instance.
             */
            _wDS('reset');
            return sm2.reboot(true, true);
        };
        /**
         * Undocumented: Determines the SM2 flash movie's load progress.
         *
         * @return {number or null} Percent loaded, or if invalid/unsupported, null.
         */
        this.getMoviePercent = function() {
            /**
             * Interesting syntax notes...
             * Flash/ExternalInterface (ActiveX/NPAPI) bridge methods are not typeof "function" nor instanceof Function, but are still valid.
             * Additionally, JSLint dislikes ('PercentLoaded' in flash)-style syntax and recommends hasOwnProperty(), which does not work in this case.
             * Furthermore, using (flash && flash.PercentLoaded) causes IE to throw "object doesn't support this property or method".
             * Thus, 'in' syntax must be used.
             */
            return(flash && 'PercentLoaded' in flash ? flash.PercentLoaded() : null); // Yes, JSLint. See nearby comment in source for explanation.
        };
        /**
         * Additional helper for manually invoking SM2's init process after DOM Ready / window.onload().
         */
        this.beginDelayedInit = function() {
            windowLoaded = true;
            domContentLoaded();
            setTimeout(function() {
                if(initPending) {
                    return false;
                }
                createMovie();
                initMovie();
                initPending = true;
                return true;
            }, 20);
            delayWaitForEI();
        };
        /**
         * Destroys the SoundManager instance and all SMSound instances.
         */
        this.destruct = function() {
            sm2._wD(sm + '.destruct()');
            sm2.disable(true);
        };
        /**
         * SMSound() (sound object) constructor
         * ------------------------------------
         *
         * @param {object} oOptions Sound options (id and url are required attributes)
         * @return {SMSound} The new SMSound object
         */
        SMSound = function(oOptions) {
            var s = this,
                resetProperties, add_html5_events, remove_html5_events, stop_html5_timer, start_html5_timer, attachOnPosition, onplay_called = false,
                onPositionItems = [],
                onPositionFired = 0,
                detachOnPosition, applyFromTo, lastURL = null,
                lastHTML5State, urlOmitted;
            lastHTML5State = {
                // tracks duration + position (time)
                duration: null,
                time: null
            };
            this.id = oOptions.id;
            // legacy
            this.sID = this.id;
            this.url = oOptions.url;
            this.options = mixin(oOptions);
            // per-play-instance-specific options
            this.instanceOptions = this.options;
            // short alias
            this._iO = this.instanceOptions;
            // assign property defaults
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            // whether or not this object is using HTML5
            this.isHTML5 = false;
            // internal HTML5 Audio() object reference
            this._a = null;
            // for flash 8 special-case createSound() without url, followed by load/play with url case
            urlOmitted = (this.url ? false : true);
            /**
             * SMSound() public methods
             * ------------------------
             */
            this.id3 = {};
            /**
             * Writes SMSound object parameters to debug console
             */
            this._debug = function() {
                // <d>
                sm2._wD(s.id + ': Merged options:', s.options);
                // </d>
            };
            /**
             * Begins loading a sound per its *url*.
             *
             * @param {object} oOptions Optional: Sound options
             * @return {SMSound} The SMSound object
             */
            this.load = function(oOptions) {
                var oSound = null,
                    instanceOptions;
                if(oOptions !== _undefined) {
                    s._iO = mixin(oOptions, s.options);
                } else {
                    oOptions = s.options;
                    s._iO = oOptions;
                    if(lastURL && lastURL !== s.url) {
                        _wDS('manURL');
                        s._iO.url = s.url;
                        s.url = null;
                    }
                }
                if(!s._iO.url) {
                    s._iO.url = s.url;
                }
                s._iO.url = parseURL(s._iO.url);
                // ensure we're in sync
                s.instanceOptions = s._iO;
                // local shortcut
                instanceOptions = s._iO;
                sm2._wD(s.id + ': load (' + instanceOptions.url + ')');
                if(!instanceOptions.url && !s.url) {
                    sm2._wD(s.id + ': load(): url is unassigned. Exiting.', 2);
                    return s;
                }
                // <d>
                if(!s.isHTML5 && fV === 8 && !s.url && !instanceOptions.autoPlay) {
                    // flash 8 load() -> play() won't work before onload has fired.
                    sm2._wD(s.id + ': Flash 8 load() limitation: Wait for onload() before calling play().', 1);
                }
                // </d>
                if(instanceOptions.url === s.url && s.readyState !== 0 && s.readyState !== 2) {
                    _wDS('onURL', 1);
                    // if loaded and an onload() exists, fire immediately.
                    if(s.readyState === 3 && instanceOptions.onload) {
                        // assume success based on truthy duration.
                        wrapCallback(s, function() {
                            instanceOptions.onload.apply(s, [( !! s.duration)]);
                        });
                    }
                    return s;
                }
                // reset a few state properties
                s.loaded = false;
                s.readyState = 1;
                s.playState = 0;
                s.id3 = {};
                // TODO: If switching from HTML5 -> flash (or vice versa), stop currently-playing audio.
                if(html5OK(instanceOptions)) {
                    oSound = s._setup_html5(instanceOptions);
                    if(!oSound._called_load) {
                        s._html5_canplay = false;
                        // TODO: review called_load / html5_canplay logic
                        // if url provided directly to load(), assign it here.
                        if(s.url !== instanceOptions.url) {
                            sm2._wD(_wDS('manURL') + ': ' + instanceOptions.url);
                            s._a.src = instanceOptions.url;
                            // TODO: review / re-apply all relevant options (volume, loop, onposition etc.)
                            // reset position for new URL
                            s.setPosition(0);
                        }
                        // given explicit load call, try to preload.
                        // early HTML5 implementation (non-standard)
                        s._a.autobuffer = 'auto';
                        // standard property, values: none / metadata / auto
                        // reference: http://msdn.microsoft.com/en-us/library/ie/ff974759%28v=vs.85%29.aspx
                        s._a.preload = 'auto';
                        s._a._called_load = true;
                    } else {
                        sm2._wD(s.id + ': Ignoring request to load again');
                    }
                } else {
                    if(sm2.html5Only) {
                        sm2._wD(s.id + ': No flash support. Exiting.');
                        return s;
                    }
                    if(s._iO.url && s._iO.url.match(/data\:/i)) {
                        // data: URIs not supported by Flash, either.
                        sm2._wD(s.id + ': data: URIs not supported via Flash. Exiting.');
                        return s;
                    }
                    try {
                        s.isHTML5 = false;
                        s._iO = policyFix(loopFix(instanceOptions));
                        // if we have "position", disable auto-play as we'll be seeking to that position at onload().
                        if(s._iO.autoPlay && (s._iO.position || s._iO.from)) {
                            sm2._wD(s.id + ': Disabling autoPlay because of non-zero offset case');
                            s._iO.autoPlay = false;
                        }
                        // re-assign local shortcut
                        instanceOptions = s._iO;
                        if(fV === 8) {
                            flash._load(s.id, instanceOptions.url, instanceOptions.stream, instanceOptions.autoPlay, instanceOptions.usePolicyFile);
                        } else {
                            flash._load(s.id, instanceOptions.url, !! (instanceOptions.stream), !! (instanceOptions.autoPlay), instanceOptions.loops || 1, !! (instanceOptions.autoLoad), instanceOptions.usePolicyFile);
                        }
                    } catch(e) {
                        _wDS('smError', 2);
                        debugTS('onload', false);
                        catchError({
                            type: 'SMSOUND_LOAD_JS_EXCEPTION',
                            fatal: true
                        });
                    }
                }
                // after all of this, ensure sound url is up to date.
                s.url = instanceOptions.url;
                return s;
            };
            /**
             * Unloads a sound, canceling any open HTTP requests.
             *
             * @return {SMSound} The SMSound object
             */
            this.unload = function() {
                // Flash 8/AS2 can't "close" a stream - fake it by loading an empty URL
                // Flash 9/AS3: Close stream, preventing further load
                // HTML5: Most UAs will use empty URL
                if(s.readyState !== 0) {
                    sm2._wD(s.id + ': unload()');
                    if(!s.isHTML5) {
                        if(fV === 8) {
                            flash._unload(s.id, emptyURL);
                        } else {
                            flash._unload(s.id);
                        }
                    } else {
                        stop_html5_timer();
                        if(s._a) {
                            s._a.pause();
                            // update empty URL, too
                            lastURL = html5Unload(s._a);
                        }
                    }
                    // reset load/status flags
                    resetProperties();
                }
                return s;
            };
            /**
             * Unloads and destroys a sound.
             */
            this.destruct = function(_bFromSM) {
                sm2._wD(s.id + ': Destruct');
                if(!s.isHTML5) {
                    // kill sound within Flash
                    // Disable the onfailure handler
                    s._iO.onfailure = null;
                    flash._destroySound(s.id);
                } else {
                    stop_html5_timer();
                    if(s._a) {
                        s._a.pause();
                        html5Unload(s._a);
                        if(!useGlobalHTML5Audio) {
                            remove_html5_events();
                        }
                        // break obvious circular reference
                        s._a._s = null;
                        s._a = null;
                    }
                }
                if(!_bFromSM) {
                    // ensure deletion from controller
                    sm2.destroySound(s.id, true);
                }
            };
            /**
             * Begins playing a sound.
             *
             * @param {object} oOptions Optional: Sound options
             * @return {SMSound} The SMSound object
             */
            this.play = function(oOptions, _updatePlayState) {
                var fN, allowMulti, a, onready,
                    audioClone, onended, oncanplay,
                    startOK = true,
                    exit = null;
                // <d>
                fN = s.id + ': play(): ';
                // </d>
                // default to true
                _updatePlayState = (_updatePlayState === _undefined ? true : _updatePlayState);
                if(!oOptions) {
                    oOptions = {};
                }
                // first, use local URL (if specified)
                if(s.url) {
                    s._iO.url = s.url;
                }
                // mix in any options defined at createSound()
                s._iO = mixin(s._iO, s.options);
                // mix in any options specific to this method
                s._iO = mixin(oOptions, s._iO);
                s._iO.url = parseURL(s._iO.url);
                s.instanceOptions = s._iO;
                // RTMP-only
                if(!s.isHTML5 && s._iO.serverURL && !s.connected) {
                    if(!s.getAutoPlay()) {
                        sm2._wD(fN + ' Netstream not connected yet - setting autoPlay');
                        s.setAutoPlay(true);
                    }
                    // play will be called in onconnect()
                    return s;
                }
                if(html5OK(s._iO)) {
                    s._setup_html5(s._iO);
                    start_html5_timer();
                }
                if(s.playState === 1 && !s.paused) {
                    allowMulti = s._iO.multiShot;
                    if(!allowMulti) {
                        sm2._wD(fN + 'Already playing (one-shot)', 1);
                        if(s.isHTML5) {
                            // go back to original position.
                            s.setPosition(s._iO.position);
                        }
                        exit = s;
                    } else {
                        sm2._wD(fN + 'Already playing (multi-shot)', 1);
                    }
                }
                if(exit !== null) {
                    return exit;
                }
                // edge case: play() with explicit URL parameter
                if(oOptions.url && oOptions.url !== s.url) {
                    // special case for createSound() followed by load() / play() with url; avoid double-load case.
                    if(!s.readyState && !s.isHTML5 && fV === 8 && urlOmitted) {
                        urlOmitted = false;
                    } else {
                        // load using merged options
                        s.load(s._iO);
                    }
                }
                if(!s.loaded) {
                    if(s.readyState === 0) {
                        sm2._wD(fN + 'Attempting to load');
                        // try to get this sound playing ASAP
                        if(!s.isHTML5 && !sm2.html5Only) {
                            // flash: assign directly because setAutoPlay() increments the instanceCount
                            s._iO.autoPlay = true;
                            s.load(s._iO);
                        } else if(s.isHTML5) {
                            // iOS needs this when recycling sounds, loading a new URL on an existing object.
                            s.load(s._iO);
                        } else {
                            sm2._wD(fN + 'Unsupported type. Exiting.');
                            exit = s;
                        }
                        // HTML5 hack - re-set instanceOptions?
                        s.instanceOptions = s._iO;
                    } else if(s.readyState === 2) {
                        sm2._wD(fN + 'Could not load - exiting', 2);
                        exit = s;
                    } else {
                        sm2._wD(fN + 'Loading - attempting to play...');
                    }
                } else {
                    // "play()"
                    sm2._wD(fN.substr(0, fN.lastIndexOf(':')));
                }
                if(exit !== null) {
                    return exit;
                }
                if(!s.isHTML5 && fV === 9 && s.position > 0 && s.position === s.duration) {
                    // flash 9 needs a position reset if play() is called while at the end of a sound.
                    sm2._wD(fN + 'Sound at end, resetting to position:0');
                    oOptions.position = 0;
                }
                /**
                 * Streams will pause when their buffer is full if they are being loaded.
                 * In this case paused is true, but the song hasn't started playing yet.
                 * If we just call resume() the onplay() callback will never be called.
                 * So only call resume() if the position is > 0.
                 * Another reason is because options like volume won't have been applied yet.
                 * For normal sounds, just resume.
                 */
                if(s.paused && s.position >= 0 && (!s._iO.serverURL || s.position > 0)) {
                    // https://gist.github.com/37b17df75cc4d7a90bf6
                    sm2._wD(fN + 'Resuming from paused state', 1);
                    s.resume();
                } else {
                    s._iO = mixin(oOptions, s._iO);
                    /**
                     * Preload in the event of play() with position under Flash,
                     * or from/to parameters and non-RTMP case
                     */
                    if(((!s.isHTML5 && s._iO.position !== null && s._iO.position > 0) || (s._iO.from !== null && s._iO.from > 0) || s._iO.to !== null) && s.instanceCount === 0 && s.playState === 0 && !s._iO.serverURL) {
                        onready = function() {
                            // sound "canplay" or onload()
                            // re-apply position/from/to to instance options, and start playback
                            s._iO = mixin(oOptions, s._iO);
                            s.play(s._iO);
                        };
                        // HTML5 needs to at least have "canplay" fired before seeking.
                        if(s.isHTML5 && !s._html5_canplay) {
                            // this hasn't been loaded yet. load it first, and then do this again.
                            sm2._wD(fN + 'Beginning load for non-zero offset case');
                            s.load({
                                // note: custom HTML5-only event added for from/to implementation.
                                _oncanplay: onready
                            });
                            exit = false;
                        } else if(!s.isHTML5 && !s.loaded && (!s.readyState || s.readyState !== 2)) {
                            // to be safe, preload the whole thing in Flash.
                            sm2._wD(fN + 'Preloading for non-zero offset case');
                            s.load({
                                onload: onready
                            });
                            exit = false;
                        }
                        if(exit !== null) {
                            return exit;
                        }
                        // otherwise, we're ready to go. re-apply local options, and continue
                        s._iO = applyFromTo();
                    }
                    // sm2._wD(fN + 'Starting to play');
                    // increment instance counter, where enabled + supported
                    if(!s.instanceCount || s._iO.multiShotEvents || (s.isHTML5 && s._iO.multiShot && !useGlobalHTML5Audio) || (!s.isHTML5 && fV > 8 && !s.getAutoPlay())) {
                        s.instanceCount++;
                    }
                    // if first play and onposition parameters exist, apply them now
                    if(s._iO.onposition && s.playState === 0) {
                        attachOnPosition(s);
                    }
                    s.playState = 1;
                    s.paused = false;
                    s.position = (s._iO.position !== _undefined && !isNaN(s._iO.position) ? s._iO.position : 0);
                    if(!s.isHTML5) {
                        s._iO = policyFix(loopFix(s._iO));
                    }
                    if(s._iO.onplay && _updatePlayState) {
                        s._iO.onplay.apply(s);
                        onplay_called = true;
                    }
                    s.setVolume(s._iO.volume, true);
                    s.setPan(s._iO.pan, true);
                    if(!s.isHTML5) {
                        startOK = flash._start(s.id, s._iO.loops || 1, (fV === 9 ? s.position : s.position / msecScale), s._iO.multiShot || false);
                        if(fV === 9 && !startOK) {
                            // edge case: no sound hardware, or 32-channel flash ceiling hit.
                            // applies only to Flash 9, non-NetStream/MovieStar sounds.
                            // http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/Sound.html#play%28%29
                            sm2._wD(fN + 'No sound hardware, or 32-sound ceiling hit', 2);
                            if(s._iO.onplayerror) {
                                s._iO.onplayerror.apply(s);
                            }
                        }
                    } else {
                        if(s.instanceCount < 2) {
                            // HTML5 single-instance case
                            start_html5_timer();
                            a = s._setup_html5();
                            s.setPosition(s._iO.position);
                            a.play();
                        } else {
                            // HTML5 multi-shot case
                            sm2._wD(s.id + ': Cloning Audio() for instance #' + s.instanceCount + '...');
                            audioClone = new Audio(s._iO.url);
                            onended = function() {
                                event.remove(audioClone, 'ended', onended);
                                s._onfinish(s);
                                // cleanup
                                html5Unload(audioClone);
                                audioClone = null;
                            };
                            oncanplay = function() {
                                event.remove(audioClone, 'canplay', oncanplay);
                                try {
                                    audioClone.currentTime = s._iO.position / msecScale;
                                } catch(err) {
                                    complain(s.id + ': multiShot play() failed to apply position of ' + (s._iO.position / msecScale));
                                }
                                audioClone.play();
                            };
                            event.add(audioClone, 'ended', onended);
                            // apply volume to clones, too
                            if(s._iO.volume !== undefined) {
                                audioClone.volume = Math.max(0, Math.min(1, s._iO.volume / 100));
                            }
                            // playing multiple muted sounds? if you do this, you're weird ;) - but let's cover it.
                            if(s.muted) {
                                audioClone.muted = true;
                            }
                            if(s._iO.position) {
                                // HTML5 audio can't seek before onplay() event has fired.
                                // wait for canplay, then seek to position and start playback.
                                event.add(audioClone, 'canplay', oncanplay);
                            } else {
                                // begin playback at currentTime: 0
                                audioClone.play();
                            }
                        }
                    }
                }
                return s;
            };
            // just for convenience
            this.start = this.play;
            /**
             * Stops playing a sound (and optionally, all sounds)
             *
             * @param {boolean} bAll Optional: Whether to stop all sounds
             * @return {SMSound} The SMSound object
             */
            this.stop = function(bAll) {
                var instanceOptions = s._iO,
                    originalPosition;
                if(s.playState === 1) {
                    sm2._wD(s.id + ': stop()');
                    s._onbufferchange(0);
                    s._resetOnPosition(0);
                    s.paused = false;
                    if(!s.isHTML5) {
                        s.playState = 0;
                    }
                    // remove onPosition listeners, if any
                    detachOnPosition();
                    // and "to" position, if set
                    if(instanceOptions.to) {
                        s.clearOnPosition(instanceOptions.to);
                    }
                    if(!s.isHTML5) {
                        flash._stop(s.id, bAll);
                        // hack for netStream: just unload
                        if(instanceOptions.serverURL) {
                            s.unload();
                        }
                    } else {
                        if(s._a) {
                            originalPosition = s.position;
                            // act like Flash, though
                            s.setPosition(0);
                            // hack: reflect old position for onstop() (also like Flash)
                            s.position = originalPosition;
                            // html5 has no stop()
                            // NOTE: pausing means iOS requires interaction to resume.
                            s._a.pause();
                            s.playState = 0;
                            // and update UI
                            s._onTimer();
                            stop_html5_timer();
                        }
                    }
                    s.instanceCount = 0;
                    s._iO = {};
                    if(instanceOptions.onstop) {
                        instanceOptions.onstop.apply(s);
                    }
                }
                return s;
            };
            /**
             * Undocumented/internal: Sets autoPlay for RTMP.
             *
             * @param {boolean} autoPlay state
             */
            this.setAutoPlay = function(autoPlay) {
                sm2._wD(s.id + ': Autoplay turned ' + (autoPlay ? 'on' : 'off'));
                s._iO.autoPlay = autoPlay;
                if(!s.isHTML5) {
                    flash._setAutoPlay(s.id, autoPlay);
                    if(autoPlay) {
                        // only increment the instanceCount if the sound isn't loaded (TODO: verify RTMP)
                        if(!s.instanceCount && s.readyState === 1) {
                            s.instanceCount++;
                            sm2._wD(s.id + ': Incremented instance count to ' + s.instanceCount);
                        }
                    }
                }
            };
            /**
             * Undocumented/internal: Returns the autoPlay boolean.
             *
             * @return {boolean} The current autoPlay value
             */
            this.getAutoPlay = function() {
                return s._iO.autoPlay;
            };
            /**
             * Sets the position of a sound.
             *
             * @param {number} nMsecOffset Position (milliseconds)
             * @return {SMSound} The SMSound object
             */
            this.setPosition = function(nMsecOffset) {
                if(nMsecOffset === _undefined) {
                    nMsecOffset = 0;
                }
                var position, position1K,
                    // Use the duration from the instance options, if we don't have a track duration yet.
                    // position >= 0 and <= current available (loaded) duration
                    offset = (s.isHTML5 ? Math.max(nMsecOffset, 0) : Math.min(s.duration || s._iO.duration, Math.max(nMsecOffset, 0)));
                s.position = offset;
                position1K = s.position / msecScale;
                s._resetOnPosition(s.position);
                s._iO.position = offset;
                if(!s.isHTML5) {
                    position = (fV === 9 ? s.position : position1K);
                    if(s.readyState && s.readyState !== 2) {
                        // if paused or not playing, will not resume (by playing)
                        flash._setPosition(s.id, position, (s.paused || !s.playState), s._iO.multiShot);
                    }
                } else if(s._a) {
                    // Set the position in the canplay handler if the sound is not ready yet
                    if(s._html5_canplay) {
                        if(s._a.currentTime !== position1K) {
                            /**
                             * DOM/JS errors/exceptions to watch out for:
                             * if seek is beyond (loaded?) position, "DOM exception 11"
                             * "INDEX_SIZE_ERR": DOM exception 1
                             */
                            sm2._wD(s.id + ': setPosition(' + position1K + ')');
                            try {
                                s._a.currentTime = position1K;
                                if(s.playState === 0 || s.paused) {
                                    // allow seek without auto-play/resume
                                    s._a.pause();
                                }
                            } catch(e) {
                                sm2._wD(s.id + ': setPosition(' + position1K + ') failed: ' + e.message, 2);
                            }
                        }
                    } else if(position1K) {
                        // warn on non-zero seek attempts
                        sm2._wD(s.id + ': setPosition(' + position1K + '): Cannot seek yet, sound not ready', 2);
                        return s;
                    }
                    if(s.paused) {
                        // if paused, refresh UI right away
                        // force update
                        s._onTimer(true);
                    }
                }
                return s;
            };
            /**
             * Pauses sound playback.
             *
             * @return {SMSound} The SMSound object
             */
            this.pause = function(_bCallFlash) {
                if(s.paused || (s.playState === 0 && s.readyState !== 1)) {
                    return s;
                }
                sm2._wD(s.id + ': pause()');
                s.paused = true;
                if(!s.isHTML5) {
                    if(_bCallFlash || _bCallFlash === _undefined) {
                        flash._pause(s.id, s._iO.multiShot);
                    }
                } else {
                    s._setup_html5().pause();
                    stop_html5_timer();
                }
                if(s._iO.onpause) {
                    s._iO.onpause.apply(s);
                }
                return s;
            };
            /**
             * Resumes sound playback.
             *
             * @return {SMSound} The SMSound object
             */
            /**
             * When auto-loaded streams pause on buffer full they have a playState of 0.
             * We need to make sure that the playState is set to 1 when these streams "resume".
             * When a paused stream is resumed, we need to trigger the onplay() callback if it
             * hasn't been called already. In this case since the sound is being played for the
             * first time, I think it's more appropriate to call onplay() rather than onresume().
             */
            this.resume = function() {
                var instanceOptions = s._iO;
                if(!s.paused) {
                    return s;
                }
                sm2._wD(s.id + ': resume()');
                s.paused = false;
                s.playState = 1;
                if(!s.isHTML5) {
                    if(instanceOptions.isMovieStar && !instanceOptions.serverURL) {
                        // Bizarre Webkit bug (Chrome reported via 8tracks.com dudes): AAC content paused for 30+ seconds(?) will not resume without a reposition.
                        s.setPosition(s.position);
                    }
                    // flash method is toggle-based (pause/resume)
                    flash._pause(s.id, instanceOptions.multiShot);
                } else {
                    s._setup_html5().play();
                    start_html5_timer();
                }
                if(!onplay_called && instanceOptions.onplay) {
                    instanceOptions.onplay.apply(s);
                    onplay_called = true;
                } else if(instanceOptions.onresume) {
                    instanceOptions.onresume.apply(s);
                }
                return s;
            };
            /**
             * Toggles sound playback.
             *
             * @return {SMSound} The SMSound object
             */
            this.togglePause = function() {
                sm2._wD(s.id + ': togglePause()');
                if(s.playState === 0) {
                    s.play({
                        position: (fV === 9 && !s.isHTML5 ? s.position : s.position / msecScale)
                    });
                    return s;
                }
                if(s.paused) {
                    s.resume();
                } else {
                    s.pause();
                }
                return s;
            };
            /**
             * Sets the panning (L-R) effect.
             *
             * @param {number} nPan The pan value (-100 to 100)
             * @return {SMSound} The SMSound object
             */
            this.setPan = function(nPan, bInstanceOnly) {
                if(nPan === _undefined) {
                    nPan = 0;
                }
                if(bInstanceOnly === _undefined) {
                    bInstanceOnly = false;
                }
                if(!s.isHTML5) {
                    flash._setPan(s.id, nPan);
                } // else { no HTML5 pan? }
                s._iO.pan = nPan;
                if(!bInstanceOnly) {
                    s.pan = nPan;
                    s.options.pan = nPan;
                }
                return s;
            };
            /**
             * Sets the volume.
             *
             * @param {number} nVol The volume value (0 to 100)
             * @return {SMSound} The SMSound object
             */
            this.setVolume = function(nVol, _bInstanceOnly) {
                /**
                 * Note: Setting volume has no effect on iOS "special snowflake" devices.
                 * Hardware volume control overrides software, and volume
                 * will always return 1 per Apple docs. (iOS 4 + 5.)
                 * http://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingSoundtoCanvasAnimations/AddingSoundtoCanvasAnimations.html
                 */
                if(nVol === _undefined) {
                    nVol = 100;
                }
                if(_bInstanceOnly === _undefined) {
                    _bInstanceOnly = false;
                }
                if(!s.isHTML5) {
                    flash._setVolume(s.id, (sm2.muted && !s.muted) || s.muted ? 0 : nVol);
                } else if(s._a) {
                    if(sm2.muted && !s.muted) {
                        s.muted = true;
                        s._a.muted = true;
                    }
                    // valid range: 0-1
                    s._a.volume = Math.max(0, Math.min(1, nVol / 100));
                }
                s._iO.volume = nVol;
                if(!_bInstanceOnly) {
                    s.volume = nVol;
                    s.options.volume = nVol;
                }
                return s;
            };
            /**
             * Mutes the sound.
             *
             * @return {SMSound} The SMSound object
             */
            this.mute = function() {
                s.muted = true;
                if(!s.isHTML5) {
                    flash._setVolume(s.id, 0);
                } else if(s._a) {
                    s._a.muted = true;
                }
                return s;
            };
            /**
             * Unmutes the sound.
             *
             * @return {SMSound} The SMSound object
             */
            this.unmute = function() {
                s.muted = false;
                var hasIO = (s._iO.volume !== _undefined);
                if(!s.isHTML5) {
                    flash._setVolume(s.id, hasIO ? s._iO.volume : s.options.volume);
                } else if(s._a) {
                    s._a.muted = false;
                }
                return s;
            };
            /**
             * Toggles the muted state of a sound.
             *
             * @return {SMSound} The SMSound object
             */
            this.toggleMute = function() {
                return(s.muted ? s.unmute() : s.mute());
            };
            /**
             * Registers a callback to be fired when a sound reaches a given position during playback.
             *
             * @param {number} nPosition The position to watch for
             * @param {function} oMethod The relevant callback to fire
             * @param {object} oScope Optional: The scope to apply the callback to
             * @return {SMSound} The SMSound object
             */
            this.onPosition = function(nPosition, oMethod, oScope) {
                // TODO: basic dupe checking?
                onPositionItems.push({
                    position: parseInt(nPosition, 10),
                    method: oMethod,
                    scope: (oScope !== _undefined ? oScope : s),
                    fired: false
                });
                return s;
            };
            // legacy/backwards-compability: lower-case method name
            this.onposition = this.onPosition;
            /**
             * Removes registered callback(s) from a sound, by position and/or callback.
             *
             * @param {number} nPosition The position to clear callback(s) for
             * @param {function} oMethod Optional: Identify one callback to be removed when multiple listeners exist for one position
             * @return {SMSound} The SMSound object
             */
            this.clearOnPosition = function(nPosition, oMethod) {
                var i;
                nPosition = parseInt(nPosition, 10);
                if(isNaN(nPosition)) {
                    // safety check
                    return false;
                }
                for(i = 0; i < onPositionItems.length; i++) {
                    if(nPosition === onPositionItems[i].position) {
                        // remove this item if no method was specified, or, if the method matches
                        if(!oMethod || (oMethod === onPositionItems[i].method)) {
                            if(onPositionItems[i].fired) {
                                // decrement "fired" counter, too
                                onPositionFired--;
                            }
                            onPositionItems.splice(i, 1);
                        }
                    }
                }
            };
            this._processOnPosition = function() {
                var i, item, j = onPositionItems.length;
                if(!j || !s.playState || onPositionFired >= j) {
                    return false;
                }
                for(i = j - 1; i >= 0; i--) {
                    item = onPositionItems[i];
                    if(!item.fired && s.position >= item.position) {
                        item.fired = true;
                        onPositionFired++;
                        item.method.apply(item.scope, [item.position]);
                        j = onPositionItems.length; //  reset j -- onPositionItems.length can be changed in the item callback above... occasionally breaking the loop.
                    }
                }
                return true;
            };
            this._resetOnPosition = function(nPosition) {
                // reset "fired" for items interested in this position
                var i, item, j = onPositionItems.length;
                if(!j) {
                    return false;
                }
                for(i = j - 1; i >= 0; i--) {
                    item = onPositionItems[i];
                    if(item.fired && nPosition <= item.position) {
                        item.fired = false;
                        onPositionFired--;
                    }
                }
                return true;
            };
            /**
             * SMSound() private internals
             * --------------------------------
             */
            applyFromTo = function() {
                var instanceOptions = s._iO,
                    f = instanceOptions.from,
                    t = instanceOptions.to,
                    start, end;
                end = function() {
                    // end has been reached.
                    sm2._wD(s.id + ': "To" time of ' + t + ' reached.');
                    // detach listener
                    s.clearOnPosition(t, end);
                    // stop should clear this, too
                    s.stop();
                };
                start = function() {
                    sm2._wD(s.id + ': Playing "from" ' + f);
                    // add listener for end
                    if(t !== null && !isNaN(t)) {
                        s.onPosition(t, end);
                    }
                };
                if(f !== null && !isNaN(f)) {
                    // apply to instance options, guaranteeing correct start position.
                    instanceOptions.position = f;
                    // multiShot timing can't be tracked, so prevent that.
                    instanceOptions.multiShot = false;
                    start();
                }
                // return updated instanceOptions including starting position
                return instanceOptions;
            };
            attachOnPosition = function() {
                var item,
                    op = s._iO.onposition;
                // attach onposition things, if any, now.
                if(op) {
                    for(item in op) {
                        if(op.hasOwnProperty(item)) {
                            s.onPosition(parseInt(item, 10), op[item]);
                        }
                    }
                }
            };
            detachOnPosition = function() {
                var item,
                    op = s._iO.onposition;
                // detach any onposition()-style listeners.
                if(op) {
                    for(item in op) {
                        if(op.hasOwnProperty(item)) {
                            s.clearOnPosition(parseInt(item, 10));
                        }
                    }
                }
            };
            start_html5_timer = function() {
                if(s.isHTML5) {
                    startTimer(s);
                }
            };
            stop_html5_timer = function() {
                if(s.isHTML5) {
                    stopTimer(s);
                }
            };
            resetProperties = function(retainPosition) {
                if(!retainPosition) {
                    onPositionItems = [];
                    onPositionFired = 0;
                }
                onplay_called = false;
                s._hasTimer = null;
                s._a = null;
                s._html5_canplay = false;
                s.bytesLoaded = null;
                s.bytesTotal = null;
                s.duration = (s._iO && s._iO.duration ? s._iO.duration : null);
                s.durationEstimate = null;
                s.buffered = [];
                // legacy: 1D array
                s.eqData = [];
                s.eqData.left = [];
                s.eqData.right = [];
                s.failures = 0;
                s.isBuffering = false;
                s.instanceOptions = {};
                s.instanceCount = 0;
                s.loaded = false;
                s.metadata = {};
                // 0 = uninitialised, 1 = loading, 2 = failed/error, 3 = loaded/success
                s.readyState = 0;
                s.muted = false;
                s.paused = false;
                s.peakData = {
                    left: 0,
                    right: 0
                };
                s.waveformData = {
                    left: [],
                    right: []
                };
                s.playState = 0;
                s.position = null;
                s.id3 = {};
            };
            resetProperties();
            /**
             * Pseudo-private SMSound internals
             * --------------------------------
             */
            this._onTimer = function(bForce) {
                /**
                 * HTML5-only _whileplaying() etc.
                 * called from both HTML5 native events, and polling/interval-based timers
                 * mimics flash and fires only when time/duration change, so as to be polling-friendly
                 */
                var duration, isNew = false,
                    time, x = {};
                if(s._hasTimer || bForce) {
                    // TODO: May not need to track readyState (1 = loading)
                    if(s._a && (bForce || ((s.playState > 0 || s.readyState === 1) && !s.paused))) {
                        duration = s._get_html5_duration();
                        if(duration !== lastHTML5State.duration) {
                            lastHTML5State.duration = duration;
                            s.duration = duration;
                            isNew = true;
                        }
                        // TODO: investigate why this goes wack if not set/re-set each time.
                        s.durationEstimate = s.duration;
                        time = (s._a.currentTime * msecScale || 0);
                        if(time !== lastHTML5State.time) {
                            lastHTML5State.time = time;
                            isNew = true;
                        }
                        if(isNew || bForce) {
                            s._whileplaying(time, x, x, x, x);
                        }
                    }
                    /* else {

          // sm2._wD('_onTimer: Warn for "'+s.id+'": '+(!s._a?'Could not find element. ':'')+(s.playState === 0?'playState bad, 0?':'playState = '+s.playState+', OK'));

          return false;

        }*/
                    return isNew;
                }
            };
            this._get_html5_duration = function() {
                var instanceOptions = s._iO,
                    // if audio object exists, use its duration - else, instance option duration (if provided - it's a hack, really, and should be retired) OR null
                    d = (s._a && s._a.duration ? s._a.duration * msecScale : (instanceOptions && instanceOptions.duration ? instanceOptions.duration : null)),
                    result = (d && !isNaN(d) && d !== Infinity ? d : null);
                return result;
            };
            this._apply_loop = function(a, nLoops) {
                /**
                 * boolean instead of "loop", for webkit? - spec says string. http://www.w3.org/TR/html-markup/audio.html#audio.attrs.loop
                 * note that loop is either off or infinite under HTML5, unlike Flash which allows arbitrary loop counts to be specified.
                 */
                // <d>
                if(!a.loop && nLoops > 1) {
                    sm2._wD('Note: Native HTML5 looping is infinite.', 1);
                }
                // </d>
                a.loop = (nLoops > 1 ? 'loop' : '');
            };
            this._setup_html5 = function(oOptions) {
                var instanceOptions = mixin(s._iO, oOptions),
                    a = useGlobalHTML5Audio ? globalHTML5Audio : s._a,
                    dURL = decodeURI(instanceOptions.url),
                    sameURL;
                /**
                 * "First things first, I, Poppa..." (reset the previous state of the old sound, if playing)
                 * Fixes case with devices that can only play one sound at a time
                 * Otherwise, other sounds in mid-play will be terminated without warning and in a stuck state
                 */
                if(useGlobalHTML5Audio) {
                    if(dURL === decodeURI(lastGlobalHTML5URL)) {
                        // global HTML5 audio: re-use of URL
                        sameURL = true;
                    }
                } else if(dURL === decodeURI(lastURL)) {
                    // options URL is the same as the "last" URL, and we used (loaded) it
                    sameURL = true;
                }
                if(a) {
                    if(a._s) {
                        if(useGlobalHTML5Audio) {
                            if(a._s && a._s.playState && !sameURL) {
                                // global HTML5 audio case, and loading a new URL. stop the currently-playing one.
                                a._s.stop();
                            }
                        } else if(!useGlobalHTML5Audio && dURL === decodeURI(lastURL)) {
                            // non-global HTML5 reuse case: same url, ignore request
                            s._apply_loop(a, instanceOptions.loops);
                            return a;
                        }
                    }
                    if(!sameURL) {
                        // don't retain onPosition() stuff with new URLs.
                        if(lastURL) {
                            resetProperties(false);
                        }
                        // assign new HTML5 URL
                        a.src = instanceOptions.url;
                        s.url = instanceOptions.url;
                        lastURL = instanceOptions.url;
                        lastGlobalHTML5URL = instanceOptions.url;
                        a._called_load = false;
                    }
                } else {
                    if(instanceOptions.autoLoad || instanceOptions.autoPlay) {
                        s._a = new Audio(instanceOptions.url);
                        s._a.load();
                    } else {
                        // null for stupid Opera 9.64 case
                        s._a = (isOpera && opera.version() < 10 ? new Audio(null) : new Audio());
                    }
                    // assign local reference
                    a = s._a;
                    a._called_load = false;
                    if(useGlobalHTML5Audio) {
                        globalHTML5Audio = a;
                    }
                }
                s.isHTML5 = true;
                // store a ref on the track
                s._a = a;
                // store a ref on the audio
                a._s = s;
                add_html5_events();
                s._apply_loop(a, instanceOptions.loops);
                if(instanceOptions.autoLoad || instanceOptions.autoPlay) {
                    s.load();
                } else {
                    // early HTML5 implementation (non-standard)
                    a.autobuffer = false;
                    // standard ('none' is also an option.)
                    a.preload = 'auto';
                }
                return a;
            };
            add_html5_events = function() {
                if(s._a._added_events) {
                    return false;
                }
                var f;

                function add(oEvt, oFn, bCapture) {
                    return s._a ? s._a.addEventListener(oEvt, oFn, bCapture || false) : null;
                }
                s._a._added_events = true;
                for(f in html5_events) {
                    if(html5_events.hasOwnProperty(f)) {
                        add(f, html5_events[f]);
                    }
                }
                return true;
            };
            remove_html5_events = function() {
                // Remove event listeners
                var f;

                function remove(oEvt, oFn, bCapture) {
                    return(s._a ? s._a.removeEventListener(oEvt, oFn, bCapture || false) : null);
                }
                sm2._wD(s.id + ': Removing event listeners');
                s._a._added_events = false;
                for(f in html5_events) {
                    if(html5_events.hasOwnProperty(f)) {
                        remove(f, html5_events[f]);
                    }
                }
            };
            /**
             * Pseudo-private event internals
             * ------------------------------
             */
            this._onload = function(nSuccess) {
                var fN,
                    // check for duration to prevent false positives from flash 8 when loading from cache.
                    loadOK = !! nSuccess || (!s.isHTML5 && fV === 8 && s.duration);
                // <d>
                fN = s.id + ': ';
                sm2._wD(fN + (loadOK ? 'onload()' : 'Failed to load / invalid sound?' + (!s.duration ? ' Zero-length duration reported.' : ' -') + ' (' + s.url + ')'), (loadOK ? 1 : 2));
                if(!loadOK && !s.isHTML5) {
                    if(sm2.sandbox.noRemote === true) {
                        sm2._wD(fN + str('noNet'), 1);
                    }
                    if(sm2.sandbox.noLocal === true) {
                        sm2._wD(fN + str('noLocal'), 1);
                    }
                }
                // </d>
                s.loaded = loadOK;
                s.readyState = loadOK ? 3 : 2;
                s._onbufferchange(0);
                if(s._iO.onload) {
                    wrapCallback(s, function() {
                        s._iO.onload.apply(s, [loadOK]);
                    });
                }
                return true;
            };
            this._onbufferchange = function(nIsBuffering) {
                if(s.playState === 0) {
                    // ignore if not playing
                    return false;
                }
                if((nIsBuffering && s.isBuffering) || (!nIsBuffering && !s.isBuffering)) {
                    return false;
                }
                s.isBuffering = (nIsBuffering === 1);
                if(s._iO.onbufferchange) {
                    sm2._wD(s.id + ': Buffer state change: ' + nIsBuffering);
                    s._iO.onbufferchange.apply(s, [nIsBuffering]);
                }
                return true;
            };
            /**
             * Playback may have stopped due to buffering, or related reason.
             * This state can be encountered on iOS < 6 when auto-play is blocked.
             */
            this._onsuspend = function() {
                if(s._iO.onsuspend) {
                    sm2._wD(s.id + ': Playback suspended');
                    s._iO.onsuspend.apply(s);
                }
                return true;
            };
            /**
             * flash 9/movieStar + RTMP-only method, should fire only once at most
             * at this point we just recreate failed sounds rather than trying to reconnect
             */
            this._onfailure = function(msg, level, code) {
                s.failures++;
                sm2._wD(s.id + ': Failure (' + s.failures + '): ' + msg);
                if(s._iO.onfailure && s.failures === 1) {
                    s._iO.onfailure(msg, level, code);
                } else {
                    sm2._wD(s.id + ': Ignoring failure');
                }
            };
            /**
             * flash 9/movieStar + RTMP-only method for unhandled warnings/exceptions from Flash
             * e.g., RTMP "method missing" warning (non-fatal) for getStreamLength on server
             */
            this._onwarning = function(msg, level, code) {
                if(s._iO.onwarning) {
                    s._iO.onwarning(msg, level, code);
                }
            };
            this._onfinish = function() {
                // store local copy before it gets trashed...
                var io_onfinish = s._iO.onfinish;
                s._onbufferchange(0);
                s._resetOnPosition(0);
                // reset some state items
                if(s.instanceCount) {
                    s.instanceCount--;
                    if(!s.instanceCount) {
                        // remove onPosition listeners, if any
                        detachOnPosition();
                        // reset instance options
                        s.playState = 0;
                        s.paused = false;
                        s.instanceCount = 0;
                        s.instanceOptions = {};
                        s._iO = {};
                        stop_html5_timer();
                        // reset position, too
                        if(s.isHTML5) {
                            s.position = 0;
                        }
                    }
                    if(!s.instanceCount || s._iO.multiShotEvents) {
                        // fire onfinish for last, or every instance
                        if(io_onfinish) {
                            sm2._wD(s.id + ': onfinish()');
                            wrapCallback(s, function() {
                                io_onfinish.apply(s);
                            });
                        }
                    }
                }
            };
            this._whileloading = function(nBytesLoaded, nBytesTotal, nDuration, nBufferLength) {
                var instanceOptions = s._iO;
                s.bytesLoaded = nBytesLoaded;
                s.bytesTotal = nBytesTotal;
                s.duration = Math.floor(nDuration);
                s.bufferLength = nBufferLength;
                if(!s.isHTML5 && !instanceOptions.isMovieStar) {
                    if(instanceOptions.duration) {
                        // use duration from options, if specified and larger. nobody should be specifying duration in options, actually, and it should be retired.
                        s.durationEstimate = (s.duration > instanceOptions.duration) ? s.duration : instanceOptions.duration;
                    } else {
                        s.durationEstimate = parseInt((s.bytesTotal / s.bytesLoaded) * s.duration, 10);
                    }
                } else {
                    s.durationEstimate = s.duration;
                }
                // for flash, reflect sequential-load-style buffering
                if(!s.isHTML5) {
                    s.buffered = [{
                        'start': 0,
                        'end': s.duration
                    }];
                }
                // allow whileloading to fire even if "load" fired under HTML5, due to HTTP range/partials
                if((s.readyState !== 3 || s.isHTML5) && instanceOptions.whileloading) {
                    instanceOptions.whileloading.apply(s);
                }
            };
            this._whileplaying = function(nPosition, oPeakData, oWaveformDataLeft, oWaveformDataRight, oEQData) {
                var instanceOptions = s._iO,
                    eqLeft;
                if(isNaN(nPosition) || nPosition === null) {
                    // flash safety net
                    return false;
                }
                // Safari HTML5 play() may return small -ve values when starting from position: 0, eg. -50.120396875. Unexpected/invalid per W3, I think. Normalize to 0.
                s.position = Math.max(0, nPosition);
                s._processOnPosition();
                if(!s.isHTML5 && fV > 8) {
                    if(instanceOptions.usePeakData && oPeakData !== _undefined && oPeakData) {
                        s.peakData = {
                            left: oPeakData.leftPeak,
                            right: oPeakData.rightPeak
                        };
                    }
                    if(instanceOptions.useWaveformData && oWaveformDataLeft !== _undefined && oWaveformDataLeft) {
                        s.waveformData = {
                            left: oWaveformDataLeft.split(','),
                            right: oWaveformDataRight.split(',')
                        };
                    }
                    if(instanceOptions.useEQData) {
                        if(oEQData !== _undefined && oEQData && oEQData.leftEQ) {
                            eqLeft = oEQData.leftEQ.split(',');
                            s.eqData = eqLeft;
                            s.eqData.left = eqLeft;
                            if(oEQData.rightEQ !== _undefined && oEQData.rightEQ) {
                                s.eqData.right = oEQData.rightEQ.split(',');
                            }
                        }
                    }
                }
                if(s.playState === 1) {
                    // special case/hack: ensure buffering is false if loading from cache (and not yet started)
                    if(!s.isHTML5 && fV === 8 && !s.position && s.isBuffering) {
                        s._onbufferchange(0);
                    }
                    if(instanceOptions.whileplaying) {
                        // flash may call after actual finish
                        instanceOptions.whileplaying.apply(s);
                    }
                }
                return true;
            };
            this._oncaptiondata = function(oData) {
                /**
                 * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
                 *
                 * @param {object} oData
                 */
                sm2._wD(s.id + ': Caption data received.');
                s.captiondata = oData;
                if(s._iO.oncaptiondata) {
                    s._iO.oncaptiondata.apply(s, [oData]);
                }
            };
            this._onmetadata = function(oMDProps, oMDData) {
                /**
                 * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
                 * RTMP may include song title, MovieStar content may include encoding info
                 *
                 * @param {array} oMDProps (names)
                 * @param {array} oMDData (values)
                 */
                sm2._wD(s.id + ': Metadata received.');
                var oData = {}, i, j;
                for(i = 0, j = oMDProps.length; i < j; i++) {
                    oData[oMDProps[i]] = oMDData[i];
                }
                s.metadata = oData;
                console.log('updated metadata', s.metadata);
                if(s._iO.onmetadata) {
                    s._iO.onmetadata.call(s, s.metadata);
                }
            };
            this._onid3 = function(oID3Props, oID3Data) {
                /**
                 * internal: flash 8 + flash 9 ID3 feature
                 * may include artist, song title etc.
                 *
                 * @param {array} oID3Props (names)
                 * @param {array} oID3Data (values)
                 */
                sm2._wD(s.id + ': ID3 data received.');
                var oData = [],
                    i, j;
                for(i = 0, j = oID3Props.length; i < j; i++) {
                    oData[oID3Props[i]] = oID3Data[i];
                }
                s.id3 = mixin(s.id3, oData);
                if(s._iO.onid3) {
                    s._iO.onid3.apply(s);
                }
            };
            // flash/RTMP-only
            this._onconnect = function(bSuccess) {
                bSuccess = (bSuccess === 1);
                sm2._wD(s.id + ': ' + (bSuccess ? 'Connected.' : 'Failed to connect? - ' + s.url), (bSuccess ? 1 : 2));
                s.connected = bSuccess;
                if(bSuccess) {
                    s.failures = 0;
                    if(idCheck(s.id)) {
                        if(s.getAutoPlay()) {
                            // only update the play state if auto playing
                            s.play(_undefined, s.getAutoPlay());
                        } else if(s._iO.autoLoad) {
                            s.load();
                        }
                    }
                    if(s._iO.onconnect) {
                        s._iO.onconnect.apply(s, [bSuccess]);
                    }
                }
            };
            this._ondataerror = function(sError) {
                // flash 9 wave/eq data handler
                // hack: called at start, and end from flash at/after onfinish()
                if(s.playState > 0) {
                    sm2._wD(s.id + ': Data error: ' + sError);
                    if(s._iO.ondataerror) {
                        s._iO.ondataerror.apply(s);
                    }
                }
            };
            // <d>
            this._debug();
            // </d>
        }; // SMSound()
        /**
         * Private SoundManager internals
         * ------------------------------
         */
        getDocument = function() {
            return(doc.body || doc.getElementsByTagName('div')[0]);
        };
        id = function(sID) {
            return doc.getElementById(sID);
        };
        mixin = function(oMain, oAdd) {
            // non-destructive merge
            var o1 = (oMain || {}),
                o2, o;
            // if unspecified, o2 is the default options object
            o2 = (oAdd === _undefined ? sm2.defaultOptions : oAdd);
            for(o in o2) {
                if(o2.hasOwnProperty(o) && o1[o] === _undefined) {
                    if(typeof o2[o] !== 'object' || o2[o] === null) {
                        // assign directly
                        o1[o] = o2[o];
                    } else {
                        // recurse through o2
                        o1[o] = mixin(o1[o], o2[o]);
                    }
                }
            }
            return o1;
        };
        wrapCallback = function(oSound, callback) {
            /**
             * 03/03/2013: Fix for Flash Player 11.6.602.171 + Flash 8 (flashVersion = 8) SWF issue
             * setTimeout() fix for certain SMSound callbacks like onload() and onfinish(), where subsequent calls like play() and load() fail when Flash Player 11.6.602.171 is installed, and using soundManager with flashVersion = 8 (which is the default).
             * Not sure of exact cause. Suspect race condition and/or invalid (NaN-style) position argument trickling down to the next JS -> Flash _start() call, in the play() case.
             * Fix: setTimeout() to yield, plus safer null / NaN checking on position argument provided to Flash.
             * https://getsatisfaction.com/schillmania/topics/recent_chrome_update_seems_to_have_broken_my_sm2_audio_player
             */
            if(!oSound.isHTML5 && fV === 8) {
                window.setTimeout(callback, 0);
            } else {
                callback();
            }
        };
        // additional soundManager properties that soundManager.setup() will accept
        extraOptions = {
            'onready': 1,
            'ontimeout': 1,
            'defaultOptions': 1,
            'flash9Options': 1,
            'movieStarOptions': 1
        };
        assign = function(o, oParent) {
            /**
             * recursive assignment of properties, soundManager.setup() helper
             * allows property assignment based on whitelist
             */
            var i,
                result = true,
                hasParent = (oParent !== _undefined),
                setupOptions = sm2.setupOptions,
                bonusOptions = extraOptions;
            // <d>
            // if soundManager.setup() called, show accepted parameters.
            if(o === _undefined) {
                result = [];
                for(i in setupOptions) {
                    if(setupOptions.hasOwnProperty(i)) {
                        result.push(i);
                    }
                }
                for(i in bonusOptions) {
                    if(bonusOptions.hasOwnProperty(i)) {
                        if(typeof sm2[i] === 'object') {
                            result.push(i + ': {...}');
                        } else if(sm2[i] instanceof Function) {
                            result.push(i + ': function() {...}');
                        } else {
                            result.push(i);
                        }
                    }
                }
                sm2._wD(str('setup', result.join(', ')));
                return false;
            }
            // </d>
            for(i in o) {
                if(o.hasOwnProperty(i)) {
                    // if not an {object} we want to recurse through...
                    if(typeof o[i] !== 'object' || o[i] === null || o[i] instanceof Array || o[i] instanceof RegExp) {
                        // check "allowed" options
                        if(hasParent && bonusOptions[oParent] !== _undefined) {
                            // valid recursive / nested object option, eg., { defaultOptions: { volume: 50 } }
                            sm2[oParent][i] = o[i];
                        } else if(setupOptions[i] !== _undefined) {
                            // special case: assign to setupOptions object, which soundManager property references
                            sm2.setupOptions[i] = o[i];
                            // assign directly to soundManager, too
                            sm2[i] = o[i];
                        } else if(bonusOptions[i] === _undefined) {
                            // invalid or disallowed parameter. complain.
                            complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);
                            result = false;
                        } else {
                            /**
                             * valid extraOptions (bonusOptions) parameter.
                             * is it a method, like onready/ontimeout? call it.
                             * multiple parameters should be in an array, eg. soundManager.setup({onready: [myHandler, myScope]});
                             */
                            if(sm2[i] instanceof Function) {
                                sm2[i].apply(sm2, (o[i] instanceof Array ? o[i] : [o[i]]));
                            } else {
                                // good old-fashioned direct assignment
                                sm2[i] = o[i];
                            }
                        }
                    } else {
                        // recursion case, eg., { defaultOptions: { ... } }
                        if(bonusOptions[i] === _undefined) {
                            // invalid or disallowed parameter. complain.
                            complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);
                            result = false;
                        } else {
                            // recurse through object
                            return assign(o[i], i);
                        }
                    }
                }
            }
            return result;
        };

        function preferFlashCheck(kind) {
            // whether flash should play a given type
            return(sm2.preferFlash && hasFlash && !sm2.ignoreFlash && (sm2.flash[kind] !== _undefined && sm2.flash[kind]));
        }
        /**
         * Internal DOM2-level event helpers
         * ---------------------------------
         */
        event = (function() {
            // normalize event methods
            var old = (window.attachEvent),
                evt = {
                    add: (old ? 'attachEvent' : 'addEventListener'),
                    remove: (old ? 'detachEvent' : 'removeEventListener')
                };
            // normalize "on" event prefix, optional capture argument

            function getArgs(oArgs) {
                var args = slice.call(oArgs),
                    len = args.length;
                if(old) {
                    // prefix
                    args[1] = 'on' + args[1];
                    if(len > 3) {
                        // no capture
                        args.pop();
                    }
                } else if(len === 3) {
                    args.push(false);
                }
                return args;
            }

            function apply(args, sType) {
                // normalize and call the event method, with the proper arguments
                var element = args.shift(),
                    method = [evt[sType]];
                if(old) {
                    // old IE can't do apply().
                    element[method](args[0], args[1]);
                } else {
                    element[method].apply(element, args);
                }
            }

            function add() {
                apply(getArgs(arguments), 'add');
            }

            function remove() {
                apply(getArgs(arguments), 'remove');
            }
            return {
                'add': add,
                'remove': remove
            };
        }());
        /**
         * Internal HTML5 event handling
         * -----------------------------
         */

        function html5_event(oFn) {
            // wrap html5 event handlers so we don't call them on destroyed and/or unloaded sounds
            return function(e) {
                var s = this._s,
                    result;
                if(!s || !s._a) {
                    // <d>
                    if(s && s.id) {
                        sm2._wD(s.id + ': Ignoring ' + e.type);
                    } else {
                        sm2._wD(h5 + 'Ignoring ' + e.type);
                    }
                    // </d>
                    result = null;
                } else {
                    result = oFn.call(this, e);
                }
                return result;
            };
        }
        html5_events = {
            // HTML5 event-name-to-handler map
            abort: html5_event(function() {
                sm2._wD(this._s.id + ': abort');
            }),
            // enough has loaded to play
            canplay: html5_event(function() {
                var s = this._s,
                    position1K;
                if(s._html5_canplay) {
                    // this event has already fired. ignore.
                    return true;
                }
                s._html5_canplay = true;
                sm2._wD(s.id + ': canplay');
                s._onbufferchange(0);
                // position according to instance options
                position1K = (s._iO.position !== _undefined && !isNaN(s._iO.position) ? s._iO.position / msecScale : null);
                // set the position if position was provided before the sound loaded
                if(this.currentTime !== position1K) {
                    sm2._wD(s.id + ': canplay: Setting position to ' + position1K);
                    try {
                        this.currentTime = position1K;
                    } catch(ee) {
                        sm2._wD(s.id + ': canplay: Setting position of ' + position1K + ' failed: ' + ee.message, 2);
                    }
                }
                // hack for HTML5 from/to case
                if(s._iO._oncanplay) {
                    s._iO._oncanplay();
                }
            }),
            canplaythrough: html5_event(function() {
                var s = this._s;
                if(!s.loaded) {
                    s._onbufferchange(0);
                    s._whileloading(s.bytesLoaded, s.bytesTotal, s._get_html5_duration());
                    s._onload(true);
                }
            }),
            durationchange: html5_event(function() {
                // durationchange may fire at various times, probably the safest way to capture accurate/final duration.
                var s = this._s,
                    duration;
                duration = s._get_html5_duration();
                if(!isNaN(duration) && duration !== s.duration) {
                    sm2._wD(this._s.id + ': durationchange (' + duration + ')' + (s.duration ? ', previously ' + s.duration : ''));
                    s.durationEstimate = s.duration = duration;
                }
            }),
            // TODO: Reserved for potential use
            /*
    emptied: html5_event(function() {

      sm2._wD(this._s.id + ': emptied');

    }),
    */
            ended: html5_event(function() {
                var s = this._s;
                sm2._wD(s.id + ': ended');
                s._onfinish();
            }),
            error: html5_event(function() {
                sm2._wD(this._s.id + ': HTML5 error, code ' + this.error.code);
                /**
                 * HTML5 error codes, per W3C
                 * Error 1: Client aborted download at user's request.
                 * Error 2: Network error after load started.
                 * Error 3: Decoding issue.
                 * Error 4: Media (audio file) not supported.
                 * Reference: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#error-codes
                 */
                // call load with error state?
                this._s._onload(false);
            }),
            loadeddata: html5_event(function() {
                var s = this._s;
                sm2._wD(s.id + ': loadeddata');
                // safari seems to nicely report progress events, eventually totalling 100%
                if(!s._loaded && !isSafari) {
                    s.duration = s._get_html5_duration();
                }
            }),
            loadedmetadata: html5_event(function() {
                sm2._wD(this._s.id + ': loadedmetadata');
            }),
            loadstart: html5_event(function() {
                sm2._wD(this._s.id + ': loadstart');
                // assume buffering at first
                this._s._onbufferchange(1);
            }),
            play: html5_event(function() {
                // sm2._wD(this._s.id + ': play()');
                // once play starts, no buffering
                this._s._onbufferchange(0);
            }),
            playing: html5_event(function() {
                sm2._wD(this._s.id + ': playing ' + String.fromCharCode(9835));
                // once play starts, no buffering
                this._s._onbufferchange(0);
            }),
            progress: html5_event(function(e) {
                // note: can fire repeatedly after "loaded" event, due to use of HTTP range/partials
                var s = this._s,
                    i, j, progStr, buffered = 0,
                    isProgress = (e.type === 'progress'),
                    ranges = e.target.buffered,
                    // firefox 3.6 implements e.loaded/total (bytes)
                    loaded = (e.loaded || 0),
                    total = (e.total || 1);
                // reset the "buffered" (loaded byte ranges) array
                s.buffered = [];
                if(ranges && ranges.length) {
                    // if loaded is 0, try TimeRanges implementation as % of load
                    // https://developer.mozilla.org/en/DOM/TimeRanges
                    // re-build "buffered" array
                    // HTML5 returns seconds. SM2 API uses msec for setPosition() etc., whether Flash or HTML5.
                    for(i = 0, j = ranges.length; i < j; i++) {
                        s.buffered.push({
                            'start': ranges.start(i) * msecScale,
                            'end': ranges.end(i) * msecScale
                        });
                    }
                    // use the last value locally
                    buffered = (ranges.end(0) - ranges.start(0)) * msecScale;
                    // linear case, buffer sum; does not account for seeking and HTTP partials / byte ranges
                    loaded = Math.min(1, buffered / (e.target.duration * msecScale));
                    // <d>
                    if(isProgress && ranges.length > 1) {
                        progStr = [];
                        j = ranges.length;
                        for(i = 0; i < j; i++) {
                            progStr.push(e.target.buffered.start(i) * msecScale + '-' + e.target.buffered.end(i) * msecScale);
                        }
                        sm2._wD(this._s.id + ': progress, timeRanges: ' + progStr.join(', '));
                    }
                    if(isProgress && !isNaN(loaded)) {
                        sm2._wD(this._s.id + ': progress, ' + Math.floor(loaded * 100) + '% loaded');
                    }
                    // </d>
                }
                if(!isNaN(loaded)) {
                    // TODO: prevent calls with duplicate values.
                    s._whileloading(loaded, total, s._get_html5_duration());
                    if(loaded && total && loaded === total) {
                        // in case "onload" doesn't fire (eg. gecko 1.9.2)
                        html5_events.canplaythrough.call(this, e);
                    }
                }
            }),
            ratechange: html5_event(function() {
                sm2._wD(this._s.id + ': ratechange');
            }),
            suspend: html5_event(function(e) {
                // download paused/stopped, may have finished (eg. onload)
                var s = this._s;
                sm2._wD(this._s.id + ': suspend');
                html5_events.progress.call(this, e);
                s._onsuspend();
            }),
            stalled: html5_event(function() {
                sm2._wD(this._s.id + ': stalled');
            }),
            timeupdate: html5_event(function() {
                this._s._onTimer();
            }),
            waiting: html5_event(function() {
                var s = this._s;
                // see also: seeking
                sm2._wD(this._s.id + ': waiting');
                // playback faster than download rate, etc.
                s._onbufferchange(1);
            })
        };
        html5OK = function(iO) {
            // playability test based on URL or MIME type
            var result;
            if(!iO || (!iO.type && !iO.url && !iO.serverURL)) {
                // nothing to check
                result = false;
            } else if(iO.serverURL || (iO.type && preferFlashCheck(iO.type))) {
                // RTMP, or preferring flash
                result = false;
            } else {
                // Use type, if specified. Pass data: URIs to HTML5. If HTML5-only mode, no other options, so just give 'er
                result = ((iO.type ? html5CanPlay({
                    type: iO.type
                }) : html5CanPlay({
                    url: iO.url
                }) || sm2.html5Only || iO.url.match(/data\:/i)));
            }
            return result;
        };
        html5Unload = function(oAudio) {
            /**
             * Internal method: Unload media, and cancel any current/pending network requests.
             * Firefox can load an empty URL, which allegedly destroys the decoder and stops the download.
             * https://developer.mozilla.org/En/Using_audio_and_video_in_Firefox#Stopping_the_download_of_media
             * However, Firefox has been seen loading a relative URL from '' and thus requesting the hosting page on unload.
             * Other UA behaviour is unclear, so everyone else gets an about:blank-style URL.
             */
            var url;
            if(oAudio) {
                // Firefox and Chrome accept short WAVe data: URIs. Chome dislikes audio/wav, but accepts audio/wav for data: MIME.
                // Desktop Safari complains / fails on data: URI, so it gets about:blank.
                url = (isSafari ? emptyURL : (sm2.html5.canPlayType('audio/wav') ? emptyWAV : emptyURL));
                oAudio.src = url;
                // reset some state, too
                if(oAudio._called_unload !== undefined) {
                    oAudio._called_load = false;
                }
            }
            if(useGlobalHTML5Audio) {
                // ensure URL state is trashed, also
                lastGlobalHTML5URL = null;
            }
            return url;
        };
        html5CanPlay = function(o) {
            /**
             * Try to find MIME, test and return truthiness
             * o = {
             *  url: '/path/to/an.mp3',
             *  type: 'audio/mp3'
             * }
             */
            if(!sm2.useHTML5Audio || !sm2.hasHTML5) {
                return false;
            }
            var url = (o.url || null),
                mime = (o.type || null),
                aF = sm2.audioFormats,
                result,
                offset,
                fileExt,
                item;
            // account for known cases like audio/mp3
            if(mime && sm2.html5[mime] !== _undefined) {
                return(sm2.html5[mime] && !preferFlashCheck(mime));
            }
            if(!html5Ext) {
                html5Ext = [];
                for(item in aF) {
                    if(aF.hasOwnProperty(item)) {
                        html5Ext.push(item);
                        if(aF[item].related) {
                            html5Ext = html5Ext.concat(aF[item].related);
                        }
                    }
                }
                html5Ext = new RegExp('\\.(' + html5Ext.join('|') + ')(\\?.*)?$', 'i');
            }
            // TODO: Strip URL queries, etc.
            fileExt = (url ? url.toLowerCase().match(html5Ext) : null);
            if(!fileExt || !fileExt.length) {
                if(!mime) {
                    result = false;
                } else {
                    // audio/mp3 -> mp3, result should be known
                    offset = mime.indexOf(';');
                    // strip "audio/X; codecs..."
                    fileExt = (offset !== -1 ? mime.substr(0, offset) : mime).substr(6);
                }
            } else {
                // match the raw extension name - "mp3", for example
                fileExt = fileExt[1];
            }
            if(fileExt && sm2.html5[fileExt] !== _undefined) {
                // result known
                result = (sm2.html5[fileExt] && !preferFlashCheck(fileExt));
            } else {
                mime = 'audio/' + fileExt;
                result = sm2.html5.canPlayType({
                    type: mime
                });
                sm2.html5[fileExt] = result;
                // sm2._wD('canPlayType, found result: ' + result);
                result = (result && sm2.html5[mime] && !preferFlashCheck(mime));
            }
            return result;
        };
        testHTML5 = function() {
            /**
             * Internal: Iterates over audioFormats, determining support eg. audio/mp3, audio/mpeg and so on
             * assigns results to html5[] and flash[].
             */
            if(!sm2.useHTML5Audio || !sm2.hasHTML5) {
                // without HTML5, we need Flash.
                sm2.html5.usingFlash = true;
                needsFlash = true;
                return false;
            }
            // double-whammy: Opera 9.64 throws WRONG_ARGUMENTS_ERR if no parameter passed to Audio(), and Webkit + iOS happily tries to load "null" as a URL. :/
            var a = (Audio !== _undefined ? (isOpera && opera.version() < 10 ? new Audio(null) : new Audio()) : null),
                item, lookup, support = {}, aF, i;

            function cp(m) {
                var canPlay, j,
                    result = false,
                    isOK = false;
                if(!a || typeof a.canPlayType !== 'function') {
                    return result;
                }
                if(m instanceof Array) {
                    // iterate through all mime types, return any successes
                    for(i = 0, j = m.length; i < j; i++) {
                        if(sm2.html5[m[i]] || a.canPlayType(m[i]).match(sm2.html5Test)) {
                            isOK = true;
                            sm2.html5[m[i]] = true;
                            // note flash support, too
                            sm2.flash[m[i]] = !! (m[i].match(flashMIME));
                        }
                    }
                    result = isOK;
                } else {
                    canPlay = (a && typeof a.canPlayType === 'function' ? a.canPlayType(m) : false);
                    result = !! (canPlay && (canPlay.match(sm2.html5Test)));
                }
                return result;
            }
            // test all registered formats + codecs
            aF = sm2.audioFormats;
            for(item in aF) {
                if(aF.hasOwnProperty(item)) {
                    lookup = 'audio/' + item;
                    support[item] = cp(aF[item].type);
                    // write back generic type too, eg. audio/mp3
                    support[lookup] = support[item];
                    // assign flash
                    if(item.match(flashMIME)) {
                        sm2.flash[item] = true;
                        sm2.flash[lookup] = true;
                    } else {
                        sm2.flash[item] = false;
                        sm2.flash[lookup] = false;
                    }
                    // assign result to related formats, too
                    if(aF[item] && aF[item].related) {
                        for(i = aF[item].related.length - 1; i >= 0; i--) {
                            // eg. audio/m4a
                            support['audio/' + aF[item].related[i]] = support[item];
                            sm2.html5[aF[item].related[i]] = support[item];
                            sm2.flash[aF[item].related[i]] = support[item];
                        }
                    }
                }
            }
            support.canPlayType = (a ? cp : null);
            sm2.html5 = mixin(sm2.html5, support);
            sm2.html5.usingFlash = featureCheck();
            needsFlash = sm2.html5.usingFlash;
            return true;
        };
        strings = {
            // <d>
            notReady: 'Unavailable - wait until onready() has fired.',
            notOK: 'Audio support is not available.',
            domError: sm + 'exception caught while appending SWF to DOM.',
            spcWmode: 'Removing wmode, preventing known SWF loading issue(s)',
            swf404: smc + 'Verify that %s is a valid path.',
            tryDebug: 'Try ' + sm + '.debugFlash = true for more security details (output goes to SWF.)',
            checkSWF: 'See SWF output for more debug info.',
            localFail: smc + 'Non-HTTP page (' + doc.location.protocol + ' URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/',
            waitFocus: smc + 'Special case: Waiting for SWF to load with window focus...',
            waitForever: smc + 'Waiting indefinitely for Flash (will recover if unblocked)...',
            waitSWF: smc + 'Waiting for 100% SWF load...',
            needFunction: smc + 'Function object expected for %s',
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: smc + '_debug(): Current sound objects',
            waitOnload: smc + 'Waiting for window.onload()',
            docLoaded: smc + 'Document already loaded',
            onload: smc + 'initComplete(): calling soundManager.onload()',
            onloadOK: sm + '.onload() complete',
            didInit: smc + 'init(): Already called?',
            secNote: 'Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html',
            badRemove: smc + 'Failed to remove Flash node.',
            shutdown: sm + '.disable(): Shutting down',
            queue: smc + 'Queueing %s handler',
            smError: 'SMSound.load(): Exception: JS-Flash communication failed, or JS error.',
            fbTimeout: 'No flash response, applying .' + swfCSS.swfTimedout + ' CSS...',
            fbLoaded: 'Flash loaded',
            fbHandler: smc + 'flashBlockHandler()',
            manURL: 'SMSound.load(): Using manually-assigned URL',
            onURL: sm + '.load(): current URL already assigned.',
            badFV: sm + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: 'Note: Setting stream:false so looping can work (flash 8 limitation)',
            noNSLoop: 'Note: Looping not implemented for MovieStar formats',
            needfl9: 'Note: Switching to flash 9, required for MP4 formats.',
            mfTimeout: 'Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case',
            needFlash: smc + 'Fatal error: Flash is needed to play some required formats, but is not available.',
            gotFocus: smc + 'Got window focus.',
            policy: 'Enabling usePolicyFile for data access',
            setup: sm + '.setup(): allowed parameters: %s',
            setupError: sm + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: sm + '.setup(): Could not find option "%s"',
            setupLate: sm + '.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().',
            noURL: smc + 'Flash URL required. Call soundManager.setup({url:...}) to get started.',
            sm2Loaded: 'SoundManager 2: Ready. ' + String.fromCharCode(10003),
            reset: sm + '.reset(): Removing event callbacks',
            mobileUA: 'Mobile UA detected, preferring HTML5 by default.',
            globalHTML5: 'Using singleton HTML5 Audio() pattern for this device.'
            // </d>
        };
        str = function() {
            // internal string replace helper.
            // arguments: o [,items to replace]
            // <d>
            var args,
                i, j, o,
                sstr;
            // real array, please
            args = slice.call(arguments);
            // first argument
            o = args.shift();
            sstr = (strings && strings[o] ? strings[o] : '');
            if(sstr && args && args.length) {
                for(i = 0, j = args.length; i < j; i++) {
                    sstr = sstr.replace('%s', args[i]);
                }
            }
            return sstr;
            // </d>
        };
        loopFix = function(sOpt) {
            // flash 8 requires stream = false for looping to work
            if(fV === 8 && sOpt.loops > 1 && sOpt.stream) {
                _wDS('as2loop');
                sOpt.stream = false;
            }
            return sOpt;
        };
        policyFix = function(sOpt, sPre) {
            if(sOpt && !sOpt.usePolicyFile && (sOpt.onid3 || sOpt.usePeakData || sOpt.useWaveformData || sOpt.useEQData)) {
                sm2._wD((sPre || '') + str('policy'));
                sOpt.usePolicyFile = true;
            }
            return sOpt;
        };
        complain = function(sMsg) {
            // <d>
            if(hasConsole && console.warn !== _undefined) {
                console.warn(sMsg);
            } else {
                sm2._wD(sMsg);
            }
            // </d>
        };
        doNothing = function() {
            return false;
        };
        disableObject = function(o) {
            var oProp;
            for(oProp in o) {
                if(o.hasOwnProperty(oProp) && typeof o[oProp] === 'function') {
                    o[oProp] = doNothing;
                }
            }
            oProp = null;
        };
        failSafely = function(bNoDisable) {
            // general failure exception handler
            if(bNoDisable === _undefined) {
                bNoDisable = false;
            }
            if(disabled || bNoDisable) {
                sm2.disable(bNoDisable);
            }
        };
        normalizeMovieURL = function(smURL) {
            var urlParams = null,
                url;
            if(smURL) {
                if(smURL.match(/\.swf(\?.*)?$/i)) {
                    urlParams = smURL.substr(smURL.toLowerCase().lastIndexOf('.swf?') + 4);
                    if(urlParams) {
                        // assume user knows what they're doing
                        return smURL;
                    }
                } else if(smURL.lastIndexOf('/') !== smURL.length - 1) {
                    // append trailing slash, if needed
                    smURL += '/';
                }
            }
            url = (smURL && smURL.lastIndexOf('/') !== -1 ? smURL.substr(0, smURL.lastIndexOf('/') + 1) : './') + sm2.movieURL;
            if(sm2.noSWFCache) {
                url += ('?ts=' + new Date().getTime());
            }
            return url;
        };
        setVersionInfo = function() {
            // short-hand for internal use
            fV = parseInt(sm2.flashVersion, 10);
            if(fV !== 8 && fV !== 9) {
                sm2._wD(str('badFV', fV, defaultFlashVersion));
                sm2.flashVersion = fV = defaultFlashVersion;
            }
            // debug flash movie, if applicable
            var isDebug = (sm2.debugMode || sm2.debugFlash ? '_debug.swf' : '.swf');
            if(sm2.useHTML5Audio && !sm2.html5Only && sm2.audioFormats.mp4.required && fV < 9) {
                sm2._wD(str('needfl9'));
                sm2.flashVersion = fV = 9;
            }
            sm2.version = sm2.versionNumber + (sm2.html5Only ? ' (HTML5-only mode)' : (fV === 9 ? ' (AS3/Flash 9)' : ' (AS2/Flash 8)'));
            // set up default options
            if(fV > 8) {
                // +flash 9 base options
                sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.flash9Options);
                sm2.features.buffering = true;
                // +moviestar support
                sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.movieStarOptions);
                sm2.filePatterns.flash9 = new RegExp('\\.(mp3|' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');
                sm2.features.movieStar = true;
            } else {
                sm2.features.movieStar = false;
            }
            // regExp for flash canPlay(), etc.
            sm2.filePattern = sm2.filePatterns[(fV !== 8 ? 'flash9' : 'flash8')];
            // if applicable, use _debug versions of SWFs
            sm2.movieURL = (fV === 8 ? 'soundmanager2.swf' : 'soundmanager2_flash9.swf').replace('.swf', isDebug);
            sm2.features.peakData = sm2.features.waveformData = sm2.features.eqData = (fV > 8);
        };
        setPolling = function(bPolling, bHighPerformance) {
            if(!flash) {
                return false;
            }
            flash._setPolling(bPolling, bHighPerformance);
        };
        initDebug = function() {
            // starts debug mode, creating output <div> for UAs without console object
            // allow force of debug mode via URL
            // <d>
            if(sm2.debugURLParam.test(wl)) {
                sm2.debugMode = true;
            }
            if(id(sm2.debugID)) {
                return false;
            }
            var oD, oDebug, oTarget, oToggle, tmp;
            if(sm2.debugMode && !id(sm2.debugID) && (!hasConsole || !sm2.useConsole || !sm2.consoleOnly)) {
                oD = doc.createElement('div');
                oD.id = sm2.debugID + '-toggle';
                oToggle = {
                    'position': 'fixed',
                    'bottom': '0px',
                    'right': '0px',
                    'width': '1.2em',
                    'height': '1.2em',
                    'lineHeight': '1.2em',
                    'margin': '2px',
                    'textAlign': 'center',
                    'border': '1px solid #999',
                    'cursor': 'pointer',
                    'background': '#fff',
                    'color': '#333',
                    'zIndex': 10001
                };
                oD.appendChild(doc.createTextNode('-'));
                oD.onclick = toggleDebug;
                oD.title = 'Toggle SM2 debug console';
                if(ua.match(/msie 6/i)) {
                    oD.style.position = 'absolute';
                    oD.style.cursor = 'hand';
                }
                for(tmp in oToggle) {
                    if(oToggle.hasOwnProperty(tmp)) {
                        oD.style[tmp] = oToggle[tmp];
                    }
                }
                oDebug = doc.createElement('div');
                oDebug.id = sm2.debugID;
                oDebug.style.display = (sm2.debugMode ? 'block' : 'none');
                if(sm2.debugMode && !id(oD.id)) {
                    try {
                        oTarget = getDocument();
                        oTarget.appendChild(oD);
                    } catch(e2) {
                        throw new Error(str('domError') + ' \n' + e2.toString());
                    }
                    oTarget.appendChild(oDebug);
                }
            }
            oTarget = null;
            // </d>
        };
        idCheck = this.getSoundById;
        // <d>
        _wDS = function(o, errorLevel) {
            return(!o ? '' : sm2._wD(str(o), errorLevel));
        };
        toggleDebug = function() {
            var o = id(sm2.debugID),
                oT = id(sm2.debugID + '-toggle');
            if(!o) {
                return false;
            }
            if(debugOpen) {
                // minimize
                oT.innerHTML = '+';
                o.style.display = 'none';
            } else {
                oT.innerHTML = '-';
                o.style.display = 'block';
            }
            debugOpen = !debugOpen;
        };
        debugTS = function(sEventType, bSuccess, sMessage) {
            // troubleshooter debug hooks
            if(window.sm2Debugger !== _undefined) {
                try {
                    sm2Debugger.handleEvent(sEventType, bSuccess, sMessage);
                } catch(e) {
                    // oh well
                    return false;
                }
            }
            return true;
        };
        // </d>
        getSWFCSS = function() {
            var css = [];
            if(sm2.debugMode) {
                css.push(swfCSS.sm2Debug);
            }
            if(sm2.debugFlash) {
                css.push(swfCSS.flashDebug);
            }
            if(sm2.useHighPerformance) {
                css.push(swfCSS.highPerf);
            }
            return css.join(' ');
        };
        flashBlockHandler = function() {
            // *possible* flash block situation.
            var name = str('fbHandler'),
                p = sm2.getMoviePercent(),
                css = swfCSS,
                error = {
                    type: 'FLASHBLOCK'
                };
            if(sm2.html5Only) {
                // no flash, or unused
                return false;
            }
            if(!sm2.ok()) {
                if(needsFlash) {
                    // make the movie more visible, so user can fix
                    sm2.oMC.className = getSWFCSS() + ' ' + css.swfDefault + ' ' + (p === null ? css.swfTimedout : css.swfError);
                    sm2._wD(name + ': ' + str('fbTimeout') + (p ? ' (' + str('fbLoaded') + ')' : ''));
                }
                sm2.didFlashBlock = true;
                // fire onready(), complain lightly
                processOnEvents({
                    type: 'ontimeout',
                    ignoreInit: true,
                    error: error
                });
                catchError(error);
            } else {
                // SM2 loaded OK (or recovered)
                // <d>
                if(sm2.didFlashBlock) {
                    sm2._wD(name + ': Unblocked');
                }
                // </d>
                if(sm2.oMC) {
                    sm2.oMC.className = [getSWFCSS(), css.swfDefault, css.swfLoaded + (sm2.didFlashBlock ? ' ' + css.swfUnblocked : '')].join(' ');
                }
            }
        };
        addOnEvent = function(sType, oMethod, oScope) {
            if(on_queue[sType] === _undefined) {
                on_queue[sType] = [];
            }
            on_queue[sType].push({
                'method': oMethod,
                'scope': (oScope || null),
                'fired': false
            });
        };
        processOnEvents = function(oOptions) {
            // if unspecified, assume OK/error
            if(!oOptions) {
                oOptions = {
                    type: (sm2.ok() ? 'onready' : 'ontimeout')
                };
            }
            if(!didInit && oOptions && !oOptions.ignoreInit) {
                // not ready yet.
                return false;
            }
            if(oOptions.type === 'ontimeout' && (sm2.ok() || (disabled && !oOptions.ignoreInit))) {
                // invalid case
                return false;
            }
            var status = {
                success: (oOptions && oOptions.ignoreInit ? sm2.ok() : !disabled)
            },
                // queue specified by type, or none
                srcQueue = (oOptions && oOptions.type ? on_queue[oOptions.type] || [] : []),
                queue = [],
                i, j,
                args = [status],
                canRetry = (needsFlash && !sm2.ok());
            if(oOptions.error) {
                args[0].error = oOptions.error;
            }
            for(i = 0, j = srcQueue.length; i < j; i++) {
                if(srcQueue[i].fired !== true) {
                    queue.push(srcQueue[i]);
                }
            }
            if(queue.length) {
                // sm2._wD(sm + ': Firing ' + queue.length + ' ' + oOptions.type + '() item' + (queue.length === 1 ? '' : 's'));
                for(i = 0, j = queue.length; i < j; i++) {
                    if(queue[i].scope) {
                        queue[i].method.apply(queue[i].scope, args);
                    } else {
                        queue[i].method.apply(this, args);
                    }
                    if(!canRetry) {
                        // useFlashBlock and SWF timeout case doesn't count here.
                        queue[i].fired = true;
                    }
                }
            }
            return true;
        };
        initUserOnload = function() {
            window.setTimeout(function() {
                if(sm2.useFlashBlock) {
                    flashBlockHandler();
                }
                processOnEvents();
                // call user-defined "onload", scoped to window
                if(typeof sm2.onload === 'function') {
                    _wDS('onload', 1);
                    sm2.onload.apply(window);
                    _wDS('onloadOK', 1);
                }
                if(sm2.waitForWindowLoad) {
                    event.add(window, 'load', initUserOnload);
                }
            }, 1);
        };
        detectFlash = function() {
            // hat tip: Flash Detect library (BSD, (C) 2007) by Carl "DocYes" S. Yestrau - http://featureblend.com/javascript-flash-detection-library.html / http://featureblend.com/license.txt
            if(hasFlash !== _undefined) {
                // this work has already been done.
                return hasFlash;
            }
            var hasPlugin = false,
                n = navigator,
                nP = n.plugins,
                obj, type, types, AX = window.ActiveXObject;
            if(nP && nP.length) {
                type = 'application/x-shockwave-flash';
                types = n.mimeTypes;
                if(types && types[type] && types[type].enabledPlugin && types[type].enabledPlugin.description) {
                    hasPlugin = true;
                }
            } else if(AX !== _undefined && !ua.match(/MSAppHost/i)) {
                // Windows 8 Store Apps (MSAppHost) are weird (compatibility?) and won't complain here, but will barf if Flash/ActiveX object is appended to the DOM.
                try {
                    obj = new AX('ShockwaveFlash.ShockwaveFlash');
                } catch(e) {
                    // oh well
                    obj = null;
                }
                hasPlugin = ( !! obj);
                // cleanup, because it is ActiveX after all
                obj = null;
            }
            hasFlash = hasPlugin;
            return hasPlugin;
        };
        featureCheck = function() {
            var flashNeeded,
                item,
                formats = sm2.audioFormats,
                // iPhone <= 3.1 has broken HTML5 audio(), but firmware 3.2 (original iPad) + iOS4 works.
                isSpecial = (is_iDevice && !! (ua.match(/os (1|2|3_0|3_1)\s/i)));
            if(isSpecial) {
                // has Audio(), but is broken; let it load links directly.
                sm2.hasHTML5 = false;
                // ignore flash case, however
                sm2.html5Only = true;
                // hide the SWF, if present
                if(sm2.oMC) {
                    sm2.oMC.style.display = 'none';
                }
            } else {
                if(sm2.useHTML5Audio) {
                    if(!sm2.html5 || !sm2.html5.canPlayType) {
                        sm2._wD('SoundManager: No HTML5 Audio() support detected.');
                        sm2.hasHTML5 = false;
                    }
                    // <d>
                    if(isBadSafari) {
                        sm2._wD(smc + 'Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - ' + (!hasFlash ? ' would use flash fallback for MP3/MP4, but none detected.' : 'will use flash fallback for MP3/MP4, if available'), 1);
                    }
                    // </d>
                }
            }
            if(sm2.useHTML5Audio && sm2.hasHTML5) {
                // sort out whether flash is optional, required or can be ignored.
                // innocent until proven guilty.
                canIgnoreFlash = true;
                for(item in formats) {
                    if(formats.hasOwnProperty(item)) {
                        if(formats[item].required) {
                            if(!sm2.html5.canPlayType(formats[item].type)) {
                                // 100% HTML5 mode is not possible.
                                canIgnoreFlash = false;
                                flashNeeded = true;
                            } else if(sm2.preferFlash && (sm2.flash[item] || sm2.flash[formats[item].type])) {
                                // flash may be required, or preferred for this format.
                                flashNeeded = true;
                            }
                        }
                    }
                }
            }
            // sanity check...
            if(sm2.ignoreFlash) {
                flashNeeded = false;
                canIgnoreFlash = true;
            }
            sm2.html5Only = (sm2.hasHTML5 && sm2.useHTML5Audio && !flashNeeded);
            return(!sm2.html5Only);
        };
        parseURL = function(url) {
            /**
             * Internal: Finds and returns the first playable URL (or failing that, the first URL.)
             * @param {string or array} url A single URL string, OR, an array of URL strings or {url:'/path/to/resource', type:'audio/mp3'} objects.
             */
            var i, j, urlResult = 0,
                result;
            if(url instanceof Array) {
                // find the first good one
                for(i = 0, j = url.length; i < j; i++) {
                    if(url[i] instanceof Object) {
                        // MIME check
                        if(sm2.canPlayMIME(url[i].type)) {
                            urlResult = i;
                            break;
                        }
                    } else if(sm2.canPlayURL(url[i])) {
                        // URL string check
                        urlResult = i;
                        break;
                    }
                }
                // normalize to string
                if(url[urlResult].url) {
                    url[urlResult] = url[urlResult].url;
                }
                result = url[urlResult];
            } else {
                // single URL case
                result = url;
            }
            return result;
        };
        startTimer = function(oSound) {
            /**
             * attach a timer to this sound, and start an interval if needed
             */
            if(!oSound._hasTimer) {
                oSound._hasTimer = true;
                if(!mobileHTML5 && sm2.html5PollingInterval) {
                    if(h5IntervalTimer === null && h5TimerCount === 0) {
                        h5IntervalTimer = setInterval(timerExecute, sm2.html5PollingInterval);
                    }
                    h5TimerCount++;
                }
            }
        };
        stopTimer = function(oSound) {
            /**
             * detach a timer
             */
            if(oSound._hasTimer) {
                oSound._hasTimer = false;
                if(!mobileHTML5 && sm2.html5PollingInterval) {
                    // interval will stop itself at next execution.
                    h5TimerCount--;
                }
            }
        };
        timerExecute = function() {
            /**
             * manual polling for HTML5 progress events, ie., whileplaying() (can achieve greater precision than conservative default HTML5 interval)
             */
            var i;
            if(h5IntervalTimer !== null && !h5TimerCount) {
                // no active timers, stop polling interval.
                clearInterval(h5IntervalTimer);
                h5IntervalTimer = null;
                return false;
            }
            // check all HTML5 sounds with timers
            for(i = sm2.soundIDs.length - 1; i >= 0; i--) {
                if(sm2.sounds[sm2.soundIDs[i]].isHTML5 && sm2.sounds[sm2.soundIDs[i]]._hasTimer) {
                    sm2.sounds[sm2.soundIDs[i]]._onTimer();
                }
            }
        };
        catchError = function(options) {
            options = (options !== _undefined ? options : {});
            if(typeof sm2.onerror === 'function') {
                sm2.onerror.apply(window, [{
                    type: (options.type !== _undefined ? options.type : null)
                }]);
            }
            if(options.fatal !== _undefined && options.fatal) {
                sm2.disable();
            }
        };
        badSafariFix = function() {
            // special case: "bad" Safari (OS X 10.3 - 10.7) must fall back to flash for MP3/MP4
            if(!isBadSafari || !detectFlash()) {
                // doesn't apply
                return false;
            }
            var aF = sm2.audioFormats,
                i, item;
            for(item in aF) {
                if(aF.hasOwnProperty(item)) {
                    if(item === 'mp3' || item === 'mp4') {
                        sm2._wD(sm + ': Using flash fallback for ' + item + ' format');
                        sm2.html5[item] = false;
                        // assign result to related formats, too
                        if(aF[item] && aF[item].related) {
                            for(i = aF[item].related.length - 1; i >= 0; i--) {
                                sm2.html5[aF[item].related[i]] = false;
                            }
                        }
                    }
                }
            }
        };
        /**
         * Pseudo-private flash/ExternalInterface methods
         * ----------------------------------------------
         */
        this._setSandboxType = function(sandboxType) {
            // <d>
            var sb = sm2.sandbox;
            sb.type = sandboxType;
            sb.description = sb.types[(sb.types[sandboxType] !== _undefined ? sandboxType : 'unknown')];
            if(sb.type === 'localWithFile') {
                sb.noRemote = true;
                sb.noLocal = false;
                _wDS('secNote', 2);
            } else if(sb.type === 'localWithNetwork') {
                sb.noRemote = false;
                sb.noLocal = true;
            } else if(sb.type === 'localTrusted') {
                sb.noRemote = false;
                sb.noLocal = false;
            }
            // </d>
        };
        this._externalInterfaceOK = function(swfVersion) {
            // flash callback confirming flash loaded, EI working etc.
            // swfVersion: SWF build string
            if(sm2.swfLoaded) {
                return false;
            }
            var e;
            debugTS('swf', true);
            debugTS('flashtojs', true);
            sm2.swfLoaded = true;
            tryInitOnFocus = false;
            if(isBadSafari) {
                badSafariFix();
            }
            // complain if JS + SWF build/version strings don't match, excluding +DEV builds
            // <d>
            if(!swfVersion || swfVersion.replace(/\+dev/i, '') !== sm2.versionNumber.replace(/\+dev/i, '')) {
                e = sm + ': Fatal: JavaScript file build "' + sm2.versionNumber + '" does not match Flash SWF build "' + swfVersion + '" at ' + sm2.url + '. Ensure both are up-to-date.';
                // escape flash -> JS stack so this error fires in window.
                setTimeout(function versionMismatch() {
                    throw new Error(e);
                }, 0);
                // exit, init will fail with timeout
                return false;
            }
            // </d>
            // IE needs a larger timeout
            setTimeout(init, isIE ? 100 : 1);
        };
        /**
         * Private initialization helpers
         * ------------------------------
         */
        createMovie = function(smID, smURL) {
            if(didAppend && appendSuccess) {
                // ignore if already succeeded
                return false;
            }

            function initMsg() {
                // <d>
                var options = [],
                    title,
                    msg = [],
                    delimiter = ' + ';
                title = 'SoundManager ' + sm2.version + (!sm2.html5Only && sm2.useHTML5Audio ? (sm2.hasHTML5 ? ' + HTML5 audio' : ', no HTML5 audio support') : '');
                if(!sm2.html5Only) {
                    if(sm2.preferFlash) {
                        options.push('preferFlash');
                    }
                    if(sm2.useHighPerformance) {
                        options.push('useHighPerformance');
                    }
                    if(sm2.flashPollingInterval) {
                        options.push('flashPollingInterval (' + sm2.flashPollingInterval + 'ms)');
                    }
                    if(sm2.html5PollingInterval) {
                        options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
                    }
                    if(sm2.wmode) {
                        options.push('wmode (' + sm2.wmode + ')');
                    }
                    if(sm2.debugFlash) {
                        options.push('debugFlash');
                    }
                    if(sm2.useFlashBlock) {
                        options.push('flashBlock');
                    }
                } else {
                    if(sm2.html5PollingInterval) {
                        options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
                    }
                }
                if(options.length) {
                    msg = msg.concat([options.join(delimiter)]);
                }
                sm2._wD(title + (msg.length ? delimiter + msg.join(', ') : ''), 1);
                showSupport();
                // </d>
            }
            if(sm2.html5Only) {
                // 100% HTML5 mode
                setVersionInfo();
                initMsg();
                sm2.oMC = id(sm2.movieID);
                init();
                // prevent multiple init attempts
                didAppend = true;
                appendSuccess = true;
                return false;
            }
            // flash path
            var remoteURL = (smURL || sm2.url),
                localURL = (sm2.altURL || remoteURL),
                swfTitle = 'JS/Flash audio component (SoundManager 2)',
                oTarget = getDocument(),
                extraClass = getSWFCSS(),
                isRTL = null,
                html = doc.getElementsByTagName('html')[0],
                oEmbed, oMovie, tmp, movieHTML, oEl, s, x, sClass;
            isRTL = (html && html.dir && html.dir.match(/rtl/i));
            smID = (smID === _undefined ? sm2.id : smID);

            function param(name, value) {
                return '<param name="' + name + '" value="' + value + '" />';
            }
            // safety check for legacy (change to Flash 9 URL)
            setVersionInfo();
            sm2.url = normalizeMovieURL(overHTTP ? remoteURL : localURL);
            smURL = sm2.url;
            sm2.wmode = (!sm2.wmode && sm2.useHighPerformance ? 'transparent' : sm2.wmode);
            if(sm2.wmode !== null && (ua.match(/msie 8/i) || (!isIE && !sm2.useHighPerformance)) && navigator.platform.match(/win32|win64/i)) {
                /**
                 * extra-special case: movie doesn't load until scrolled into view when using wmode = anything but 'window' here
                 * does not apply when using high performance (position:fixed means on-screen), OR infinite flash load timeout
                 * wmode breaks IE 8 on Vista + Win7 too in some cases, as of January 2011 (?)
                 */
                messages.push(strings.spcWmode);
                sm2.wmode = null;
            }
            oEmbed = {
                'name': smID,
                'id': smID,
                'src': smURL,
                'quality': 'high',
                'allowScriptAccess': sm2.allowScriptAccess,
                'bgcolor': sm2.bgColor,
                'pluginspage': http + 'www.macromedia.com/go/getflashplayer',
                'title': swfTitle,
                'type': 'application/x-shockwave-flash',
                'wmode': sm2.wmode,
                // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
                'hasPriority': 'true'
            };
            if(sm2.debugFlash) {
                oEmbed.FlashVars = 'debug=1';
            }
            if(!sm2.wmode) {
                // don't write empty attribute
                delete oEmbed.wmode;
            }
            if(isIE) {
                // IE is "special".
                oMovie = doc.createElement('div');
                movieHTML = ['<object id="' + smID + '" data="' + smURL + '" type="' + oEmbed.type + '" title="' + oEmbed.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + http + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
                    param('movie', smURL),
                    param('AllowScriptAccess', sm2.allowScriptAccess),
                    param('quality', oEmbed.quality), (sm2.wmode ? param('wmode', sm2.wmode) : ''),
                    param('bgcolor', sm2.bgColor),
                    param('hasPriority', 'true'), (sm2.debugFlash ? param('FlashVars', oEmbed.FlashVars) : ''), '</object>'
                ].join('');
            } else {
                oMovie = doc.createElement('embed');
                for(tmp in oEmbed) {
                    if(oEmbed.hasOwnProperty(tmp)) {
                        oMovie.setAttribute(tmp, oEmbed[tmp]);
                    }
                }
            }
            initDebug();
            extraClass = getSWFCSS();
            oTarget = getDocument();
            if(oTarget) {
                sm2.oMC = (id(sm2.movieID) || doc.createElement('div'));
                if(!sm2.oMC.id) {
                    sm2.oMC.id = sm2.movieID;
                    sm2.oMC.className = swfCSS.swfDefault + ' ' + extraClass;
                    s = null;
                    oEl = null;
                    if(!sm2.useFlashBlock) {
                        if(sm2.useHighPerformance) {
                            // on-screen at all times
                            s = {
                                'position': 'fixed',
                                'width': '8px',
                                'height': '8px',
                                // >= 6px for flash to run fast, >= 8px to start up under Firefox/win32 in some cases. odd? yes.
                                'bottom': '0px',
                                'left': '0px',
                                'overflow': 'hidden'
                            };
                        } else {
                            // hide off-screen, lower priority
                            s = {
                                'position': 'absolute',
                                'width': '6px',
                                'height': '6px',
                                'top': '-9999px',
                                'left': '-9999px'
                            };
                            if(isRTL) {
                                s.left = Math.abs(parseInt(s.left, 10)) + 'px';
                            }
                        }
                    }
                    if(isWebkit) {
                        // soundcloud-reported render/crash fix, safari 5
                        sm2.oMC.style.zIndex = 10000;
                    }
                    if(!sm2.debugFlash) {
                        for(x in s) {
                            if(s.hasOwnProperty(x)) {
                                sm2.oMC.style[x] = s[x];
                            }
                        }
                    }
                    try {
                        if(!isIE) {
                            sm2.oMC.appendChild(oMovie);
                        }
                        oTarget.appendChild(sm2.oMC);
                        if(isIE) {
                            oEl = sm2.oMC.appendChild(doc.createElement('div'));
                            oEl.className = swfCSS.swfBox;
                            oEl.innerHTML = movieHTML;
                        }
                        appendSuccess = true;
                    } catch(e) {
                        throw new Error(str('domError') + ' \n' + e.toString());
                    }
                } else {
                    // SM2 container is already in the document (eg. flashblock use case)
                    sClass = sm2.oMC.className;
                    sm2.oMC.className = (sClass ? sClass + ' ' : swfCSS.swfDefault) + (extraClass ? ' ' + extraClass : '');
                    sm2.oMC.appendChild(oMovie);
                    if(isIE) {
                        oEl = sm2.oMC.appendChild(doc.createElement('div'));
                        oEl.className = swfCSS.swfBox;
                        oEl.innerHTML = movieHTML;
                    }
                    appendSuccess = true;
                }
            }
            didAppend = true;
            initMsg();
            // sm2._wD(sm + ': Trying to load ' + smURL + (!overHTTP && sm2.altURL ? ' (alternate URL)' : ''), 1);
            return true;
        };
        initMovie = function() {
            if(sm2.html5Only) {
                createMovie();
                return false;
            }
            // attempt to get, or create, movie (may already exist)
            if(flash) {
                return false;
            }
            if(!sm2.url) {
                /**
                 * Something isn't right - we've reached init, but the soundManager url property has not been set.
                 * User has not called setup({url: ...}), or has not set soundManager.url (legacy use case) directly before init time.
                 * Notify and exit. If user calls setup() with a url: property, init will be restarted as in the deferred loading case.
                 */
                _wDS('noURL');
                return false;
            }
            // inline markup case
            flash = sm2.getMovie(sm2.id);
            if(!flash) {
                if(!oRemoved) {
                    // try to create
                    createMovie(sm2.id, sm2.url);
                } else {
                    // try to re-append removed movie after reboot()
                    if(!isIE) {
                        sm2.oMC.appendChild(oRemoved);
                    } else {
                        sm2.oMC.innerHTML = oRemovedHTML;
                    }
                    oRemoved = null;
                    didAppend = true;
                }
                flash = sm2.getMovie(sm2.id);
            }
            if(typeof sm2.oninitmovie === 'function') {
                setTimeout(sm2.oninitmovie, 1);
            }
            // <d>
            flushMessages();
            // </d>
            return true;
        };
        delayWaitForEI = function() {
            setTimeout(waitForEI, 1000);
        };
        rebootIntoHTML5 = function() {
            // special case: try for a reboot with preferFlash: false, if 100% HTML5 mode is possible and useFlashBlock is not enabled.
            window.setTimeout(function() {
                complain(smc + 'useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...');
                sm2.setup({
                    preferFlash: false
                }).reboot();
                // if for some reason you want to detect this case, use an ontimeout() callback and look for html5Only and didFlashBlock == true.
                sm2.didFlashBlock = true;
                sm2.beginDelayedInit();
            }, 1);
        };
        waitForEI = function() {
            var p,
                loadIncomplete = false;
            if(!sm2.url) {
                // No SWF url to load (noURL case) - exit for now. Will be retried when url is set.
                return false;
            }
            if(waitingForEI) {
                return false;
            }
            waitingForEI = true;
            event.remove(window, 'load', delayWaitForEI);
            if(hasFlash && tryInitOnFocus && !isFocused) {
                // Safari won't load flash in background tabs, only when focused.
                _wDS('waitFocus');
                return false;
            }
            if(!didInit) {
                p = sm2.getMoviePercent();
                if(p > 0 && p < 100) {
                    loadIncomplete = true;
                }
            }
            setTimeout(function() {
                p = sm2.getMoviePercent();
                if(loadIncomplete) {
                    // special case: if movie *partially* loaded, retry until it's 100% before assuming failure.
                    waitingForEI = false;
                    sm2._wD(str('waitSWF'));
                    window.setTimeout(delayWaitForEI, 1);
                    return false;
                }
                // <d>
                if(!didInit) {
                    sm2._wD(sm + ': No Flash response within expected time. Likely causes: ' + (p === 0 ? 'SWF load failed, ' : '') + 'Flash blocked or JS-Flash security error.' + (sm2.debugFlash ? ' ' + str('checkSWF') : ''), 2);
                    if(!overHTTP && p) {
                        _wDS('localFail', 2);
                        if(!sm2.debugFlash) {
                            _wDS('tryDebug', 2);
                        }
                    }
                    if(p === 0) {
                        // if 0 (not null), probably a 404.
                        sm2._wD(str('swf404', sm2.url), 1);
                    }
                    debugTS('flashtojs', false, ': Timed out' + overHTTP ? ' (Check flash security or flash blockers)' : ' (No plugin/missing SWF?)');
                }
                // </d>
                // give up / time-out, depending
                if(!didInit && okToDisable) {
                    if(p === null) {
                        // SWF failed to report load progress. Possibly blocked.
                        if(sm2.useFlashBlock || sm2.flashLoadTimeout === 0) {
                            if(sm2.useFlashBlock) {
                                flashBlockHandler();
                            }
                            _wDS('waitForever');
                        } else {
                            // no custom flash block handling, but SWF has timed out. Will recover if user unblocks / allows SWF load.
                            if(!sm2.useFlashBlock && canIgnoreFlash) {
                                rebootIntoHTML5();
                            } else {
                                _wDS('waitForever');
                                // fire any regular registered ontimeout() listeners.
                                processOnEvents({
                                    type: 'ontimeout',
                                    ignoreInit: true,
                                    error: {
                                        type: 'INIT_FLASHBLOCK'
                                    }
                                });
                            }
                        }
                    } else {
                        // SWF loaded? Shouldn't be a blocking issue, then.
                        if(sm2.flashLoadTimeout === 0) {
                            _wDS('waitForever');
                        } else {
                            if(!sm2.useFlashBlock && canIgnoreFlash) {
                                rebootIntoHTML5();
                            } else {
                                failSafely(true);
                            }
                        }
                    }
                }
            }, sm2.flashLoadTimeout);
        };
        handleFocus = function() {
            function cleanup() {
                event.remove(window, 'focus', handleFocus);
            }
            if(isFocused || !tryInitOnFocus) {
                // already focused, or not special Safari background tab case
                cleanup();
                return true;
            }
            okToDisable = true;
            isFocused = true;
            _wDS('gotFocus');
            // allow init to restart
            waitingForEI = false;
            // kick off ExternalInterface timeout, now that the SWF has started
            delayWaitForEI();
            cleanup();
            return true;
        };
        flushMessages = function() {
            // <d>
            // SM2 pre-init debug messages
            if(messages.length) {
                sm2._wD('SoundManager 2: ' + messages.join(' '), 1);
                messages = [];
            }
            // </d>
        };
        showSupport = function() {
            // <d>
            flushMessages();
            var item, tests = [];
            if(sm2.useHTML5Audio && sm2.hasHTML5) {
                for(item in sm2.audioFormats) {
                    if(sm2.audioFormats.hasOwnProperty(item)) {
                        tests.push(item + ' = ' + sm2.html5[item] + (!sm2.html5[item] && needsFlash && sm2.flash[item] ? ' (using flash)' : (sm2.preferFlash && sm2.flash[item] && needsFlash ? ' (preferring flash)' : (!sm2.html5[item] ? ' (' + (sm2.audioFormats[item].required ? 'required, ' : '') + 'and no flash support)' : ''))));
                    }
                }
                sm2._wD('SoundManager 2 HTML5 support: ' + tests.join(', '), 1);
            }
            // </d>
        };
        initComplete = function(bNoDisable) {
            if(didInit) {
                return false;
            }
            if(sm2.html5Only) {
                // all good.
                _wDS('sm2Loaded', 1);
                didInit = true;
                initUserOnload();
                debugTS('onload', true);
                return true;
            }
            var wasTimeout = (sm2.useFlashBlock && sm2.flashLoadTimeout && !sm2.getMoviePercent()),
                result = true,
                error;
            if(!wasTimeout) {
                didInit = true;
            }
            error = {
                type: (!hasFlash && needsFlash ? 'NO_FLASH' : 'INIT_TIMEOUT')
            };
            sm2._wD('SoundManager 2 ' + (disabled ? 'failed to load' : 'loaded') + ' (' + (disabled ? 'Flash security/load error' : 'OK') + ') ' + String.fromCharCode(disabled ? 10006 : 10003), disabled ? 2 : 1);
            if(disabled || bNoDisable) {
                if(sm2.useFlashBlock && sm2.oMC) {
                    sm2.oMC.className = getSWFCSS() + ' ' + (sm2.getMoviePercent() === null ? swfCSS.swfTimedout : swfCSS.swfError);
                }
                processOnEvents({
                    type: 'ontimeout',
                    error: error,
                    ignoreInit: true
                });
                debugTS('onload', false);
                catchError(error);
                result = false;
            } else {
                debugTS('onload', true);
            }
            if(!disabled) {
                if(sm2.waitForWindowLoad && !windowLoaded) {
                    _wDS('waitOnload');
                    event.add(window, 'load', initUserOnload);
                } else {
                    // <d>
                    if(sm2.waitForWindowLoad && windowLoaded) {
                        _wDS('docLoaded');
                    }
                    // </d>
                    initUserOnload();
                }
            }
            return result;
        };
        /**
         * apply top-level setupOptions object as local properties, eg., this.setupOptions.flashVersion -> this.flashVersion (soundManager.flashVersion)
         * this maintains backward compatibility, and allows properties to be defined separately for use by soundManager.setup().
         */
        setProperties = function() {
            var i,
                o = sm2.setupOptions;
            for(i in o) {
                if(o.hasOwnProperty(i)) {
                    // assign local property if not already defined
                    if(sm2[i] === _undefined) {
                        sm2[i] = o[i];
                    } else if(sm2[i] !== o[i]) {
                        // legacy support: write manually-assigned property (eg., soundManager.url) back to setupOptions to keep things in sync
                        sm2.setupOptions[i] = sm2[i];
                    }
                }
            }
        };
        init = function() {
            // called after onload()
            if(didInit) {
                _wDS('didInit');
                return false;
            }

            function cleanup() {
                event.remove(window, 'load', sm2.beginDelayedInit);
            }
            if(sm2.html5Only) {
                if(!didInit) {
                    // we don't need no steenking flash!
                    cleanup();
                    sm2.enabled = true;
                    initComplete();
                }
                return true;
            }
            // flash path
            initMovie();
            try {
                // attempt to talk to Flash
                flash._externalInterfaceTest(false);
                // apply user-specified polling interval, OR, if "high performance" set, faster vs. default polling
                // (determines frequency of whileloading/whileplaying callbacks, effectively driving UI framerates)
                setPolling(true, (sm2.flashPollingInterval || (sm2.useHighPerformance ? 10 : 50)));
                if(!sm2.debugMode) {
                    // stop the SWF from making debug output calls to JS
                    flash._disableDebug();
                }
                sm2.enabled = true;
                debugTS('jstoflash', true);
                if(!sm2.html5Only) {
                    // prevent browser from showing cached page state (or rather, restoring "suspended" page state) via back button, because flash may be dead
                    // http://www.webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/
                    event.add(window, 'unload', doNothing);
                }
            } catch(e) {
                sm2._wD('js/flash exception: ' + e.toString());
                debugTS('jstoflash', false);
                catchError({
                    type: 'JS_TO_FLASH_EXCEPTION',
                    fatal: true
                });
                // don't disable, for reboot()
                failSafely(true);
                initComplete();
                return false;
            }
            initComplete();
            // disconnect events
            cleanup();
            return true;
        };
        domContentLoaded = function() {
            if(didDCLoaded) {
                return false;
            }
            didDCLoaded = true;
            // assign top-level soundManager properties eg. soundManager.url
            setProperties();
            initDebug();
            /**
             * Temporary feature: allow force of HTML5 via URL params: sm2-usehtml5audio=0 or 1
             * Ditto for sm2-preferFlash, too.
             */
            // <d>
            (function() {
                var a = 'sm2-usehtml5audio=',
                    a2 = 'sm2-preferflash=',
                    b = null,
                    b2 = null,
                    l = wl.toLowerCase();
                if(l.indexOf(a) !== -1) {
                    b = (l.charAt(l.indexOf(a) + a.length) === '1');
                    if(hasConsole) {
                        console.log((b ? 'Enabling ' : 'Disabling ') + 'useHTML5Audio via URL parameter');
                    }
                    sm2.setup({
                        'useHTML5Audio': b
                    });
                }
                if(l.indexOf(a2) !== -1) {
                    b2 = (l.charAt(l.indexOf(a2) + a2.length) === '1');
                    if(hasConsole) {
                        console.log((b2 ? 'Enabling ' : 'Disabling ') + 'preferFlash via URL parameter');
                    }
                    sm2.setup({
                        'preferFlash': b2
                    });
                }
            }());
            // </d>
            if(!hasFlash && sm2.hasHTML5) {
                sm2._wD('SoundManager 2: No Flash detected' + (!sm2.useHTML5Audio ? ', enabling HTML5.' : '. Trying HTML5-only mode.'), 1);
                sm2.setup({
                    'useHTML5Audio': true,
                    // make sure we aren't preferring flash, either
                    // TODO: preferFlash should not matter if flash is not installed. Currently, stuff breaks without the below tweak.
                    'preferFlash': false
                });
            }
            testHTML5();
            if(!hasFlash && needsFlash) {
                messages.push(strings.needFlash);
                // TODO: Fatal here vs. timeout approach, etc.
                // hack: fail sooner.
                sm2.setup({
                    'flashLoadTimeout': 1
                });
            }
            if(doc.removeEventListener) {
                doc.removeEventListener('DOMContentLoaded', domContentLoaded, false);
            }
            initMovie();
            return true;
        };
        domContentLoadedIE = function() {
            if(doc.readyState === 'complete') {
                domContentLoaded();
                doc.detachEvent('onreadystatechange', domContentLoadedIE);
            }
            return true;
        };
        winOnLoad = function() {
            // catch edge case of initComplete() firing after window.load()
            windowLoaded = true;
            // catch case where DOMContentLoaded has been sent, but we're still in doc.readyState = 'interactive'
            domContentLoaded();
            event.remove(window, 'load', winOnLoad);
        };
        /**
         * miscellaneous run-time, pre-init stuff
         */
        preInit = function() {
            if(mobileHTML5) {
                // prefer HTML5 for mobile + tablet-like devices, probably more reliable vs. flash at this point.
                // <d>
                if(!sm2.setupOptions.useHTML5Audio || sm2.setupOptions.preferFlash) {
                    // notify that defaults are being changed.
                    messages.push(strings.mobileUA);
                }
                // </d>
                sm2.setupOptions.useHTML5Audio = true;
                sm2.setupOptions.preferFlash = false;
                if(is_iDevice || (isAndroid && !ua.match(/android\s2\.3/i))) {
                    // iOS and Android devices tend to work better with a single audio instance, specifically for chained playback of sounds in sequence.
                    // common use case: exiting sound onfinish() -> createSound() -> play()
                    // <d>
                    messages.push(strings.globalHTML5);
                    // </d>
                    if(is_iDevice) {
                        sm2.ignoreFlash = true;
                    }
                    useGlobalHTML5Audio = true;
                }
            }
        };
        preInit();
        // sniff up-front
        detectFlash();
        // focus and window load, init (primarily flash-driven)
        event.add(window, 'focus', handleFocus);
        event.add(window, 'load', delayWaitForEI);
        event.add(window, 'load', winOnLoad);
        if(doc.addEventListener) {
            doc.addEventListener('DOMContentLoaded', domContentLoaded, false);
        } else if(doc.attachEvent) {
            doc.attachEvent('onreadystatechange', domContentLoadedIE);
        } else {
            // no add/attachevent support - safe to assume no JS -> Flash either
            debugTS('onload', false);
            catchError({
                type: 'NO_DOM2_EVENTS',
                fatal: true
            });
        }
    } // SoundManager()
    // SM2_DEFER details: http://www.schillmania.com/projects/soundmanager2/doc/getstarted/#lazy-loading
    if(window.SM2_DEFER === undefined || !SM2_DEFER) {
        soundManager = new SoundManager();
    }
    /**
     * SoundManager public interfaces
     * ------------------------------
     */
    if(typeof module === 'object' && module && typeof module.exports === 'object') {
        /**
         * commonJS module
         * note: SM2 requires a window global due to Flash, which makes calls to window.soundManager.
         * flash may not always be needed, but this is not known until async init and SM2 may even "reboot" into Flash mode.
         */
        window.soundManager = soundManager;
        module.exports.SoundManager = SoundManager;
        module.exports.soundManager = soundManager;
    } else if(typeof define === 'function' && define.amd) {
        // AMD - requireJS
        define('SoundManager', [], function() {
            return {
                SoundManager: SoundManager,
                soundManager: soundManager
            };
        });
    } else {
        // standard browser case
        window.SoundManager = SoundManager; // constructor
        window.soundManager = soundManager; // public API, flash callbacks etc.
    }
}(window));

var ngSoundManager = angular.module('angularSoundManager', [])
  .config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(false);
  }]);


ngSoundManager.filter('humanTime', function () {
        return function (input) {
            function pad(d) {
                return (d < 10) ? '0' + d.toString() : d.toString();
            }

            var min = (input / 1000 / 60) << 0,
                sec = Math.round((input / 1000) % 60);

            return pad(min) + ':' + pad(sec);
        };
    });

ngSoundManager.factory('angularPlayer', ['$rootScope', '$log',
    function($rootScope, $log) {

        var currentTrack = null,
            repeat = false,
            autoPlay = true,
            isPlaying = false,
            volume = 90,
            trackProgress = 0,
            playlist = [];

        return {
            /**
             * Initialize soundmanager,
             * requires soundmanager2 to be loaded first
             */
            init: function() {
                if(typeof soundManager === 'undefined') {
                    alert('Please include SoundManager2 Library!');
                }
                soundManager.setup({
                    //url: '/path/to/swfs/',
                    //flashVersion: 9,
                    preferFlash: false, // prefer 100% HTML5 mode, where both supported
                    debugMode: false, // enable debugging output ($log.debug() with HTML fallback)
                    useHTML5Audio: true,
                    onready: function() {
                        //$log.debug('sound manager ready!');
                    },
                    ontimeout: function() {
                        alert('SM2 failed to start. Flash missing, blocked or security error?');
                        alert('The status is ' + status.success + ', the error type is ' + status.error.type);
                    },
                    defaultOptions: {
                        // set global default volume for all sound objects
                        autoLoad: false, // enable automatic loading (otherwise .load() will call with .play())
                        autoPlay: false, // enable playing of file ASAP (much faster if "stream" is true)
                        from: null, // position to start playback within a sound (msec), see demo
                        loops: 1, // number of times to play the sound. Related: looping (API demo)
                        multiShot: false, // let sounds "restart" or "chorus" when played multiple times..
                        multiShotEvents: false, // allow events (onfinish()) to fire for each shot, if supported.
                        onid3: null, // callback function for "ID3 data is added/available"
                        onload: null, // callback function for "load finished"
                        onstop: null, // callback for "user stop"
                        onfailure: 'nextTrack', // callback function for when playing fails
                        onpause: null, // callback for "pause"
                        onplay: null, // callback for "play" start
                        onresume: null, // callback for "resume" (pause toggle)
                        position: null, // offset (milliseconds) to seek to within downloaded sound.
                        pan: 0, // "pan" settings, left-to-right, -100 to 100
                        stream: true, // allows playing before entire file has loaded (recommended)
                        to: null, // position to end playback within a sound (msec), see demo
                        type: 'audio/mp3', // MIME-like hint for canPlay() tests, eg. 'audio/mp3'
                        usePolicyFile: false, // enable crossdomain.xml request for remote domains (for ID3/waveform access)
                        volume: volume, // self-explanatory. 0-100, the latter being the max.
                        whileloading: function() {
                            //soundManager._writeDebug('sound '+this.id+' loading, '+this.bytesLoaded+' of '+this.bytesTotal);
                            var trackLoaded = ((this.bytesLoaded/this.bytesTotal)*100);
                            $rootScope.$broadcast('track:loaded', trackLoaded);
                        },
                        whileplaying: function() {
                            //soundManager._writeDebug('sound '+this.id+' playing, '+this.position+' of '+this.duration);
                            //broadcast current playing track id
                            currentTrack = this.id;
                            //$rootScope.$broadcast('track:id', this.id);
                            //broadcast current playing track progress
                            trackProgress = ((this.position / this.duration) * 100);
                            $rootScope.$broadcast('track:progress', trackProgress);
                            //broadcast track position
                            $rootScope.$broadcast('currentTrack:position', this.position);
                            //broadcast track duration
                            $rootScope.$broadcast('currentTrack:duration', this.duration);
                        },
                        onfinish: function() {
                            soundManager._writeDebug(this.id + ' finished playing');
                            if(autoPlay === true) {
                                //play next track if autoplay is on
                                //get your angular app
                                var elem = angular.element(document.querySelector('[ng-app]'));
                                //get the injector.
                                var injector = elem.injector();
                                //get the service.
                                var angularPlayer = injector.get('angularPlayer');
                                angularPlayer.nextTrack();
                                $rootScope.$broadcast('track:id', currentTrack);
                            }
                        }
                    }
                });
                soundManager.onready(function() {
                    $log.debug('song manager ready!');
                    // Ready to use; soundManager.createSound() etc. can now be called.
                    var isSupported = soundManager.ok();
                    $log.debug('is supported: ' + isSupported);
                    $rootScope.$broadcast('angularPlayer:ready', true);
                });
            },
            /**
             * To check if value is in array
             */
            isInArray: function(array, value) {
                for(var i = 0; i < array.length; i++) {
                    if(array[i].id === value) {
                        return i;
                    }
                }
                return false;
            },
            /**
             * getIndexByValue used by this factory
             */
            getIndexByValue: function(array, value) {
                for(var i = 0; i < array.length; i++) {
                    if(array[i] === value) {
                        return i;
                    }
                }
                return false;
            },
            /**
             * asyncLoop used by this factory
             */
            asyncLoop: function(o) {
                var i = -1;
                var loop = function() {
                    i++;
                    if(i == o.length) {
                        o.callback();
                        return;
                    }
                    o.functionToLoop(loop, i);
                };
                loop(); //init
            },
            setCurrentTrack: function(key) {
                currentTrack = key;
            },
            getCurrentTrack: function() {
                return currentTrack;
            },
            currentTrackData: function() {
                var trackId = this.getCurrentTrack();
                var currentKey = this.isInArray(playlist, trackId);
                return playlist[currentKey];
            },
            getPlaylist: function(key) {
                if(typeof key === 'undefined') {
                    return playlist;
                } else {
                    return playlist[key];
                }
            },
            addToPlaylist: function(track) {
                playlist.push(track);
                //broadcast playlist
                $rootScope.$broadcast('player:playlist', playlist);
            },
            isTrackValid: function (track) {
                if (typeof track == 'undefined') {
                    $log.debug('invalid track data');
                    return false;
                }

                if (track.url.indexOf("soundcloud") > -1) {
                    //if soundcloud url
                    if(typeof track.url == 'undefined') {
                        $log.debug('invalid soundcloud track url');
                        return false;
                    }
                } else {
                    if(soundManager.canPlayURL(track.url) !== true) {
                        $log.debug('invalid song url');
                        return false;
                    }
                }
            },
            addTrack: function(track) {
                //check if track itself is valid and if its url is playable
                if (!this.isTrackValid) {
                    return null;
                }

                //check if song already does not exists then add to playlist
                var inArrayKey = this.isInArray(this.getPlaylist(), track.id);
                if(inArrayKey === false) {
                    //$log.debug('song does not exists in playlist');
                    //add to sound manager
                    soundManager.createSound({
                        id: track.id,
                        url: track.url
                    });
                    //add to playlist
                    this.addToPlaylist(track);
                }
                return track.id;
            },
            removeSong: function(song, index) {
                //if this song is playing stop it
                if(song === currentTrack) {
                    this.stop();
                }
                //unload from soundManager
                soundManager.destroySound(song);
                //remove from playlist
                playlist.splice(index, 1);
                //once all done then broadcast
                $rootScope.$broadcast('player:playlist', playlist);
                if(song === currentTrack)
                    $rootScope.$broadcast('player:removeCurrentPlaying');
            },
            initPlayTrack: function(trackId, isResume) {
                if(isResume !== true) {
                    //stop and unload currently playing track
                    this.stop();
                    //set new track as current track
                    this.setCurrentTrack(trackId);
                }
                //play it
                soundManager.play(trackId);
                $rootScope.$broadcast('track:id', trackId);
                //set as playing
                isPlaying = true;
                $rootScope.$broadcast('music:isPlaying', isPlaying);
            },
            play: function() {
                var trackToPlay = null;
                //check if no track loaded, else play loaded track
                if(this.getCurrentTrack() === null) {
                    if(soundManager.soundIDs.length === 0) {
                        $log.debug('playlist is empty!');
                        return;
                    }
                    trackToPlay = soundManager.soundIDs[0];
                    this.initPlayTrack(trackToPlay);
                } else {
                    trackToPlay = this.getCurrentTrack();
                    this.initPlayTrack(trackToPlay, true);
                }
            },
            pause: function() {
                soundManager.pause(this.getCurrentTrack());
                //set as not playing
                isPlaying = false;
                $rootScope.$broadcast('music:isPlaying', isPlaying);
            },
            stop: function() {
                //first pause it
                this.pause();
                this.resetProgress();
                $rootScope.$broadcast('track:progress', trackProgress);
                $rootScope.$broadcast('currentTrack:position', 0);
                $rootScope.$broadcast('currentTrack:duration', 0);
                soundManager.stopAll();
                soundManager.unload(this.getCurrentTrack());
            },
            playTrack: function(trackId) {
                this.initPlayTrack(trackId);
            },
            nextTrack: function() {
                if(this.getCurrentTrack() === null) {
                    $log.debug("Please click on Play before this action");
                    return null;
                }
                var currentTrackKey = this.getIndexByValue(soundManager.soundIDs, this.getCurrentTrack());
                var nextTrackKey = +currentTrackKey + 1;
                var nextTrack = soundManager.soundIDs[nextTrackKey];
                if(typeof nextTrack !== 'undefined') {
                    this.playTrack(nextTrack);
                } else {
                    //if no next track found
                    if(repeat === true) {
                        //start first track if repeat is on
                        this.playTrack(soundManager.soundIDs[0]);
                    } else {
                        //breadcase not playing anything
                        isPlaying = false;
                        $rootScope.$broadcast('music:isPlaying', isPlaying);
                    }
                }
            },
            prevTrack: function() {
                if(this.getCurrentTrack() === null) {
                    $log.debug("Please click on Play before this action");
                    return null;
                }
                var currentTrackKey = this.getIndexByValue(soundManager.soundIDs, this.getCurrentTrack());
                var prevTrackKey = +currentTrackKey - 1;
                var prevTrack = soundManager.soundIDs[prevTrackKey];
                if(typeof prevTrack !== 'undefined') {
                    this.playTrack(prevTrack);
                } else {
                    $log.debug('no prev track found!');
                }
            },
            mute: function() {
                if(soundManager.muted === true) {
                    soundManager.unmute();
                } else {
                    soundManager.mute();
                }
                $rootScope.$broadcast('music:mute', soundManager.muted);
            },
            getMuteStatus: function() {
                return soundManager.muted;
            },
            repeatToggle: function() {
                if(repeat === true) {
                    repeat = false;
                } else {
                    repeat = true;
                }
                $rootScope.$broadcast('music:repeat', repeat);
            },
            getRepeatStatus: function() {
                return repeat;
            },
            getVolume: function() {
                return volume;
            },
            adjustVolume: function(volume, increase) {
                var changeVolume = function(volume) {
                    for(var i = 0; i < soundManager.soundIDs.length; i++) {
                        var mySound = soundManager.getSoundById(soundManager.soundIDs[i]);
                        mySound.setVolume(volume);
                    }
                    $rootScope.$broadcast('music:volume', volume);
                };
                if(increase === true) {
                    if(volume < 100) {
                        volume = volume + 10;
                        changeVolume(volume);
                    }
                } else {
                    if(volume > 0) {
                        volume = volume - 10;
                        changeVolume(volume);
                    }
                }
            },
            adjustVolumeSlider: function(value) {
                var changeVolume = function(volume) {
                    for(var i = 0; i < soundManager.soundIDs.length; i++) {
                        var mySound = soundManager.getSoundById(soundManager.soundIDs[i]);
                        mySound.setVolume(volume);
                    }
                    $rootScope.$broadcast('music:volume', volume);
                };
                changeVolume(value);
            },
            clearPlaylist: function(callback) {
                $log.debug('clear playlist');
                this.resetProgress();
                //unload and destroy soundmanager sounds
                var smIdsLength = soundManager.soundIDs.length;
                this.asyncLoop({
                    length: smIdsLength,
                    functionToLoop: function(loop, i) {
                        setTimeout(function() {
                            //custom code
                            soundManager.destroySound(soundManager.soundIDs[0]);
                            //custom code
                            loop();
                        }, 100);
                    },
                    callback: function() {
                        //callback custom code
                        $log.debug('All done!');
                        //clear playlist
                        playlist = [];
                        $rootScope.$broadcast('player:playlist', playlist);
                        $rootScope.$broadcast('player:removeCurrentPlaying');
                        callback(true);
                        //callback custom code
                    }
                });
            },
            resetProgress: function() {
                trackProgress = 0;
            },
            isPlayingStatus: function() {
                return isPlaying;
            }
        };
    }
]);


ngSoundManager.directive('soundManager', ['$filter', 'angularPlayer',
    function($filter, angularPlayer) {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                //init and load sound manager 2
                angularPlayer.init();
                scope.$on('track:progress', function(event, data) {
                    scope.$apply(function() {
                        scope.progress = data;
                    });
                });
                scope.$on('track:id', function(event, data) {
                    scope.$apply(function() {
                        scope.currentPlaying = angularPlayer.currentTrackData();
                    });
                });
                scope.$on('currentTrack:position', function(event, data) {
                    scope.$apply(function() {
                        scope.currentPostion = $filter('humanTime')(data);
                    });
                });
                scope.$on('currentTrack:duration', function(event, data) {
                    scope.$apply(function() {
                        scope.currentDuration = $filter('humanTime')(data);
                    });
                });
                scope.isPlaying = false;
                scope.$on('music:isPlaying', function(event, data) {
                    scope.$apply(function() {
                        scope.isPlaying = data;
                    });
                });
                scope.playlist = angularPlayer.getPlaylist(); //on load
                scope.$on('player:playlist', function(event, data) {
                    scope.$apply(function() {
                        scope.playlist = data;
                    });
                });
                scope.$on('player:removeCurrentPlaying', function(event) {
                    scope.$apply(function() {
                        scope.currentPlaying = [];
                    });
                });
            }
        };
    }
]);

ngSoundManager.directive('musicPlayer', ['angularPlayer', '$log',
    function(angularPlayer, $log) {
        return {
            restrict: "EA",
            scope: {
                song: "=addSong"
            },
            link: function(scope, element, attrs) {
                var addToPlaylist = function() {
                    var trackId = angularPlayer.addTrack(scope.song);
                    //if request to play the track
                    if(attrs.musicPlayer === 'play') {
                        angularPlayer.playTrack(trackId);
                    }
                };
                element.bind('click', function() {
                    $log.debug('adding song to playlist');
                    addToPlaylist();
                });
            }
        };
    }
]);


ngSoundManager.directive('playFromPlaylist', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            scope: {
                song: "=playFromPlaylist"
            },
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.playTrack(scope.song.id);
                });
            }
        };
    }]);

ngSoundManager.directive('removeFromPlaylist', ['angularPlayer',
    function(angularPlayer) {
        return {
            restrict: "EA",
            scope: {
                song: "=removeFromPlaylist"
            },
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    angularPlayer.removeSong(scope.song.id, attrs.index);
                });
            }
        };
    }
]);

ngSoundManager.directive('seekTrack', ['angularPlayer', '$log', function (angularPlayer, $log) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    if (angularPlayer.getCurrentTrack() === null) {
                        $log.debug('no track loaded');
                        return;
                    }

                    var sound = soundManager.getSoundById(angularPlayer.getCurrentTrack());

                    var getXOffset = function (event) {
                      var x = 0, element = event.target;
                      while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
                        x += element.offsetLeft - element.scrollLeft;
                        element = element.offsetParent;
                      }
                      return event.clientX - x;
                    };

                    var x = event.offsetX || getXOffset(event),
                        width = element[0].clientWidth,
                        duration = sound.durationEstimate;

                    sound.setPosition((x / width) * duration);
                });

            }
        };
    }]);


ngSoundManager.directive('playMusic', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.play();
                });

            }
        };
    }]);

ngSoundManager.directive('pauseMusic', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.pause();
                });
            }
        };
    }]);

ngSoundManager.directive('stopMusic', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.stop();
                });
            }
        };
    }]);

ngSoundManager.directive('nextTrack', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.nextTrack();
                });

            }
        };
    }]);

ngSoundManager.directive('prevTrack', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.prevTrack();
                });

            }
        };
    }]);

ngSoundManager.directive('muteMusic', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.mute();
                });

                scope.mute = angularPlayer.getMuteStatus();
                scope.$on('music:mute', function (event, data) {
                    scope.$apply(function () {
                        scope.mute = data;
                    });
                });

            }
        };
    }]);

ngSoundManager.directive('repeatMusic', ['angularPlayer', function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.repeatToggle();
                });

                scope.repeat = angularPlayer.getRepeatStatus();
                scope.$on('music:repeat', function (event, data) {
                    scope.$apply(function () {
                        scope.repeat = data;
                    });
                });
            }
        };
    }]);

ngSoundManager.directive('musicVolume', ['angularPlayer',
    function(angularPlayer) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    if(attrs.type === 'increase') {
                        angularPlayer.adjustVolume(scope.volume, true);
                    } else {
                        angularPlayer.adjustVolume(scope.volume, false);
                    }
                });
                scope.volume = angularPlayer.getVolume();
                scope.$on('music:volume', function(event, data) {
                    scope.$apply(function() {
                        scope.volume = data;
                    });
                });
            }
        };
    }
]);

ngSoundManager.directive('volumeBar', ['angularPlayer',
    function(angularPlayer) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    var getXOffset = function(event) {
                        var x = 0,
                            element = event.target;
                        while(element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
                            x += element.offsetLeft - element.scrollLeft;
                            element = element.offsetParent;
                        }
                        return event.clientX - x;
                    };
                    var x = event.offsetX || getXOffset(event),
                        width = element[0].clientWidth,
                        duration = 100;
                    var volume = (x / width) * duration;
                    var volume = Math.round(volume / 10) * 10;
                    angularPlayer.adjustVolumeSlider(volume);
                });
                scope.volume = angularPlayer.getVolume();
                scope.$on('music:volume', function(event, data) {
                    scope.$apply(function() {
                        scope.volume = data;
                    });
                });
            }
        };
    }
]);

ngSoundManager.directive('clearPlaylist', ['angularPlayer', '$log',
    function(angularPlayer, $log) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    //first stop any playing music
                    angularPlayer.stop();
                    angularPlayer.setCurrentTrack(null);
                    angularPlayer.clearPlaylist(function(data) {
                      $log.debug('all clear!');
                    });
                });
            }
        };
    }
]);

ngSoundManager.directive('playAll', ['angularPlayer', '$log',
    function(angularPlayer, $log) {
        return {
            restrict: "EA",
            scope: {
                songs: '=playAll'
            },
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    //first clear the playlist
                    angularPlayer.clearPlaylist(function(data) {
                        $log.debug('cleared, ok now add to playlist');
                        //add songs to playlist
                        for(var i = 0; i < scope.songs.length; i++) {
                            angularPlayer.addTrack(scope.songs[i]);
                        }

                        if (attrs.play != 'false') {
                            //play first song
                            angularPlayer.play();
                        }
                    });
                });
            }
        };
    }
]);

ngSoundManager.directive('playPauseToggle', ['angularPlayer',
    function(angularPlayer) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs) {
                scope.$on('music:isPlaying', function(event, data) {
                    //update html
                    if (data) {
                        if(typeof attrs.pause != 'undefined') {
                            element.html(attrs.pause);
                        } else {
                            element.html('Pause');
                        }
                    } else {
                        if(typeof attrs.play != 'undefined') {
                            element.html(attrs.play);
                        } else {
                            element.html('Play');
                        }
                    }
                });

                element.bind('click', function(event) {
                    if(angularPlayer.isPlayingStatus()) {
                        //if playing then pause
                        angularPlayer.pause();
                    } else {
                        //else play if not playing
                        angularPlayer.play();

                    }
                });
            }
        };
    }
]);

;
// Utilities

function localStorageTest(){
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}

var slug = function(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
	var to   = "aaaaaeeeeeiiiiooooouuuunc------";
	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	.replace(/\s+/g, '-') // collapse whitespace and replace by -
	.replace(/-+/g, '-'); // collapse dashes

	return str;
};

//----------------------

var main = {
	listHeight: function(){

		function setSize(){
			var windowHeight = parseInt($(window).height()),
				sectionHeight = parseInt($('section').height() - 105),
				listHeight = (sectionHeight > windowHeight) ? sectionHeight : windowHeight;

			$('#list').css('height', listHeight - 105);
		}
		setTimeout(setSize,100);
	}
};

$(function(){
	main.listHeight();
});

$(window).resize(function(){
	main.listHeight();
});
;
var podcastApp = angular.module('podcastApp', ['ngSanitize', 'ngRoute', 'podcastControllers', 'angularSoundManager']);

var podcastControllers = angular.module('podcastControllers', []);

podcastApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/:slug/:id/:url', {
		templateUrl: 'partials/podcast.html',
		controller: 'podcastCtrl'
	}).
	when('/:slug', {
		templateUrl: 'partials/podcast.html',
		controller: 'homeCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);
;
podcastControllers.controller('feedsCtrl', ['$scope', '$timeout', '$location', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', function ($scope, $timeout, $location, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle){

	$scope.feed = getFeedService.get();
	$scope.inputRssFeed = {};

	$scope.checkFeed = function(){

		if(!$scope.inputRssFeed.url)
			return;

		rssService.getRssFeed($scope.inputRssFeed.url).then(function(res){
			$scope.checkedFeed = checkFeedService.check(res, $scope.inputRssFeed.url);

			$timeout(function() {
				savePlayFeed($scope.inputRssFeed.url);
			}, 500);
		});
	};

	var resetChecked = function(){
		$scope.checkedFeed = [];
		$scope.inputRssFeed.url = '';
	};

	var savePlayFeed = function(url){

		if(!$scope.checkedFeed)
			return;

		if($scope.feed.length === 0 && $scope.feed.q.url == url){
			resetChecked();
			$location.url('/');
			return;
		}

		getFeedService.set(url).then(function(data){
			podcastsPlaylist.set($scope.checkedFeed);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
			resetChecked();
			$location.url('/' +  $scope.feed.q.slug);

		});
	};

}]);
;
podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueShowService', 'pageTitle', function ($scope, getUniqueShowService, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShowService.getItem($scope.feed.q.item, 'latest');
			pageTitle.setPodcastTitle($scope.feed.q.title);
			pageTitle.setShowTitle('');
		}
	});
}]);

podcastControllers.controller('podcastCtrl', ['$scope', '$routeParams', 'getUniqueShowService', 'pageTitle', function ($scope, $routeParams, getUniqueShowService, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShowService.getItem($scope.feed.q.item, $routeParams.id);
			pageTitle.setShowTitle($scope.podcast.title  + ' - ');
		}
	});
}]);
;
podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', 'pageTitle', 'search', 'podcastsPlaylist', 'getFeedService', 'checkCurrentPodcastOnLoad', function ($scope, $location, $routeParams, pageTitle, search, podcastsPlaylist, getFeedService, checkCurrentPodcastOnLoad){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var getFeed = function(url){

		if(!url)
			return;

		getFeedService.set(url).then(function(){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);
		});
	};

	checkCurrentPodcastOnLoad.getMessages($scope.podcastsList).then(getFeed);

}]);
;
podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer){

	$scope.currentPodcastText = 'current';
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();
	$scope.podcastsList = podcastsPlaylist.get();

	$scope.playFeed = function(url){

		if(!url)
			return;

		if($scope.feed.q && $scope.feed.q.url == url)
			return;

		getFeedService.set(url).then(function(res){
			$location.url('/' +  $scope.feed.q.slug);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
		});
	};

	$scope.removeFeedFromList = function(url){

		podcastsPlaylist.removePodcast(url);

		if($scope.feed.q && $scope.feed.q.url == url){
			if(confirm('Are you sure you want to remove the podcast ?')){
				delete $scope.feed.q;
				pageTitle.setPodcastTitle($scope.pageTitleDefault);
				pageTitle.setShowTitle('');

				if($scope.currentPlaying){
					$timeout(function(){
						angularPlayer.stop();
					});

					$scope.currentPlaying = [];
				}
				$location.url('/');
			}
		}
	};
}]);
;
podcastControllers.controller('searchCtrl', ['$scope', '$anchorScroll', 'search', 'searchFeedService', function ($scope, $anchorScroll, search, searchFeedService){

	$scope.clearSearch = function(){
		$scope.keyword.str = '';
	};

	$scope.clearSearchToTop = function(){
		$scope.keyword.str = '';
		$anchorScroll();
	};

	$scope.keyword = search.str;

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			var searchFeed = angular.copy($scope.feed.q);
			$scope.searchFeed = searchFeedService.getSearchFeed(searchFeed);
		}
	});
}]);
;

podcastApp.filter('highlight', function($sce) {
	return function(text, phrase) {
		if(text && phrase && phrase.length > 2)
			text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');

		return $sce.trustAsHtml(text);
	};
});

// podcastApp.filter('linkRemover', function() {
// 	return function(text) {
// 		return String(text).replace(/<a[^>]*>(.*?)<\/a>/g, "$1");
// 	}
// });

// podcastApp.filter('carRemover', function() {
// 	return function(text) {
// 		return String(text).replace(/[&\\#,+()$~%.*?↵{}]/g, '');
// 	}
// });

;
podcastApp.factory('constants', [function(){
	return {
		imgDefault : function(){
			return 'img/icon320x320.png';
		}
	};
}]);

podcastApp.factory('rssService', ['$http', function($http){

	return {
		getRssFeed: function(url) {
			return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"' + url + '"&format=json');
		}
	};
}]);

podcastApp.service('search', function(){
	var _keyword = {};
	this.str = _keyword;
});
;
podcastApp.factory('checkCurrentPodcastOnLoad', ['$q', '$timeout', function($q, $timeout){

	var getMessages = function(podcastsList) {
		var deferred = $q.defer();

		var currentPodcastOnLoad;
		angular.forEach(podcastsList, function(item, i){
			if(item.current === true)
				currentPodcastOnLoad = item;
		});
		var currentPodcastUrl = (currentPodcastOnLoad) ? currentPodcastOnLoad.url : false;

		deferred.resolve(currentPodcastUrl);

		return deferred.promise;
	};

	return {
		getMessages: getMessages
	};
}]);
;
podcastApp.factory('checkFeedService', [function(){

	return {
		check: function(res, urlFeed) {

			if(res.status != 200)
				return;

			var channel = res.data.query.results.rss.channel;

			if(channel.item.length === 0)
				return;

			var channelSrc = 0;
			for (var i = 0; i < channel.item.length; i++) {
				if(channel.item[i].enclosure.url)
					channelSrc += 1;
			}
			if(channelSrc === 0)
				return;

			checkedFeed = {title: channel.title, author: channel.author, url: urlFeed};

			return checkedFeed;
		}
	};
}]);
;
podcastApp.factory('getFeedService', ['rssService', 'prepareFeedService', function(rssService, prepareFeedService){

	var feed = {};

	return {
		get: function(){
			return feed;
		},
		set: function(url){
			return rssService.getRssFeed(url).then(function(res){
				feed.q = res.data.query.results.rss.channel;
				return prepareFeedService.getFeed(res.data.query.results.rss.channel, url);
			});
		}
	};
}]);
;
podcastApp.factory('getUniqueShowService', [function(){

	return {
		getItem: function(data, id) {
			if(!data)
				return;

			for (var i = 0; i < data.length - 1; i++) {

				if(id == 'latest')
					return data[0];

				if(id == data[i].id)
					return data[i];
			}
		}
	};
}]);
;
podcastApp.factory('localStorageHandler', [function(){

	var podcastsList = [];

	return {
		getOnLoad: function(){

			if(!this.test() || !localStorage.feeds || localStorage.feeds === undefined || localStorage.feeds === 'undefined')
				return podcastsList;

			return JSON.parse(localStorage.feeds);
		},
		set: function(data){
			localStorage.setItem('feeds', angular.toJson(data));
		},
		test: function(){
			return localStorageTest();
		}
	};
}]);
;
podcastApp.factory('pageTitle', function(){
	var showTitle = '';
	var podcastTitle = '';
	return {
		showTitle: function() {
			return showTitle;
		},
		setShowTitle: function(newShowTitle) {
			showTitle = newShowTitle;
		},
		podcastTitle: function(){
			return podcastTitle;
		},
		setPodcastTitle: function(newPodcastTitle){
			podcastTitle = newPodcastTitle;
		}
	};
});
;
podcastApp.factory('podcastsPlaylist', ['localStorageHandler', function(localStorageHandler){

	var podcastsList = localStorageHandler.getOnLoad();

	return {
		get: function(){

			return podcastsList;
		},
		set: function(data){

			if(!localStorageHandler.test())
				return;

			var isPodcastIn = false;
			angular.forEach(podcastsList, function(item, i){
				if(item.url == data.url)
					isPodcastIn = true;
			});

			if(isPodcastIn)
				return;

			podcastsList.push(data);
			localStorageHandler.set(podcastsList);
		},
		setCurrent: function(feedUrl){
			angular.forEach(podcastsList, function(item, i){
				item.current = (item.url == feedUrl) ? true : false;
			});

			localStorageHandler.set(podcastsList);
		},
		removePodcast: function(url){

			angular.forEach(podcastsList, function(item, i){
				if(item.url == url)
					podcastsList.splice(i,1);
			});

			localStorageHandler.set(podcastsList);
		}
	};
}]);

;
podcastApp.factory('prepareFeedService', ['constants', function(constants){

	var imgDefault = constants.imgDefault();

	return {
		getFeed: function(feedData, url) {
			var feed = feedData;
				feed.url = url;
				feed.slug = slug(feed.title);

				if(feed.image.length >= 1){
					for (var i = 0; i < feed.image.length; i++)
						if(feed.image[i].href)
							feed.podcastImg = feed.image[i].href;

					if(!feed.podcastImg)
						feed.podcastImg = imgDefault;

				}else if(feed.image.href){
						feed.podcastImg = feed.image.href;
				}else{
					feed.podcastImg = imgDefault;
				}

				angular.forEach(feed.item, function(item, i){

					feed.item[i].artist = feed.title;
					feed.item[i].id = 'id-' + i;
					feed.item[i].date = Date.parse(feed.item[i].pubDate);

					feed.item[i].url = feed.item[i].enclosure.url;
					var podRouteTemp = feed.item[i].url.split('/'),
						podRoute = podRouteTemp.slice(-1)[0];
					feed.item[i].route = podRoute.split('.')[0];
					feed.item[i].idc = feed.item[i].route + '-' + new Date(feed.item[i].pubDate).getTime();
					if(feed.item[i].encoded)
						feed.item[i].description = feed.item[i].encoded;
				});

			return feed;
		}
	};
}]);
;
podcastApp.factory('searchFeedService', [function(){

	var fieldsToDeleteSearch = ['encoded', 'link', 'guid', 'enclosure', 'url', 'idc', 'thumbnail', 'explicit', 'pubDate', 'artist', 'author'];

	return {
		getSearchFeed: function(feedData) {

			var searchFeed = feedData;

			angular.forEach(searchFeed.item, function(item, i){

				if(item.description)
					searchFeed.item[i].description = item.description.replace(/<a[^>]*>(.*?)<\/a>/g, "$1");

				for (var j = 0; j < fieldsToDeleteSearch.length - 1; j++) {
					var itemToDelete = fieldsToDeleteSearch[j];
					if(searchFeed.item[i][itemToDelete])
						delete searchFeed.item[i][itemToDelete];
				}
			});

			return searchFeed;
		}
	};
}]);