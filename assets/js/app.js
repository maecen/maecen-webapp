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

  /*=============================== HOME CONTROLLER =================================*/
  .controller('HomeCtrl', function($scope) {

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
angular.module("hest", ["pascalprecht.translate"])
.config(function ($translateProvider) {

  /*======================================= DANISH TRANSLATION ==============*/
  $translateProvider.translations('da', {
    /*======= Homepage ========*/
    REG_BUTTON: 'Registrer nu!',
    CREATIVE_TITEL: "Kreativ",
    MAECEN_TITEL: "Mæcen",
    /*======= Registration ========*/

  });

  // Set default (preffered) language
  $translateProvider.preferredLanguage('da');

})

})();
