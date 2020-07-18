!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){function i(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}window.setViewPort("up");var s,a=document.getElementById("game"),h=document.getElementById("levelInfo"),l=a.getContext("2d"),c=a.width,u=a.height,f=a.offsetTop,d=a.offsetLeft;l.fillStyle="#ffffff",l.fillRect(0,0,c,u);var R=function(){function t(e,i){n(this,t),this.x=e,this.y=i}return r(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}(),P=function(){function t(e,o,r){n(this,t),i(this,"minRadius",10),i(this,"minWidth",6),i(this,"maxRadius",this.minRadius+this.minWidth+4),i(this,"maxWidth",12),i(this,"outerRadius",this.maxRadius+10),i(this,"nums",15),i(this,"pointRadius",4),i(this,"pointLen",this.maxRadius+6),i(this,"colorGroup",[["#31b0da","#81deea"],["#9c27b0","#d891e4"]]),this.centerPoint=e,this.type=o,this.director=r}return r(t,[{key:"render",value:function(){l.beginPath(),l.moveTo(this.centerPoint.x+this.maxRadius,this.centerPoint.y),l.arc(this.centerPoint.x,this.centerPoint.y,this.maxRadius,0,2*Math.PI),l.closePath(),l.fillStyle="#ffffff",l.fill(),l.beginPath(),l.strokeStyle=this.getColor(),l.lineWidth=5,l.lineJoin="bevel";for(var e,i,n,o,r,s,a=2*this.nums,h=0;h<a;h++)o=2*Math.PI/a*(h+1),n=h%2==0?this.maxRadius:this.outerRadius,e=this.centerPoint.x+n*Math.sin(o),i=this.centerPoint.y+n*Math.cos(o),0==h?l.moveTo(e,i):l.lineTo(e,i);switch(l.closePath(),l.stroke(),l.beginPath(),l.strokeStyle=this.getColor(),l.lineWidth=this.minWidth,l.moveTo(this.centerPoint.x+this.minRadius,this.centerPoint.y),l.arc(this.centerPoint.x,this.centerPoint.y,this.minRadius,0,2*Math.PI),l.closePath(),l.stroke(),l.beginPath(),l.strokeStyle=this.getLinerColor(),l.lineWidth=this.maxWidth,l.moveTo(this.centerPoint.x+this.maxRadius,this.centerPoint.y),l.arc(this.centerPoint.x,this.centerPoint.y,this.maxRadius,0,2*Math.PI),l.closePath(),l.stroke(),l.beginPath(),l.fillStyle="#ffff00",l.moveTo(this.centerPoint.x+this.pointRadius,this.centerPoint.y),l.arc(this.centerPoint.x,this.centerPoint.y,this.pointRadius,0,2*Math.PI),l.closePath(),l.fill(),l.beginPath(),l.fillStyle="#ffff00",l.moveTo(this.centerPoint.x+this.pointRadius,this.centerPoint.y),l.arc(this.centerPoint.x,this.centerPoint.y,this.pointRadius,0,2*Math.PI),l.closePath(),l.fill(),l.beginPath(),l.strokeStyle="#ffff00",l.lineWidth=4,l.moveTo(this.centerPoint.x,this.centerPoint.y),this.director){case t.DIRECTOR.up:r=this.centerPoint.x,s=this.centerPoint.y-this.pointLen;break;case t.DIRECTOR.right:r=this.centerPoint.x+this.pointLen,s=this.centerPoint.y;break;case t.DIRECTOR.down:r=this.centerPoint.x,s=this.centerPoint.y+this.pointLen;break;case t.DIRECTOR.left:r=this.centerPoint.x-this.pointLen,s=this.centerPoint.y}l.lineTo(r,s),l.closePath(),l.stroke()}},{key:"turn",value:function(){this.director=this.getNextDir(),this.render()}},{key:"getNextDir",value:function(){var e,n;return(this.type==t.TYPE.b?(i(e={},t.DIRECTOR.up,t.DIRECTOR.left),i(e,t.DIRECTOR.left,t.DIRECTOR.down),i(e,t.DIRECTOR.down,t.DIRECTOR.right),i(e,t.DIRECTOR.right,t.DIRECTOR.up),e):(i(n={},t.DIRECTOR.up,t.DIRECTOR.right),i(n,t.DIRECTOR.left,t.DIRECTOR.up),i(n,t.DIRECTOR.down,t.DIRECTOR.left),i(n,t.DIRECTOR.right,t.DIRECTOR.down),n))[this.director]}},{key:"getColor",value:function(){return this.type==t.TYPE.a?this.colorGroup[0][0]:this.colorGroup[1][0]}},{key:"getLinerColor",value:function(){var e=l.createRadialGradient(this.centerPoint.x,this.centerPoint.y,this.minRadius,this.centerPoint.x,this.centerPoint.y,this.maxRadius);e.addColorStop(0,this.colorGroup[0][0]),e.addColorStop(1,this.colorGroup[0][1]);var i=l.createRadialGradient(this.centerPoint.x,this.centerPoint.y,this.minRadius,this.centerPoint.x,this.centerPoint.y,this.maxRadius);return i.addColorStop(0,this.colorGroup[1][0]),i.addColorStop(1,this.colorGroup[1][1]),this.type==t.TYPE.a?e:i}}]),t}();P.TYPE={a:0,b:1},P.DIRECTOR={up:0,right:1,down:2,left:3};var y=function(){function t(){n(this,t),i(this,"firstPoint",new R(40,40)),i(this,"step",80),i(this,"level",0),i(this,"levelList",void 0),i(this,"clList",[]),i(this,"running",!1),window.levelData?this.levelList=window.levelData:alert("暂无关卡")}return r(t,[{key:"start",value:function(){this.levelList&&this.levelList.length&&(this.loadLevel(),this.listen())}},{key:"restart",value:function(){l.fillStyle="#ffffff",l.fillRect(0,0,c,u),this.loadLevel()}},{key:"nextLevel",value:function(){this.level==this.levelList.length-1?alert("没有更多关卡了。"):(this.level++,this.restart())}},{key:"resetEnv",value:function(){this.clList=[],this.running=!1}},{key:"loadLevel",value:function(){this.resetEnv();var t=this.levelList[this.level];7==t.length?this.render(t):alert("关卡数据不正确")}},{key:"render",value:function(t){var e=this;t.forEach((function(t,i){e.clList[i]=[],t.forEach((function(t,n){var o=new R(e.firstPoint.x+e.step*n,e.firstPoint.y+e.step*i),r=new P(o,t[0],t[1]);r.pos=new R(i,n),r.render(),e.clList[i].push(r)}))}))}},{key:"drawLine",value:function(t,e){var i,n,o,r,s=t.outerRadius;switch(i=t.centerPoint.x,n=t.centerPoint.y,o=e.centerPoint.x,r=e.centerPoint.y,t.director){case P.DIRECTOR.up:n-=s,r+=s;break;case P.DIRECTOR.down:n+=s,r-=s;break;case P.DIRECTOR.left:i-=s,o+=s;break;case P.DIRECTOR.right:i+=s,o-=s}l.beginPath(),l.strokeStyle="rgba(0,0,255,0.3)",l.lineWidth=6,l.moveTo(i,n),l.lineTo(o,r),l.closePath(),l.stroke()}},{key:"loop",value:function(t){var e=t.pos,i=e.x,n=e.y,o=t.getNextDir(),r=this;switch(o){case P.DIRECTOR.up:i--;break;case P.DIRECTOR.right:n++;break;case P.DIRECTOR.down:i++;break;case P.DIRECTOR.left:n--}t.turn(),6==e.y&&7==n?setTimeout((function(){alert("恭喜，成功解锁本关！")}),1e3):i<0||n<0||i>6||n>6?setTimeout((function(){alert("很遗憾，解锁失败！")}),1e3):setTimeout((function(){r.drawLine(t,r.clList[i][n]),r.loop(r.clList[i][n])}),1e3)}},{key:"handlerPoint",value:function(t){var e=this;this.clList.forEach((function(i,n){i[0].centerPoint.distanceTo(t)<i[0].maxRadius&&(e.running=!0,e.loop(i[0]))}))}},{key:"listen",value:function(){var t=this,e=this.handlerPoint.bind(this);window.onresize=function(t){d=a.offsetLeft},a.addEventListener("click",(function(i){if(!t.running){var n=new R(i.x-d,i.y-f);e(n)}}))}}]),t}();window.onload=function(){(s=new y).start(),h.innerHTML="第【".concat(s.level+1,"】关")},document.getElementById("reset").addEventListener("click",(function(){s.restart()})),document.getElementById("next").addEventListener("click",(function(){s.nextLevel(),h.innerHTML="第【".concat(s.level+1,"】关")}))}]);