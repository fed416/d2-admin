(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2b70"],{"5a4b":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '标签',\n          key: 'tag',\n          filters: [\n            { text: '家', value: '家' },\n            { text: '公司', value: '公司' }\n          ],\n          filterMethod (value, row) {\n            return row.tag === value\n          },\n          filterPlacement: 'bottom-end'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          tag: '家'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          tag: '公司'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          tag: '家'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          tag: '公司'\n        }\n      ]\n    }\n  }\n}\n<\/script>"}}]);