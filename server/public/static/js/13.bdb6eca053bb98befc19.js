webpackJsonp([13],{sAGW:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mtWM"),n=r.n(a),o={data:function(){return{form:{name:""}}},methods:{addForm:function(){var t=this;n.a.post("/art/addArtTag",this.form).then(function(e){console.log(e),0==e.data.code&&t.$router.push("/manage/artTag")})}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("el-row",[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{span:10},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addForm()}}},[t._v("立即创建")]),t._v(" "),r("router-link",{attrs:{to:"/manage/artTag"}},[r("el-button",[t._v("取消")])],1)],1)],1)],1)],1)},staticRenderFns:[]},s=r("VU/8")(o,l,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=13.bdb6eca053bb98befc19.js.map