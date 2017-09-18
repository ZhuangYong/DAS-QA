webpackJsonp([11],{755:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(r)},i=r(0),a=_interopRequireDefault(i),l=r(53),u=r(105),s=r(106),c=r(1),f=_interopRequireDefault(c),d=r(289),p=r(282),h=r(765),_=_interopRequireDefault(h),m=r(309),y=_interopRequireDefault(m),g=r(836),b=_interopRequireDefault(g),v=r(838),R=_interopRequireDefault(v),O=r(87),C=_interopRequireDefault(O),E=r(287),w=_interopRequireDefault(E),P=r(786),D=_interopRequireDefault(P),j=r(784),k=_interopRequireDefault(j),T={recordings:{position:"absolute",paddingTop:(0,p.toRem)(20),height:"100%",overflowY:"auto",width:"100%"},loading:{position:"relative",display:"flex",justifyContent:"center",height:(0,p.toRem)(100),fontSize:(0,p.toRem)(28),alignItems:"center",clear:"both"},loadingBar:{boxShadow:"none",top:"none",left:"none",transform:"none",marginLeft:-50}},N=function(e){function Records(e){_classCallCheck(this,Records);var t=_possibleConstructorReturn(this,(Records.__proto__||Object.getPrototypeOf(Records)).call(this,e));return o(Records.prototype.__proto__||Object.getPrototypeOf(Records.prototype),"title",t).call(t,"我的录音"),t.state={recordingList:[],pageSize:20,currentPage:0,loading:!1,lastPage:!1,open:!1,deleteRecordingUid:null,offLine:!1,dataLoaded:!1},t}return _inherits(Records,e),n(Records,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.list.recordsListStamp!==this.props.list.recordsListStamp){var r=this.props.list.recordsListData||{data:{result:[],islastpage:!1}},n=r.data,o=n.result,i=n.islastpage,a=o.filter(function(e){return e.defaultImg=t.randomDefaultImg(),e});this.setState({recordingList:[].concat(_toConsumableArray(this.state.recordingList),_toConsumableArray(a||[])),lastPage:i,loading:!1,dataLoaded:!0})}}},{key:"componentDidMount",value:function(){0===this.state.currentPage&&this.loadMoreAction()}},{key:"render",value:function(){var e=this,t=this.state.recordingList;return a.default.createElement("div",{className:"recordings",style:T.recordings,onScroll:this.onScroll.bind(this)},this.state.offLine&&0!==this.state.currentPage&&0===this.state.pageData.length?a.default.createElement(D.default,{style:{position:"absolute",top:"-1rem"}}):"",this.state.dataLoaded&&this.state.currentPage>=1&&0===t.length?a.default.createElement(k.default,{style:{position:"absolute",top:"-1rem"}}):a.default.createElement("div",null,a.default.createElement(b.default,{data:t,operateClick:function(t){e.setState({deleteRecordingUid:t,open:!0})}}),a.default.createElement("div",{style:T.loading},this.state.loading?a.default.createElement("div",null,a.default.createElement(y.default,{size:30,left:70,top:0,loadingColor:"#FF9800",status:"loading",style:T.loadingBar}),a.default.createElement("span",null,"正在加载")):"",a.default.createElement("span",null,this.state.lastPage?"亲爱滴，已经到底了":""),a.default.createElement("span",null,!this.state.loading&&this.state.offLine&&0!==this.state.currentPage&&0!==t.length?w.default.STRING_NO_WIFI:"")),a.default.createElement(R.default,{open:this.state.open,onRequestChange:function(){e.setState({open:!1})},actions:[a.default.createElement(C.default,{style:{width:"80%",height:"80%",color:"#ff6832"},labelStyle:{fontSize:(0,p.toRem)(38)},label:"删除",primary:!0,onClick:function(){var t=e,r=e.state.deleteRecordingUid,n={uid:r};e.props.deleteRecordingAction(n,(0,p.reqHeader)(n),function(e){if(1===e.status){var n=t.state.recordingList;t.setState({open:!1,recordingList:n.filter(function(e){if(e.uid!==r)return e})})}})}})]})))}},{key:"onScroll",value:function(e){if(!this.state.loading&&e.target.classList&&e.target.classList.contains("recordings")){e.target.scrollHeight-(e.target.scrollTop+e.target.clientHeight)<50&&this.loadMoreAction()}}},{key:"loadMoreAction",value:function(){var e=this;if(!this.state.loading&&!this.state.lastPage){var t=this.state.currentPage+1,r=this.state.pageSize,n={currentPage:t,pageSize:r};this.props.getRecordsListActions(n,(0,p.reqHeader)(n),null,function(t,r){r.code===w.default.CODE_OFF_LINE&&e.setState({offLine:!0,loading:!1})}),this.setState({currentPage:t,loading:!0})}}},{key:"randomDefaultImg",value:function(){return"../../../../img/album/"+(parseInt(3*Math.random(),10)+1)+".png"}}]),Records}(_.default);N.defaultProps={list:{recordsListData:{}}},N.propTypes={list:f.default.object};var S=function(e,t){return{list:e.app.songs}},L=function(e,t){return{deleteRecordingAction:(0,l.bindActionCreators)(d.deleteRecording,e),getRecordsListActions:(0,l.bindActionCreators)(d.getRecordsList,e)}};t.default=(0,s.withRouter)((0,u.connect)(S,L)(N))},765:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),i=r(283),a=_interopRequireDefault(i),l=(r(106),r(105),r(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),a.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),n(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(r){var n={};n[e]=r,t.setState(n)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,r){var n=t||{},o=n.data,i=o||{},a=i.systemTime,l=i.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof c)return r&&r(c),"正在获取用户信息";if(!1===c)return r&&r("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===f)return r&&r("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!a||!l)&&!(a-l>72e4)}()?!1!==s||(r&&r("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(r&&r("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var r=this.isBindDevice(e);return"string"==typeof r?(t&&t(r),r):!1===r?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===r||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var r=e||{},n=r.data,o=n||{},i=o.systemTime,a=o.timeStamp;if(i&&a){return!!!(i-a>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){return 1===n.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},r=t.status,n=t.msg,o=t.data;if(void 0!==r){if(-100===r)return"请使用微信操作";if(1===r){var i=o.isReDevice;o.bindExpireTime;return 1===i}return n||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){var o=n.vipStatus,i=n.expireTime;return 1===o&&(new Date).getTime()<i}return"正在获取用户信息"}}]),BaseComponent}(o.Component);t.default=s},778:function(e,t,r){e.exports=r.p+"img/common/bg_no_network.png?ec6f187423c8d73d62f1171882f62080"},784:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(0),a=_interopRequireDefault(i),l=r(785),u=_interopRequireDefault(l),s={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c=function(e){function NoResult(e){return _classCallCheck(this,NoResult),_possibleConstructorReturn(this,(NoResult.__proto__||Object.getPrototypeOf(NoResult)).call(this,e))}return _inherits(NoResult,e),o(NoResult,[{key:"render",value:function(){var e=this.props.style||{};return a.default.createElement("div",{style:n({},s.noResult,e)},a.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),a.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},this.props.message||"没有任何东东哟"))}}]),NoResult}(a.default.Component);t.default=c},785:function(e,t,r){e.exports=r.p+"img/common/bg_no_result.png?0e0d84b85deaafc6c825178837effa30"},786:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(0),a=_interopRequireDefault(i),l=r(778),u=_interopRequireDefault(l),s={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c=function(e){function NoWifi(e){return _classCallCheck(this,NoWifi),_possibleConstructorReturn(this,(NoWifi.__proto__||Object.getPrototypeOf(NoWifi)).call(this,e))}return _inherits(NoWifi,e),o(NoWifi,[{key:"render",value:function(){var e=this.props.style||{};return a.default.createElement("div",{style:n({},s.noResult,e)},a.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),a.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},"网络已被带走"))}}]),NoWifi}(a.default.Component);t.default=c},787:function(e,t,r){e.exports=r.p+"img/common/tile_default.jpg?ede3715f1c8a57f43847b8f53ec156a1"},836:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),i=_interopRequireDefault(o),a=r(282),l=r(169),u=r(837),s=_interopRequireDefault(u),c=r(787),f=_interopRequireDefault(c),d=function(e){function RecordingGrid(e){return _classCallCheck(this,RecordingGrid),_possibleConstructorReturn(this,(RecordingGrid.__proto__||Object.getPrototypeOf(RecordingGrid)).call(this,e))}return _inherits(RecordingGrid,e),n(RecordingGrid,[{key:"render",value:function(){var e=this,t=this.props.data;return i.default.createElement(l.GridList,{cellHeight:"auto",style:{margin:"0 "+(0,a.toRem)(20),clear:"both"},cols:3},t.map(function(t){return i.default.createElement(l.GridTile,{key:t.uid,style:{position:"relative",width:(0,a.toRem)(230),height:(0,a.toRem)(230)}},i.default.createElement("img",{src:t.defaultImg,onError:function(e){e.target.src=f.default},style:{display:"block",margin:"0 auto",width:(0,a.toRem)(230),height:(0,a.toRem)(230)},onTouchTap:function(){(0,a.linkTo)("user/recordings/play/"+t.uid,!1,null)}}),i.default.createElement("div",{style:{position:"absolute",bottom:0,left:0,margin:"0 auto",padding:"0 "+(0,a.toRem)(10),width:(0,a.toRem)(230),height:(0,a.toRem)(60),backgroundColor:"rgba(0, 0, 0, .5)",boxSizing:"border-box"},onClick:function(){e.props.operateClick(t.uid)}},i.default.createElement("div",{style:{display:"inline-block",width:(0,a.toRem)(160),lineHeight:(0,a.toRem)(65),color:"#fff",fontSize:(0,a.toRem)(20),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},t.nameNorm),i.default.createElement(s.default,{style:{float:"right",width:(0,a.toRem)(34),height:(0,a.toRem)(60),color:"#fff"}})))}))}}]),RecordingGrid}(i.default.Component);t.default=d},837:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=_interopRequireDefault(n),i=r(23),a=_interopRequireDefault(i),l=r(20),u=_interopRequireDefault(l),s=function(e){return o.default.createElement(u.default,e,o.default.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))};s=(0,a.default)(s),s.displayName="NavigationMoreHoriz",s.muiName="SvgIcon",t.default=s},838:function(e,t,r){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=r(282),l=r(290),u=function(e){function BottomDrawer(e){return _classCallCheck(this,BottomDrawer),_possibleConstructorReturn(this,(BottomDrawer.__proto__||Object.getPrototypeOf(BottomDrawer)).call(this,e))}return _inherits(BottomDrawer,e),n(BottomDrawer,[{key:"render",value:function(){var e=this.props.actions,t=[];return e.forEach(function(e,r){t.push(i.default.createElement(l.GridTile,{key:r},i.default.createElement("div",{style:{width:"100%",height:(0,a.toRem)(170),display:"flex",justifyContent:"center",alignItems:"center"}},e)))}),i.default.createElement("div",null,this.props.open&&i.default.createElement("section",{style:{position:"fixed",bottom:0,left:0,width:"100%",height:(0,a.toRem)(170),borderTop:"1px solid #ddd",backgroundColor:"#fff",zIndex:3}},i.default.createElement(l.GridList,{cellHeight:"auto",style:{margin:0,clear:"both"},cols:e.length},t),i.default.createElement("div",{onClick:this.props.onRequestChange,style:{position:"fixed",top:0,right:0,bottom:(0,a.toRem)(170),left:0,backgroundColor:"rgba(0, 0, 0, .3)",zIndex:3}})))}}]),BottomDrawer}(i.default.Component);t.default=u}});