(function(t){function n(n){for(var r,u,i=n[0],l=n[1],s=n[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={app:0},a=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/build/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var c=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},"04b0":function(t,n,e){"use strict";var r=e("4d1c"),o=e.n(r);o.a},"4d1c":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("a",{attrs:{href:"/"}},[t._v(" Home ")]),t._v(" | "),e("router-link",{attrs:{to:"/"}},[t._v("Build")])],1),e("router-view")],1)},a=[],u=(e("034f"),e("2877")),i={},l=Object(u["a"])(i,o,a,!1,null,null,null),s=l.exports,c=e("8c4f"),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"build"},[e("FormulaCalculateBox"),e("p",{staticStyle:{"margin-top":"20px"}},[t._v(" 计算结果仅作参考 ")])],1)},p=[],d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Card",{staticClass:"formula-calculate-box"},[e("Row",t._l(t.formulas,(function(n,r){return e("i-col",{key:t.inputBoxID(r),attrs:{span:t.colSpan}},[e("input-number",{attrs:{min:1,max:999,step:1},model:{value:n.A,callback:function(e){t.$set(n,"A",e)},expression:"formula.A"}}),e("input-number",{attrs:{min:1,max:999,step:1},model:{value:n.B,callback:function(e){t.$set(n,"B",e)},expression:"formula.B"}}),e("input-number",{attrs:{min:1,max:999,step:1},model:{value:n.C,callback:function(e){t.$set(n,"C",e)},expression:"formula.C"}}),e("input-number",{attrs:{min:1,max:999,step:1},model:{value:n.D,callback:function(e){t.$set(n,"D",e)},expression:"formula.D"}}),e("div",[t.formulas.length>1?e("Button",{staticStyle:{"margin-top":"4px"},attrs:{type:"error",shape:"circle",icon:"md-remove"},on:{click:function(n){return t.removeGroup(r)}}},[t._v(" Remove ")]):t._e()],1)],1)})),1),t.formulas.length<4?e("div",t._l([0,1,2,3],(function(n){return e("Button",{key:t.addButtonID(n),staticStyle:{"margin-top":"4px"},attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:function(e){return t.addToNext(n)}}},[t._v(" "+t._s(t.addButtonText(n))+" ")])})),1):t._e(),e("Divider"),e("Row",t._l(t.formulas,(function(n,r){return e("i-col",{key:t.showBoxID(r),attrs:{span:t.colSpan}},[e("ResultShowBox",{attrs:{ships:t.specialShips(n)}})],1)})),1),e("Divider"),e("ResultShowBox",{attrs:{ships:t.commonShips()}})],1)},m=[],h=(e("a4d3"),e("e01a"),e("d28b"),e("a623"),e("4de4"),e("7db0"),e("d81d"),e("13d5"),e("4e82"),e("a434"),e("d3b7"),e("6062"),e("3ca3"),e("ddb0"),e("284c")),v=e("76ea"),b=e("b3e6"),y=e("e3f5"),x=e("4cf6"),S=e("8729"),B=e("8b1e"),w=e("bc3a"),g=e.n(w),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"result-show-box",staticStyle:{"text-align":"center"}},[t.ships.length?e("div",t._l(t.sortedShips,(function(n){return e("Button",{key:n.shipCid,style:t.style(n.star),attrs:{shape:"circle"},domProps:{textContent:t._s(n.name)}})})),1):e("div",[e("Button",{attrs:{shape:"circle",type:"dashed"}},[t._v("None")])],1)])},_=[],D={name:"ResultShowBox",props:{ships:Array},components:{Button:y["a"]},computed:{sortedShips:function(){var t=this;return t.ships.sort((function(t,n){return t.star-n.star}))}},methods:{style:function(t){return{"background-color":this.getColor(t),"border-color":this.getColor(t),color:"#FFFFFF"}},getColor:function(t){return{1:"#74787a",2:"#19be6b",3:"#619ac3",4:"#c06f98",5:"#f9bd10",6:"#ee2746"}[t]}}},O=D,A=(e("04b0"),Object(u["a"])(O,C,_,!1,null,"4b03d2ce",null)),j=A.exports;e("45fc");function k(t,n,e,r,o){var a=[],u=!0,i=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(u=(s=c.next()).done);u=!0){var f=s.value,p=f.min.ABCD,d=t>=p[0]&&n>=p[1]&&e>=p[2]&&r>=p[3];if(d){var m=f.max,h=!0;if(null!=m){var v=[t,n,e,r],b=[];for(var y in m.ABCD)null!=m.ABCD[y]&&b.push(v[y]>=m.ABCD[y]);"or"===m.type?h=!b.some((function(t){return t})):"and"===m.type&&(h=!b.every((function(t){return t})))}if(h){var x={type:f.shipType,name:f.shipName,star:f.star,cid:f.shipCid};a.push(x)}}}}catch(S){i=!0,l=S}finally{try{u||null==c.return||c.return()}finally{if(i)throw l}}return a}var F={name:"FormulaCalculateBox",components:{Card:B["a"],InputNumber:S["a"],Divider:x["a"],ResultShowBox:j,Button:y["a"],Row:b["a"],"i-col":v["a"]},data:function(){return{formulas:[{A:120,B:120,C:120,D:120}],rules:[],options:null}},mounted:function(){var t=this;g.a.get("./buildRules.json").then((function(n){t.rules=n.data,t.options=[new Set,new Set,new Set,new Set];var e=!0,r=!1,o=void 0;try{for(var a,u=t.rules[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var i=a.value;for(var l in[0,1,2,3])t.options[l].add(i.min.ABCD[l]),null!=i.max&&null!=i.max.ABCD[l]&&t.options[l].add(i.max.ABCD[l])}}catch(c){r=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(r)throw o}}for(var s in t.options)t.options[s]=Object(h["a"])(t.options[s]).sort((function(t,n){return t-n}))}))},computed:{colSpan:function(){return{1:24,2:12,3:8,4:6}[this.formulas.length]}},methods:{inputBoxID:function(t){return"index"+t},showBoxID:function(t){return"showbox"+t},addButtonID:function(t){return"add"+t},addGroup:function(){var t=this,n=t.formulas[t.formulas.length-1],e={A:n.A,B:n.B,C:n.C,D:n.D};t.formulas.push(e)},_updateFormula:function(t,n){var e=this,r=e.formulas[0],o={A:r.A,B:r.B,C:r.C,D:r.D};return o["ABCD"[t]]=n,o},addToNext:function(t){var n=this,e=n.getUpgradeOptions(),r=n._updateFormula(t,e[t]);n.formulas.push(r)},removeGroup:function(t){var n=this;n.formulas.splice(t,1)},getUpgradeOptions:function(){var t=this;if(null===t.options)return[120,120,120,120];var n=t.formulas[0],e=[0,1,2,3].map((function(e){return t.options[e].find((function(r){if(r<=n["ABCD"[e]])return!1;var o=new Set(t.calculateShips(n).map((function(t){return t.cid}))),a=new Set(t.calculateShips(t._updateFormula(e,r)).map((function(t){return t.cid}))),u=o.size===a.size&&Object(h["a"])(o).every((function(t){return a.has(t)}));return!u}))}));return e},addButtonText:function(t){var n=this.getUpgradeOptions();return["油","弹","钢","铝"][t]+"→"+n[t]},calculateShips:function(t){return k(t.A,t.B,t.C,t.D,this.rules)},commonShips:function(){var t=this,n={},e=[],r=!0,o=!1,a=void 0;try{for(var u,i=t.formulas[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var l=u.value,s=t.calculateShips(l),c=!0,f=!1,p=void 0;try{for(var d,m=s[Symbol.iterator]();!(c=(d=m.next()).done);c=!0){var v=d.value;n[v.cid]=v}}catch(y){f=!0,p=y}finally{try{c||null==m.return||m.return()}finally{if(f)throw p}}e.push(new Set(s.map((function(t){return t.cid}))))}}catch(y){o=!0,a=y}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}var b=Object(h["a"])(e.reduce((function(t,n){return new Set(Object(h["a"])(t).filter((function(t){return n.has(t)})))})));return b.map((function(t){return n[t]}))},specialShips:function(t){var n=this,e=n.calculateShips(t),r=new Set(n.commonShips().map((function(t){return t.cid}))),o=e.filter((function(t){return!r.has(t.cid)}));return o}}},R=F,$=(e("6bdd"),Object(u["a"])(R,d,m,!1,null,"2ca9a8b1",null)),P=$.exports,T={name:"build",components:{FormulaCalculateBox:P},data:function(){return{}}},I=T,N=Object(u["a"])(I,f,p,!1,null,null,null),E=N.exports;r["a"].use(c["a"]);var M=[{path:"/",name:"index",component:E}],G=new c["a"]({routes:M}),U=G;e("f8ce");r["a"].config.productionTip=!1,new r["a"]({router:U,render:function(t){return t(s)}}).$mount("#app")},"6bdd":function(t,n,e){"use strict";var r=e("a899"),o=e.n(r);o.a},"85ec":function(t,n,e){},a899:function(t,n,e){}});