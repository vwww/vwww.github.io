(()=>{"use strict";var e={133:function(e,t,n){n(1);var r=n(2),c=r.XKW('<div class="col-3"><button class="btn btn-outline-secondary d-block w-100"> </button></div>'),a=r.XKW('<div class="row mb-2"></div>'),i=r.XKW('<div style="max-width: 576px; margin: auto"><div class="row mb-3"><input class="form-control text-center" readonly=""></div> <!></div>');r.clJ(["click"]);var s=n(74);let u=document.getElementById("app");(0,s.LI)(function(e,t){r.VFu(t,!0),(w=h||(h={}))[w.Result=0]="Result",w[w.ResultMem=1]="ResultMem",w[w.Entering=2]="Entering",w[w.EnteringNum=3]="EnteringNum",w[w.EnteringDec=4]="EnteringDec";let n=r.SBE("0"),s=0,u=0,o=r.SBE(0),l="+",f=h.Result,m=!1;function v(e){let t=f>h.Result;if(e&&("+"===l||"-"===l)){if(!t)return;m&&(u=s,m=!1),s=u+u*d()/("-"===l?-100:100)}else{if(m){switch(l){case"*":u=s,s=d();break;case"/":u=1;case"+":case"-":t||(s=u),u=d()}m=!1}else t&&(s=d());switch(l){case"+":s+=u;break;case"-":s-=u;break;case"*":s*=u,e&&(s/=100);break;case"/":s/=u,e&&(s*=100)}}r.t8m(n,s.toString(),!0),f=h.Result}function d(){try{return Number(r.U2M(n))}catch{return 0}}function b(e){let t=d();r.t8m(n,e(t).toString(),!0),f=h.Entering}function g(e){m?v():(f>=h.Entering&&(s=d()),f=h.Result),r.t8m(o,r.U2M(o)+(e?-s:s))}function p(){!function(e){if(f<h.EnteringNum)f=h.EnteringNum,r.t8m(n,e,!0);else{if("0"===e&&"0"===r.U2M(n))return;r.t8m(n,r.U2M(n)+e)}}(this.innerText)}function E(){var e;e=this.innerText,f>h.Result&&m&&v(),s=d(),l=e,f=h.Result,m=!0}let M=r.sjz({}),k=[[["C",function(){r.t8m(n,"0"),s=0,u=0,l="+",f=h.Result}],["%",()=>v(!0)],["√",()=>b(Math.sqrt)],["\xb2",()=>b(e=>e*e)]],[["MRC",function(){(f===h.ResultMem?function(){r.t8m(o,0)}:function(){r.t8m(n,(s=r.U2M(o)).toString(),!0),f=h.ResultMem})()}],["M-",()=>g(!0)],["M+",()=>g()],["CE",function(){f>h.Result&&(r.t8m(n,"0"),f=h.Entering)}]],[["7",p],["8",p],["9",p],["/",E]],[["4",p],["5",p],["6",p],["*",E]],[["1",p],["2",p],["3",p],["-",E]],[["0",p],[".",function(){f<h.EnteringNum?(f=h.EnteringDec,r.t8m(n,"0.")):f!==h.EnteringDec&&(f=h.EnteringDec,r.t8m(n,r.U2M(n)+"."))}],["=",()=>v()],["+",E]]];var w,h,R=i();r.Ba6("keydown",r.u9i,function(e){let t=e.key;switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":case"+":case"-":case"*":case"/":case"=":case"%":break;case"c":case"C":if(e.ctrlKey||e.metaKey||e.altKey)return;case"Backspace":case"Escape":t="C";break;case"Enter":t="=";break;case"Delete":t="CE";default:return}let n=M[t];n?.focus(),n?.click(),e.preventDefault()});var y=r.iUc(R),U=r.iUc(y);r.W6n(U),r.mcB(y);var B=r.J9n(y,2);r.S6b(B,17,()=>k,r.KzB,(e,t)=>{var n=a();r.S6b(n,21,()=>r.U2M(t),r.KzB,(e,t)=>{var n=c(),a=r.iUc(n);a.__click=function(...e){r.U2M(t)[1]?.apply(this,e)};var i=r.iUc(a,!0);r.mcB(a),r.Z1T(a,(e,t)=>M[t[0]]=e,e=>M?.[e[0]],()=>[r.U2M(t)]),r.mcB(n),r.OwZ(()=>r.u7_(i,r.U2M(t)[0])),r.R3I(e,n)}),r.mcB(n),r.R3I(e,n)}),r.mcB(R),r.OwZ(()=>r.Vj(U,`${r.U2M(n)??""}${(r.U2M(o)?" M":"")??""}`)),r.R3I(e,R),r.Swx()},{target:u}),document.getElementById("appLoading")?.remove()}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];n.O=(t,r,c,a)=>{if(r){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,c,a];return}for(var s=1/0,i=0;i<e.length;i++){for(var[r,c,a]=e[i],u=!0,o=0;o<r.length;o++)(!1&a||s>=a)&&Object.keys(n.O).every(e=>n.O[e](r[o]))?r.splice(o--,1):(u=!1,a<s&&(s=a));if(u){e.splice(i--,1);var l=c();void 0!==l&&(t=l)}}return t}})(),n.rv=()=>"1.3.2",(()=>{var e={94:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var c,a,[i,s,u]=r,o=0;if(i.some(t=>0!==e[t])){for(c in s)n.o(s,c)&&(n.m[c]=s[c]);if(u)var l=u(n)}for(t&&t(r);o<i.length;o++)a=i[o],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.3.2";var r=n.O(void 0,["1","4","3","2","7","9","38","47","46"],function(){return n(133)});r=n.O(r)})();