(function(e){function t(t){for(var r,c,i=t[0],u=t[1],o=t[2],f=0,b=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-user-search/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0545":function(e,t,n){"use strict";n("7c30")},"0aca":function(e,t,n){},"13ed":function(e,t,n){},"3c07":function(e,t,n){"use strict";n("7929")},5641:function(e,t,n){"use strict";n("94c5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={key:0,class:"app loading"},s={key:1,class:"app"},c=Object(r["e"])("h1",{class:"title"},"Pesquisa de Usuários",-1),i={class:"bottom"},u={class:"container"},o={class:"found"};function l(e,t,n,l,f,b){var d=Object(r["j"])("QueryBox"),p=Object(r["j"])("UserList"),g=Object(r["j"])("Stats");return 0===f.users.length?(Object(r["f"])(),Object(r["c"])("div",a," Loading Users... ")):(Object(r["f"])(),Object(r["c"])("div",s,[c,Object(r["e"])(d,{onQueryChange:b.filterUsers},null,8,["onQueryChange"]),Object(r["e"])("div",i,[Object(r["e"])("div",u,[Object(r["e"])("h2",o,Object(r["k"])(f.filteredUsers.length)+" Usuário(s) Encontrado(s) ",1),Object(r["e"])(p,{userList:f.filteredUsers},null,8,["userList"])]),Object(r["e"])(g,{userList:f.filteredUsers},null,8,["userList"])])]))}var f=n("2909"),b=(n("d3b7"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("99af"),{key:0});function d(e,t,n,a,s,c){var i=Object(r["j"])("Pagination");return 0!==n.userList.length?(Object(r["f"])(),Object(r["c"])("div",b,[Object(r["e"])(i,{onChangePage:c.changePage,page:s.page,listLength:parseInt(n.userList.length),maxItems:parseInt(20)},null,8,["onChangePage","page","listLength","maxItems"]),Object(r["e"])("ul",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.pagedUserList,(function(e){return Object(r["f"])(),Object(r["c"])("li",{key:"".concat(e.name.first).concat(e.name.last)},[Object(r["e"])("img",{src:e.picture.thumbnail,alt:"avatar"},null,8,["src"]),Object(r["e"])("p",null,Object(r["k"])(e.name.first)+" "+Object(r["k"])(e.name.last)+", "+Object(r["k"])(e.dob.age),1)])})),128))])])):Object(r["d"])("",!0)}n("fb6a");var p=Object(r["o"])("data-v-f30b18f6");Object(r["h"])("data-v-f30b18f6");var g={class:"page-btn-container"};Object(r["g"])();var h=p((function(e,t,n,a,s,c){var i=Object(r["j"])("Button");return Object(r["f"])(),Object(r["c"])("div",g,[Object(r["e"])(i,{class:n.page?"":"hidden",onClick:c.previous,type:"round",role:"prev"},null,8,["class","onClick"]),Object(r["m"])(Object(r["e"])("input",{onInput:t[1]||(t[1]=function(){return c.validatePage&&c.validatePage.apply(c,arguments)}),type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.currentPage=e})},null,544),[[r["l"],s.currentPage]]),Object(r["e"])(i,{class:n.page===c.maxPage?"hidden":"",onClick:c.next,type:"round",role:"next"},null,8,["class","onClick"])])}));n("a9e3");function j(e,t,n,a,s,c){return Object(r["f"])(),Object(r["c"])("button",null,[Object(r["e"])("i",{class:["fas","prev"===n.role?["fa-backward"]:["fa-forward"]]},null,2)])}var m={name:"Button",props:["type","role"]};n("5baa");m.render=j;var O=m,v={data:function(){return{currentPage:this.page}},components:{Button:O},name:"Pagination",props:{page:Number,maxItems:Number,listLength:Number},methods:{validatePage:function(e){var t,n=null!==(t=parseInt(e.target.value))&&void 0!==t?t:0;isNaN(n)&&(n=0),n<0?(this.currentPage=0,this.$emit("changePage",0)):n>this.maxPage?(this.currentPage=this.maxPage,this.$emit("changePage",this.maxPage)):(this.currentPage=n,this.$emit("changePage",n))},previous:function(){this.$emit("changePage",this.page-1)},next:function(){this.$emit("changePage",this.page+1)}},computed:{maxPage:function(){return parseInt(Math.ceil(this.listLength/this.maxItems)-1)}},emits:["changePage"]};n("0545");v.render=h,v.__scopeId="data-v-f30b18f6";var P=v,y={name:"UserList",components:{Pagination:P},props:{userList:[Object]},data:function(){return{page:0,maxItemsPerPage:20}},methods:{changePage:function(e){this.page=e}},computed:{pagedUserList:function(){return this.userList.slice(this.page*this.maxItemsPerPage,(this.page+1)*this.maxItemsPerPage)}}};n("eb8c");y.render=d;var x=y,L={class:"query-box"},k=Object(r["e"])("label",{for:"search-box"},"Busca:",-1);function U(e,t,n,a,s,c){return Object(r["f"])(),Object(r["c"])("div",L,[Object(r["e"])("form",null,[k,Object(r["e"])("input",{class:"search-box",type:"text",placeholder:"Digite aqui sua busca",onInput:t[1]||(t[1]=function(){return c.emitQuery&&c.emitQuery.apply(c,arguments)})},null,32),Object(r["e"])("button",{class:"submit-btn",type:"submit",onSubmit:t[2]||(t[2]=Object(r["n"])((function(){}),["prevent"]))}," Buscar ",32)])])}var w={name:"QueryBox",emits:["queryChange"],methods:{emitQuery:function(e){this.$emit("queryChange",e.target.value)}}};n("3c07");w.render=U;var I=w,C={class:"container stats"},S=Object(r["e"])("h2",null,"Estatísticas",-1),M={class:"stat-list"};function B(e,t,n,a,s,c){var i,u,o,l;return Object(r["f"])(),Object(r["c"])("div",C,[S,Object(r["e"])("ul",M,[Object(r["e"])("li",null,"Sexo Masculino:  "+Object(r["k"])(null!==(i=c.cMale)&&void 0!==i?i:0),1),Object(r["e"])("li",null,"Sexo feminino:  "+Object(r["k"])(null!==(u=c.cFemale)&&void 0!==u?u:0),1),Object(r["e"])("li",null,"Soma das idades:  "+Object(r["k"])(null!==(o=c.age)&&void 0!==o?o:0),1),Object(r["e"])("li",null,"Média das idades:  "+Object(r["k"])(null!==(l=c.average)&&void 0!==l?l:0),1)])])}n("13d5"),n("b680");var Q={name:"Stats",props:{userList:[Object]},computed:{cMale:function(){var e=this.userList;return e.reduce((function(e,t){return"male"===t.gender?e+1:e}),0)},cFemale:function(){var e;return(null!==(e=this.userList.length)&&void 0!==e?e:0)-this.cMale},age:function(){return this.userList.reduce((function(e,t){return e+t.dob.age}),0)},average:function(){return this.userList.length?(this.age/this.userList.length).toFixed(2):0}}};n("8874");Q.render=B;var _=Q,$={data:function(){return{users:[],filteredUsers:[]}},components:{UserList:x,QueryBox:I,Stats:_},mounted:function(){this.loadUsers()},methods:{loadUsers:function(){var e=this;fetch("https://randomuser.me/api/?results=500&seed=abc").then((function(t){return t.json().then((function(t){e.users=Object(f["a"])(t.results),console.log(e.users.filter((function(e){return"BR"===e.nat})))}))}))},filterUsers:function(e){this.filteredUsers=e?this.users.filter((function(t){return(t.name.first+" "+t.name.last).toLowerCase().includes(e.toLowerCase())})):[],console.log(this.filteredUsers)}}};n("5641");$.render=l;var q=$;Object(r["b"])(q).mount("#app")},"5baa":function(e,t,n){"use strict";n("0aca")},7929:function(e,t,n){},"7c30":function(e,t,n){},8874:function(e,t,n){"use strict";n("ef08")},"94c5":function(e,t,n){},eb8c:function(e,t,n){"use strict";n("13ed")},ef08:function(e,t,n){}});
//# sourceMappingURL=app.1adfe162.js.map