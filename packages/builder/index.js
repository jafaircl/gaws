!function(r){"use strict";function t(r,t){function n(){this.constructor=r}for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o]);r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function n(r,t){var n,o;if(null==this)throw new TypeError("this is null or not defined");var e;if(e="rows"in t?t.rows():t.get(),"function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(n=t),o=0;e.hasNext();){var i=e.next();if(!r.call(n,i,o,e))return!1;o++}return!0}function o(r,t){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var n,o=new Array,e=0,i=0;if(n="rows"in t?t.rows():t.get(),void 0===t)for(;n.hasNext();)r(f=n.next(),i,n)&&(o[e++]=f),i++;else for(;n.hasNext();){var f=n.next();r.call(t,f,i,n)&&(o[e++]=f),i++}return o.length=e,o}function e(r,t){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var n;n="rows"in t?t.rows():t.get();for(var o=0;n.hasNext();){var e=n.next();if(r.call(t,e,o,n))return e;o++}}function i(r,t){if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var n;n="rows"in t?t.rows():t.get();for(var o=0;n.hasNext();){var e=n.next();if(r.call(t,e,o,n))return o;o++}}function f(r,t){var n,o;if(null==this)throw new TypeError("this is null or not defined");if(o="rows"in t?t.rows():t.get(),"function"!=typeof r)throw new TypeError(r+" is not a function");for(n=0;o.hasNext();){var e=o.next();r.call(t,e,n,o),n++}}function s(r,t){var n,o;if(null==this)throw new TypeError("this is null or not defined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var e;e="rows"in t?t.rows():t.get(),n=new Array,o=0;for(;e.hasNext();){var i=e.next(),f=r.call(t,i,o,e);n[o]=f,o++}return n}function u(r,t,n){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var o,e,i=0;if(o="rows"in n?n.rows():n.get(),arguments.length>=2)e=arguments[1];else{for(;o.hasNext();)i++;e=o.next()}for(;o.hasNext();)e=r(e,o.next(),i,o),i++;return e}function a(r,t){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof r)throw new TypeError;var n;n="rows"in t?t.rows():t.get();for(var o=0;n.hasNext();){if(r.call(t,n.next(),o,n))return!0;o++}return!1}var h=function(r){function n(t){r.call(this),this.select=this.variableType(t.select,", "),this.from=t.from,this.where=this.variableType(t.where," AND "),this.during=this.variableType(t.during,","),this.arg=this.awql()}return t(n,r),n.prototype.variableType=function(r,t){return r instanceof Array?r.join(t):r},n.prototype.awql=function(){var r="SELECT "+this.select+" FROM "+this.from;return void 0!==this.where&&(r+=" WHERE "+this.where),void 0!==this.during&&(r+=" DURING "+this.during),Logger.log(r),AdWordsApp.report(r)},n.prototype.rows=function(){return this.awql().rows()},n.prototype.exportToSheet=function(r){return this.awql().exportToSheet(r)},n.prototype.getColumnHeader=function(r){return this.awql().getColumnHeader(r)},n}(function(){function r(){}return r.prototype.every=function(r){return n(r,this.arg)},r.prototype.filter=function(r){return o(r,this.arg)},r.prototype.find=function(r){return e(r,this.arg)},r.prototype.findIndex=function(r){return i(r,this.arg)},r.prototype.forEach=function(r){return f(r,this.arg)},r.prototype.map=function(r){return s(r,this.arg)},r.prototype.reduce=function(r,t){return u(r,t,this.arg)},r.prototype.some=function(r){return a(r,this.arg)},r}());r.Report=h}(this.gaws=this.gaws||{});
