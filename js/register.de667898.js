(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"09d6":function(t,e,s){"use strict";s("3b8c")},"3b8c":function(t,e,s){},"73cf":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"register"}},[s("div",{staticClass:"register_area"},[t._m(0),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[s("div",{staticClass:"center content-inputs"},[s("vs-input",{staticClass:"input_bg",attrs:{type:"text",placeholder:"Email Address"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("box-icon",{attrs:{name:"user",color:"#565656"}})]},proxy:!0}]),model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),s("vs-input",{staticClass:"input_bg",attrs:{type:"password",placeholder:"Password",autocomplete:"on"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("box-icon",{attrs:{name:"lock-open-alt",color:"#565656"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"register_btn"},[s("input",{attrs:{type:"submit",value:"SUBMIT"},on:{click:t.openLoading}})])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[t._v("CREATE"),s("br"),t._v("MY BMW"),s("br"),t._v("ACCOUNT")])}],a={name:"register",data:function(){return{account:"",password:""}},methods:{onSubmit:function(){var t=this;this.axios.post("https://bmwcharliejang.herokuapp.com/users/",this.$data).then((function(e){e.data.success?(t.$swal({icon:"success",title:"註冊成功"}),t.account="",t.password=""):t.$swal({icon:"error",title:e.data.message})})).catch((function(e){t.$swal({icon:"error",title:e.response.data.message})}))},onReset:function(){this.account="",this.password=""},openLoading:function(){var t=this.$vs.loading({color:"#0066b1"});setTimeout((function(){t.close()}),1e3)}}},c=a,i=(s("09d6"),s("eae5"),s("2877")),r=Object(i["a"])(c,n,o,!1,null,"1543c09d",null);e["default"]=r.exports},"961e":function(t,e,s){},eae5:function(t,e,s){"use strict";s("961e")}}]);
//# sourceMappingURL=register.de667898.js.map