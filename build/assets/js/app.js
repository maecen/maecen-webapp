/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,f,C){'use strict';function D(t,e){e=e||{};f.forEach(e,function(f,k){delete e[k]});for(var k in t)!t.hasOwnProperty(k)||"$"===k.charAt(0)&&"$"===k.charAt(1)||(e[k]=t[k]);return e}var y=f.$$minErr("$resource"),B=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;f.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,e=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(k,F){function w(f,g){this.template=f;this.defaults=r({},e.defaults,g);this.urlParams={}}function z(l,g,s,h){function c(a,q){var c={};q=r({},g,q);u(q,function(b,q){x(b)&&(b=b());var m;if(b&&b.charAt&&"@"==b.charAt(0)){m=a;var d=b.substr(1);if(null==d||""===d||"hasOwnProperty"===d||!B.test("."+d))throw y("badmember",d);for(var d=d.split("."),n=0,g=d.length;n<g&&f.isDefined(m);n++){var e=d[n];m=null!==m?m[e]:C}}else m=b;c[q]=m});return c}function G(a){return a.resource}
function d(a){D(a||{},this)}var t=new w(l,h);s=r({},e.defaults.actions,s);d.prototype.toJSON=function(){var a=r({},this);delete a.$promise;delete a.$resolved;return a};u(s,function(a,q){var g=/^(POST|PUT|PATCH)$/i.test(a.method);d[q]=function(b,A,m,e){var n={},h,l,s;switch(arguments.length){case 4:s=e,l=m;case 3:case 2:if(x(A)){if(x(b)){l=b;s=A;break}l=A;s=m}else{n=b;h=A;l=m;break}case 1:x(b)?l=b:g?h=b:n=b;break;case 0:break;default:throw y("badargs",arguments.length);}var w=this instanceof d,p=w?
h:a.isArray?[]:new d(h),v={},z=a.interceptor&&a.interceptor.response||G,B=a.interceptor&&a.interceptor.responseError||C;u(a,function(a,b){switch(b){default:v[b]=H(a);break;case "params":case "isArray":case "interceptor":break;case "timeout":v[b]=a}});g&&(v.data=h);t.setUrlParams(v,r({},c(h,a.params||{}),n),a.url);n=k(v).then(function(b){var c=b.data,m=p.$promise;if(c){if(f.isArray(c)!==!!a.isArray)throw y("badcfg",q,a.isArray?"array":"object",f.isArray(c)?"array":"object",v.method,v.url);a.isArray?
(p.length=0,u(c,function(b){"object"===typeof b?p.push(new d(b)):p.push(b)})):(D(c,p),p.$promise=m)}p.$resolved=!0;b.resource=p;return b},function(b){p.$resolved=!0;(s||E)(b);return F.reject(b)});n=n.then(function(b){var a=z(b);(l||E)(a,b.headers);return a},B);return w?n:(p.$promise=n,p.$resolved=!1,p)};d.prototype["$"+q]=function(b,a,c){x(b)&&(c=a,a=b,b={});b=d[q].call(this,b,this,a,c);return b.$promise||b}});d.bind=function(a){return z(l,r({},g,a),s)};return d}var E=f.noop,u=f.forEach,r=f.extend,
H=f.copy,x=f.isFunction;w.prototype={setUrlParams:function(l,g,e){var h=this,c=e||h.template,k,d,r="",a=h.urlParams={};u(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw y("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]=!0)});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){r=a;return""});g=g||{};u(h.urlParams,function(a,e){k=g.hasOwnProperty(e)?g[e]:h.defaults[e];f.isDefined(k)&&null!==k?(d=encodeURIComponent(k).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(b,a){return d+a})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});h.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");l.url=r+c.replace(/\/\\\./,"/.");u(g,function(a,c){h.urlParams[c]||(l.params=l.params||{},l.params[c]=
a)})}};return z}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*!
 * angular-translate - v2.8.1 - 2015-10-01
 * 
 * Copyright (c) 2015 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return b()}):"object"==typeof exports?module.exports=b():b()}(this,function(){function a(a){"use strict";var b=a.storageKey(),c=a.storage(),d=function(){var d=a.preferredLanguage();angular.isString(d)?a.use(d):c.put(b,a.use())};d.displayName="fallbackFromIncorrectStorageValue",c?c.get(b)?a.use(c.get(b))["catch"](d):d():angular.isString(a.preferredLanguage())&&a.use(a.preferredLanguage())}function b(){"use strict";var a,b,c=null,d=!1,e=!1;b={sanitize:function(a,b){return"text"===b&&(a=g(a)),a},escape:function(a,b){return"text"===b&&(a=f(a)),a},sanitizeParameters:function(a,b){return"params"===b&&(a=h(a,g)),a},escapeParameters:function(a,b){return"params"===b&&(a=h(a,f)),a}},b.escaped=b.escapeParameters,this.addStrategy=function(a,c){return b[a]=c,this},this.removeStrategy=function(a){return delete b[a],this},this.useStrategy=function(a){return d=!0,c=a,this},this.$get=["$injector","$log",function(f,g){var h={},i=function(a,c,d){return angular.forEach(d,function(d){if(angular.isFunction(d))a=d(a,c);else if(angular.isFunction(b[d]))a=b[d](a,c);else{if(!angular.isString(b[d]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+d+"'");if(!h[b[d]])try{h[b[d]]=f.get(b[d])}catch(e){throw h[b[d]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+d+"'")}a=h[b[d]](a,c)}}),a},j=function(){d||e||(g.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),e=!0)};return f.has("$sanitize")&&(a=f.get("$sanitize")),{useStrategy:function(a){return function(b){a.useStrategy(b)}}(this),sanitize:function(a,b,d){if(c||j(),arguments.length<3&&(d=c),!d)return a;var e=angular.isArray(d)?d:[d];return i(a,b,e)}}}];var f=function(a){var b=angular.element("<div></div>");return b.text(a),b.html()},g=function(b){if(!a)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return a(b)},h=function(a,b){if(angular.isObject(a)){var c=angular.isArray(a)?[]:{};return angular.forEach(a,function(a,d){c[d]=h(a,b)}),c}return angular.isNumber(a)?a:b(a)}}function c(a,b,c,d){"use strict";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t={},u=[],v=a,w=[],x="translate-cloak",y=!1,z=!1,A=".",B=!1,C=0,D=!0,E="default",F={"default":function(a){return(a||"").split("-").join("_")},java:function(a){var b=(a||"").split("-").join("_"),c=b.split("_");return c.length>1?c[0].toLowerCase()+"_"+c[1].toUpperCase():b},bcp47:function(a){var b=(a||"").split("_").join("-"),c=b.split("-");return c.length>1?c[0].toLowerCase()+"-"+c[1].toUpperCase():b}},G="2.8.1",H=function(){if(angular.isFunction(d.getLocale))return d.getLocale();var a,c,e=b.$get().navigator,f=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(e.languages))for(a=0;a<e.languages.length;a++)if(c=e.languages[a],c&&c.length)return c;for(a=0;a<f.length;a++)if(c=e[f[a]],c&&c.length)return c;return null};H.displayName="angular-translate/service: getFirstBrowserLanguage";var I=function(){var a=H()||"";return F[E]&&(a=F[E](a)),a};I.displayName="angular-translate/service: getLocale";var J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K=function(){return this.toString().replace(/^\s+|\s+$/g,"")},L=function(a){for(var b=[],c=angular.lowercase(a),d=0,e=u.length;e>d;d++)b.push(angular.lowercase(u[d]));if(J(b,c)>-1)return a;if(f){var g;for(var h in f){var i=!1,j=Object.prototype.hasOwnProperty.call(f,h)&&angular.lowercase(h)===angular.lowercase(a);if("*"===h.slice(-1)&&(i=h.slice(0,-1)===a.slice(0,h.length-1)),(j||i)&&(g=f[h],J(b,angular.lowercase(g))>-1))return g}}if(a){var k=a.split("_");if(k.length>1&&J(b,angular.lowercase(k[0]))>-1)return k[0]}return a},M=function(a,b){if(!a&&!b)return t;if(a&&!b){if(angular.isString(a))return t[a]}else angular.isObject(t[a])||(t[a]={}),angular.extend(t[a],N(b));return this};this.translations=M,this.cloakClassName=function(a){return a?(x=a,this):x},this.nestedObjectDelimeter=function(a){return a?(A=a,this):A};var N=function(a,b,c,d){var e,f,g,h;b||(b=[]),c||(c={});for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h=a[e],angular.isObject(h)?N(h,b.concat(e),c,e):(f=b.length?""+b.join(A)+A+e:e,b.length&&e===d&&(g=""+b.join(A),c[g]="@:"+f),c[f]=h));return c};N.displayName="flatObject",this.addInterpolation=function(a){return w.push(a),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(a){return n=a,this},this.useSanitizeValueStrategy=function(a){return c.useStrategy(a),this},this.preferredLanguage=function(a){return a?(O(a),this):e};var O=function(a){return a&&(e=a),e};this.translationNotFoundIndicator=function(a){return this.translationNotFoundIndicatorLeft(a),this.translationNotFoundIndicatorRight(a),this},this.translationNotFoundIndicatorLeft=function(a){return a?(q=a,this):q},this.translationNotFoundIndicatorRight=function(a){return a?(r=a,this):r},this.fallbackLanguage=function(a){return P(a),this};var P=function(a){return a?(angular.isString(a)?(h=!0,g=[a]):angular.isArray(a)&&(h=!1,g=a),angular.isString(e)&&J(g,e)<0&&g.push(e),this):h?g[0]:g};this.use=function(a){if(a){if(!t[a]&&!o)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+a+"'");return i=a,this}return i};var Q=function(a){return a?(v=a,this):l?l+v:v};this.storageKey=Q,this.useUrlLoader=function(a,b){return this.useLoader("$translateUrlLoader",angular.extend({url:a},b))},this.useStaticFilesLoader=function(a){return this.useLoader("$translateStaticFilesLoader",a)},this.useLoader=function(a,b){return o=a,p=b||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(a){return k=a,this},this.storagePrefix=function(a){return a?(l=a,this):a},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(a){return m=a,this},this.usePostCompiling=function(a){return y=!!a,this},this.forceAsyncReload=function(a){return z=!!a,this},this.uniformLanguageTag=function(a){return a?angular.isString(a)&&(a={standard:a}):a={},E=a.standard,this},this.determinePreferredLanguage=function(a){var b=a&&angular.isFunction(a)?a():I();return e=u.length?L(b):b,this},this.registerAvailableLanguageKeys=function(a,b){return a?(u=a,b&&(f=b),this):u},this.useLoaderCache=function(a){return a===!1?s=void 0:a===!0?s=!0:"undefined"==typeof a?s="$translationCache":a&&(s=a),this},this.directivePriority=function(a){return void 0===a?C:(C=a,this)},this.statefulFilter=function(a){return void 0===a?D:(D=a,this)},this.$get=["$log","$injector","$rootScope","$q",function(a,b,c,d){var f,l,u,E=b.get(n||"$translateDefaultInterpolation"),F=!1,H={},I={},R=function(a,b,c,h){if(angular.isArray(a)){var j=function(a){for(var e={},f=[],g=function(a){var f=d.defer(),g=function(b){e[a]=b,f.resolve([a,b])};return R(a,b,c,h).then(g,g),f.promise},i=0,j=a.length;j>i;i++)f.push(g(a[i]));return d.all(f).then(function(){return e})};return j(a)}var m=d.defer();a&&(a=K.apply(a));var n=function(){var a=e?I[e]:I[i];if(l=0,k&&!a){var b=f.get(v);if(a=I[b],g&&g.length){var c=J(g,b);l=0===c?1:0,J(g,e)<0&&g.push(e)}}return a}();if(n){var o=function(){ca(a,b,c,h).then(m.resolve,m.reject)};o.displayName="promiseResolved",n["finally"](o,m.reject)}else ca(a,b,c,h).then(m.resolve,m.reject);return m.promise},S=function(a){return q&&(a=[q,a].join(" ")),r&&(a=[a,r].join(" ")),a},T=function(a){i=a,k&&f.put(R.storageKey(),i),c.$emit("$translateChangeSuccess",{language:a}),E.setLocale(i);var b=function(a,b){H[b].setLocale(i)};b.displayName="eachInterpolatorLocaleSetter",angular.forEach(H,b),c.$emit("$translateChangeEnd",{language:a})},U=function(a){if(!a)throw"No language key specified for loading.";var e=d.defer();c.$emit("$translateLoadingStart",{language:a}),F=!0;var f=s;"string"==typeof f&&(f=b.get(f));var g=angular.extend({},p,{key:a,$http:angular.extend({},{cache:f},p.$http)}),h=function(b){var d={};c.$emit("$translateLoadingSuccess",{language:a}),angular.isArray(b)?angular.forEach(b,function(a){angular.extend(d,N(a))}):angular.extend(d,N(b)),F=!1,e.resolve({key:a,table:d}),c.$emit("$translateLoadingEnd",{language:a})};h.displayName="onLoaderSuccess";var i=function(a){c.$emit("$translateLoadingError",{language:a}),e.reject(a),c.$emit("$translateLoadingEnd",{language:a})};return i.displayName="onLoaderError",b.get(o)(g).then(h,i),e.promise};if(k&&(f=b.get(k),!f.get||!f.put))throw new Error("Couldn't use storage '"+k+"', missing get() or put() method!");if(w.length){var V=function(a){var c=b.get(a);c.setLocale(e||i),H[c.getInterpolationIdentifier()]=c};V.displayName="interpolationFactoryAdder",angular.forEach(w,V)}var W=function(a){var b=d.defer();if(Object.prototype.hasOwnProperty.call(t,a))b.resolve(t[a]);else if(I[a]){var c=function(a){M(a.key,a.table),b.resolve(a.table)};c.displayName="translationTableResolver",I[a].then(c,b.reject)}else b.reject();return b.promise},X=function(a,b,c,e){var f=d.defer(),g=function(d){if(Object.prototype.hasOwnProperty.call(d,b)){e.setLocale(a);var g=d[b];"@:"===g.substr(0,2)?X(a,g.substr(2),c,e).then(f.resolve,f.reject):f.resolve(e.interpolate(d[b],c)),e.setLocale(i)}else f.reject()};return g.displayName="fallbackTranslationResolver",W(a).then(g,f.reject),f.promise},Y=function(a,b,c,d){var e,f=t[a];if(f&&Object.prototype.hasOwnProperty.call(f,b)){if(d.setLocale(a),e=d.interpolate(f[b],c),"@:"===e.substr(0,2))return Y(a,e.substr(2),c,d);d.setLocale(i)}return e},Z=function(a,c){if(m){var d=b.get(m)(a,i,c);return void 0!==d?d:a}return a},$=function(a,b,c,e,f){var h=d.defer();if(a<g.length){var i=g[a];X(i,b,c,e).then(h.resolve,function(){$(a+1,b,c,e,f).then(h.resolve)})}else f?h.resolve(f):h.resolve(Z(b,c));return h.promise},_=function(a,b,c,d){var e;if(a<g.length){var f=g[a];e=Y(f,b,c,d),e||(e=_(a+1,b,c,d))}return e},aa=function(a,b,c,d){return $(u>0?u:l,a,b,c,d)},ba=function(a,b,c){return _(u>0?u:l,a,b,c)},ca=function(a,b,c,e){var f=d.defer(),h=i?t[i]:t,j=c?H[c]:E;if(h&&Object.prototype.hasOwnProperty.call(h,a)){var k=h[a];"@:"===k.substr(0,2)?R(k.substr(2),b,c,e).then(f.resolve,f.reject):f.resolve(j.interpolate(k,b))}else{var l;m&&!F&&(l=Z(a,b)),i&&g&&g.length?aa(a,b,j,e).then(function(a){f.resolve(a)},function(a){f.reject(S(a))}):m&&!F&&l?e?f.resolve(e):f.resolve(l):e?f.resolve(e):f.reject(S(a))}return f.promise},da=function(a,b,c){var d,e=i?t[i]:t,f=E;if(H&&Object.prototype.hasOwnProperty.call(H,c)&&(f=H[c]),e&&Object.prototype.hasOwnProperty.call(e,a)){var h=e[a];d="@:"===h.substr(0,2)?da(h.substr(2),b,c):f.interpolate(h,b)}else{var j;m&&!F&&(j=Z(a,b)),i&&g&&g.length?(l=0,d=ba(a,b,f)):d=m&&!F&&j?j:S(a)}return d},ea=function(a){j===a&&(j=void 0),I[a]=void 0};R.preferredLanguage=function(a){return a&&O(a),e},R.cloakClassName=function(){return x},R.nestedObjectDelimeter=function(){return A},R.fallbackLanguage=function(a){if(void 0!==a&&null!==a){if(P(a),o&&g&&g.length)for(var b=0,c=g.length;c>b;b++)I[g[b]]||(I[g[b]]=U(g[b]));R.use(R.use())}return h?g[0]:g},R.useFallbackLanguage=function(a){if(void 0!==a&&null!==a)if(a){var b=J(g,a);b>-1&&(u=b)}else u=0},R.proposedLanguage=function(){return j},R.storage=function(){return f},R.use=function(a){if(!a)return i;var b=d.defer();c.$emit("$translateChangeStart",{language:a});var e=L(a);return e&&(a=e),!z&&t[a]||!o||I[a]?j===a&&I[a]?I[a].then(function(a){return b.resolve(a.key),a},function(a){return b.reject(a),d.reject(a)}):(b.resolve(a),T(a)):(j=a,I[a]=U(a).then(function(c){return M(c.key,c.table),b.resolve(c.key),j===a&&T(c.key),c},function(a){return c.$emit("$translateChangeError",{language:a}),b.reject(a),c.$emit("$translateChangeEnd",{language:a}),d.reject(a)}),I[a]["finally"](function(){ea(a)})),b.promise},R.storageKey=function(){return Q()},R.isPostCompilingEnabled=function(){return y},R.isForceAsyncReloadEnabled=function(){return z},R.refresh=function(a){function b(){f.resolve(),c.$emit("$translateRefreshEnd",{language:a})}function e(){f.reject(),c.$emit("$translateRefreshEnd",{language:a})}if(!o)throw new Error("Couldn't refresh translation table, no loader registered!");var f=d.defer();if(c.$emit("$translateRefreshStart",{language:a}),a)if(t[a]){var h=function(c){M(c.key,c.table),a===i&&T(i),b()};h.displayName="refreshPostProcessor",U(a).then(h,e)}else e();else{var j=[],k={};if(g&&g.length)for(var l=0,m=g.length;m>l;l++)j.push(U(g[l])),k[g[l]]=!0;i&&!k[i]&&j.push(U(i));var n=function(a){t={},angular.forEach(a,function(a){M(a.key,a.table)}),i&&T(i),b()};n.displayName="refreshPostProcessor",d.all(j).then(n,e)}return f.promise},R.instant=function(a,b,c){if(null===a||angular.isUndefined(a))return a;if(angular.isArray(a)){for(var d={},f=0,h=a.length;h>f;f++)d[a[f]]=R.instant(a[f],b,c);return d}if(angular.isString(a)&&a.length<1)return a;a&&(a=K.apply(a));var j,k=[];e&&k.push(e),i&&k.push(i),g&&g.length&&(k=k.concat(g));for(var l=0,n=k.length;n>l;l++){var o=k[l];if(t[o]&&("undefined"!=typeof t[o][a]?j=da(a,b,c):(q||r)&&(j=S(a))),"undefined"!=typeof j)break}return j||""===j||(j=E.interpolate(a,b),m&&!F&&(j=Z(a,b))),j},R.versionInfo=function(){return G},R.loaderCache=function(){return s},R.directivePriority=function(){return C},R.statefulFilter=function(){return D},R.isReady=function(){return B};var fa=d.defer();fa.promise.then(function(){B=!0}),R.onReady=function(a){var b=d.defer();return angular.isFunction(a)&&b.promise.then(a),B?b.resolve():fa.promise.then(b.resolve),b.promise};var ga=c.$on("$translateReady",function(){fa.resolve(),ga(),ga=null}),ha=c.$on("$translateChangeEnd",function(){fa.resolve(),ha(),ha=null});if(o){if(angular.equals(t,{})&&R.use()&&R.use(R.use()),g&&g.length)for(var ia=function(a){return M(a.key,a.table),c.$emit("$translateChangeEnd",{language:a.key}),a},ja=0,ka=g.length;ka>ja;ja++){var la=g[ja];(z||!t[la])&&(I[la]=U(la).then(ia))}}else c.$emit("$translateReady",{language:R.use()});return R}]}function d(a,b){"use strict";var c,d={},e="default";return d.setLocale=function(a){c=a},d.getInterpolationIdentifier=function(){return e},d.useSanitizeValueStrategy=function(a){return b.useStrategy(a),this},d.interpolate=function(c,d){d=d||{},d=b.sanitize(d,"params");var e=a(c)(d);return e=b.sanitize(e,"text")},d}function e(a,b,c,d,e,g){"use strict";var h=function(){return this.toString().replace(/^\s+|\s+$/g,"")};return{restrict:"AE",scope:!0,priority:a.directivePriority(),compile:function(b,i){var j=i.translateValues?i.translateValues:void 0,k=i.translateInterpolation?i.translateInterpolation:void 0,l=b[0].outerHTML.match(/translate-value-+/i),m="^(.*)("+c.startSymbol()+".*"+c.endSymbol()+")(.*)",n="^(.*)"+c.startSymbol()+"(.*)"+c.endSymbol()+"(.*)";return function(b,o,p){b.interpolateParams={},b.preText="",b.postText="",b.translateNamespace=f(b);var q={},r=function(a,c,d){if(c.translateValues&&angular.extend(a,e(c.translateValues)(b.$parent)),l)for(var f in d)if(Object.prototype.hasOwnProperty.call(c,f)&&"translateValue"===f.substr(0,14)&&"translateValues"!==f){var g=angular.lowercase(f.substr(14,1))+f.substr(15);a[g]=d[f]}},s=function(a){if(angular.isFunction(s._unwatchOld)&&(s._unwatchOld(),s._unwatchOld=void 0),angular.equals(a,"")||!angular.isDefined(a)){var d=h.apply(o.text()),e=d.match(m);if(angular.isArray(e)){b.preText=e[1],b.postText=e[3],q.translate=c(e[2])(b.$parent);var f=d.match(n);angular.isArray(f)&&f[2]&&f[2].length&&(s._unwatchOld=b.$watch(f[2],function(a){q.translate=a,y()}))}else q.translate=d}else q.translate=a;y()},t=function(a){p.$observe(a,function(b){q[a]=b,y()})};r(b.interpolateParams,p,i);var u=!0;p.$observe("translate",function(a){"undefined"==typeof a?s(""):""===a&&u||(q.translate=a,y()),u=!1});for(var v in p)p.hasOwnProperty(v)&&"translateAttr"===v.substr(0,13)&&t(v);if(p.$observe("translateDefault",function(a){b.defaultText=a}),j&&p.$observe("translateValues",function(a){a&&b.$parent.$watch(function(){angular.extend(b.interpolateParams,e(a)(b.$parent))})}),l){var w=function(a){p.$observe(a,function(c){var d=angular.lowercase(a.substr(14,1))+a.substr(15);b.interpolateParams[d]=c})};for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&"translateValue"===x.substr(0,14)&&"translateValues"!==x&&w(x)}var y=function(){for(var a in q)q.hasOwnProperty(a)&&void 0!==q[a]&&z(a,q[a],b,b.interpolateParams,b.defaultText,b.translateNamespace)},z=function(b,c,d,e,f,g){c?(g&&"."===c.charAt(0)&&(c=g+c),a(c,e,k,f).then(function(a){A(a,d,!0,b)},function(a){A(a,d,!1,b)})):A(c,d,!1,b)},A=function(b,c,e,f){if("translate"===f){e||"undefined"==typeof c.defaultText||(b=c.defaultText),o.empty().append(c.preText+b+c.postText);var g=a.isPostCompilingEnabled(),h="undefined"!=typeof i.translateCompile,j=h&&"false"!==i.translateCompile;(g&&!h||j)&&d(o.contents())(c)}else{e||"undefined"==typeof c.defaultText||(b=c.defaultText);var k=p.$attr[f];"data-"===k.substr(0,5)&&(k=k.substr(5)),k=k.substr(15),o.attr(k,b)}};(j||l||p.translateDefault)&&b.$watch("interpolateParams",y,!0);var B=g.$on("$translateChangeSuccess",y);o.text().length?s(p.translate?p.translate:""):p.translate&&s(p.translate),y(),b.$on("$destroy",B)}}}}function f(a){"use strict";return a.translateNamespace?a.translateNamespace:a.$parent?f(a.$parent):void 0}function g(a){"use strict";return{compile:function(b){var c=function(){b.addClass(a.cloakClassName())},d=function(){b.removeClass(a.cloakClassName())};return a.onReady(function(){d()}),c(),function(b,e,f){f.translateCloak&&f.translateCloak.length&&f.$observe("translateCloak",function(b){a(b).then(d,c)})}}}}function h(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(a,b,c){a.translateNamespace=f(a),a.translateNamespace&&"."===c.translateNamespace.charAt(0)?a.translateNamespace+=c.translateNamespace:a.translateNamespace=c.translateNamespace}}}}}function f(a){"use strict";return a.translateNamespace?a.translateNamespace:a.$parent?f(a.$parent):void 0}function i(a,b){"use strict";var c=function(c,d,e){return angular.isObject(d)||(d=a(d)(this)),b.instant(c,d,e)};return b.statefulFilter()&&(c.$stateful=!0),c}function j(a){"use strict";return a("translations")}return angular.module("pascalprecht.translate",["ng"]).run(a),a.$inject=["$translate"],a.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",b),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",c),c.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],c.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",d),d.$inject=["$interpolate","$translateSanitization"],d.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",e),e.$inject=["$translate","$q","$interpolate","$compile","$parse","$rootScope"],e.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateCloak",g),g.$inject=["$translate"],g.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",h),h.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").filter("translate",i),i.$inject=["$parse","$translate"],i.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",j),j.$inject=["$cacheFactory"],j.displayName="$translationCache","pascalprecht.translate"});
angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){"use strict";function i(e){try{return decodeURIComponent(e)}catch(i){}}return function(){function t(t,n,r){var o,s,p,u,a,c,d,x,f;r=r||{};var g=r.decode||i,l=r.encode||encodeURIComponent;if(void 0!==n)return n="object"==typeof n?JSON.stringify(n):n+"","number"==typeof r.expires&&(f=r.expires,r.expires=new Date,-1===f?r.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==r.expirationUnit?"hours"===r.expirationUnit?r.expires.setHours(r.expires.getHours()+f):"minutes"===r.expirationUnit?r.expires.setMinutes(r.expires.getMinutes()+f):"seconds"===r.expirationUnit?r.expires.setSeconds(r.expires.getSeconds()+f):"milliseconds"===r.expirationUnit?r.expires.setMilliseconds(r.expires.getMilliseconds()+f):r.expires.setDate(r.expires.getDate()+f):r.expires.setDate(r.expires.getDate()+f)),e[0].cookie=[l(t),"=",l(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(s=[],x=e[0].cookie,x&&(s=x.split("; ")),o={},d=!1,p=0;s.length>p;++p)if(s[p]){if(u=s[p],a=u.indexOf("="),c=u.substring(0,a),n=g(u.substring(a+1)),angular.isUndefined(n))continue;if(void 0===t||t===c){try{o[c]=JSON.parse(n)}catch(m){o[c]=n}if(t===c)return o[c];d=!0}}return d&&void 0===t?o:void 0}return t.remove=function(e,i){var n=void 0!==t(e);return n&&(i||(i={}),i.expires=-1,t(e,"",i)),n},t}()}]);
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ng-token-auth"),angular.module("ng-token-auth",["ipCookie"]).provider("$auth",function(){var t,e;return t={"default":{apiUrl:"/api",signOutUrl:"/auth/sign_out",emailSignInPath:"/auth/sign_in",emailRegistrationPath:"/auth",accountUpdatePath:"/auth",accountDeletePath:"/auth",confirmationSuccessUrl:function(){return window.location.href},passwordResetPath:"/auth/password",passwordUpdatePath:"/auth/password",passwordResetSuccessUrl:function(){return window.location.href},tokenValidationPath:"/auth/validate_token",proxyIf:function(){return!1},proxyUrl:"/proxy",validateOnPageLoad:!0,omniauthWindowType:"sameWindow",storage:"cookies",tokenFormat:{"access-token":"{{ token }}","token-type":"Bearer",client:"{{ clientId }}",expiry:"{{ expiry }}",uid:"{{ uid }}"},parseExpiry:function(t){return 1e3*parseInt(t.expiry,10)||null},handleLoginResponse:function(t){return t.data},handleAccountUpdateResponse:function(t){return t.data},handleTokenValidationResponse:function(t){return t.data},authProviderPaths:{github:"/auth/github",facebook:"/auth/facebook",google:"/auth/google_oauth2"}}},e="default",{configure:function(n){var r,i,s,a,o,u,c,d,h;if(n instanceof Array&&n.length){for(a=d=0,h=n.length;h>d;a=++d){r=n[a],u=null;for(o in r)c=r[o],u=o,0===a&&(e=u);i=angular.copy(t["default"]),s={},s[u]=angular.extend(i,r[u]),angular.extend(t,s)}"default"!==e&&delete t["default"]}else{if(!(n instanceof Object))throw"Invalid argument: ng-token-auth config should be an Array or Object.";angular.extend(t["default"],n)}return t},$get:["$http","$q","$location","ipCookie","$window","$timeout","$rootScope","$interpolate",function(n){return function(r,i,s,a,o,u,c,d){return{header:null,dfd:null,user:{},mustResetPassword:!1,listener:null,initialize:function(){return this.initializeListeners(),this.cancelOmniauthInAppBrowserListeners=function(){},this.addScopeMethods()},initializeListeners:function(){return this.listener=angular.bind(this,this.handlePostMessage),o.addEventListener?o.addEventListener("message",this.listener,!1):void 0},cancel:function(t){return null!=this.requestCredentialsPollingTimer&&u.cancel(this.requestCredentialsPollingTimer),this.cancelOmniauthInAppBrowserListeners(),null!=this.dfd&&this.rejectDfd(t),u(function(t){return function(){return t.requestCredentialsPollingTimer=null}}(this),0)},destroy:function(){return this.cancel(),o.removeEventListener?o.removeEventListener("message",this.listener,!1):void 0},handlePostMessage:function(t){var e,n;return"deliverCredentials"===t.data.message&&(delete t.data.message,n=t.data.oauth_registration,delete t.data.oauth_registration,this.handleValidAuth(t.data,!0),c.$broadcast("auth:login-success",t.data),n&&c.$broadcast("auth:oauth-registration",t.data)),"authFailure"===t.data.message?(e={reason:"unauthorized",errors:[t.data.error]},this.cancel(e),c.$broadcast("auth:login-error",e)):void 0},addScopeMethods:function(){return c.user=this.user,c.authenticate=angular.bind(this,this.authenticate),c.signOut=angular.bind(this,this.signOut),c.destroyAccount=angular.bind(this,this.destroyAccount),c.submitRegistration=angular.bind(this,this.submitRegistration),c.submitLogin=angular.bind(this,this.submitLogin),c.requestPasswordReset=angular.bind(this,this.requestPasswordReset),c.updatePassword=angular.bind(this,this.updatePassword),c.updateAccount=angular.bind(this,this.updateAccount),this.getConfig().validateOnPageLoad?this.validateUser({config:this.getSavedConfig()}):void 0},submitRegistration:function(t,e){var n;return null==e&&(e={}),n=this.getResultOrValue(this.getConfig(e.config).confirmationSuccessUrl),angular.extend(t,{confirm_success_url:n,config_name:this.getCurrentConfigName(e.config)}),r.post(this.apiUrl(e.config)+this.getConfig(e.config).emailRegistrationPath,t).success(function(e){return c.$broadcast("auth:registration-email-success",t)}).error(function(t){return c.$broadcast("auth:registration-email-error",t)})},submitLogin:function(t,e){return null==e&&(e={}),this.initDfd(),r.post(this.apiUrl(e.config)+this.getConfig(e.config).emailSignInPath,t).success(function(t){return function(n){var r;return t.setConfigName(e.config),r=t.getConfig(e.config).handleLoginResponse(n,t),t.handleValidAuth(r),c.$broadcast("auth:login-success",t.user)}}(this)).error(function(t){return function(e){return t.rejectDfd({reason:"unauthorized",errors:["Invalid credentials"]}),c.$broadcast("auth:login-error",e)}}(this)),this.dfd.promise},userIsAuthenticated:function(){return this.retrieveData("auth_headers")&&this.user.signedIn&&!this.tokenHasExpired()},requestPasswordReset:function(t,e){var n;return null==e&&(e={}),n=this.getResultOrValue(this.getConfig(e.config).passwordResetSuccessUrl),t.redirect_url=n,null!=e.config&&(t.config_name=e.config),r.post(this.apiUrl(e.config)+this.getConfig(e.config).passwordResetPath,t).success(function(e){return c.$broadcast("auth:password-reset-request-success",t)}).error(function(t){return c.$broadcast("auth:password-reset-request-error",t)})},updatePassword:function(t){return r.put(this.apiUrl()+this.getConfig().passwordUpdatePath,t).success(function(t){return function(e){return c.$broadcast("auth:password-change-success",e),t.mustResetPassword=!1}}(this)).error(function(t){return c.$broadcast("auth:password-change-error",t)})},updateAccount:function(t){return r.put(this.apiUrl()+this.getConfig().accountUpdatePath,t).success(function(t){return function(e){var n,r,i,s,a,o;if(s=t.getConfig().handleAccountUpdateResponse(e),n=t.retrieveData("auth_headers"),angular.extend(t.user,s),n){i={},o=t.getConfig().tokenFormat;for(r in o)a=o[r],n[r]&&s[r]&&(i[r]=s[r]);t.setAuthHeaders(i)}return c.$broadcast("auth:account-update-success",e)}}(this)).error(function(t){return c.$broadcast("auth:account-update-error",t)})},destroyAccount:function(t){return r["delete"](this.apiUrl()+this.getConfig().accountUpdatePath,t).success(function(t){return function(e){return t.invalidateTokens(),c.$broadcast("auth:account-destroy-success",e)}}(this)).error(function(t){return c.$broadcast("auth:account-destroy-error",t)})},authenticate:function(t,e){return null==e&&(e={}),null==this.dfd&&(this.setConfigName(e.config),this.initDfd(),this.openAuthWindow(t,e)),this.dfd.promise},setConfigName:function(t){return null==t&&(t=e),this.persistData("currentConfigName",t,t)},openAuthWindow:function(t,e){var n,r;if(r=this.getConfig(e.config).omniauthWindowType,n=this.buildAuthUrl(r,t,e),"newWindow"===r)return this.requestCredentialsViaPostMessage(this.createPopup(n));if("inAppBrowser"===r)return this.requestCredentialsViaExecuteScript(this.createPopup(n));if("sameWindow"===r)return this.visitUrl(n);throw'Unsupported omniauthWindowType "#{omniauthWindowType}"'},visitUrl:function(t){return o.location.replace(t)},buildAuthUrl:function(t,e,n){var r,i,s,a;null==n&&(n={}),r=this.getConfig(n.config).apiUrl,r+=this.getConfig(n.config).authProviderPaths[e],r+="?auth_origin_url="+encodeURIComponent(o.location.href),s=angular.extend({},n.params||{},{omniauth_window_type:t});for(i in s)a=s[i],r+="&",r+=encodeURIComponent(i),r+="=",r+=encodeURIComponent(a);return r},requestCredentialsViaPostMessage:function(t){return t.closed?this.handleAuthWindowClose(t):(t.postMessage("requestCredentials","*"),this.requestCredentialsPollingTimer=u(function(e){return function(){return e.requestCredentialsViaPostMessage(t)}}(this),500))},requestCredentialsViaExecuteScript:function(t){var e,n;return this.cancelOmniauthInAppBrowserListeners(),e=this.handleAuthWindowClose.bind(this,t),n=this.handleLoadStop.bind(this,t),t.addEventListener("loadstop",n),t.addEventListener("exit",e),this.cancelOmniauthInAppBrowserListeners=function(){return t.removeEventListener("loadstop",n),t.removeEventListener("exit",e)}},handleLoadStop:function(t){return n=this,t.executeScript({code:"requestCredentials()"},function(e){var r,i;return r=e[0],r?(i=new Event("message"),i.data=r,n.cancelOmniauthInAppBrowserListeners(),o.dispatchEvent(i),n.initDfd(),t.close()):void 0})},handleAuthWindowClose:function(t){return this.cancel({reason:"unauthorized",errors:["User canceled login"]}),this.cancelOmniauthInAppBrowserListeners,c.$broadcast("auth:window-closed")},createPopup:function(t){return o.open(t,"_blank")},resolveDfd:function(){return this.dfd.resolve(this.user),u(function(t){return function(){return t.dfd=null,c.$$phase?void 0:c.$digest()}}(this),0)},buildQueryString:function(t,e){var n,r,i,s;i=[];for(r in t)s=t[r],r=e?e+"["+r+"]":r,n=angular.isObject(s)?this.buildQueryString(s,r):r+"="+encodeURIComponent(s),i.push(n);return i.join("&")},parseLocation:function(t){var e,n,r,i;i=t.substring(1).split("&"),n={},r=void 0,e=void 0;for(e in i)e=e,""!==i[e]&&(r=i[e].split("="),n[decodeURIComponent(r[0])]=decodeURIComponent(r[1]));return n},validateUser:function(t){var e,n,r,i,a,o,u,d,h;return null==t&&(t={}),n=t.config,null==this.dfd&&(this.initDfd(),this.userIsAuthenticated()?this.resolveDfd():(o=s.search(),i=this.parseLocation(window.location.search),a=0===Object.keys(o).length?i:o,u=a.auth_token||a.token,void 0!==u?(e=a.client_id,d=a.uid,r=a.expiry,n=a.config,this.setConfigName(n),this.mustResetPassword=a.reset_password,this.firstTimeLogin=a.account_confirmation_success,this.oauthRegistration=a.oauth_registration,this.setAuthHeaders(this.buildAuthHeaders({token:u,clientId:e,uid:d,expiry:r})),h=s.path()||"/",["token","client_id","uid","expiry","config","reset_password","account_confirmation_success","oauth_registration"].forEach(function(t){return delete a[t]}),Object.keys(a).length>0&&(h+="?"+this.buildQueryString(a)),s.url(h)):this.retrieveData("currentConfigName")&&(n=this.retrieveData("currentConfigName")),isEmpty(this.retrieveData("auth_headers"))?(this.rejectDfd({reason:"unauthorized",errors:["No credentials"]}),c.$broadcast("auth:invalid")):this.tokenHasExpired()?(c.$broadcast("auth:session-expired"),this.rejectDfd({reason:"unauthorized",errors:["Session expired."]})):this.validateToken({config:n}))),this.dfd.promise},validateToken:function(t){return null==t&&(t={}),this.tokenHasExpired()?this.rejectDfd({reason:"unauthorized",errors:["Expired credentials"]}):r.get(this.apiUrl(t.config)+this.getConfig(t.config).tokenValidationPath).success(function(e){return function(n){var r;return r=e.getConfig(t.config).handleTokenValidationResponse(n),e.handleValidAuth(r),e.firstTimeLogin&&c.$broadcast("auth:email-confirmation-success",e.user),e.oauthRegistration&&c.$broadcast("auth:oauth-registration",e.user),e.mustResetPassword&&c.$broadcast("auth:password-reset-confirm-success",e.user),c.$broadcast("auth:validation-success",e.user)}}(this)).error(function(t){return function(e){return t.firstTimeLogin&&c.$broadcast("auth:email-confirmation-error",e),t.mustResetPassword&&c.$broadcast("auth:password-reset-confirm-error",e),c.$broadcast("auth:validation-error",e),t.rejectDfd({reason:"unauthorized",errors:e.errors})}}(this))},tokenHasExpired:function(){var t,e;return t=this.getExpiry(),e=(new Date).getTime(),t&&e>t},getExpiry:function(){return this.getConfig().parseExpiry(this.retrieveData("auth_headers")||{})},invalidateTokens:function(){var t,e,n;n=this.user;for(t in n)e=n[t],delete this.user[t];return this.deleteData("currentConfigName"),null!=this.timer&&u.cancel(this.timer),this.deleteData("auth_headers")},signOut:function(){return r["delete"](this.apiUrl()+this.getConfig().signOutUrl).success(function(t){return function(e){return t.invalidateTokens(),c.$broadcast("auth:logout-success")}}(this)).error(function(t){return function(e){return t.invalidateTokens(),c.$broadcast("auth:logout-error",e)}}(this))},handleValidAuth:function(t,e){return null==e&&(e=!1),null!=this.requestCredentialsPollingTimer&&u.cancel(this.requestCredentialsPollingTimer),this.cancelOmniauthInAppBrowserListeners(),angular.extend(this.user,t),this.user.signedIn=!0,this.user.configName=this.getCurrentConfigName(),e&&this.setAuthHeaders(this.buildAuthHeaders({token:this.user.auth_token,clientId:this.user.client_id,uid:this.user.uid,expiry:this.user.expiry})),this.resolveDfd()},buildAuthHeaders:function(t){var e,n,r,i;e={},i=this.getConfig().tokenFormat;for(n in i)r=i[n],e[n]=d(r)(t);return e},persistData:function(t,e,n){if(this.getConfig(n).storage instanceof Object)return this.getConfig(n).storage.persistData(t,e,this.getConfig(n));switch(this.getConfig(n).storage){case"localStorage":return o.localStorage.setItem(t,JSON.stringify(e));default:return a(t,e,{path:"/",expires:9999,expirationUnit:"days"})}},retrieveData:function(t){if(this.getConfig().storage instanceof Object)return this.getConfig().storage.retrieveData(t);switch(this.getConfig().storage){case"localStorage":return JSON.parse(o.localStorage.getItem(t));default:return a(t)}},deleteData:function(t){switch(this.getConfig().storage instanceof Object&&this.getConfig().storage.deleteData(t),this.getConfig().storage){case"localStorage":return o.localStorage.removeItem(t);default:return a.remove(t,{path:"/"})}},setAuthHeaders:function(t){var e,n,r,i;return n=angular.extend(this.retrieveData("auth_headers")||{},t),i=this.persistData("auth_headers",n),e=this.getExpiry(),r=(new Date).getTime(),e>r&&(null!=this.timer&&u.cancel(this.timer),this.timer=u(function(t){return function(){return t.validateUser({config:t.getSavedConfig()})}}(this),parseInt(e-r))),i},initDfd:function(){return this.dfd=i.defer()},rejectDfd:function(t){return this.invalidateTokens(),null!=this.dfd?(this.dfd.reject(t),u(function(t){return function(){return t.dfd=null}}(this),0)):void 0},apiUrl:function(t){return this.getConfig(t).proxyIf()?this.getConfig(t).proxyUrl:this.getConfig(t).apiUrl},getConfig:function(e){return t[this.getCurrentConfigName(e)]},getResultOrValue:function(t){return"function"==typeof t?t():t},getCurrentConfigName:function(t){return t||this.getSavedConfig()},getSavedConfig:function(){var t,n,r,i;t=void 0,i="currentConfigName",r=!1;try{r=!!o.localStorage}catch(s){n=s}return r&&null==t&&(t=JSON.parse(o.localStorage.getItem(i))),null==t&&(t=a(i)),t||e}}}}(this)]}}).config(["$httpProvider",function(t){var e,n,r;return n=function(t,e){var n,r;return r=Number(t.getExpiry()),n=Number(t.getConfig().parseExpiry(e||{})),n>=r},r=function(t,e){var r,i,s,a;i={},a=t.getConfig().tokenFormat;for(r in a)s=a[r],e.headers(r)&&(i[r]=e.headers(r));return n(t,i)?t.setAuthHeaders(i):void 0},t.interceptors.push(["$injector",function(t){return{request:function(e){return t.invoke(["$http","$auth",function(t,n){var r,i,s,a;if(e.url.match(n.apiUrl())){s=n.retrieveData("auth_headers"),a=[];for(r in s)i=s[r],a.push(e.headers[r]=i);return a}}]),e},response:function(e){return t.invoke(["$http","$auth",function(t,n){return e.config.url.match(n.apiUrl())?r(n,e):void 0}]),e},responseError:function(e){return t.invoke(["$http","$auth",function(t,n){return e.config.url.match(n.apiUrl())?r(n,e):void 0}]),t.get("$q").reject(e)}}}]),e=["get","post","put","patch","delete"],angular.forEach(e,function(e){var n;return null==(n=t.defaults.headers)[e]&&(n[e]={}),t.defaults.headers[e]["If-Modified-Since"]="Mon, 26 Jul 1997 05:00:00 GMT"})}]).run(["$auth","$window","$rootScope",function(t,e,n){return t.initialize()}]),window.isOldIE=function(){var t,e,n;return e=!1,t=navigator.userAgent.toLowerCase(),t&&-1!==t.indexOf("msie")&&(n=parseInt(t.split("msie")[1]),10>n&&(e=!0)),e},window.isIE=function(){var t;return t=navigator.userAgent.toLowerCase(),t&&-1!==t.indexOf("msie")||!!navigator.userAgent.match(/Trident.*rv\:11\./)},window.isEmpty=function(t){var e,n;if(!t)return!0;if(t.length>0)return!1;if(0===t.length)return!0;for(e in t)if(n=t[e],Object.prototype.hasOwnProperty.call(t,e))return!1;return!0};
(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    // custom
    'controllers',
    'ngResource',
    'services',
    'resources',
    'filters',
    'localization',
    'ng-token-auth'
  ])


  // Setup authenticantion
  .config(function($authProvider) {
    $authProvider.configure({
        apiUrl: 'https://maecen-staging.herokuapp.com/v1',
        //apiUrl: 'http://localhost:3000/v1',
        storage: 'localStorage'
    });
  })
  // What's this?...
    .config(config)
    .run(run);

  // Setup routing
  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();

