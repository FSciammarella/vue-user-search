(function(e){function t(t){for(var a,c,i=t[0],u=t[1],o=t[2],b=0,f=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-user-search/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0aca":function(e,t,n){},"13ed":function(e,t,n){},"35ab":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={key:0,class:"app loading"},s={key:1,class:"app"},c=Object(a["e"])("h1",{class:"title"},"Pesquisa de Usuários",-1),i={class:"bottom"},u={class:"container"},o={class:"found"};function l(e,t,n,l,b,f){var d=Object(a["j"])("QueryBox"),p=Object(a["j"])("UserList"),g=Object(a["j"])("Stats");return 0===b.users.length?(Object(a["f"])(),Object(a["c"])("div",r," Loading Users... ")):(Object(a["f"])(),Object(a["c"])("div",s,[c,Object(a["e"])(d,{onQueryChange:f.filterUsers},null,8,["onQueryChange"]),Object(a["e"])("div",i,[Object(a["e"])("div",u,[Object(a["e"])("h2",o,Object(a["k"])(b.filteredUsers.length)+" Usuário(s) Encontrado(s) ",1),Object(a["e"])(p,{userList:b.filteredUsers},null,8,["userList"])]),Object(a["e"])(g,{userList:b.filteredUsers},null,8,["userList"])])]))}var b=n("2909"),f=(n("d3b7"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("99af"),{key:0});function d(e,t,n,r,s,c){var i=Object(a["j"])("Pagination");return 0!==n.userList.length?(Object(a["f"])(),Object(a["c"])("div",f,[Object(a["e"])(i,{onChangePage:c.changePage,page:s.page,listLength:parseInt(n.userList.length),maxItems:parseInt(20)},null,8,["onChangePage","page","listLength","maxItems"]),Object(a["e"])("ul",null,[(Object(a["f"])(!0),Object(a["c"])(a["a"],null,Object(a["i"])(c.pagedUserList,(function(e){return Object(a["f"])(),Object(a["c"])("li",{key:"".concat(e.name.first).concat(e.name.last)},[Object(a["e"])("img",{src:e.picture.thumbnail,alt:"avatar"},null,8,["src"]),Object(a["e"])("p",null,Object(a["k"])(e.name.first)+" "+Object(a["k"])(e.name.last)+", "+Object(a["k"])(e.dob.age),1)])})),128))])])):Object(a["d"])("",!0)}n("fb6a");var p=Object(a["m"])("data-v-3351b85a");Object(a["h"])("data-v-3351b85a");var g={class:"page-btn-container"};Object(a["g"])();var h=p((function(e,t,n,r,s,c){var i=Object(a["j"])("Button");return Object(a["f"])(),Object(a["c"])("div",g,[Object(a["e"])(i,{class:n.page?"":"hidden",onClick:c.previous,type:"round",role:"prev"},null,8,["class","onClick"]),Object(a["e"])("input",{onInput:t[1]||(t[1]=function(){return c.validatePage&&c.validatePage.apply(c,arguments)}),type:"text",value:n.page+1},null,40,["value"]),Object(a["e"])(i,{class:n.page===c.maxPage?"hidden":"",onClick:c.next,type:"round",role:"next"},null,8,["class","onClick"])])}));n("a9e3");function j(e,t,n,r,s,c){return Object(a["f"])(),Object(a["c"])("button",null,[Object(a["e"])("i",{class:["fas","prev"===n.role?["fa-backward"]:["fa-forward"]]},null,2)])}var m={name:"Button",props:["type","role"]};n("5baa");m.render=j;var O=m,v={components:{Button:O},name:"Pagination",props:{page:Number,maxItems:Number,listLength:Number},methods:{validatePage:function(e){var t,n=null!==(t=parseInt(e.target.value))&&void 0!==t?t:1;isNaN(n)&&(n=1),n<=1?(e.target.value=1,this.$emit("changePage",0)):n>this.maxPage?(e.target.value=this.maxPage+1,this.$emit("changePage",this.maxPage)):this.$emit("changePage",n-1)},previous:function(){this.$emit("changePage",this.page-1)},next:function(){this.$emit("changePage",this.page+1)}},computed:{maxPage:function(){return parseInt(Math.ceil(this.listLength/this.maxItems)-1)},currentPage:function(){return this.page}},emits:["changePage"]};n("8b4d");v.render=h,v.__scopeId="data-v-3351b85a";var y=v,P={name:"UserList",components:{Pagination:y},props:{userList:[Object]},data:function(){return{page:0,maxItemsPerPage:20}},methods:{changePage:function(e){this.page=e}},computed:{pagedUserList:function(){return this.userList.slice(this.page*this.maxItemsPerPage,(this.page+1)*this.maxItemsPerPage)}}};n("eb8c");P.render=d;var x=P,L={class:"query-box"},k=Object(a["e"])("label",{for:"search-box"},"Busca:",-1);function U(e,t,n,r,s,c){return Object(a["f"])(),Object(a["c"])("div",L,[Object(a["e"])("form",null,[k,Object(a["e"])("input",{class:"search-box",type:"text",placeholder:"Digite aqui sua busca",onInput:t[1]||(t[1]=function(){return c.emitQuery&&c.emitQuery.apply(c,arguments)})},null,32),Object(a["e"])("button",{class:"submit-btn",type:"submit",onSubmit:t[2]||(t[2]=Object(a["l"])((function(){}),["prevent"]))}," Buscar ",32)])])}var w={name:"QueryBox",emits:["queryChange"],methods:{emitQuery:function(e){this.$emit("queryChange",e.target.value)}}};n("7548");w.render=U;var I=w,C={class:"container stats"},S=Object(a["e"])("h2",null,"Estatísticas",-1),M={class:"stat-list"};function B(e,t,n,r,s,c){var i,u,o,l;return Object(a["f"])(),Object(a["c"])("div",C,[S,Object(a["e"])("ul",M,[Object(a["e"])("li",null,"Sexo Masculino:  "+Object(a["k"])(null!==(i=c.cMale)&&void 0!==i?i:0),1),Object(a["e"])("li",null,"Sexo feminino:  "+Object(a["k"])(null!==(u=c.cFemale)&&void 0!==u?u:0),1),Object(a["e"])("li",null,"Soma das idades:  "+Object(a["k"])(null!==(o=c.age)&&void 0!==o?o:0),1),Object(a["e"])("li",null,"Média das idades:  "+Object(a["k"])(null!==(l=c.average)&&void 0!==l?l:0),1)])])}n("13d5"),n("b680");var Q={name:"Stats",props:{userList:[Object]},computed:{cMale:function(){var e=this.userList;return e.reduce((function(e,t){return"male"===t.gender?e+1:e}),0)},cFemale:function(){var e;return(null!==(e=this.userList.length)&&void 0!==e?e:0)-this.cMale},age:function(){return this.userList.reduce((function(e,t){return e+t.dob.age}),0)},average:function(){return this.userList.length?(this.age/this.userList.length).toFixed(2):0}}};n("8874");Q.render=B;var _=Q,$={data:function(){return{users:[],filteredUsers:[]}},components:{UserList:x,QueryBox:I,Stats:_},mounted:function(){this.loadUsers()},methods:{loadUsers:function(){var e=this;fetch("https://randomuser.me/api/?results=500&seed=abc").then((function(t){return t.json().then((function(t){e.users=Object(b["a"])(t.results),console.log(e.users.filter((function(e){return"BR"===e.nat})))}))}))},filterUsers:function(e){this.filteredUsers=e?this.users.filter((function(t){return(t.name.first+" "+t.name.last).toLowerCase().includes(e.toLowerCase())})):[],console.log(this.filteredUsers)}}};n("c474");$.render=l;var q=$;Object(a["b"])(q).mount("#app")},"5baa":function(e,t,n){"use strict";n("0aca")},7548:function(e,t,n){"use strict";n("35ab")},8874:function(e,t,n){"use strict";n("ef08")},"8ac7":function(e,t,n){},"8b4d":function(e,t,n){"use strict";n("c1f8")},c1f8:function(e,t,n){},c474:function(e,t,n){"use strict";n("8ac7")},eb8c:function(e,t,n){"use strict";n("13ed")},ef08:function(e,t,n){}});
//# sourceMappingURL=app.8c840167.js.map