(function(t){function e(e){for(var o,a,i=e[0],r=e[1],s=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(o=!1)}o&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},u=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var f=r;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"022f":function(t,e,n){"use strict";n("45a2")},"0ef5":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return i}));var o="SET_TODO",c="SET_TODO_LIST",u="REMOVE_TOD",a="SET_TODO_STATUS",i="SET_DOING_STATUS"},"1e71":function(t,e,n){"use strict";var o;n.d(e,"a",(function(){return o})),function(t){t[t["WILLDO"]=0]="WILLDO",t[t["DOING"]=1]="DOING",t[t["FINISHED"]=2]="FINISHED"}(o||(o={}))},"3dfd":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c={class:"info"};function u(t,e,n,u,a,i){var r=Object(o["w"])("todoinput"),s=Object(o["w"])("todolist");return Object(o["p"])(),Object(o["e"])("div",c,[Object(o["f"])(r),Object(o["f"])(s,{todoList:u.todoList},null,8,["todoList"])])}var a=n("baf4"),i=Object(o["F"])("data-v-d20eab3e"),r=i((function(t,e,n,c,u,a){var r=Object(o["w"])("item");return Object(o["p"])(),Object(o["e"])("div",{class:"box",style:{height:t.high+"px"}},[Object(o["f"])(o["b"],{name:"list-complete",tag:"div"},{default:i((function(){return[(Object(o["p"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(t.todoList,(function(e){return Object(o["p"])(),Object(o["e"])(r,{key:e.id,item:e,onRemoveTodo:t.removeTodo,onSetStatus:t.setStatus,onSetDoing:t.setDoing,class:"list-complete-item"},null,8,["item","onRemoveTodo","onSetStatus","onSetDoing"])})),128))]})),_:1}),Object(o["f"])("div",{class:"fold",onClick:e[1]||(e[1]=function(){return t.change&&t.change.apply(t,arguments)})},Object(o["y"])(t.status?"收起":"展开"),1)],4)})),s=n("7996"),f=Object(o["F"])("data-v-45738bfd");Object(o["s"])("data-v-45738bfd");var l={class:"list"},d={key:1,class:"ctrl"};Object(o["q"])();var b=f((function(t,e){return Object(o["p"])(),Object(o["e"])("div",l,[Object(o["f"])("div",null,[Object(o["f"])("input",{type:"checkbox",checked:t.item.status===t.FINISHED,onClick:e[1]||(e[1]=function(e){return t.setStatus(t.item.id)})},null,8,["checked"])]),Object(o["f"])("div",null,[Object(o["f"])("span",{class:t.item.status===t.FINISHED?"line-through":""},Object(o["y"])(t.item.content),3)]),Object(o["f"])("div",null,[Object(o["f"])("button",{onClick:e[2]||(e[2]=function(e){return t.removeTodo(t.item.id)}),class:"del"},"删除"),t.item.status!==t.FINISHED?(Object(o["p"])(),Object(o["e"])("button",{key:0,onClick:e[3]||(e[3]=function(e){return t.setDoing(t.item.id)}),class:["ctrl",t.item.status===t.DOING?"doing":"willdo"]},Object(o["y"])(t.item.status===t.DOING?"正在做...":"马上做"),3)):(Object(o["p"])(),Object(o["e"])("button",d,"已完成"))])])})),O=n("5530"),j=n("1e71"),p=Object(o["g"])({props:{item:Object},setup:function(t,e){var n=e.emit,o={DOING:j["a"].DOING,FINISHED:j["a"].FINISHED,WILLDO:j["a"].WILLDO},c=function(t){n("removeTodo",t)},u=function(t){n("setStatus",t)},a=function(t){n("setDoing",t)};return Object(O["a"])(Object(O["a"])({},o),{},{removeTodo:c,setStatus:u,setDoing:a})}});n("8ebe");p.render=b,p.__scopeId="data-v-45738bfd";var v=p,m=Object(o["g"])({components:{item:v},props:{todoList:Array},setup:function(t){var e=Object(s["b"])(),n=e.removeTodo,c=e.setStatus,u=e.setDoing,a=Object(o["u"])(130),i=Object(o["u"])(!1),r=function(){var e=Object(o["z"])(t.todoList);if(!1===i.value)return a.value=50*e.length-20,void(i.value=!0);a.value=130,i.value=!1};return Object(o["D"])((function(){var e=Object(o["z"])(t.todoList);i.value=!0,a.value=50*e.length-20})),{removeTodo:n,setStatus:c,setDoing:u,change:r,high:a,status:i}}});n("75db");m.render=r,m.__scopeId="data-v-d20eab3e";var I=m,D=n("5502"),h={components:{todoinput:a["default"],todolist:I},setup:function(){var t=Object(s["b"])(),e=t.setTodoList,n=Object(D["b"])();return Object(o["n"])((function(){e()})),{todoList:Object(o["c"])((function(){return n.state.list}))}}};n("022f");h.render=u;e["default"]=h},"45a2":function(t,e,n){},6532:function(t,e,n){},"75db":function(t,e,n){"use strict";n("f115")},7996:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return r}));var o=n("2909"),c=(n("99af"),n("4de4"),n("0ef5")),u=n("1e71"),a=n("7a23"),i=n("5502");function r(){var t=Object(i["b"])(),e=s(),n=e.getLocalList,o=e.setLocalList,r=n();function f(e){var n={id:(new Date).getTime(),content:e,status:u["a"].WILLDO};t.dispatch(c["c"],n)}function l(){t.dispatch(c["d"],r)}function d(e){t.dispatch(c["a"],e)}function b(e){t.dispatch(c["e"],e)}function O(e){t.dispatch(c["b"],e)}return Object(a["C"])((function(){return t.state.list}),(function(t){return o(t)})),{setTodo:f,setTodoList:l,removeTodo:d,setStatus:b,setDoing:O}}function s(){function t(){return JSON.parse(localStorage.getItem("todoList")||"[]")}function e(e){localStorage.setItem("todoList",JSON.stringify(e)),t()}return{getLocalList:t,setLocalList:e}}function f(t){var e=[].concat(Object(o["a"])(Object(a["z"])(t).filter((function(t){return t.status===u["a"].DOING}))),Object(o["a"])(Object(a["z"])(t).filter((function(t){return t.status!==u["a"].FINISHED&&t.status!==u["a"].DOING}))),Object(o["a"])(Object(a["z"])(t).filter((function(t){return t.status===u["a"].FINISHED}))));return e}},"89bc":function(t,e,n){"use strict";n("f4a7")},"8ebe":function(t,e,n){"use strict";n("6532")},baf4:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c=Object(o["F"])("data-v-4ea73d16"),u=c((function(t,e,n,c,u,a){return Object(o["p"])(),Object(o["e"])("div",null,[Object(o["E"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.todovalue=e}),onKeyup:e[2]||(e[2]=function(){return t.setTodovalue&&t.setTodovalue.apply(t,arguments)}),placeholder:"请输入待办",maxlength:"25"},null,544),[[o["B"],t.todovalue]])])})),a=(n("498a"),n("7996")),i=Object(o["g"])({setup:function(){var t=Object(o["u"])(""),e=Object(a["b"])(),n=e.setTodo,c=function(e){13===e.keyCode&&t.value.trim().length&&(n(t.value),t.value="")};return{todovalue:t,setTodovalue:c}}});n("89bc");i.render=u,i.__scopeId="data-v-4ea73d16";e["default"]=i},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,c,u=n("7a23"),a=n("3dfd"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),r=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))}},{path:"/a",name:"test",component:function(){return Promise.resolve().then(n.bind(null,"baf4"))}}],s=Object(i["a"])({history:Object(i["b"])(""),routes:r}),f=s,l=n("5502"),d={list:[]},b=n("ade3"),O=n("2909"),j=(n("99af"),n("4de4"),n("d81d"),n("7996")),p=n("1e71"),v=n("0ef5"),m=(o={},Object(b["a"])(o,v["c"],(function(t,e){t.list=[e].concat(Object(O["a"])(t.list)),t.list=Object(j["a"])(t.list)})),Object(b["a"])(o,v["d"],(function(t,e){t.list=e})),Object(b["a"])(o,v["a"],(function(t,e){t.list=t.list.filter((function(t){return t.id!==e}))})),Object(b["a"])(o,v["e"],(function(t,e){t.list=t.list.map((function(t){if(t.id===e)switch(t.status){case p["a"].FINISHED:t.status=p["a"].WILLDO;break;case p["a"].WILLDO:case p["a"].DOING:t.status=p["a"].FINISHED;break;default:break}return t})),t.list=Object(j["a"])(t.list)})),Object(b["a"])(o,v["b"],(function(t,e){t.list=t.list.map((function(t){return t.id===e?t.status=t.status===p["a"].WILLDO?p["a"].DOING:p["a"].WILLDO:t.status===p["a"].DOING&&(t.status=p["a"].WILLDO),t})),t.list=Object(j["a"])(t.list)})),o),I=(c={},Object(b["a"])(c,v["c"],(function(t,e){var n=t.commit;n(v["c"],e)})),Object(b["a"])(c,v["d"],(function(t,e){var n=t.commit;n(v["d"],e)})),Object(b["a"])(c,v["a"],(function(t,e){var n=t.commit;n(v["a"],e)})),Object(b["a"])(c,v["e"],(function(t,e){var n=t.commit;n(v["e"],e)})),Object(b["a"])(c,v["b"],(function(t,e){var n=t.commit;n(v["b"],e)})),c),D=Object(l["a"])({state:d,mutations:m,actions:I});Object(u["d"])(a["default"]).use(D).use(f).mount("#app")},f115:function(t,e,n){},f4a7:function(t,e,n){}});