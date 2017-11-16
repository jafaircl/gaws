!function(t,e){"use strict";function r(t,e){function r(){this.constructor=t}y(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function n(t,e){var r,n;if(null==this)throw new TypeError("this is null or not defined");var o;if(o="rows"in e?e.rows():e.get(),"function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(r=e),n=0;o.hasNext();){var i=o.next();if(!t.call(r,i,n,o))return!1;n++}return!0}function o(t,e){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=new Array,o=0,i=0;if(r="rows"in e?e.rows():e.get(),void 0===e)for(;r.hasNext();)t(a=r.next(),i,r)&&(n[o++]=a),i++;else for(;r.hasNext();){var a=r.next();t.call(e,a,i,r)&&(n[o++]=a),i++}return n.length=o,n}function i(t,e){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r;r="rows"in e?e.rows():e.get();for(var n=0;r.hasNext();){var o=r.next();if(t.call(e,o,n,r))return o;n++}throw new Error("Error in Iterator.find(): Undefined")}function a(t,e){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r;r="rows"in e?e.rows():e.get();for(var n=0;r.hasNext();){var o=r.next();if(t.call(e,o,n,r))return n;n++}}function s(t,e){var r,n;if(null==this)throw new TypeError("this is null or not defined");if(n="rows"in e?e.rows():e.get(),"function"!=typeof t)throw new TypeError(t+" is not a function");for(r=0;n.hasNext();){var o=n.next();t.call(e,o,r,n),r++}}function u(t){var e,r=0;if(!("rows"in t))return(e=t.get()).totalNumEntities();for(e=t.rows();e.hasNext();){e.next();r++}return r}function c(t,e){var r,n;if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var o;o="rows"in e?e.rows():e.get(),r=new Array,n=0;for(;o.hasNext();){var i=o.next(),a=t.call(e,i,n,o);r[n]=a,n++}return r}function f(t,e,r){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var n,o,i=0;if(n="rows"in r?r.rows():r.get(),arguments.length>=2)o=arguments[1];else{for(;n.hasNext();)i++;o=n.next()}for(;n.hasNext();)o=t(o,n.next(),i,n),i++;return o}function h(t,e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof t)throw new TypeError;var r;r="rows"in e?e.rows():e.get();for(var n=0;r.hasNext();){if(t.call(e,r.next(),n,r))return!0;n++}return!1}function p(t,e,r){var n,o,i,a=0,s=0;o=t[n="rows"in t?"rows":"get"]();for(;o.hasNext();){o.next();s++}o=t[n]();var u=e||0;u=u>=0?u:Math.max(0,s+u);var c="number"==typeof r?Math.min(r,s):s;void 0!==r&&r<0&&(c=s+r);for(i=[];o.hasNext()&&a<c;){var f=o.next();a>=u&&i.push(f),a++}return i}function l(t){t||(t=b),Logger.log("gaws Error: "+t)}function d(t){return Object.prototype.toString.call(t).slice(8,-1)}function w(t){return"Array"===d(t)}var y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},g=function(){function t(){}return Object.defineProperty(t.prototype,"length",{get:function(){return u(this.arg)},enumerable:!0,configurable:!0}),t.prototype.every=function(t){return n(t,this.arg)},t.prototype.filter=function(t){return o(t,this.arg)},t.prototype.find=function(t){return i(t,this.arg)},t.prototype.findIndex=function(t){return a(t,this.arg)},t.prototype.forEach=function(t){return s(t,this.arg)},t.prototype.map=function(t){return c(t,this.arg)},t.prototype.reduce=function(t,e){return f(t,e,this.arg)},t.prototype.slice=function(t,e){return void 0===t&&(t=0),p(this.arg,t,e)},t.prototype.some=function(t){return h(t,this.arg)},t}(),v=function(t){function e(e){var r=t.call(this)||this;return r.entity=e.entity||AdWordsApp.campaigns(),r.conditions=e.conditions||[],r.dateRange=e.dateRange||"ALL_TIME",r.order=e.order||[],r.ids=e.ids||[],r.limit=e.limit,r.arg=r.select(),r}return r(e,t),e.prototype.chainMethods=function(t,e,r){return void 0===r&&(r=this.entity),e.reduce(function(e,r){return e[t](r)},r)},e.prototype.addConditions=function(){return this.chainMethods("withCondition",this.conditions)},e.prototype.addOrder=function(){return this.chainMethods("orderBy",this.order,this.addConditions())},e.prototype.addIds=function(){return this.chainMethods("withIds",this.ids,this.addOrder())},e.prototype.select=function(){return this.addIds().forDateRange(this.dateRange).withLimit(this.limit)},e.prototype.get=function(){return this.select().get()},e}(g),m=function(t){function e(e){var r=t.call(this)||this;return r.select=r.variableType(e.select,", "),r.from=e.from,r.where=r.variableType(e.where," AND "),r.during=r.variableType(e.during,","),r.options=e.options,r.arg=r.awql(),r}return r(e,t),e.prototype.variableType=function(t,e){return t instanceof Array?t.join(e):t||""},e.prototype.awql=function(){var t="SELECT "+this.select+" FROM "+this.from;return void 0!==this.where&&(t+=" WHERE "+this.where),void 0!==this.during&&(t+=" DURING "+this.during),void 0!==this.options?AdWordsApp.report(t,this.options):AdWordsApp.report(t)},e.prototype.rows=function(){return this.awql().rows()},e.prototype.exportToSheet=function(t){return this.awql().exportToSheet(t)},e.prototype.getColumnHeader=function(t){return this.awql().getColumnHeader(t)},e}(g),x=function(){function t(t){this.str=t}return t.prototype.render=function(t){return this._interpolate(this.str)(t)},t.prototype._interpolate=function(t){return function(e){return t.replace(/\{{2}\s*((\w|\.)+)\s*\}{2}/g,function(t,r){var n=e[r];return"string"==typeof n||"number"==typeof n?n:t})}},t}(),E=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],b="An error occured with the @gaws library",T=function(){function t(t){this.accessToken=t}return t.prototype.fetch=function(t,e){var r=e||{};return r.headers||(r.headers={}),r.headers.Authorization="Bearer "+this.accessToken,UrlFetchApp.fetch(t,r)},t._authenticate=function(t,e,r,n){var o={muteHttpExceptions:!0,method:"POST",payload:e};n&&(o.payload.scope=n),r&&(o.headers={Authorization:r});var i=UrlFetchApp.fetch(t,o),a=JSON.parse(i.getContentText());if(!a||!a.access_token)throw Error("No access token received: "+i.getContentText());return a.access_token},t.withRefreshToken=function(e,r,n,o,i){var a={grant_type:"refresh_token",client_id:r,client_secret:n,refresh_token:o};return new t(this._authenticate(e,a,null,i))},t.withClientCredentials=function(e,r,n,o){var i="Basic "+Utilities.base64Encode([r,n].join(":")),a={grant_type:"client_credentials",client_id:r,client_secret:n};return new t(this._authenticate(e,a,i,o))},t.withPassword=function(e,r,n,o,i){var a={grant_type:"password",client_id:r,username:n,password:o};return new t(this._authenticate(e,a,null,i))},t.withServiceAccount=function(e,r,n,o){var i=new Date,a={iss:r,scope:o,aud:e,exp:Math.round(i.getTime()/1e3+3600),iat:Math.round(i.getTime()/1e3)},s=Utilities.base64EncodeWebSafe('{"alg":"RS256","typ":"JWT"}')+"."+Utilities.base64EncodeWebSafe(JSON.stringify(a)),u=Utilities.computeRsaSha256Signature(s,n),c={grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:s+="."+Utilities.base64Encode(u)};return new t(this._authenticate(e,c,null,null))},t}();t.Iterator=v,t.Report=m,t.CoreShared=g,t.Template=x,t.selfClosing=E,t.forEach=function(t,e,r){e||(e="div");var n="";if(r)for(var o in r)n+=o+'="'+r[o]+'"';return E.indexOf(e)>-1?t.reduce(function(t,r){return t+"<"+e+" "+r+(""!==n?" "+n:"")+">"},""):t.reduce(function(t,r){return t+"<"+e+(""!==n?" "+n:"")+">"+r+"</"+e+">"},"")},t.getType=d,t.isArray=w,t.isObject=function(t){return"Object"===d(t)},t.isString=function(t){return"String"===d(t)},t.isDate=function(t){return"Date"===d(t)},t.isNumber=function(t){return"Number"===d(t)},t.isFunction=function(t){return"Function"===d(t)},t.isRegExp=function(t){return"RegExp"===d(t)},t.isBoolean=function(t){return"Boolean"===d(t)},t.isNull=function(t){return"Null"===d(t)},t.isUndefined=function(t){return"Undefined"===d(t)},t.isEmpty=function(t){return""===t},t.checkType=function(t,e,r){return e(t)?t:l("Expected "+e.name.slice(2)+" but received "+d(t)+" "+r)},t.arrayIsEmpty=function(t){return void 0===t||0==t.length},t.deDuplicate=function(t){var e={};return t.filter(function(t){var r=JSON.stringify(t);return!Boolean(e[r])&&(e[r]=!0)})},t.ERROR_MSG=b,t.logError=l,t.addLabel=function(t,e){AdWordsApp.labels().withCondition('Name = "'+t+'"').get().hasNext()||AdWordsApp.createLabel(t,"",e)},t.deleteLabel=function(t){for(var e=AdWordsApp.labels().withCondition('LabelName CONTAINS "'+t+'"').get();e.hasNext();)e.next().remove()},t.removeLabelFrom=function(t,r){var n=w(r)?r.join('","'):r;new e.Iterator({entity:t,conditions:['LabelNames CONTAINS_ANY ["'+n+'"]']}).iterate(function(){if(w(r))for(var t in r)this.removeLabel(r[t]);else this.removeLabel(r)})},t.OAuth2=T}(this.gaws=this.gaws||{},_gaws_core);
