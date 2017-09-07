webpackJsonp([12],{1081:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getPayList(e,t){var i=s.default.apiDomain+l.default.API_GET_PAY_LIST;return function(n){(0,o.comFetch)(n,e,{url:i,headers:t,action:a.default.Pay.API_GET_PAY_LIST},null)}}function alipayPay(e,t,i){var n=s.default.apiDomain+l.default.API_ALI_PAY;return function(r){(0,o.comFetch)(r,e,{url:n,headers:t,action:a.default.Pay.API_ALI_PAY},i)}}function getWXPayParams(e,t,i){var n=s.default.apiDomain+l.default.API_GET_WX_PAY_PARAMS;return function(r){(0,o.comFetch)(r,e,{url:n,headers:t,action:a.default.Pay.API_GET_WX_PAY_PARAMS},i)}}function deviceRegister(e,t,i){var n=s.default.apiDomain+l.default.API_DEVICE_REGISTER;return function(r){(0,o.comFetch)(r,e,{url:n,headers:t,action:a.default.Pay.API_DEVICE_REGISTER},i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getPayList=getPayList,t.alipayPay=alipayPay,t.getWXPayParams=getWXPayParams,t.deviceRegister=deviceRegister;var n=i(19),a=_interopRequireDefault(n),o=i(24),r=i(107),l=_interopRequireDefault(r),u=i(72),s=_interopRequireDefault(u)},1082:function(e,t,i){e.exports=i.p+"img/pay_checkbox.png?81f8f0bdb47f6d94c2de0019da4168eb"},1083:function(e,t,i){e.exports=i.p+"img/pay_checkbox_selected.png?104f6aa31af1199d32d4fca5dcdad166"},1084:function(e,t,i){e.exports=i.p+"img/pay_success.png?8b79c70c6f9f2d8b921f2325eb944b28"},1085:function(e,t,i){e.exports=i.p+"img/pay_failed.png?32a85b1855933e80779c5f89a53700c3"},1086:function(e,t,i){e.exports=i.p+"img/device_register.png?cde4598d9f64e073eaa7d4ac7a22c031"},758:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),a=function get(e,t,i){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,i)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(i)},o=i(0),r=_interopRequireDefault(o),l=i(762),u=_interopRequireDefault(l),s=i(105),c=i(106),p=i(287),d=_interopRequireDefault(p),f=i(1),y=_interopRequireDefault(f),h=i(1081),b=i(282),m=i(283),g=_interopRequireDefault(m),_=i(1082),v=_interopRequireDefault(_),P=i(1083),E=_interopRequireDefault(P),w=i(1084),x=_interopRequireDefault(w),C=i(1085),A=_interopRequireDefault(C),I=i(1086),R=_interopRequireDefault(I),k=i(791),S=_interopRequireDefault(k),O=i(113),T=_interopRequireDefault(O),D=i(88),L=_interopRequireDefault(D),B=i(286),q=i(288),j={itemBox:{width:"100%",height:"50px",backgroundColor:"#fff",boxSizing:"border-box",borderBottom:"1px solid #b2b2b2"},itemBoxActive:{width:"100%",height:"50px",backgroundColor:"#e8e2d8",boxSizing:"border-box",borderBottom:"1px solid #b2b2b2"},itemLeft:{float:"left",marginLeft:"20px",maxWidth:"70%",lineHeight:"50px",fontSize:"16px",color:"#252525"},itemRight:{float:"right",marginRight:"20px",maxWidth:"20%",lineHeight:"50px",fontSize:"16px",color:"#c48848"}},M=function(e){function Pay(e){_classCallCheck(this,Pay);var t=_possibleConstructorReturn(this,(Pay.__proto__||Object.getPrototypeOf(Pay)).call(this,e));a(Pay.prototype.__proto__||Object.getPrototypeOf(Pay.prototype),"title",t).call(t,"支付");var i={state:(0,b.getQueryString)("state")||"",pollingId:(0,b.getQueryString)("pollingId")||"",deviceId:(0,b.getQueryString)("deviceId")||"",openid:(0,b.getQueryString)("openid")||""};return t.state={matchParams:i,payListActiveItem:{productId:null,price:null},isCheckboxChecked:!0,payList:[],buttonPage:null,openDialog:!1},t.pay=t.pay.bind(t),t.wxPay=t.wxPay.bind(t),t.aliPay=t.aliPay.bind(t),t.handleClose=t.handleClose.bind(t),t.handleAction=t.handleAction.bind(t),t}return _inherits(Pay,e),n(Pay,[{key:"componentDidUpdate",value:function(e){e.result.payListStamp!==this.props.result.payListStamp&&this.updatePayList()}},{key:"componentDidMount",value:function(){this.matchPages()}},{key:"render",value:function(){var e=this,t=this.state.payList,i=this.state.payListActiveItem,n=this.state.isCheckboxChecked,a=this.state.matchParams,o=[r.default.createElement(L.default,{className:"cancel-button",label:"以后再说",primary:!0,onClick:this.handleClose}),r.default.createElement(L.default,{className:"sure-button",label:"立即开通",primary:!0,onClick:this.handleAction})];return r.default.createElement("div",null,"home"===a.state?r.default.createElement("div",null,r.default.createElement("section",null,r.default.createElement("header",{style:j.itemBox},r.default.createElement("div",{style:j.itemLeft},"VIP会员套餐")),r.default.createElement("ul",{style:{padding:0,margin:0,listStyle:"none"}},t.map(function(t){return r.default.createElement("li",{key:t.productId,style:i.productId===t.productId?j.itemBoxActive:j.itemBox,onTouchTap:function(){e.setState({payListActiveItem:t})}},r.default.createElement("div",{style:j.itemLeft},t.productName),r.default.createElement("div",{style:j.itemRight},t.price))})),r.default.createElement("div",{style:j.itemLeft},r.default.createElement("input",{type:"checkbox",id:"payCheckBox",style:{display:"none"},checked:n,onChange:function(){e.setState({isCheckboxChecked:!n})}}),r.default.createElement("label",{htmlFor:"payCheckBox"},r.default.createElement("img",{src:n?E.default:v.default,alt:"",style:{position:"relative",top:"2px",marginRight:"5px",width:"15px",height:"15px"}}),"同意并阅读"),r.default.createElement("span",{style:{color:"#2522ff"},onTouchTap:function(){(0,b.linkTo)("protocol",!1,null)}},"《金麦客支付协议》"))),r.default.createElement(S.default,{style:{position:"relative",paddingTop:"20px",height:"100px",clear:"both"},headerDom:r.default.createElement("div",{style:{marginBottom:"20px",textAlign:"center",color:"#252525",fontSize:"14px"}},"支付金额: ",r.default.createElement("span",{style:{color:"#c48848"}},i.price,"元")),disabled:!(n&&null!==i.productId),raisedButtonStyles:{bottom:0},buttonLabel:"确认支付",touchTap:this.pay})):this.state.buttonPage,r.default.createElement("div",null,r.default.createElement(T.default,{className:"dialog-panel",actionsContainerStyle:{borderTop:".01rem solid #e0e0e0",textAlign:"center"},contentStyle:{textAlign:"center"},actions:o,modal:!1,open:this.state.openDialog,onRequestClose:this.handleClose},"确定开通金麦客VIP体验权")))}},{key:"handleAction",value:function(){var e=this.props.action_setGlobAlert,t=this.props.getUserInfoAction;this.setState({openDialog:!1});var i={};this.props.deviceRegisterAction(i,(0,b.reqHeader)(i),function(i){1===i.status?(e("成功开通"),t({},(0,b.reqHeader)({}))):e("开通失败"),window.history.back()})}},{key:"handleClose",value:function(){this.setState({openDialog:!1})}},{key:"pay",value:function(){window.sysInfo.isWeixin?this.wxPay():this.aliPay()}},{key:"wxPay",value:function(){var e=this.props.action_setGlobAlert,t=this.props.getUserInfoAction,i=this.state.payListActiveItem.productId,n=this.state.matchParams,a=null,o={productId:i};""!==n.openid?(o.uuid=n.pollingId,o.openid=n.openid,a=(0,b.reqHeader)(o,(0,b.getEncryptHeader)({deviceId:n.deviceId}))):a=(0,b.reqHeader)(o),this.props.getWXPayParamsAction(o,a,function(i){var a=i.data;window.wx&&window.wx.chooseWXPay({timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(i){e("支付成功"),""!==n.openid?setTimeout(function(){window.WeixinJSBridge.call("closeWindow")},500):(t({},(0,b.reqHeader)({})),window.history.back())},cancel:function(t){e("取消支付"),""!==n.openid?setTimeout(function(){window.WeixinJSBridge.call("closeWindow")},500):window.history.back()},fail:function(t){e("支付失败"),""!==n.openid?setTimeout(function(){window.WeixinJSBridge.call("closeWindow")},500):window.history.back()}})})}},{key:"aliPay",value:function(){var e=this.state.payListActiveItem.productId,t=this.state.matchParams,i={uuid:t.pollingId,productId:e},n=(0,b.getEncryptHeader)({deviceId:t.deviceId});this.props.alipayAction(i,(0,b.reqHeader)(i,n),function(e){var t=e.data;window.location.href=t.payUrl})}},{key:"updatePayList",value:function(){var e=this.props.result.payListData||{data:[]},t=e.data;t&&this.setState({payListActiveItem:t[0],payList:t})}},{key:"matchPages",value:function(){var e=this,t=this.state.matchParams;switch(t.state){case"home":var i={},n=null;n=""!==t.deviceId?(0,b.reqHeader)(i,(0,b.getEncryptHeader)({deviceId:t.deviceId})):(0,b.reqHeader)(i),this.props.getPayListAction(i,n);break;case"aliPaySuccess":this.setState({buttonPage:r.default.createElement(S.default,{src:x.default,content:"充值成功",buttonLabel:"关闭",touchTap:function(){window.AlipayJSBridge.call("closeWebview")}})});break;case"aliPayFailed":this.setState({buttonPage:r.default.createElement(S.default,{src:A.default,content:"充值失败，请重新充值",buttonLabel:"关闭",touchTap:function(){window.AlipayJSBridge.call("closeWebview")}})});break;case"deviceRegister":this.setState({buttonPage:r.default.createElement(S.default,{src:R.default,imgStyle:{width:"162.5px"},content:"恭喜你获得金麦客VIP体验资格哟！",contentStyle:{color:"#c48848"},buttonLabel:"马上体验",touchTap:function(){e.setState({openDialog:!0})}})});break;default:g.default.replace("/*")}}}]),Pay}(u.default);M.defaultProps={result:{}},M.propTypes={result:y.default.object};var N=function(e,t){return{result:e.app.pay}},W=function(e,t){return{getPayListAction:(0,d.default)(h.getPayList,e),action_setGlobAlert:(0,d.default)(B.setGlobAlert,e),getWXPayParamsAction:(0,d.default)(h.getWXPayParams,e),deviceRegisterAction:(0,d.default)(h.deviceRegister,e),getUserInfoAction:(0,d.default)(q.getUserInfo,e),alipayAction:(0,d.default)(h.alipayPay,e)}};t.default=(0,c.withRouter)((0,s.connect)(N,W)(M))},762:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),a=i(0),o=i(283),r=_interopRequireDefault(o),l=(i(106),i(105),i(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),r.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),n(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(i){var n={};n[e]=i,t.setState(n)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,i){var n=t||{},a=n.data,o=a||{},r=o.systemTime,l=o.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),p=this.isFreeActivation(e);if("string"==typeof c)return i&&i(c),"正在获取用户信息";if(!1===c)return i&&i("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===p)return i&&i("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===p)return function(){return!(!r||!l)&&!(r-l>72e4)}()?!1!==s||(i&&i("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(i&&i("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var i=this.isBindDevice(e);return"string"==typeof i?(t&&t(i),i):!1===i?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===i||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var i=e||{},n=i.data,a=n||{},o=a.systemTime,r=a.timeStamp;if(o&&r){return!!!(o-r>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},i=t.status,n=t.data;if(void 0!==i){return 1===n.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},i=t.status,n=t.msg,a=t.data;if(void 0!==i){if(-100===i)return"请使用微信操作";if(1===i){var o=a.isReDevice;a.bindExpireTime;return 1===o}return n||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},i=t.status,n=t.data;if(void 0!==i){var a=n.vipStatus,o=n.expireTime;return 1===a&&(new Date).getTime()<o}return"正在获取用户信息"}}]),BaseComponent}(a.Component);t.default=s},791:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),o=i(0),r=_interopRequireDefault(o),l=i(290),u=_interopRequireDefault(l),s={submitBtn:{position:"absolute",left:"50%",bottom:"80px",marginLeft:"-120px",width:"240px",height:"50px",borderRadius:"50px",overflow:"hidden"}},c=function(e){function ButtonPage(e){return _classCallCheck(this,ButtonPage),_possibleConstructorReturn(this,(ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call(this,e))}return _inherits(ButtonPage,e),a(ButtonPage,[{key:"render",value:function(){return r.default.createElement("section",{style:n({},{width:"100%"},this.props.style)},r.default.createElement("header",null,this.props.headerDom||r.default.createElement("div",null,r.default.createElement("img",{style:n({},{display:"block",margin:"130px auto 0",width:"100px"},this.props.imgStyle),src:this.props.src,alt:""}),r.default.createElement("div",{style:n({},{marginTop:"8px",textAlign:"center",color:"#ff8632",fontSize:"18px"},this.props.contentStyle)},this.props.content))),!this.props.hideButton&&r.default.createElement(u.default,{disabled:this.props.disabled,backgroundColor:"#ff8632",disabledBackgroundColor:"#ccc",label:this.props.buttonLabel,style:n({},s.submitBtn,this.props.raisedButtonStyles),buttonStyle:this.props.buttonStyles,labelStyle:n({},{lineHeight:"50px",fontSize:"18px",color:"#fff"},this.props.buttonLabelStyles),onClick:this.props.touchTap}))}}]),ButtonPage}(r.default.Component);t.default=c}});