(function(){
  angular.module("controllers", ["services", "resources", "foundation.core"])

  /*=============================== SLIDEIN CONTROLLER =====================================*/
  .controller("SlideInCtrl", function($scope, $translate){
    $scope.selectedLang = "da";
    $scope.setLanguage = function(){
      console.log($scope.selectedLang);
      $translate.use($scope.selectedLang);
    };
  })

  /*=============================== REGISTRATION CONTROLLER =================================*/
  .controller('RegistrationCtrl', function($scope, $auth, Project, FoundationApi) {
    $scope.registrationForm = {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: ""
    };

    $scope.registrateUser = function(){
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log("Success!" + resp);
        })
        .catch(function(resp) {
          // handle error
          $scope.formErrors = resp.data.errors
          console.error(resp);
          FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
        });
    };

  })

/*=============================== LOGIN CONTROLLER =================================*/
  .controller('LoginCtrl', function($scope, $auth, FoundationApi) {

    $scope.loginParams = {
      email: "",
      password: ""
    };

    $scope.login = function(){
      $auth.submitLogin($scope.loginParams)
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
          console.log("Login error!");
          FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
        });
    };

  })

/*=============================== CREATE PROJECT CONTROLLER =================================*/
  .controller("CreateProjectCtrl", function($scope, $auth, $http, $location, Project, FoundationApi) {
     $scope.newProject = {
       project: {
         title: "",
         description: "",
         category: "",
         teaser: "",
         homepage: "",
         cover_image: "",
         logo: ""
       }
     };

     // Filthy fileupload logic...
     $scope.coverImageChanged = function(){
       console.log("Called it!");
       var file = document.getElementById('cover_image_upload').files[0];
       fileReader = new FileReader();
       fileReader.onloadend = function(){
         $scope.newProject.project.cover_image = fileReader.result;
       }
       fileReader.readAsDataURL(file);
     };

     $scope.logoChanged = function(){
       console.log("Logo input changed");
       var file = document.getElementById('logo_upload').files[0];
       fileReader = new FileReader();
       fileReader.onloadend = function(){
         $scope.newProject.project.logo = fileReader.result;
          console.log("Loaded dat logo!");
       }
       fileReader.readAsDataURL(file);
     };

     $scope.createProject = function(){
       console.log($scope.newProject.project.cover_image);
       //console.log($auth.retrieveData('auth_headers'));

       var project = new Project($scope.newProject);
       project.$save().then(function(resp) {
         // handle success response
         console.log(resp);
       })
       .catch(function(resp) {
         // handle error response
         console.log(resp);
         //FoundationApi.publish('error-notifications', { title: 'Fejl!', content: resp.data.errors });
       });
     };

  })
  /*=============================== PROJECTS CONTROLLER =================================*/

  .controller("ProjectsCtrl", function($scope, $stateParams, $auth, $http, Project, FoundationApi) {
    $scope.projects = Project.query();
    console.log($stateParams.id);
  })

  /*=============================== PROFILE CONTROLLER =================================*/
    .controller("ProfileCtrl", function($scope, $auth, User, FoundationApi, $location) {

      $scope.readOnly = true;

      $scope.signOut = function(){
        $auth.signOut()
          .then(function(resp) {
            // handle success response
            FoundationApi.publish('success-notifications', { title: 'Success!', content: 'Du er nu logget ud', color: "success", autoclose: 1500 });
            console.log(resp);
            $location.url("/");
          })
          .catch(function(resp) {
            // handle error response
            console.log(resp);
          });
      };

      $scope.submitUpdate = function(){
        $auth.updateAccount($auth.user)
          .then(function(resp) {
            // handle success response
            FoundationApi.publish('success-notifications', { title: 'Success!', content: 'Din profil er nu opdateret', color: "success", autoclose: 1500 });
            console.log(resp);
          })
          .catch(function(resp) {
            // handle error response
            FoundationApi.publish('error-notifications', { title: 'Fejl', content: resp.data, color: "alert", autoclose: 1500 });
            console.error(resp);
          });
      };

    })


})();

