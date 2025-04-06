(()=>{"use strict";var e={187:function(e,t,a){a(1),a(90);var r=a(2);function n(e,t,a=!1){let o=r.SBE(r.sjz(t));function l(e){return"undefined"===e?void 0:JSON.parse(e)}if(window.localStorage){let n=localStorage.getItem(e);null!==n&&r.t8m(o,l(n),!0),r.JcM(()=>localStorage.setItem(e,void 0===r.U2M(o)?"undefined":JSON.stringify(r.U2M(o)))),a&&window.addEventListener("storage",a=>a.storageArea===localStorage&&a.key===e&&r.t8m(o,null==a.newValue?t:l(a.newValue),!0))}return{get value(){return r.U2M(o)},set value(newVal){r.t8m(o,newVal,!0)}}}function o(e,t){r.JGr(t,r.U2M(t).value=-1)}var l=r.XKW("<h2>Add two events!</h2>"),c=r.XKW("<h2>Add another event!</h2>"),d=r.XKW('<table class="table table-striped table-bordered table-hover caption-top w-auto"><caption> </caption><thead><tr><th scope="col">Quantity</th><th scope="col">s</th><th scope="col">/s</th><th scope="col">/min</th></tr></thead><tbody><tr><th scope="row">Last</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Avg Time</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Avg Freq</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Sum Time</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr><tr><th scope="row">Sum Freq</th><td class="text-end"> </td><td class="text-end"> </td><td class="text-end"> </td></tr></tbody></table>'),i=r.XKW('<div class="btn-group d-flex mb-3" role="group"><button class="btn btn-outline-primary">Add Event</button> <button>Reset</button></div> <!>',1);r.clJ(["click"]);var u=a(74);let v=document.getElementById("app");(0,u.LI)(function(e,t){let a;r.VFu(t,!1);let u=r.VwA(n("tool/freq/intervalCount",-1)),v=n("tool/freq/startTime",0),s=n("tool/freq/prevTime",0),U=r.VwA(n("tool/freq/lastDelay",0)),m=r.VwA(n("tool/freq/sumTime",0)),f=r.VwA(n("tool/freq/sumFreq",0));r.S1n();var p=i(),h=r.VHm(p),x=r.iUc(h);x.__click=function(){if(r.JGr(u,++r.U2M(u).value)){let e=Date.now();r.JGr(U,r.U2M(U).value=e-s.value),s.value=e,r.JGr(m,r.U2M(m).value=e-v.value),r.JGr(f,r.U2M(f).value+=1/r.U2M(U).value)}else v.value=s.value=Date.now(),r.JGr(f,r.U2M(f).value=0)};var M=r.J9n(x,2);M.__click=[o,u],r.mcB(h);var J=r.J9n(h,2),w=e=>{var t=l();r.R3I(e,t)},b=(e,t)=>{var a=e=>{var t=c();r.R3I(e,t)},n=e=>{var t=d();let a=r.UXX(()=>r.U2M(m).value/r.U2M(u).value),n=r.UXX(()=>r.U2M(f).value/r.U2M(u).value);var o=r.iUc(t),l=r.iUc(o);r.mcB(o);var c=r.J9n(o,2),i=r.iUc(c),v=r.J9n(r.iUc(i)),s=r.iUc(v,!0);r.mcB(v);var p=r.J9n(v),h=r.iUc(p,!0);r.mcB(p);var x=r.J9n(p),M=r.iUc(x,!0);r.mcB(x),r.mcB(i);var J=r.J9n(i),w=r.J9n(r.iUc(J)),b=r.iUc(w,!0);r.mcB(w);var B=r.J9n(w),g=r.iUc(B,!0);r.mcB(B);var _=r.J9n(B),F=r.iUc(_,!0);r.mcB(_),r.mcB(J);var O=r.J9n(J),y=r.J9n(r.iUc(O)),X=r.iUc(y,!0);r.mcB(y);var S=r.J9n(y),k=r.iUc(S,!0);r.mcB(S);var A=r.J9n(S),q=r.iUc(A,!0);r.mcB(A),r.mcB(O);var I=r.J9n(O),V=r.J9n(r.iUc(I)),E=r.iUc(V,!0);r.mcB(V);var G=r.J9n(V),j=r.iUc(G,!0);r.mcB(G);var R=r.J9n(G),T=r.iUc(R,!0);r.mcB(R),r.mcB(I);var C=r.J9n(I),K=r.J9n(r.iUc(C)),L=r.iUc(K,!0);r.mcB(K);var W=r.J9n(K),D=r.iUc(W,!0);r.mcB(W);var N=r.J9n(W),P=r.iUc(N,!0);r.mcB(N),r.mcB(C),r.mcB(c),r.mcB(t),r.OwZ((e,t,a,n,o,c,d,i,v,U,m,f,p,x,J)=>{r.u7_(l,`Count of intervals = ${r.U2M(u).value??""}`),r.u7_(s,e),r.u7_(h,t),r.u7_(M,a),r.u7_(b,n),r.u7_(g,o),r.u7_(F,c),r.u7_(X,d),r.u7_(k,i),r.u7_(q,v),r.u7_(E,U),r.u7_(j,m),r.u7_(T,f),r.u7_(L,p),r.u7_(D,x),r.u7_(P,J)},[()=>(.001*r.U2M(U).value).toFixed(3),()=>(1e3/r.U2M(U).value).toFixed(3),()=>(6e4/r.U2M(U).value).toFixed(3),()=>(.001*r.U2M(a)).toFixed(3),()=>(1e3/r.U2M(a)).toFixed(3),()=>(6e4/r.U2M(a)).toFixed(3),()=>(.001/r.U2M(n)).toFixed(3),()=>(1e3*r.U2M(n)).toFixed(3),()=>(6e4*r.U2M(n)).toFixed(3),()=>(.001*r.U2M(m).value).toFixed(3),()=>(1e3/r.U2M(m).value).toFixed(3),()=>(6e4/r.U2M(m).value).toFixed(3),()=>(.001/r.U2M(f).value).toFixed(3),()=>(1e3*r.U2M(f).value).toFixed(3),()=>(6e4*r.U2M(f).value).toFixed(3)],r.UXX),r.R3I(e,t)};r.if(e,e=>{r.U2M(u).value?e(n,!1):e(a)},t)};r.if(J,e=>{r.U2M(u).value<0?e(w):e(b,!1)}),r.OwZ(e=>a=r.u8O(M,1,"btn btn-outline-secondary",null,a,e),[()=>({disabled:r.U2M(u).value<0})],r.UXX),r.R3I(e,p),r.Swx()},{target:v}),document.getElementById("appLoading")?.remove()}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];a.O=(t,r,n,o)=>{if(r){o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o];return}for(var c=1/0,l=0;l<e.length;l++){for(var[r,n,o]=e[l],d=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(a.O).every(e=>a.O[e](r[i]))?r.splice(i--,1):(d=!1,o<c&&(c=o));if(d){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}})(),a.rv=()=>"1.3.2",(()=>{var e={104:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[l,c,d]=r,i=0;if(l.some(t=>0!==e[t])){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(d)var u=d(a)}for(t&&t(r);i<l.length;i++)o=l[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.ruid="bundler=rspack@1.3.2";var r=a.O(void 0,["1","2","6","17","25","61"],function(){return a(187)});r=a.O(r)})();