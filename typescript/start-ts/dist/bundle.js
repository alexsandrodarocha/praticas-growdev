(()=>{"use strict";var e={156:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(831),f=r(266),a=n(r(921)),o=((0,u.v4)(),{id:(0,u.v4)(),name:"Mouse",enable:!1,kind:"TECH"}),l={id:(0,u.v4)(),name:"Teclado",enable:!0,kind:"TECH"},i={id:(0,u.v4)(),name:"Monitor",enable:!0,kind:"OUTROS"},d=[];d.push(o),d.push(l),d.push(i);var c=(0,f.veriFyDataEnable)(d);(0,a.default)(),console.log(c)},48:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=["TECH","OUTROS","DIVERSOS"]},266:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.veriFyDataEnable=t.transformUpperText=void 0;var u=n(r(487));t.transformUpperText=u.default;var f=n(r(810));t.veriFyDataEnable=f.default},921:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(48));t.default=function(){var e=document.getElementById("kind"),t="";u.default.forEach((function(e){t+='<option value="'.concat(e,'">').concat(e,"</option>")})),console.log(t),e&&(e.innerHTML=t||"")}},487:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.toUpperCase()}},810:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.filter((function(e){if(e.enable)return e}))}},831:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return _.default}});var n=b(r(213)),u=b(r(808)),f=b(r(792)),a=b(r(910)),o=b(r(518)),l=b(r(343)),i=b(r(948)),d=b(r(73)),c=b(r(186)),s=b(r(671)),v=b(r(507)),p=b(r(744)),y=b(r(37)),_=b(r(775));function b(e){return e&&e.__esModule?e:{default:e}}},213:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},311:(e,t)=>{function r(e){return 14+(e+64>>>9<<4)+1}function n(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function u(e,t,r,u,f,a){return n((o=n(n(t,e),n(u,a)))<<(l=f)|o>>>32-l,r);var o,l}function f(e,t,r,n,f,a,o){return u(t&r|~t&n,e,t,f,a,o)}function a(e,t,r,n,f,a,o){return u(t&n|r&~n,e,t,f,a,o)}function o(e,t,r,n,f,a,o){return u(t^r^n,e,t,f,a,o)}function l(e,t,r,n,f,a,o){return u(r^(t|~n),e,t,f,a,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var u=0;u<t.length;++u)e[u]=t.charCodeAt(u)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",u=0;u<r;u+=8){var f=e[u>>5]>>>u%32&255,a=parseInt(n.charAt(f>>>4&15)+n.charAt(15&f),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[r(t)-1]=t;for(var u=1732584193,i=-271733879,d=-1732584194,c=271733878,s=0;s<e.length;s+=16){var v=u,p=i,y=d,_=c;u=f(u,i,d,c,e[s],7,-680876936),c=f(c,u,i,d,e[s+1],12,-389564586),d=f(d,c,u,i,e[s+2],17,606105819),i=f(i,d,c,u,e[s+3],22,-1044525330),u=f(u,i,d,c,e[s+4],7,-176418897),c=f(c,u,i,d,e[s+5],12,1200080426),d=f(d,c,u,i,e[s+6],17,-1473231341),i=f(i,d,c,u,e[s+7],22,-45705983),u=f(u,i,d,c,e[s+8],7,1770035416),c=f(c,u,i,d,e[s+9],12,-1958414417),d=f(d,c,u,i,e[s+10],17,-42063),i=f(i,d,c,u,e[s+11],22,-1990404162),u=f(u,i,d,c,e[s+12],7,1804603682),c=f(c,u,i,d,e[s+13],12,-40341101),d=f(d,c,u,i,e[s+14],17,-1502002290),u=a(u,i=f(i,d,c,u,e[s+15],22,1236535329),d,c,e[s+1],5,-165796510),c=a(c,u,i,d,e[s+6],9,-1069501632),d=a(d,c,u,i,e[s+11],14,643717713),i=a(i,d,c,u,e[s],20,-373897302),u=a(u,i,d,c,e[s+5],5,-701558691),c=a(c,u,i,d,e[s+10],9,38016083),d=a(d,c,u,i,e[s+15],14,-660478335),i=a(i,d,c,u,e[s+4],20,-405537848),u=a(u,i,d,c,e[s+9],5,568446438),c=a(c,u,i,d,e[s+14],9,-1019803690),d=a(d,c,u,i,e[s+3],14,-187363961),i=a(i,d,c,u,e[s+8],20,1163531501),u=a(u,i,d,c,e[s+13],5,-1444681467),c=a(c,u,i,d,e[s+2],9,-51403784),d=a(d,c,u,i,e[s+7],14,1735328473),u=o(u,i=a(i,d,c,u,e[s+12],20,-1926607734),d,c,e[s+5],4,-378558),c=o(c,u,i,d,e[s+8],11,-2022574463),d=o(d,c,u,i,e[s+11],16,1839030562),i=o(i,d,c,u,e[s+14],23,-35309556),u=o(u,i,d,c,e[s+1],4,-1530992060),c=o(c,u,i,d,e[s+4],11,1272893353),d=o(d,c,u,i,e[s+7],16,-155497632),i=o(i,d,c,u,e[s+10],23,-1094730640),u=o(u,i,d,c,e[s+13],4,681279174),c=o(c,u,i,d,e[s],11,-358537222),d=o(d,c,u,i,e[s+3],16,-722521979),i=o(i,d,c,u,e[s+6],23,76029189),u=o(u,i,d,c,e[s+9],4,-640364487),c=o(c,u,i,d,e[s+12],11,-421815835),d=o(d,c,u,i,e[s+15],16,530742520),u=l(u,i=o(i,d,c,u,e[s+2],23,-995338651),d,c,e[s],6,-198630844),c=l(c,u,i,d,e[s+7],10,1126891415),d=l(d,c,u,i,e[s+14],15,-1416354905),i=l(i,d,c,u,e[s+5],21,-57434055),u=l(u,i,d,c,e[s+12],6,1700485571),c=l(c,u,i,d,e[s+3],10,-1894986606),d=l(d,c,u,i,e[s+10],15,-1051523),i=l(i,d,c,u,e[s+1],21,-2054922799),u=l(u,i,d,c,e[s+8],6,1873313359),c=l(c,u,i,d,e[s+15],10,-30611744),d=l(d,c,u,i,e[s+6],15,-1560198380),i=l(i,d,c,u,e[s+13],21,1309151649),u=l(u,i,d,c,e[s+4],6,-145523070),c=l(c,u,i,d,e[s+11],10,-1120210379),d=l(d,c,u,i,e[s+2],15,718787259),i=l(i,d,c,u,e[s+9],21,-343485551),u=n(u,v),i=n(i,p),d=n(d,y),c=n(c,_)}return[u,i,d,c]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(r(t)),u=0;u<t;u+=8)n[u>>5]|=(255&e[u/8])<<u%32;return n}(e),8*e.length))}},140:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:r}},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},792:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(37))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,u.default)(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},858:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)};var n=new Uint8Array(16)},42:(e,t)=>{function r(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function n(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=[1518500249,1859775393,2400959708,3395469782],u=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var f=unescape(encodeURIComponent(e));e=[];for(var a=0;a<f.length;++a)e.push(f.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,l=Math.ceil(o/16),i=new Array(l),d=0;d<l;++d){for(var c=new Uint32Array(16),s=0;s<16;++s)c[s]=e[64*d+4*s]<<24|e[64*d+4*s+1]<<16|e[64*d+4*s+2]<<8|e[64*d+4*s+3];i[d]=c}i[l-1][14]=8*(e.length-1)/Math.pow(2,32),i[l-1][14]=Math.floor(i[l-1][14]),i[l-1][15]=8*(e.length-1)&4294967295;for(var v=0;v<l;++v){for(var p=new Uint32Array(80),y=0;y<16;++y)p[y]=i[v][y];for(var _=16;_<80;++_)p[_]=n(p[_-3]^p[_-8]^p[_-14]^p[_-16],1);for(var b=u[0],g=u[1],O=u[2],m=u[3],j=u[4],h=0;h<80;++h){var M=Math.floor(h/20),P=n(b,5)+r(M,g,O,m)+j+t[M]+p[h]>>>0;j=m,m=O,O=n(g,30)>>>0,g=b,b=P}u[0]=u[0]+b>>>0,u[1]=u[1]+g>>>0,u[2]=u[2]+O>>>0,u[3]=u[3]+m>>>0,u[4]=u[4]+j>>>0}return[u[0]>>24&255,u[0]>>16&255,u[0]>>8&255,255&u[0],u[1]>>24&255,u[1]>>16&255,u[1]>>8&255,255&u[1],u[2]>>24&255,u[2]>>16&255,u[2]>>8&255,255&u[2],u[3]>>24&255,u[3]>>16&255,u[3]>>8&255,255&u[3],u[4]>>24&255,u[4]>>16&255,u[4]>>8&255,255&u[4]]}},910:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=o;for(var n,u=(n=r(37))&&n.__esModule?n:{default:n},f=[],a=0;a<256;++a)f.push((a+256).toString(16).slice(1));function o(e,t=0){return(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase()}t.default=function(e,t=0){var r=o(e,t);if(!(0,u.default)(r))throw TypeError("Stringified UUID is invalid");return r}},518:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,f,a=(n=r(858))&&n.__esModule?n:{default:n},o=r(910),l=0,i=0;t.default=function(e,t,r){var n=t&&r||0,d=t||new Array(16),c=(e=e||{}).node,s=e.clockseq;if(e._v6||(c||(c=u),null==s&&(s=f)),null==c||null==s){var v=e.random||(e.rng||a.default)();null==c&&(c=[v[0],v[1],v[2],v[3],v[4],v[5]],u||e._v6||(c[0]|=1,u=c)),null==s&&(s=16383&(v[6]<<8|v[7]),void 0!==f||e._v6||(f=s))}var p=void 0!==e.msecs?e.msecs:Date.now(),y=void 0!==e.nsecs?e.nsecs:i+1,_=p-l+(y-i)/1e4;if(_<0&&void 0===e.clockseq&&(s=s+1&16383),(_<0||p>l)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,i=y,f=s;var b=(1e4*(268435455&(p+=122192928e5))+y)%4294967296;d[n++]=b>>>24&255,d[n++]=b>>>16&255,d[n++]=b>>>8&255,d[n++]=255&b;var g=p/4294967296*1e4&268435455;d[n++]=g>>>8&255,d[n++]=255&g,d[n++]=g>>>24&15|16,d[n++]=g>>>16&255,d[n++]=s>>>8|128,d[n++]=255&s;for(var O=0;O<6;++O)d[n+O]=c[O];return t||(0,o.unsafeStringify)(d)}},343:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,u.default)(e):e,Uint8Array.of((15&t[6])<<4|t[7]>>4&15,(15&t[7])<<4|(240&t[4])>>4,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,(15&t[1])<<4|(240&t[2])>>4,96|15&t[2],t[3],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,f.unsafeStringify)(r):r};var n,u=(n=r(792))&&n.__esModule?n:{default:n},f=r(910)},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(25)),u=f(r(311));function f(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v3",48,u.default);t.default=a},25:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,r){function n(e,n,a,o){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,f.default)(n)),16!==(null===(l=n)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+e.length);if(i.set(n),i.set(e,n.length),(i=r(i))[6]=15&i[6]|t,i[8]=63&i[8]|128,a){o=o||0;for(var d=0;d<16;++d)a[o+d]=i[d];return a}return(0,u.unsafeStringify)(i)}try{n.name=e}catch(e){}return n.DNS=a,n.URL=o,n};var n,u=r(910),f=(n=r(792))&&n.__esModule?n:{default:n},a=t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o=t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8"},73:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(140)),u=a(r(858)),f=r(910);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){if(n.default.randomUUID&&!t&&!e)return n.default.randomUUID();var a=(e=e||{}).random||(e.rng||u.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=a[o];return t}return(0,f.unsafeStringify)(a)}},186:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(25)),u=f(r(42));function f(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v5",80,u.default);t.default=a},671:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e={},t,r=0){var a=(0,u.default)(l(l({},e),{},{_v6:!0}),new Uint8Array(16));if(a=(0,f.default)(a),t){for(var o=0;o<16;o++)t[r+o]=a[o];return t}return(0,n.unsafeStringify)(a)};var n=r(910),u=a(r(518)),f=a(r(343));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},507:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,u.default)(e):e,Uint8Array.of((15&t[3])<<4|t[4]>>4&15,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|15&t[6],t[7],(15&t[1])<<4|(240&t[2])>>4,(15&t[2])<<4|(240&t[3])>>4,16|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,f.unsafeStringify)(r):r};var n,u=(n=r(792))&&n.__esModule?n:{default:n},f=r(910)},744:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(858))&&n.__esModule?n:{default:n},f=r(910),a=null,o=null,l=0;t.default=function(e,t,r){e=e||{};var n=t&&r||0,i=t||new Uint8Array(16),d=e.random||(e.rng||u.default)(),c=void 0!==e.msecs?e.msecs:Date.now(),s=void 0!==e.seq?e.seq:null,v=o,p=a;return c>l&&void 0===e.msecs&&(l=c,null!==s&&(v=null,p=null)),null!==s&&(s>2147483647&&(s=2147483647),v=s>>>19&4095,p=524287&s),null!==v&&null!==p||(v=(v=127&d[6])<<8|d[7],p=(p=(p=63&d[8])<<8|d[9])<<5|d[10]>>>3),c+1e4>l&&null===s?++p>524287&&(p=0,++v>4095&&(v=0,l++)):l=c,o=v,a=p,i[n++]=l/1099511627776&255,i[n++]=l/4294967296&255,i[n++]=l/16777216&255,i[n++]=l/65536&255,i[n++]=l/256&255,i[n++]=255&l,i[n++]=v>>>4&15|112,i[n++]=255&v,i[n++]=p>>>13&63|128,i[n++]=p>>>5&255,i[n++]=p<<3&255|7&d[10],i[n++]=d[11],i[n++]=d[12],i[n++]=d[13],i[n++]=d[14],i[n++]=d[15],t||(0,f.unsafeStringify)(i)}},37:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(656))&&n.__esModule?n:{default:n};t.default=function(e){return"string"==typeof e&&u.default.test(e)}},775:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(37))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,u.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};!function r(n){var u=t[n];if(void 0!==u)return u.exports;var f=t[n]={exports:{}};return e[n].call(f.exports,f,f.exports,r),f.exports}(156)})();