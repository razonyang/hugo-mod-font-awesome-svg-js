(()=>{var Wr=Object.create;var ga=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Xr=Object.getPrototypeOf,Br=Object.prototype.hasOwnProperty;var hn=(g,k)=>()=>(k||g((k={exports:{}}).exports,k),k.exports);var qr=(g,k,l,X)=>{if(k&&typeof k=="object"||typeof k=="function")for(let T of Vr(k))!Br.call(g,T)&&T!==l&&ga(g,T,{get:()=>k[T],enumerable:!(X=Gr(k,T))||X.enumerable});return g};var on=(g,k,l)=>(l=g!=null?Wr(Xr(g)):{},qr(k||!g||!g.__esModule?ga(l,"default",{value:g,enumerable:!0}):l,g));var vt=hn((Dn,ha)=>{(function(g,k){typeof Dn=="object"&&typeof ha<"u"?k(Dn):typeof define=="function"&&define.amd?define(["exports"],k):k(g["fontawesome-svg-core"]={})})(Dn,function(g){"use strict";function k(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?k(Object(a),!0).forEach(function(e){w(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function X(n){return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(n)}function T(){T=function(r,i){return new a(r,void 0,i)};var n=RegExp.prototype,t=new WeakMap;function a(r,i,o){var s=new RegExp(r,i);return t.set(s,o||t.get(r)),yn(s,a.prototype)}function e(r,i){var o=t.get(i);return Object.keys(o).reduce(function(s,f){return s[f]=r[o[f]],s},Object.create(null))}return te(a,RegExp),a.prototype.exec=function(r){var i=n.exec.call(this,r);return i&&(i.groups=e(i,this)),i},a.prototype[Symbol.replace]=function(r,i){if(typeof i=="string"){var o=t.get(this);return n[Symbol.replace].call(this,r,i.replace(/\$<([^>]+)>/g,function(f,u){return"$"+o[u]}))}if(typeof i=="function"){var s=this;return n[Symbol.replace].call(this,r,function(){var f=arguments;return typeof f[f.length-1]!="object"&&(f=[].slice.call(f)).push(e(f,s)),i.apply(this,f)})}return n[Symbol.replace].call(this,r,i)},T.apply(this,arguments)}function Za(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ne(n,t,a){return t&&yt(n.prototype,t),a&&yt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function w(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function te(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&yn(n,t)}function yn(n,t){return yn=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},yn(n,t)}function jn(n,t){return ee(n)||ie(n,t)||kt(n,t)||se()}function sn(n){return ae(n)||re(n)||kt(n)||oe()}function ae(n){if(Array.isArray(n))return Yn(n)}function ee(n){if(Array.isArray(n))return n}function re(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ie(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(n);!(r=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function kt(n,t){if(!!n){if(typeof n=="string")return Yn(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Yn(n,t)}}function Yn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wt=function(){},$n={},xt={},At=null,St={mark:wt,measure:wt};try{typeof window<"u"&&($n=window),typeof document<"u"&&(xt=document),typeof MutationObserver<"u"&&(At=MutationObserver),typeof performance<"u"&&(St=performance)}catch{}var fe=$n.navigator||{},Et=fe.userAgent,Pt=Et===void 0?"":Et,H=$n,b=xt,Ot=At,kn=St,Qr=!!H.document,F=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Ct=~Pt.indexOf("MSIE")||~Pt.indexOf("Trident/"),wn,xn,An,Sn,En,j="___FONT_AWESOME___",Hn=16,Nt="fa",_t="svg-inline--fa",B="data-fa-i2svg",Un="data-fa-pseudo-element",le="data-fa-pseudo-element-pending",Wn="data-prefix",Gn="data-icon",It="fontawesome-i2svg",ce="async",ue=["HTML","HEAD","STYLE","SCRIPT"],Tt=function(){try{return!0}catch{return!1}}(),h="classic",y="sharp",Vn=[h,y];function fn(n){return new Proxy(n,{get:function(a,e){return e in a?a[e]:a[h]}})}var ln=fn((wn={},w(wn,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),w(wn,y,{fa:"solid",fass:"solid","fa-solid":"solid"}),wn)),cn=fn((xn={},w(xn,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),w(xn,y,{solid:"fass"}),xn)),un=fn((An={},w(An,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),w(An,y,{fass:"fa-solid"}),An)),me=fn((Sn={},w(Sn,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),w(Sn,y,{"fa-solid":"fass"}),Sn)),de=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Mt="fa-layers-text",ve=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pe=fn((En={},w(En,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),w(En,y,{900:"fass"}),En)),Lt=[1,2,3,4,5,6,7,8,9,10],ge=Lt.concat([11,12,13,14,15,16,17,18,19,20]),be=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mn=new Set;Object.keys(cn[h]).map(mn.add.bind(mn)),Object.keys(cn[y]).map(mn.add.bind(mn));var he=[].concat(Vn,sn(mn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(Lt.map(function(n){return"".concat(n,"x")})).concat(ge.map(function(n){return"w-".concat(n)})),dn=H.FontAwesomeConfig||{};function ye(n){var t=b.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function ke(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(b&&typeof b.querySelector=="function"){var we=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];we.forEach(function(n){var t=jn(n,2),a=t[0],e=t[1],r=ke(ye(a));r!=null&&(dn[e]=r)})}var Rt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Nt,replacementClass:_t,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dn.familyPrefix&&(dn.cssPrefix=dn.familyPrefix);var nn=l(l({},Rt),dn);nn.autoReplaceSvg||(nn.observeMutations=!1);var m={};Object.keys(Rt).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(a){nn[n]=a,vn.forEach(function(e){return e(m)})},get:function(){return nn[n]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){nn.cssPrefix=t,vn.forEach(function(a){return a(m)})},get:function(){return nn.cssPrefix}}),H.FontAwesomeConfig=m;var vn=[];function xe(n){return vn.push(n),function(){vn.splice(vn.indexOf(n),1)}}var U=Hn,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ae(n){if(!(!n||!F)){var t=b.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=b.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return b.head.insertBefore(t,e),n}}var Se="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pn(){for(var n=12,t="";n-- >0;)t+=Se[Math.random()*62|0];return t}function tn(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function Xn(n){return n.classList?tn(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ee(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(zt(n[a]),'" ')},"").trim()}function Pn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function Bn(n){return n.size!==R.size||n.x!==R.x||n.y!==R.y||n.rotate!==R.rotate||n.flipX||n.flipY}function Pe(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Oe(n){var t=n.transform,a=n.width,e=a===void 0?Hn:a,r=n.height,i=r===void 0?Hn:r,o=n.startCentered,s=o===void 0?!1:o,f="";return s&&Ct?f+="translate(".concat(t.x/U-e/2,"em, ").concat(t.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/U,"em), calc(-50% + ").concat(t.y/U,"em)) "):f+="translate(".concat(t.x/U,"em, ").concat(t.y/U,"em) "),f+="scale(".concat(t.size/U*(t.flipX?-1:1),", ").concat(t.size/U*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Ce=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Dt(){var n=Nt,t=_t,a=m.cssPrefix,e=m.replacementClass,r=Ce;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var Ft=!1;function qn(){m.autoAddCss&&!Ft&&(Ae(Dt()),Ft=!0)}var Ne={mixout:function(){return{dom:{css:Dt,insertCss:qn}}},hooks:function(){return{beforeDOMElementCreation:function(){qn()},beforeI2svg:function(){qn()}}}},Y=H||{};Y[j]||(Y[j]={}),Y[j].styles||(Y[j].styles={}),Y[j].hooks||(Y[j].hooks={}),Y[j].shims||(Y[j].shims=[]);var M=Y[j],jt=[],_e=function n(){b.removeEventListener("DOMContentLoaded",n),On=1,jt.map(function(t){return t()})},On=!1;F&&(On=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),On||b.addEventListener("DOMContentLoaded",_e));function Ie(n){!F||(On?setTimeout(n,0):jt.push(n))}function gn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?zt(n):"<".concat(t," ").concat(Ee(e),">").concat(i.map(gn).join(""),"</").concat(t,">")}function Yt(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var Te=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},Kn=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Te(a,r):a,f,u,c;for(e===void 0?(f=1,c=t[i[0]]):(f=0,c=e);f<o;f++)u=i[f],c=s(c,t[u],u,t);return c};function Me(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=n.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function Qn(n){var t=Me(n);return t.length===1?t[0].toString(16):null}function Le(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function $t(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}function Jn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=$t(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(n,$t(t)):M.styles[n]=l(l({},M.styles[n]||{}),i),n==="fas"&&Jn("fa",t)}var Jr=[T(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/,{d1:1,d2:2}),T(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2,cls2:3,d2:4}),T(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2})],Cn,Nn,_n,an=M.styles,Re=M.shims,ze=(Cn={},w(Cn,h,Object.values(un[h])),w(Cn,y,Object.values(un[y])),Cn),Zn=null,Ht={},Ut={},Wt={},Gt={},Vt={},De=(Nn={},w(Nn,h,Object.keys(ln[h])),w(Nn,y,Object.keys(ln[y])),Nn);function Fe(n){return~he.indexOf(n)}function je(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!Fe(r)?r:null}var Xt=function(){var t=function(i){return Kn(an,function(o,s,f){return o[f]=Kn(s,i,{}),o},{})};Ht=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Ut=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Vt=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in an||m.autoFetchSvg,e=Kn(Re,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Wt=e.names,Gt=e.unicodes,Zn=In(m.styleDefault,{family:m.familyDefault})};xe(function(n){Zn=In(n.styleDefault,{family:m.familyDefault})}),Xt();function nt(n,t){return(Ht[n]||{})[t]}function Ye(n,t){return(Ut[n]||{})[t]}function K(n,t){return(Vt[n]||{})[t]}function Bt(n){return Wt[n]||{prefix:null,iconName:null}}function $e(n){var t=Gt[n],a=nt("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function W(){return Zn}var tt=function(){return{prefix:null,iconName:null,rest:[]}};function In(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,e=a===void 0?h:a,r=ln[e][n],i=cn[e][n]||cn[e][r],o=n in M.styles?n:null;return i||o||null}var qt=(_n={},w(_n,h,Object.keys(un[h])),w(_n,y,Object.keys(un[y])),_n);function Tn(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(t={},w(t,h,"".concat(m.cssPrefix,"-").concat(h)),w(t,y,"".concat(m.cssPrefix,"-").concat(y)),t),o=null,s=h;(n.includes(i[h])||n.some(function(u){return qt[h].includes(u)}))&&(s=h),(n.includes(i[y])||n.some(function(u){return qt[y].includes(u)}))&&(s=y);var f=n.reduce(function(u,c){var d=je(m.cssPrefix,c);if(an[c]?(c=ze[s].includes(c)?me[s][c]:c,o=c,u.prefix=c):De[s].indexOf(c)>-1?(o=c,u.prefix=In(c,{family:s})):d?u.iconName=d:c!==m.replacementClass&&c!==i[h]&&c!==i[y]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var v=o==="fa"?Bt(u.iconName):{},p=K(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||p||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!an.far&&an.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},tt());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(an.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=K(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var He=function(){function n(){Za(this,n),this.definitions={}}return ne(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=l(l({},a.definitions[s]||{}),o[s]),Jn(s,o[s]);var f=un[h][s];f&&Jn(f,o[s]),Xt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][f]=u}),a}}]),n}(),Kt=[],en={},rn={},Ue=Object.keys(rn);function We(n,t){var a=t.mixoutsTo;return Kt=n,en={},Object.keys(rn).forEach(function(e){Ue.indexOf(e)===-1&&delete rn[e]}),Kt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),X(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){en[o]||(en[o]=[]),en[o].push(i[o])})}e.provides&&e.provides(rn)}),a}function at(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=en[n]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}function Q(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=en[n]||[];r.forEach(function(i){i.apply(null,a)})}function $(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return rn[n]?rn[n].apply(null,t):void 0}function et(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||W();if(!!t)return t=K(a,t)||t,Yt(Qt.definitions,a,t)||Yt(M.styles,a,t)}var Qt=new He,Ge=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Q("noAuto")},Ve={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(Q("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ie(function(){Be({autoReplaceSvgRoot:a}),Q("watch",t)})}},Xe={icon:function(t){if(t===null)return null;if(X(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=In(t[0]);return{prefix:e,iconName:K(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(de))){var r=Tn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:K(i,t)||t}}}},E={noAuto:Ge,config:m,dom:Ve,parse:Xe,library:Qt,findIconDefinition:et,toHtml:gn},Be=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?b:a;(Object.keys(M.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&E.dom.i2svg({node:e})};function Mn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return gn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(!!F){var e=b.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function qe(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(Bn(o)&&a.found&&!e.found){var s=a.width,f=a.height,u={x:s/f/2,y:.5};r.style=Pn(l(l({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ke(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:e}]}]}function rt(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,u=n.maskId,c=n.titleId,d=n.extra,v=n.watchable,p=v===void 0?!1:v,A=e.found?e:a,I=A.width,L=A.height,z=r==="fak",x=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),S={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(L)})},D=z&&!~d.classes.indexOf("fa-fw")?{width:"".concat(I/L*16*.0625,"em")}:{};p&&(S.attributes[B]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(c||pn())},children:[f]}),delete S.attributes.title);var P=l(l({},S),{},{prefix:r,iconName:i,main:a,mask:e,maskId:u,transform:o,symbol:s,styles:l(l({},D),d.styles)}),J=e.found&&a.found?$("generateAbstractMask",P)||{children:[],attributes:{}}:$("generateAbstractIcon",P)||{children:[],attributes:{}},Z=J.children,dt=J.attributes;return P.children=Z,P.attributes=dt,s?Ke(P):qe(P)}function Jt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,i=n.title,o=n.extra,s=n.watchable,f=s===void 0?!1:s,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[B]="");var c=l({},o.styles);Bn(r)&&(c.transform=Oe({transform:r,startCentered:!0,width:a,height:e}),c["-webkit-transform"]=c.transform);var d=Pn(c);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Qe(n){var t=n.content,a=n.title,e=n.extra,r=l(l(l({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=Pn(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var it=M.styles;function ot(n){var t=n[0],a=n[1],e=n.slice(4),r=jn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Je={found:!1,width:512,height:512};function Ze(n,t){!Tt&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function st(n,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=W()),new Promise(function(e,r){var i={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(a==="fa"){var o=Bt(n)||{};n=o.iconName||n,t=o.prefix||t}if(n&&t&&it[t]&&it[t][n]){var s=it[t][n];return e(ot(s))}Ze(n,t),e(l(l({},Je),{},{icon:m.showMissingIcons&&n?$("missingIconAbstract")||{}:{}}))})}var Zt=function(){},ft=m.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Zt,measure:Zt},bn='FA "6.2.0"',nr=function(t){return ft.mark("".concat(bn," ").concat(t," begins")),function(){return na(t)}},na=function(t){ft.mark("".concat(bn," ").concat(t," ends")),ft.measure("".concat(bn," ").concat(t),"".concat(bn," ").concat(t," begins"),"".concat(bn," ").concat(t," ends"))},lt={begin:nr,end:na},Ln=function(){};function ta(n){var t=n.getAttribute?n.getAttribute(B):null;return typeof t=="string"}function tr(n){var t=n.getAttribute?n.getAttribute(Wn):null,a=n.getAttribute?n.getAttribute(Gn):null;return t&&a}function ar(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function er(){if(m.autoReplaceSvg===!0)return Rn.replace;var n=Rn[m.autoReplaceSvg];return n||Rn.replace}function rr(n){return b.createElementNS("http://www.w3.org/2000/svg",n)}function ir(n){return b.createElement(n)}function aa(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?rr:ir:a;if(typeof n=="string")return b.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var i=n.children||[];return i.forEach(function(o){r.appendChild(aa(o,{ceFn:e}))}),r}function or(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(aa(r),a)}),a.getAttribute(B)===null&&m.keepOriginalSource){var e=b.createComment(or(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~Xn(a).indexOf(m.replacementClass))return Rn.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return gn(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function ea(n){n()}function ra(n,t){var a=typeof t=="function"?t:Ln;if(n.length===0)a();else{var e=ea;m.mutateApproach===ce&&(e=H.requestAnimationFrame||ea),e(function(){var r=er(),i=lt.begin("mutate");n.map(r),i(),a()})}}var ct=!1;function ia(){ct=!0}function ut(){ct=!1}var zn=null;function oa(n){if(!!Ot&&!!m.observeMutations){var t=n.treeCallback,a=t===void 0?Ln:t,e=n.nodeCallback,r=e===void 0?Ln:e,i=n.pseudoElementsCallback,o=i===void 0?Ln:i,s=n.observeMutationsRoot,f=s===void 0?b:s;zn=new Ot(function(u){if(!ct){var c=W();tn(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ta(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ta(d.target)&&~be.indexOf(d.attributeName))if(d.attributeName==="class"&&tr(d.target)){var v=Tn(Xn(d.target)),p=v.prefix,A=v.iconName;d.target.setAttribute(Wn,p||c),A&&d.target.setAttribute(Gn,A)}else ar(d.target)&&r(d.target)})}}),F&&zn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sr(){!zn||zn.disconnect()}function fr(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function lr(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=Tn(Xn(n));return r.prefix||(r.prefix=W()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ye(r.prefix,n.innerText)||nt(r.prefix,Qn(n.innerText))),!r.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function cr(n){var t=tn(n.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(a?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ur(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sa(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=lr(n),e=a.iconName,r=a.prefix,i=a.rest,o=cr(n),s=at("parseNodeAttributes",{},n),f=t.styleParser?fr(n):[];return l({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var mr=M.styles;function fa(n){var t=m.autoReplaceSvg==="nest"?sa(n,{styleParser:!1}):sa(n);return~t.extra.classes.indexOf(Mt)?$("generateLayersText",n,t):$("generateSvgReplacementMutation",n,t)}var G=new Set;Vn.map(function(n){G.add("fa-".concat(n))}),Object.keys(ln[h]).map(G.add.bind(G)),Object.keys(ln[y]).map(G.add.bind(G)),G=sn(G);function la(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var a=b.documentElement.classList,e=function(d){return a.add("".concat(It,"-").concat(d))},r=function(d){return a.remove("".concat(It,"-").concat(d))},i=m.autoFetchSvg?G:Vn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(mr));i.includes("fa")||i.push("fa");var o=[".".concat(Mt,":not([").concat(B,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=tn(n.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=lt.begin("onTree"),u=s.reduce(function(c,d){try{var v=fa(d);v&&c.push(v)}catch(p){Tt||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(v){ra(v,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(v){f(),d(v)})})}function dr(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fa(n).then(function(a){a&&ra([a],t)})}function vr(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:et(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:et(r||{})),n(e,l(l({},a),{},{mask:r}))}}var pr=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?R:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.title,v=d===void 0?null:d,p=a.titleId,A=p===void 0?null:p,I=a.classes,L=I===void 0?[]:I,z=a.attributes,x=z===void 0?{}:z,S=a.styles,D=S===void 0?{}:S;if(!!t){var P=t.prefix,J=t.iconName,Z=t.icon;return Mn(l({type:"icon"},t),function(){return Q("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(v?x["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(A||pn()):(x["aria-hidden"]="true",x.focusable="false")),rt({icons:{main:ot(Z),mask:f?ot(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:J,transform:l(l({},R),r),symbol:o,title:v,maskId:c,titleId:A,extra:{attributes:x,styles:D,classes:L}})})}},gr={mixout:function(){return{icon:vr(pr)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=la,a.nodeCallback=dr,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?b:e,i=a.callback,o=i===void 0?function(){}:i;return la(r,o)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,c=e.mask,d=e.maskId,v=e.extra;return new Promise(function(p,A){Promise.all([st(r,s),c.iconName?st(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var L=jn(I,2),z=L[0],x=L[1];p([a,rt({icons:{main:z,mask:x},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:v,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Pn(s);f.length>0&&(r.style=f);var u;return Bn(o)&&(u=$("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(u||i.icon),{children:e,attributes:r}}}},br={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Mn({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:o}]})}}}},hr={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,c=e.styles,d=c===void 0?{}:c;return Mn({type:"counter",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:e}),Qe({content:a.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(sn(s))}})})}}}},yr={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?R:r,o=e.title,s=o===void 0?null:o,f=e.classes,u=f===void 0?[]:f,c=e.attributes,d=c===void 0?{}:c,v=e.styles,p=v===void 0?{}:v;return Mn({type:"text",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:e}),Jt({content:a,transform:l(l({},R),i),title:s,extra:{attributes:d,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(sn(u))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Ct){var u=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();s=c.width/u,f=c.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Jt({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},kr=new RegExp('"',"ug"),ca=[1105920,1112319];function wr(n){var t=n.replace(kr,""),a=Le(t,0),e=a>=ca[0]&&a<=ca[1],r=t.length===2?t[0]===t[1]:!1;return{value:Qn(r?t[0]:t),isSecondary:e||r}}function ua(n,t){var a="".concat(le).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var i=tn(n.children),o=i.filter(function(Z){return Z.getAttribute(Un)===t})[0],s=H.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(ve),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return n.removeChild(o),e();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?cn[v][f[2].toLowerCase()]:pe[v][u],A=wr(d),I=A.value,L=A.isSecondary,z=f[0].startsWith("FontAwesome"),x=nt(p,I),S=x;if(z){var D=$e(I);D.iconName&&D.prefix&&(x=D.iconName,p=D.prefix)}if(x&&!L&&(!o||o.getAttribute(Wn)!==p||o.getAttribute(Gn)!==S)){n.setAttribute(a,S),o&&n.removeChild(o);var P=ur(),J=P.extra;J.attributes[Un]=t,st(x,p).then(function(Z){var dt=rt(l(l({},P),{},{icons:{main:Z,mask:tt()},prefix:p,iconName:S,extra:J,watchable:!0})),V=b.createElement("svg");t==="::before"?n.insertBefore(V,n.firstChild):n.appendChild(V),V.outerHTML=dt.map(function(Ur){return gn(Ur)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function xr(n){return Promise.all([ua(n,"::before"),ua(n,"::after")])}function Ar(n){return n.parentNode!==document.head&&!~ue.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Un)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function ma(n){if(!!F)return new Promise(function(t,a){var e=tn(n.querySelectorAll("*")).filter(Ar).map(xr),r=lt.begin("searchPseudoElements");ia(),Promise.all(e).then(function(){r(),ut(),t()}).catch(function(){r(),ut(),a()})})}var Sr={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ma,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?b:e;m.searchPseudoElements&&ma(r)}}},da=!1,Er={mixout:function(){return{dom:{unwatch:function(){ia(),da=!0}}}},hooks:function(){return{bootstrap:function(){oa(at("mutationObserverCallbacks",{}))},noAuto:function(){sr()},watch:function(a){var e=a.observeMutationsRoot;da?ut():oa(at("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},va=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Pr={mixout:function(){return{parse:{transform:function(a){return va(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=va(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:v};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),p.path)}]}]}}}},mt={x:0,y:0,width:"100%",height:"100%"};function pa(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Or(n){return n.tag==="g"?n.children:[n]}var Cr={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Tn(r.split(" ").map(function(o){return o.trim()})):tt();return i.prefix||(i.prefix=W()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,u=i.width,c=i.icon,d=o.width,v=o.icon,p=Pe({transform:f,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:l(l({},mt),{},{fill:"white"})},I=c.children?{children:c.children.map(pa)}:{},L={tag:"g",attributes:l({},p.inner),children:[pa(l({tag:c.tag,attributes:l(l({},c.attributes),p.path)},I))]},z={tag:"g",attributes:l({},p.outer),children:[L]},x="mask-".concat(s||pn()),S="clip-".concat(s||pn()),D={tag:"mask",attributes:l(l({},mt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,z]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Or(v)},D]};return e.push(P,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(x,")")},mt)}),{children:e,attributes:r}}}},Nr={provides:function(t){var a=!1;H.matchMedia&&(a=H.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=l(l({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:l(l({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},_r={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Ir=[Ne,gr,br,hr,yr,Sr,Er,Pr,Cr,Nr,_r];We(Ir,{mixoutsTo:E});var Tr=E.noAuto,Mr=E.config,Lr=E.library,Rr=E.dom,zr=E.parse,Dr=E.findIconDefinition,Fr=E.toHtml,jr=E.icon,Yr=E.layer,$r=E.text,Hr=E.counter;g.noAuto=Tr,g.config=Mr,g.library=Lr,g.dom=Rr,g.parse=zr,g.findIconDefinition=Dr,g.toHtml=Fr,g.icon=jr,g.layer=Yr,g.text=$r,g.counter=Hr,g.api=E,Object.defineProperty(g,"__esModule",{value:!0})})});var Ea=hn(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var ya="fab",ka="github",wa=496,xa=512,pt=[],Aa="f09b",Sa="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";O.definition={prefix:ya,iconName:ka,icon:[wa,xa,pt,Aa,Sa]};O.faGithub=O.definition;O.prefix=ya;O.iconName=ka;O.width=wa;O.height=xa;O.ligatures=pt;O.unicode=Aa;O.svgPathData=Sa;O.aliases=pt});var Ta=hn(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});var Pa="far",Oa="file",Ca=384,Na=512,gt=[128196,128459,61462],_a="f15b",Ia="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z";C.definition={prefix:Pa,iconName:Oa,icon:[Ca,Na,gt,_a,Ia]};C.faFile=C.definition;C.prefix=Pa;C.iconName=Oa;C.width=Ca;C.height=Na;C.ligatures=gt;C.unicode=_a;C.svgPathData=Ia;C.aliases=gt});var ja=hn(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var Ma="fas",La="terminal",Ra=640,za=512,bt=[],Da="f120",Fa="M41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 41.4 86.6zM288 416H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z";N.definition={prefix:Ma,iconName:La,icon:[Ra,za,bt,Da,Fa]};N.faTerminal=N.definition;N.prefix=Ma;N.iconName=La;N.width=Ra;N.height=za;N.ligatures=bt;N.unicode=Da;N.svgPathData=Fa;N.aliases=bt});var Va=hn(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});var Ya="fas",$a="timeline",Ha=640,Ua=512,ht=[],Wa="e29c",Ga="M128 120c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm32 49.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM536 96c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM320 440c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z";_.definition={prefix:Ya,iconName:$a,icon:[Ha,Ua,ht,Wa,Ga]};_.faTimeline=_.definition;_.prefix=Ya;_.iconName=$a;_.width=Ha;_.height=Ua;_.ligatures=ht;_.unicode=Wa;_.svgPathData=Ga;_.aliases=ht});var ba=[];var Xa=on(vt()),Ba=on(Ea()),qa=on(Ta()),Ka=on(ja()),Qa=on(Va());Xa.config.showMissingIcons=!1;var Kr=[qa.faFile,Ka.faTerminal,Qa.faTimeline,Ba.faGithub],Ja=Kr;var Fn=on(vt());Fn.library.add(...Ja.concat(ba));Fn.dom.watch();})();
/*!
 * Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