(function(){
  var baseUrl = "https://maecen-staging.herokuapp.com/"
  //var baseUrl = "http://localhost:3000/"
  var urlVersion = "v1/"
  angular.module("resources", ["ngResource"])
  // Users
  .factory("User", function($resource) {
    return $resource(baseUrl+urlVersion+"users/:id", { id: "@id"});
  })
  // Projects
  .factory("Project", function($resource) {
    return $resource(baseUrl+urlVersion+"projects/:id");
  })

})();

(function(){
  angular.module("filters", [])


})();

(function(){
  angular.module("services", ["ngResource"])

})();

(function(){
angular.module("localization", ["pascalprecht.translate"])
.config(function ($translateProvider) {
  // Set default (preffered) language
  $translateProvider.preferredLanguage('da');

  /*======================================= DANISH TRANSLATION ==============*/
  $translateProvider.translations('da', {
    AppTitle: "Mæcen",

    /*======= Slidein menu ========*/
    MenuProjects: "Alle projekter",
    MenuNewProject: "Nyt projekt",
    SelectLanguage: "Vælg sprog",
    LangDa: "Dansk",
    LangEng: "Engelsk",
    /*======= /slidein menu ========*/

    /*======= Registration ========*/
    NameAndSurname: "Navn og efternavn",
    ContactInfo: "Kontakt information",
    FirstName: "Fornavn",
    LastName: "Efternavn",
    MailExample: "johndoe@gmail.com",
    Passwrd: "Adgangskode",
    ConfirmPasswrd: "Bekræft adgangskode",
    RegistrateBTN: "Registrer",
    /*======= Registration ========*/

    /*======= Projects ============*/
    MaecenGroups: "Mæcen grupper",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    CreateProjectTitel: "Opret projekt",
    NewProjectTitel: "Titel",
    ProjectLogo: "Logo",
    ProjectCategory: "Kategori",
    ProjectTeaser: "Teaser",
    MaxTeaserChars: "Max 140 karaktere",
    ProjectDescription: "Beskrivelse",
    ProjectUrl: "URL",
    ProjectCover: "Cover",
    CreateProjectBTN: "Opret projekt"
    /*======== /create projects ======*/

  });

  /*======================================= English TRANSLATION ==============*/
  $translateProvider.translations('eng', {

  });


})

})();
