webpackJsonp([12],{cEG5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Wzr8"),n=a("mtWM"),r=a.n(n),o=a("PJh5"),s=a.n(o),l={data:function(){return{tableData:[],dialogFormVisible:!1,dialogLoginVisible:!1,form:{name:"",_id:""},isManage:!1,isAddOperate:"",rank:{0:"超级管理员",1:"普通会员"}}},mounted:function(){this.getUserList(),0==this.GLOBAL.userRank&&(this.isManage=!0)},components:{userDialog:i.a},methods:{addUser:function(){},editUser:function(){},submitForm:function(){},removeUser:function(){},getUserList:function(){var e=this,t="";this.GLOBAL.userId&&1==this.GLOBAL.userRank&&(t="?_id="+this.GLOBAL.userId);var a=this;r.a.get("/system/getUserList"+t).then(function(t){if(0==t.data.code){var i=t.data.results;for(var n in i)i[n].createtime=s()(i[n].createtime).format("YYYY-MM-DD HH:mm:ss"),i[n].updatetime=s()(i[n].updatetime).format("YYYY-MM-DD HH:mm:ss"),i[n].rank=a.rank[i[n].rank];e.tableData=i,e.dialogLoginVisible=!1}else e.handleError(t.data)})},handleError:function(e){413==e.code&&(this.dialogLoginVisible=!0)}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isManage,expression:"isManage"}],attrs:{type:"primary",plain:""},on:{click:e.addUser}},[e._v("添加用户")])],1)],1),e._v(" "),a("el-row",[a("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{align:"center",prop:"name",label:"用户名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"rank",label:"用户等级"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"createtime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"updatetime",label:"修改时间"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.editUser(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.removeUser(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.isAddOperate?"添加分类":"修改分类",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form}},[a("el-input",{attrs:{span:10,placeholder:"请输入分类名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("el-input",{attrs:{span:10},model:{value:e.form._id,callback:function(t){e.$set(e.form,"_id",t)},expression:"form._id"}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确认")])],1)],1),e._v(" "),a("user-dialog",{ref:"childMsg",attrs:{dialogLoginVisible:e.dialogLoginVisible},on:{isLogined:e.getUserList}})],1)},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(e){a("xSyN")},null,null);t.default=d.exports},xSyN:function(e,t){}});
//# sourceMappingURL=12.1b6350c56b455f3c70f6.js.map