!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([,function(t,e){function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(){}new(function(){function t(){o(this,t),a(this,"map",{})}return s(t,[{key:"getQueue",value:function(t){return this.map[t]||(this.map[t]=[])}},{key:"add",value:function(t,e){this.getQueue(t).push(e)}},{key:"remove",value:function(t,e){var i=this.getQueue(t);i.forEach((function(t,n){return t===e&&i.splice(n,1)}))}},{key:"trigger",value:function(t){var e=Array.from(arguments).slice(1);this.getQueue(t).forEach((function(t){return t.apply(e[0],i(e.slice(1)))}))}}]),t}());var c=function t(e,i){o(this,t),this.time=i,this.handler=e},u=new(function(){function t(){var e=this;o(this,t),a(this,"timer",void 0),a(this,"handlerQueue",[]),this.timer=setInterval((function(){for(var t=e.handlerQueue.length,i=0;i<t;i++)e.handlerQueue[i]&&e.handlerQueue[i].time<=0&&(e.handlerQueue[i].handler.call(),e.handlerQueue.splice(i,1),t--),e.handlerQueue[i].time--}),1e3)}return s(t,[{key:"push",value:function(t){t instanceof c&&this.handlerQueue.push(t)}}]),t}()),l=function(){function t(e,i){o(this,t),this.x=e,this.y=i}return s(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),f=function(){function t(e,i,n){o(this,t),this.topPoint=e,this.topDirect=i,this.color=n}return s(t,[{key:"setRenderContext",value:function(t,e,i){this.ctx=t,this.xOffset=e,this.yOffset=i}},{key:"changeColor",value:function(t){this.color=t,this.render()}},{key:"render",value:function(){var t,e;this.ctx.fillStyle=this.color,"up"==this.topDirect?(t=new l(this.topPoint.x-this.xOffset,this.topPoint.y+this.yOffset),e=new l(this.topPoint.x+this.xOffset,this.topPoint.y+this.yOffset)):"down"==this.topDirect&&(t=new l(this.topPoint.x-this.xOffset,this.topPoint.y-this.yOffset),e=new l(this.topPoint.x+this.xOffset,this.topPoint.y-this.yOffset)),this.ctx.beginPath(),this.ctx.moveTo(this.topPoint.x,this.topPoint.y),this.ctx.lineTo(t.x,t.y),this.ctx.lineTo(e.x,e.y),this.ctx.closePath(),this.ctx.fill()}}]),t}(),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),a(this,"game",void 0),a(this,"ctx",void 0),a(this,"gameWidth",void 0),a(this,"gameHeight",void 0),a(this,"triangleWidth",void 0),a(this,"angle30",Math.PI/6),a(this,"xOffset",void 0),a(this,"yOffset",void 0),a(this,"offset",3),a(this,"circleRadius",8),a(this,"colorList",["#ff0000","#0000ff","#00aecd","#ff9955","#bd2d30","#9c27b0"]),a(this,"offsetTop",void 0),a(this,"offsetLeft",void 0),a(this,"startPoint",void 0),a(this,"keyPoints",[]),a(this,"triangleList",[]),a(this,"keyTriangleGroup",{}),a(this,"colorData",void 0),a(this,"isCalc",!1),a(this,"canTurn",!1),this.game=document.getElementById(e.gameId||"game"),this.ctx=this.game.getContext("2d"),this.gameWidth=this.game.width,this.gameHeight=this.game.height,this.triangleWidth=e.triangleWidth||86,this.xOffset=Math.ceil(Math.sin(this.angle30)*this.triangleWidth),this.yOffset=Math.ceil(Math.cos(this.angle30)*this.triangleWidth),this.offset=e.offest||3,this.circleRadius=e.circleRadius||8,this.offsetTop=this.game.offsetTop,this.offsetLeft=this.game.offsetLeft,this.ctx.clearRect(0,0,this.gameWidth,this.gameHeight),this.colorData=e.colorData||[],this.check=e.check||h}return s(t,[{key:"setColorData",value:function(t){this.colorData=t}},{key:"disable",value:function(){this.canTurn=!1}},{key:"active",value:function(){this.canTurn=!0}},{key:"drawKeyCircle",value:function(){var t=this;this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=3,this.keyPoints.forEach((function(e,i){t.ctx.beginPath(),t.ctx.moveTo(e.x+t.circleRadius,e.y),t.ctx.arc(e.x,e.y+t.offset/2*(i<12?1:-1),t.circleRadius,0,2*Math.PI),t.ctx.closePath(),t.ctx.stroke()}))}},{key:"fillBaseColor",value:function(){var t=this;[0,7,8,9,16,17,18,19,20].forEach((function(e){t.triangleList[e].changeColor(t.colorList[0])})),[1,2,3,4,5,10,11,12,21].forEach((function(e){t.triangleList[e].changeColor(t.colorList[1])})),[6,13,14,15,22,23,24,25,26].forEach((function(e){t.triangleList[e].changeColor(t.colorList[2])})),[27,28,29,30,31,38,39,40,47].forEach((function(e){t.triangleList[e].changeColor(t.colorList[3])})),[32,41,42,43,48,49,50,51,52].forEach((function(e){t.triangleList[e].changeColor(t.colorList[4])})),[33,34,35,36,37,44,45,46,53].forEach((function(e){t.triangleList[e].changeColor(t.colorList[5])}))}},{key:"fillColor",value:function(){for(var t=0;t<54;t++)this.triangleList[t].changeColor(this.colorList[this.colorData[t]])}},{key:"initData",value:function(){var t,e,i,n,o,r=this;this.startPoint=new l(3*(this.xOffset+this.offset)+20,20);for(var s=[7,9,11,11,9,7],a=0;a<s.length;a++){o="up"==(i=a<3?"up":"down")?new l(this.startPoint.x-(this.xOffset+this.offset)*a,this.startPoint.y+(this.yOffset+this.offset)*a):new l(this.startPoint.x-(s.length-1-a)*(this.xOffset+this.offset),this.startPoint.y+(this.yOffset+this.offset)*(a+1)-this.offset);for(var h=0;h<s[a];h++)e="up"==i?h%2==0?"up":"down":h%2==0?"down":"up",n=new l(o.x+(this.xOffset+this.offset)*h,o.y+this.yOffset*(h%2==0?0:"up"==i?1:-1)),"up"==i?"down"==e&&this.keyPoints.push(n.clone()):3!=a&&"up"==e&&this.keyPoints.push(n.clone()),(t=new f(n,e,"#ff0000")).setRenderContext(this.ctx,this.xOffset,this.yOffset),t.render(),this.triangleList.push(t)}function c(t){return s.slice(0,t+1).reduce((function(t,e){return t+e}),0)}var u=0,d=0,p=s[0]+1,y=d+2;this.keyPoints.forEach((function(t){var e=u,i=t.toString(),n=r.keyTriangleGroup[i]||(r.keyTriangleGroup[i]=[]);n.push(r.triangleList[d]),n.push(r.triangleList[d+1]),n.push(r.triangleList[d+2]),n.push(r.triangleList[p]),n.push(r.triangleList[p+1]),n.push(r.triangleList[p+2]),e<3&&y==c(e)-1||e>2&&y+1==c(e)-1?(e++,d=e<3?c(u):c(u)+1,p=e<2?c(e)+1:c(e),u=e):(d+=2,p+=2),y=d+2,p+2}))}},{key:"render",value:function(){this.initData(),this.fillColor()}},{key:"getColorData",value:function(){var t=this;return this.triangleList.map((function(e){return t.colorList.indexOf(e.color)}))}},{key:"start",value:function(){this.render(),this.drawKeyCircle(),this.loop(),this.listen()}},{key:"loop",value:function(){}},{key:"turnKeyPoint",value:function(t){var e=this.keyPoints[t],i=this.keyTriangleGroup[e.toString()],n=i[0].color;[3,4,5,2,1].reduce((function(t,e){return i[t].changeColor(i[e].color),e}),0),i[1].changeColor(n)}},{key:"handlerPoint",value:function(t){var e=this;if(!this.isCalc){this.isCalc=!0;var i=-1;this.keyPoints.forEach((function(n,o){n.distanceTo(t)<e.circleRadius&&(i=o)})),i>-1&&(this.turnKeyPoint(i),this.drawKeyCircle(),this.check()),this.isCalc=!1}}},{key:"listen",value:function(){var t=this;window.onresize=function(e){t.offsetLeft=t.game.offsetLeft},this.game.addEventListener("click",(function(e){var i=new l(e.x-t.offsetLeft,e.y-t.offsetTop);t.canTurn&&t.handlerPoint(i)}))}},{key:"dispose",value:function(){window.onresize=null,this.game=null}}]),t}();new(function(){function t(e,i,n,r,s,h){o(this,t),a(this,"main",void 0),a(this,"help",void 0),a(this,"level",1),a(this,"running",!1),a(this,"currentTime",0),a(this,"totalTime",0),a(this,"baseColorList",[0,1,1,1,1,1,2,0,0,0,1,1,1,2,2,2,0,0,0,0,0,1,2,2,2,2,2,3,3,3,3,3,4,5,5,5,5,5,3,3,3,4,4,4,5,5,5,3,4,4,4,4,4,5]),this.mainId=e,this.helpId=i,this.levelDom=document.getElementById(n),this.nextDom=document.getElementById(r),this.currentTimer=document.getElementById(s),this.totalTimer=document.getElementById(h),this.adapt()}return s(t,[{key:"adapt",value:function(){var t=document.getElementById(this.helpId).parentNode,e=document.getElementById(this.mainId).parentNode;t.style.top=e.offsetTop+"px",t.style.left=e.offsetLeft+"px"}},{key:"random",value:function(t){for(var e,i,n,o=t.length,r=10*o,s=0;s<r;s++)i=Math.ceil(Math.random()*o),n=(n=Math.ceil(Math.random()*o))>=o?n-1:n,e=t[i=i>=o?i-1:i],t[i]=t[n],t[n]=e;return t}},{key:"genTarget",value:function(){var t=[],e=this.random([0,1,2,3,4,5]);return[0,7,8,9,16,17,18,19,20].forEach((function(i){t[i]=e[0]})),[1,2,3,4,5,10,11,12,21].forEach((function(i){t[i]=e[1]})),[6,13,14,15,22,23,24,25,26].forEach((function(i){t[i]=e[2]})),[27,28,29,30,31,38,39,40,47].forEach((function(i){t[i]=e[3]})),[32,41,42,43,48,49,50,51,52].forEach((function(i){t[i]=e[4]})),[33,34,35,36,37,44,45,46,53].forEach((function(i){t[i]=e[5]})),t}},{key:"genData",value:function(){return this.random(this.baseColorList)}},{key:"nextLevel",value:function(){this.main.dispose(),this.help.dispose(),this.main=null,this.help=null,this.levelDom.innerHTML="第【".concat(this.level,"】关"),this.currentTime=0,this.init()}},{key:"init",value:function(){var t,e=this;this.main=new d({gameId:this.mainId,colorData:this.genData(),check:function(){e.main.getColorData().every((function(e,i){return e===t[i]}))&&(!function(t,e){e=isNaN(e)?3e3:e;var i=document.createElement("div");i.innerHTML=t,i.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;",document.body.appendChild(i),setTimeout((function(){i.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",i.style.opacity="0",setTimeout((function(){document.body.removeChild(i)}),500)}),e)}('<svg t="1594999582341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="881" width="40" height="40"><path d="M512 822c171.208 0 310-138.792 310-310s-138.792-310-310-310-310 138.792-310 310 138.792 310 310 310z m0 90c-220.914 0-400-179.086-400-400S291.086 112 512 112s400 179.086 400 400-179.086 400-400 400z" p-id="882" fill="#f8ec07"></path><path d="M310.93 638.328c-12.332-21.576-4.836-49.066 16.74-61.398 21.58-12.332 49.068-4.836 61.4 16.74C415.608 640.106 454.586 662 512.004 662c57.418 0 96.398-21.896 122.934-68.328 12.332-21.58 39.82-29.074 61.4-16.74 21.576 12.33 29.072 39.82 16.74 61.396C670.27 713.228 601.248 752 512.004 752c-89.244 0-158.266-38.772-201.074-113.672z" p-id="883" fill="#f8ec07"></path><path d="M342 432m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" p-id="884" fill="#f8ec07"></path><path d="M682 432m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" p-id="885" fill="#f8ec07"></path></svg><span class="msg">恭喜您，过关了！</span>',2e3),e.running=!1,e.activeNext(),e.main.disable(),e.level++)}}),this.help=new d({gameId:this.helpId,colorData:this.genTarget(),triangleWidth:10,circleRadius:2,offest:2}),this.main.start(),this.help.render(),t=this.help.getColorData()}},{key:"start",value:function(){this.init(),this.listen(),this.startTimer()}},{key:"formatTime",value:function(t){var e=[],i=t;return i>=86400&&(e.push(Math.floor(t/86400)),e.push("天"),i%=86400),i>=3600&&(e.push(Math.floor(i/3600)),e.push("小时"),i%=3600),i>=60&&(e.push(Math.floor(i/60)),e.push("分"),i%=60),i>0&&(e.push(i),e.push("秒")),e.join("")}},{key:"startTimer",value:function(){var t=this;u.push(new c((function(){t.running&&(t.currentTime++,t.totalTime++,t.currentTimer.innerHTML=t.formatTime(t.currentTime),t.totalTimer.innerHTML=t.formatTime(t.totalTime)),t.startTimer()}),1))}},{key:"disableNext",value:function(){this.nextDom.className="disable"}},{key:"activeNext",value:function(){this.nextDom.className=""}},{key:"listen",value:function(){var t=this;this.nextDom.addEventListener("click",(function(){t.running||(t.running=!0,1==t.level?t.nextDom.innerHTML="下一关":t.nextLevel(),t.disableNext(),t.main.active())}))}}]),t}())("game","preGame","level","next","current","total").start()}]);