!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([,function(t,e){function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(){}window.setViewPort("up");new(function(){function t(){o(this,t),a(this,"map",{})}return s(t,[{key:"getQueue",value:function(t){return this.map[t]||(this.map[t]=[])}},{key:"add",value:function(t,e){this.getQueue(t).push(e)}},{key:"remove",value:function(t,e){var i=this.getQueue(t);i.forEach((function(t,n){return t===e&&i.splice(n,1)}))}},{key:"trigger",value:function(t){var e=Array.from(arguments).slice(1);this.getQueue(t).forEach((function(t){return t.apply(e[0],i(e.slice(1)))}))}}]),t}());var l=function t(e,i){o(this,t),this.time=i,this.handler=e},u=new(function(){function t(){var e=this;o(this,t),a(this,"timer",void 0),a(this,"handlerQueue",[]),this.timer=setInterval((function(){for(var t=e.handlerQueue.length,i=0;i<t;i++)e.handlerQueue[i]&&e.handlerQueue[i].time<=0&&(e.handlerQueue[i].handler.call(),e.handlerQueue.splice(i,1),t--),e.handlerQueue[i].time--}),1e3)}return s(t,[{key:"push",value:function(t){t instanceof l&&this.handlerQueue.push(t)}}]),t}()),c=function(){function t(e,i){o(this,t),this.x=e,this.y=i}return s(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),f=function(){function t(e,i,n){o(this,t),this.topPoint=e,this.topDirect=i,this.color=n}return s(t,[{key:"setRenderContext",value:function(t,e,i){this.ctx=t,this.xOffset=e,this.yOffset=i}},{key:"changeColor",value:function(t){this.color=t,this.render()}},{key:"render",value:function(){var t,e;this.ctx.fillStyle=this.color,"up"==this.topDirect?(t=new c(this.topPoint.x-this.xOffset,this.topPoint.y+this.yOffset),e=new c(this.topPoint.x+this.xOffset,this.topPoint.y+this.yOffset)):"down"==this.topDirect&&(t=new c(this.topPoint.x-this.xOffset,this.topPoint.y-this.yOffset),e=new c(this.topPoint.x+this.xOffset,this.topPoint.y-this.yOffset)),this.ctx.beginPath(),this.ctx.moveTo(this.topPoint.x,this.topPoint.y),this.ctx.lineTo(t.x,t.y),this.ctx.lineTo(e.x,e.y),this.ctx.closePath(),this.ctx.fill()}}]),t}(),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),a(this,"game",void 0),a(this,"ctx",void 0),a(this,"gameWidth",void 0),a(this,"gameHeight",void 0),a(this,"triangleWidth",void 0),a(this,"angle30",Math.PI/6),a(this,"xOffset",void 0),a(this,"yOffset",void 0),a(this,"offset",3),a(this,"circleRadius",8),a(this,"colorList",["#ff0000","#0000ff","#00aecd","#ff9955","#bd2d30","#9c27b0"]),a(this,"offsetTop",void 0),a(this,"offsetLeft",void 0),a(this,"startPoint",void 0),a(this,"keyPoints",[]),a(this,"triangleList",[]),a(this,"keyTriangleGroup",{}),a(this,"colorData",void 0),a(this,"isCalc",!1),a(this,"canTurn",!1),this.game=document.getElementById(e.gameId||"game"),this.ctx=this.game.getContext("2d"),this.gameWidth=this.game.width,this.gameHeight=this.game.height,this.triangleWidth=e.triangleWidth||86,this.xOffset=Math.ceil(Math.sin(this.angle30)*this.triangleWidth),this.yOffset=Math.ceil(Math.cos(this.angle30)*this.triangleWidth),this.offset=e.offest||3,this.circleRadius=e.circleRadius||8,this.offsetTop=this.game.offsetTop,this.offsetLeft=this.game.offsetLeft,this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.colorData=e.colorData||[],this.check=e.check||h}return s(t,[{key:"setColorData",value:function(t){this.colorData=t}},{key:"disable",value:function(){this.canTurn=!1}},{key:"active",value:function(){this.canTurn=!0}},{key:"drawKeyCircle",value:function(){var t=this;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=3,this.keyPoints.forEach((function(e,i){t.ctx.beginPath(),t.ctx.moveTo(e.x+t.circleRadius,e.y),t.ctx.arc(e.x,e.y+t.offset/2*(i<12?1:-1),t.circleRadius,0,2*Math.PI),t.ctx.closePath(),t.ctx.stroke()}))}},{key:"fillBaseColor",value:function(){var t=this;[0,7,8,9,16,17,18,19,20].forEach((function(e){t.triangleList[e].changeColor(t.colorList[0])})),[1,2,3,4,5,10,11,12,21].forEach((function(e){t.triangleList[e].changeColor(t.colorList[1])})),[6,13,14,15,22,23,24,25,26].forEach((function(e){t.triangleList[e].changeColor(t.colorList[2])})),[27,28,29,30,31,38,39,40,47].forEach((function(e){t.triangleList[e].changeColor(t.colorList[3])})),[32,41,42,43,48,49,50,51,52].forEach((function(e){t.triangleList[e].changeColor(t.colorList[4])})),[33,34,35,36,37,44,45,46,53].forEach((function(e){t.triangleList[e].changeColor(t.colorList[5])}))}},{key:"fillColor",value:function(){for(var t=0;t<54;t++)this.triangleList[t].changeColor(this.colorList[this.colorData[t]])}},{key:"initData",value:function(){var t,e,i,n,o,r=this;this.startPoint=new c(3*(this.xOffset+this.offset)+20,20);for(var s=[7,9,11,11,9,7],a=0;a<s.length;a++){o="up"==(i=a<3?"up":"down")?new c(this.startPoint.x-(this.xOffset+this.offset)*a,this.startPoint.y+(this.yOffset+this.offset)*a):new c(this.startPoint.x-(s.length-1-a)*(this.xOffset+this.offset),this.startPoint.y+(this.yOffset+this.offset)*(a+1)-this.offset);for(var h=0;h<s[a];h++)e="up"==i?h%2==0?"up":"down":h%2==0?"down":"up",n=new c(o.x+(this.xOffset+this.offset)*h,o.y+this.yOffset*(h%2==0?0:"up"==i?1:-1)),"up"==i?"down"==e&&this.keyPoints.push(n.clone()):3!=a&&"up"==e&&this.keyPoints.push(n.clone()),(t=new f(n,e,"#ff0000")).setRenderContext(this.ctx,this.xOffset,this.yOffset),t.render(),this.triangleList.push(t)}function l(t){return s.slice(0,t+1).reduce((function(t,e){return t+e}),0)}var u=0,d=0,m=s[0]+1,v=d+2;this.keyPoints.forEach((function(t){var e=u,i=t.toString(),n=r.keyTriangleGroup[i]||(r.keyTriangleGroup[i]=[]);n.push(r.triangleList[d]),n.push(r.triangleList[d+1]),n.push(r.triangleList[d+2]),n.push(r.triangleList[m]),n.push(r.triangleList[m+1]),n.push(r.triangleList[m+2]),e<3&&v==l(e)-1||e>2&&v+1==l(e)-1?(e++,d=e<3?l(u):l(u)+1,m=e<2?l(e)+1:l(e),u=e):(d+=2,m+=2),v=d+2,m+2}))}},{key:"render",value:function(){this.initData(),this.fillColor()}},{key:"getColorData",value:function(){var t=this;return this.triangleList.map((function(e){return t.colorList.indexOf(e.color)}))}},{key:"start",value:function(){this.render(),this.drawKeyCircle(),this.loop(),this.listen()}},{key:"loop",value:function(){}},{key:"turnKeyPoint",value:function(t){var e=this.keyPoints[t],i=this.keyTriangleGroup[e.toString()],n=i[0].color;[3,4,5,2,1].reduce((function(t,e){return i[t].changeColor(i[e].color),e}),0),i[1].changeColor(n)}},{key:"handlerPoint",value:function(t){var e=this;if(!this.isCalc){this.isCalc=!0;var i=-1;this.keyPoints.forEach((function(n,o){n.distanceTo(t)<4*e.circleRadius&&(i=o)})),i>-1&&(this.turnKeyPoint(i),this.drawKeyCircle(),this.check()),this.isCalc=!1}}},{key:"listen",value:function(){var t=this;window.onresize=function(e){t.offsetLeft=t.game.offsetLeft},this.game.addEventListener("click",(function(e){var i=new c(e.x-t.offsetLeft,e.y-t.offsetTop);t.canTurn&&t.handlerPoint(i)}))}},{key:"dispose",value:function(){window.onresize=null,this.game=null}}]),t}();new(function(){function t(e,i,n,r,s,h){o(this,t),a(this,"main",void 0),a(this,"help",void 0),a(this,"level",1),a(this,"running",!1),a(this,"currentTime",0),a(this,"totalTime",0),a(this,"cacheKey","_ray_game_g6_"),a(this,"mainData",void 0),a(this,"helpData",void 0),a(this,"isStart",!0),a(this,"baseColorList",[0,1,1,1,1,1,2,0,0,0,1,1,1,2,2,2,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,3,4,5,5,5,5,5,3,3,3,4,4,4,5,5,5,3,4,4,4,4,4,5]),this.mainId=e,this.helpId=i,this.levelDom=document.getElementById(n),this.nextDom=document.getElementById(r),this.currentTimer=document.getElementById(s),this.totalTimer=document.getElementById(h)}return s(t,[{key:"adapt",value:function(){var t=document.getElementById(this.helpId).parentNode,e=document.getElementById(this.mainId).parentNode;t.style.top=e.offsetTop+"px",t.style.left=e.offsetLeft+"px"}},{key:"random",value:function(t){for(var e,i,n,o=t.length,r=10*o,s=0;s<r;s++)i=Math.floor(Math.random()*o),n=(n=Math.floor(Math.random()*o))>=o?n-1:n,e=t[i=i>=o?i-1:i],t[i]=t[n],t[n]=e;return t}},{key:"genTarget",value:function(){var t=[],e=this.random([0,1,2,3,4,5]);return[0,7,8,9,16,17,18,19,20].forEach((function(i){t[i]=e[0]})),[1,2,3,4,5,10,11,12,21].forEach((function(i){t[i]=e[1]})),[6,13,14,15,22,23,24,25,26].forEach((function(i){t[i]=e[2]})),[27,28,29,30,31,38,39,40,47].forEach((function(i){t[i]=e[3]})),[32,41,42,43,48,49,50,51,52].forEach((function(i){t[i]=e[4]})),[33,34,35,36,37,44,45,46,53].forEach((function(i){t[i]=e[5]})),t}},{key:"genData",value:function(){return this.random(this.baseColorList)}},{key:"nextLevel",value:function(){this.main.dispose(),this.help.dispose(),this.main=null,this.help=null,this.levelDom.innerHTML="第【".concat(this.level,"】关"),this.currentTime=0,this.initData(),this.init()}},{key:"init",value:function(){var t,e=this;this.main=new d({gameId:this.mainId,colorData:this.mainData,check:function(){e.main.getColorData().every((function(e,i){return e===t[i]}))&&(window.toast(window.getSmailFaceSvg()+'<span class="msg">恭喜您，过关了！</span>',2e3),e.running=!1,e.activeNext(),e.main.disable(),e.level++)}}),this.help=new d({gameId:this.helpId,colorData:this.helpData,triangleWidth:10,circleRadius:2,offest:2}),this.main.start(),this.help.render(),t=this.help.getColorData()}},{key:"initData",value:function(){var t=localStorage.getItem(this.cacheKey);if(this.isStart&&t&&window.confirm("欢迎回来，是否继续游戏？")){var e=JSON.parse(t);return this.mainData=e.mainData,this.helpData=e.helpData,this.level=e.level,this.currentTime=e.currentTime,this.totalTime=e.totalTime,this.currentTimer.innerHTML=this.formatTime(this.currentTime),this.totalTimer.innerHTML=this.formatTime(this.totalTime),void(this.levelDom.innerHTML="第【".concat(this.level,"】关"))}this.mainData=this.genData(),this.helpData=this.genTarget()}},{key:"saveLocalData",value:function(){if(!this.isStart){var t={};t.totalTime=this.totalTime,t.currentTime=this.currentTime,t.level=this.level,t.mainData=this.main.getColorData(),t.helpData=this.helpData,localStorage.setItem(this.cacheKey,JSON.stringify(t))}}},{key:"start",value:function(){this.initData(),this.init(),this.adapt(),this.listen(),this.startTimer()}},{key:"formatTime",value:function(t){var e=[],i=t;return i>=86400&&(e.push(Math.floor(t/86400)),e.push("天"),i%=86400),i>=3600&&(e.push(Math.floor(i/3600)),e.push("小时"),i%=3600),i>=60&&(e.push(Math.floor(i/60)),e.push("分"),i%=60),i>0&&(e.push(i),e.push("秒")),e.join("")}},{key:"startTimer",value:function(){var t=this;u.push(new l((function(){t.running&&(t.currentTime++,t.totalTime++,t.currentTimer.innerHTML=t.formatTime(t.currentTime),t.totalTimer.innerHTML=t.formatTime(t.totalTime)),t.startTimer()}),1))}},{key:"disableNext",value:function(){this.nextDom.className="disable"}},{key:"activeNext",value:function(){this.nextDom.className=""}},{key:"listen",value:function(){var t=this;this.nextDom.addEventListener("click",(function(){t.running||(t.running=!0,t.isStart?(t.isStart=!1,t.nextDom.innerHTML="下一关"):t.nextLevel(),t.disableNext(),t.main.active())})),window.addEventListener("beforeunload",(function(e){t.saveLocalData(),e.preventDefault()}))}}]),t}())("game","preGame","level","next","current","total").start()}]);