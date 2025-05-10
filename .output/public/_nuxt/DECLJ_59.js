import{h,o as b,a as _,c as x,b as t,d as a,e as c,u as l,f as g,g as v,i as k}from"./DOIr63ts.js";/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,o)=>o?o.toUpperCase():n.toLowerCase()),E=s=>{const e=C(s);return e.charAt(0).toUpperCase()+e.slice(1)},A=(...s)=>s.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=({size:s,strokeWidth:e=2,absoluteStrokeWidth:n,color:o,iconNode:f,name:r,class:st,...w},{slots:u})=>h("svg",{...i,width:s||i.width,height:s||i.height,stroke:o||i.stroke,"stroke-width":n?Number(e)*24/Number(s):e,class:A("lucide",...r?[`lucide-${p(E(r))}-icon`,`lucide-${p(r)}`]:["lucide-icon"]),...w},[...f.map(y=>h(...y)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(s,e)=>(n,{slots:o})=>h(j,{...n,iconNode:e,name:s},o);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=m("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=m("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=m("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),L={class:"relative min-h-screen bg-black overflow-hidden"},M=t("div",{class:"absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"},null,-1),U=t("video",{class:"absolute inset-0 w-full h-full object-cover",autoplay:"",loop:"",muted:"",playsinline:""},[t("source",{src:"https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4",type:"video/mp4"})],-1),N={class:"relative z-20 px-6 py-4 flex justify-between items-center"},P={class:"flex items-center gap-8"},V=t("div",{class:"w-10 h-10"},[t("img",{src:"",alt:"Logo",class:"w-full h-full"})],-1),B={class:"flex items-center gap-4"},H={class:"relative"},I={class:"bg-gray-200/90 text-black px-4 py-1.5 rounded-full text-sm font-medium flex items-center"},O=t("button",{class:"bg-transparent border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium"}," WHITEPAPER ",-1),R={class:"flex items-center gap-6"},S={class:"text-white text-sm font-medium flex items-center"},$={class:"text-white text-sm font-medium flex items-center"},D=t("button",{class:"text-white text-sm font-medium"},"PROLOGUE",-1),G=t("button",{class:"text-white text-sm font-medium"},"ABOUT",-1),q=t("button",{class:"text-white text-sm font-medium"},"CONTACT",-1),Z={class:"text-white"},F={class:"relative z-20 px-6 pt-16 flex flex-col h-[calc(100vh-80px)]"},K={class:"flex flex-col md:flex-row justify-between items-start h-full"},W={class:"md:w-1/2 mt-8 md:mt-10"},X=t("h1",{class:"text-white text-8xl md:text-[150px] font-extrabold tracking-tighter leading-none"}," REDEFINE ",-1),J=t("div",{class:"mt-4 text-white/90"},[t("p",{class:"text-xl"},"Enter the Metagame"),t("p",{class:"text-xl"},"Unleash the Play Economy")],-1),Q={class:"mt-8 bg-yellow-300/90 text-black px-6 py-3 rounded-full font-medium flex items-center hover:bg-yellow-300 transition-colors"},Y=t("div",{class:"md:w-1/2 flex justify-end items-end h-full"},[t("img",{src:"",alt:"Game character",class:"character-animation max-h-[80vh] object-contain z-10"}),t("h2",{class:"text-white text-7xl md:text-[150px] font-extrabold tracking-tighter absolute bottom-4 right-6"}," GAMING ")],-1),tt=t("footer",{class:"relative z-20 px-6 py-2 text-white/60 text-sm"},[t("a",{href:"https://zentry.com/whitepaper",class:"hover:text-white transition-colors"}," https://zentry.com/whitepaper ")],-1),et={__name:"Hero",setup(s){return b(()=>{const e=document.querySelector("video");e&&(e.play().catch(o=>{console.log("Video play error:",o),document.addEventListener("click",()=>{e.play()},{once:!0})}),e.addEventListener("pause",()=>{e.play()}))}),(e,n)=>(_(),x("div",L,[M,U,t("header",N,[t("div",P,[V,t("div",B,[t("div",H,[t("button",I,[a(" PRODUCTS "),c(l(d),{class:"ml-1 w-4 h-4"})])]),O])]),t("div",R,[t("button",S,[a(" NEXUS "),c(l(d),{class:"ml-1 w-4 h-4"})]),t("button",$,[a(" VAULT "),c(l(d),{class:"ml-1 w-4 h-4"})]),D,G,q,t("button",Z,[c(l(T),{class:"w-6 h-6"})])])]),t("main",F,[t("div",K,[t("div",W,[X,J,t("button",Q,[c(l(z),{class:"mr-2 w-5 h-5"}),a(" WATCH TRAILER ")])]),Y])]),tt]))}},nt=g({__name:"index",setup(s){return v({title:"zentry-clone - Home",meta:[{name:"description",content:"Effortlessly summon your journey with our App."}]}),k({title:"zentry-clone",ogTitle:"zentry-clone",description:"Effortlessly summon your journey with our App.",ogDescription:"Effortlessly summon your journey with our App."}),(e,n)=>{const o=et;return _(),x("main",null,[c(o)])}}});export{nt as default};
