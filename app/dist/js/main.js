/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));

/**
 * alertify
 * An unobtrusive customizable JavaScript notification system
 *
 * @author Fabien Doiron <fabien.doiron@gmail.com>
 * @copyright Fabien Doiron 2013
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link http://fabien-d.github.com/alertify.js/
 * @module alertify
 * @version 0.3.11
 */
(function (global, undefined) {
	"use strict";

	var document = global.document,
	    Alertify;

	Alertify = function () {

		var _alertify = {},
		    dialogs   = {},
		    isopen    = false,
		    keys      = { ENTER: 13, ESC: 27, SPACE: 32 },
		    queue     = [],
		    $, btnCancel, btnOK, btnReset, btnResetBack, btnFocus, elCallee, elCover, elDialog, elLog, form, input, getTransitionEvent;

		/**
		 * Markup pieces
		 * @type {Object}
		 */
		dialogs = {
			buttons : {
				holder : "<nav class=\"alertify-buttons\">{{buttons}}</nav>",
				submit : "<button type=\"submit\" class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				ok     : "<button class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				cancel : "<button class=\"alertify-button alertify-button-cancel\" id=\"alertify-cancel\">{{cancel}}</button>"
			},
			input   : "<div class=\"alertify-text-wrapper\"><input type=\"text\" class=\"alertify-text\" id=\"alertify-text\"></div>",
			message : "<p class=\"alertify-message\">{{message}}</p>",
			log     : "<article class=\"alertify-log{{class}}\">{{message}}</article>"
		};

		/**
		 * Return the proper transitionend event
		 * @return {String}    Transition type string
		 */
		getTransitionEvent = function () {
			var t,
			    type,
			    supported   = false,
			    el          = document.createElement("fakeelement"),
			    transitions = {
				    "WebkitTransition" : "webkitTransitionEnd",
				    "MozTransition"    : "transitionend",
				    "OTransition"      : "otransitionend",
				    "transition"       : "transitionend"
			    };

			for (t in transitions) {
				if (el.style[t] !== undefined) {
					type      = transitions[t];
					supported = true;
					break;
				}
			}

			return {
				type      : type,
				supported : supported
			};
		};

		/**
		 * Shorthand for document.getElementById()
		 *
		 * @param  {String} id    A specific element ID
		 * @return {Object}       HTML element
		 */
		$ = function (id) {
			return document.getElementById(id);
		};

		/**
		 * Alertify private object
		 * @type {Object}
		 */
		_alertify = {

			/**
			 * Labels object
			 * @type {Object}
			 */
			labels : {
				ok     : "OK",
				cancel : "Cancel"
			},

			/**
			 * Delay number
			 * @type {Number}
			 */
			delay : 5000,

			/**
			 * Whether buttons are reversed (default is secondary/primary)
			 * @type {Boolean}
			 */
			buttonReverse : false,

			/**
			 * Which button should be focused by default
			 * @type {String}	"ok" (default), "cancel", or "none"
			 */
			buttonFocus : "ok",

			/**
			 * Set the transition event on load
			 * @type {[type]}
			 */
			transition : undefined,

			/**
			 * Set the proper button click events
			 *
			 * @param {Function} fn    [Optional] Callback function
			 *
			 * @return {undefined}
			 */
			addListeners : function (fn) {
				var hasOK     = (typeof btnOK !== "undefined"),
				    hasCancel = (typeof btnCancel !== "undefined"),
				    hasInput  = (typeof input !== "undefined"),
				    val       = "",
				    self      = this,
				    ok, cancel, common, key, reset;

				// ok event handler
				ok = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof input !== "undefined") val = input.value;
					if (typeof fn === "function") {
						if (typeof input !== "undefined") {
							fn(true, val);
						}
						else fn(true);
					}
					return false;
				};

				// cancel event handler
				cancel = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof fn === "function") fn(false);
					return false;
				};

				// common event handler (keyup, ok and cancel)
				common = function (event) {
					self.hide();
					self.unbind(document.body, "keyup", key);
					self.unbind(btnReset, "focus", reset);
					if (hasOK) self.unbind(btnOK, "click", ok);
					if (hasCancel) self.unbind(btnCancel, "click", cancel);
				};

				// keyup handler
				key = function (event) {
					var keyCode = event.keyCode;
					if ((keyCode === keys.SPACE && !hasInput) || (hasInput && keyCode === keys.ENTER)) ok(event);
					if (keyCode === keys.ESC && hasCancel) cancel(event);
				};

				// reset focus to first item in the dialog
				reset = function (event) {
					if (hasInput) input.focus();
					else if (!hasCancel || self.buttonReverse) btnOK.focus();
					else btnCancel.focus();
				};

				// handle reset focus link
				// this ensures that the keyboard focus does not
				// ever leave the dialog box until an action has
				// been taken
				this.bind(btnReset, "focus", reset);
				this.bind(btnResetBack, "focus", reset);
				// handle OK click
				if (hasOK) this.bind(btnOK, "click", ok);
				// handle Cancel click
				if (hasCancel) this.bind(btnCancel, "click", cancel);
				// listen for keys, Cancel => ESC
				this.bind(document.body, "keyup", key);
				if (!this.transition.supported) {
					this.setFocus();
				}
			},

			/**
			 * Bind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to attach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			bind : function (el, event, fn) {
				if (typeof el.addEventListener === "function") {
					el.addEventListener(event, fn, false);
				} else if (el.attachEvent) {
					el.attachEvent("on" + event, fn);
				}
			},

			/**
			 * Use alertify as the global error handler (using window.onerror)
			 *
			 * @return {boolean} success
			 */
			handleErrors : function () {
				if (typeof global.onerror !== "undefined") {
					var self = this;
					global.onerror = function (msg, url, line) {
						self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
					};
					return true;
				} else {
					return false;
				}
			},

			/**
			 * Append button HTML strings
			 *
			 * @param {String} secondary    The secondary button HTML string
			 * @param {String} primary      The primary button HTML string
			 *
			 * @return {String}             The appended button HTML strings
			 */
			appendButtons : function (secondary, primary) {
				return this.buttonReverse ? primary + secondary : secondary + primary;
			},

			/**
			 * Build the proper message box
			 *
			 * @param  {Object} item    Current object in the queue
			 *
			 * @return {String}         An HTML string of the message box
			 */
			build : function (item) {
				var html    = "",
				    type    = item.type,
				    message = item.message,
				    css     = item.cssClass || "";

				html += "<div class=\"alertify-dialog\">";
				html += "<a id=\"alertify-resetFocusBack\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";

				if (_alertify.buttonFocus === "none") html += "<a href=\"#\" id=\"alertify-noneFocus\" class=\"alertify-hidden\"></a>";

				// doens't require an actual form
				if (type === "prompt") html += "<div id=\"alertify-form\">";

				html += "<article class=\"alertify-inner\">";
				html += dialogs.message.replace("{{message}}", message);

				if (type === "prompt") html += dialogs.input;

				html += dialogs.buttons.holder;
				html += "</article>";

				if (type === "prompt") html += "</div>";

				html += "<a id=\"alertify-resetFocus\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";
				html += "</div>";

				switch (type) {
				case "confirm":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "prompt":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "alert":
					html = html.replace("{{buttons}}", dialogs.buttons.ok);
					html = html.replace("{{ok}}", this.labels.ok);
					break;
				default:
					break;
				}

				elDialog.className = "alertify alertify-" + type + " " + css;
				elCover.className  = "alertify-cover";
				return html;
			},

			/**
			 * Close the log messages
			 *
			 * @param  {Object} elem    HTML Element of log message to close
			 * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
			 *
			 * @return {undefined}
			 */
			close : function (elem, wait) {
				// Unary Plus: +"2" === 2
				var timer = (wait && !isNaN(wait)) ? +wait : this.delay,
				    self  = this,
				    hideElement, transitionDone;

				// set click event on log messages
				this.bind(elem, "click", function () {
					hideElement(elem);
				});
				// Hide the dialog box after transition
				// This ensure it doens't block any element from being clicked
				transitionDone = function (event) {
					event.stopPropagation();
					// unbind event so function only gets called once
					self.unbind(this, self.transition.type, transitionDone);
					// remove log message
					elLog.removeChild(this);
					if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
				};
				// this sets the hide class to transition out
				// or removes the child if css transitions aren't supported
				hideElement = function (el) {
					// ensure element exists
					if (typeof el !== "undefined" && el.parentNode === elLog) {
						// whether CSS transition exists
						if (self.transition.supported) {
							self.bind(el, self.transition.type, transitionDone);
							el.className += " alertify-log-hide";
						} else {
							elLog.removeChild(el);
							if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
						}
					}
				};
				// never close (until click) if wait is set to 0
				if (wait === 0) return;
				// set timeout to auto close the log message
				setTimeout(function () { hideElement(elem); }, timer);
			},

			/**
			 * Create a dialog box
			 *
			 * @param  {String}   message        The message passed from the callee
			 * @param  {String}   type           Type of dialog to create
			 * @param  {Function} fn             [Optional] Callback function
			 * @param  {String}   placeholder    [Optional] Default value for prompt input field
			 * @param  {String}   cssClass       [Optional] Class(es) to append to dialog box
			 *
			 * @return {Object}
			 */
			dialog : function (message, type, fn, placeholder, cssClass) {
				// set the current active element
				// this allows the keyboard focus to be resetted
				// after the dialog box is closed
				elCallee = document.activeElement;
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if ((elLog && elLog.scrollTop !== null) && (elCover && elCover.scrollTop !== null)) return;
					else check();
				};
				// error catching
				if (typeof message !== "string") throw new Error("message must be a string");
				if (typeof type !== "string") throw new Error("type must be a string");
				if (typeof fn !== "undefined" && typeof fn !== "function") throw new Error("fn must be a function");
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				queue.push({ type: type, message: message, callback: fn, placeholder: placeholder, cssClass: cssClass });
				if (!isopen) this.setup();

				return this;
			},

			/**
			 * Extend the log method to create custom methods
			 *
			 * @param  {String} type    Custom method name
			 *
			 * @return {Function}
			 */
			extend : function (type) {
				if (typeof type !== "string") throw new Error("extend method must have exactly one paramter");
				return function (message, wait) {
					this.log(message, type, wait);
					return this;
				};
			},

			/**
			 * Hide the dialog and rest to defaults
			 *
			 * @return {undefined}
			 */
			hide : function () {
				var transitionDone,
				    self = this;
				// remove reference from queue
				queue.splice(0,1);
				// if items remaining in the queue
				if (queue.length > 0) this.setup(true);
				else {
					isopen = false;
					// Hide the dialog box after transition
					// This ensure it doens't block any element from being clicked
					transitionDone = function (event) {
						event.stopPropagation();
						// unbind event so function only gets called once
						self.unbind(elDialog, self.transition.type, transitionDone);
					};
					// whether CSS transition exists
					if (this.transition.supported) {
						this.bind(elDialog, this.transition.type, transitionDone);
						elDialog.className = "alertify alertify-hide alertify-hidden";
					} else {
						elDialog.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
					}
					elCover.className  = "alertify-cover alertify-cover-hidden";
					// set focus to the last element or body
					// after the dialog is closed
					elCallee.focus();
				}
			},

			/**
			 * Initialize Alertify
			 * Create the 2 main elements
			 *
			 * @return {undefined}
			 */
			init : function () {
				// ensure legacy browsers support html5 tags
				document.createElement("nav");
				document.createElement("article");
				document.createElement("section");
				// cover
				if ($("alertify-cover") == null) {
					elCover = document.createElement("div");
					elCover.setAttribute("id", "alertify-cover");
					elCover.className = "alertify-cover alertify-cover-hidden";
					document.body.appendChild(elCover);
				}
				// main element
				if ($("alertify") == null) {
					isopen = false;
					queue = [];
					elDialog = document.createElement("section");
					elDialog.setAttribute("id", "alertify");
					elDialog.className = "alertify alertify-hidden";
					document.body.appendChild(elDialog);
				}
				// log element
				if ($("alertify-logs") == null) {
					elLog = document.createElement("section");
					elLog.setAttribute("id", "alertify-logs");
					elLog.className = "alertify-logs alertify-logs-hidden";
					document.body.appendChild(elLog);
				}
				// set tabindex attribute on body element
				// this allows script to give it focus
				// after the dialog is closed
				document.body.setAttribute("tabindex", "0");
				// set transition type
				this.transition = getTransitionEvent();
			},

			/**
			 * Show a new log message box
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Optional type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
			 *
			 * @return {Object}
			 */
			log : function (message, type, wait) {
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if (elLog && elLog.scrollTop !== null) return;
					else check();
				};
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				elLog.className = "alertify-logs";
				this.notify(message, type, wait);
				return this;
			},

			/**
			 * Add new log message
			 * If a type is passed, a class name "alertify-log-{type}" will get added.
			 * This allows for custom look and feel for various types of notifications.
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
			 *
			 * @return {undefined}
			 */
			notify : function (message, type, wait) {
				var log = document.createElement("article");
				log.className = "alertify-log" + ((typeof type === "string" && type !== "") ? " alertify-log-" + type : "");
				log.innerHTML = message;
				// append child
				elLog.appendChild(log);
				// triggers the CSS animation
				setTimeout(function() { log.className = log.className + " alertify-log-show"; }, 50);
				this.close(log, wait);
			},

			/**
			 * Set properties
			 *
			 * @param {Object} args     Passing parameters
			 *
			 * @return {undefined}
			 */
			set : function (args) {
				var k;
				// error catching
				if (typeof args !== "object" && args instanceof Array) throw new Error("args must be an object");
				// set parameters
				for (k in args) {
					if (args.hasOwnProperty(k)) {
						this[k] = args[k];
					}
				}
			},

			/**
			 * Common place to set focus to proper element
			 *
			 * @return {undefined}
			 */
			setFocus : function () {
				if (input) {
					input.focus();
					input.select();
				}
				else btnFocus.focus();
			},

			/**
			 * Initiate all the required pieces for the dialog box
			 *
			 * @return {undefined}
			 */
			setup : function (fromQueue) {
				var item = queue[0],
				    self = this,
				    transitionDone;

				// dialog is open
				isopen = true;
				// Set button focus after transition
				transitionDone = function (event) {
					event.stopPropagation();
					self.setFocus();
					// unbind event so function only gets called once
					self.unbind(elDialog, self.transition.type, transitionDone);
				};
				// whether CSS transition exists
				if (this.transition.supported && !fromQueue) {
					this.bind(elDialog, this.transition.type, transitionDone);
				}
				// build the proper dialog HTML
				elDialog.innerHTML = this.build(item);
				// assign all the common elements
				btnReset  = $("alertify-resetFocus");
				btnResetBack  = $("alertify-resetFocusBack");
				btnOK     = $("alertify-ok")     || undefined;
				btnCancel = $("alertify-cancel") || undefined;
				btnFocus  = (_alertify.buttonFocus === "cancel") ? btnCancel : ((_alertify.buttonFocus === "none") ? $("alertify-noneFocus") : btnOK),
				input     = $("alertify-text")   || undefined;
				form      = $("alertify-form")   || undefined;
				// add placeholder value to the input field
				if (typeof item.placeholder === "string" && item.placeholder !== "") input.value = item.placeholder;
				if (fromQueue) this.setFocus();
				this.addListeners(item.callback);
			},

			/**
			 * Unbind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to detach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			unbind : function (el, event, fn) {
				if (typeof el.removeEventListener === "function") {
					el.removeEventListener(event, fn, false);
				} else if (el.detachEvent) {
					el.detachEvent("on" + event, fn);
				}
			}
		};

		return {
			alert   : function (message, fn, cssClass) { _alertify.dialog(message, "alert", fn, "", cssClass); return this; },
			confirm : function (message, fn, cssClass) { _alertify.dialog(message, "confirm", fn, "", cssClass); return this; },
			extend  : _alertify.extend,
			init    : _alertify.init,
			log     : function (message, type, wait) { _alertify.log(message, type, wait); return this; },
			prompt  : function (message, fn, placeholder, cssClass) { _alertify.dialog(message, "prompt", fn, placeholder, cssClass); return this; },
			success : function (message, wait) { _alertify.log(message, "success", wait); return this; },
			error   : function (message, wait) { _alertify.log(message, "error", wait); return this; },
			set     : function (args) { _alertify.set(args); },
			labels  : _alertify.labels,
			debug   : _alertify.handleErrors
		};
	};

	// AMD and window support
	if (typeof define === "function") {
		define([], function () { return new Alertify(); });
	} else if (typeof global.alertify === "undefined") {
		global.alertify = new Alertify();
	}

}(this));

/*
 AngularJS v1.4.14
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,U,x){'use strict';function B(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.14/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Aa(a){if(null==a||Ya(a))return!1;if(L(a)||H(a)||D&&a instanceof D)return!0;
var b="length"in Object(a)&&a.length;return P(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function p(a,b,d){var c,e;if(a)if(G(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||Aa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Xd(){return++mb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(K(g)||G(g))for(var h=Object.keys(g),k=0,m=h.length;k<m;k++){var l=h[k],n=g[l];d&&K(n)?ea(n)?a[l]=new Date(n.valueOf()):La(n)?a[l]=new RegExp(n):n.nodeName?a[l]=n.cloneNode(!0):
Nb(n)?a[l]=n.clone():(K(a[l])||(a[l]=L(n)?[]:{}),Mb(a[l],[n],!0)):a[l]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function N(a){return Mb(a,ta.call(arguments,1),!1)}function Yd(a){return Mb(a,ta.call(arguments,1),!0)}function ca(a){return parseInt(a,10)}function Ob(a,b){return N(Object.create(a),b)}function v(){}function Za(a){return a}function ma(a){return function(){return a}}function qc(a){return G(a.toString)&&a.toString!==na}function r(a){return"undefined"===typeof a}function u(a){return"undefined"!==
typeof a}function K(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function H(a){return"string"===typeof a}function P(a){return"number"===typeof a}function ea(a){return"[object Date]"===na.call(a)}function G(a){return"function"===typeof a}function La(a){return"[object RegExp]"===na.call(a)}function Ya(a){return a&&a.window===a}function $a(a){return a&&a.$evalAsync&&a.$watch}function Ma(a){return"boolean"===typeof a}function sc(a){return a&&P(a.length)&&
Zd.test(na.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function $d(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function oa(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Na(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!K(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Ya(a)||$a(a))throw Ba("cpws");var b=!1,c;L(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):ea(a)?c=new Date(a.getTime()):La(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):"[object Blob]"===na.call(a)?c=new a.constructor([a],{type:a.type}):G(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),
b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Ba("cpta");if(a===b)throw Ba("cpi");L(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function fa(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(K(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,
c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?la(a.getTime(),b.getTime()):!1;if(La(a))return La(b)?a.toString()==b.toString():!1;if($a(a)||$a(b)||Ya(a)||Ya(b)||L(b)||ea(b)||La(b))return!1;d=Z();for(c in a)if("$"!==c.charAt(0)&&!G(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!G(b[c]))return!1;return!0}return!1}function bb(a,b,d){return a.concat(ta.call(b,
d))}function tc(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!G(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,bb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ae(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=x:Ya(b)?d="$WINDOW":b&&U===b?d="$DOCUMENT":$a(b)&&(d="$SCOPE");return d}function cb(a,b){if(r(a))return x;P(b)||(b=b?2:null);return JSON.stringify(a,ae,b)}function uc(a){return H(a)?
JSON.parse(a):a}function vc(a,b){a=a.replace(be,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=vc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Oa?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),u(e)&&(f=u(f)?wc(f):!0,sa.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];p(a,function(a,c){L(a)?p(a,function(a){b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))}):b.push(ha(c,!0)+(!0===a?"":"="+ha(a,!0)))});return b.length?b.join("&"):""}function nb(a){return ha(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ha(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ce(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,H(d=a.getAttribute(d)))return d;return null}function de(a,b){var d,c,e={};p(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ce(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){K(d)||(d={});d=N({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===U?"document":ua(a);throw Ba("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(d.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return c();R.name=R.name.replace(f,"");da.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};G(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ee(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}
function fe(a){a=da.element(a).injector();if(!a)throw Ba("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(ge,function(a,c){return(c?b:"")+a.toLowerCase()})}function he(){var a;if(!Ac){var b=ob();(pa=r(b)?R.jQuery:b?R[b]:x)&&pa.fn.on?(D=pa,N(pa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):D=S;da.element=D;Ac=!0}}function pb(a,b,d){if(!a)throw Ba("areq",b||"?",d||"required");return a}function Ra(a,b,d){d&&L(a)&&(a=a[a.length-1]);pb(G(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Sa(a,b){if("hasOwnProperty"===a)throw Ba("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
G(a)?tc(e,a):a}function qb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=D(ta.call(a,0,e))),c.push(b);return c||a}function Z(){return Object.create(null)}function ie(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=B("$injector"),c=B("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||B;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return t}}function b(a,d){return function(b,e){e&&G(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return t}}if(!g)throw d("nomod",f);var c=[],e=[],J=[],z=a("$injector","invoke","push",e),t={_invokeQueue:c,_configBlocks:e,_runBlocks:J,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:z,run:function(a){J.push(a);return this}};h&&z(h);return t})}})}function je(a){N(a,{bootstrap:yc,copy:Na,extend:N,merge:Yd,equals:la,element:D,forEach:p,injector:db,noop:v,bind:tc,toJson:cb,fromJson:uc,identity:Za,isUndefined:r,isDefined:u,isString:H,isFunction:G,isObject:K,isNumber:P,isElement:Nb,isArray:L,
version:ke,isDate:ea,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:fe,$$minErr:B,$$csp:Ca,reloadWithDebugInfo:ee});Sb=ie(R);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:le});a.provider("$compile",Cc).directive({a:me,input:Dc,textarea:Dc,form:ne,script:oe,select:pe,style:qe,option:re,ngBind:se,ngBindHtml:te,ngBindTemplate:ue,ngClass:ve,ngClassEven:we,ngClassOdd:xe,ngCloak:ye,ngController:ze,ngForm:Ae,ngHide:Be,ngIf:Ce,ngInclude:De,ngInit:Ee,ngNonBindable:Fe,
ngPluralize:Ge,ngRepeat:He,ngShow:Ie,ngStyle:Je,ngSwitch:Ke,ngSwitchWhen:Le,ngSwitchDefault:Me,ngOptions:Ne,ngTransclude:Oe,ngModel:Pe,ngList:Qe,ngChange:Re,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Se,ngModelOptions:Te}).directive({ngInclude:Ue}).directive(sb).directive(Ic);a.provider({$anchorScroll:Ve,$animate:We,$animateCss:Xe,$$animateJs:Ye,$$animateQueue:Ze,$$AnimateRunner:$e,$$animateAsyncRun:af,$browser:bf,$cacheFactory:cf,
$controller:df,$document:ef,$exceptionHandler:ff,$filter:Jc,$$forceReflow:gf,$interpolate:hf,$interval:jf,$http:kf,$httpParamSerializer:lf,$httpParamSerializerJQLike:mf,$httpBackend:nf,$xhrFactory:of,$location:pf,$log:qf,$parse:rf,$rootScope:sf,$q:tf,$$q:uf,$sce:vf,$sceDelegate:wf,$sniffer:xf,$templateCache:yf,$templateRequest:zf,$$testability:Af,$timeout:Bf,$window:Cf,$$rAF:Df,$$jqLite:Ef,$$HashMap:Ff,$$cookieReader:Gf})}])}function eb(a){return a.replace(Hf,function(a,d,c,e){return e?c.toUpperCase():
c}).replace(If,"Moz$1")}function Kc(a){a=a.nodeType;return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Jf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Kf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=bb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function Mc(a,
b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function S(a){if(a instanceof S)return a;var b;H(a)&&(a=T(a),b=!0);if(!(this instanceof S)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new S(a)}if(b){b=U;var d;a=(d=Lf.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function tb(a,b){b||ub(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)ub(d[c])}function Oc(a,b,d,c){if(u(c))throw Ub("offargs");
var e=(c=vb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&ab(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};p(b.split(" "),function(a){g(a);wb[a]&&g(wb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function ub(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete fb[d],a.ng339=x))}function vb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Mf,
d=fb[d]={events:{},data:{},handle:x});return d}function Wb(a,b,d){if(Kc(a)){var c=u(d),e=!c&&b&&!K(b),f=!b;a=(a=vb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];N(a,b)}}}function xb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function yb(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function zb(a,
b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Ab(a,"$"+(b||"ngController")+"Controller")}function Ab(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=
L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Qc(a){for(tb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||tb(a);var d=a.parentNode;d&&d.removeChild(a)}function Nf(a,b){b=b||R;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function Rc(a,b){var d=Bb[b.toLowerCase()];return d&&Sc[oa(a)]&&d}function Of(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};
var f=b[d||c.type],g=f?f.length:0;if(g){if(r(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Pf;1<g&&(f=fa(f));for(var m=0;m<g;m++)c.isImmediatePropagationStopped()||k(a,c,f[m])}};d.elem=a;return d}function Pf(a,b,d){d.call(a,b)}function Qf(a,b,
d){var c=b.relatedTarget;c&&(c===a||Rf.call(a,c))||d.call(a,b)}function Ef(){this.$get=function(){return N(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return xb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)}})}}function Da(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Xd)():d+":"+a}function Ta(a,b){if(b){var d=0;this.nextUid=
function(){return++d}}p(a,this.put,this)}function Sf(a){return(a=a.toString().replace(Tc,"").match(Uc))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(K(b))p(b,pc(a));else return a(b,c)}}function c(a,b){Sa(a,"service");if(G(b)||L(b))b=J.instantiate(b);if(!b.$get)throw Ea("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(r(c))throw Ea("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==
d?e(a,b):b})}function g(a){pb(r(a)||L(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=J.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{H(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(J.invoke(a)):L(a)?b.push(J.invoke(a)):Ra(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+
e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ea("cdep",b+" <- "+m.join(" <- "));return a[b]}try{return m.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{m.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=db.$$annotate(a,b,g),m,l,q;l=0;for(m=h.length;l<m;l++){q=h[l];if("string"!==typeof q)throw Ea("itkn",q);k.push(f&&f.hasOwnProperty(q)?f[q]:d(q,g))}L(a)&&
(a=a[m]);return a.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((L(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return K(a)||G(a)?a:d},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},m=[],l=new Ta([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ma(b),!1)}),constant:d(function(a,
b){Sa(a,"constant");n[a]=b;z[a]=b}),decorator:function(a,b){var c=J.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},J=n.$injector=h(n,function(a,b){da.isString(b)&&m.push(b);throw Ea("unpr",m.join(" <- "));}),z={},t=z.$injector=h(z,function(a,b){var c=J.get(a+"Provider",b);return t.invoke(c.$get,c,x,a)});p(g(a),function(a){a&&t.invoke(a)});return t}function Ve(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location",
"$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===oa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):P(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=H(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):
f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Nf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Tf(a){H(a)&&(a=a.split(" "));var b=Z();p(a,function(a){a.length&&(b[a]=!0)});return b}function Fa(a){return K(a)?a:{}}function Uf(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(t--,0===t)for(;A.length;)try{A.pop()()}catch(b){d.error(b)}}}
function f(){F=null;g();h()}function g(){a:{try{q=l.state;break a}catch(a){}q=void 0}q=r(q)?null:q;la(q,C)&&(q=C);C=q}function h(){if(w!==k.url()||y!==q)w=k.url(),y=q,p(Q,function(a){a(k.url(),q)})}var k=this,m=a.location,l=a.history,n=a.setTimeout,J=a.clearTimeout,z={};k.isMock=!1;var t=0,A=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){0===t?a():A.push(a)};var q,y,w=m.href,V=b.find("base"),F=null;g();y=q;k.url=function(b,
d,e){r(e)&&(e=null);m!==a.location&&(m=a.location);l!==a.history&&(l=a.history);if(b){var f=y===e;if(w===b&&(!c.history||f))return k;var h=w&&Ga(w)===Ga(b);w=b;y=e;if(!c.history||h&&f){if(!h||F)F=b;d?m.replace(b):h?(d=m,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):m.href=b;m.href!==b&&(F=b)}else l[d?"replaceState":"pushState"](e,"",b),g(),y=q;return k}return F||m.href.replace(/%27/g,"'")};k.state=function(){return q};var Q=[],E=!1,C=null;k.onUrlChange=function(b){if(!E){if(c.history)D(a).on("popstate",
f);D(a).on("hashchange",f);E=!0}Q.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=V.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;t++;c=n(function(){delete z[c];e(a)},b||0);z[c]=!0;return c};k.defer.cancel=function(a){return z[a]?(delete z[a],J(a),e(v),!0):!1}}function bf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Uf(a,c,b,
d)}]}function cf(){this.$get=function(){function a(a,c){function e(a){a!=n&&(J?J==a&&(J=a.n):J=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw B("$cacheFactory")("iid",a);var g=0,h=N({},c,{id:a}),k=Z(),m=c&&c.capacity||Number.MAX_VALUE,l=Z(),n=null,J=null;return b[a]={put:function(a,b){if(!r(b)){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}a in k||g++;k[a]=b;g>m&&this.remove(J.key);return b}},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==J&&(J=b.n);f(b.n,b.p);delete l[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=Z();g=0;l=Z();n=J=null},destroy:function(){l=h=k=null;delete b[a]},info:function(){return N({},h,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function yf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e=Z();p(a,function(a,f){if(a in l)e[f]=l[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(l[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=
/(([\w\-]+)(?:\:([^;]+))?;?)/,h=$d("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,l=Z();this.directive=function z(b,d){Sa(b,"directive");H(b)?(c(b),pb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(e[b],function(e,f){try{var g=a.invoke(e);G(g)?g={compile:ma(g)}:!g.compile&&g.link&&(g.compile=ma(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||b;g.require=g.require||
g.controller&&g.name;g.restrict=g.restrict||"EA";g.$$moduleName=e.$$moduleName;d.push(g)}catch(h){c(h)}});return d}])),e[b].push(d)):p(b,pc(z));return this};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};this.$get=["$injector",
"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,l,y,w,V,F,Q,E){function C(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e){a instanceof D||(a=D(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Oa&&k.nodeValue.match(f)&&Mc(k,a[g]=U.createElement("span"))}var m=W(a,b,a,c,d,e);I.$$addScopeClass(a);var l=null;return function(b,c,d){pb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());
d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);l||(l=(d=d&&d[0])?"foreignobject"!==oa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==l?D(Yb(l,D("<div>").append(a).html())):c?Qa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);I.$$addScopeInfo(d,b);c&&c(d,b);m&&m(b,d,d,f);return d}}function W(a,b,c,d,e,f){function g(a,c,d,e){var f,k,m,l,n,E,A;if(q)for(A=Array(c.length),
l=0;l<h.length;l+=3)f=h[l],A[f]=c[f];else A=c;l=0;for(n=h.length;l<n;)k=A[h[l++]],c=h[l++],f=h[l++],c?(c.scope?(m=a.$new(),I.$$addScopeInfo(D(k),m)):m=a,E=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,m,k,d,E)):f&&f(a,k.childNodes,x,e)}for(var h=[],k,m,l,n,q,E=0;E<a.length;E++){k=new da;m=ia(a[E],[],k,0===E?d:x,e);(f=m.length?$(m,a[E],k,b,c,null,[],[],f):null)&&f.scope&&I.$$addScopeClass(k.$$element);k=f&&f.terminal||!(l=a[E].childNodes)||!l.length?
null:W(l,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(E,f,k),n=!0,q=q||f;f=null}return n?g:null}function O(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ia(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:k=oa(a);qa(b,va(k),"E",d,e);for(var m,l,n,q,E=a.attributes,A=0,w=E&&E.length;A<w;A++){var I=!1,y=!1;m=E[A];l=m.name;n=T(m.value);
m=va(l);if(q=ja.test(m))l=l.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(m=m.match(ka))&&B(m[1])&&(I=l,y=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));m=va(l.toLowerCase());h[m]=l;if(q||!c.hasOwnProperty(m))c[m]=n,Rc(a,m)&&(c[m]=!0);X(a,b,n,m,q);qa(b,m,"A",d,e,I,y)}"input"===k&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");a=a.className;K(a)&&(a=a.animVal);if(H(a)&&""!==a)for(;k=g.exec(a);)m=va(k[2]),qa(b,m,"C",d,e)&&(c[m]=T(k[3])),
a=a.substr(k.index+k[0].length);break;case Oa:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);P(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))m=va(k[1]),qa(b,m,"M",d,e)&&(c[m]=T(k[2]))}catch(O){}}b.sort(wa);return b}function Ua(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);
a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ua(e[0],b,c);return a(d,e,f,g,h)}}function $(a,b,d,e,f,g,h,m,l){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=r.require;a.directiveName=u;if(C===r||r.$$isolateScope)a=ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=r.require;b.directiveName=u;if(C===r||r.$$isolateScope)b=ba(b,{isolateScope:!0});m.push(b)}}function q(a,b,c,d){var e;if(H(b)){var f=b.match(k);b=b.substring(f[0].length);
var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=q(a,b[g],c,d);return e||null}function E(a,b,c,d,e,f){var g=Z(),h;for(h in d){var k=d[h],m={$scope:k===C||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},l=k.controller;"@"==l&&(l=b[k.name]);m=w(l,m,!0,k.controllerAs);g[k.name]=m;a.data("$"+k.name+"Controller",m.instance)}return g}
function y(a,c,e,f,g){function k(a,b,c){var d;$a(a)||(c=b,b=a,a=x);Q&&(d=w);c||(c=Q?F.parent():F);return g(a,b,d,c,Ua)}var l,n,A,w,O,F,ia;b===e?(f=d,F=d.$$element):(F=D(e),f=new da(F,d));A=c;C?n=c.$new(!0):t&&(A=c.$parent);g&&(O=k,O.$$boundTransclude=g);z&&(w=E(F,f,O,z,n,c));C&&(I.$$addScopeInfo(F,n,!0,!(W&&(W===C||W===C.$$originalDirective))),I.$$addScopeClass(F,!0),n.$$isolateBindings=C.$$isolateBindings,(ia=aa(c,f,n,n.$$isolateBindings,C))&&n.$on("$destroy",ia));for(var Vc in w){ia=z[Vc];var V=
w[Vc],p=ia.$$bindings.bindToController;V.identifier&&p&&(l=aa(A,f,V.instance,p,ia));var r=V();r!==V.instance&&(V.instance=r,F.data("$"+ia.name+"Controller",r),l&&l(),l=aa(A,f,V.instance,p,ia))}B=0;for(M=h.length;B<M;B++)l=h[B],ca(l,l.isolateScope?n:c,F,f,l.require&&q(l.directiveName,l.require,F,w),O);var Ua=c;C&&(C.template||null===C.templateUrl)&&(Ua=n);a&&a(Ua,e.childNodes,x,g);for(B=m.length-1;0<=B;B--)l=m[B],ca(l,l.isolateScope?n:c,F,f,l.require&&q(l.directiveName,l.require,F,w),O)}l=l||{};for(var O=
-Number.MAX_VALUE,t=l.newScopeDirective,z=l.controllerDirectives,C=l.newIsolateScopeDirective,W=l.templateDirective,F=l.nonTlbTranscludeDirective,V=!1,p=!1,Q=l.hasElementTranscludeDirective,$=d.$$element=D(b),r,u,v,qa=e,wa,B=0,M=a.length;B<M;B++){r=a[B];var N=r.$$start,P=r.$$end;N&&($=Ua(b,N,P));v=x;if(O>r.priority)break;if(v=r.scope)r.templateUrl||(K(v)?(Va("new/isolated scope",C||t,r,$),C=r):Va("new/isolated scope",C,r,$)),t=t||r;u=r.name;!r.templateUrl&&r.controller&&(v=r.controller,z=z||Z(),Va("'"+
u+"' controller",z[u],r,$),z[u]=r);if(v=r.transclude)V=!0,r.$$tlb||(Va("transclusion",F,r,$),F=r),"element"==v?(Q=!0,O=r.priority,v=$,$=d.$$element=D(U.createComment(" "+u+": "+d[u]+" ")),b=$[0],Y(f,ta.call(v,0),b),qa=I(v,e,O,g&&g.name,{nonTlbTranscludeDirective:F})):(v=D(Vb(b)).contents(),$.empty(),qa=I(v,e,x,x,{needsNewScope:r.$$isolateScope||r.$$newScope}));if(r.template)if(p=!0,Va("template",W,r,$),W=r,v=G(r.template)?r.template($,d):r.template,v=ha(v),r.replace){g=r;v=Tb.test(v)?Xc(Yb(r.templateNamespace,
T(v))):[];b=v[0];if(1!=v.length||1!==b.nodeType)throw ga("tplrt",u,"");Y(f,$,b);v={$attr:{}};var S=ia(b,[],v),Vf=a.splice(B+1,a.length-(B+1));(C||t)&&Yc(S,C,t);a=a.concat(S).concat(Vf);R(d,v);M=a.length}else $.html(v);if(r.templateUrl)p=!0,Va("template",W,r,$),W=r,r.replace&&(g=r),y=Wf(a.splice(B,a.length-B),$,d,f,V&&qa,h,m,{controllerDirectives:z,newScopeDirective:t!==r&&t,newIsolateScopeDirective:C,templateDirective:W,nonTlbTranscludeDirective:F}),M=a.length;else if(r.compile)try{wa=r.compile($,
d,qa),G(wa)?n(null,wa,N,P):wa&&n(wa.pre,wa.post,N,P)}catch(X){c(X,ua($))}r.terminal&&(y.terminal=!0,O=Math.max(O,r.priority))}y.scope=t&&!0===t.scope;y.transcludeOnThisElement=V;y.templateOnThisElement=p;y.transclude=qa;l.hasElementTranscludeDirective=Q;return y}function Yc(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function qa(b,f,g,h,k,m,l){if(f===k)return null;k=null;if(e.hasOwnProperty(f)){var n;f=a.get(f+"Directive");for(var q=0,E=f.length;q<E;q++)try{if(n=
f[q],(r(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){m&&(n=Ob(n,{$$start:m,$$end:l}));if(!n.$$bindings){var w=n,I=n,y=n.name,O={isolateScope:null,bindToController:null};K(I.scope)&&(!0===I.bindToController?(O.bindToController=d(I.scope,y,!0),O.isolateScope={}):O.isolateScope=d(I.scope,y,!1));K(I.bindToController)&&(O.bindToController=d(I.bindToController,y,!0));if(K(O.bindToController)){var t=I.controller,C=I.controllerAs;if(!t)throw ga("noctrl",y);var F;a:{var I=t,W=C;if(W&&H(W))F=W;else{if(H(I)){var ia=
Zc.exec(I);if(ia){F=ia[3];break a}}F=void 0}}if(!F)throw ga("noident",y);}var V=w.$$bindings=O;K(V.isolateScope)&&(n.$$isolateBindings=V.isolateScope)}b.push(n);k=n}}catch(p){c(p)}}return k}function B(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;p(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,
f){"class"==f?(C(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Wf(a,b,c,d,e,f,g,h){var k=[],m,n,E=b[0],A=a.shift(),w=Ob(A,{templateUrl:null,transclude:null,replace:null,$$originalDirective:A}),I=G(A.templateUrl)?A.templateUrl(b,c):A.templateUrl,y=A.templateNamespace;b.empty();l(I).then(function(l){var q,t;l=ha(l);if(A.replace){l=Tb.test(l)?
Xc(Yb(y,T(l))):[];q=l[0];if(1!=l.length||1!==q.nodeType)throw ga("tplrt",A.name,I);l={$attr:{}};Y(d,b,q);var z=ia(q,[],l);K(A.scope)&&Yc(z,!0);a=z.concat(a);R(c,l)}else q=E,b.html(l);a.unshift(w);m=$(a,q,c,e,b,A,f,g,h);p(d,function(a,c){a==q&&(d[c]=b[0])});for(n=W(b[0].childNodes,e);k.length;){l=k.shift();t=k.shift();var F=k.shift(),V=k.shift(),z=b[0];if(!l.$$destroyed){if(t!==E){var Q=t.className;h.hasElementTranscludeDirective&&A.replace||(z=Vb(q));Y(F,D(t),z);C(D(z),Q)}t=m.transcludeOnThisElement?
O(l,m.transclude,V):V;m(n,l,z,d,t)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(m.transcludeOnThisElement&&(a=O(b,m.transclude,e)),m(n,b,c,d,a)))}}function wa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Va(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&I.$$addBindingClass(a);return function(a,c){var e=c.parent();b||I.$$addBindingClass(e);I.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function S(a,b){if("srcdoc"==b)return F.HTML;var c=oa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return F.RESOURCE_URL}function X(a,c,d,e,f){var g=S(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===oa(a))throw ga("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=Z());if(m.test(e))throw ga("nodomevents");var l=h[e];l!==d&&(k=l&&b(l,!0,g,f),d=l);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);D.hasData(d)&&(D.data(c,D.data(d)),pa?(Rb=!0,pa.cleanData([d])):delete D.cache[d[D.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ba(a,
b){return N(function(){return a.apply(null,arguments)},a,b)}function ca(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function aa(a,c,d,e,f){var g=[];p(e,function(e,h){var k=e.attrName,m=e.optional,l,n,q,A;switch(e.mode){case "@":m||sa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){H(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;l=c[k];H(l)?d[h]=b(l)(a):Ma(l)&&(d[h]=l);break;case "=":if(!sa.call(c,k)){if(m)break;c[k]=void 0}if(m&&!c[k])break;n=y(c[k]);A=n.literal?la:function(a,b){return a===
b||a!==a&&b!==b};q=n.assign||function(){l=d[h]=n(a);throw ga("nonassign",c[k],k,f.name);};l=d[h]=n(a);m=function(b){A(b,d[h])||(A(b,l)?q(a,b=d[h]):d[h]=b);return l=b};m.$stateful=!0;m=e.collection?a.$watchCollection(c[k],m):a.$watch(y(c[k],m),null,n.literal);g.push(m);break;case "&":n=c.hasOwnProperty(k)?y(c[k]):v;if(n===v&&m)break;d[h]=function(b){return n(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var da=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<
e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};da.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&Q.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&Q.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=
e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=oa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),m=0;m<k;m++)var l=2*m,f=f+E(T(g[l]),!0),f=f+(" "+T(g[l+1]));g=T(g[2*m]).split(/\s/);f+=E(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||r(b)?this.$$element.removeAttr(e):this.$$element.attr(e,
b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=Z()),e=d[a]||(d[a]=[]);e.push(b);V.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||r(c[a])||b(c[a])});return function(){ab(e,b)}}};var ea=b.startSymbol(),fa=b.endSymbol(),ha="{{"==ea&&"}}"==fa?Za:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,fa)},ja=/^ngAttr[A-Z]/,ka=/^(.+)Start$/;I.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];L(b)?
c=c.concat(b):c.push(b);a.data("$binding",c)}:v;I.$$addBindingClass=n?function(a){C(a,"ng-binding")}:v;I.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;I.$$addScopeClass=n?function(a,b){C(a,b?"ng-isolate-scope":"ng-scope")}:v;return I}]}function va(a){return eb(a.replace(Wc,""))}function $c(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+
g}return d}function Xc(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Xf.call(a,b,1);return a}function df(){var a={},b=!1;this.register=function(b,c){Sa(b,"controller");K(b)?N(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!K(a.$scope))throw B("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var m,l,n;h=!0===h;k&&H(k)&&(n=k);if(H(f)){k=f.match(Zc);if(!k)throw Yf("ctrlfmt",f);l=k[1];
n=n||k[3];f=a.hasOwnProperty(l)?a[l]:Bc(g.$scope,l,!0)||(b?Bc(c,l,!0):x);Ra(f,l,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,m=Object.create(h||null),n&&e(g,n,m,l||f.name),N(function(){var a=d.invoke(f,m,g,l);a!==m&&(K(a)||G(a))&&(m=a,n&&e(g,n,m,l||f.name));return m},{instance:m,identifier:n});m=d.instantiate(f,g,l);n&&e(g,n,m,l||f.name);return m}}]}function ef(){this.$get=["$window",function(a){return D(a.document)}]}function ff(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,
arguments)}}]}function Zb(a){return K(a)?ea(a)?a.toISOString():cb(a):a}function lf(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||r(a)||(L(a)?p(a,function(a,d){b.push(ha(c)+"="+ha(Zb(a)))}):b.push(ha(c)+"="+ha(Zb(a))))});return b.join("&")}}}function mf(){this.$get=function(){return function(a){function b(a,e,f){null===a||r(a)||(L(a)?p(a,function(a,c){b(a,e+"["+(K(a)?c:"")+"]")}):K(a)&&!ea(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ha(e)+
"="+ha(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(H(a)){var d=a.replace(Zf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match($f))&&ag[c[0]].test(d));c&&(a=uc(d))}}return a}function cd(a){var b=Z(),d;H(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=M(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):K(a)&&p(a,function(a,d){var f=M(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;
return function(d){b||(b=cd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(G(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function kf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return K(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ac),put:fa(ac),patch:fa(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return u(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,m){function l(b){function c(a){var b=N({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};p(a,function(a,
e){G(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!da.isObject(b))throw B("$http")("badreq",b);if(!H(b.url))throw B("$http")("badreq",b.url);var f=N({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=N({},b.headers),f,g,h,c=N({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=rb(f.method);f.paramSerializer=
H(f.paramSerializer)?m.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),x,b.transformRequest);r(e)&&p(d,function(a,b){"content-type"===M(b)&&delete d[b]});r(b.withCredentials)&&!r(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,c)},x],h=k.when(f);for(p(t,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var l=
g.shift(),h=h.then(b,l)}d?(h.success=function(a){Ra(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function n(c,d){function g(a,c,d,e){function f(){m(c,a,d,e)}C&&(200<=a&&300>a?C.put(O,[a,c,cd(d),e]):C.remove(O));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?p.resolve:p.reject)({data:a,
status:b,headers:dd(d),config:c,statusText:e})}function n(a){m(a.data,a.status,fa(a.headers()),a.statusText)}function t(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var p=k.defer(),E=p.promise,C,I,W=c.headers,O=J(c.url,c.paramSerializer(c.params));l.pendingRequests.push(c);E.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(C=K(c.cache)?c.cache:K(a.cache)?a.cache:z);C&&(I=C.get(O),u(I)?I&&G(I.then)?I.then(n,n):L(I)?m(I[1],I[0],fa(I[2]),
I[3]):m(I,200,{},"OK"):C.put(O,E));r(I)&&((I=gd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:x)&&(W[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,O,d,g,W,c.timeout,c.withCredentials,c.responseType));return E}function J(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var z=g("$http");a.paramSerializer=H(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var t=[];p(c,function(a){t.unshift(H(a)?m.get(a):m.invoke(a))});l.pendingRequests=[];(function(a){p(arguments,function(a){l[a]=
function(b,c){return l(N({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){l[a]=function(b,c,d){return l(N({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=a;return l}]}function of(){this.$get=function(){return function(){return new R.XMLHttpRequest}}}function nf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return bg(a,c,a.defer,b.angular.callbacks,d[0])}]}function bg(a,b,d,c,e){function f(a,
b,d){var f=e.createElement("script"),l=null;f.type="text/javascript";f.src=a;f.async=!0;l=function(a){f.removeEventListener("load",l,!1);f.removeEventListener("error",l,!1);e.body.removeChild(f);f=null;var g=-1,z="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),z=a.type,g="error"===a.type?404:200);d&&d(g,z)};f.addEventListener("load",l,!1);f.addEventListener("error",l,!1);e.body.appendChild(f);return l}return function(e,h,k,m,l,n,J,z){function t(){y&&y();w&&w.abort()}function A(b,c,
e,f,g){u(F)&&d.cancel(F);y=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(v)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var q="_"+(c.counter++).toString(36);c[q]=function(a){c[q].data=a;c[q].called=!0};var y=f(h.replace("JSON_CALLBACK","angular.callbacks."+q),q,function(a,b){A(m,a,c[q].data,"",b);c[q]=v})}else{var w=b(e,h);w.open(e,h,!0);p(l,function(a,b){u(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=
1223===w.status?204:w.status;0===c&&(c=b?200:"file"==xa(h).protocol?404:0);A(m,c,b,w.getAllResponseHeaders(),a)};e=function(){A(m,-1,null,null,"")};w.onerror=e;w.onabort=e;J&&(w.withCredentials=!0);if(z)try{w.responseType=z}catch(V){if("json"!==z)throw V;}w.send(r(k)?null:k)}if(0<n)var F=d(t,n);else n&&G(n.then)&&n.then(t)}}function hf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",
function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(l,a).replace(n,b)}function h(f,h,l,n){function q(a){try{var b=a;a=l?e.getTrusted(l,b):e.valueOf(b);var d;if(n&&!u(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ia.interr(f,g))}}n=!!n;for(var y,w,p=0,F=[],Q=[],E=f.length,C=[],I=[];p<E;)if(-1!=(y=f.indexOf(a,p))&&-1!=(w=f.indexOf(b,y+k)))p!==y&&C.push(g(f.substring(p,y))),p=f.substring(y+
k,w),F.push(p),Q.push(d(p,q)),p=w+m,I.push(C.length),C.push("");else{p!==E&&C.push(g(f.substring(p)));break}l&&1<C.length&&Ia.throwNoconcat(f);if(!h||F.length){var W=function(a){for(var b=0,c=F.length;b<c;b++){if(n&&r(a[b]))return;C[I[b]]=a[b]}return C.join("")};return N(function(a){var b=0,d=F.length,e=Array(d);try{for(;b<d;b++)e[b]=Q[b](a);return W(e)}catch(g){c(Ia.interr(f,g))}},{exp:f,expressions:F,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Q,function(d,e){var f=W(d);G(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,m=b.length,l=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function jf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,m){var l=4<arguments.length,n=l?ta.call(arguments,4):[],J=b.setInterval,z=b.clearInterval,t=0,A=u(m)&&!m,q=(A?c:d).defer(),y=q.promise;k=u(k)?k:0;y.then(null,null,l?function(){e.apply(null,n)}:e);y.$$intervalId=
J(function(){q.notify(t++);0<k&&t>=k&&(q.resolve(t),z(y.$$intervalId),delete f[y.$$intervalId]);A||a.$apply()},h);f[y.$$intervalId]=q;return y}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=nb(a[b]);return a.join("/")}function hd(a,b){var d=xa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ca(d.port)||cg[d.protocol]||
null}function id(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=xa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ra(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ga(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function hb(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
hd(a,this);this.$$parse=function(a){var d=ra(b,a);if(!H(d))throw Cb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ra(a,c))?(g=f,g=u(f=ra(d,f))?b+(ra("/",f)||f):a+g):u(f=ra(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){hd(a,this);this.$$parse=function(c){var e=ra(a,c)||ra(b,c),f;r(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",r(e)&&(a=c,this.replace())):(f=ra(d,e),r(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ga(a)==Ga(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ga(c)?f=c:(g=ra(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Db(a){return function(){return this[a]}}
function kd(a,b){return function(d){if(r(d))return this[a];this[a]=b(d);this.$$compose();return this}}function pf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){return Ma(a)?(b.enabled=a,this):K(a)?(Ma(a.enabled)&&(b.enabled=a.enabled),Ma(a.requireBase)&&(b.requireBase=a.requireBase),Ma(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,l;l=c.baseHref();var n=c.url(),J;if(b.enabled){if(!l&&b.requireBase)throw Cb("nobase");J=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(l||"/");l=e.history?cc:jd}else J=Ga(n),l=dc;var z=J.substr(0,Ga(J).lastIndexOf("/")+1);m=new l(J,z,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=
c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=D(a.target);"a"!==oa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");K(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=xa(h.animVal).href);t.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(h,k)||(a.preventDefault(),m.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});hb(m.absUrl())!=hb(n)&&c.url(m.absUrl(),!0);var A=!0;c.onUrlChange(function(a,b){r(ra(z,a))?g.location.href=a:(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;a=hb(a);m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(A=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=hb(c.url()),b=hb(m.absUrl()),f=c.state(),g=m.$$replace,l=a!==b||m.$$html5&&e.history&&f!==m.$$state;if(A||
l)A=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(l&&h(b,g,f===m.$$state?null:m.$$state),k(a,f)))});m.$$replace=!1});return m}]}function qf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];p(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Wa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw aa("isecfld",b);return a}function ld(a,b){a+="";if(!H(a))throw aa("iseccst",b);return a}function ya(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a.window===a)throw aa("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw aa("isecdom",b);if(a===Object)throw aa("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw aa("isecfn",b);if(a===dg||a===eg||a===fg)throw aa("isecff",b);}}function Eb(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw aa("isecaf",b);}function gg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function X(a,b){var d,c;switch(a.type){case s.Program:d=!0;p(a.body,function(a){X(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:X(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:X(a.test,b);X(a.alternate,b);X(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:X(a.object,b);a.computed&&X(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];p(a.arguments,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];p(a.elements,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];p(a.properties,function(a){X(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:x}}
function pd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function sd(a,b){this.astBuilder=a;this.$filter=b}function td(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return G(a.valueOf)?a.valueOf():hg.call(a)}function rf(){var a=Z(),b=Z();this.$get=["$filter",function(d){function c(c,f,n){var w,p,F;n=n||t;switch(typeof c){case "string":F=c=c.trim();var r=n?b:a;w=r[F];if(!w){":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2));w=n?z:J;var E=new fc(w);w=(new gc(E,d,w)).parse(c);w.constant?w.$$watchDelegate=m:p?w.$$watchDelegate=w.literal?k:h:w.inputs&&(w.$$watchDelegate=
g);n&&(w=e(w));r[F]=w}return l(w,f);case "function":return l(c,f);default:return l(v,f)}}function e(a){function b(c,d,e,f){var g=t;t=!0;try{return a(c,d,e,f)}finally{t=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=e(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=e(a.inputs[c]);b.inputs=a.inputs;return b}function f(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==
b}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k)||(h=d(a,x,x,[b]),k=b&&ec(b));return h},b,c,e)}for(var l=[],m=[],n=0,J=g.length;n<J;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c])))m[c]=k,l[c]=k&&ec(k)}b&&(h=d(a,x,x,m));return h},b,c,e)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);u(a)&&
d.$$postDigest(function(){u(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;p(a,function(a){u(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,
e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return u(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==g?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=g,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var n=Ca().noUnsafeEval,J={csp:n,expensiveChecks:!1},z={csp:n,expensiveChecks:!0},t=!1;c.$$runningExpensiveChecks=function(){return t};return c}]}function tf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},
b)}]}function uf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=x;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{G(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=B("$q",TypeError);N(c.prototype,{then:function(a,b,c){if(r(a)&&r(b)&&r(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return m(b,!0,a)},function(b){return m(b,!1,a)},b)}});N(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(K(a)||G(a))c=a&&a.then;G(c)?(this.promise.$$state.status=-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),
b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(G(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},m=function(a,b,c){var d=null;try{G(c)&&
(d=c())}catch(e){return k(e,!1)}return d&&G(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},l=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function z(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof z))return new z(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=l;n.resolve=l;n.all=function(a){var b=
new g,c=0,d=L(a)?[]:{};p(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Df(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function sf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=B("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function m(a){a.currentScope.$$destroyed=
!0}function l(a){9===Ha&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function n(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function J(a){if(w.$$phase)throw d("inprog",
w.$$phase);w.$$phase=a}function z(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function A(){}function q(){for(;Q.length;)try{Q.shift()()}catch(a){g(a)}e=null}function y(){null===e&&(e=k.defer(function(){w.$apply(q)}))}n.prototype={constructor:n,$new:function(b,c){var d;c=c||this;b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",m);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:A,get:f,exp:e||a,eq:!!d};c=null;G(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);z(this,1);return function(){0<=ab(k,l)&&z(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=
!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});p(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!r(e)){if(K(e))if(Aa(e))for(f!==
n&&(f=n,p=f.length=0,l++),a=e.length,p!==a&&(l++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},p=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(p++,f[b]=g,l++));if(p>a)for(b in l++,f)sa.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=h(a,c),n=[],q={},J=!0,p=0;return this.$watch(m,function(){J?(J=!1,b(e,e,d)):b(e,g,d);if(k)if(K(e))if(Aa(e)){g=
Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,n,p,z,y=b,t,r=[],Q,x;J("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),q());c=null;do{z=!1;for(t=this;s.length;){try{x=s.shift(),x.scope.$eval(x.expression,x.locals)}catch(u){g(u)}c=null}a:do{if(n=t.$$watchers)for(p=n.length;p--;)try{if(a=n[p])if(m=a.get,(f=m(t))!==(h=a.last)&&!(a.eq?la(f,h):"number"===typeof f&&"number"===typeof h&&
isNaN(f)&&isNaN(h)))z=!0,c=a,a.last=a.eq?Na(f,null):f,l=a.fn,l(f,h===A?f:h,t),5>y&&(Q=4-y,r[Q]||(r[Q]=[]),r[Q].push({msg:G(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){z=!1;break a}}catch(v){g(v)}if(!(n=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(n=t.$$nextSibling);)t=t.$parent}while(t=n);if((z||s.length)&&!y--)throw w.$$phase=null,d("infdig",b,r);}while(z||s.length);for(w.$$phase=null;F.length;)try{F.shift()()}catch(D){g(D)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();z(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||s.length||k.defer(function(){s.length&&w.$digest()});s.push({scope:this,expression:h(a),locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{J("$apply");try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&Q.push(b);a=h(a);y()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},k=bb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){g(n)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=bb([e],arguments,1),h,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new n,s=w.$$asyncQueue=[],F=w.$$postDigestQueue=[],Q=w.$$applyAsyncQueue=[];return w}]}function le(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=xa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ig(a){if("self"===a)return a;if(H(a)){if(-1<a.indexOf("***"))throw za("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(La(a))return new RegExp("^"+a.source+"$");throw za("imatcher");}function wd(a){var b=[];u(a)&&p(a,function(a){b.push(ig(a))});
return b}function wf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw za("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw za("icontext",a,b);if(null===b||r(b)||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||r(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof
g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=xa(e.toString()),n,p,z=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){z=!0;break}if(z)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){z=!1;break}if(z)return e;throw za("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw za("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function vf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&
8>Ha)throw za("iequirks");var c=fa(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Za);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(ka,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+
d)]=function(b){return g(a,b)}});return c}]}function xf(){this.$get=["$window","$document",function(a,b){var d={},c=ca((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,m=!1,l=!1;if(k){for(var n in k)if(m=h.exec(n)){g=m[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||g+"Transition"in k);l=!!("animation"in k||g+"Animation"in
k);!c||m&&l||(m=H(k.webkitTransition),l=H(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(r(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ca(),vendorPrefix:g,transitions:m,animations:l,android:c}}]}function zf(){this.$get=["$templateCache","$http","$q","$sce",function(a,b,d,c){function e(f,g){e.totalPendingRequests++;if(!H(f)||r(a.get(f)))f=c.getTrustedResourceUrl(f);var h=b.defaults&&b.defaults.transformResponse;
L(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ga("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function Af(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=
da.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Bf(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,m){G(f)||(m=k,k=f,f=v);var l=ta.call(arguments,3),n=u(m)&&!m,p=(n?c:d).defer(),z=p.promise,t;t=b.defer(function(){try{p.resolve(f.apply(null,l))}catch(b){p.reject(b),e(b)}finally{delete g[z.$$timeoutId]}n||a.$apply()},k);z.$$timeoutId=t;g[t]=p;return z}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}
function xa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function gd(a){a=H(a)?xa(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function Cf(){this.$get=ma(R)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,m;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(m=b(g.substring(0,k)),r(c[m])&&(c[m]=b(g.substring(k+1))));return c}}function Gf(){this.$get=yd}function Jc(a){function b(d,c){if(K(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);
b("filter",jg);b("json",kg);b("limitTo",lg);b("lowercase",mg);b("number",Bd);b("orderBy",Cd);b("uppercase",ng)}function jg(){return function(a,b,d){if(!Aa(a)){if(null==a)return a;throw B("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=og(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function og(a,b,d){var c=K(a)&&"$"in a;!0===b?b=la:G(b)||(b=function(a,b){if(r(a))return!1;if(null===
a||null===b)return a===b;if(K(b)||K(a)&&!qc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!K(e)?Ja(e,a.$,b,!1):Ja(e,a,b,d)}}function Ja(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ja(a,b.substring(1),d,c);if(L(a))return a.some(function(a){return Ja(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ja(a[h],b,d,!0))return!0;return e?!1:Ja(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!G(e)&&!r(e)&&
(f="$"===h,!Ja(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){r(c)&&(c=b.CURRENCY_SYM);r(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function pg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==ic;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==ic;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function qg(a,b,d,c){var e=a.d,f=e.length-a.i;b=r(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d)e.splice(d);else{a.i=1;e.length=d=b+1;for(var g=0;g<d;g++)e[g]=
0}for(5<=c&&e[d-1]++;f<b;f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Dd(a,b,d,c,e){if(!H(a)&&!P(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=pg(h);qg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Gb(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a=ic+a;d&&(a=a.substr(a.length-b));return c+a}function ba(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=rb(b?"SHORT"+
a:a);return c[f][e]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ca(b[9]+
b[10]),g=ca(b[9]+b[11]));h.call(a,ca(b[1]),ca(b[2])-1,ca(b[3]));f=ca(b[4]||0)-f;g=ca(b[5]||0)-g;h=ca(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,m;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;H(c)&&(c=rg.test(c)?ca(c):b(c));P(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;d;)(m=sg.exec(d))?(h=bb(h,
m,1),d=h.pop()):(h.push(d),d=null);var l=c.getTimezoneOffset();f&&(l=vc(f,l),c=Pb(c,f,!0));p(h,function(b){k=tg[b];g+=k?k(c,a.DATETIME_FORMATS,l):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function kg(){return function(a,b){r(b)&&(b=2);return cb(a,b)}}function lg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ca(b);if(isNaN(b))return a;P(a)&&(a=a.toString());if(!L(a)&&!H(a))return a;d=!d||isNaN(d)?0:ca(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,
d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Za;if(G(b))h=b;else if(H(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!Aa(a))return a;L(e)||(e=[e]);0===
e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],
f=b.predicateValues[d],p=0;c.type===f.type?c.value!==f.value&&(p=c.value<f.value?-1:1):p=c.type<f.type?-1:1;if(c=p*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ka(a){G(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Id(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=x;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){p(g,
function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){p(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];p(f.$pending,function(b,c){f.$setValidity(c,null,a)});p(f.$error,function(b,c){f.$setValidity(c,null,a)});p(f.$$success,function(b,c){f.$setValidity(c,
null,a)});ab(g,a);a.$$parentForm=Ib};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Xa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Xa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;p(g,function(a){a.$setPristine()})};f.$setUntouched=function(){p(g,
function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function ib(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;m()})}var k,m=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||
(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",m);else{var l=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||m(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||l(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",l)}b.on("change",m);if(Kd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;
k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||m(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(ea(d))return d;if(H(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(ug.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),
sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(a,b,d,c){return function(e,f,g,h,k,m,l){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ea(a)?d(a)||x:a}Ld(e,f,g,h);ib(e,f,g,h,k,m);var z=h&&h.$options&&h.$options.timezone,t;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?
(a=d(a,t),z&&(a=Pb(a,z)),a):x});h.$formatters.push(function(a){if(a&&!ea(a))throw kb("datefmt",a);if(n(a))return(t=a)&&z&&(t=Pb(t,z,!0)),l("date")(a,c,z);t=null;return""});if(u(g.min)||g.ngMin){var A;h.$validators.min=function(a){return!n(a)||r(A)||d(a)>=A};g.$observe("min",function(a){A=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||r(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Ld(a,b,d,c){(c.$$hasNativeValidators=K(b[0].validity))&&
c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput&&!c.typeMismatch?x:a})}function Md(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw kb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(p(a,function(a){b=b.concat(e(a))}),b):H(a)?a.split(" "):K(a)?(p(a,function(a,c){a&&
(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=m(a,1);h.$addClass(a)}function m(a,b){var c=g.data("$classCounts")||Z(),d=[];p(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a,b){var e=c(b,a),f=c(a,b),e=m(e,1),f=m(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||f.$index%2===b){var c=e(a||[]);if(!r)k(c);else if(!la(a,r)){var d=e(r);l(d,
c)}}r=L(a)?a.map(function(a){return fa(a)}):fa(a)}var r;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?k(l):(g=m(l,-1),h.$removeClass(g))}})}}}]}function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(lb+a,!0===c);b(Nd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;
f[Nd]=!(f[lb]=e.hasClass(lb));c.$setValidity=function(a,e,f){r(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Od(c.$pending)&&(c.$pending=x));Ma(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Pd,!0),c.$valid=c.$invalid=x,d("",null)):(b(Pd,!1),c.$valid=Od(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?x:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,
e,c)}}function Od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var vg=/^\/(.+)\/([a-z]*)$/,M=function(a){return H(a)?a.toLowerCase():a},sa=Object.prototype.hasOwnProperty,rb=function(a){return H(a)?a.toUpperCase():a},Ha,D,pa,ta=[].slice,Xf=[].splice,wg=[].push,na=Object.prototype.toString,rc=Object.getPrototypeOf,Ba=B("ng"),da=R.angular||(R.angular={}),Sb,mb=0;Ha=U.documentMode;v.$inject=[];Za.$inject=[];var L=Array.isArray,Zd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
T=function(a){return H(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ca=function(){if(!u(Ca.rules)){var a=U.querySelector("[ng-csp]")||U.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ca.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ca;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ca.rules},
ob=function(){if(u(ob.name_))return ob.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=U.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return ob.name_=e},be=/:/g,Pa=["ng-","data-ng-","ng:","x-ng-"],ge=/[A-Z]/g,Ac=!1,Rb,Oa=3,ke={full:"1.4.14",major:1,minor:4,dot:14,codeName:"material-distinction"};S.expando="ng339";var fb=S.cache={},Mf=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var Hf=/([\:\-\_]+(.))/g,If=/^moz([A-Z])/,wb={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=B("jqLite"),Lf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Jf=/<([\w:-]+)/,Kf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;
ja.th=ja.td;var Rf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Qa=S.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===U.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),S(R).on("load",b))},toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+a])},length:0,push:wg,sort:[].sort,splice:[].splice},Bb={};p("multiple selected checked disabled readOnly required open".split(" "),
function(a){Bb[M(a)]=a});var Sc={};p("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var ad={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};p({data:Wb,removeData:ub,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1}},function(a,b){S[b]=a});p({data:Wb,inheritedData:Ab,scope:function(a){return D.data(a,"$scope")||Ab(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||
D.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Ab(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:xb,css:function(a,b,d){b=eb(b);if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c)if(c=M(b),Bb[c])if(u(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||v).specified?c:x;else if(u(d))a.setAttribute(b,d);else if(a.getAttribute)return a=
a.getAttribute(b,2),null===a?x:a},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(r(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(r(b)){if(a.multiple&&"select"===oa(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(r(b))return a.innerHTML;tb(a,!0);a.innerHTML=b},empty:Qc},function(a,b){S.prototype[b]=
function(b,c){var e,f,g=this.length;if(a!==Qc&&r(2==a.length&&a!==xb&&a!==Pc?b:c)){if(K(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=r(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:ub,on:function(a,b,d,c){if(u(c))throw Ub("onargs");if(Kc(a)){c=vb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Of(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,
h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],wb[b]?(h(wb[b],Qf),h(b,x,!0)):h(b)}},off:Oc,one:function(a,b,d){a=D(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;tb(a);p(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Mc(a,D(b).eq(0).clone()[0])},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,
b,d){b&&p(b.split(" "),function(b){var e=d;r(e)&&(e=!xb(a,b));(e?zb:yb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=vb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:f,target:a},b.type&&(c=N(c,b)),b=fa(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)r(f)?(f=a(this[g],b,c,e),u(f)&&(f=D(f))):Nc(f,a(this[g],b,c,e));return u(f)?f:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});Ta.prototype={put:function(a,
b){this[Da(a,this.nextUid)]=b},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var b=this[a=Da(a,this.nextUid)];delete this[a];return b}};var Ff=[function(){this.$get=[function(){return Ta}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,xg=/,/,yg=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=B("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw H(d)&&d||(d=a.name||Sf(a)),Ea("strictdi",d);b=a.toString().replace(Tc,
"");b=b.match(Uc);p(b[1].split(xg),function(a){a.replace(yg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Ra(a[b],"fn"),c=a.slice(0,b)):Ra(a,"fn",!0);return c};var Qd=B("$animate"),Ye=function(){this.$get=function(){}},Ze=function(){var a=new Ta,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=H(b)?b.split(" "):L(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=Tf(b.attr("class")),
e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&zb(a,e);f&&yb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,on:v,off:v,pin:v,push:function(g,h,k,m){m&&m();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,m=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),m=e(k,m,!1),h||m)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},We=["$provide",function(a){var b=this;
this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Qd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Qd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;
a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Fa(h))},move:function(e,f,g,h){f=f&&D(f);g=g&&D(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Fa(h))},leave:function(b,c){return a.push(b,"leave",Fa(c),function(){b.remove()})},
addClass:function(b,c,g){g=Fa(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Fa(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Fa(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Fa(k);k.from=k.from?N(k.from,c):c;k.to=k.to?N(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],af=
function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},$e=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===
a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:v,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Xe=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=Na(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=B("$compile");Cc.$inject=
["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Yf=B("$controller"),Zc=/^(\S+)(\s+as\s+([\w$]+))?$/,gf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},$f=/^\[|^\{(?!\{)/,ag={"[":/]$/,"{":/}$/},Zf=/^\)\]\}',?\n/,zg=B("$http"),fd=function(a){return function(){throw zg("legacy",a);}},Ia=da.$interpolateMinErr=B("$interpolate");
Ia.throwNoconcat=function(a){throw Ia("noconcat",a);};Ia.interr=function(a,b){return Ia("interr",a,b.toString())};var Ag=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,cg={http:80,https:443,ftp:21},Cb=B("$location"),Bg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(r(a))return this.$$url;var b=Ag.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),
path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(H(a)||P(a))a=a.toString(),this.$$search=xc(a);else if(K(a))a=Na(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Cb("isrcharg");break;default:r(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=
!0;return this}};p([jd,dc,cc],function(a){a.prototype=Object.create(Bg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Cb("nostate");this.$$state=r(b)?null:b;return this}});var aa=B("$parse"),dg=Function.prototype.call,eg=Function.prototype.apply,fg=Function.prototype.bind,Lb=Z();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var Cg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=
a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];
Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw aa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&
c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=
this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Cg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=
function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression=
"ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,
consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=
this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+",
"-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=Na(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(",
"[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},
parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw aa("syntax",b.text,a,b.index+1,this.text,
this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw aa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw aa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:x},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(c,d.$filter);var e="",f;this.stage="assign";
if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=od(c.body);d.stage="inputs";p(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Wa,ya,md,ld,Eb,gg,nd,a);this.state=this.stage=x;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},
generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,m,l;c=c||v;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",
this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:p(a.body,function(b,c){k.recurse(b.expression,x,x,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:l=this.escape(a.value);this.assign(b,l);c(l);break;case s.UnaryExpression:this.recurse(a.argument,x,x,function(a){h=a});l=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,l);c(l);break;case s.BinaryExpression:this.recurse(a.left,
x,x,function(a){g=a});this.recurse(a.right,x,x,function(a){h=a});l="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,l);c(l);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);
break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Wa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,x,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),l=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,l),d&&(d.computed=!0,d.name=h);else{Wa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));l=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))l=k.ensureSafeObject(l);k.assign(b,l);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),m=[],p(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);m.push(b)}),l=h+"("+m.join(",")+")",k.assign(b,l),c(b)):(h=k.nextId(),g={},m=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);p(a.arguments,function(a){k.recurse(a,k.nextId(),x,function(a){m.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),l=k.member(g.context,g.name,g.computed)+"("+m.join(",")+")"):l=h+"("+m.join(",")+")";l=k.ensureSafeObject(l);k.assign(b,l)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw aa("lval");this.recurse(a.left,x,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);l=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,l);c(b||l)})},1);break;case s.ArrayExpression:m=[];p(a.elements,function(a){k.recurse(a,k.nextId(),x,function(a){m.push(a)})});
l="["+m.join(",")+"]";this.assign(b,l);c(l);break;case s.ObjectExpression:m=[];p(a.properties,function(a){k.recurse(a.value,k.nextId(),x,function(b){m.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});l="{"+m.join(",")+"}";this.assign(b,l);c(l);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(H(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(P(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw aa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;X(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],p(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];p(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;p(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Wa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Wa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(x,n,f);return b?{context:x,name:x,value:a}:a}:function(a,
c,d,l){var n=e(a,c,d,l),p;if(null!=n.value){ya(n.context,f.expression);md(n.value,f.expression);p=[];for(var r=0;r<g.length;++r)p.push(ya(g[r](a,c,d,l),f.expression));p=ya(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,l){var n=c(a,d,g,l);a=e(a,d,g,l);ya(n.value,f.expression);Eb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],p(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:x,name:x,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:x;b&&ya(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var m=a(f,g,h,k),l,n;null!=m&&(l=b(f,g,h,k),l=ld(l),Wa(l,e),c&&1!==c&&(Eb(m),m&&!m[l]&&(m[l]={})),n=m[l],ya(n,e));return d?{context:m,name:l,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,m){g=a(g,h,k,m);e&&1!==e&&(Eb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:x;(d||Fb(b))&&ya(h,f);return c?{context:g,name:b,value:h}:
h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var hg=Object.prototype.valueOf,za=B("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=B("$compile"),Y=U.createElement("a"),
xd=xa(R.location.href);yd.$inject=["$document"];Jc.$inject=["$provide"];var Fd=22,Ed=".",ic="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var tg={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:Hb("Day"),
EEE:Hb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},sg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,rg=/^\-?\d+$/;Ad.$inject=["$locale"];var mg=ma(M),ng=ma(rb);Cd.$inject=["$parse"];var me=ma({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),sb={};p(Bb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});sb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(ad,function(a,b){sb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=va("ng-"+a);sb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Rd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Xa).addClass(lb);
var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):v;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,x),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));
d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,x);N(n,Ib)})}}}}}]},ne=Rd(),Ae=Rd(!0),ug=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Dg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Eg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Fg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Sd=/^(\d{4})-(\d{2})-(\d{2})$/,Td=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
mc=/^(\d{4})-W(\d\d)$/,Ud=/^(\d{4})-(\d\d)$/,Vd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kd=Z();p(["date","datetime-local","month","time","week"],function(a){Kd[a]=!0});var Wd={text:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c)},date:jb("date",Sd,Kb(Sd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",Td,Kb(Td,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Vd,Kb(Vd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",mc,function(a,b){if(ea(a))return a;
if(H(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:jb("month",Ud,Kb(Ud,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Ld(a,b,d,c);ib(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Fg.test(a)?parseFloat(a):x});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!P(a))throw kb("numfmt",
a);a=a.toString()}return a});if(u(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||r(g)||a>=g};d.$observe("min",function(a){u(a)&&!P(a)&&(a=parseFloat(a,10));g=P(a)&&!isNaN(a)?a:x;c.$validate()})}if(u(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||r(h)||a<=h};d.$observe("max",function(a){u(a)&&!P(a)&&(a=parseFloat(a,10));h=P(a)&&!isNaN(a)?a:x;c.$validate()})}},url:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Dg.test(d)}},email:function(a,b,d,c,e,f){ib(a,b,d,c,e,f);kc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Eg.test(d)}},radio:function(a,b,d,c){r(d.name)&&b.attr("name",++mb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Md(h,a,"ngTrueValue",d.ngTrueValue,
!0),m=Md(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:m})},hidden:v,button:v,submit:v,reset:v,file:v},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Wd[M(g.type)]||Wd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Gg=/^(true|false|\d+)$/,Se=function(){return{restrict:"A",priority:100,compile:function(a,b){return Gg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},se=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=r(a)?"":a})}}}}],ue=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=r(a)?"":a})}}}}],te=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Re=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ve=lc("",!0),xe=lc("Odd",0),we=lc("Even",1),ye=Ka({compile:function(a,b){b.$set("ngCloak",x);a.removeClass("ng-cloak")}}),ze=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},Hg={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Hg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ce=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=U.createComment(" end ngIf: "+
c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=qb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],De=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,l,n,p){var r=0,t,s,q,y=function(){s&&(s.remove(),s=null);t&&(t.$destroy(),t=null);q&&
(d.leave(q).then(function(){s=null}),s=q,q=null)};c.$watch(f,function(f){var l=function(){!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(l)});t=b;q=a;t.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],Ue=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,U).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ee=Ka({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Qe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!r(a)){var b=
[];a&&p(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){return L(a)?a.join(e):x});c.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Nd="ng-invalid",Xa="ng-pristine",Jb="ng-dirty",Pd="ng-pending",kb=B("ngModel"),Ig=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=x;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=x;this.$name=m(d.name||"",!1)(a);this.$$parentForm=Ib;var l=e(d.ngModel),n=l.assign,s=l,z=n,t=null,A,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");s=function(a){var c=l(a);G(c)&&(c=b(a));return c};z=function(a,
b){G(l(a))?f(a,{$$$p:q.$modelValue}):n(a,q.$modelValue)}}else if(!l.assign)throw kb("nonassign",d.ngModel,ua(c));};this.$render=v;this.$isEmpty=function(a){return r(a)||""===a||null===a||a!==a};var y=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Xa)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Xa);f.addClass(c,Jb);q.$$parentForm.$setDirty()};
this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!P(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,
function(e){d||b===e||(q.$modelValue=e?a:x,q.$modelValue!==c&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;p(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(p(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!G(h.then))throw kb("nopromise",h);f(g,x);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},
v):g(!0)}function f(a,b){h===y&&q.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=q.$$parserName||"parse";if(r(A))f(a,null);else return A||(p(q.$validators,function(a,b){f(b,null)}),p(q.$asyncValidators,function(a,b){f(b,null)})),f(a,A),A;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;if(A=r(b)?x:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),r(b)){A=!1;break}P(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=s(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:x,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=
function(){z(a,q.$modelValue);p(q.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&u(d.debounce)&&(d=d.debounce,P(d)?c=d:P(d[b])?c=d[b]:P(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=
s(a);if(b!==q.$modelValue&&(q.$modelValue===q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;A=x;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,v))}return b})}],Pe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ig,priority:1,compile:function(b){b.addClass(Xa).addClass("ng-untouched").addClass(lb);return{pre:function(a,b,e,f){var g=
f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Jg=/(\s+|^)default(\s+|$)/,
Te=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Na(a.$eval(b.ngModelOptions));u(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(Jg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Fe=Ka({terminal:!0,priority:1E3}),Kg=B("ngOptions"),Lg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ne=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function m(a){var b;if(!p&&Aa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var l=a.match(Lg);if(!l)throw Kg("iexp",a,ua(c));var n=l[5]||l[7],p=l[6];a=/ as /.test(l[0])&&l[1];var r=l[9];c=b(l[2]?l[1]:n);var t=a&&b(a)||c,s=r&&b(r),q=r?function(a,b){return s(d,b)}:function(a){return Da(a)},y=function(a,
b){return q(a,C(a,b))},w=b(l[2]||l[1]),x=b(l[3]||""),F=b(l[4]||""),u=b(l[8]),v={},C=p?function(a,b){v[p]=b;v[n]=a;return v}:function(a){v[n]=a;return v};return{trackBy:r,getTrackByValue:y,getWatchables:b(u,function(a){var b=[];a=a||[];for(var c=m(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=C(a[g],g),g=q(a[g],k);b.push(g);if(l[2]||l[1])g=w(d,k),b.push(g);l[4]&&(k=F(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=u(d)||[],f=m(c),g=f.length,l=0;l<g;l++){var n=c===f?l:f[l],p=
C(c[n],n),s=t(d,p),n=q(s,p),v=w(d,p),A=x(d,p),p=F(d,p),s=new e(n,s,v,A,p);a.push(s);b[n]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return r?da.copy(a.viewValue):a.viewValue}}}}}var c=U.createElement("option"),e=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(b,g,h,k){function m(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function l(a,b,c,d){b&&M(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function n(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function r(a){var b=y&&y[0],c=u&&u[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||"option"===oa(a)&&""===a.value);)a=a.nextSibling;return a}function s(){var a=E&&x.readValue();E=C.getOptions();var b={},d=g[0].firstChild;F&&g.prepend(y);
d=r(d);E.items.forEach(function(a){var f,h;a.group?(f=b[a.group],f||(f=l(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=l(f.groupElement,f.currentOptionElement,"option",c),m(a,h),f.currentOptionElement=h.nextSibling):(h=l(g[0],d,"option",c),m(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){n(b[a].currentOptionElement)});n(d);t.$render();if(!t.$isEmpty(a)){var f=x.readValue();(C.trackBy||q?la(a,f):a===f)||(t.$setViewValue(f),
t.$render())}}var t=k[1];if(t){var x=k[0],q=h.multiple,y;k=0;for(var w=g.children(),v=w.length;k<v;k++)if(""===w[k].value){y=w.eq(k);break}var F=!!y,u=D(c.cloneNode(!1));u.val("?");var E,C=d(h.ngOptions,g,b);q?(t.$isEmpty=function(a){return!a||0===a.length},x.writeValue=function(a){E.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=E.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},x.readValue=function(){var a=g.val()||[],b=[];p(a,function(a){(a=E.selectValueMap[a])&&
!a.disabled&&b.push(E.getViewValueFromOption(a))});return b},C.trackBy&&b.$watchCollection(function(){if(L(t.$viewValue))return t.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){t.$render()})):(x.writeValue=function(a){var b=E.getOptionFromViewValue(a);b&&!b.disabled?(g[0].value!==b.selectValue&&(u.remove(),F||y.remove(),g[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||F?(u.remove(),F||g.prepend(y),g.val(""),y.prop("selected",
!0),y.attr("selected",!0)):(F||y.remove(),g.prepend(u),g.val("?"),u.prop("selected",!0),u.attr("selected",!0))},x.readValue=function(){var a=E.selectValueMap[g.val()];return a&&!a.disabled?(F||y.remove(),u.remove(),E.getViewValueFromOption(a)):null},C.trackBy&&b.$watch(function(){return C.getTrackByValue(t.$viewValue)},function(){t.$render()}));F?(y.remove(),a(y)(b),y.removeClass("ng-scope")):y=D(c.cloneNode(!1));s();b.$watchCollection(C.getWatchables,s)}}}}}],Ge=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var m=h.count,l=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,s=f.$eval(l)||{},x={},t=b.startSymbol(),u=b.endSymbol(),q=t+m+"-"+n+u,y=da.noop,w;p(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),s[c]=g.attr(h.$attr[b]))});p(s,function(a,d){x[d]=b(a.replace(c,q))});f.$watch(m,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-n));c===w||e&&P(w)&&isNaN(w)||(y(),
e=x[c],r(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+l),y=v,k()):y=f.$watch(e,k),w=c)})}}}],He=["$parse","$animate",function(a,b){var d=B("ngRepeat"),c=function(a,b,c,d,k,m,l){a[c]=d;k&&(a[k]=m);a.$index=b;a.$first=0===b;a.$last=b===l-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=U.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var m=k[1],l=k[2],n=k[3],r=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var s=k[3]||k[1],t=k[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw d("badident",n);var u,q,y,w,v={$id:Da};r?u=a(r):(y=function(a,b){return Da(b)},w=function(a){return a});return function(a,e,f,k,m){u&&(q=function(b,c,d){t&&(v[t]=b);v[s]=c;v.$index=
d;return u(a,v)});var r=Z();a.$watchCollection(l,function(f){var k,l,u=e[0],v,A=Z(),C,D,J,E,G,B,H;n&&(a[n]=f);if(Aa(f))G=f,l=q||y;else for(H in l=q||w,G=[],f)sa.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);C=G.length;H=Array(C);for(k=0;k<C;k++)if(D=f===G?k:G[k],J=f[D],E=l(D,J,k),r[E])B=r[E],delete r[E],A[E]=B,H[k]=B;else{if(A[E])throw p(H,function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",g,E,J);H[k]={id:E,scope:x,clone:x};A[E]=!0}for(v in r){B=r[v];E=qb(B.clone);b.leave(E);if(E[0].parentNode)for(k=0,l=E.length;k<
l;k++)E[k].$$NG_REMOVED=!0;B.scope.$destroy()}for(k=0;k<C;k++)if(D=f===G?k:G[k],J=f[D],B=H[k],B.scope){v=u;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);B.clone[0]!=v&&b.move(qb(B.clone),null,u);u=B.clone[B.clone.length-1];c(B.scope,k,s,J,t,D,C)}else m(function(a,d){B.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,u);u=e;B.clone=a;A[B.id]=B;c(B.scope,k,s,J,t,D,C)});r=A})}}}}],Ie=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Be=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Je=Ka(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ke=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],m=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var r=qb(g[c].clone);k[c].$destroy();(h[c]=a.leave(r)).then(m(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&p(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=U.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Le=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Me=Ka({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Oe=Ka({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw B("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Mg={$setViewValue:v,$render:v},Ng=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Ta;c.ngModelCtrl=Mg;c.unknownOption=D(U.createElement("option"));c.renderUnknownOption=function(b){b="? "+Da(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=v});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){if(8!==b[0].nodeType){Sa(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&
(b[0].selected=!0)}};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=x)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,m){if(e){var l;d.$observe("value",function(a){u(l)&&c.removeOption(l);l=a;c.addOption(a,b)})}else m?a.$watch(m,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Ng,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ta(a);p(b.find("option"),function(a){a.selected=u(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=
fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},re=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(u(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,
b,d,c,e)}}}}],qe=ma({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){H(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw B("ngPattern")("noregexp",
f,a,ua(b));e=a||x;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||r(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ca(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ca(a)||0;c.$validate()});
c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};R.angular.bootstrap?R.console&&console.log("WARNING: Tried to load angular more than once."):(he(),je(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,
MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",
shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;x===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),D(U).ready(function(){de(U,yc)}))})(window,document);
!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.14
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function w(s,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=s.current&&s.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=s.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(u)||u&&!a.$eval(u)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(v)}else z()}var m,n,l,u=b.autoscroll,v=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(a,d,b,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&
(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=
t.current;(w=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!v)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var g=t.current,e=p;if(w)g.params=e.params,d.copy(g.params,b),a.$broadcast("$routeUpdate",g);else if(e||g)v=!1,(t.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(u(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),d.isDefined(g)&&(e.loadedTemplateUrl=x.valueOf(g),b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==t.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,g))},function(b){e==t.current&&a.$broadcast("$routeChangeError",
e,g,b)})}function l(){var a,b;d.forEach(h,function(c,h){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=r[l-1],q=k[l];p&&q&&(m[p.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=s(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function u(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var g=a.match(/(\w+)(?:[?*])?(.*)/),
f=g[1];c.push(b[f]);c.push(g[2]||"");delete b[f]}});return c.join("")}var v=!1,p,w,t={routes:h,reload:function(){v=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;v=!1}};a.$evalAsync(function(){m(b);b.defaultPrevented||n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(u(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",
n);return t}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});q.directive("ngView",w);q.directive("ngView",A);w.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.14
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

/**
 * angular-spinner version 0.7.0
 * License: MIT.
 * Copyright (C) 2013, 2014, 2015, Uri Shaked and contributors.
 */

