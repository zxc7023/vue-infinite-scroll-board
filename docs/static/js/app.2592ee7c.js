(function(t){function e(e){for(var s,o,c=e[0],i=e[1],u=e[2],d=0,p=[];d<c.length;d++)o=c[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-infinite-scroll-board/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"528c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,a,r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=n("2877"),u={},l=Object(i["a"])(u,o,c,!1,null,null,null),d=l.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-view"}},[n("div",{staticClass:"container"},[n("loading",{attrs:{active:t.isLoading,color:"#007BFF",transition:"fade"}}),n("FilterModal"),n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-md-3 offset-md-6 col-4 offset-5"},[n("div",{staticClass:"button-wrap order-btn"},[n("div",{staticClass:"row"},[n("span",{staticClass:"col-6 sort",class:"asc"==this.getOrd?"active":"",on:{click:function(e){return t.sort("asc")}}},[t._v(" 오름차순")]),n("span",{staticClass:"col-6 sort",class:"asc"==this.getOrd?"":"active",on:{click:function(e){return t.sort("desc")}}},[t._v(" 내림차순")])])])])]),n("div",{staticClass:"row"},[t._l(t.posts.length,function(e){return n("div",{key:e,staticClass:"col-12"},[0!=t.posts.length?n("Post",{attrs:{post:t.posts[e-1],category:t.getCategory}}):t._e(),0!=t.ads.length&&e%10%3==0&&e%10/3==1?n("div",[n("Advertisement",{attrs:{advertisement:t.ads[Math.floor(e/10)]}})],1):t._e()],1)}),n("div",{staticClass:"button-wrap col-12"},[n("div",{staticClass:"row"},[n("button",{staticClass:"btn btn-outline-success col-4 offset-4",attrs:{type:"button"},on:{click:function(e){return t.viewMore()}}},[t._v("\n              더보기\n            ")])])])],2)],1)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-3"},[n("div",{staticClass:"button-wrap"},[n("div",{staticClass:"row"},[n("button",{staticClass:"btn btn-outline-success col-12",attrs:{type:"button","data-toggle":"modal","data-target":"#filter-modal","data-backdrop":"static","data-keyboard":"false"}},[t._v("필터")])])])])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"filter-modal",tabindex:"-1",role:"dialog","aria-labelledby":"modalTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._t("header",[n("h5",{staticClass:"modal-title",attrs:{id:"modalTitle"}},[t._v("카테고리")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.categoryUnchange()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],2),n("div",{staticClass:"modal-body"},t._l(t.category,function(e){return n("div",{key:e.no,staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkModel,expression:"checkModel"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.name},domProps:{value:e.no,checked:Array.isArray(t.checkModel)?t._i(t.checkModel,e.no)>-1:t.checkModel},on:{change:function(n){var s=t.checkModel,a=n.target,r=!!a.checked;if(Array.isArray(s)){var o=e.no,c=t._i(s,o);a.checked?c<0&&(t.checkModel=s.concat([o])):c>-1&&(t.checkModel=s.slice(0,c).concat(s.slice(c+1)))}else t.checkModel=r}}}),n("label",{staticClass:"form-check-label",attrs:{for:e.name}},[t._v(t._s(e.name))])])}),0),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.categoryUnchange()}}},[t._v("Close")]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.categoryChange()}}},[t._v("Save")])])],2)])])])},g=[],v={name:"FilterModal",data:function(){return{localChecked:null}},methods:{categoryChange:function(){this.$store.dispatch("categoryChange",this.localChecked)},categoryUnchange:function(){this.localChecked=this.checked}},computed:{checkModel:{get:function(){return null==this.localChecked&&(this.localChecked=this.checked),this.localChecked},set:function(t){this.localChecked=t}},category:function(){return this.$store.getters.getCategory},checked:function(){return this.$store.getters.getChecked}},created:function(){},mounted:function(){}},b=v,y=Object(i["a"])(b,m,g,!1,null,null,null),C=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("router-link",{attrs:{to:{path:"post",query:{no:t.post.no}}}},[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header clearfix"},[n("span",[t._v(" "+t._s(t.category[t.post.category_no-1].name)+" ")]),n("span",{staticClass:"float-right"},[t._v("글 번호 : "+t._s(t.post.no))])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-subtitle overflow-hidden float-left"},[n("span",{},[t._v(t._s(t.post.email))]),n("span",{},[t._v(t._s(t.post.updated_at))])]),n("h4",{staticClass:"card-title"},[t._v(t._s(t.post.title))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.post.contents))])])])])],1)},_=[],w={name:"Post",props:{post:{type:Object},category:{type:Array}}},x=w,O=Object(i["a"])(x,k,_,!1,null,null,null),P=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.advertisement?n("div",{staticClass:"advertisement"},[t._m(0),n("div",{staticClass:"col-12 col-sm-6",staticStyle:{padding:"0"}},[n("img",{staticClass:"rounded-0 card-img",attrs:{src:"http://comento.cafe24.com/public/images/"+t.advertisement.img}})]),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.advertisement.title))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.advertisement.contents))])])])]):t._e()},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-header col-12"},[n("h4",{staticClass:"card-title"},[t._v("sponser")])])}],A={name:"Advertisement",props:{advertisement:{type:Object}}},$=A,L=Object(i["a"])($,j,M,!1,null,null,null),R=L.exports,S=n("9062"),E=n.n(S),I=(n("e40d"),{name:"MainView",components:{Loading:E.a,FilterModal:C,Post:P,Advertisement:R},data:function(){return{}},computed:{isLoading:function(){return this.$store.getters.getIsLoading},posts:function(){return this.$store.getters.getPosts},ads:function(){return this.$store.getters.getAdvertisements},getOrd:function(){return this.$store.getters.getOrd},getCategory:function(){return this.$store.getters.getCategory}},methods:{sort:function(t){this.getOrd!=t&&this.$store.dispatch("ordChange",t)},viewMore:function(){this.$store.dispatch("moreList")}},created:function(){0==this.posts&&(this.$store.dispatch("setCategory"),this.$store.dispatch("setPosts"),this.$store.dispatch("setAdvertisements"))},mounted:function(){},beforeDestroy:function(){}}),F=I,T=(n("720c"),Object(i["a"])(F,f,h,!1,null,null,null)),q=T.exports,U={},D=Object(i["a"])(U,s,a,!1,null,null,null),J=D.exports;r["a"].use(p["a"]);var V=new p["a"]({mode:"history",base:"/vue-infinite-scroll-board/",routes:[{path:"/",name:"MainView",component:q},{path:"/posts/:req_no",name:"ListDetail",component:J}]}),B=(n("96cf"),n("3b8d")),N=n("2f62"),z=n("bc3a"),G=n.n(z),H=function(){return G.a.get("https://comento.cafe24.com/category.php")},K=function(t,e,n){return G.a.get("http://comento.cafe24.com/request.php",{params:{page:t,ord:e,category:n}})},Q=function(t,e){return G.a.get("https://comento.cafe24.com/ads.php",{params:{page:t,limit:e}})};r["a"].use(N["a"]);var W=new N["a"].Store({state:{category:{},checked:[],ord:"asc",posts:[],advertisements:[],page:1,adPage:1,isLoading:!1},getters:{getCategory:function(t){return t.category},getChecked:function(t){return t.checked},getOrd:function(t){return t.ord},getPosts:function(t){return t.posts},getAdvertisements:function(t){return t.advertisements},getIsLoading:function(t){return t.isLoading}},mutations:{setCategory:function(t,e){t.category=e},setChecked:function(t,e){t.checked=e},setOrd:function(t,e){t.ord=e},setPosts:function(t,e){t.posts=e},setAdvertisements:function(t,e){t.advertisements=e},setIsLoading:function(t,e){t.isLoading=e},setPage:function(t,e){t.page=e},setAdpage:function(t,e){t.adPage=e},plusAdpage:function(t){t.adPage+=1}},actions:{setCategory:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,s=[],t.next=4,H();case 4:a=t.sent,a.data.list.map(function(t){s.push(t.no)}),n("setCategory",a.data.list),n("setChecked",s);case 8:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),categoryChange:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e,n){var s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,a=e.dispatch,s("setChecked",n),t.next=4,a("setPosts");case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),ordChange:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e,n){var s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,a=e.dispatch,s("setOrd",n),t.next=4,a("setPosts");case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),setPosts:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,s=e.commit,s("setIsLoading",!0),t.next=4,K(n.page,n.ord,n.checked);case 4:a=t.sent,s("setPosts",a.data.list),s("setIsLoading",!1);case 7:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),morePosts:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,s=e.commit,s("setPage",n.page+1),t.next=4,K(n.page,n.ord,n.checked);case 4:a=t.sent,s("setPosts",n.posts.concat(a.data.list));case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),setAdvertisements:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,s=e.commit,t.next=3,Q(n.adPage,1);case 3:a=t.sent,s("setAdvertisements",a.data.list);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),moreAdvertisements:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,s=e.commit,s("plusAdpage"),t.next=4,Q(n.adPage,1);case 4:if(a=t.sent,!(a.status=0==a.data.list.length)){t.next=10;break}return s("setAdpage",1),t.next=9,Q(n.adPage,1);case 9:a=t.sent;case 10:s("setAdvertisements",n.advertisements.concat(a.data.list));case 11:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),moreList:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.state,n=e.commit,s=e.dispatch,n("setIsLoading",!0),t.next=4,s("morePosts");case 4:return t.next=6,s("moreAdvertisements");case 6:n("setIsLoading",!1);case 7:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}});n("4989"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({store:W,router:V,render:function(t){return t(d)}}).$mount("#app")},"720c":function(t,e,n){"use strict";var s=n("528c"),a=n.n(s);a.a}});
//# sourceMappingURL=app.2592ee7c.js.map