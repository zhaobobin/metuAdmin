(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{Kd2c:function(e,a,l){"use strict";var t=l("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,l("+L6B");var n=t(l("2/Rp"));l("P2fV");var u,i,r,d=t(l("NJEC")),o=t(l("p0pE")),p=t(l("2Taf")),s=t(l("vZ4D")),c=t(l("l4Ni")),m=t(l("ujKo")),f=t(l("MhPg")),y=t(l("q1tI")),b=l("MuoO"),v=t(l("wd/R")),k=t(l("YdyG")),h=t(l("pTQj")),g=(u=(0,b.connect)(function(e){var a=e.global;return{global:a}}),u((r=function(e){function a(e){var l;return(0,p.default)(this,a),l=(0,c.default)(this,(0,m.default)(a).call(this,e)),l.formCallback=function(e){l.setState({queryParams:e?(0,o.default)({},l.state.queryParams,e):{},modalVisible:!1})},l.add=function(){l.setState({modalVisible:!0,modalAction:"\u6dfb\u52a0"})},l.edit=function(e){l.setState({modalVisible:!0,modalAction:"\u7f16\u8f91",modalValues:e})},l.save=function(e){if(l.ajaxFlag){l.ajaxFlag=!1;var a,t,n=l.state,u=n.apiAdd,i=n.apiEdit,r=n.modalAction,d=n.modalValues;"\u6dfb\u52a0"===r?(a=u,t=e):(a=i,t=(0,o.default)({_id:d._id},e)),l.props.dispatch({type:"global/post",url:a,payload:t,callback:function(e){setTimeout(function(){l.ajaxFlag=!0},500),"0"===e.code&&(l.tableInit.refresh({}),l.setState({modalVisible:!1,modalValues:""}))}})}},l.del=function(e){if(l.ajaxFlag){l.ajaxFlag=!1;var a=l.state.apiDel;l.props.dispatch({type:"global/post",url:a,payload:{id:e},callback:function(e){setTimeout(function(){l.ajaxFlag=!0},500),"0"===e.code&&l.tableInit.refresh({})}})}},l.modalCallback=function(e){e?l.save(e):l.setState({modalVisible:!1,modalValues:""})},l.ajaxFlag=!0,l.state={queryParams:{userType:"user"},apiList:"/api/UserList",apiAdd:"/api/UserAdd",apiEdit:"/api/UserUpdate",apiDel:"/api/UserDel",modalVisible:!1,modalAction:"",modalTitle:"\u7528\u6237",modalValues:"",roleOptions:[]},l}return(0,f.default)(a,e),(0,s.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.props.global.currentUser,l=this.state,t=l.apiList,u=l.queryParams,i=l.modalVisible,r=l.modalAction,o=l.modalTitle,p=l.modalValues,s=l.roleOptions,c=[[{key:"username",label:"\u7528\u6237\u540d",type:"Input",inputType:"Input",value:"",placeholder:"\u8bf7\u8f93\u5165",rules:[]},{key:"tel",label:"\u624b\u673a\u53f7",type:"Input",inputType:"Input",value:"",placeholder:"\u8bf7\u8f93\u5165",rules:[]},{key:"email",label:"\u90ae\u7bb1",type:"Input",value:"",placeholder:"\u8bf7\u8f93\u5165",rules:[]}],[{key:"createtime",label:"\u6ce8\u518c\u65f6\u95f4",type:"DatePicker",value:"",placeholder:"\u8bf7\u9009\u62e9",rules:[]},{key:"status",label:"\u72b6\u6001",type:"Select",value:"",placeholder:"\u8bf7\u9009\u62e9",option:[{label:"\u7981\u7528",value:0},{label:"\u6b63\u5e38",value:1},{label:"\u672a\u9a8c\u8bc1",value:2}]},{key:"btn",type:"BtnGroup",btns:[{name:"\u67e5\u8be2",type:"primary",htmlType:"submit"},{name:"\u91cd\u7f6e",type:"default",htmlType:"reset"}]}]],m=[[{key:"username",label:"\u7528\u6237\u540d",type:"Input",inputType:"Input",value:p?p.username:void 0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",rules:[]},{key:"fullname",label:"\u771f\u5b9e\u540d\u79f0",type:"Input",inputType:"Input",value:p?p.fullname:void 0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",rules:[]},{key:"password",label:"\u5bc6\u7801",type:"Input",inputType:"password",value:"",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",rules:[]},{key:"role_id",label:"\u89d2\u8272",type:"Select",value:p?p.role_id:void 0,placeholder:"\u8bf7\u9009\u62e9",option:s}]],f=[{title:"\u7528\u6237\u540d",dataIndex:"username",key:"username",align:"center"},{title:"\u771f\u5b9e\u59d3\u540d",dataIndex:"fullname",key:"fullname",align:"center"},{title:"\u6ce8\u518c\u65f6\u95f4",dataIndex:"createtime",key:"createtime",align:"center",render:function(e){return y.default.createElement("span",null,(0,v.default)(e).format("YYYY-MM-DD"))}},{title:"\u6700\u540e\u767b\u5f55ip",dataIndex:"regip",key:"regip",align:"center"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",align:"center",render:function(e){return y.default.createElement("span",null,0===e?"\u62d2\u7edd":null,1===e?"\u6b63\u5e38":null)}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"center",render:function(l,t){return y.default.createElement("div",null,"admin"===a.userType?y.default.createElement("span",null,y.default.createElement("a",{onClick:function(){return e.edit(t)}},"\u7f16\u8f91"),"admin"===t.user_name?null:y.default.createElement("span",null," | "),"admin"===t.username?null:y.default.createElement(d.default,{title:"\u786e\u5b9a\u5220\u9664\u8be5\u7528\u6237\uff1f",onConfirm:function(){return e.del(t.id)}},y.default.createElement("a",null,"\u5220\u9664"))):"--")}}];return y.default.createElement("div",null,y.default.createElement(k.default,{layout:"horizontal",params:c,callback:this.formCallback}),"admin"===a.userType?y.default.createElement("div",{style:{padding:"20px 0"}},y.default.createElement(n.default,{type:"primary",onClick:this.add},"\u6dfb\u52a0",o),y.default.createElement(k.default,{params:m,callback:this.modalCallback,modal:{title:r+o,visible:i}})):null,y.default.createElement(h.default,{onRef:function(a){return e.tableInit=a},params:{api:t,columns:f,queryParams:u}}))}}]),a}(y.default.Component),i=r))||i);a.default=g}}]);