'format amd';

(function (root) {
	'use strict';

	function factory(angular, Spinner) {

		return angular
			.module('angularSpinner', [])

			.constant('SpinJSSpinner', Spinner)

			.provider('usSpinnerConfig', function () {
				var _config = {};

				return {
					setDefaults: function (config) {
						_config = config || _config;
					},
					$get: function () {
						return {
							config: _config
						};
					}
				};
			})

			.factory('usSpinnerService', ['$rootScope', function ($rootScope) {
				var config = {};

				config.spin = function (key) {
					$rootScope.$broadcast('us-spinner:spin', key);
				};

				config.stop = function (key) {
					$rootScope.$broadcast('us-spinner:stop', key);
				};

				return config;
			}])

			.directive('usSpinner', ['SpinJSSpinner', 'usSpinnerConfig', function (SpinJSSpinner, usSpinnerConfig) {
				return {
					scope: true,
					link: function (scope, element, attr) {
						scope.spinner = null;

						scope.key = angular.isDefined(attr.spinnerKey) ? attr.spinnerKey : false;

						scope.startActive = angular.isDefined(attr.spinnerStartActive) ?
							scope.$eval(attr.spinnerStartActive) : scope.key ?
							false : true;

						function stopSpinner() {
							if (scope.spinner) {
								scope.spinner.stop();
							}
						}

						scope.spin = function () {
							if (scope.spinner) {
								scope.spinner.spin(element[0]);
							}
						};

						scope.stop = function () {
							scope.startActive = false;
							stopSpinner();
						};

						scope.$watch(attr.usSpinner, function (options) {
							stopSpinner();

							options = options || {};
							for (var property in usSpinnerConfig.config) {
								if (options[property] === undefined) {
									options[property] = usSpinnerConfig.config[property];
								}
							}

							scope.spinner = new SpinJSSpinner(options);
							if (!scope.key || scope.startActive) {
								scope.spinner.spin(element[0]);
							}
						}, true);

						scope.$on('us-spinner:spin', function (event, key) {
							if (key === scope.key) {
								scope.spin();
							}
						});

						scope.$on('us-spinner:stop', function (event, key) {
							if (key === scope.key) {
								scope.stop();
							}
						});

						scope.$on('$destroy', function () {
							scope.stop();
							scope.spinner = null;
						});
					}
				};
			}]);
	}

	if (typeof define === 'function' && define.amd) {
		/* AMD module */
		define(['angular', 'spin.js'], factory);
	} else if (typeof module !== 'undefined' && module && module.exports) {
		/* CommonJS module */
		module.exports = factory(require('angular'), require('spin.js'));
	} else {
		/* Browser global */
		factory(root.angular, root.Spinner);
	}
}(window || global));

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

