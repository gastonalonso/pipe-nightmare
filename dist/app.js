!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=10)}([function(t,e,n){"use strict";t.exports={GRID_WIDTH:1e3,GRID_HEIGHT:600,CELL_SIZE:50,FILL_SPEED:200,FPS:5,WATER_COLOR:"rgb(51, 204, 255)",START_PIPE:{col:19,row:0}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=function(){function t(e,n){r(this,t),this.col=e,this.row=n,this.waterLevel=0,this.calculateOffsets(),this.setInitialRotation()}return o(t,[{key:"calculateOffsets",value:function(){this.xOffset=this.col*i.CELL_SIZE,this.yOffset=this.row*i.CELL_SIZE}},{key:"setInitialRotation",value:function(){this.rotation=Math.floor(4*Math.random())}},{key:"fill",value:function(t,e){var n=this;this.entry=t;var r=setInterval(function(){if(n.waterLevel>=100){var o=n.getExit(t);return clearInterval(r),e(o)}n.waterLevel+=10},i.FILL_SPEED)}},{key:"rotate",value:function(){0===this.waterLevel&&(this.rotation=++this.rotation%4)}}]),t}();t.exports=a},function(t,e,n){"use strict";var r=n(5);window.onload=function(){new r}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){r(this,t),this.canvas=document.getElementById("game-canvas"),this.pipes=n,this.canvas.addEventListener("click",this.getClickHandler(),!1)}return o(t,[{key:"getClickHandler",value:function(){var t=this;return function(e){var n=Math.floor((e.pageX-t.canvas.offsetLeft)/50),r=Math.floor((e.pageY-t.canvas.offsetTop)/50);t.pipes.at(n,r).rotate()}}}]),t}();t.exports=i},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),c=n(0),f={0:"left-top",1:"right-top",2:"right-bottom",3:"left-bottom"},u={0:["left","top"],1:["right","top"],2:["right","bottom"],3:["left","bottom"]},l=function(t){function e(t,n){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return i(e,t),a(e,[{key:"hasEntry",value:function(t){return u[this.rotation].indexOf(t)>-1}},{key:"getExit",value:function(t){var e=void 0;return u[this.rotation].forEach(function(n){n!==t&&(e=n)}),e}},{key:"render",value:function(t){var e=new Path2D;switch(e.arc(5,5,8,0,Math.PI/2,!1),e.moveTo(35,5),e.arc(5,5,30,0,Math.PI/2,!1),t.save(),f[this.rotation]){case"left-top":t.translate(this.xOffset,this.yOffset);break;case"right-top":t.translate(this.xOffset+c.CELL_SIZE,this.yOffset),t.rotate(Math.PI/2);break;case"right-bottom":t.translate(this.xOffset+c.CELL_SIZE,this.yOffset+c.CELL_SIZE),t.rotate(Math.PI);break;case"left-bottom":t.translate(this.xOffset,this.yOffset+c.CELL_SIZE),t.rotate(1.5*Math.PI)}t.stroke(e),t.strokeRect(0,10,5,30),t.strokeRect(10,0,30,5),this.renderWaterLevel(t),t.restore()}},{key:"renderWaterLevel",value:function(t){this.waterLevel>0&&(t.fillStyle=c.WATER_COLOR,t.beginPath(),"left-top"===f[this.rotation]&&"top"===this.entry||"right-top"===f[this.rotation]&&"right"===this.entry||"right-bottom"===f[this.rotation]&&"bottom"===this.entry||"left-bottom"===f[this.rotation]&&"left"===this.entry?(t.arc(6,6,7,0,Math.PI/2*this.waterLevel/100,!1),t.arc(6,6,28,Math.PI/2*this.waterLevel/100,0,!0)):(t.arc(6,6,7,Math.PI/2,Math.PI/2-Math.PI/2*this.waterLevel/100,!0),t.arc(6,6,28,Math.PI/2-Math.PI/2*this.waterLevel/100,Math.PI/2,!1)),t.fill())}}]),e}(s);t.exports=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=n(6),s=n(7),c=n(8),f=n(3),u={top:"bottom",bottom:"top",left:"right",right:"left"},l=function(){function t(){r(this,t),this.canvas=document.getElementById("game-canvas"),this.grid=new a,this.pipes=new s,this.renderManager=new c(this.canvas,this.grid,this.pipes),this.clickManager=new f(this.canvas,this.pipes),this.startWaterFlow()}return o(t,[{key:"startWaterFlow",value:function(){var t=this.coords=i.START_PIPE,e=t.col,n=t.row,r=this.pipes.at(e,n);r.rotation=0,this.fillPipe("top",r)}},{key:"fillPipe",value:function(t,e){var n=this;e.fill(t,function(t){var e=n.getNextPipe(t),r=u[t];if(e&&e.hasEntry(r))return n.fillPipe(r,e);console.log("Game Over")})}},{key:"getNextPipe",value:function(t){var e=this.coords=this.getNextCoords(t),n=e.col,r=e.row;return this.pipes.at(n,r)}},{key:"getNextCoords",value:function(t){var e=this.coords,n=e.col,r=e.row;switch(t){case"left":--n;break;case"right":++n;break;case"top":--r;break;case"bottom":++r}return{col:n,row:r}}}]),t}();t.exports=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=function(){function t(){r(this,t)}return o(t,[{key:"render",value:function(t){var e=new Path2D,n=i.GRID_WIDTH/i.CELL_SIZE,r=i.GRID_HEIGHT/i.CELL_SIZE;this.drawGridLines(n,i.GRID_HEIGHT,function(t,n,r){e.moveTo(r,t),e.lineTo(r,n)}),this.drawGridLines(r,i.GRID_WIDTH,function(t,n,r){e.moveTo(t,r),e.lineTo(n,r)}),t.lineWidth=.7,t.stroke(e),t.lineWidth=1}},{key:"drawGridLines",value:function(t,e,n){var r=void 0,o=void 0,a=void 0,s=void 0;for(r=0;r<t+1;r++)s=r*i.CELL_SIZE,o=0,a=e,n(o,a,s)}}]),t}();t.exports=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=n(9),s=n(4),c=function(){function t(){r(this,t),this.populateCells()}return o(t,[{key:"populateCells",value:function(){var t=i.GRID_HEIGHT/i.CELL_SIZE,e=i.GRID_WIDTH/i.CELL_SIZE;this.cells=[];for(var n=0;n<e;n++){this.cells[n]=[];for(var r=0;r<t;r++)this.cells[n][r]=this.getRandomPipe(n,r)}}},{key:"getRandomPipe",value:function(t,e){return Math.random()<=.5?new s(t,e):new a(t,e)}},{key:"at",value:function(t,e){if(void 0!==this.cells[t]&&void 0!==this.cells[t][e])return this.cells[t][e]}},{key:"render",value:function(t){this.cells.forEach(function(e){e.forEach(function(e){e.render(t)})})}}]),t}();t.exports=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=1e3/i.FPS,s=void 0,c=function(){function t(e,n,o){r(this,t),this.canvas=e,this.grid=n,this.pipes=o,s=Date.now(),this.context=this.canvas.getContext("2d"),this.render()}return o(t,[{key:"render",value:function(){window.requestAnimationFrame(this.render.bind(this));var t=Date.now(),e=t-s;e>a&&(s=t-e%a,this.context.clearRect(0,0,i.GRID_WIDTH,i.GRID_HEIGHT),this.grid.render(this.context),this.pipes.render(this.context))}}]),t}();t.exports=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),c=n(0),f={0:"vertical",1:"horizontal",2:"vertical",3:"horizontal"},u={0:["top","bottom"],1:["left","right"],2:["top","bottom"],3:["left","right"]},l=function(t){function e(t,n){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return i(e,t),a(e,[{key:"hasEntry",value:function(t){return u[this.rotation].indexOf(t)>-1}},{key:"getExit",value:function(t){var e=void 0;return u[this.rotation].forEach(function(n){n!==t&&(e=n)}),e}},{key:"render",value:function(t){var e=new Path2D;switch(e.moveTo(5,15),e.lineTo(45,15),e.moveTo(5,35),e.lineTo(45,35),t.save(),f[this.rotation]){case"horizontal":t.translate(this.xOffset,this.yOffset);break;case"vertical":t.translate(this.xOffset+c.CELL_SIZE,this.yOffset),t.rotate(Math.PI/2)}t.stroke(e),t.strokeRect(0,10,5,30),t.strokeRect(45,10,5,30),this.renderWaterLevel(t),t.restore()}},{key:"renderWaterLevel",value:function(t){this.waterLevel>0&&(t.fillStyle=c.WATER_COLOR,"horizontal"===f[this.rotation]&&"left"===this.entry||"vertical"===f[this.rotation]&&"top"===this.entry?t.fillRect(6,16,38*this.waterLevel/100,18):t.fillRect(44-38*this.waterLevel/100,16,38*this.waterLevel/100,18))}}]),e}(s);t.exports=l},function(t,e,n){t.exports=n(2)}]);