webpackJsonp([7],{1045:function(e,t,r){e.exports=r.p+"img/to_feedback.png?2b3a91b13e9dd01c9ed6a12949908f06"},1046:function(e,t,r){e.exports=r.p+"img/user_device.png?887a61b4d6f379fa1a3ad4ce57fb9b8e"},1047:function(e,t,r){e.exports=r.p+"img/user_header_bg.png?0f1cf9ea58e2a236785d50a5942b7f20"},1048:function(e,t,r){e.exports=r.p+"img/user_vip.png?2a1933a7d526debacda062d3c4a9d805"},1049:function(e,t,r){e.exports=r.p+"img/user_vip_gray.png?54130f26ce4f5a45a466af4ba867ce2e"},1050:function(e,t,r){e.exports=r.p+"img/vip_pay_content.png?50c171b4575df2837456dcd1caba3aa9"},1051:function(e,t,r){e.exports=r.p+"img/default_avatar.png?66ae84e9d8e09b1a631e840a76efe989"},747:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)},i=r(0),a=_interopRequireDefault(i),l=r(105),u=r(106),c=r(288),s=_interopRequireDefault(c),f=r(1),d=_interopRequireDefault(f),p=r(289),m=r(282),h=r(765),g=_interopRequireDefault(h),b=r(767),y=_interopRequireDefault(b),_=r(836),v=_interopRequireDefault(_),R=r(169),E=r(20),C=_interopRequireDefault(E),w=r(1045),I=_interopRequireDefault(w),O=r(1046),x=_interopRequireDefault(O),D=r(1047),k=_interopRequireDefault(D),T=r(1048),P=_interopRequireDefault(T),j=r(1049),L=_interopRequireDefault(j),B=r(1050),S=_interopRequireDefault(B),q=r(286),M=r(1051),U=_interopRequireDefault(M),N=r(838),A=_interopRequireDefault(N),z={headerImg:{display:"block",margin:(0,m.toRem)(40)+" auto "+(0,m.toRem)(28),width:(0,m.toRem)(60),height:(0,m.toRem)(60)},headerDesc:{height:(0,m.toRem)(95),textAlign:"center",color:"#222",lineHeight:"normal",fontSize:(0,m.toRem)(24)}},G=function(e){return a.default.createElement(C.default,{style:e.style},a.default.createElement("path",{style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M13.729,11.236L1.722,0.294c-0.394-0.392-1.033-0.392-1.427,0c-0.394,0.392-0.394,1.028,0,1.42l11.283,10.283L0.296,22.28c-0.394,0.392-0.394,1.028,0,1.42c0.394,0.392,1.033,0.392,1.427,0l12.007-10.942c0.21-0.209,0.3-0.486,0.286-0.76C14.029,11.723,13.939,11.446,13.729,11.236z"}))},H=function(e){return a.default.createElement(C.default,{style:e.style,viewBox:"0 0 32 32"},a.default.createElement("path",{style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M20.536,15.121l-7.657-7.657c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414L18.586,16l-7.121,7.121c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.024,0.391,1.414,0l7.657-7.657c0.24-0.24,0.314-0.568,0.26-0.879C20.85,15.69,20.775,15.361,20.536,15.121z M16,0C7.163,0,0,7.164,0,16c0,8.837,7.163,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2c7.732,0,14,6.268,14,14C30,23.732,23.732,30,16,30z"}))},V=function(e){function UserIndex(e){_classCallCheck(this,UserIndex);var t=_possibleConstructorReturn(this,(UserIndex.__proto__||Object.getPrototypeOf(UserIndex)).call(this,e));return n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"title",t).call(t,"我的"),t.state={userInfoData:{},recordsListTotalCounts:0,recordsListData:[],open:!1,deleteRecordingUid:null},t.updateRecordsList=t.updateRecordsList.bind(t),t}return _inherits(UserIndex,e),o(UserIndex,[{key:"componentDidUpdate",value:function(e){e.recordsList.recordsListStamp!==this.props.recordsList.recordsListStamp&&this.updateRecordsList()}},{key:"componentDidMount",value:function(){if(n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"isBindDevice",this).call(this,this.props.userInfo.userInfoData)){var e={pageSize:9,currentPage:1};this.props.getRecordsListAction(e,(0,m.reqHeader)(e))}}},{key:"render",value:function(){var e=this,t=this.props.userInfo.userInfoData,r=t||{data:{}},o=r.data,i=o.headerImg;i=i||"";var l=this.props.action_setGlobAlert,u=this.state.recordsListData,c=this.state.recordsListTotalCounts;return a.default.createElement("div",null,a.default.createElement("section",null,a.default.createElement("header",{style:{width:"100%",height:(0,m.toRem)(230),background:"url("+k.default+") center no-repeat",backgroundSize:"cover"}},a.default.createElement(R.Avatar,{style:{float:"left",marginTop:(0,m.toRem)(22),marginLeft:(0,m.toRem)(60),width:(0,m.toRem)(160),height:(0,m.toRem)(160),border:(0,m.toRem)(7)+" solid rgba(255, 255, 255, .3)",backgroundColor:"rgba(255, 255, 255)",background:"url("+U.default+") no-repeat center",backgroundSize:"cover"},src:i,alt:""}),a.default.createElement("div",{style:{float:"left",paddingTop:(0,m.toRem)(65),marginLeft:(0,m.toRem)(23)}},a.default.createElement("div",{style:{height:(0,m.toRem)(50),lineHeight:(0,m.toRem)(50),fontSize:(0,m.toRem)(30),color:"#fff"}},o.nickName),this.showVIPStatus(o))),a.default.createElement(R.GridList,{cellHeight:"auto",style:{margin:0,clear:"both"},cols:2},a.default.createElement(R.GridTile,{onTouchTap:function(){!0===n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"validUserBindDevice",e).call(e,t,l)&&l("已绑定，开始点歌吧")}},a.default.createElement("img",{src:x.default,style:z.headerImg}),a.default.createElement("div",{style:z.headerDesc},a.default.createElement("p",{style:{margin:"0"}},"绑定设备"),a.default.createElement("p",{style:{margin:(0,m.toRem)(10)+" 0 0",fontSize:(0,m.toRem)(20),color:"#999"}},1===parseInt(o.isReDevice,10)?"已绑定"+o.deviceId.replace(o.deviceId.slice(4,o.deviceId.length-4),"***"):"未绑定"))),a.default.createElement(R.GridTile,{onTouchTap:function(){!0===n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"validUserBindDevice",e).call(e,t,l)&&(0,m.linkTo)("user/feedback/home",!1,null)}},a.default.createElement("img",{src:I.default,style:z.headerImg}),a.default.createElement("div",{style:z.headerDesc},"意见反馈")))),!("nst_yinba"===o.channel)&&a.default.createElement("section",{style:{paddingBottom:" 85px"}},a.default.createElement("header",{style:{width:"100%",height:"55px",borderTop:"5px solid #d9d5d5"}},a.default.createElement("div",{style:{float:"left",marginLeft:(0,m.toRem)(20),lineHeight:(0,m.toRem)(110),color:"#222",fontSize:(0,m.toRem)(34),fontWeight:"bold"}},"我的录音"),a.default.createElement("div",{style:{float:"right",marginRight:(0,m.toRem)(20)},onClick:function(){if(!0===n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"validUserBindDevice",e).call(e,t,l))return c<1?void l("暂无录音"):void(0,m.linkTo)("user/recordings",!1,null)}},a.default.createElement("span",{style:{lineHeight:(0,m.toRem)(110),color:"#999",fontSize:(0,m.toRem)(24)}},"共",c,"首"),a.default.createElement(H,{style:{position:"relative",top:(0,m.toRem)(5),marginLeft:(0,m.toRem)(20),color:"#ff7d4f",width:(0,m.toRem)(30),height:(0,m.toRem)(30)}}))),a.default.createElement(v.default,{data:u,operateClick:function(t){e.setState({deleteRecordingUid:t,open:!0})}})),a.default.createElement(y.default,{selectedIndex:2}),a.default.createElement(A.default,{open:this.state.open,onRequestChange:function(){e.setState({open:!1})},actions:[a.default.createElement(R.FlatButton,{style:{width:"80%",height:"80%",color:"#ff6832"},labelStyle:{fontSize:(0,m.toRem)(38)},label:"删除",primary:!0,onClick:function(){var t=e.state.deleteRecordingUid,r={uid:t};e.props.deleteRecordingAction(r,(0,m.reqHeader)(r),function(t){if(1===t.status){var r={pageSize:9,currentPage:1};e.props.getRecordsListAction(r,(0,m.reqHeader)(r))}e.setState({open:!1})})}})]}))}},{key:"updateRecordsList",value:function(){var e=this,t=this.props.recordsList.recordsListData||{},r=t.data,o=r||{result:[]},n=o.result;this.setState({recordsListTotalCounts:r.totalCount,recordsListData:n.filter(function(t){return t.defaultImg=e.randomDefaultImg(),t})})}},{key:"showVIPStatus",value:function(e){var t=this,r=e.vipStatus;1!==e.isReDevice&&(r=-1);var o={bgColor:0===r?"#373737":"#1f100f",imgUrl:0===r?L.default:P.default,content:null,contentColor:0===r?"#fff":"#f3c752",rightColor:0===r?"#fff":"#f3c752",borderColor:0===r?"#ababaa":"#ffcb63",_content:function(e){return e?a.default.createElement("div",{style:{marginLeft:(0,m.toRem)(15),marginRight:(0,m.toRem)(15),lineHeight:(0,m.toRem)(50),fontSize:(0,m.toRem)(24),color:o.contentColor}},e):a.default.createElement("img",{style:{marginLeft:(0,m.toRem)(15),marginRight:(0,m.toRem)(15),width:(0,m.toRem)(86),height:(0,m.toRem)(22)},src:S.default,alt:"VIP充值"})}};switch(r){case-1:o.content=o._content();break;case 0:o.content=o._content("VIP已过期");break;case 1:o.content=o._content((0,m.timeToYmd)(e.expireTime,".")+"到期");break;default:o.content=o._content()}return a.default.createElement("div",{style:{display:"flex",alignItems:"center",height:(0,m.toRem)(50),backgroundColor:o.bgColor,borderRadius:(0,m.toRem)(10),border:(0,m.toRem)(2)+" solid "+o.borderColor,boxSizing:"initial"},onTouchTap:function(){if(!0===n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"validUserBindDevice",t).call(t,t.props.userInfo.userInfoData,t.props.action_setGlobAlert)){if(n(UserIndex.prototype.__proto__||Object.getPrototypeOf(UserIndex.prototype),"isFreeActivation",t).call(t,t.props.userInfo.userInfoData))return void(0,m.linkTo)("pay/deviceRegister",!1,null);window.sysInfo.isIos?location.href="/pay/home":(0,m.linkTo)("pay/home",!1,null)}}},a.default.createElement("img",{style:{width:(0,m.toRem)(100),height:(0,m.toRem)(50)},src:o.imgUrl,alt:""}),o.content,a.default.createElement(G,{style:{marginRight:(0,m.toRem)(15),color:o.rightColor,width:(0,m.toRem)(16.5),height:(0,m.toRem)(24)}}))}},{key:"randomDefaultImg",value:function(){return"../../../img/album/"+(parseInt(3*Math.random(),10)+1)+".png"}}]),UserIndex}(g.default);V.defaultProps={userInfo:{},recordsList:{}},V.propTypes={userInfo:d.default.object,recordsList:d.default.object};var Y=function(e,t){return{userInfo:e.app.user.userInfo,recordsList:e.app.songs}},F=function(e,t){return{userInfoAction:(0,s.default)(p.getUserInfo,e),action_setGlobAlert:(0,s.default)(q.setGlobAlert,e),deleteRecordingAction:(0,s.default)(p.deleteRecording,e),getRecordsListAction:(0,s.default)(p.getRecordsList,e)}};t.default=(0,u.withRouter)((0,l.connect)(Y,F)(V))},765:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=r(0),i=r(283),a=_interopRequireDefault(i),l=(r(106),r(105),r(19)),u=_interopRequireDefault(l),c=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),a.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),o(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(r){var o={};o[e]=r,t.setState(o)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,r){var o=t||{},n=o.data,i=n||{},a=i.systemTime,l=i.timeStamp,c=this.isVip(e),s=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof s)return r&&r(s),"正在获取用户信息";if(!1===s)return r&&r("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===s){if(!0===f)return r&&r("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!a||!l)&&!(a-l>72e4)}()?!1!==c||(r&&r("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(r&&r("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var r=this.isBindDevice(e);return"string"==typeof r?(t&&t(r),r):!1===r?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===r||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var r=e||{},o=r.data,n=o||{},i=n.systemTime,a=n.timeStamp;if(i&&a){return!!!(i-a>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},r=t.status,o=t.data;if(void 0!==r){return 1===o.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},r=t.status,o=t.msg,n=t.data;if(void 0!==r){if(-100===r)return"请使用微信操作";if(1===r){var i=n.isReDevice;n.bindExpireTime;return 1===i}return o||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},r=t.status,o=t.data;if(void 0!==r){var n=o.vipStatus,i=o.expireTime;return 1===n&&(new Date).getTime()<i}return"正在获取用户信息"}}]),BaseComponent}(n.Component);t.default=c},767:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(0),a=_interopRequireDefault(i),l=r(169),u=r(282),c=r(1),s=_interopRequireDefault(c),f=r(765),d=_interopRequireDefault(f),p=r(25),m=r(105),h=r(768),g=_interopRequireDefault(h),b=r(769),y=_interopRequireDefault(b),_=r(770),v=_interopRequireDefault(_),R=r(771),E=_interopRequireDefault(R),C=r(772),w=_interopRequireDefault(C),I={nav:{height:"1.4rem",position:"fixed",borderTop:"1px solid #efeeef",bottom:-1,zIndex:"2",playController:{position:"relative",paddingLeft:0,paddingRight:0,circle:{position:"absolute",top:"-.93rem",height:"2.4rem",arc:{border:"1px solid #efeeef",position:"absolute",marginLeft:"-.907rem",left:"50%",width:"1.813rem",height:"1.067rem",bottom:"1.1rem",borderRadius:"1.067rem 1.067rem 0 0",backgroundColor:"white"},maskLine:{height:"1.493rem",borderTop:"1px solid white",width:"1.707rem",position:"absolute",bottom:0,left:"50%",marginLeft:"-.853rem",backgroundColor:"white"},maskArc:{height:"1.467rem",width:"100%",position:"absolute",bottom:0,backgroundColor:"white"},icon:{position:"absolute",left:"50%",marginLeft:"-.7rem",width:"1.4rem",bottom:".56rem",backgroundColor:"#ff6d32",borderRadius:"50%"}}},label:{position:"absolute",width:"100%",textAlign:"center",bottom:4,left:0,fontSize:".267rem"}}},O=function(e){function MBottomNavigation(e){_classCallCheck(this,MBottomNavigation);var t=_possibleConstructorReturn(this,(MBottomNavigation.__proto__||Object.getPrototypeOf(MBottomNavigation)).call(this,e));return t.state={selectedIndex:t.props.selectedIndex},t}return _inherits(MBottomNavigation,e),n(MBottomNavigation,[{key:"render",value:function(){var e=this,t=0===this.state.selectedIndex?y.default:g.default,r=2===this.state.selectedIndex?E.default:v.default,n=["#999","#999","#999"];return n[this.state.selectedIndex]="#ff6832",a.default.createElement(l.BottomNavigation,{selectedIndex:this.state.selectedIndex,style:I.nav},a.default.createElement(l.BottomNavigationItem,{style:{paddingTop:".213rem",paddingBottom:".113rem",maxWidth:"100%"},label:a.default.createElement("div",{style:o({},I.nav.label,{color:n[0],bottom:".107rem"})},"主页"),icon:a.default.createElement("div",{style:{height:".667rem",marginBottom:".4rem",display:"flex",justifyContent:"center",alignItems:"center"}},a.default.createElement("img",{style:{height:".667rem",width:".62rem"},src:t})),onTouchTap:function(){return e.navSelect(0)}}),a.default.createElement(l.BottomNavigationItem,{style:o({},I.nav.playController,{maxWidth:"100%"}),label:a.default.createElement("div",{style:o({},I.nav.label,{color:n[1],bottom:".107rem"})},"播控"),icon:a.default.createElement("div",{style:I.nav.playController.circle},a.default.createElement("div",{style:I.nav.playController.circle.arc}),a.default.createElement("div",{style:I.nav.playController.circle.maskLine}),a.default.createElement("div",{style:I.nav.playController.circle.maskArc}),a.default.createElement("img",{style:I.nav.playController.circle.icon,src:w.default})),onTouchTap:function(){return e.navSelect(1)}}),a.default.createElement(l.BottomNavigationItem,{style:{paddingTop:".213rem",paddingBottom:".113rem",maxWidth:"100%"},label:a.default.createElement("div",{style:o({},I.nav.label,{color:n[2],bottom:".107rem"})},"我的"),icon:a.default.createElement("div",{style:{height:".667rem",marginBottom:".4rem",display:"flex",justifyContent:"center",alignItems:"center"}},a.default.createElement("img",{style:{height:".667rem",width:".667rem"},src:r})),onTouchTap:function(){return e.navSelect(2)}}))}},{key:"navSelect",value:function(e){switch(this.setState({selectedIndex:e}),e){case 0:(0,u.linkTo)("",!1,null);break;case 1:(0,u.linkTo)("controller/",!1,null);break;case 2:(0,u.linkTo)("user",!1,null)}}}]),MBottomNavigation}(d.default);O.propTypes={selectedIndex:s.default.number},O.defaultProps={selectedIndex:0};var x=function(e,t){return{}},D=function(e,t){return{}};t.default=(0,p.withRouter)((0,m.connect)(x,D)(O))},768:function(e,t,r){e.exports=r.p+"img/common/nav_index.png?f587230d14e97fe3edc24933ff28f97c"},769:function(e,t,r){e.exports=r.p+"img/common/nav_index_on.png?b4a94c832861bea691015dd45b804220"},770:function(e,t,r){e.exports=r.p+"img/common/nav_me.png?e84268d0fc58e6264bb6518f670f30b7"},771:function(e,t,r){e.exports=r.p+"img/common/nav_me_on.png?abfda0a35e4303b76b1647488e2c0859"},772:function(e,t,r){e.exports=r.p+"img/common/nav_controll_gif.png?b6c8794a706723245e6e70d34944ded5"},787:function(e,t,r){e.exports=r.p+"img/common/tile_default.jpg?ede3715f1c8a57f43847b8f53ec156a1"},836:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=r(0),i=_interopRequireDefault(n),a=r(282),l=r(169),u=r(837),c=_interopRequireDefault(u),s=r(787),f=_interopRequireDefault(s),d=function(e){function RecordingGrid(e){return _classCallCheck(this,RecordingGrid),_possibleConstructorReturn(this,(RecordingGrid.__proto__||Object.getPrototypeOf(RecordingGrid)).call(this,e))}return _inherits(RecordingGrid,e),o(RecordingGrid,[{key:"render",value:function(){var e=this,t=this.props.data;return i.default.createElement(l.GridList,{cellHeight:"auto",style:{margin:"0 "+(0,a.toRem)(20),clear:"both"},cols:3},t.map(function(t){return i.default.createElement(l.GridTile,{key:t.uid,style:{position:"relative",width:(0,a.toRem)(230),height:(0,a.toRem)(230)}},i.default.createElement("img",{src:t.defaultImg,onError:function(e){e.target.src=f.default},style:{display:"block",margin:"0 auto",width:(0,a.toRem)(230),height:(0,a.toRem)(230)},onTouchTap:function(){(0,a.linkTo)("user/recordings/play/"+t.uid,!1,null)}}),i.default.createElement("div",{style:{position:"absolute",bottom:0,left:0,margin:"0 auto",padding:"0 "+(0,a.toRem)(10),width:(0,a.toRem)(230),height:(0,a.toRem)(60),backgroundColor:"rgba(0, 0, 0, .5)",boxSizing:"border-box"},onClick:function(){e.props.operateClick(t.uid)}},i.default.createElement("div",{style:{display:"inline-block",width:(0,a.toRem)(160),lineHeight:(0,a.toRem)(65),color:"#fff",fontSize:(0,a.toRem)(20),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t.nameNorm),i.default.createElement(c.default,{style:{float:"right",width:(0,a.toRem)(34),height:(0,a.toRem)(60),color:"#fff"}})))}))}}]),RecordingGrid}(i.default.Component);t.default=d},837:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=_interopRequireDefault(o),i=r(23),a=_interopRequireDefault(i),l=r(20),u=_interopRequireDefault(l),c=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))};c=(0,a.default)(c),c.displayName="NavigationMoreHoriz",c.muiName="SvgIcon",t.default=c},838:function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),a=r(282),l=r(290),u=function(e){function BottomDrawer(e){return _classCallCheck(this,BottomDrawer),_possibleConstructorReturn(this,(BottomDrawer.__proto__||Object.getPrototypeOf(BottomDrawer)).call(this,e))}return _inherits(BottomDrawer,e),o(BottomDrawer,[{key:"render",value:function(){var e=this.props.actions,t=[];return e.forEach(function(e,r){t.push(i.default.createElement(l.GridTile,{key:r},i.default.createElement("div",{style:{width:"100%",height:(0,a.toRem)(170),display:"flex",justifyContent:"center",alignItems:"center"}},e)))}),i.default.createElement("div",null,this.props.open&&i.default.createElement("section",{style:{position:"fixed",bottom:0,left:0,width:"100%",height:(0,a.toRem)(170),borderTop:"1px solid #ddd",backgroundColor:"#fff",zIndex:3}},i.default.createElement(l.GridList,{cellHeight:"auto",style:{margin:0,clear:"both"},cols:e.length},t),i.default.createElement("div",{onClick:this.props.onRequestChange,style:{position:"fixed",top:0,right:0,bottom:(0,a.toRem)(170),left:0,backgroundColor:"rgba(0, 0, 0, .3)",zIndex:3}})))}}]),BottomDrawer}(i.default.Component);t.default=u}});