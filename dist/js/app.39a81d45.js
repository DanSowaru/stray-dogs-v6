(function(){var e={9190:function(e,t,o){"use strict";var n=o(5130),r=o(3367),i=o(6768);const s={id:"root-container"},a={id:"game-window"},A={id:"window-border"};function c(e,t,o,n,r,c){const d=(0,i.g2)("HeaderComponent"),g=(0,i.g2)("router-view"),u=(0,i.g2)("FooterComponent");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.bF)(d),(0,i.Lk)("main",a,[(0,i.Lk)("div",A,[(0,i.bF)(g)])]),(0,i.bF)(u)])}var d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAlSURBVDhPYxgFo2AUjIKhCRih9H8oTSlgZIIyqAaobuBgBwwMAJkeAQbBdWtEAAAAAElFTkSuQmCC",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAA/SURBVDhPY6A2YITS/6E0pYAR3UAYnxSA7BgMAykFcAdRw0CwGUxgJhXBqIGUg1EDKQejBlIOaFZ8UQkwMAAAK00HHZPCHH4AAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwgAADsIBFShKgAAAAFtJREFUKFNtjEkSACEIA+H/n5YsCFaZg6GbYSI/gXwWFhHLEgI1VmBp6xnkcdb8xKS3pS0i5HutSTX/I3R/pNx7blURjlO1JNTQXfKOs15HiEBXVhUCeLmPUDIPy28A93mrhQ8AAAAASUVORK5CYII=";const l={id:"window-header"},h=(0,i.Fv)('<h1 id="window-header-title">Window Title</h1><div id="window-header-buttons"><img class="header-button" src="'+d+'" alt="minimize window"><img class="header-button" src="'+g+'" alt="window size"><img class="header-button" src="'+u+'" alt="close window"></div>',2),m=[h];function p(e,t,o,n,r,s){return(0,i.uX)(),(0,i.CE)("header",l,m)}var v={name:"HeaderComponent"},f=o(1241);const w=(0,f.A)(v,[["render",p]]);var C=w,b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAEFJREFUKFPVzdsNACAIA0Dcf2mhNAUxDmC/2osPe2SNwIY6xMFDY+N2U8x8UpqL/1A5iDyCWhigKvTK0rHyEV4x2/YDATMdk6rUAAAAAElFTkSuQmCC",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAEhJREFUKFOVjMENACAIA3H/pcVCm4D64HwAR9HWA5f2JPfiKH91lxIt/5FEIUUi15PhUDXlMc8bIREU42QMZHzeCImA+CYvzDar2wDC9yoI1AAAAABJRU5ErkJggg==";const U={id:"game-footer"},D={id:"game-menu"},y=(0,i.Lk)("button",{class:"footer-button",type:"button"},[(0,i.Lk)("img",{class:"button-icon",src:b,alt:"Mail"}),(0,i.Lk)("span",{class:"button-text"}," Mail ")],-1),S=(0,i.Lk)("button",{class:"footer-button",type:"button"},[(0,i.Lk)("img",{class:"button-icon",src:k,alt:"Personel"}),(0,i.Lk)("span",{class:"button-text"}," Personel ")],-1);function E(e,t,o,n,r,s){const a=(0,i.g2)("EngineComponent"),A=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("footer",U,[(0,i.bF)(a),(0,i.Lk)("nav",D,[(0,i.bF)(A,{to:"/chat"},{default:(0,i.k6)((()=>[y])),_:1}),(0,i.bF)(A,{to:"/about"},{default:(0,i.k6)((()=>[S])),_:1})])])}var L=o(4232),I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAFFJREFUKFOty0EOACEIA0D4/6cFikIUEw70oLazS5wi5fRRoCcOuKzaH04BtqJrCdBzHKT8AG9NB/B8wfcCMFywP5ck0LkCrBVYKQClDUgDmBfoSQGk9ZogRAAAAABJRU5ErkJggg==";const R={id:"engine-view-container"},F={class:"engine-view-slot"},P=(0,i.Lk)("p",{class:"engine-view-slot-title"},"Money",-1),M={id:"money-view-p"},T=(0,i.Lk)("img",{id:"money-symbol",src:I,alt:"money icon"},null,-1),B={class:"engine-view-slot"},N=(0,i.Lk)("p",{class:"engine-view-slot-title"},"Time",-1),x={class:"engine-view-slot",id:"unread-dogs-footer-counter"},O=(0,i.Lk)("p",{class:"engine-view-slot-title"},"Unread Replies",-1);function Q(e,t,o,n,r,s){const a=(0,i.g2)("DateComponent");return(0,i.uX)(),(0,i.CE)("section",R,[(0,i.Lk)("div",F,[P,(0,i.Lk)("p",M,[T,(0,i.Lk)("span",null,(0,L.v_)(e.getPlayerMoney),1)])]),(0,i.Lk)("div",B,[N,(0,i.bF)(a)]),(0,i.Lk)("div",x,[O,(0,i.Lk)("p",null,(0,L.v_)(e.getUnreadDogs),1)])])}function K(e,t,o,n,r,s){return(0,i.uX)(),(0,i.CE)("p",null,(0,L.v_)(s.getCurrentFullTime),1)}var j={name:"DateComponent",data(){return{currentTime:this.useINTLTime(new Date),currentSeconds:(new Date).getSeconds(),updateTimeInterval:null,checkIfTimeIsRoundInterval:null}},computed:{getCurrentFullTime(){return this.currentTime}},methods:{updateTime(){this.updateTimeInterval=setInterval((()=>{this.currentSeconds%10!==0&&this.currentSeconds%10!==5?(this.checkIfTimeIsRound(),clearInterval(this.updateTimeInterval)):this.currentTime=this.useINTLTime()}),5e3)},checkIfTimeIsRound(){while(this.currentSeconds%10!==0&&this.currentSeconds%10!==5)this.currentSeconds=(new Date).getSeconds();this.updateTime()},useINTLTime(){const e=new Date,t=new Intl.DateTimeFormat("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return t.format(e)}},mounted(){this.checkIfTimeIsRound()},beforeUnmount(){clearInterval(this.updateTimeInterval)}};const X=(0,f.A)(j,[["render",K]]);var J=X,V=(o(4114),o(1114));class Y{constructor(e,t="Unknown Dog",o="unknown",n=0,r=0,i=0,s=0,a=0,A=0,c=0,d=0,g=0,u=0){(0,V.A)(this,"dogId","0"),(0,V.A)(this,"dogName","Unknown name"),(0,V.A)(this,"dogPortrait","unknown"),(0,V.A)(this,"dogPersonality",void 0),(0,V.A)(this,"dogSkills",void 0),(0,V.A)(this,"dogMessages",[]),(0,V.A)(this,"dogLastMessage",""),(0,V.A)(this,"dogUnreadMessages",0),this.dogId=e,this.dogName=t,this.dogPortrait=o,this.dogPersonality={good:n,evil:r,smart:i,dumb:s},this.dogSkills={piloting:a,pistols:A,rifles:c,strategy:d,charisma:g,leadership:u}}newMessage(e){const t=new Date,o=this.dogName;this.dogMessages.push({dogName:o,message:e,currentTime:t}),this.dogLastMessage=e,this.dogUnreadMessages++}newPlayerReply(e){const t=new Date,o="player";this.dogMessages.push({player:o,message:e,currentTime:t}),this.dogLastMessage=e}}const H=[];let G=new Y("1","Magpie Latte","fembir18",34,65,54,20,78,23,12,67,16,54),_=new Y("2","Mona Macaxx","femmon19",23,53,35,40,28,68,89,52,12,75),z=new Y("3","Tab Romboy","femrab2",89,15,87,50,65,76,36,90,32,10);_.dogUnreadMessages=2,_.dogLastMessage="I inserted this last message here",z.dogLastMessage="This is also a testes message!",H.push(_,G,z);const Z=(0,r.nY)("hiredDogsStore",{state:()=>({hiredDogs:H}),getters:{unreadDogs(){return this.hiredDogs.reduce(((e,t)=>t.dogUnreadMessages?++e:e),0)},getHiredDogs(){return this.hiredDogs}},actions:{async getDBHiredDogs(){const e=await fetch("http://localhost:3000/hiredDogs"),t=await e.json();this.hiredDogs=t},isExistingDog(e){const t=this.hiredDogs.some((t=>t.dogName===e));return t},updateChatlog(e,t){e.newMessage(t),this.isExistingDog(e.dogName)||this.hiredDogs.push(e)}}});var q=(0,i.pM)({name:"EngineComponent",components:{DateComponent:J},data(){return{playerMoney:50,hiredDogs:Z()}},computed:{getPlayerMoney(){return this.playerMoney.toFixed(2)},getUnreadDogs(){try{return this.hiredDogs.unreadDogs}catch(e){return"error"}}},methods:{rollRandomChance(e){return Math.random()*(e-0)+1},randomEventTrigger(){}}});const W=(0,f.A)(q,[["render",Q]]);var $=W,ee={name:"FooterComponent",components:{EngineComponent:$}};const te=(0,f.A)(ee,[["render",E]]);var oe=te,ne={name:"App",components:{HeaderComponent:C,FooterComponent:oe}};const re=(0,f.A)(ne,[["render",c]]);var ie=re,se=o(4458);(0,se.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ae=o(1387),Ae=o.p+"img/splash_screen.2e68a6d1.png";const ce={id:"home-screen"},de=(0,i.Fv)('<div id="home-container"><img id="splash_screen" src="'+Ae+'" alt="stray dogs splash screen"><h1 id="welcome-title">Welcome to Stray Dogs!</h1><div id="login-form-container"><button id="google-login">Google Login Placeholder</button></div></div>',1),ge=[de];function ue(e,t,o,n,r,s){return(0,i.uX)(),(0,i.CE)("div",ce,ge)}var le=(0,i.pM)({name:"HomeView",components:{}});const he=(0,f.A)(le,[["render",ue]]);var me=he;const pe={id:"chatlog-list-container"},ve={class:"debug-menu"},fe=(0,i.Lk)("h3",null," Debug Menu ",-1);function we(e,t,o,r,s,a){const A=(0,i.g2)("ChatblockComponent"),c=(0,i.g2)("ActiveChatComponent");return(0,i.uX)(),(0,i.CE)("section",pe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.hiredDogsStore.hiredDogs,(e=>(0,i.bo)(((0,i.uX)(),(0,i.Wv)(A,{key:e.dogId,chatPreviewProp:e,onClick:t=>a.openActiveChatComponent(e)},null,8,["chatPreviewProp","onClick"])),[[n.aG,!s.openedActiveChat]]))),128)),(0,i.bo)(((0,i.uX)(),(0,i.Wv)(c,{activeDog:s.activeDog,key:s.activeKey,onCloseActiveChat:a.triggerActiveChat},null,8,["activeDog","onCloseActiveChat"])),[[n.aG,s.openedActiveChat]]),(0,i.Lk)("div",ve,[fe,(0,i.Lk)("div",null,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>a.testUpdate&&a.testUpdate(...e))},"update hiredDogList"),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.testUpdate2&&a.testUpdate2(...e))},"update hiredDogList message"),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>a.testLog&&a.testLog(...e))},"console.log()"),(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>s.hiredDogsStore.$reset&&s.hiredDogsStore.$reset(...e))},"Reset hiredDogStore")])])])}const Ce={class:"dog-chat-block"},be={class:"chat-block-portrait"},ke=["src"],Ue={class:"chat-block-preview"},De={class:"chat-block-dog-name"},ye={class:"chat-block-paragraph-preview"},Se={class:"unread-messages-counter-container"},Ee={class:"unread-messages-counter"};function Le(e,t,o,r,s,a){return(0,i.uX)(),(0,i.CE)("div",Ce,[(0,i.Lk)("div",be,[(0,i.Lk)("img",{src:s.dogPortrait,alt:"Dog Portrait"},null,8,ke)]),(0,i.Lk)("div",Ue,[(0,i.Lk)("h2",De,(0,L.v_)(o.chatPreviewProp.dogName),1),(0,i.Lk)("p",ye,(0,L.v_)(a.truncatedLastMessage),1)]),(0,i.bo)((0,i.Lk)("div",Se,[(0,i.Lk)("p",Ee,(0,L.v_)(o.chatPreviewProp.dogUnreadMessages),1)],512),[[n.aG,o.chatPreviewProp.dogUnreadMessages>0]])])}var Ie={name:"ChatblockComponent",data(){return{dogPortrait:o(8079)("./"+this.chatPreviewProp.dogPortrait+".png")}},props:["chatPreviewProp"],methods:{},computed:{truncatedLastMessage(){return this.chatPreviewProp.dogLastMessage.length>150?this.chatPreviewProp.dogLastMessage.slice(0,150)+"...":this.chatPreviewProp.dogLastMessage}}};const Re=(0,f.A)(Ie,[["render",Le]]);var Fe=Re,Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAIpJREFUSEvtzdEKxSAIgOH1/i89U3GYZrkGI+i/OS79OFdJt0quiXYiPLodcsgqGdUjwR/5hF47eaS+ZQif44+OD1oiOxx0eADRTJ+4kE2TR6J7yJIB+IjQFCCPaISzjjeKQLLDQYcHEM3yKei5MBnCKEegF6S+82DrkSCH0FO/Q/4jo3Yhc6VJKTeKPAcZ3LfHWQAAAABJRU5ErkJggg==";const Me={id:"active-chat-container"},Te={id:"active-chat-header"},Be={id:"active-chat-portrait-container"},Ne=["src"],xe={id:"active-chat-name-container"},Oe={id:"active-chat-name",class:"white-text"},Qe={id:"active-chat-feed",ref:"chatfeed"},Ke={class:"active-chat-feed-balloon-text"},je=(0,i.Lk)("img",{src:Pe,alt:"return to previous screen"},null,-1),Xe=[je];function Je(e,t,o,n,r,s){return(0,i.uX)(),(0,i.CE)("div",Me,[(0,i.Lk)("section",Te,[(0,i.Lk)("div",Be,[(0,i.Lk)("img",{id:"active-chat-portrait",src:s.dogPortrait,alt:"Dog Portrait"},null,8,Ne)]),(0,i.Lk)("div",xe,[(0,i.Lk)("h2",Oe,(0,L.v_)(s.dogName),1)])]),(0,i.Lk)("section",Qe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.activeDog.dogMessages,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"active-chat-feed-balloon",key:t},[(0,i.Lk)("p",Ke,(0,L.v_)(e.message),1)])))),128))],512),(0,i.Lk)("div",{class:"back-button",onClick:t[0]||(t[0]=(...e)=>s.closeActiveChat&&s.closeActiveChat(...e))},Xe)])}var Ve={name:"ActiveChatComponent",components:{},props:{activeDog:{type:Y,required:!1,default:null}},watch:{},data(){return{loadedDog:this.activeDog,defaultDog:new Y,defaultName:"No Dog Selected!",defaultPortrait:o(6560)}},computed:{dogPortrait(){try{return this.loadedDog?o(8079)("./"+this.loadedDog.dogPortrait+".png"):this.defaultPortrait}catch(e){return console.error("activeDog has no PORTRAIT",e),this.defaultPortrait}},dogName(){try{return this.loadedDog?this.loadedDog.dogName:this.defaultName}catch(e){return console.error("activeDog has no NAME",e),this.defaultName}}},methods:{closeActiveChat(){this.$emit("close-active-chat",!1)},scrollToBottom(){this.$refs.chatfeed.scrollTop=this.$refs.chatfeed.scrollToBottom}},updated(){this.$nextTick((()=>{this.$refs.chatfeed.scrollTop=this.$refs.chatfeed.scrollToBottom}))}};const Ye=(0,f.A)(Ve,[["render",Je]]);var He=Ye,Ge={name:"ChatView",components:{ChatblockComponent:Fe,ActiveChatComponent:He},data(){return{hiredDogsStore:Z(),openedActiveChat:!1,activeDog:new Y,activeKey:0,jackRabbit:new Y("4","Jack Rabbit","femrab2",86,10,76,8,90,18,4,48,60,21)}},methods:{openActiveChatComponent(e){this.activeKey=e.dogId,this.activeDog=e,this.triggerActiveChat(!0)},triggerActiveChat(e){this.openedActiveChat=e},testUpdate(){let e="Is this thing turned on? lorem ipsum In this revised example, the ChildComponent emits an update-message event with the new message, and the ParentComponent listens for this event and updates its message data property accordingly. This is the recommended way to communicate changes from a child component back to its parent in Vue 3.";this.hiredDogsStore.updateChatlog(this.jackRabbit,e)},testUpdate2(){this.jackRabbit.newMessage("This message will also show regardless of sending any info to the Store!"),this.hiredDogsStore.updateChatlog(this.jackRabbit,"blank message")},testLog(){console.log(this.hiredDogsStore.hiredDogs)}}};const _e=(0,f.A)(Ge,[["render",we]]);var ze=_e;const Ze=[{path:"/",name:"home",component:me},{path:"/chat",name:"chat",component:ze},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,5609))}],qe=(0,ae.aE)({history:(0,ae.LA)("/"),routes:Ze});var We=qe;(0,n.Ef)(ie).use((0,r.Ey)()).use(We).mount("#app")},8079:function(e,t,o){var n={"./fembir18.png":7092,"./femmon19.png":9412,"./femrab2.png":5965,"./femrat12.png":3628,"./unknown.png":6560};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=8079},7092:function(e,t,o){"use strict";e.exports=o.p+"img/fembir18.5552d43e.png"},9412:function(e,t,o){"use strict";e.exports=o.p+"img/femmon19.1fc922c6.png"},5965:function(e,t,o){"use strict";e.exports=o.p+"img/femrab2.20e0b503.png"},3628:function(e,t,o){"use strict";e.exports=o.p+"img/femrat12.c386b923.png"},6560:function(e,t,o){"use strict";e.exports=o.p+"img/unknown.12c8dc51.png"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,A=0;A<n.length;A++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[A])}))?n.splice(A--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.81ac6110.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="stray-dogs-v6:";o.l=function(n,r,i,s){if(e[n])e[n].push(r);else{var a,A;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var g=c[d];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==t+i){a=g;break}}a||(A=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var u=function(t,o){a.onerror=a.onload=null,clearTimeout(l);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),t)return t(o)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),A&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error,A=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};o.l(s,A,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,s=n[0],a=n[1],A=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(A)var d=A(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkstray_dogs_v6"]=self["webpackChunkstray_dogs_v6"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(9190)}));n=o.O(n)})();
//# sourceMappingURL=app.39a81d45.js.map