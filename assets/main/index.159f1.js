window.__require=function t(o,e,n){function i(r,s){if(!e[r]){if(!o[r]){var a=r.split("/");if(a=a[a.length-1],!o[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+r+"'")}r=a}var h=e[r]={exports:{}};o[r][0].call(h.exports,function(t){return i(o[r][1][t]||t)},h,h.exports,t,o,e,n)}return e[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({bgmove:[function(t,o,e){"use strict";cc._RF.push(o,"54bbbjGPmpBqrfeMuz/AnpL","bgmove");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0}),e.NewClass2=void 0;var r=cc._decorator,s=r.ccclass,a=(r.property,function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.bgpics=[],o.bg01=null,o.bg02=null,o.numbgs=8,o.bg01insight=!1,o.curbg=0,o.bgduration=4.5,o}return i(o,t),o.prototype.onLoad=function(){this.bg01=this.node.getChildByName("bg01"),this.bg02=this.node.getChildByName("bg02"),this.bg01.y=0,this.bg02.y=0},o.prototype.movestart=function(){var t=this;cc.resources.loadDir("source/background/"+Math.floor(Math.random()*this.numbgs).toString(),cc.SpriteFrame,function(o,e){t.bgpics=e.sort(function(t,o){return+t-+o}),t.bg01insight?t.bg01.getComponent(cc.Sprite).spriteFrame=t.bgpics[0]:t.bg02.getComponent(cc.Sprite).spriteFrame=t.bgpics[0],t.curbg=1,t.bgrun(),t.schedule(t.bgrun,t.bgduration,cc.macro.REPEAT_FOREVER)})},o.prototype.movestop=function(){this.unschedule(this.bgrun),this.bg01.getComponent(cc.Animation).stop(),this.bg02.getComponent(cc.Animation).stop()},o.prototype.bgrun=function(){this.bg01insight?this.bg02.getComponent(cc.Sprite).spriteFrame=this.bgpics[this.curbg]:this.bg01.getComponent(cc.Sprite).spriteFrame=this.bgpics[this.curbg],this.bg01insight?(this.bg01.getComponent(cc.Animation).play("bgmoveout").duration=this.bgduration,this.bg02.getComponent(cc.Animation).play("bgmovein").duration=this.bgduration):(this.bg01.getComponent(cc.Animation).play("bgmovein").duration=this.bgduration,this.bg02.getComponent(cc.Animation).play("bgmoveout").duration=this.bgduration),this.bg01insight=!this.bg01insight,this.curbg++,this.curbg==this.bgpics.length&&(this.curbg=0)},c([s],o)}(cc.Component));e.NewClass2=a,cc._RF.pop()},{}],coinchange:[function(t,o,e){"use strict";cc._RF.push(o,"6cbb5Md3g9AvYvQ0wUZMEdh","coinchange");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=(r.property,function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.numbgs=1,o.curpic=0,o.obspics=[],o}return i(o,t),o.prototype.start=function(){var t=this;cc.resources.loadDir("source/coin"+Math.floor(Math.random()*this.numbgs).toString(),cc.SpriteFrame,function(o,e){t.obspics=e,t.changeframe(),t.schedule(t.changeframe,1/t.obspics.length,cc.macro.REPEAT_FOREVER)})},o.prototype.changeframe=function(){this.curpic++,this.curpic>=this.obspics.length&&(this.curpic=0),this.node.getComponent(cc.Sprite).spriteFrame=this.obspics[this.curpic]},c([s],o)}(cc.Component));e.default=a,cc._RF.pop()},{}],coindet:[function(t,o,e){"use strict";cc._RF.push(o,"d3a7dRuM7lNEaJu8BdNM4NL","coindet");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=(r.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return i(o,t),o.prototype.onBeginContact=function(){cc.find("Canvas").getComponent("main").onBeginContactCoin(),this.node.active=!1},c([s],o)}(cc.Component));e.default=a,cc._RF.pop()},{}],heromove:[function(t,o,e){"use strict";cc._RF.push(o,"e9a18JupA5O9IAxE3isB91m","heromove");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=r.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.basegravity=-150,o.jumpspeed=200,o.rightcondition=!1,o.leftcondition=!1,o.stop=!1,o.jumpaudio=null,o.heropics=[],o}return i(o,t),o.prototype.movestart=function(){var t=this;cc.resources.loadDir("source/hero",cc.SpriteFrame,function(o,e){t.heropics=e}),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyup,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.keydown,this),this.node.x=-430,this.node.y=0,this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,0),cc.director.getPhysicsManager().gravity=cc.v2(0,this.basegravity)},o.prototype.movestop=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.keyup,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.keydown,this),this.stop=!0},o.prototype.keyup=function(t){t.keyCode==cc.macro.KEY.space?this.herojump():t.keyCode==cc.macro.KEY.right?(this.rightcondition&&(this.stop=!0),this.rightcondition=!1):t.keyCode==cc.macro.KEY.left&&(this.leftcondition&&(this.stop=!0),this.leftcondition=!1)},o.prototype.keydown=function(t){t.keyCode==cc.macro.KEY.right?(this.stop=!1,this.rightcondition=!0,this.leftcondition&&(this.leftcondition=!1),this.herorightstart()):t.keyCode==cc.macro.KEY.left&&(this.stop=!1,this.leftcondition=!0,this.rightcondition&&(this.rightcondition=!1),this.heroleftstart())},o.prototype.herojump=function(){cc.audioEngine.playEffect(this.jumpaudio,!1),this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(this.node.getComponent(cc.RigidBody).linearVelocity.x,this.jumpspeed)},o.prototype.herorightstart=function(){cc.director.getPhysicsManager().gravity=cc.v2(100,this.basegravity)},o.prototype.heroleftstart=function(){cc.director.getPhysicsManager().gravity=cc.v2(-100,this.basegravity)},o.prototype.update=function(){this.stop?(this.node.getComponent(cc.RigidBody).linearVelocity.x>0?cc.director.getPhysicsManager().gravity=cc.v2(-50,this.basegravity):cc.director.getPhysicsManager().gravity=cc.v2(50,this.basegravity),Math.abs(this.node.getComponent(cc.RigidBody).linearVelocity.x)<10&&(this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,this.node.getComponent(cc.RigidBody).linearVelocity.y))):this.node.getComponent(cc.RigidBody).linearVelocity.x>150?(cc.director.getPhysicsManager().gravity=cc.v2(cc.director.getPhysicsManager().gravity.x,this.basegravity),this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(150,this.node.getComponent(cc.RigidBody).linearVelocity.y)):this.node.getComponent(cc.RigidBody).linearVelocity.x<-150&&(cc.director.getPhysicsManager().gravity=cc.v2(cc.director.getPhysicsManager().gravity.x,this.basegravity),this.node.getComponent(cc.RigidBody).linearVelocity=cc.v2(-150,this.node.getComponent(cc.RigidBody).linearVelocity.y)),this.heropics.length>0&&(this.node.getComponent(cc.RigidBody).linearVelocity.y<0?this.node.getComponent(cc.Sprite).spriteFrame=this.heropics[0]:this.node.getComponent(cc.Sprite).spriteFrame=this.heropics[1])},c([a(cc.AudioClip)],o.prototype,"jumpaudio",void 0),c([s],o)}(cc.Component);e.default=p,cc._RF.pop()},{}],main:[function(t,o,e){"use strict";cc._RF.push(o,"5fa56Xd3glIMowjVw6Z65Vs","main");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=r.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.bgnode=null,o.heronode=null,o.obsnode=null,o.obsparent=null,o.coinnode=null,o.coinparent=null,o.floornode=null,o.tipstartnode=null,o.dieaudio=null,o.coinaudio=null,o.timepass=null,o.coinlabel=null,o.cointoplabel=null,o.obsPool=null,o.coinPool=null,o.gamestart=!1,o.gamestartdelay=!1,o.timenow=null,o.coincount=0,o.cointop=0,o}return i(o,t),o.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,this.obsPool=new cc.NodePool;for(var t=0;t<20;t++){var o=cc.instantiate(this.obsnode);this.obsPool.put(o)}for(this.coinPool=new cc.NodePool,t=0;t<2;t++){var e=cc.instantiate(this.coinnode);this.coinPool.put(e)}},o.prototype.start=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.keyup,this)},o.prototype.maingamestart=function(){this.timenow=new Date,this.coincount=0,this.coinlabel.string="x "+this.coincount.toString(),this.tipstartnode.active=!1,this.bgnode.getComponent("bgmove").movestart(),this.heronode.getComponent("heromove").movestart(),this.schedule(this.obscreate,.5,cc.macro.REPEAT_FOREVER),this.schedule(this.coincreate,.75,cc.macro.REPEAT_FOREVER)},o.prototype.obscreate=function(){var t=this;if(Math.random()>.55&&this.obsPool.size()>0){var o=Math.random()+2.5,e=null;(e=this.obsPool.get()).parent=this.obsparent,e.x=1100,e.y=Math.floor(600*Math.random())-320,e.getComponent(cc.Animation).play("obsmove").duration=o,this.schedule(function(){t.obsPool.put(e)},o,0)}},o.prototype.coincreate=function(){var t=this;if(Math.random()>.5&&this.coinPool.size()>0){var o=Math.random()+2.5,e=null;(e=this.coinPool.get()).parent=this.coinparent,e.x=1100,e.y=Math.floor(600*Math.random())-320,e.active=!0,e.getComponent(cc.Animation).play("obsmove").duration=o,this.schedule(function(){t.coinPool.put(e)},o,0)}},o.prototype.maingameend=function(){var t=this;cc.audioEngine.playEffect(this.dieaudio,!1),this.coincount>this.cointop&&this.coincount>0&&(this.cointop=this.coincount,this.cointoplabel.string="x "+this.cointop.toString()),this.bgnode.getComponent("bgmove").movestop(),this.heronode.getComponent("heromove").movestop(),this.unschedule(this.obscreate),this.unschedule(this.coincreate),this.tipstartnode.active=!0,this.schedule(function(){t.gamestartdelay=!1},4,0)},o.prototype.eatcoin=function(){cc.audioEngine.playEffect(this.coinaudio,!1),this.coincount+=1,this.coinlabel.string="x "+this.coincount.toString()},o.prototype.update=function(){if(this.gamestart){var t=new Date;this.timepass.string=((t.getTime()-this.timenow.getTime())/1e3).toFixed(2).toString()}},o.prototype.onBeginContact=function(){this.gamestart&&(this.gamestart=!1,console.log("MAIN on collision enter"),this.maingameend())},o.prototype.onBeginContactCoin=function(){this.gamestart&&(console.log("MAIN on coin collision enter"),this.eatcoin())},o.prototype.keyup=function(t){t.keyCode==cc.macro.KEY.space&&(this.gamestartdelay||(this.gamestart=!0,this.gamestartdelay=!0,this.maingamestart()))},c([a(cc.Node)],o.prototype,"bgnode",void 0),c([a(cc.Node)],o.prototype,"heronode",void 0),c([a(cc.Node)],o.prototype,"obsnode",void 0),c([a(cc.Node)],o.prototype,"obsparent",void 0),c([a(cc.Node)],o.prototype,"coinnode",void 0),c([a(cc.Node)],o.prototype,"coinparent",void 0),c([a(cc.Node)],o.prototype,"floornode",void 0),c([a(cc.Node)],o.prototype,"tipstartnode",void 0),c([a(cc.AudioClip)],o.prototype,"dieaudio",void 0),c([a(cc.AudioClip)],o.prototype,"coinaudio",void 0),c([a(cc.Label)],o.prototype,"timepass",void 0),c([a(cc.Label)],o.prototype,"coinlabel",void 0),c([a(cc.Label)],o.prototype,"cointoplabel",void 0),c([s],o)}(cc.Component);e.default=p,cc._RF.pop()},{}],obschange:[function(t,o,e){"use strict";cc._RF.push(o,"1accewiLmtItbYh/qWNAg+i","obschange");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=(r.property,function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.numbgs=5,o.curpic=0,o.obspics=[],o}return i(o,t),o.prototype.start=function(){var t=this;cc.resources.loadDir("source/obatacle"+Math.floor(Math.random()*this.numbgs).toString(),cc.SpriteFrame,function(o,e){t.obspics=e,t.changeframe(),t.schedule(t.changeframe,1/t.obspics.length,cc.macro.REPEAT_FOREVER)})},o.prototype.changeframe=function(){this.curpic++,this.curpic>=this.obspics.length&&(this.curpic=0),this.node.getComponent(cc.Sprite).spriteFrame=this.obspics[this.curpic]},c([s],o)}(cc.Component));e.default=a,cc._RF.pop()},{}],obsdet:[function(t,o,e){"use strict";cc._RF.push(o,"c5c89MBy+NE4b6GT730/AE8","obsdet");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),c=this&&this.__decorate||function(t,o,e,n){var i,c=arguments.length,r=c<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(c<3?i(r):c>3?i(o,e,r):i(o,e))||r);return c>3&&r&&Object.defineProperty(o,e,r),r};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,a=(r.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return i(o,t),o.prototype.onBeginContact=function(){cc.find("Canvas").getComponent("main").onBeginContact()},c([s],o)}(cc.Component));e.default=a,cc._RF.pop()},{}]},{},["bgmove","coinchange","coindet","heromove","main","obschange","obsdet"]);