ngSoundManager.value('config', {
    'svgPath': '../dist/icons/',
    'loadSongsOnLoad': true
});

ngSoundManager.filter('humanTime',
    function () {
        return function (input) {
            function pad(d) {
                return (d < 10) ? '0' + d.toString() : d.toString();
            }

            var min = (input / 1000 / 60) << 0,
                sec = Math.round((input / 1000) % 60);

            return pad(min) + ':' + pad(sec);
        };
    }
);

ngSoundManager.factory('angularPlayer', ['$rootScope', '$timeout', 'localStorage', '$log',
    function($rootScope, $timeout, localStorage, $log) {

        var currentTrack = null,
            repeat = false,
            autoPlay = true,
            isPlaying = false,
            volume = 90,
            trackProgress = 0,
            rewindSecs = 15,
            trackLoaded = 0,
            playlist = [],
            useLocalStorage = true;

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
                            for(var i = 0; i < playlist.length; i++){
                                if(playlist[i].id === currentTrack)
                                    playlist[i].currentPosition = this.position;
                            }
                            if(useLocalStorage)
                                localStorage.set(playlist);

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
            getPlaylist: function(onLoad, key) {

                if(onLoad && useLocalStorage)
                    playlist = localStorage.get(playlist);

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
                if(useLocalStorage)
                    localStorage.set(playlist);
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
                var inArray = this.isInArray(this.getPlaylist(0), track.id);
                if(inArray === false) {
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
                if(useLocalStorage)
                    localStorage.set(playlist);
                //once all done then broadcast
                $rootScope.$broadcast('player:playlist', playlist);
                if(song === currentTrack)
                    $rootScope.$broadcast('player:removeCurrentPlaying');
            },
            initPlayTrack: function(trackId, isResume, isOnloadResume, isSongNotTriggered) {
                if(isResume !== true) {
                    //stop and unload currently playing track
                    this.stop();
                    //set new track as current track
                    this.setCurrentTrack(trackId);
                }
                if(isResume && isOnloadResume)
                    this.setCurrentTrack(trackId);

                //play it
                soundManager.play(trackId);
                $rootScope.$broadcast('track:id', trackId);

                if(isSongNotTriggered){
                    this.stop();
                    return;
                }

                var currentPosition = 0;
                for(var i = 0; i < playlist.length; i++){
                    if(playlist[i].id === trackId)
                        currentPosition = playlist[i].currentPosition;

                    playlist[i].current = (playlist[i].id === trackId) ? true : false;
                }
                if(useLocalStorage)
                    localStorage.set(playlist);

                // Set current position
                var sound = soundManager.getSoundById(this.getCurrentTrack());
                sound.setPosition(currentPosition);

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
            resetCurrentPosition: function(){
                for(var i = 0; i < playlist.length; i++){
                    if(playlist[i].current === true)
                        playlist[i].currentPosition = 0;
                }
                if(useLocalStorage)
                    localStorage.set(playlist);
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
                        if(useLocalStorage)
                            localStorage.set(playlist);
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
            },
            getRewindSecs: function() {
                return rewindSecs;
            },
            onLoadSongs: function(initializeCustom) {
                var s = this;
                if(useLocalStorage && playlist.length > 0){
                    var currentId = null;
                    for(var i = 0; i < playlist.length; i++) {
                        soundManager.createSound({
                            id: playlist[i].id,
                            url: playlist[i].url
                        });
                        if(playlist[i].current === true)
                            currentId = playlist[i].id;
                    }

                    if(currentId){

                        if(initializeCustom){
                            initializeCustom(currentId);
                        }else{
                            if(confirm('Do you want to play the previously playing show ?')){
                                s.initPlayTrack(currentId, true, true);
                            }else{
                                s.initPlayTrack(currentId, true, true, true);
                            }
                        }
                    }
                }
            }
        };
    }
]);

ngSoundManager.directive('soundManager', ['$filter', 'angularPlayer', 'config',
    function($filter, angularPlayer, config) {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                //init and load sound manager 2
                angularPlayer.init();
                scope.$on('angularPlayer:ready', function(event, data) {
                    scope.$apply(function() {
                        if(config.loadSongsOnLoad)
                            angularPlayer.onLoadSongs();
                    });
                });
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
                        scope.currentPosition = $filter('humanTime')(data);
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
                scope.playlist = angularPlayer.getPlaylist(1); //on load
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
                scope.$on('track:loaded', function(event, data) {
                    scope.$apply(function() {
                        scope.loaded = data;
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

ngSoundManager.directive('playFromPlaylist', ['angularPlayer',
    function (angularPlayer) {
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
    }
]);

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

ngSoundManager.directive('seekTrack', ['angularPlayer', '$log',
    function (angularPlayer, $log) {
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
    }
]);


ngSoundManager.directive('playMusic', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.play();
                });
            }
        };
    }
]);

ngSoundManager.directive('pauseMusic', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.pause();
                });
            }
        };
    }
]);

