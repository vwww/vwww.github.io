(()=>{"use strict";var t={128:function(t,r,e){e(1);var n=e(2),a=n.XKW("each<br> ",1),c=n.XKW(" <!>",1),i=(t,r)=>n.t8m(r,!n.U2M(r)),o=(t,r)=>n.t8m(r,!n.U2M(r)),u=(t,r,e)=>{[r[0],r[1],r[2]]=n.U2M(e)},U=n.XKW("<button> </button>"),v=n.XKW('<tr><td> </td><td><input type="number" min="0" max="94906266"></td><td><!></td><td><!></td><td><!></td><td><!></td><td><!></td></tr>'),l=n.XKW("player(s)<br> <br> ",1),d=n.XKW("<td> <br> <!></td>"),s=n.XKW("<td>N/A</td>"),b=n.XKW("<tr><td> </td><!></tr>"),M=n.XKW('<div class="btn-group d-flex mb-2" role="group"><button>Inverted</button> <button>Count</button></div> <div class="btn-group d-flex mb-3" role="group"><span class="input-group-text">Presets:</span> <!></div> <table class="table table-striped table-bordered table-hover"><thead><tr><th>Move</th><th>Count</th><th>Wins</th><th>Losses</th><th>Ties</th><th>Battle Score</th><th>Round Score</th></tr></thead><tbody><!><tr><td>Total</td><td> <!></td><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table> <table class="table table-striped table-bordered table-hover"><thead><tr><th>Move</th><th>vs. Rock</th><th>vs. Paper</th><th>vs. Scissors</th></tr></thead><tbody></tbody></table>',1);n.clJ(["click"]);var m=e(74);let h=document.getElementById("app");(0,m.LI)(function(t,r){n.VFu(r,!0);let e=(t,r=n.ZTd,e=n.ZTd,i,o)=>{let u=n.UXX(()=>n.tvc(i?.(),m)),U=n.UXX(()=>n.tvc(o?.(),"N/A"));var v=n.UI8(),l=n.VHm(v),d=t=>{var i=c(),o=n.VHm(i),U=n.J9n(o),v=t=>{var c=a(),i=n.J9n(n.VHm(c),2);n.OwZ(t=>n.u7_(i,`${t??""} total`),[()=>n.U2M(u)(r()*e())]),n.R3I(t,c)};n.if(U,t=>{e()>1&&t(v)}),n.OwZ(t=>n.u7_(o,`${t??""} `),[()=>n.U2M(u)(r())]),n.R3I(t,i)},s=t=>{var r=n.fLW();n.OwZ(()=>n.u7_(r,n.U2M(U))),n.R3I(t,r)};n.if(l,t=>{e()?t(d):t(s,!1)}),n.R3I(t,v)};function m(t){return t.toLocaleString()}function h(t){return 1===t?"once":2===t?"twice":m(t)+"x"}function p(t){return(t>=0?"+":"")+m(t)}function f(t){return t?t>0?"table-success":"table-danger":"table-warning"}let B=n.SBE(!1),J=n.SBE(!1),K=["Rock","Paper","Scissors"],O=n.sjz([1,2,3]),w=n.nKH(()=>[0,1,2].map(t=>[0,1,2].map(r=>{if(t===r)return 0;let e=(t+1)%3===r===n.U2M(B);if(n.U2M(J)){let n=O[e?t:r],a=O[e?r:t];if(n<a)return 2*n<=a?e?-1:1:0}return e?1:-1}))),H=n.nKH(()=>{let t=0,r=0,e=0,a=0,c=0,i=[[0,0,0],[0,0,0],[0,0,0]];for(let o=0;o<3;++o){for(let t=0;t<3;++t){let r=O[t]-+(o===t);if(O[o]&&r){let e=n.U2M(w)[o][t];i[o][e+1]+=r}}t+=O[o],r+=i[o][2]*O[o],e+=i[o][0]*O[o],a+=i[o][1]*O[o],c+=Math.sign(i[o][2]-i[o][0])*O[o]}return[t,r,e,a,r-e,c,i]}),_=n.nKH(()=>n.U2M(H)[0]),g=n.nKH(()=>n.U2M(H)[1]),y=n.nKH(()=>n.U2M(H)[2]),W=n.nKH(()=>n.U2M(H)[3]),I=n.nKH(()=>n.U2M(H)[4]),S=n.nKH(()=>n.U2M(H)[5]),R=n.nKH(()=>n.U2M(H)[6]),X=n.nKH(()=>n.U2M(_)*(n.U2M(_)-1)),k=n.nKH(()=>n.U2M(X)/2),Z=[[1,2,3,"3v2v1"],[1,1,0,"1v1"],[2,0,0,"2 same"],[2,1,0,"1v2"],[2,2,0,"2v2"],[1,2,0,"2v1"],[1,1,1,"1 each"],[2,1,1,"1 each + 1"]];var x=M(),$=n.VHm(x),V=n.iUc($);V.__click=[i,B];var L=n.J9n(V,2);L.__click=[o,J],n.mcB($);var j=n.J9n($,2),z=n.J9n(n.iUc(j),2);n.S6b(z,17,()=>Z,n.KzB,(t,r)=>{let e;var a=U();a.__click=[u,O,r];var c=n.iUc(a,!0);n.mcB(a),n.OwZ(t=>{e=n.u8O(a,1,"w-100 btn btn-outline-secondary",null,e,t),n.u7_(c,n.U2M(r)[3])},[()=>({active:O[0]===n.U2M(r)[0]&&O[1]===n.U2M(r)[1]&&O[2]===n.U2M(r)[2]})]),n.R3I(t,a)}),n.mcB(j);var E=n.J9n(j,2),P=n.J9n(n.iUc(E)),T=n.iUc(P);n.S6b(T,17,()=>K,n.KzB,(t,r,a)=>{var c=v();let i=n.nKH(()=>{let[t,r,e]=n.U2M(R)[a];return{loss:t,tie:r,win:e}}),o=n.nKH(()=>n.U2M(i).win-n.U2M(i).loss);var u=n.iUc(c),U=n.iUc(u,!0);n.mcB(u);var l=n.J9n(u),d=n.iUc(l);n.W6n(d),n.mcB(l);var s=n.J9n(l);e(n.iUc(s),()=>n.U2M(i).win,()=>O[a]),n.mcB(s);var b=n.J9n(s);e(n.iUc(b),()=>n.U2M(i).loss,()=>O[a]),n.mcB(b);var M=n.J9n(b);e(n.iUc(M),()=>n.U2M(i).tie,()=>O[a]),n.mcB(M);var m=n.J9n(M);e(n.iUc(m),()=>n.U2M(o),()=>O[a],()=>p),n.mcB(m);var h=n.J9n(m),B=n.iUc(h),J=n.UXX(()=>Math.sign(n.U2M(o)));e(B,()=>n.U2M(J),()=>O[a],()=>p),n.mcB(h),n.mcB(c),n.OwZ((t,e)=>{n.u7_(U,n.U2M(r)),n.u8O(m,1,t),n.u8O(h,1,e)},[()=>n.WyS(O[a]?f(n.U2M(o)):""),()=>n.WyS(O[a]?f(n.U2M(o)):"")]),n.WpJ(d,()=>O[a],t=>O[a]=t),n.R3I(t,c)});var C=n.J9n(T),A=n.J9n(n.iUc(C)),N=n.iUc(A),F=n.J9n(N),q=t=>{var r=l(),e=n.J9n(n.VHm(r),2),a=n.J9n(e,2);n.OwZ((t,r)=>{n.u7_(e,` ${t??""} battle(s)`),n.u7_(a,` ${r??""} result(s)`)},[()=>m(n.U2M(k)),()=>m(n.U2M(X))]),n.R3I(t,r)};n.if(F,t=>{n.U2M(_)>=1&&t(q)}),n.mcB(A);var D=n.J9n(A),G=n.iUc(D,!0);n.mcB(D);var Q=n.J9n(D),Y=n.iUc(Q,!0);n.mcB(Q);var tt=n.J9n(Q),tr=n.iUc(tt,!0);n.mcB(tt);var te=n.J9n(tt),tn=n.iUc(te,!0);n.mcB(te);var ta=n.J9n(te),tc=n.iUc(ta,!0);n.mcB(ta),n.mcB(C),n.mcB(P),n.mcB(E);var ti=n.J9n(E,2),to=n.J9n(n.iUc(ti));n.S6b(to,21,()=>K,n.KzB,(t,r,a)=>{var c=b(),i=n.iUc(c),o=n.iUc(i,!0);n.mcB(i);var u=n.J9n(i);n.S6b(u,17,()=>K,n.KzB,(t,r,c)=>{var i=n.UI8();let o=n.nKH(()=>O[c]-+(a===c));var u=n.VHm(i),U=t=>{var r=d();let i=n.nKH(()=>n.U2M(w)[a][c]);var u=n.iUc(r);e(n.J9n(u,3),()=>n.U2M(o),()=>O[a],()=>h),n.mcB(r),n.OwZ(t=>{n.u8O(r,1,t),n.u7_(u,`${["Lose","Tie","Win"][n.U2M(i)+1]??""} `)},[()=>n.WyS(f(n.U2M(i)))]),n.R3I(t,r)},v=t=>{var r=s();n.R3I(t,r)};n.if(u,t=>{O[a]&&n.U2M(o)?t(U):t(v,!1)}),n.R3I(t,i)}),n.mcB(c),n.OwZ(()=>n.u7_(o,n.U2M(r))),n.R3I(t,c)}),n.mcB(to),n.mcB(ti),n.OwZ((t,r,e,a,c,i,o,u)=>{n.u8O(V,1,`w-100 btn ${(n.U2M(B)?"active btn":"btn-outline")??""}-success`),n.u8O(L,1,`w-100 btn ${(n.U2M(J)?"active btn":"btn-outline")??""}-warning`),n.u7_(N,`${t??""} `),n.u7_(G,r),n.u7_(Y,e),n.u7_(tr,a),n.u8O(te,1,c),n.u7_(tn,i),n.u8O(ta,1,o),n.u7_(tc,u)},[()=>m(n.U2M(_)),()=>m(n.U2M(g)),()=>m(n.U2M(y)),()=>m(n.U2M(W)),()=>n.WyS(f(n.U2M(I))),()=>p(n.U2M(I)),()=>n.WyS(f(n.U2M(S))),()=>p(n.U2M(S))]),n.R3I(t,x),n.Swx()},{target:h}),document.getElementById("appLoading")?.remove()}},r={};function e(n){var a=r[n];if(void 0!==a)return a.exports;var c=r[n]={exports:{}};return t[n](c,c.exports,e),c.exports}e.m=t,e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t=[];e.O=(r,n,a,c)=>{if(n){c=c||0;for(var i=t.length;i>0&&t[i-1][2]>c;i--)t[i]=t[i-1];t[i]=[n,a,c];return}for(var o=1/0,i=0;i<t.length;i++){for(var[n,a,c]=t[i],u=!0,U=0;U<n.length;U++)(!1&c||o>=c)&&Object.keys(e.O).every(t=>e.O[t](n[U]))?n.splice(U--,1):(u=!1,c<o&&(o=c));if(u){t.splice(i--,1);var v=a();void 0!==v&&(r=v)}}return r}})(),e.rv=()=>"1.3.2",(()=>{var t={89:0};e.O.j=r=>0===t[r];var r=(r,n)=>{var a,c,[i,o,u]=n,U=0;if(i.some(r=>0!==t[r])){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(u)var v=u(e)}for(r&&r(n);U<i.length;U++)c=i[U],e.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return e.O(v)},n=self.webpackChunkvwww=self.webpackChunkvwww||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),e.ruid="bundler=rspack@1.3.2";var n=e.O(void 0,["1","3","2","7","32","38","40","39","37"],function(){return e(128)});n=e.O(n)})();