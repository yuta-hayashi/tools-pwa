(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d486"],{d147:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"text-center"},[i("h2",[t._v("StopWatch")]),i("h1",[t._v(t._s(t.countTime.toFixed(2)))]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isStart,expression:"!isStart"}]},[i("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.start}},[t._v("Start")]),i("v-btn",{staticClass:"ma-2",on:{click:t.clear}},[t._v("Clear")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isStart,expression:"isStart"}]},[i("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.stop}},[t._v("Stop")]),i("v-btn",{staticClass:"ma-2",on:{click:t.lap}},[t._v("Lap")])],1),t._l(t.reverseLapTimes,(function(e){return i("p",{key:e.id},[t._v(t._s(e.id+" "+e.lap.toFixed(2)+" + "+e.diff.toLocaleString()))])}))],2)},s=[],n=i("9ab4"),r=i("2b0e"),o=i("2fe1"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.countTime=0,e.intervalId=0,e.isStart=!1,e.lapTimes=[],e}return Object(n["b"])(e,t),e.prototype.start=function(){var t=this;this.isStart=!0,this.intervalId=setInterval((function(){return t.countTime+=.01}),10)},e.prototype.stop=function(){this.isStart=!1,clearInterval(this.intervalId)},e.prototype.clear=function(){this.countTime=0,this.lapTimes=[]},e.prototype.lap=function(){var t=0;t=0==this.lapTimes.length?this.countTime:this.countTime-this.lapTimes[this.lapTimes.length-1].lap,this.lapTimes.push({id:this.lapTimes.length+1,lap:this.countTime,diff:t})},Object.defineProperty(e.prototype,"reverseLapTimes",{get:function(){return this.lapTimes.slice().reverse()},enumerable:!1,configurable:!0}),e=Object(n["a"])([o["a"]],e),e}(r["a"]),c=l,p=c,u=i("2877"),v=i("6544"),h=i.n(v),m=i("8336"),d=i("a523"),f=Object(u["a"])(p,a,s,!1,null,null,null);e["default"]=f.exports;h()(f,{VBtn:m["a"],VContainer:d["a"]})}}]);
//# sourceMappingURL=chunk-2d21d486.e5fc8fac.js.map