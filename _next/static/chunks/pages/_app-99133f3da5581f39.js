(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{52496:function(n,e,t){"use strict";t.d(e,{P:function(){return d},F:function(){return y}});var r,o=t(95977),i=t(67294),a=!!("undefined"!=typeof window&&window.document&&window.document.createElement),c=new Set,l={xs:0,sm:576,md:768,lg:992,xl:1200};function s(){var n,e,t=r;if(f(),t!==r)try{for(var i=(0,o.XA)(c),a=i.next();!a.done;a=i.next())(0,a.value)()}catch(e){n={error:e}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(n)throw n.error}}}var u=!1;function f(){var n,e,t=window.innerWidth,i={},a=!1;try{for(var c=(0,o.XA)(Object.keys(l)),s=c.next();!s.done;s=c.next()){var u=s.value;i[u]=t>=l[u],i[u]!==r[u]&&(a=!0)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(e=c.return)&&e.call(c)}finally{if(n)throw n.error}}a&&(r=i)}function d(n){l=n,r&&f()}function y(){a&&!u&&(r={},f(),window.addEventListener("resize",s),u=!0);var n=(0,o.CR)((0,i.useState)(r),2),e=n[0],t=n[1];return(0,i.useEffect)(function(){if(a){u||window.addEventListener("resize",s);var n=function(){t(r)};return c.add(n),function(){c.delete(n),0===c.size&&(window.removeEventListener("resize",s),u=!1)}}},[]),e}},6840:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(44178)}])},44178:function(n,e,t){"use strict";t.r(e);var r=t(85893),o=t(96238),i=t.n(o),a=t(67294),c=t(52496),l=t(9008),s=t.n(l);t(93814),c.P&&(0,c.P)({isSM:375,isXL:1440}),e.default=function(n){let{Component:e,pageProps:t}=n,o=e.getLayout||(n=>n);return(0,a.useEffect)(()=>{console.log("111 in MyApp");let n=(null==window?void 0:window.location.hostname)==="www.bitgenie.io",e=localStorage.getItem("isDebugMode");n&&"true"!==e&&(window.console.log=()=>{},console.clear())},[]),(0,a.useEffect)(()=>{document&&document.body.classList.add(i().className)},[i().className]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"BitGenie is a one-stop shop for Ordinals, Runes, and other Bitcoin DeFi tools."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/logo.png",type:"image/x-icon"}),(0,r.jsx)("meta",{name:"description",content:"BitGenie offers seamless token swaps and staking for assets in the Bitcoin and Merlin ecosystems."})]}),(0,r.jsx)("main",{className:"".concat(i().className," h-fit min-h-full"),style:{backgroundImage:"url(/imgs/bg.png)"},children:o((0,r.jsx)(e,{...t}))})]})}},93814:function(){},96238:function(n){n.exports={style:{fontFamily:"'__localProtoMono_b8de3a', '__localProtoMono_Fallback_b8de3a'"},className:"__className_b8de3a"}},9008:function(n,e,t){n.exports=t(42636)},95977:function(n,e,t){"use strict";t.d(e,{CR:function(){return o},XA:function(){return r},ev:function(){return i}});function r(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function i(n,e,t){if(t||2==arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError}},function(n){var e=function(e){return n(n.s=e)};n.O(0,[9774,179],function(){return e(6840),e(96885)}),_N_E=n.O()}]);