ngSoundManager.directive('stopMusic', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {
                element.bind('click', function (event) {
                    angularPlayer.stop();
                    angularPlayer.resetCurrentPosition();
                });
            }
        };
    }
]);

ngSoundManager.directive('nextTrack', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.nextTrack();
                });
            }
        };
    }
]);

ngSoundManager.directive('prevTrack', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                element.bind('click', function (event) {
                    angularPlayer.prevTrack();
                });
            }
        };
    }
]);

ngSoundManager.directive('muteMusic', ['angularPlayer',
    function (angularPlayer) {
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
    }
]);

ngSoundManager.directive('repeatMusic', ['angularPlayer',
    function (angularPlayer) {
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
    }
]);

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
                    var volumePrecise = (x / width) * duration;
                    var volume = Math.round(volumePrecise / 10) * 10;
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

ngSoundManager.directive('playPauseToggle', ['angularPlayer',
    function(angularPlayer) {
        return {
            restrict: "EA",
            link: function(scope, element, attrs) {

                if(attrs.hasIcon === undefined)
                    angular.forEach(element[0].children, function(value, key) {
                        if(value.hasAttribute('toggle-icon'))
                            element[0].removeChild(value);
                    });

                scope.$on('music:isPlaying', function(event, data) {
                    //update html
                    if(attrs.hasIcon === undefined){
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

ngSoundManager.factory('generateIcon', ['config',
    function(config) {
        return {
            get: function(icon) {
                var path = config.svgPath;

                return '<svg class="icon icon-' + icon + '"><use xlink:href="' + path + 'icons.svg#icon-' + icon + '"></use></svg>';
            }
        };
    }
]);

ngSoundManager.directive('icon', ['generateIcon',
    function (generateIcon) {
        return {
            restrict: "EA",
            template: function (el, attrs) {
                return generateIcon.get(attrs.icon);
            }
        };
    }
]);

ngSoundManager.directive('toggleIcon', ['generateIcon',
    function(generateIcon) {
        return {
            scope: {
              toggleIcon: '='
            },
            link: function(scope, element, attrs) {
                scope.$watch('toggleIcon', function(value) {
                    var icon = (value) ? attrs.active : attrs.inactive;
                    element.html(generateIcon.get(icon));
                });
            }
        };
    }
]);

ngSoundManager.directive('rewindMusic', ['angularPlayer',
    function (angularPlayer) {
        return {
            restrict: "EA",
            link: function (scope, element, attrs) {

                scope.rewindSeconds = angularPlayer.getRewindSecs();

                element.bind('click', function (event) {

                    var sound = soundManager.getSoundById(angularPlayer.getCurrentTrack());

                    if(sound === null)
                        return;

                    var rewindSecs = scope.rewindSeconds * 1000,
                        currentPosition = sound.position,
                        newPosition = ((currentPosition - rewindSecs) < 0) ? currentPosition - currentPosition : currentPosition - rewindSecs;

                    sound.setPosition(newPosition);
                });
            }
        };
    }
]);

ngSoundManager.factory('localStorage', [
    function() {

        var localStorageTest = function(){
            var test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch(e) {
                return false;
            }
        };

        var podcastsList = [];

        return {
            get: function(){
                if(!this.test() || !localStorage.shows || localStorage.shows.length <= 2 || localStorage.shows === 'undefined')
                    return podcastsList;

                return JSON.parse(localStorage.shows);
            },
            set: function(data){
                localStorage.setItem('shows', angular.toJson(data));
            },
            test: function(){
                return localStorageTest();
            }
        };

    }
]);
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

// svg4everybody();

//----------------------

var main = {
	listHeight: function(){
		var windowHeight = parseInt($(window).height());
		$('aside, section').css('height', windowHeight - 130);
	},
	events: function(){
		$(document).on({
			mouseenter: function () {
				$(this).find('button').show();
			},
			mouseleave: function () {
				$(this).find('button').hide();
			}
		}, 'aside li');
	}
};

$(function(){
	main.listHeight();
});

$(window).resize(function(){
	main.listHeight();
});
var podcastApp = angular.module('podcastApp', ['ngSanitize', 'ngRoute', 'podcastControllers', 'angularSoundManager', 'angularSpinner']);

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

podcastApp.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
	usSpinnerConfigProvider.setDefaults({radius:3, width:2, length: 4, lines: 11, color: '#325671'});
}]);

podcastApp.constant('configConstant', {
    'loadSongsOnLoadCustom': false
});

podcastApp.config(function ($provide) {
	$provide.decorator('config', function ($delegate) {
		$delegate.svgPath = 'assets/';
		$delegate.loadSongsOnLoad = false;
		return $delegate;
	});
});
podcastApp.directive('svgIcon', ['generateIcon', function(generateIcon) {
	return {
		template: function(elem, attr){
			return generateIcon.get(attr.svgIcon);
		}
	};
}]);
podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueShow', 'pageTitle', 'angularPlayer', 'confirmOnloadSongCustom', function ($scope, getUniqueShow, pageTitle, angularPlayer, confirmOnloadSongCustom){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShow.getItem($scope.feed.q.item, 'latest');
			pageTitle.setPodcastTitle($scope.feed.q.title);
			pageTitle.setShowTitle('');
			angularPlayer.onLoadSongs(confirmOnloadSongCustom.get);
		}
	});
}]);
podcastControllers.controller('podcastCtrl', ['$scope', '$routeParams', 'getUniqueShow', 'pageTitle', function ($scope, $routeParams, getUniqueShow, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShow.getItem($scope.feed.q.item, $routeParams.id);
			pageTitle.setShowTitle($scope.podcast.title  + ' - ');
		}
	});
}]);
podcastControllers.controller('pageCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', 'inputBox', 'checkCurrentPodcastOnLoad', 'defaultPodcasts', 'generateIcon', 'usSpinnerService', 'pageTitle', 'search', 'angularPlayer', function ($scope, $timeout, $location, $routeParams, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle, inputBox, checkCurrentPodcastOnLoad, defaultPodcasts, generateIcon, usSpinnerService, pageTitle, search, angularPlayer){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	$scope.inputRssFeed = {};
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.addRss = inputBox.set(($scope.podcastsList.length) ? false : true);
	$scope.addRss = inputBox.get();

	$scope.toggleAddrssAdd = generateIcon.get('plus');
	$scope.toggleAddrssList = generateIcon.get('numbered-list');

	$scope.currentPodcastText = generateIcon.get('play');

	$scope.addRss = inputBox.get();

	var toggleAddrssBtnFn = function(){
		$scope.toggleAddrssBtn = ($scope.addRss.b) ? $scope.toggleAddrssList : $scope.toggleAddrssAdd;
	}
	toggleAddrssBtnFn();

	$scope.checkFeed = function(){

		if(!$scope.inputRssFeed.url)
			return;

		usSpinnerService.spin('spinner-input');

		rssService.getRssFeed($scope.inputRssFeed.url).then(function(res){
			$scope.checkedFeed = checkFeedService.check(res, $scope.inputRssFeed.url);

			$timeout(function() {
				savePlayFeed($scope.inputRssFeed.url);
			}, 200);
		});
	};

	var getFeed = function(url){

		if(!url)
			return;

		getFeedService.set(url).then(function(){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);

			usSpinnerService.stop('spinner-input');
			// console.log($scope.feed);
		});
	};

	var loadPodcastsOnload = function(){
		if(!$scope.podcastsList.length){

			$scope.defaultPodcasts = defaultPodcasts.get;
			angular.forEach($scope.defaultPodcasts, function(value, key) {
				rssService.getRssFeed(value.url).then(function(res){
					var defaultPodcast = checkFeedService.check(res, value.url);
					if(key === 0)
						$scope.launchOnload = true;

					defaultPodcast.current = value.current;
					podcastsPlaylist.set(defaultPodcast);
				});
			});

			inputBox.set(false);
			toggleAddrssBtnFn();
		}
	}
	loadPodcastsOnload();

	$scope.$watch('launchOnload', function() {
		if($scope.podcastsList.length)
			checkCurrentPodcastOnLoad.getCurrent($scope.podcastsList).then(getFeed);
	});

	$scope.toggleAddrss = function(){
		inputBox.set(($scope.addRss.b) ? false : true);
		toggleAddrssBtnFn();
	}

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
			inputBox.set(false);
			toggleAddrssBtnFn();
			usSpinnerService.stop('spinner-input');
		});
	};

	/*********************************/
	/*********************************/
	/*********************************/
	/*********************************/

	$scope.playFeed = function(url, update){

		if(!url)
			return;

		if(!update && $scope.feed.q && $scope.feed.q.url == url)
			return;

		usSpinnerService.spin('spinner-input');

		getFeedService.set(url).then(function(res){
			$location.url('/' +  $scope.feed.q.slug);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
			usSpinnerService.stop('spinner-input');
		});
	};

	$scope.removeFeedFromList = function(url){

		podcastsPlaylist.removePodcast(url);

		// If current podcast to be removed
		if($scope.feed.q && $scope.feed.q.url == url){

			$timeout(function(){
				angular.forEach($scope.playlist, function(v, k) {
					if(v.showUrl === url)
						angularPlayer.removeSong(v.id, k);
				});
			});

			delete $scope.feed.q;
			pageTitle.setPodcastTitle($scope.pageTitleDefault);
			pageTitle.setShowTitle('');

			$location.url('/');

		}
	};

}]);
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

