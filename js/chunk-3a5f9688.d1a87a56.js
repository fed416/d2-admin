(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a5f9688"],{"679a":function(t,e,o){"use strict";var n=o("b7bd"),r=o.n(n);r.a},b7bd:function(t,e,o){},d27d:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",{staticClass:"page",attrs:{type:"card"}},[o("template",{slot:"header"},[o("div",{staticClass:"colorful"},[t._v(t._s(t.grayActive?"GRAY":"COLORFUL"))])]),o("el-button-group",[o("el-button",{on:{click:t.grayToggle}},[t._v("切换灰度模式")]),o("el-button",{on:{click:function(e){return t.graySet(!0)}}},[t._v("打开灰度模式")]),o("el-button",{on:{click:function(e){return t.graySet(!1)}}},[t._v("关闭灰度模式")]),o("el-button",{on:{click:function(e){t.dialogVisible=!0}}},[t._v("模拟报错提示框")])],1),o("el-dialog",{attrs:{title:"错误",visible:t.dialogVisible,"append-to-body":!0,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.handleDialogOpen,closed:t.handleDialogClosed}},[o("div",{staticStyle:{"text-align":"center","line-height":"100px",color:"#FFF","font-size":"64px","font-weight":"bold","border-radius":"4px","background-color":"#F56C6C",margin:"-20px 0px"}},[t._v(" Error ")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v(" 我看到后面的内容已经变为灰度模式 ")])],1)])],2)},r=[],i=(o("a4d3"),o("4de4"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),a=o("5880");function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var s={data:function(){return{dialogVisible:!1}},computed:l({},Object(a["mapState"])("d2admin/gray",{grayActive:"active"})),methods:l({},Object(a["mapMutations"])("d2admin/gray",{grayToggle:"toggle",graySet:"set"}),{handleDialogOpen:function(){this.graySet(!0)},handleDialogClosed:function(){this.graySet(!1)}})},d=s,u=(o("679a"),o("2877")),b=function(t){t.options.__source="src/views/demo/playground/store/gray/index.vue"},p=b,g=Object(u["a"])(d,n,r,!1,null,"64dbc183",null);"function"===typeof p&&p(g);e["default"]=g.exports}}]);