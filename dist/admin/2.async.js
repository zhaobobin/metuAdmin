(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5J8s":function(e,t,a){e.exports={pageHeader:"pageHeader___2PGPZ",skeleton:"skeleton___wr6UV",wide:"wide___1RnkC",detail:"detail___23jvr",row:"row___2nePi",breadcrumb:"breadcrumb___dyccC",tabs:"tabs___1CmDX",logo:"logo___17Xib",title:"title___27U2V",action:"action___1DGzJ",content:"content___1THOV",extraContent:"extraContent___aJIkX",main:"main___7Pz96",back:"back___1zVav"}},"61eg":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ")),u=l(a("eHn4")),o=l(a("gWZ8")),i=l(a("2Taf")),d=l(a("vZ4D")),c=l(a("l4Ni")),f=l(a("ujKo")),s=l(a("MhPg"));a("B9cy");var m=l(a("Ol7k")),p=n(a("q1tI")),h=l(a("TSYQ")),v=l(a("wY1l")),g=l(a("Ub41")),b=l(a("Wdjm")),y=l(a("4nyy")),_=a("G5t2"),E=p.default.lazy(function(){return Promise.resolve().then(a.t.bind(null,"Gm1A",7))}),M=m.default.Sider,N=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,c.default)(this,(0,f.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,o.default)(e)})},a.state={openKeys:(0,_.getDefaultCollapsedSubMenus)(e)},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.logo,n=t.collapsed,l=t.onCollapse,o=t.fixSiderbar,i=t.theme,d=this.state.openKeys,c=n?{}:{openKeys:d},f=(0,h.default)(b.default.sider,(e={},(0,u.default)(e,b.default.fixSiderbar,o),(0,u.default)(e,b.default.light,"light"===i),e));return p.default.createElement(M,{trigger:null,collapsible:!0,collapsed:n,breakpoint:"lg",onCollapse:l,width:256,theme:i,className:f},p.default.createElement("div",{className:b.default.logo,id:"logo"},p.default.createElement(v.default,{to:"/"},p.default.createElement("img",{src:a,alt:"logo"}),p.default.createElement("h1",null,g.default.info.appname))),p.default.createElement(p.Suspense,{fallback:p.default.createElement(y.default,null)},p.default.createElement(E,(0,r.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},c))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:(0,_.getDefaultCollapsedSubMenus)(e)}:null}}]),t}(p.PureComponent);t.default=N},"6i0o":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=l(a("W9HT"));a("Telt");var u=l(a("Tckk"));a("lUTK");var o=l(a("BvKs"));a("Pwec");var i=l(a("CtXQ")),d=l(a("2Taf")),c=l(a("vZ4D")),f=l(a("l4Ni")),s=l(a("ujKo")),m=l(a("MhPg")),p=n(a("q1tI")),h=a("LLXN"),v=l(a("e2Cl")),g=l(a("HczU")),b=l(a("ir34")),y=function(e){function t(){return(0,d.default)(this,t),(0,f.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.onMenuClick,n=e.theme,l=p.default.createElement(o.default,{className:b.default.menu,selectedKeys:[],onClick:a},p.default.createElement(o.default.Item,{key:"logout"},p.default.createElement(i.default,{type:"logout"}),p.default.createElement(h.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),d=b.default.right;return"dark"===n&&(d="".concat(b.default.right,"  ").concat(b.default.dark)),p.default.createElement("div",{className:d},t.nickname?p.default.createElement(v.default,{overlay:l},p.default.createElement("span",{className:"".concat(b.default.action," ").concat(b.default.account)},t.avatar?p.default.createElement(u.default,{size:"small",className:b.default.avatar,src:t.avatar,alt:"avatar"}):p.default.createElement(u.default,{size:"small",icon:"user",alt:"avatar"}),p.default.createElement("span",{className:b.default.name},t.nickname))):p.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}}),p.default.createElement(g.default,{className:b.default.action}))}}]),t}(p.PureComponent);t.default=y},"88Ul":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var l=n(a("/wGt")),r=n(a("jehZ")),u=n(a("q1tI")),o=n(a("61eg")),i=a("G5t2"),d=u.default.memo(function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse,c=(0,i.getFlatMenuKeys)(a);return t?u.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},u.default.createElement(o.default,(0,r.default)({},e,{flatMenuKeys:c,collapsed:!t&&n}))):u.default.createElement(o.default,(0,r.default)({},e,{flatMenuKeys:c}))}),c=d;t.default=c},BIFs:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("2Taf")),u=l(a("vZ4D")),o=l(a("l4Ni")),i=l(a("ujKo")),d=l(a("MhPg")),c=n(a("q1tI")),f=a("MuoO"),s=l(a("JMzt")),m=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.contentWidth,a=e.children,n="".concat(s.default.main);return"Fixed"===t&&(n="".concat(s.default.main," ").concat(s.default.wide)),c.default.createElement("div",{className:n},a)}}]),t}(c.PureComponent),p=(0,f.connect)(function(e){var t=e.setting;return{contentWidth:t.contentWidth}})(m);t.default=p},G5t2:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultCollapsedSubMenus=t.getMenuMatches=t.getFlatMenuKeys=void 0;var l=n(a("bALw")),r=a("S/9j"),u=function e(t){var a=[];return t.forEach(function(t){a.push(t.path),t.children&&(a=a.concat(e(t.children)))}),a};t.getFlatMenuKeys=u;var o=function(e,t){return e.filter(function(e){return!!e&&(0,l.default)(e).test(t)})};t.getMenuMatches=o;var i=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,r.urlToList)(t).map(function(e){return o(a,e)[0]}).filter(function(e){return e})};t.getDefaultCollapsedSubMenus=i},GBID:function(e,t,a){e.exports={head:"head___3VGxH",light:"light___Ys1im",main:"main___IDSar",wide:"wide___d0tlI",left:"left___1Sfqe",right:"right___3iMtF",logo:"logo___1fHs3",menu:"menu___2Veg9"}},Gm1A:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ")),u=l(a("gWZ8")),o=l(a("2Taf")),i=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var m=l(a("BvKs")),p=n(a("q1tI")),h=l(a("TSYQ")),v=l(a("wY1l")),g=a("+n12"),b=a("S/9j"),y=a("G5t2"),_=l(a("Wdjm")),E=m.default.SubMenu,M=function(e){return"string"===typeof e&&(0,g.isUrl)(e)?p.default.createElement("img",{src:e,alt:"icon",className:_.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},N=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){return a.getSubMenuOrItem(e,t)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){var t=a.props.flatMenuKeys;return(0,b.urlToList)(e).map(function(e){return(0,y.getMenuMatches)(t,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return p.default.createElement(E,{key:e.path,title:e.icon?p.default.createElement("span",null,M(e.icon),p.default.createElement("span",null,t)):t},a.getNavMenuItems(e.children))}return p.default.createElement(m.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.name,n=a.conversionPath(e.path),l=M(e.icon),r=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:r},l,p.default.createElement("span",null,t));var u=a.props,o=u.location,i=u.isMobile,d=u.onCollapse;return p.default.createElement(v.default,{to:n,target:r,replace:n===o.pathname,onClick:i?function(){d(!0)}:void 0},l,p.default.createElement("span",null,t))},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,o=e.className,i=e.collapsed,d=this.getSelectedMenuKeys(l);!d.length&&t&&(d=[t[t.length-1]]);var c={};t&&!i&&(c={openKeys:0===t.length?(0,u.default)(d):t});var f=this.props,s=f.handleOpenChange,v=f.style,g=f.menuData,b=(0,h.default)(o,{"top-nav-menu":"horizontal"===n});return p.default.createElement(m.default,(0,r.default)({key:"Menu",mode:n,theme:a,onOpenChange:s,selectedKeys:d,style:v,className:b},c),this.getNavMenuItems(g))}}]),t}(p.PureComponent);t.default=N},IGtV:function(e,t,a){e.exports={fixedHeader:"fixedHeader___1sEPB"}},JMzt:function(e,t,a){e.exports={main:"main___3xXJQ",wide:"wide___26dPZ"}},NG47:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("jehZ")),r=n(a("Y/ft")),u=n(a("q1tI")),o=a("LLXN"),i=n(a("wY1l")),d=n(a("pwl5")),c=a("MuoO"),f=n(a("BIFs")),s=n(a("f856")),m=n(a("R1Dz")),p=function(e){var t=e.children,a=e.contentWidth,n=e.wrapperClassName,c=e.top,p=(0,r.default)(e,["children","contentWidth","wrapperClassName","top"]);return u.default.createElement("div",{className:n},c,u.default.createElement(m.default.Consumer,null,function(e){return u.default.createElement(d.default,(0,l.default)({wide:"Fixed"===a,home:u.default.createElement(o.FormattedMessage,{id:"menu.home",defaultMessage:"Home"})},e,{key:"pageheader"},p,{linkElement:i.default,itemRender:function(e){return e.locale?u.default.createElement(o.FormattedMessage,{id:e.locale,defaultMessage:e.title}):e.title}}))}),t?u.default.createElement("div",{className:s.default.content},u.default.createElement(f.default,null,t)):null)},h=(0,c.connect)(function(e){var t=e.setting;return{contentWidth:t.contentWidth}})(p);t.default=h},R1Dz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("q1tI"),l=(0,n.createContext)();t.default=l},"S/9j":function(e,t,a){"use strict";function n(e){var t=e.split("/").filter(function(e){return e});return t.map(function(e,a){return"/".concat(t.slice(0,a+1).join("/"))})}Object.defineProperty(t,"__esModule",{value:!0}),t.urlToList=n},W660:function(e,t,a){e.exports={content:"content___1eX2k"}},Wdjm:function(e,t,a){e.exports={logo:"logo___2SmPQ",sider:"sider___JxXN9",fixSiderbar:"fixSiderbar___3AYyV",light:"light___1kX_d",icon:"icon___2AVns"}},ZLql:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Pwec");var r,u,o,i=n(a("CtXQ")),d=n(a("2Taf")),c=n(a("vZ4D")),f=n(a("l4Ni")),s=n(a("ujKo")),m=n(a("MhPg")),p=n(a("SQvw")),h=l(a("q1tI")),v=n(a("wY1l")),g=n(a("fqkP")),b=n(a("ir34")),y=n(a("6i0o")),_=(r=(0,g.default)(600),o=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,f.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return h.default.createElement("div",{className:b.default.header},a&&h.default.createElement(v.default,{to:"/",className:b.default.logo,key:"logo"},h.default.createElement("img",{src:n,alt:"logo",width:"32"})),h.default.createElement("span",{className:b.default.trigger,onClick:this.toggle},h.default.createElement(i.default,{type:t?"menu-unfold":"menu-fold"})),h.default.createElement(y.default,this.props))}}]),t}(h.PureComponent),u=o,(0,p.default)(u.prototype,"triggerResizeEvent",[r],Object.getOwnPropertyDescriptor(u.prototype,"triggerResizeEvent"),u.prototype),u);t.default=_},ctiy:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ"));a("miYZ");var u=l(a("tsqr")),o=l(a("2Taf")),i=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg"));a("B9cy");var s=l(a("Ol7k")),m=n(a("q1tI")),p=a("LLXN"),h=l(a("MFj2")),v=a("MuoO"),g=l(a("3a4m")),b=l(a("ZLql")),y=l(a("puK+")),_=a("GF0S"),E=l(a("IGtV")),M=s.default.Header,N=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,r=l.fixedHeader,u=l.layout;return t||!r||"topmenu"===u?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){u.default.success("".concat((0,p.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,p.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&(0,_.Confirm)({title:"\u786e\u5b9a\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f",width:500,callback:function(e){1===e&&n({type:"global/logout"})}}):g.default.push("/account/settings/base"):g.default.push("/exception/trigger"):g.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n?a.setState({visible:!0}):n>300&&t?a.setState({visible:!1}):n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,u=n.layout,o=n.fixedHeader,i=this.state.visible,d="topmenu"===u,c=this.getHeadWidth(),f=i?m.default.createElement(M,{style:{padding:0,width:c},className:o?E.default.fixedHeader:""},d&&!t?m.default.createElement(y.default,(0,r.default)({theme:l,mode:"horizontal",onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):m.default.createElement(b.default,(0,r.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return m.default.createElement(h.default,{component:"",transitionName:"fade"},f)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(m.PureComponent),C=(0,v.connect)(function(e){var t=e.global,a=e.setting,n=e.loading;return{currentUser:t.currentUser,collapsed:t.collapsed,fetchingNotices:n.effects["global/fetchNotices"],notices:t.notices,setting:a}})(N);t.default=C},f856:function(e,t,a){e.exports={content:"content___1BsTZ"}},gJ0l:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d4SM");var r=l(a("wraB"));a("Pwec");var u=l(a("CtXQ"));a("B9cy");var o=l(a("Ol7k")),i=n(a("q1tI")),d=l(a("Ub41")),c=o.default.Footer,f=function(){return i.default.createElement(c,{style:{padding:0}},i.default.createElement(r.default,{copyright:i.default.createElement(i.Fragment,null,"Copyright ",i.default.createElement(u.default,{type:"copyright"})," ",d.default.info.company)}))},s=f;t.default=s},ir34:function(e,t,a){e.exports={header:"header___2TzMq",logo:"logo___1KLF3",menu:"menu___1Yg09",trigger:"trigger___18G9t",right:"right___vMqFb",action:"action___2aT_H",search:"search___2olTP",account:"account___1QY1m",avatar:"avatar___1kqVB",name:"name___1V5kT",dark:"dark___2N4C_"}},"j+7r":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getBreadcrumb=void 0,a("sPJy");var r=l(a("bE4q")),u=l(a("eHn4")),o=l(a("2Taf")),i=l(a("vZ4D")),d=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg")),s=n(a("q1tI")),m=l(a("bALw")),p=l(a("5J8s")),h=a("S/9j"),v=function(e,t){var a=e[t];return a||Object.keys(e).forEach(function(n){(0,m.default)(n).test(t)&&(a=e[n])}),a||{}};t.getBreadcrumb=v;var g=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={breadcrumb:null},a.getBreadcrumbDom=function(){var e=a.conversionBreadcrumbList();a.setState({breadcrumb:e})},a.getBreadcrumbProps=function(){var e=a.props,t=e.routes,n=e.params,l=e.location,r=e.breadcrumbNameMap;return{routes:t,params:n,routerLocation:l,breadcrumbNameMap:r}},a.conversionFromProps=function(){var e=a.props,t=e.breadcrumbList,n=e.breadcrumbSeparator,l=e.itemRender,o=e.linkElement,i=void 0===o?"a":o;return s.default.createElement(r.default,{className:p.default.breadcrumb,separator:n},t.map(function(e){var t=l?l(e):e.title;return s.default.createElement(r.default.Item,{key:e.title},e.href?(0,s.createElement)(i,(0,u.default)({},"a"===i?"href":"to",e.href),t):t)}))},a.conversionFromLocation=function(e,t){var n=a.props,l=n.breadcrumbSeparator,o=n.home,i=n.itemRender,d=n.linkElement,c=void 0===d?"a":d,f=(0,h.urlToList)(e.pathname),m=f.map(function(e,a){var n=v(t,e);if(n.inherited)return null;var l=a!==f.length-1&&n.component,o=i?i(n):n.name;return n.name&&!n.hideInBreadcrumb?s.default.createElement(r.default.Item,{key:e},(0,s.createElement)(l?c:"span",(0,u.default)({},"a"===c?"href":"to",e),o)):null});return m.unshift(s.default.createElement(r.default.Item,{key:"home"},(0,s.createElement)(c,(0,u.default)({},"a"===c?"href":"to","/"),o||"Home"))),s.default.createElement(r.default,{className:p.default.breadcrumb,separator:l},m)},a.conversionBreadcrumbList=function(){var e=a.props,t=e.breadcrumbList,n=e.breadcrumbSeparator,l=a.getBreadcrumbProps(),u=l.routes,o=l.params,i=l.routerLocation,d=l.breadcrumbNameMap;return t&&t.length?a.conversionFromProps():u&&o?s.default.createElement(r.default,{className:p.default.breadcrumb,routes:u.filter(function(e){return e.breadcrumbName}),params:o,itemRender:a.itemRender,separator:n}):i&&i.pathname?a.conversionFromLocation(i,d):null},a.itemRender=function(e,t,n,l){var r=a.props.linkElement,u=void 0===r?"a":r,o=n.indexOf(e)===n.length-1;return o||!e.component?s.default.createElement("span",null,e.breadcrumbName):(0,s.createElement)(u,{href:l.join("/")||"/",to:l.join("/")||"/"},e.breadcrumbName)},a}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.getBreadcrumbDom()}},{key:"componentDidUpdate",value:function(e){var t=this.props.location;if(t&&e.location){var a=e.location.pathname;a!==t.pathname&&this.getBreadcrumbDom()}}},{key:"render",value:function(){var e=this.state.breadcrumb;return e}}]),t}(s.PureComponent);t.default=g},m8Tn:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("p0pE")),r=n(a("jehZ")),u=n(a("2Taf")),o=n(a("vZ4D")),i=n(a("l4Ni")),d=n(a("ujKo")),c=n(a("MhPg"));a("B9cy");var f=n(a("Ol7k")),s=n(a("q1tI")),m=n(a("ZFw/")),p=n(a("Y+p1")),h=n(a("Wwog")),v=a("MuoO"),g=a("7DNP"),b=a("E6Dt"),y=n(a("TSYQ")),_=n(a("bALw")),E=n(a("lU33")),M=a("LLXN"),N=a("7Qib"),C=n(a("HZnN")),k=n(a("zwU1")),P=n(a("gJ0l")),w=n(a("ctiy")),x=n(a("R1Dz")),j=n(a("88Ul")),S=n(a("NG47")),T=n(a("wzTe")),D=n(a("4nyy")),K=n(a("W660")),O=f.default.Content,I={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},W=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,i.default)(this,(0,d.default)(t).call(this,e)),a.matchParamsPath=function(e,t){var a=Object.keys(t).find(function(t){return(0,_.default)(t).test(e)});return t[a]},a.getRouterAuthority=function(e,t){var a=["noAuthority"],n=function e(t,n){return n.map(function(n){return n.path&&(0,_.default)(n.path).test(t)?a=n.authority:n.routes&&(a=e(t,n.routes)),n}),a};return n(e,t)},a.getPageTitle=function(e,t){var n=a.matchParamsPath(e,t);if(!n)return N.ENV.info.appname;var l=(0,M.formatMessage)({id:n.locale||n.name,defaultMessage:n.name});return"".concat(l," - ").concat(N.ENV.info.appname)},a.getLayoutStyle=function(){var e=a.props,t=e.fixSiderbar,n=e.isMobile,l=e.collapsed,r=e.layout;return t&&"topmenu"!==r&&!n?{paddingLeft:l?"80px":"256px"}:null},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.getPageTitle=(0,h.default)(a.getPageTitle),a.matchParamsPath=(0,h.default)(a.matchParamsPath,p.default),a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){if(N.Storage.get(N.ENV.storageToken)){var e=this.props,t=e.dispatch,a=e.route,n=a.routes,l=a.authority;t({type:"setting/getSetting"}),t({type:"menu/getMenuData",payload:{routes:n,authority:l}}),t({type:"global/token",payload:{}})}else this.props.dispatch(g.routerRedux.push("/user/login"))}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.collapsed,n=t.isMobile;!n||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"getContext",value:function(){var e=this.props,t=e.location,a=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:a}}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,u=t.children,o=t.location.pathname,i=t.isMobile,d=t.menuData,c=t.breadcrumbNameMap,p=t.route.routes,h=t.fixedHeader,v=t.loading,_=t.isAuth,E="topmenu"===n,M=this.getRouterAuthority(o,p),N=h?{}:{paddingTop:0},W=this.getPageTitle(o,c);return s.default.createElement(s.default.Fragment,null,v?s.default.createElement(D.default,null):_?s.default.createElement(m.default,{title:W},s.default.createElement(b.ContainerQuery,{query:I},function(t){return s.default.createElement(x.default.Provider,{value:e.getContext()},s.default.createElement("div",{className:(0,y.default)(t)},s.default.createElement(f.default,null,E&&!i?null:s.default.createElement(j.default,(0,r.default)({logo:k.default,theme:a,onCollapse:e.handleMenuCollapse,menuData:d,isMobile:i},e.props)),s.default.createElement(f.default,{style:(0,l.default)({},e.getLayoutStyle(),{minHeight:"100vh"})},s.default.createElement(w.default,(0,r.default)({menuData:d,handleMenuCollapse:e.handleMenuCollapse,logo:k.default,isMobile:i},e.props)),s.default.createElement(O,{className:K.default.content,style:N},s.default.createElement(C.default,{authority:M,noMatch:s.default.createElement("p",null,"Exception403")},s.default.createElement(T.default,null,s.default.createElement(S.default,{title:W.split(" - ")[0]},u)))),s.default.createElement(P.default,null)))))})):s.default.createElement(g.Redirect,{to:"/user/login"}))}}]),t}(s.default.PureComponent),L=(0,v.connect)(function(e){var t=e.global,a=e.setting,n=e.menu;return(0,l.default)({loading:t.loading,isAuth:t.isAuth,collapsed:t.collapsed,layout:a.layout,menuData:n.menuData,breadcrumbNameMap:n.breadcrumbNameMap},a)})(function(e){return s.default.createElement(E.default,{query:"(max-width: 599px)"},function(t){return s.default.createElement(W,(0,r.default)({},e,{isMobile:t}))})});t.default=L},"puK+":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("jehZ")),u=l(a("2Taf")),o=l(a("vZ4D")),i=l(a("l4Ni")),d=l(a("ujKo")),c=l(a("MhPg")),f=n(a("q1tI")),s=l(a("wY1l")),m=l(a("6i0o")),p=l(a("Gm1A")),h=a("G5t2"),v=l(a("Ub41")),g=l(a("GBID")),b=function(e){function t(){var e,a;(0,u.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,i.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.menuData,u=t.logo,o=this.state.maxWidth,i=(0,h.getFlatMenuKeys)(l);return f.default.createElement("div",{className:"".concat(g.default.head," ").concat("light"===a?g.default.light:"")},f.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(g.default.main," ").concat("Fixed"===n?g.default.wide:"")},f.default.createElement("div",{className:g.default.left},f.default.createElement("div",{className:g.default.logo,key:"logo",id:"logo"},f.default.createElement(s.default,{to:"/"},f.default.createElement("img",{src:u,alt:"logo"}),f.default.createElement("h1",null,v.default.info.appname))),f.default.createElement("div",{style:{maxWidth:o}},f.default.createElement(p.default,(0,r.default)({},this.props,{flatMenuKeys:i,className:g.default.menu})))),f.default.createElement(m.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(f.PureComponent);t.default=b},pwl5:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("cWXX");var r=l(a("/ezw")),u=l(a("jehZ"));a("+L6B");var o=l(a("2/Rp")),i=l(a("2Taf")),d=l(a("vZ4D")),c=l(a("l4Ni")),f=l(a("ujKo")),s=l(a("MhPg"));a("Znn+");var m=l(a("ZTPi")),p=n(a("q1tI")),h=l(a("TSYQ")),v=l(a("5J8s")),g=l(a("j+7r")),b=m.default.TabPane,y=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(l))),a.onChange=function(e){var t=a.props.onTabChange;t&&t(e)},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.logo,n=e.action,l=e.content,i=e.extraContent,d=e.tabList,c=e.className,f=e.tabActiveKey,s=e.tabDefaultActiveKey,y=e.tabBarExtraContent,_=e.loading,E=void 0!==_&&_,M=e.wide,N=void 0!==M&&M,C=e.hiddenBreadcrumb,k=void 0!==C&&C,P=(0,h.default)(v.default.pageHeader,c),w={};return void 0!==s&&(w.defaultActiveKey=s),void 0!==f&&(w.activeKey=f),p.default.createElement("div",{className:P},p.default.createElement("div",{className:N?v.default.wide:""},p.default.createElement(r.default,{loading:E,title:!1,active:!0,paragraph:{rows:3},avatar:{size:"large",shape:"circle"}},k?null:p.default.createElement(g.default,this.props),p.default.createElement("div",{className:v.default.detail},a&&p.default.createElement("div",{className:v.default.logo},a),p.default.createElement("div",{className:v.default.main},p.default.createElement("a",{className:v.default.back,href:"javascript:history.go(-1)"},p.default.createElement(o.default,null,"\u8fd4\u56de")),p.default.createElement("div",{className:v.default.row},t&&p.default.createElement("h1",{className:v.default.title},t),n&&p.default.createElement("div",{className:v.default.action},n)),p.default.createElement("div",{className:v.default.row},l&&p.default.createElement("div",{className:v.default.content},l),i&&p.default.createElement("div",{className:v.default.extraContent},i)))),d&&d.length?p.default.createElement(m.default,(0,u.default)({className:v.default.tabs},w,{onChange:this.onChange,tabBarExtraContent:y}),d.map(function(e){return p.default.createElement(b,{tab:e.tab,key:e.key})})):null)))}}]),t}(p.PureComponent);t.default=y},wzTe:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(a("q1tI"));function r(e){return l.default.createElement("div",{style:{padding:"20px",background:"#fff"}},e.children)}}}]);