podcastApp.filter('highlight', function($sce) {
	return function(text, phrase) {
		if(text && phrase && phrase.length > 2)
			text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');

		return $sce.trustAsHtml(text);
	};
});

podcastApp.filter('currentOnTop', function() {

	function CustomOrder(item){
		switch(item) {
			case true:
				return 0;
			case false:
				return 1;
		}
	}

	return function(items) {
		var filtered = [];
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			return (CustomOrder(a.current) > CustomOrder(b.current) ? 1 : -1);
		});

		return filtered;
	};
});

podcastApp.filter('strLimit', ['$filter', function($filter) {
	return function(input, limit) {
		if (!input)
			return;
		if (input.length <= limit) {
			return input;
		}
		return $filter('limitTo')(input, limit) + '...';
	};
}]);

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

podcastApp.factory('inputBox', function(){
	var inputBox = {};

	return {
		get: function() {
			return inputBox;
		},
		set: function(input) {
			inputBox.b = input;
		}
	};
});
podcastApp.factory('checkCurrentPodcastOnLoad', ['$q', '$timeout', function($q, $timeout){

	var getCurrent = function(podcastsList) {
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
		getCurrent: getCurrent
	};
}]);
podcastApp.factory('checkFeedService', [function(){

	return {
		check: function(res, urlFeed) {

			if(res.status != 200)
				return;

			var channel = res.data.query.results.rss.channel;

			if(!channel.item)
				return;

			checkedFeed = {title: channel.title, author: channel.author, url: urlFeed};

			return checkedFeed;
		}
	};
}]);
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
podcastApp.factory('getUniqueShow', [function(){

	return {
		getItem: function(data, id) {
			if(!data)
				return;

			for (var i = 0; i < data.length - 1; i++) {

				if(id == 'latest'){
					return data[0];
				}

				if(id == data[i].id){
					return data[i];
				}
			}
		}
	};
}]);
podcastApp.factory('localStorageHandler', ['defaultPodcasts', 'checkFeedService', 'rssService', function(defaultPodcasts, checkFeedService, rssService){

	var podcastsList = [];

	return {
		getOnLoad: function(){

			if(!this.test())
				return podcastsList;

			if(!localStorage.feeds || localStorage.feeds.length <= 2)
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

podcastApp.factory('prepareFeedService', ['constants', function(constants){

	var imgDefault = constants.imgDefault();

	return {
		getFeed: function(feedData, url) {
			var feed = feedData;
				feed.url = url;
				feed.slug = slug(feed.title);

				if(feed.image){
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
				}

				if(!feed.item.length){
					var tempItem = feed.item;
					feed.item = [];
					feed.item.push(tempItem);
				}
				angular.forEach(feed.item, function(item, i){

					feed.item[i].showUrl = url;
					feed.item[i].artist = feed.title;
					feed.item[i].date = Date.parse(feed.item[i].pubDate);
					feed.item[i].url = feed.item[i].enclosure.url;
					var podRouteTemp = feed.item[i].url.split('/'),
						podRoute = podRouteTemp.slice(-1)[0];
					feed.item[i].route = podRoute.split('.')[0];
					feed.item[i].id = 'id-' + feed.item[i].route + '-' + i;
					feed.item[i].idc = feed.item[i].route + '-' + new Date(feed.item[i].pubDate).getTime();
					if(feed.item[i].encoded)
						feed.item[i].description = feed.item[i].encoded;
					feed.item[i].titleauthor = feed.item[i].title + ' - ' + feed.item[i].artist;
				});

			return feed;
		}
	};
}]);
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
podcastApp.factory('defaultPodcasts', ['$q', function($q){

	var defaultShows = [
		{
			"url":"http://feeds.5by5.tv/bigwebshow",
			"current":true
		},
		{
			"url":"atp.fm/episodes?format=rss",
			"current":false
		}
	];

	return {
		get: defaultShows
	};
}]);
podcastApp.factory('confirmOnloadSongCustom', ['configConstant', 'angularPlayer', function(configConstant, angularPlayer){

	var isEventOnLoad = true;

	var checkLoadingOnload = function(){
		var notificationMarkup = '<div class="notification-box">';
			notificationMarkup += '<h3>Do you want to resume your last show?</h3>';
			notificationMarkup += '<button data-action="true">Yes</button>';
			notificationMarkup += '<button data-action="false">No</button>';
			notificationMarkup += '</div>';
			notificationMarkup += '<div class="overlay"></div>';

		$('body').prepend(notificationMarkup);
		setTimeout(function(){
			$('.notification-box').addClass('open');
			$('.overlay').addClass('open');
		}, 50);
	};

	return {
		get: function(currentId) {
			if(configConstant.loadSongsOnLoadCustom && isEventOnLoad){

				setTimeout(function(){
					checkLoadingOnload();
				}, 200);

				$(document).on('click', '.notification-box button', function(e){
					e.preventDefault();
					var isPlayOnLoad = $(this).attr('data-action');

					if(isPlayOnLoad == 'true'){
						angularPlayer.initPlayTrack(currentId, true, true);
					}else{
						angularPlayer.initPlayTrack(currentId, true, true, true);
					}

					$('.notification-box').removeClass('open');
					$('.overlay').removeClass('open');
				});

				isEventOnLoad = false;
			}
		}
	};
}]);