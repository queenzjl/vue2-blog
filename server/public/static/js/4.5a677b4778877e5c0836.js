webpackJsonp([4],{UDg9:function(t,e){},dpTr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),s=a.n(n),r=a("PJh5"),i=a.n(r),c=(a("pw1w"),{data:function(){return{articles:[]}},mounted:function(){var t=this;s.a.get("/art/oneArticle?_id="+this.$route.params.id).then(function(e){if(0==e.data.code){var a=e.data.results||[];a&&(a.createtime=i()(a.createtime).format("YYYY-MM-DD HH:mm:ss")),t.articles=a||[],t.update()}})},methods:{update:function(){s.a.get("/art/updateArticle?_id="+this.$route.params.id).then(function(t){console.log(t.data)})}}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutUs-index"},[a("el-row",[a("el-col",{attrs:{span:18,offset:2}},[a("h1",[t._v(t._s(t.articles.title))]),t._v(" "),a("p",{staticClass:"article_author"},[a("span",[t._v(t._s(t.articles.author))]),t._v("  · \n                "),a("span",[t._v(t._s(t.articles.createtime))]),t._v("   \n                "),a("span",[t._v("阅读人数："+t._s(t.articles.read))])]),t._v(" "),a("div",{staticClass:"content markdown-body",domProps:{innerHTML:t._s(t.articles.content)}}),t._v(" "),a("div",{staticClass:"clearfix"},[t._l(t.articles.tags,function(e){return[a("el-tag",[t._v(t._s(e.name))])]})],2)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(c,o,!1,function(t){a("UDg9")},null,null);e.default=l.exports},pw1w:function(t,e){}});
//# sourceMappingURL=4.5a677b4778877e5c0836.js.map