webpackJsonp([12],{1065:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getPayList(e,t){var n=s.default.apiDomain+l.default.API_GET_PAY_LIST;return function(a){(0,r.comFetch)(a,e,{url:n,headers:t,action:i.default.Pay.API_GET_PAY_LIST},null)}}function alipayPay(e,t,n){var a=s.default.apiDomain+l.default.API_ALI_PAY;return function(o){(0,r.comFetch)(o,e,{url:a,headers:t,action:i.default.Pay.API_ALI_PAY},n)}}function getWXPayParams(e,t,n){var a=s.default.apiDomain+l.default.API_GET_WX_PAY_PARAMS;return function(o){(0,r.comFetch)(o,e,{url:a,headers:t,action:i.default.Pay.API_GET_WX_PAY_PARAMS},n)}}function deviceRegister(e,t,n){var a=s.default.apiDomain+l.default.API_DEVICE_REGISTER;return function(o){(0,r.comFetch)(o,e,{url:a,headers:t,action:i.default.Pay.API_DEVICE_REGISTER},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getPayList=getPayList,t.alipayPay=alipayPay,t.getWXPayParams=getWXPayParams,t.deviceRegister=deviceRegister;var a=n(19),i=_interopRequireDefault(a),r=n(23),o=n(103),l=_interopRequireDefault(o),u=n(70),s=_interopRequireDefault(u)},1066:function(e,t,n){e.exports=n.p+"img/pay_checkbox.png?81f8f0bdb47f6d94c2de0019da4168eb"},1067:function(e,t,n){e.exports=n.p+"img/pay_checkbox_selected.png?104f6aa31af1199d32d4fca5dcdad166"},1068:function(e,t,n){e.exports=n.p+"img/pay_success.png?8b79c70c6f9f2d8b921f2325eb944b28"},1069:function(e,t,n){e.exports=n.p+"img/pay_failed.png?32a85b1855933e80779c5f89a53700c3"},1070:function(e,t,n){e.exports=n.p+"img/device_register.png?cde4598d9f64e073eaa7d4ac7a22c031"},744:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in a)return a.value;var r=a.get;if(void 0!==r)return r.call(n)},r=n(0),o=_interopRequireDefault(r),l=n(747),u=_interopRequireDefault(l),s=n(101),c=n(102),p=n(282),f=_interopRequireDefault(p),d=n(1),y=_interopRequireDefault(d),h=n(1065),b=n(277),m=n(278),_=_interopRequireDefault(m),v=n(1066),g=_interopRequireDefault(v),P=n(1067),E=_interopRequireDefault(P),x=n(1068),C=_interopRequireDefault(x),A=n(1069),w=_interopRequireDefault(A),R=n(1070),k=_interopRequireDefault(R),I=n(776),O=_interopRequireDefault(I),D=n(109),S=_interopRequireDefault(D),T=n(86),L=_interopRequireDefault(T),B=n(281),q=n(283),j={itemBox:{width:"100%",height:"50px",backgroundColor:"#fff",boxSizing:"border-box",borderBottom:"1px solid #b2b2b2"},itemBoxActive:{width:"100%",height:"50px",backgroundColor:"#e8e2d8",boxSizing:"border-box",borderBottom:"1px solid #b2b2b2"},itemLeft:{float:"left",marginLeft:"20px",maxWidth:"70%",lineHeight:"50px",fontSize:"16px",color:"#252525"},itemRight:{float:"right",marginRight:"20px",maxWidth:"20%",lineHeight:"50px",fontSize:"16px",color:"#c48848"}},M=function(e){function Pay(e){_classCallCheck(this,Pay);var t=_possibleConstructorReturn(this,(Pay.__proto__||Object.getPrototypeOf(Pay)).call(this,e));return i(Pay.prototype.__proto__||Object.getPrototypeOf(Pay.prototype),"title",t).call(t,"支付"),t.state={matchParams:t.props.match.params,payListActiveItem:{productId:null,price:null},isCheckboxChecked:!0,payList:[],buttonPage:null,openDialog:!1},t.pay=t.pay.bind(t),t.wxPay=t.wxPay.bind(t),t.aliPay=t.aliPay.bind(t),t.handleClose=t.handleClose.bind(t),t.handleAction=t.handleAction.bind(t),t}return _inherits(Pay,e),a(Pay,[{key:"componentDidUpdate",value:function(e){e.result.payListStamp!==this.props.result.payListStamp&&this.updatePayList()}},{key:"componentDidMount",value:function(){this.matchPages()}},{key:"render",value:function(){var e=this,t=this.state.payList,n=this.state.payListActiveItem,a=this.state.isCheckboxChecked,i=this.state.matchParams,r=[o.default.createElement(L.default,{className:"cancel-button",label:"以后再说",primary:!0,onClick:this.handleClose}),o.default.createElement(L.default,{className:"sure-button",label:"立即开通",primary:!0,onClick:this.handleAction})];return o.default.createElement("div",null,"home"===i.state?o.default.createElement("div",null,o.default.createElement("section",null,o.default.createElement("header",{style:j.itemBox},o.default.createElement("div",{style:j.itemLeft},"VIP会员套餐")),o.default.createElement("ul",{style:{padding:0,margin:0,listStyle:"none"}},t.map(function(t){return o.default.createElement("li",{key:t.productId,style:n.productId===t.productId?j.itemBoxActive:j.itemBox,onTouchTap:function(){e.setState({payListActiveItem:t})}},o.default.createElement("div",{style:j.itemLeft},t.productName),o.default.createElement("div",{style:j.itemRight},t.price))})),o.default.createElement("div",{style:j.itemLeft},o.default.createElement("input",{type:"checkbox",id:"payCheckBox",style:{display:"none"},checked:a,onChange:function(){e.setState({isCheckboxChecked:!a})}}),o.default.createElement("label",{htmlFor:"payCheckBox"},o.default.createElement("img",{src:a?E.default:g.default,alt:"",style:{position:"relative",top:"2px",marginRight:"5px",width:"15px",height:"15px"}}),"同意并阅读"),o.default.createElement("span",{style:{color:"#2522ff"},onTouchTap:function(){(0,b.linkTo)("protocol",!1,null)}},"《金麦客支付协议》"))),o.default.createElement(O.default,{style:{position:"relative",paddingTop:"20px",height:"100px",clear:"both"},headerDom:o.default.createElement("div",{style:{marginBottom:"20px",textAlign:"center",color:"#252525",fontSize:"14px"}},"支付金额: ",o.default.createElement("span",{style:{color:"#c48848"}},n.price,"元")),disabled:!(a&&null!==n.productId),raisedButtonStyles:{bottom:0},buttonLabel:"确认支付",touchTap:this.pay})):this.state.buttonPage,o.default.createElement("div",null,o.default.createElement(S.default,{className:"dialog-panel",actionsContainerStyle:{borderTop:".01rem solid #e0e0e0",textAlign:"center"},contentStyle:{textAlign:"center"},actions:r,modal:!1,open:this.state.openDialog,onRequestClose:this.handleClose},"确定开通金麦客VIP体验权")))}},{key:"handleAction",value:function(){var e=this.props.action_setGlobAlert,t=this.props.getUserInfoAction;this.setState({openDialog:!1});var n={};this.props.deviceRegisterAction(n,(0,b.reqHeader)(n),function(n){1===n.status?(e("成功开通"),t({},(0,b.reqHeader)({}))):e("开通失败"),window.history.back()})}},{key:"handleClose",value:function(){this.setState({openDialog:!1})}},{key:"pay",value:function(){window.sysInfo.isWeixin?this.wxPay():this.aliPay()}},{key:"wxPay",value:function(){var e=this.props.action_setGlobAlert,t=this.props.getUserInfoAction,n=this.state.payListActiveItem.productId,a=this.state.matchParams,i=null,r={productId:n};void 0!==a.openid?(r.uuid=a.pollingId,r.openid=a.openid,i=(0,b.reqHeader)(r,(0,b.getEncryptHeader)({deviceId:a.deviceId}))):i=(0,b.reqHeader)(r),this.props.getWXPayParamsAction(r,i,function(n){var a=n.data;window.wx.chooseWXPay({timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(n){e("支付成功"),t({},(0,b.reqHeader)({})),window.history.back()},cancel:function(t){e("取消支付"),window.history.back()},fail:function(t){e("支付失败"),window.history.back()}})})}},{key:"aliPay",value:function(){var e=this.state.payListActiveItem.productId,t=this.state.matchParams,n={uuid:t.pollingId,productId:e},a=(0,b.getEncryptHeader)({deviceId:t.deviceId});this.props.alipayAction(n,(0,b.reqHeader)(n,a),function(e){var t=e.data;window.location.href=t.payUrl})}},{key:"updatePayList",value:function(){var e=this.props.result.payListData||{data:[]},t=e.data;t&&this.setState({payListActiveItem:t[0],payList:t})}},{key:"matchPages",value:function(){var e=this,t=this.state.matchParams;switch(t.state){case"home":var n={},a=null;a=void 0!==t.deviceId?(0,b.reqHeader)(n,(0,b.getEncryptHeader)({deviceId:t.deviceId})):(0,b.reqHeader)(n),this.props.getPayListAction(n,a);break;case"aliPaySuccess":this.setState({buttonPage:o.default.createElement(O.default,{src:C.default,content:"充值成功",buttonLabel:"关闭",touchTap:function(){window.AlipayJSBridge.call("closeWebview")}})});break;case"aliPayFailed":this.setState({buttonPage:o.default.createElement(O.default,{src:w.default,content:"充值失败，请重新充值",buttonLabel:"关闭",touchTap:function(){window.AlipayJSBridge.call("closeWebview")}})});break;case"deviceRegister":this.setState({buttonPage:o.default.createElement(O.default,{src:k.default,imgStyle:{width:"162.5px"},content:"恭喜你获得金麦客VIP体验资格哟！",contentStyle:{color:"#c48848"},buttonLabel:"马上体验",touchTap:function(){e.setState({openDialog:!0})}})});break;default:_.default.replace("/*")}}}]),Pay}(u.default);M.defaultProps={result:{}},M.propTypes={result:y.default.object};var N=function(e,t){return{result:e.app.pay}},H=function(e,t){return{getPayListAction:(0,f.default)(h.getPayList,e),action_setGlobAlert:(0,f.default)(B.setGlobAlert,e),getWXPayParamsAction:(0,f.default)(h.getWXPayParams,e),deviceRegisterAction:(0,f.default)(h.deviceRegister,e),getUserInfoAction:(0,f.default)(q.getUserInfo,e),alipayAction:(0,f.default)(h.alipayPay,e)}};t.default=(0,c.withRouter)((0,s.connect)(N,H)(M))},747:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(0),r=n(278),o=_interopRequireDefault(r),l=(n(102),n(101),n(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),o.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),a(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var a={};a[e]=n,t.setState(a)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var a=t||{},i=a.data,r=i||{},o=r.systemTime,l=r.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),p=this.isFreeActivation(e);if("string"==typeof c)return n&&n(c),"正在获取用户信息";if(!1===c)return n&&n("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===p)return n&&n("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===p)return function(){return!(!o||!l)&&!(o-l>72e4)}()?!1!==s||(n&&n("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},a=n.data,i=a||{},r=i.systemTime,o=i.timeStamp;if(r&&o){return!!!(r-o>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,a=t.data;if(void 0!==n){return 1===a.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,a=t.msg,i=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var r=i.isReDevice;i.bindExpireTime;return 1===r}return a||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,a=t.data;if(void 0!==n){var i=a.vipStatus,r=a.expireTime;return 1===i&&(new Date).getTime()<r}return"正在获取用户信息"}}]),BaseComponent}(i.Component);t.default=s},776:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(0),o=_interopRequireDefault(r),l=n(285),u=_interopRequireDefault(l),s={submitBtn:{position:"absolute",left:"50%",bottom:"80px",marginLeft:"-120px",width:"240px",height:"50px",borderRadius:"50px",overflow:"hidden"}},c=function(e){function ButtonPage(e){return _classCallCheck(this,ButtonPage),_possibleConstructorReturn(this,(ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call(this,e))}return _inherits(ButtonPage,e),i(ButtonPage,[{key:"render",value:function(){return o.default.createElement("section",{style:a({},{width:"100%"},this.props.style)},o.default.createElement("header",null,this.props.headerDom||o.default.createElement("div",null,o.default.createElement("img",{style:a({},{display:"block",margin:"130px auto 0",width:"100px"},this.props.imgStyle),src:this.props.src,alt:""}),o.default.createElement("div",{style:a({},{marginTop:"8px",textAlign:"center",color:"#ff8632",fontSize:"18px"},this.props.contentStyle)},this.props.content))),!this.props.hideButton&&o.default.createElement(u.default,{disabled:this.props.disabled,backgroundColor:"#ff8632",disabledBackgroundColor:"#ccc",label:this.props.buttonLabel,style:a({},s.submitBtn,this.props.raisedButtonStyles),buttonStyle:this.props.buttonStyles,labelStyle:a({},{lineHeight:"50px",fontSize:"18px",color:"#fff"},this.props.buttonLabelStyles),onClick:this.props.touchTap}))}}]),ButtonPage}(o.default.Component);t.default=c}});