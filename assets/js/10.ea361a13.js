(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{700:function(t,e,n){"use strict";(function(t){e.a={requestInPromise(e={}){const n=Object.assign({},{type:"GET",contentType:"application/json; charset=utf-8",data:{}},e);let i=this;return new Promise((function(e,a){let o=n.data;"POST"===n.type.toUpperCase()&&n.data&&n.contentType.indexOf("application/json")>-1&&(o=JSON.stringify(n.data)),t.ajax({type:n.type,url:n.url,data:o,dataType:"json",contentType:n.contentType,cache:!1,success(t){200===t.code?e(t.data):0===t.code?i.goLogin():a(t.msg)},error(t,e){a("网络异常")}})}))},appSource(){const t=navigator.userAgent,e=(navigator.appVersion,t.indexOf("Android")>-1||t.indexOf("Linux")>-1),n=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e?"android":n?"ios":"H5"},goLogin(){},filterStr:t=>t=(t=(t=(t=(t=(t=(t=(t+="").replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/'/g,"&#39;")).replace(/"/g,"&quot;")).replace(/;/g,"")).replace(/--/g," "),getQueryString(t,e=window.window.location.search){const n=this,i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=e.substr(1).match(i);return null!==a?n.filterStr(decodeURIComponent(a[2])):null},deepClone(t){let e,n=function(t){let e=Object.prototype.toString;return t instanceof Element?"element":{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[e.call(t)]}(t);if("array"===n)e=[];else{if("object"!==n)return t;e={}}if("array"===n)for(let n=0,i=t.length;n<i;n++)e.push(this.deepClone(t[n]));else if("object"===n)for(let n in t)e[n]=this.deepClone(t[n]);return e},randomInRange:(t,e)=>t+Math.floor(Math.random()*(e-t)),getBLen:t=>null==t?0:("string"!=typeof t&&(t+=""),t.replace(/[^\x00-\xff]/g,"01").length)}}).call(this,n(699))},701:function(t,e,n){"use strict";n(286);var i=n(41),a=n(700),o={name:"v-head",props:["myTitle"],data(){return{title:this.myTitle,appSource:""}},methods:{onClickLeft(){"票卡商城"===this.title?Object(i.a)("调用安卓或者ios方法返回"):this.$router.go(-1)}},created(){this.appSource=a.a.appSource()}},r=n(189),s=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return"ios"!==this.appSource&&"android"!==this.appSource?e("div",[e("van-nav-bar",{attrs:{title:this.title,"left-text":"","left-arrow":"",fixed:!0},on:{"click-left":this.onClickLeft}}),this._v(" "),e("div",{staticStyle:{height:"46px"}})],1):this._e()}),[],!1,null,null,null);e.a=s.exports},703:function(t,e,n){var i=n(712);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(6).default)("d07218dc",i,!0,{})},711:function(t,e,n){"use strict";var i=n(703);n.n(i).a},712:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.my-swipe {\n    color: #fff;\n    font-size: 20px;\n    line-height: 150px;\n    text-align: center;\n    background-color: #39a9ed;\n    border-radius: 5px;\n    margin: 10px 5px 10px 5px !important;\n}\n.van-col--12 {\n    padding: 10px 5px 0 5px !important;\n    text-align: center;\n}\n.van-image__img {\n    border-radius: 5px 5px 0 0;\n}\nli {\n    list-style: none;\n}\n.van-grid-item__content {\n    background-color: whitesmoke !important;\n}\n.van-tabs__nav {\n    background-color: whitesmoke !important;\n}\n.van-grid-item__content--surround::after {\n    border-width: 0 !important;\n}\n.doge {\n    width: 140px;\n    height: 74px;\n    margin-top: 0;\n    border-radius: 0px;\n}\n",""]),t.exports=e},725:function(t,e,n){"use strict";n.r(e);var i=n(701),a=n(700),o={components:{vHead:i.a},data:()=>({list:[],loading:!1,finished:!1,refreshing:!1,img:"https://img.yzcdn.cn/vant/cat.jpeg",myTitle:"票卡商城"}),methods:{onLoad(){setTimeout(()=>{this.refreshing&&(this.list=[],this.refreshing=!1);for(let t=0;t<10;t++)this.list.push(this.list.length+1);this.loading=!1,this.list.length>=40&&(this.finished=!0)},1e3)},onRefresh(){this.finished=!1,this.loading=!0,this.onLoad()},gotoDetails(){"android"===a.a.appSource()?window.window.android.goToPage("/shoppingDetails?id=傻逼池存祥"):(a.a.appSource(),this.$router.push({name:"商品详情",query:{id:"1"}}))}},created(){}},r=(n(711),n(189)),s=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-head",{attrs:{myTitle:this.myTitle}}),t._v(" "),n("van-pull-refresh",{on:{refresh:t.onRefresh},scopedSlots:t._u([{key:"pulling",fn:function(t){return[n("img",{staticClass:"doge",style:{transform:"scale("+t.distance/80+")"},attrs:{src:"https://img.yzcdn.cn/vant/doge.png"}})]}},{key:"loosing",fn:function(){return[n("img",{staticClass:"doge",attrs:{src:"https://img.yzcdn.cn/vant/doge.png"}})]},proxy:!0},{key:"loading",fn:function(){return[n("img",{staticClass:"doge",attrs:{src:"https://img.yzcdn.cn/vant/doge-fire.jpg"}})]},proxy:!0}]),model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[t._v(" "),t._v(" "),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("van-tabs",[n("van-tab",{attrs:{title:"首页"}},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(4,(function(e){return n("van-swipe-item",{key:e},[t._v(t._s(e))])})),1),t._v(" "),n("van-grid",{attrs:{gutter:10}},t._l(8,(function(t){return n("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1),t._v(" "),n("van-row",{attrs:{gutter:"20"}},t._l(10,(function(e){return n("van-col",{key:e,attrs:{span:"12"}},[n("div",{staticStyle:{"background-color":"#ffffff","border-radius":"5px"},on:{click:t.gotoDetails}},[n("van-image",{attrs:{width:"100%",height:"150px",fit:"cover",src:t.img,"lazy-load":""}}),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._v("商品标题")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._v("商品价格")])],1)])})),1)],1),t._v(" "),n("van-tab",{attrs:{title:"分类1"}},[t._v("分类1")]),t._v(" "),n("van-tab",{attrs:{title:"分类2"}},[t._v("分类2")]),t._v(" "),n("van-tab",{attrs:{title:"分类3"}},[t._v("分类3")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);