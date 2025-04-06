(()=>{"use strict";var e={108:function(e,t,r){r(1);var s,n,a,i,o,l,d=r(2),u=r(109),c=r(110),m=r(111),h=r(112),g=r(113),I=r(114),p=r(115),v=r(116);let E=[["optIndependent","b",!1,"Independent","players or teams win/lose independently of each other"],["optTeams","i",0,"Teams","number of teams players are randomly assigned to every game",0,45]];function R({optIndependent:e,optTeams:t}){return(e?"Independent ":"One-Winner ")+(t?t+" Teams":"FFA")}var y=r(119),S=r(120),f=r(121);(s=i||(i={}))[s.WELCOME=0]="WELCOME",s[s.JOIN=1]="JOIN",s[s.LEAVE=2]="LEAVE",s[s.RESET=3]="RESET",s[s.RENAME=4]="RENAME",s[s.PING=5]="PING",s[s.PING_TIME=6]="PING_TIME",s[s.CHAT=7]="CHAT",s[s.ACTIVE=8]="ACTIVE",s[s.ROUND_WAIT=9]="ROUND_WAIT",s[s.ROUND_INTERM=10]="ROUND_INTERM",s[s.ROUND_START=11]="ROUND_START",s[s.READY=12]="READY",s[s.MOVE_CONFIRM=13]="MOVE_CONFIRM",s[s.END_ROUND=14]="END_ROUND",s[s.END_TURN=15]="END_TURN",(n=o||(o={}))[n.RESET=0]="RESET",n[n.RENAME=1]="RENAME",n[n.PONG=2]="PONG",n[n.CHAT=3]="CHAT",n[n.ACTIVE=4]="ACTIVE",n[n.READY=5]="READY",n[n.MOVE=6]="MOVE",n[n.MOVE_END=7]="MOVE_END",(a=l||(l={}))[a.WAITING=0]="WAITING",a[a.INTERMISSION=1]="INTERMISSION",a[a.ACTIVE=2]="ACTIVE";class M{#e=d.SBE(-1);get cn(){return d.U2M(this.#e)}set cn(e){d.t8m(this.#e,e,!0)}#t=d.SBE("unnamed");get name(){return d.U2M(this.#t)}set name(e){d.t8m(this.#t,e,!0)}#r=d.SBE(!1);get active(){return d.U2M(this.#r)}set active(e){d.t8m(this.#r,e,!0)}#s=d.SBE(0);get rank(){return d.U2M(this.#s)}set rank(e){d.t8m(this.#s,e,!0)}#n=d.SBE(-1);get ping(){return d.U2M(this.#n)}set ping(e){d.t8m(this.#n,e,!0)}#a=d.SBE(!1);get ready(){return d.U2M(this.#a)}set ready(e){d.t8m(this.#a,e,!0)}#i=d.SBE(!1);get inRound(){return d.U2M(this.#i)}set inRound(e){d.t8m(this.#i,e,!0)}#o=d.SBE(0);get wins(){return d.U2M(this.#o)}set wins(e){d.t8m(this.#o,e,!0)}#l=d.SBE(0);get losses(){return d.U2M(this.#l)}set losses(e){d.t8m(this.#l,e,!0)}#d=d.SBE(0);get total(){return d.U2M(this.#d)}set total(e){d.t8m(this.#d,e,!0)}#u=d.SBE(0);get streak(){return d.U2M(this.#u)}set streak(e){d.t8m(this.#u,e,!0)}resetScore(){this.wins=0,this.losses=0,this.total=0,this.streak=0}formatName(){return`${this.name} (${this.cn})`}}class T{chat;#c=d.SBE(d.sjz((0,p.j)(E)));get mode(){return d.U2M(this.#c)}set mode(e){d.t8m(this.#c,e,!0)}localClient=new M;clients=[];#m=d.SBE(d.sjz([]));get leaderboard(){return d.U2M(this.#m)}set leaderboard(e){d.t8m(this.#m,e,!0)}#h=d.SBE(d.sjz(l.WAITING));get roundState(){return d.U2M(this.#h)}set roundState(e){d.t8m(this.#h,e,!0)}#g=d.SBE(0);get roundTimerStart(){return d.U2M(this.#g)}set roundTimerStart(e){d.t8m(this.#g,e,!0)}#I=d.SBE(0);get roundTimerEnd(){return d.U2M(this.#I)}set roundTimerEnd(e){d.t8m(this.#I,e,!0)}#p=d.SBE(d.sjz([]));get roundPlayers(){return d.U2M(this.#p)}set roundPlayers(e){d.t8m(this.#p,e,!0)}#v=d.SBE(d.sjz([]));get roundPlayerQueue(){return d.U2M(this.#v)}set roundPlayerQueue(e){d.t8m(this.#v,e,!0)}#E=d.SBE(d.sjz([]));get pastGames(){return d.U2M(this.#E)}set pastGames(e){d.t8m(this.#E,e,!0)}#R=d.SBE();get room(){return d.U2M(this.#R)}set room(e){d.t8m(this.#R,e,!0)}constructor(e){this.chat=e,setTimeout(y.$$,100)}enterGame(e,t){this.room?.disconnect(),this.room=e,e.registerRecv(t=>{if(this.room===e){let e=new S.J(t);try{for(;e.remaining>0;)this.processMessage(e);if(e.overread)throw Error("overread")}catch(t){console.error("neterr",t),console.log(e.debugBuf,e),this.room.disconnect()}}}),e.registerDisc(()=>{this.room===e?(this.chat.addSysMessage("You disconnected."),this.room=void 0):this.chat.addSysMessage("You disconnected from the old room.")});let r=new f.T;r.putInt(0),r.putString(t),e.send(r.toArray()),this.chat.addSysMessage("You are joining the game.")}leaveGame(){this.room?.disconnect()}sendReset(){this.room?.send(new f.T().putInt(o.RESET).toArray())}sendRename(e){this.room?.send(new f.T().putInt(o.RENAME).putString(e).toArray())}sendActive(e){this.room?.send(new f.T().putInt(o.ACTIVE).putBool(e).toArray())}sendChat(e,t,r=-1){if(!this.room)return void this.chat.addSysMessage("cannot send chat message: not connected to game room");this.room.send(new f.T().putInt(o.CHAT).putInt(t).putInt(r).putString(e.slice(0,100)).toArray())}sendReady(e){this.room?.send(new f.T().putInt(o.READY).putBool(e).toArray())}addHistory(e){this.pastGames.length>=100&&this.pastGames.pop(),this.pastGames.unshift(e)}clearHistory(){this.pastGames=[]}processMessage(e){switch(e.getInt()){case i.WELCOME:{let t=e.getInt();0!==t&&alert(`different protocol version (client: 0, server: ${t})
refresh the page for updates?`),this.clients.length=0;let r=(0,y.PD)(e.getInt());this.mode.optIndependent=e.getBool(),this.mode.optTeams=e.getInt();for(let t=0;t<=y.CV;t++){let t=e.getInt();if(t<0)break;let s=t==r?this.localClient:new M;s.cn=t,s.active=e.getBool(),s.name=(0,y.DF)(e.getString(20)),s.ping=e.getInt(),s.ready=!1,s.inRound=!1,s.wins=e.getInt(),s.losses=e.getInt(),s.total=s.wins+s.losses,s.streak=e.getInt(),this.clients[t]=s}let s=e.getInt();if(0===s)this.roundWait();else if(1===s){this.roundIntermission(e.getInt());for(let t=0;t<=y.CV;t++){let t=e.getInt();if(t<0)break;let r=this.clients[t];r&&(r.ready=!0)}}else 2===s&&this.roundStart(e.getInt());let n=[];for(let t=0;t<=y.CV;t++){let t=e.getInt();if(t<0)break;let r=this.clients[t];r&&(r.inRound=!0,n.push(r))}this.roundPlayers=n;let a=[];for(let t=0;t<=y.CV;t++){let t=e.getInt();if(t<0)break;let r=this.clients[t];r&&a.push(r)}this.roundPlayerQueue=a,this.updatePlayers();break}case i.JOIN:{let t=e.getInt(),r=(0,y.DF)(e.getString(20));if(this.clients[t])break;let s=new M;s.cn=t,s.name=r,this.clients[t]=s,this.chat.playerJoined(s.formatName()),this.updatePlayers();break}case i.LEAVE:{let t=e.getInt(),r=this.clients[t];if(!r)break;r.active&&this.playerDeactivated(r),this.chat.playerLeft(r.formatName()),delete this.clients[t],this.updatePlayers();break}case i.RESET:{let t=e.getInt(),r=this.clients[t];r&&(r.resetScore(),this.updatePlayers(),this.chat.playerReset(r.formatName()));break}case i.RENAME:{let t=e.getInt(),r=(0,y.DF)(e.getString(20)),s=this.clients[t];s&&(this.chat.playerRename(s.formatName(),r),s.name=r);break}case i.PING:this.room?.send(new f.T().putInt(o.PONG).putInt(e.getInt()).toArray());break;case i.PING_TIME:for(let t=0;t<=y.CV;t++){let t=e.getInt();if(t<0)break;let r=e.getInt(),s=this.clients[t];s&&(s.ping=r)}break;case i.CHAT:{let t=e.getInt(),r=e.getInt(),s=e.getInt(),n=e.getString(100),a=this.clients[t],i=(0,y.U1)(a,t),o=this.clients[s],l=o?a===this.localClient?"you":(0,y.U1)(o,s):void 0;this.chat.addChatMessage(i,n,r,l);break}case i.ACTIVE:{let t=e.getInt(),r=e.getBool(),s=this.clients[t];s&&(s.active=r,r?this.playerActivated(s):this.playerDeactivated(s),this.updatePlayers());break}case i.ROUND_WAIT:this.roundWait();break;case i.ROUND_INTERM:this.roundIntermission(5e3);break;case i.ROUND_START:{this.unsetInRound();let t=[];for(let r=0;r<=y.CV;r++){let r=e.getInt();if(r<0)break;let s=this.clients[r];s&&(s.inRound=!0,t.push(s))}this.roundPlayers=t,this.roundPlayerQueue=[],this.roundStart(3e3);break}case i.READY:{let t=e.getInt(),r=e.getBool(),s=this.clients[t];s&&(s.ready=r);break}case i.MOVE_CONFIRM:case i.END_TURN:break;case i.END_ROUND:this.processEndRound(e);break;default:throw Error("tag type")}}processEndRound(e){let t=e.getInt(),r=Array(t).fill(!1).map(()=>e.getBool()),s=Math.min(e.getInt(),this.clients.map(Boolean).length),n={playerCount:s,wins:r.map((e,t)=>({id:t,win:e,players:[]}))};for(let a=0;a<s;a++){let s=e.getInt(),i=this.clients[s];if(!i)continue;let o=a%t;r[o]?(i.wins++,i.streak<0&&(i.streak=0),i.streak++):(i.losses++,i.streak>0&&(i.streak=0),i.streak--),i.total++,n.wins[o].players.push(i.formatName())}this.updatePlayers(),this.addHistory(n)}updatePlayers(){this.leaderboard=(0,y.E8)(this.clients,[e=>e.streak,e=>e.wins-e.losses,e=>e.wins])}playerActivated(e){this.roundPlayerQueue.push(e)}playerDeactivated(e){this.roundPlayers=this.roundPlayers.filter(t=>t!==e),this.roundPlayerQueue=this.roundPlayerQueue.filter(t=>t!==e),e.inRound=!1}roundWait(){this.roundState=l.WAITING,this.unsetReady()}roundIntermission(e){this.roundState=l.INTERMISSION,this.setTimer(e),this.unsetReady()}roundStart(e){this.roundState=l.ACTIVE,this.setTimer(e),this.unsetReady()}setTimer(e){this.roundTimerStart=Date.now(),this.roundTimerEnd=Date.now()+e}unsetReady(){for(let e of this.clients)e&&(e.ready=!1)}unsetInRound(){for(let e of this.clients)e&&(e.inRound=!1)}}var U=d.XKW("<span> </span>"),N=d.XKW("<div>FFA: <!></div>"),w=d.XKW("<div> <!></div>"),A=d.XKW('<li class="list-group-item"><!></li>'),O=d.XKW('<li class="list-group-item">No past games!</li>'),b=d.XKW('<ul class="list-group list-group-flush overflow-auto" style="max-height: 15rem"></ul>'),B=r(117),k=d.XKW("<span> </span>"),D=d.XKW("<span> </span>"),P=d.XKW("<div>In game: <!></div> <div>Queue: <!></div>",1),C=d.XKW("<!> <!>",1),W=d.XKW("<!> <div> </div> <!>",1),V=r(94),G=d.XKW('<!> <!> <!> <div class="row"><div class="col-12 col-lg-8"><!> <!></div> <div class="col-12 col-lg-4 mb-3"><!></div></div>',1);(0,r(88).Z)(function(e,t){let r;d.VFu(t,!0);let s=new c.ZP,n=new T(s),a=d.nKH(()=>n.pastGames),i=d.nKH(()=>n.leaderboard),o=d.nKH(()=>n.roundState),y=(0,V.E)("game/mp/_shared/name","");var S=G(),f=d.VHm(S);(0,g.Z)(f,{get value(){return y.value},set value($$value){y.value=$$value}});var M=d.J9n(f,2);d.Z1T((0,v.Z)(M,{gameId:"actionless-rv9luoetuchidspmvghiq",roomType:"ActionlessRoom",onJoinedRoom:e=>n.enterGame(e,y.value),formatGameMode:e=>R((0,p.D)(E,e)),roomCreateOptions:E}),e=>r=e,()=>r);var K=d.J9n(M,2);let _=d.nKH(()=>d.U2M(o)===l.INTERMISSION);(0,I.Z)(K,{get inGame(){return n.room},get isActive(){return n.localClient.active},get canReady(){return d.U2M(_)},get isReady(){return n.localClient.ready},onSetActive:e=>n.sendActive(e),onSetReady:e=>n.sendReady(e),onReset:()=>n.sendReset(),onDisconnect:()=>(n.leaveGame(),r.refreshRooms()),children:(e,t)=>{!function(e,t){d.VFu(t,!0);let r=d.nKH(()=>t.gameState.roundState),s=d.nKH(()=>t.gameState.roundTimerStart),n=d.nKH(()=>t.gameState.roundTimerEnd),a=d.nKH(()=>t.gameState.roundPlayers),i=d.nKH(()=>t.gameState.roundPlayerQueue),o=d.nKH(()=>t.gameState.mode);var u,c,m,h,g,I,p,v=W(),E=d.VHm(v),y=e=>{var t=d.fLW("Waiting for players…");d.R3I(e,t)},S=e=>{var t=C(),a=d.VHm(t),i=e=>{var t=d.fLW("Intermission:");d.R3I(e,t)},o=e=>{var t=d.fLW("Results are coming soon:");d.R3I(e,t)};d.if(a,e=>{d.U2M(r)===l.INTERMISSION?e(i):e(o,!1)});var u=d.J9n(a,2);(0,B.Z)(u,{get startTime(){return d.U2M(s)},get endTime(){return d.U2M(n)}}),d.R3I(e,t)};d.if(E,e=>{d.U2M(r)===l.WAITING?e(y):e(S,!1)});var f=d.J9n(E,2),M=d.iUc(f);d.mcB(f),u=d.J9n(f,2),c={get inGame(){return d.U2M(a)},get inQueue(){return d.U2M(i)}},m=P(),h=d.VHm(m),g=d.J9n(d.iUc(h)),d.S6b(g,17,()=>c.inGame,d.KzB,(e,t)=>{var r=k(),s=d.iUc(r);d.mcB(r),d.OwZ(()=>{d.u8O(r,1,`badge text-bg-${(d.U2M(t).ready?"info":"primary")??""} me-1`),d.u7_(s,`${d.U2M(t).name??""} (${d.U2M(t).cn??""})`)}),d.R3I(e,r)},e=>{d.lpx();var t=d.fLW("nobody");d.R3I(e,t)}),d.mcB(h),I=d.J9n(h,2),p=d.J9n(d.iUc(I)),d.S6b(p,17,()=>c.inQueue,d.KzB,(e,t)=>{var r=D(),s=d.iUc(r);d.mcB(r),d.OwZ(()=>{d.u8O(r,1,`badge text-bg-${(d.U2M(t).ready?"info":"secondary")??""} me-1`),d.u7_(s,`${d.U2M(t).name??""} (${d.U2M(t).cn??""})`)}),d.R3I(e,r)},e=>{d.lpx();var t=d.fLW("nobody");d.R3I(e,t)}),d.mcB(I),d.R3I(u,m),d.OwZ(e=>d.u7_(M,`Game Mode: ${e??""}`),[()=>R(d.U2M(o))]),d.R3I(e,v),d.Swx()}(e,{gameState:n})},$$slots:{default:!0}});var H=d.J9n(K,2),J=d.iUc(H),Z=d.iUc(J);(0,m.Z)(Z,{get canClear(){return d.U2M(a).length},onClear:()=>n.clearHistory(),children:(e,t)=>{var r,s;r={get results(){return d.U2M(a)}},s=b(),d.S6b(s,21,()=>r.results,d.KzB,(e,t)=>{var r=A();{let e=(e,t=d.ZTd)=>{var r=d.UI8(),s=d.VHm(r);d.S6b(s,17,()=>t().players,d.KzB,(e,r)=>{var s=U(),n=d.iUc(s,!0);d.mcB(s),d.OwZ(()=>{d.u8O(s,1,`badge me-1 text-bg-${(t().win?"success":"danger")??""}`),d.u7_(n,d.U2M(r))}),d.R3I(e,s)}),d.R3I(e,r)};var s=d.iUc(r),n=r=>{var s=N(),n=d.J9n(d.iUc(s));d.S6b(n,17,()=>d.U2M(t).wins,d.KzB,(t,r)=>{e(t,()=>d.U2M(r))}),d.mcB(s),d.R3I(r,s)},a=r=>{var s=d.UI8(),n=d.VHm(s);d.S6b(n,17,()=>d.U2M(t).wins,d.KzB,(t,r)=>{var s=w(),n=d.iUc(s);e(d.J9n(n),()=>d.U2M(r)),d.mcB(s),d.OwZ(()=>d.u7_(n,`Team ${d.U2M(r).id??""}: `)),d.R3I(t,s)}),d.R3I(r,s)};d.if(s,e=>{d.U2M(t).playerCount==d.U2M(t).wins.length?e(n):e(a,!1)}),d.mcB(r)}d.R3I(e,r)},e=>{var t=O();d.R3I(e,t)}),d.mcB(s),d.R3I(e,s)},$$slots:{default:!0}});var $=d.J9n(Z,2);(0,h.Z)($,{get players(){return d.U2M(i)},columns:[["Streak",e=>e.streak],["Score",e=>e.wins-e.losses],["Win",e=>[e.wins,e.total]],["Loss",e=>[e.losses,e.total]]]}),d.mcB(J);var z=d.J9n(J,2),F=d.iUc(z);(0,u.Z)(F,{chatState:s,onInput:e=>(0,c.fw)(n,e)}),d.mcB(z),d.mcB(H),d.R3I(e,S),d.Swx()})},26:function(){},48:function(e,t,r){r(10),r(26)},2:function(e,t,r){r.d(t,{As6:()=>c.As,Ba6:()=>d.B,DBn:()=>i.DB,EoV:()=>c.Eo,J9n:()=>f.J9,JcM:()=>p.Jc,KzB:()=>a.Kz,OwZ:()=>p.Ow,R3I:()=>g.R3,S6b:()=>a.S6,SBE:()=>v.SB,Swx:()=>s.Sw,U2M:()=>y.U2,UF7:()=>o.UF,UI8:()=>g.UI,VFu:()=>s.VF,VHm:()=>f.VH,W6n:()=>o.W6,WpJ:()=>c.Wp,XKW:()=>g.XK,Z1T:()=>m.Z,ZTd:()=>M.ZT,clJ:()=>d.cl,czc:()=>u.c,dtO:()=>p.dt,fD6:()=>E.fD,fLW:()=>g.fL,iUc:()=>f.iU,if:()=>n.R,lpx:()=>h.lp,mcB:()=>h.mc,nKH:()=>I.Ak,qt_:()=>o.qt,sjz:()=>S.s,t8m:()=>v.t8,u7_:()=>R.u7,u8O:()=>l.u,vgT:()=>E.vg}),r(3);var s=r(4);r(24),r(26),r(27),r(28),r(5),r(36),r(16),r(37),r(38);var n=r(39);r(40),r(41);var a=r(42);r(43),r(44);var i=r(45);r(46),r(47),r(33),r(48),r(49);var o=r(50),l=r(52),d=r(30);r(32);var u=r(53);r(54),r(58);var c=r(59);r(60),r(61),r(62),r(63),r(64);var m=r(65);r(66),r(67);var h=r(21);r(68),r(69),r(70);var g=r(34),I=r(19),p=r(7),v=r(11),E=r(71);r(72),r(77);var R=r(29),y=r(8);r(78),r(56);var S=r(18);r(79);var f=r(20);r(51),r(17);var M=r(9);r(80),r(23),r(81)}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.m=e,r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];r.O=(t,s,n,a)=>{if(s){a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[s,n,a];return}for(var o=1/0,i=0;i<e.length;i++){for(var[s,n,a]=e[i],l=!0,d=0;d<s.length;d++)(!1&a||o>=a)&&Object.keys(r.O).every(e=>r.O[e](s[d]))?s.splice(d--,1):(l=!1,a<o&&(o=a));if(l){e.splice(i--,1);var u=n();void 0!==u&&(t=u)}}return t}})(),r.rv=()=>"1.3.2",(()=>{var e={82:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var n,a,[i,o,l]=s,d=0;if(i.some(t=>0!==e[t])){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var u=l(r)}for(t&&t(s);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},s=self.webpackChunkvwww=self.webpackChunkvwww||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),r.ruid="bundler=rspack@1.3.2";var s=r.O(void 0,["1","4","3","32","27","35","34","36","33"],function(){return r(108)});s=r.O(s)})();