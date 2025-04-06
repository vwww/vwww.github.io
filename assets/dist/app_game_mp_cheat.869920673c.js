(()=>{"use strict";var t={123:function(t,e,n){n(1);var r,s,a,i,o,u,l,d,c=n(2),h=n(109),m=n(110),p=n(111),g=n(112),I=n(113),R=n(114),v=n(115),M=n(116);function E(t,e,n){return Math.max(e,Math.min(t,n))}var k=n(119),C=n(120),f=n(121);let S=[["optTurnTime","i",2e4,"Turn Time / ms","duration of each turn, in milliseconds",5e3,6e4],["optDecks","i",1,"Decks","number of decks",1,0x97b425ed097b],["optCountSame","b",!0,"Count (same)","can play same count as previous move"],["optCountMore","b",!0,"Count (more)","can play more cards than previous move"],["optCountLess","b",!0,"Count (less)","can play fewer cards than previous move"],["optRank0","b",!0,"Trick Rank (same)","can play same rank as previous move"],["optRank1u","b",!0,"Trick Rank (up 1)","previous plus one, when not wrapping"],["optRank1uw","b",!0,"Trick Rank (up 1 wrap)","previous plus one, when wrapping"],["optRank1d","b",!0,"Trick Rank (down 1)","previous minus one, when not wrapping"],["optRank1dw","b",!0,"Trick Rank (down 1 wrap)","previous minus one, when wrapping"],["optRank2u","b",!1,"Trick Rank (up 2)","previous plus two, when not wrapping"],["optRank2uw","b",!1,"Trick Rank (up 2 wrap)","previous plus two, when wrapping"],["optRank2d","b",!1,"Trick Rank (down 2)","previous minus two, when not wrapping"],["optRank2dw","b",!1,"Trick Rank (down 2 wrap)","previous minus two, when wrapping"],["optRankother","b",!1,"Trick Rank (others)","other ranks not covered above"],["optTricks","e",0,"Tricks","type of tricks",["skip","pass","forced"]]];function y(t){return t.optDecks+(t.optCountLess?"L":"l")+(t.optCountSame?"S":"s")+(t.optCountMore?"M":"m")+t.optTricks+(t.optRank1uw?"U":"u")+(t.optRank2uw?"U":"u")+(t.optRank2d?"D":"d")+(t.optRank1d?"D":"d")+(t.optRank0?"S":"s")+(t.optRank1u?"U":"u")+(t.optRank2u?"U":"u")+(t.optRank2dw?"D":"d")+(t.optRank1dw?"D":"d")+(t.optRankother?"O":"o")}(r=o||(o={}))[r.WELCOME=0]="WELCOME",r[r.JOIN=1]="JOIN",r[r.LEAVE=2]="LEAVE",r[r.RESET=3]="RESET",r[r.RENAME=4]="RENAME",r[r.PING=5]="PING",r[r.PING_TIME=6]="PING_TIME",r[r.CHAT=7]="CHAT",r[r.ACTIVE=8]="ACTIVE",r[r.ROUND_WAIT=9]="ROUND_WAIT",r[r.ROUND_INTERM=10]="ROUND_INTERM",r[r.ROUND_START=11]="ROUND_START",r[r.READY=12]="READY",r[r.MOVE_CONFIRM=13]="MOVE_CONFIRM",r[r.END_ROUND=14]="END_ROUND",r[r.END_TURN=15]="END_TURN",r[r.PLAYER_ELIMINATE=16]="PLAYER_ELIMINATE",r[r.PLAYER_PRIVATE_INFO=17]="PLAYER_PRIVATE_INFO",(s=u||(u={}))[s.RESET=0]="RESET",s[s.RENAME=1]="RENAME",s[s.PONG=2]="PONG",s[s.CHAT=3]="CHAT",s[s.ACTIVE=4]="ACTIVE",s[s.READY=5]="READY",s[s.MOVE=6]="MOVE",s[s.MOVE_END=7]="MOVE_END",(a=l||(l={}))[a.WAITING=0]="WAITING",a[a.INTERMISSION=1]="INTERMISSION",a[a.ACTIVE=2]="ACTIVE";class U{#t=c.SBE(-1);get cn(){return c.U2M(this.#t)}set cn(t){c.t8m(this.#t,t,!0)}#e=c.SBE("unnamed");get name(){return c.U2M(this.#e)}set name(t){c.t8m(this.#e,t,!0)}#n=c.SBE(!1);get active(){return c.U2M(this.#n)}set active(t){c.t8m(this.#n,t,!0)}#r=c.SBE(0);get rank(){return c.U2M(this.#r)}set rank(t){c.t8m(this.#r,t,!0)}#s=c.SBE(-1);get ping(){return c.U2M(this.#s)}set ping(t){c.t8m(this.#s,t,!0)}#a=c.SBE(!1);get ready(){return c.U2M(this.#a)}set ready(t){c.t8m(this.#a,t,!0)}#i=c.SBE(!1);get inRound(){return c.U2M(this.#i)}set inRound(t){c.t8m(this.#i,t,!0)}#o=c.SBE(0);get score(){return c.U2M(this.#o)}set score(t){c.t8m(this.#o,t,!0)}#u=c.SBE(0);get wins(){return c.U2M(this.#u)}set wins(t){c.t8m(this.#u,t,!0)}#l=c.SBE(0);get streak(){return c.U2M(this.#l)}set streak(t){c.t8m(this.#l,t,!0)}#d=c.SBE(0);get rankLast(){return c.U2M(this.#d)}set rankLast(t){c.t8m(this.#d,t,!0)}#c=c.SBE(0);get rankBest(){return c.U2M(this.#c)}set rankBest(t){c.t8m(this.#c,t,!0)}#h=c.SBE(0);get rankWorst(){return c.U2M(this.#h)}set rankWorst(t){c.t8m(this.#h,t,!0)}resetScore(){this.score=0,this.wins=0,this.streak=0,this.rankLast=0,this.rankBest=0,this.rankWorst=0}formatName(){return`${this.name} (${this.cn})`}}class T{#m=c.SBE(-1);get owner(){return c.U2M(this.#m)}set owner(t){c.t8m(this.#m,t,!0)}#p=c.SBE(c.sjz(B()));get discardClaim(){return c.U2M(this.#p)}set discardClaim(t){c.t8m(this.#p,t,!0)}#g=c.SBE(0);get handSize(){return c.U2M(this.#g)}set handSize(t){c.t8m(this.#g,t,!0)}}class w{ownerName="";discardClaim=B()}(i=d||(d={}))[i.SKIP=0]="SKIP",i[i.PASS=1]="PASS",i[i.FORCE=2]="FORCE",i[i.NUM=3]="NUM";class b{chat;#I=c.SBE(c.sjz((0,v.j)(S)));get mode(){return c.U2M(this.#I)}set mode(t){c.t8m(this.#I,t,!0)}#R=c.SBE(!1);get canCallCheat(){return c.U2M(this.#R)}set canCallCheat(t){c.t8m(this.#R,t,!0)}#v=c.SBE(0);get trickCount(){return c.U2M(this.#v)}set trickCount(t){c.t8m(this.#v,t,!0)}#M=c.SBE(0);get trickValue(){return c.U2M(this.#M)}set trickValue(t){c.t8m(this.#M,t,!0)}#E=c.SBE(c.sjz(B()));get cardCountHandMine(){return c.U2M(this.#E)}set cardCountHandMine(t){c.t8m(this.#E,t,!0)}#k=c.SBE(c.sjz(B()));get cardCountAllMine(){return c.U2M(this.#k)}set cardCountAllMine(t){c.t8m(this.#k,t,!0)}#C=c.SBE(c.sjz(B()));get cardCountAllOthers(){return c.U2M(this.#C)}set cardCountAllOthers(t){c.t8m(this.#C,t,!0)}#f=c.SBE(c.sjz(B()));get cardCountClaimMine(){return c.U2M(this.#f)}set cardCountClaimMine(t){c.t8m(this.#f,t,!0)}#S=c.SBE(c.sjz(B()));get cardCountClaimOthers(){return c.U2M(this.#S)}set cardCountClaimOthers(t){c.t8m(this.#S,t,!0)}#y=c.SBE(c.sjz(B()));get cardCountClaimRemain(){return c.U2M(this.#y)}set cardCountClaimRemain(t){c.t8m(this.#y,t,!0)}#U=c.SBE(c.sjz(B()));get cardCountTotal(){return c.U2M(this.#U)}set cardCountTotal(t){c.t8m(this.#U,t,!0)}#T=c.SBE(c.sjz([]));get moveHistory(){return c.U2M(this.#T)}set moveHistory(t){c.t8m(this.#T,t,!0)}#w=c.SBE(c.sjz(B()));get pendingMove(){return c.U2M(this.#w)}set pendingMove(t){c.t8m(this.#w,t,!0)}#b=c.SBE(0);get pendingMoveClaim(){return c.U2M(this.#b)}set pendingMoveClaim(t){c.t8m(this.#b,t,!0)}localClient=new U;clients=[];#B=c.SBE(c.sjz([]));get leaderboard(){return c.U2M(this.#B)}set leaderboard(t){c.t8m(this.#B,t,!0)}#A=c.SBE(c.sjz(l.WAITING));get roundState(){return c.U2M(this.#A)}set roundState(t){c.t8m(this.#A,t,!0)}#O=c.SBE(0);get roundTimerStart(){return c.U2M(this.#O)}set roundTimerStart(t){c.t8m(this.#O,t,!0)}#N=c.SBE(0);get roundTimerEnd(){return c.U2M(this.#N)}set roundTimerEnd(t){c.t8m(this.#N,t,!0)}#D=c.SBE(c.sjz([]));get roundPlayers(){return c.U2M(this.#D)}set roundPlayers(t){c.t8m(this.#D,t,!0)}#P=c.SBE(c.sjz([]));get roundPlayerQueue(){return c.U2M(this.#P)}set roundPlayerQueue(t){c.t8m(this.#P,t,!0)}#W=c.SBE(c.sjz([]));get playerInfo(){return c.U2M(this.#W)}set playerInfo(t){c.t8m(this.#W,t,!0)}#V=c.SBE(c.sjz([]));get playerDiscInfo(){return c.U2M(this.#V)}set playerDiscInfo(t){c.t8m(this.#V,t,!0)}#K=c.SBE(c.sjz([]));get pastGames(){return c.U2M(this.#K)}set pastGames(t){c.t8m(this.#K,t,!0)}#_=c.SBE();get room(){return c.U2M(this.#_)}set room(t){c.t8m(this.#_,t,!0)}constructor(t){this.chat=t,setTimeout(k.$$,100)}enterGame(t,e){this.room?.disconnect(),this.room=t,t.registerRecv(e=>{if(this.room===t){let t=new C.J(e);try{for(;t.remaining>0;)this.processMessage(t);if(t.overread)throw Error("overread")}catch(e){console.error("neterr",e),console.log(t.debugBuf,t),this.room.disconnect()}}}),t.registerDisc(()=>{this.room===t?(this.chat.addSysMessage("You disconnected."),this.room=void 0):this.chat.addSysMessage("You disconnected from the old room.")});let n=new f.T;n.putInt(0),n.putString(e),t.send(n.toArray()),this.chat.addSysMessage("You are joining the game.")}leaveGame(){this.room?.disconnect()}sendReset(){this.room?.send(new f.T().putInt(u.RESET).toArray())}sendRename(t){this.room?.send(new f.T().putInt(u.RENAME).putString(t).toArray())}sendActive(t){this.room?.send(new f.T().putInt(u.ACTIVE).putBool(t).toArray())}sendChat(t,e,n=-1){if(!this.room)return void this.chat.addSysMessage("cannot send chat message: not connected to game room");this.room.send(new f.T().putInt(u.CHAT).putInt(e).putInt(n).putString(t.slice(0,100)).toArray())}sendReady(t){this.room?.send(new f.T().putInt(u.READY).putBool(t).toArray())}sendMove(t,e){this.room?.send(new f.T().putInt(u.MOVE).putInt(0).putInt(t).putInt(e).toArray())}sendMoveCallCheat(){this.room?.send(new f.T().putInt(u.MOVE).putInt(1).toArray())}sendMoveEnd(){this.room?.send(new f.T().putInt(u.MOVE_END).toArray())}addHistory(t){this.pastGames.length>=100&&this.pastGames.pop(),this.pastGames.unshift(t)}clearHistory(){this.pastGames=[]}formatPlayerName(t,e){return t?(0,k.U1)(this.clients[t.owner],t.owner):`<unknown${void 0===e?"":" pn#"+e}>`}playerIsMe(t){return t?.owner===this.localClient.cn}processMessage(t){switch(t.getInt()){case o.WELCOME:{let e=t.getInt();0!==e&&alert(`different protocol version (client: 0, server: ${e})
refresh the page for updates?`),this.clients.length=0;let n=(0,k.PD)(t.getInt());this.mode.optTurnTime=t.getInt(),this.mode.optDecks=E(t.getFloat64(),1,0x97b425ed097b),this.mode.optTricks=E(t.getInt(),0,d.NUM-1);let r=t.getInt();this.mode.optCountSame=!!(1&r),this.mode.optCountMore=!!(2&r),this.mode.optCountLess=!!(4&r),this.mode.optRank0=!!(8&r),this.mode.optRank1u=!!(16&r),this.mode.optRank1uw=!!(32&r),this.mode.optRank1d=!!(64&r),this.mode.optRank1dw=!!(128&r),this.mode.optRank2u=!!(256&r),this.mode.optRank2uw=!!(512&r),this.mode.optRank2d=!!(1024&r),this.mode.optRank2dw=!!(2048&r),this.mode.optRankother=!!(4096&r);for(let e=0;e<=k.CV;e++){let e=t.getInt();if(e<0)break;let r=e==n?this.localClient:new U;r.cn=e,r.active=t.getBool(),r.name=(0,k.DF)(t.getString(20)),r.ping=t.getInt(),r.ready=!1,r.inRound=!1,r.score=t.getInt(),r.wins=t.getInt(),r.streak=t.getInt(),r.rankLast=t.getInt(),r.rankBest=t.getInt(),r.rankWorst=t.getInt(),this.clients[e]=r}let s=t.getInt();if(0===s)this.roundWait();else if(1===s){this.roundIntermission(t.getInt());for(let e=0;e<=k.CV;e++){let e=t.getInt();if(e<0)break;let n=this.clients[e];n&&(n.ready=!0)}}else 2===s&&this.roundStart(t.getInt());let a=[];for(let e=0;e<=k.CV;e++){let e=t.getInt();if(e<0)break;let n=this.clients[e];n&&(n.inRound=!0,a.push(n))}this.roundPlayers=a;let i=[];for(let e=0;e<=k.CV;e++){let e=t.getInt();if(e<0)break;let n=this.clients[e];n&&i.push(n)}this.roundPlayerQueue=i,this.processPlayerInfos(t),this.processDiscInfos(t),this.processRoundInfo(t),this.updatePlayers();break}case o.JOIN:{let e=t.getInt(),n=(0,k.DF)(t.getString(20));if(this.clients[e])break;let r=new U;r.cn=e,r.name=n,this.clients[e]=r,this.chat.playerJoined(r.formatName()),this.updatePlayers();break}case o.LEAVE:{let e=t.getInt(),n=this.clients[e];if(!n)break;n.active&&this.playerDeactivated(n),this.chat.playerLeft(n.formatName()),delete this.clients[e],this.updatePlayers();break}case o.RESET:{let e=t.getInt(),n=this.clients[e];n&&(n.resetScore(),this.updatePlayers(),this.chat.playerReset(n.formatName()));break}case o.RENAME:{let e=t.getInt(),n=(0,k.DF)(t.getString(20)),r=this.clients[e];r&&(this.chat.playerRename(r.formatName(),n),r.name=n);break}case o.PING:this.room?.send(new f.T().putInt(u.PONG).putInt(t.getInt()).toArray());break;case o.PING_TIME:for(let e=0;e<=k.CV;e++){let e=t.getInt();if(e<0)break;let n=t.getInt(),r=this.clients[e];r&&(r.ping=n)}break;case o.CHAT:{let e=t.getInt(),n=t.getInt(),r=t.getInt(),s=t.getString(100),a=this.clients[e],i=(0,k.U1)(a,e),o=this.clients[r],u=o?a===this.localClient?"you":(0,k.U1)(o,r):void 0;this.chat.addChatMessage(i,s,n,u);break}case o.ACTIVE:{let e=t.getInt(),n=t.getBool(),r=this.clients[e];r&&(r.active=n,n?this.playerActivated(r):this.playerDeactivated(r),this.updatePlayers());break}case o.ROUND_WAIT:this.roundWait();break;case o.ROUND_INTERM:this.roundIntermission(3e4);break;case o.ROUND_START:{this.unsetInRound();let e=[];for(let n=0;n<=k.CV;n++){let n=t.getInt();if(n<0)break;let r=this.clients[n];r&&(r.inRound=!0,e.push(r))}this.roundPlayers=e,this.roundPlayerQueue=[],this.roundStart(this.mode.optTurnTime);let n=[];for(let e=0;e<=this.clients.length;e++){let e=t.getInt();if(e<0)break;let r=new T;r.owner=e,n.push(r)}this.playerInfo=n,this.playerDiscInfo=[],this.processRoundStartInfo(t);break}case o.READY:{let e=t.getInt(),n=t.getBool(),r=this.clients[e];r&&(r.ready=n);break}case o.MOVE_CONFIRM:this.pendingMove=A(t),this.pendingMoveClaim=t.getInt();break;case o.END_TURN:this.processEndTurn(t),this.setTimer(this.mode.optTurnTime),this.playerInfo.length&&this.playerInfo.push(this.playerInfo.shift());break;case o.END_ROUND:this.processEndRound(t);break;case o.PLAYER_ELIMINATE:{let e=t.getInt(),n=this.playerInfo[e];if(!n){this.room?.disconnect();break}let r=new w,s=this.clients[n.owner];r.ownerName=(0,k.U1)(s,n.owner),this.playerInfo.splice(e,1),this.playerDiscInfo.push(r);break}case o.PLAYER_PRIVATE_INFO:this.processPrivateInfo(t);break;default:throw Error("tag type")}}processPlayerInfos(t){let e=[];for(let n=0;n<=this.clients.length;n++){let n=t.getInt();if(n<0)break;let r=new T;r.owner=n,r.discardClaim=A(t),r.handSize=t.getInt(),e.push(r)}this.playerInfo=e}processDiscInfos(t){let e=[];for(let n=0;n<=this.clients.length;n++){let n=t.getString(32);if(!n)break;let r=new w;r.ownerName=n,r.discardClaim=A(t),e.push(r)}this.playerDiscInfo=e}processRoundStartInfo(t){}processRoundInfo(t){let e=A(t),n=A(t),r=function(t){let e=1+t,n=e+e;return[n,n,n,n,n,n,n,n,n,n,n,n,n,e,54*t]}(1);this.cardCountAllOthers=e,this.cardCountClaimOthers=n,this.cardCountTotal=r}processEndTurn(t){}processEndRound(t){}processPrivateInfo(t){0===t.getInt()&&(this.cardCountHandMine=A(t))}updatePlayers(){this.leaderboard=(0,k.E8)(this.clients,[t=>t.score,t=>t.wins,t=>t.streak])}playerActivated(t){this.roundPlayerQueue.push(t)}playerDeactivated(t){this.roundPlayers=this.roundPlayers.filter(e=>e!==t),this.roundPlayerQueue=this.roundPlayerQueue.filter(e=>e!==t),t.inRound=!1}roundWait(){this.roundState=l.WAITING,this.unsetReady()}roundIntermission(t){this.roundState=l.INTERMISSION,this.setTimer(t),this.unsetReady()}roundStart(t){this.roundState=l.ACTIVE,this.setTimer(t),this.unsetReady()}setTimer(t){this.roundTimerStart=Date.now(),this.roundTimerEnd=Date.now()+t}unsetReady(){for(let t of this.clients)t&&(t.ready=!1)}unsetInRound(){for(let t of this.clients)t&&(t.inRound=!1)}}function B(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}function A(t){let e=t.getInt(),n=t.getInt(),r=t.getInt(),s=t.getInt(),a=t.getInt(),i=t.getInt(),o=t.getInt(),u=t.getInt(),l=t.getInt(),d=t.getInt(),c=t.getInt(),h=t.getInt(),m=t.getInt(),p=t.getInt();return[e,n,r,s,a,i,o,u,l,d,c,h,m,p,e+n+r+s+a+i+o+u+l+d+c+h+m+p]}var O=c.XKW("<span> </span>"),N=c.XKW('<li class="list-group-item"><div>Ranks: <!></div></li>'),D=c.XKW('<li class="list-group-item">No past games!</li>'),P=c.XKW('<ul class="list-group list-group-flush overflow-auto" style="max-height: 15rem"></ul>'),W=c.XKW('<th scope="col"> </th>'),V=c.XKW("<td> </td>"),K=c.XKW('<tr><th scope="row"> </th><!></tr>'),_=c.XKW('<div class="table-responsive"><table class="table table-sm"><thead><tr><th></th><!></tr></thead><tbody></tbody></table></div>'),H=n(117),L=c.XKW("<span> </span>"),z=c.XKW("<span> </span>"),G=c.XKW("<div>In game: <!></div> <div>Queue: <!></div>",1),J=c.XKW("<!> <!>",1),j=c.XKW("<!> <div> </div> <b>Lobby</b> <!> <!>",1),Z=n(94),$=c.XKW('<!> <!> <!> <div class="row"><div class="col-12 col-xl-8"><!> <!></div> <div class="col-12 col-xl-4 mb-3"><!></div></div>',1);(0,n(88).Z)(function(t,e){let n;c.VFu(e,!0);let r=new m.ZP,s=new b(r),a=c.nKH(()=>s.pastGames),i=c.nKH(()=>s.leaderboard),o=c.nKH(()=>s.roundState),u=(0,Z.E)("game/mp/_shared/name","");var d=$(),E=c.VHm(d);(0,I.Z)(E,{get value(){return u.value},set value($$value){u.value=$$value}});var k=c.J9n(E,2);c.Z1T((0,M.Z)(k,{gameId:"cheat-zoded3ozqeqvek0bpz3fow",roomType:"CheatRoom",onJoinedRoom:t=>s.enterGame(t,u.value),formatGameMode:t=>y((0,v.D)(S,t)),roomCreateOptions:S}),t=>n=t,()=>n);var C=c.J9n(k,2);let f=c.nKH(()=>c.U2M(o)===l.INTERMISSION);(0,R.Z)(C,{get inGame(){return s.room},get isActive(){return s.localClient.active},get canReady(){return c.U2M(f)},get isReady(){return s.localClient.ready},onSetActive:t=>s.sendActive(t),onSetReady:t=>s.sendReady(t),onReset:()=>s.sendReset(),onDisconnect:()=>(s.leaveGame(),n.refreshRooms()),children:(t,e)=>{!function(t,e){c.VFu(e,!0);let n=c.nKH(()=>e.gameState.localClient),r=c.nKH(()=>e.gameState.roundState),s=c.nKH(()=>e.gameState.roundTimerStart),a=c.nKH(()=>e.gameState.roundTimerEnd),i=c.nKH(()=>e.gameState.roundPlayers),o=c.nKH(()=>e.gameState.roundPlayerQueue),u=c.nKH(()=>e.gameState.playerInfo),d=c.nKH(()=>e.gameState.mode),h=c.nKH(()=>c.U2M(n).active&&c.U2M(r)==l.ACTIVE&&c.U2M(n).inRound),m=c.nKH(()=>c.U2M(h)&&e.gameState.playerIsMe(c.U2M(u)[0]));var p,g,I,R,v,M,E,k,C,f,S,U,T,w,b=j(),B=c.VHm(b),A=t=>{var e=c.fLW("Waiting for players…");c.R3I(t,e)},O=t=>{var e=J(),i=c.VHm(e),o=t=>{var e=c.fLW("Intermission:");c.R3I(t,e)},u=(t,e)=>{var r=t=>{var e=c.fLW("Make a move:");c.R3I(t,e)},s=(t,e)=>{var r=t=>{var e=c.fLW("Waiting for opponent to move…");c.R3I(t,e)},s=t=>{var e=c.fLW("Spectating:");c.R3I(t,e)};c.if(t,t=>{c.U2M(n).inRound?t(r):t(s,!1)},e)};c.if(t,t=>{c.U2M(m)?t(r):t(s,!1)},e)};c.if(i,t=>{c.U2M(r)===l.INTERMISSION?t(o):t(u,!1)});var d=c.J9n(i,2);(0,H.Z)(d,{get startTime(){return c.U2M(s)},get endTime(){return c.U2M(a)}}),c.R3I(t,e)};c.if(B,t=>{c.U2M(r)?t(O,!1):t(A)});var N=c.J9n(B,2),D=c.iUc(N);c.mcB(N);var P=c.J9n(N,4);p={get inGame(){return c.U2M(i)},get inQueue(){return c.U2M(o)}},g=G(),I=c.VHm(g),R=c.J9n(c.iUc(I)),c.S6b(R,17,()=>p.inGame,c.KzB,(t,e)=>{var n=L(),r=c.iUc(n);c.mcB(n),c.OwZ(()=>{c.u8O(n,1,`badge text-bg-${(c.U2M(e).ready?"info":"primary")??""} me-1`),c.u7_(r,`${c.U2M(e).name??""} (${c.U2M(e).cn??""})`)}),c.R3I(t,n)},t=>{c.lpx();var e=c.fLW("nobody");c.R3I(t,e)}),c.mcB(I),v=c.J9n(I,2),M=c.J9n(c.iUc(v)),c.S6b(M,17,()=>p.inQueue,c.KzB,(t,e)=>{var n=z(),r=c.iUc(n);c.mcB(n),c.OwZ(()=>{c.u8O(n,1,`badge text-bg-${(c.U2M(e).ready?"info":"secondary")??""} me-1`),c.u7_(r,`${c.U2M(e).name??""} (${c.U2M(e).cn??""})`)}),c.R3I(t,n)},t=>{c.lpx();var e=c.fLW("nobody");c.R3I(t,e)}),c.mcB(v),c.R3I(P,g),E=c.J9n(P,2),k={ranks:["*","K","Q","J","10","9","8","7","6","5","4","3","2","A"],counts:[["Yours Actual",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Others Actual",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Your Hand",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Your Played",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Your Claim",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Others Claim",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Remaining Claim",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],["Total",[0,0,0,0,0,0,0,0,0,0,0,0,0,0]]]},C=_(),f=c.iUc(C),S=c.iUc(f),U=c.iUc(S),T=c.J9n(c.iUc(U)),c.S6b(T,17,()=>k.ranks,c.KzB,(t,e)=>{var n=W(),r=c.iUc(n,!0);c.mcB(n),c.OwZ(()=>c.u7_(r,c.U2M(e))),c.R3I(t,n)}),c.mcB(U),c.mcB(S),w=c.J9n(S),c.S6b(w,21,()=>k.counts,c.KzB,(t,e)=>{var n=K(),r=c.iUc(n),s=c.iUc(r,!0);c.mcB(r);var a=c.J9n(r);c.S6b(a,17,()=>c.U2M(e)[1],c.KzB,(t,e)=>{var n=V(),r=c.iUc(n,!0);c.mcB(n),c.OwZ(()=>c.u7_(r,c.U2M(e))),c.R3I(t,n)}),c.mcB(n),c.OwZ(()=>c.u7_(s,c.U2M(e)[0])),c.R3I(t,n)}),c.mcB(w),c.mcB(f),c.mcB(C),c.R3I(E,C),c.OwZ(t=>c.u7_(D,`Game Mode: ${t??""}`),[()=>y(c.U2M(d))]),c.R3I(t,b),c.Swx()}(t,{gameState:s})},$$slots:{default:!0}});var U=c.J9n(C,2),T=c.iUc(U),w=c.iUc(T);(0,p.Z)(w,{get canClear(){return c.U2M(a).length},onClear:()=>s.clearHistory(),children:(t,e)=>{var n,r;n={get results(){return c.U2M(a)}},r=P(),c.S6b(r,21,()=>n.results,c.KzB,(t,e)=>{var n=N(),r=c.iUc(n),s=c.J9n(c.iUc(r));c.S6b(s,17,()=>c.U2M(e).players,c.KzB,(t,e,n)=>{var r=O();c.u8O(r,1,`badge text-bg-${(n?"secondary":"primary")??""}`);var s=c.iUc(r);c.mcB(r),c.OwZ(()=>c.u7_(s,`${c.U2M(e).name??""} (${c.U2M(e).cn??""})`)),c.R3I(t,r)}),c.mcB(r),c.mcB(n),c.R3I(t,n)},t=>{var e=D();c.R3I(t,e)}),c.mcB(r),c.R3I(t,r)},$$slots:{default:!0}});var B=c.J9n(w,2);(0,g.Z)(B,{get players(){return c.U2M(i)},columns:[["Score",t=>t.score],["Wins",t=>t.wins],["Streak",t=>t.streak],["Best Rank",t=>t.rankBest],["Worst Rank",t=>t.rankWorst],["Last Rank",t=>t.rankLast]]}),c.mcB(T);var A=c.J9n(T,2),x=c.iUc(A);(0,h.Z)(x,{chatState:r,onInput:t=>(0,m.fw)(s,t)}),c.mcB(A),c.mcB(U),c.R3I(t,d),c.Swx()})},26:function(){},48:function(t,e,n){n(10),n(26)},2:function(t,e,n){n.d(e,{As6:()=>c.As,Ba6:()=>l.B,DBn:()=>i.DB,EoV:()=>c.Eo,J9n:()=>C.J9,JcM:()=>I.Jc,KzB:()=>a.Kz,OwZ:()=>I.Ow,R3I:()=>p.R3,S6b:()=>a.S6,SBE:()=>R.SB,Swx:()=>r.Sw,U2M:()=>E.U2,UF7:()=>o.UF,UI8:()=>p.UI,VFu:()=>r.VF,VHm:()=>C.VH,W6n:()=>o.W6,WpJ:()=>c.Wp,XKW:()=>p.XK,Z1T:()=>h.Z,clJ:()=>l.cl,czc:()=>d.c,dtO:()=>I.dt,fD6:()=>v.fD,fLW:()=>p.fL,iUc:()=>C.iU,if:()=>s.R,lpx:()=>m.lp,mcB:()=>m.mc,nKH:()=>g.Ak,qt_:()=>o.qt,sjz:()=>k.s,t8m:()=>R.t8,u7_:()=>M.u7,u8O:()=>u.u,vgT:()=>v.vg}),n(3);var r=n(4);n(24),n(26),n(27),n(28),n(5),n(36),n(16),n(37),n(38);var s=n(39);n(40),n(41);var a=n(42);n(43),n(44);var i=n(45);n(46),n(47),n(33),n(48),n(49);var o=n(50),u=n(52),l=n(30);n(32);var d=n(53);n(54),n(58);var c=n(59);n(60),n(61),n(62),n(63),n(64);var h=n(65);n(66),n(67);var m=n(21);n(68),n(69),n(70);var p=n(34),g=n(19),I=n(7),R=n(11),v=n(71);n(72),n(77);var M=n(29),E=n(8);n(78),n(56);var k=n(18);n(79);var C=n(20);n(51),n(17),n(9),n(80),n(23),n(81)}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=[];n.O=(e,r,s,a)=>{if(r){a=a||0;for(var i=t.length;i>0&&t[i-1][2]>a;i--)t[i]=t[i-1];t[i]=[r,s,a];return}for(var o=1/0,i=0;i<t.length;i++){for(var[r,s,a]=t[i],u=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every(t=>n.O[t](r[l]))?r.splice(l--,1):(u=!1,a<o&&(o=a));if(u){t.splice(i--,1);var d=s();void 0!==d&&(e=d)}}return e}})(),n.rv=()=>"1.3.2",(()=>{var t={84:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var s,a,[i,o,u]=r,l=0;if(i.some(e=>0!==t[e])){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(u)var d=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.3.2";var r=n.O(void 0,["1","4","3","32","27","35","34","36","33"],function(){return n(123)});r=n.O(r)})();