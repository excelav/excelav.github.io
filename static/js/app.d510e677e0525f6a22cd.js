webpackJsonp([1],{"/+Kt":function(e,t){},"9n10":function(e,t){},EFr0:function(e,t){},GiOn:function(e,t){},M57x:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),a=o("Dd8w"),r=o.n(a),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-left"},[this._v("LIBRARY")]),this._v(" "),t("div",{staticClass:"header-right"})])}]};var i=o("VU/8")({name:"HomeHeader",data:function(){return{}}},s,!1,function(e){o("M57x")},"data-v-00c53854",null).exports,l={name:"HomeNavMenu",data:function(){return{}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,router:"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[o("el-menu-item",{attrs:{index:"/table"}},[o("i",{staticClass:"el-icon-document"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("书籍列表")])]),e._v(" "),o("el-menu-item",{attrs:{index:"/form"}},[o("i",{staticClass:"el-icon-circle-plus"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("添加书籍")])]),e._v(" "),o("el-menu-item",{attrs:{index:"/searchBook"}},[o("i",{staticClass:"el-icon-search"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("ISBN查书")])]),e._v(" "),o("el-menu-item",{attrs:{index:"4"}},[o("i",{staticClass:"el-icon-setting"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("备用四")])]),e._v(" "),o("el-submenu",{attrs:{index:"5"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-location"}),e._v(" "),o("span",{staticStyle:{"font-size":"18px"}},[e._v("备用五")])]),e._v(" "),o("el-menu-item",{attrs:{index:"5-1"}},[e._v("选项1")]),e._v(" "),o("el-menu-item",{attrs:{index:"5-2"}},[e._v("选项2")])],2)],1)},staticRenderFns:[]};var u=o("VU/8")(l,c,!1,function(e){o("vrMq")},"data-v-3d34a073",null).exports,d={indexedDB:window.indexedDB||window.webkitindexedDB||window.msIndexedDB||mozIndexedDB,openDB:function(e,t,o,n,a){t=t||1;var r=this.indexedDB.open(e,t);r.onerror=function(e){console.log("IndexedDB数据库打开错误")},r.onsuccess=function(e){o=e.target.result,a&&"function"==typeof a&&a(o)},r.onupgradeneeded=function(e){var t=e.target.result;if(n&&!t.objectStoreNames.contains(n.name)){var o=t.createObjectStore(n.name,{keyPath:n.key,autoIncrement:!0});if(n.indexs&&n.indexs instanceof Array)for(var a=n.indexs,r=0,s=a.length;r<s;r++)o.createIndex(a[r],a[r],{unique:!1})}}},deleteDB:function(e,t){var o=this.indexedDB.deleteDatabase(e);o.onerror=function(){console.log("删除数据库出错")},o.onsuccess=function(){t&&"function"==typeof t&&t()}},closeDB:function(e){e.close(),console.log("数据库已关闭")},addData:function(e,t,o,n){for(var a,r=e.transaction(t,"readwrite").objectStore(t),s=0,i=o.length;s<i;s++)(a=r.add(o[s])).onerror=function(){console.error("ADD添加数据报错")},a.onsuccess=function(){n&&"function"==typeof n&&n()}},putData:function(e,t,o,n){for(var a,r=e.transaction(t,"readwrite").objectStore(t),s=0,i=o.length;s<i;s++)(a=r.put(o[s])).onerror=function(){console.error("PUT添加数据报错")},a.onsuccess=function(){n&&"function"==typeof n&&n()}},deleteData:function(e,t,o,n){var a=e.transaction(t,"readwrite").objectStore(t).delete(o);a.onerror=function(){console.error("删除一条记录出错")},a.onsuccess=function(){n&&"function"==typeof n&&n()}},clearData:function(e,t){e.transaction(t,"readwrite").objectStore(t).clear()},getData:function(e,t,o,n){var a;(a=e.transaction(t,"readonly").objectStore(t).get(o)).onerror=function(){console.log("通过KEY获取数据报错")},a.onsuccess=function(e){var t=e.target.result;n&&"function"==typeof n&&n(t)}},handleDataByCursor:function(e,t,o,n){var a;n=n||"";(a=e.transaction(t,"readwrite").objectStore(t).openCursor(n)).onerror=function(){console.log("通过游标获取数据报错")},a.onsuccess=function(e){var t=e.target.result;t&&(o&&"function"==typeof o&&o(t),t.continue())}},handleDataByIndex:function(e,t,o,n,a){var r;a=a||"";(r=e.transaction(t,"readwrite").objectStore(t).index(sursorIndex).openCursor(a)).onerror=function(){console.log("通过索引游标获取数据报错")},r.onsuccess=function(e){var t=e.target.result;t&&(n&&"function"==typeof n&&n(t),t.continue())}},createCursorIndex:function(e,t,o,n){e.transaction(t,"readwrite").objectStore(t).createIndex(o,o,{unique:!1}),n&&"function"==typeof n&&n()},tranverseDataByCursor:function(e,t,o){var n=e.transaction(t,"readwrite").objectStore(t).openCursor();n.onerror=function(){console.log("通过key游标遍历数据报错")},n.onsuccess=function(e){var t=e.target.result;t&&(o&&"function"==typeof o&&o(t),t.continue())}},addRecord:function(e,t,o,n){var a=e.transaction(t,"readwrite").objectStore(t),r=a.add(o);r.onerror=function(){console.log("添加记录失败")},r.onsuccess=function(e){var t=e.target.result;a.get(t).onsuccess=function(e){var t=e.target.result;n&&"function"==typeof n&&n(t)}}}},m=o("NYxO"),p={name:"Home",components:{HomeHeader:i,HomeNavMenu:u},methods:r()({},Object(m.b)(["addData"])),created:function(){var e=this,t={name:"books",key:"id",indexs:["name","isbn"]};d.openDB("wBooks",1,null,t,function(o){var n=o;d.tranverseDataByCursor(n,t.name,function(t){e.addData(t.value)})})}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",{attrs:{height:"50px"}},[t("home-header")],1),this._v(" "),t("el-container",[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)",overflow:"hidden"},attrs:{width:"200px"}},[t("home-nav-menu")],1),this._v(" "),t("el-main",[t("keep-alive",{attrs:{include:["Table","SearchBook"]}},[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var b=o("VU/8")(p,f,!1,function(e){o("nofq")},"data-v-30c5e7e1",null).exports,v={name:"App",components:{Home:b}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("home")],1)},staticRenderFns:[]};var k=o("VU/8")(v,h,!1,function(e){o("oek1")},null,null).exports,_=o("/ocq"),g={name:"Table",data:function(){return{search:""}},computed:r()({},Object(m.d)(["allBooks","currentBook"]),{tables:function(){var e=this.search;return e?this.allBooks.filter(function(t){return String(t.name).indexOf(e)>-1}):this.allBooks}}),methods:r()({},Object(m.b)(["deleteData"]),Object(m.c)(["changeCurrentBook"]),{handleClick:function(e){this.changeCurrentBook(e.id)},showDate:function(e){return""!==this.search&&-1!==e.indexOf(this.search)?e.replace(this.search,'<font color="#409EFF">'+this.search+"</font>"):e},deleteRecord:function(){var e=this;this.currentBook&&this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{cancelButtonText:"取消",confirmButtonText:"确定",type:"warning"}).then(function(){var t=e,o={name:"books",key:"id",indexs:["name","isbn"],id:t.currentBook};d.openDB("wBooks",1,null,o,function(e){var t=e;d.deleteData(t,o.name,o.id,function(){console.log("数据库中数据删除成功")})}),t.deleteData(),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}})},y={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("el-input",{staticClass:"search",staticStyle:{width:"300px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"输入书名进行查询",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),o("el-button",{attrs:{type:"warning",plain:""},on:{click:e.deleteRecord}},[e._v("删除选中记录")])],1),e._v(" "),o("el-table",{staticClass:"datatable",attrs:{data:e.tables,border:"","highlight-current-row":"","max-height":"565"},on:{"row-click":e.handleClick}},[o("el-table-column",{attrs:{prop:"id",label:"ID",width:"70"}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"书名","show-overflow-tooltip":!0,width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{domProps:{innerHTML:e._s(e.showDate(t.row.name))}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"position",label:"存放位置",width:"160"}}),e._v(" "),o("el-table-column",{attrs:{prop:"type",label:"类型","show-overflow-tooltip":!0,width:"160"}}),e._v(" "),o("el-table-column",{attrs:{prop:"isbn",label:"ISBN",width:"130"}}),e._v(" "),o("el-table-column",{attrs:{prop:"date",label:"入库日期",width:"100"}}),e._v(" "),o("el-table-column",{attrs:{prop:"remarks",label:"备注"}})],1)],1)},staticRenderFns:[]};var x=o("VU/8")(g,y,!1,function(e){o("EFr0")},"data-v-698072c6",null).exports,w={name:"Form",data:function(){return{ruleForm:{name:"",position:"办公室",type:"文学",isbn:"",date:"",remarks:""},rules:{name:[{required:!0,message:"请输入书籍名称",trigger:"blur"}],position:[{required:!0,message:"请选择存放位置",trigger:"change"}],type:[{required:!0,message:"请选择类别",trigger:"change"}],date:[{type:"string",message:"请选择时间",trigger:"change"}]}}},mounted:function(){var e=new Date;this.ruleForm.date=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},methods:r()({},Object(m.b)(["addData"]),{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(t){var o=e,n=o.ruleForm,a={name:"books",key:"id",indexs:["name","isbn"]};d.openDB("wBooks",1,null,a,function(e){var t=e;d.addRecord(t,a.name,n,function(e){o.addData(e),o.$message({message:"添加书籍成功",type:"success"})})})}})},resetForm:function(e){this.$refs[e].resetFields()}})},B={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"resource"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"书籍名称",prop:"name"}},[o("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"存放位置",prop:"position"}},[o("el-radio-group",{model:{value:e.ruleForm.position,callback:function(t){e.$set(e.ruleForm,"position",t)},expression:"ruleForm.position"}},[o("el-radio",{attrs:{label:"办公室"}}),e._v(" "),o("el-radio",{attrs:{label:"家"}}),e._v(" "),o("el-radio",{attrs:{label:"其他"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"书籍类别",prop:"type"}},[o("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[o("el-radio",{attrs:{label:"文学",name:"type"}}),e._v(" "),o("el-radio",{attrs:{label:"绘本",name:"type"}}),e._v(" "),o("el-radio",{attrs:{label:"其他",name:"type"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"ISBN",prop:"isbn"}},[o("el-input",{attrs:{autocomplete:"off",placeholder:"13位数字"},model:{value:e.ruleForm.isbn,callback:function(t){e.$set(e.ruleForm,"isbn",e._n(t))},expression:"ruleForm.isbn"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"入库日期",prop:"date"}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("新增书籍")]),e._v(" "),o("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var j=o("VU/8")(w,B,!1,function(e){o("/+Kt")},"data-v-0605dfb8",null).exports,D=o("hU7x"),F=o.n(D),O={name:"SearchBook",data:function(){return{isbn:"",isShow:!1,bookObj:{name:"",author:"",publisher:"",pubdate:"",pages:"",price:"",binding:"",image:"",type:"",isbn:"",summary:"",position:"办公室",date:"2019-01-29"},options:[{value:"办公室",label:"办公室"},{value:"家",label:"家"},{value:"其他",label:"其他"}]}},methods:r()({},Object(m.b)(["addData"]),{handleClickSearch:function(){var e=this;this.isbn&&13===this.isbn.length&&F()("https://api.douban.com/v2/book/isbn/"+this.isbn,null,function(t,o){t?console.error(t.message):e.handleGetDateSucc(o)})},handleGetDateSucc:function(e){if(e){this.isShow=!0;var t=e;this.bookObj.name=t.title,this.bookObj.author=t.author.join(" / "),this.bookObj.publisher=t.publisher,this.bookObj.pubdate=t.pubdate,this.bookObj.pages=t.pages,this.bookObj.price=t.price,this.bookObj.binding=t.binding,this.bookObj.image=t.image;for(var o=[],n=0,a=t.tags.length;n<a;n++)o.push(t.tags[n].name);this.bookObj.type=o.join("/"),this.bookObj.isbn=t.isbn13,this.bookObj.summary=t.summary}},handleClickAdd:function(){if(this.isShow&&this.bookObj.name){var e=this,t=e.bookObj,o={name:"books",key:"id",indexs:["name","isbn"]};d.openDB("wBooks",1,null,o,function(n){var a=n;d.addRecord(a,o.name,t,function(t){e.addData(t),e.$message({message:"添加书籍成功",type:"success"})})})}}})},C={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("el-input",{staticStyle:{width:"220px",margin:"10px"},attrs:{"prefix-icon":"el-icon-search",maxlength:"13",placeholder:"请输入13位ISBN",clearable:""},model:{value:e.isbn,callback:function(t){e.isbn=t},expression:"isbn"}}),e._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleClickSearch}},[e._v("搜索")]),e._v(" "),o("el-select",{staticClass:"position-input",attrs:{clearable:"",placeholder:"请选择存放位置"},model:{value:e.bookObj.position,callback:function(t){e.$set(e.bookObj,"position",t)},expression:"bookObj.position"}},e._l(e.options,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleClickAdd}},[e._v("收藏书籍")])],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"main-content"},[o("div",[o("img",{staticClass:"book-img",attrs:{src:e.bookObj.image}})]),e._v(" "),o("div",{staticClass:"book-desc"},[o("span",[e._v("书名："+e._s(e.bookObj.name))]),e._v(" "),o("span",[e._v("作者："+e._s(e.bookObj.author))]),e._v(" "),o("span",[e._v("出版社："+e._s(e.bookObj.publisher))]),e._v(" "),o("span",[e._v("出版时间："+e._s(e.bookObj.pubdate))]),e._v(" "),o("span",[e._v("页数："+e._s(e.bookObj.pages))]),e._v(" "),o("span",[e._v("定价："+e._s(e.bookObj.price))]),e._v(" "),o("span",[e._v("装帧："+e._s(e.bookObj.binding))]),e._v(" "),o("span",[e._v("种类："+e._s(e.bookObj.type))]),e._v(" "),o("span",[e._v("ISBN："+e._s(e.bookObj.isbn))]),e._v(" "),o("span",[e._v("摘要："+e._s(e.bookObj.summary))])])])])},staticRenderFns:[]};var S=o("VU/8")(O,C,!1,function(e){o("GiOn")},"data-v-a92d0658",null).exports;n.default.use(_.a);var $=new _.a({routes:[{path:"/",name:"Home",component:b},{path:"/table",name:"Table",component:x},{path:"/form",name:"Form",component:j},{path:"/searchBook",name:"SearchBook",component:S}]});n.default.use(m.a);var I=new m.a.Store({state:{allBooks:[],currentBook:""},getters:{},mutations:{pushBooks:function(e,t){e.allBooks.push(t)},changeCurrentBook:function(e,t){e.currentBook=t},deleteCurrentBook:function(e){var t=e.currentBook,o=void 0;e.currentBook="";for(var n=0,a=e.allBooks.length;n<a;n++)if(e.allBooks[n].id===t){o=n;break}o&&e.allBooks.splice(o,1)}},actions:{addData:function(e,t){e.commit("pushBooks",t)},deleteData:function(e){e.commit("deleteCurrentBook")}}}),R=o("zL8q"),M=o.n(R);o("tvR6");n.default.use(M.a);o("9n10");n.default.config.productionTip=!1,new n.default({el:"#app",router:$,store:I,components:{App:k},template:"<App/>"})},nofq:function(e,t){},oek1:function(e,t){},tvR6:function(e,t){},vrMq:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d510e677e0525f6a22cd.js.map