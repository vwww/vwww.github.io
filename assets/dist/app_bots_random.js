(()=>{"use strict";var e={99:function(e,t,n){n("1");var r=n("2"),o=n("71"),a=n("100"),i=r.XKW('<div class="btn-group d-flex mb-3" role="group"><button class="btn btn-primary">Randomize</button></div>'),l=r.XKW('<div class="alert alert-danger" role="alert">This page is loading the word list&hellip;</div>'),c=r.XKW('<span class="badge text-bg-danger"> </span>'),s=r.XKW("<span> </span>"),u=r.XKW('<p class="svelte-qopwkp"><!> </p>'),p=r.XKW("<!> <div></div>",1);let d={hash:"svelte-qopwkp",code:"p.svelte-qopwkp {border:1px dashed;display:inline-block;font-size:1.6em;position:relative;}"};r.clJ(["click"]);!function(e){let t=document.getElementById("app"),n=(0,o.LI)(e,{target:t});document.getElementById("appLoading")?.remove()}(function(e,t){r.VFu(t,!0),r.qOq(e,d);let n=r.SBE(void 0),v=r.SBE(r.sjz([]));function f(e=280){let t=[],o=e;for(;o>1;){let e=function(e){let t=[];do{let o=r.U2M(n)?function(e){let t=Math.min(Math.floor(Math.exp(Math.random()*Math.log(e.length+1))),e.length);return e[t-1]}(r.U2M(n)):"the";if(t.push(o),e&&(e-=o.length+1)<=1)break}while(.8>Math.random());return t.join(" ")}(o);t.push(e),o-=e.length+1}let a=t.join("—");return a.length>e?[a.slice(0,e-1)+"…",a]:[a]}function h(){r.t8m(v,r.sjz(Array(16).fill(void 0).map(f)))}(0,o.H3)(async()=>{let e=await fetch("random_rankedWords.json");r.t8m(n,r.sjz(await e.json())),h()});var g=p(),m=r.VHm(g),b=e=>{var t=i();r.iUc(t).__click=h,r.mcB(t),r.R3I(e,t)},w=e=>{var t=l();r.R3I(e,t)};r.if(m,e=>{r.U2M(n)?e(b):e(w,!1)});var O=r.J9n(m,2);r.S6b(O,21,()=>r.U2M(v),([e,t])=>e,(e,t)=>{let n=()=>r.U2M(t)[0],o=()=>r.U2M(t)[1];var i=u(),l=r.iUc(i),p=e=>{var t=c(),n=r.iUc(t,!0);r.mcB(t),r.OwZ(()=>r.u7_(n,o().length)),r.R3I(e,t)},d=e=>{var t=s(),o=r.iUc(t,!0);r.mcB(t),r.OwZ(()=>{r.u8O(t,`badge text-bg-${(280===n().length?"success":"warning")??""}`),r.u7_(o,n().length)}),r.R3I(e,t)};r.if(l,e=>{o()?e(p):e(d,!1)});var v=r.J9n(l);r.mcB(i),r.OwZ(()=>{r.qt_(i,"title",o()),r.u7_(v,` ${n()??""}`)}),r.eRy(3,i,()=>a.JD),r.R3I(e,i)}),r.mcB(O),r.R3I(e,g),r.Swx()})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e=[];n.O=function(t,r,o,a){if(r){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,o,a];return}for(var l=1/0,i=0;i<e.length;i++){for(var r=e[i][0],o=e[i][1],a=e[i][2],c=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every(function(e){return n.O[e](r[s])})?r.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(i--,1);var u=o();void 0!==u&&(t=u)}}return t}})(),n.rv=function(){return"1.1.8"},(()=>{var e={app_bots_random:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o=r[0],a=r[1],i=r[2],l,c,s=0;if(o.some(function(t){return 0!==e[t]})){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(i)var u=i(n)}for(t&&t(r);s<o.length;s++)c=o[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(u)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.1.8";var r=n.O(void 0,["1","2","8","6","7","5","20"],function(){return n("99")});r=n.O(r)})();