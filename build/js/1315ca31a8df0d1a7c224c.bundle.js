webpackJsonp([13],{1058:function(e,t,n){e.exports=n.p+"img/submit_success.png?8b79c70c6f9f2d8b921f2325eb944b28"},741:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)},o=n(0),a=_interopRequireDefault(o),l=n(745),u=_interopRequireDefault(l),s=n(101),c=n(102),d=n(282),p=_interopRequireDefault(d),f=n(1),h=_interopRequireDefault(f),b=n(283),m=n(277),g=n(284),y=n(285),v=_interopRequireDefault(y),_=n(837),x=_interopRequireDefault(_),C=n(838),E=_interopRequireDefault(C),k=n(1058),w=_interopRequireDefault(k),P=n(278),O=_interopRequireDefault(P),I=n(774),T=_interopRequireDefault(I),S=n(281),B={sectionHeader:{paddingLeft:"10px",width:"100%",height:"50px",lineHeight:"50px",fontSize:"18px"},questionsTile:{boxSizing:"border-box",padding:"5px"},questionsContent:{width:"100%",height:"100%",backgroundColor:"#bcbcbc",lineHeight:"30px",textAlign:"center",borderRadius:"4px",color:"#080808",fontSize:"14px"},questionsContentActive:{width:"100%",height:"100%",backgroundColor:"#ff8632",lineHeight:"30px",textAlign:"center",borderRadius:"4px",color:"#fff",fontSize:"14px"},questionDesc:{paddingTop:"5px",paddingRight:"10px",paddingLeft:"10px",width:"100%",height:"120px",color:"#040404",fontSize:"14px",border:"none",resize:"none",boxSizing:"border-box"},questionDescTip:{paddingRight:"10px",width:"100%",height:"30px",lineHeight:"30px",backgroundColor:"#fff",marginTop:"-5px",fontSize:"14px",textAlign:"right",color:"#808080"},submitBtn:{display:"block",borderRadius:"50px",margin:"0 auto",width:"240px",height:"50px"}},R={isShowAddBtn:!0,id:"addBtn"},D=function(e){function Feedback(e){_classCallCheck(this,Feedback);var t=_possibleConstructorReturn(this,(Feedback.__proto__||Object.getPrototypeOf(Feedback)).call(this,e));return r(Feedback.prototype.__proto__||Object.getPrototypeOf(Feedback.prototype),"title",t).call(t,"意见反馈"),t.state={matchParams:t.props.match.params,questionList:[],imgList:[R],submitParams:{questionIds:null,content:"",imgIds:null,tel:null}},t.addBtnClick=t.addBtnClick.bind(t),t.submit=t.submit.bind(t),t.closePage=t.closePage.bind(t),t}return _inherits(Feedback,e),i(Feedback,[{key:"componentDidUpdate",value:function(e){var t=this.props.match.params;e.match.params.state!==t.state&&this.setState({matchParams:t})}},{key:"componentDidMount",value:function(){var e={};this.props.getFeedbackQuestionListAction(e,(0,m.reqHeader)(e))}},{key:"render",value:function(){var e=this,t=this.props.questionList.questionListData||{data:{}},n=t.data,i=n||{},r=i.result,o=r||[],l=this.state.submitParams;return null===l.questionIds&&o[0]&&(l.questionIds=o[0].id),a.default.createElement("div",null,this.matchPages()?a.default.createElement("div",null,a.default.createElement("section",{style:{backgroundColor:"#eee"}},a.default.createElement("header",null,a.default.createElement("div",{style:B.sectionHeader},"问题类型")),a.default.createElement(g.GridList,{cellHeight:40,cols:3,padding:0,style:{paddingLeft:"5px",paddingRight:"5px"}},o.map(function(t){return a.default.createElement(g.GridTile,{key:t.id,style:B.questionsTile,onTouchTap:function(){l.questionIds=t.id,e.setState({submitParams:l})}},a.default.createElement("div",{style:l.questionIds===t.id?B.questionsContentActive:B.questionsContent},t.questionName))}))),a.default.createElement("section",{style:{backgroundColor:"#eee"}},a.default.createElement("header",null,a.default.createElement("div",{style:B.sectionHeader},"问题描述")),a.default.createElement("textarea",{style:B.questionDesc,placeholder:"亲爱的麦粉，把你遇到的问题或建议写下来吧......",maxLength:"200",onChange:function(t){l.content=t.target.value,l.content.length>=200&&e.props.action_setGlobAlert("字太多啦，不准写了"),e.setState({submitParams:l})}}),a.default.createElement("div",null,a.default.createElement("div",{style:B.questionDescTip},this.state.submitParams.content.length<=0?"至少10个字，最多200字，不然宝宝要生气!":this.state.submitParams.content.length+"/200"))),a.default.createElement("section",{style:{backgroundColor:"#eee"}},a.default.createElement("header",null,a.default.createElement("span",{style:B.sectionHeader},"上传照片"),a.default.createElement("span",{style:{marginLeft:"5px",fontSize:"12px",color:"#808080"}},"最多5张")),a.default.createElement(E.default,{cols:5,badgeBackgroundColor:"#ce0000",itemStyle:{padding:"3px"},badgeContent:a.default.createElement(x.default,{style:{width:"20px",height:"20px"},color:"#fff",onClick:function(t){var n=t.target.parentNode.parentNode.dataset.id,i=e.state.imgList.filter(function(e){if(parseInt(e.id,10)!==parseInt(n,10))return e});i.length>=4&&i[i.length-1].isShowBadge&&i.push(R),e.setState({imgList:i})}}),badgeStyle:{width:"20px",height:"20px"},data:this.state.imgList,addBtnTouchTap:this.addBtnClick})),a.default.createElement("section",{style:{backgroundColor:"#eee"}},a.default.createElement("header",null,a.default.createElement("div",{style:B.sectionHeader},"联系方式")),a.default.createElement("div",{style:{paddingLeft:"10px",paddingRight:"10px"}},a.default.createElement("input",{type:"text",placeholder:"手机、QQ或邮箱",style:{width:"100%",height:"50px",backgroundColor:"#fff",border:"none",fontSize:"18px",textIndent:"10px",borderRadius:"4px"},onChange:function(t){l.tel=t.target.value,e.setState({submitParams:l})}}))),a.default.createElement("section",{style:{backgroundColor:"#eee",padding:"20px 10px"}},a.default.createElement(v.default,{backgroundColor:"#ff8632",disabledBackgroundColor:"#ccc",disabled:null===this.state.submitParams.questionIds||this.state.submitParams.content.length<10,label:"提交",style:B.submitBtn,buttonStyle:B.submitBtn,labelStyle:{lineHeight:"50px",fontSize:"18px",color:"#fff"},onClick:this.submit}))):a.default.createElement(T.default,{src:w.default,content:a.default.createElement("div",null,a.default.createElement("p",{style:{textAlign:"center",color:"#ff8632",fontSize:"16px"}},"提交成功"),a.default.createElement("p",{style:{textAlign:"center",color:"#807f7e",fontSize:"14px"}},"我们将会在第一时间处理，感谢您的反馈！")),imgStyle:{width:"100px"},buttonLabel:"关闭",touchTap:this.closePage}))}},{key:"closePage",value:function(){void 0!==this.state.matchParams.deviceId?window.WeixinJSBridge.call("closeWindow"):window.history.back()}},{key:"matchPages",value:function(){var e=null;switch(this.props.match.params.state){case"home":e=!0;break;case"success":e=!1;break;default:O.default.replace("/*")}return e}},{key:"submit",value:function(){var e=this,t=null,n=this.state.submitParams,i=[];this.state.imgList.forEach(function(e,t){e.isShowAddBtn||i.push(e.id)}),n.imgIds=i.join(",");var r=this.state.matchParams;if(void 0!==r.deviceId){var o=(0,m.getEncryptHeader)({deviceId:r.deviceId});t=(0,m.reqHeader)(n,o)}else t=(0,m.reqHeader)(n);this.props.feedbackSubmitAction(n,t,function(t){var n=t.status;t.msg;1===n?O.default.replace("/user/feedback/success/"+r.deviceId):e.props.action_setGlobAlert("网络开小差咯")})}},{key:"addBtnClick",value:function(){var e=this;window.sysInfo.isWeixin?window.wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){t.localIds.map(function(t){window.wx.uploadImage({localId:t,isShowProgressTips:1,success:function(t){var n={mediaId:t.serverId};e.props.uploadImgAction(n,(0,m.reqHeader)(n),function(t){var n=t.data;n[0].isShowBadge=!0;var i=e.state.imgList;i.length>=5&&i[i.length-1].isShowAddBtn&&i.pop(),e.setState({imgList:[n[0]].concat(_toConsumableArray(i))})})}})})}}):alert("请在微信客户端上传图片")}}]),Feedback}(u.default);D.defaultProps={questionList:{},uploadImgData:{}},D.propTypes={questionList:h.default.object,uploadImgData:h.default.object};var q=function(e,t){return{questionList:e.app.user.feedback,uploadImgData:e.app.user.uploadImg}},L=function(e,t){return{getFeedbackQuestionListAction:(0,p.default)(b.getFeedbackQuestionList,e),uploadImgAction:(0,p.default)(b.uploadImgWeiXin,e),feedbackSubmitAction:(0,p.default)(b.feedbackSubmit,e),action_setGlobAlert:(0,p.default)(S.setGlobAlert,e)}};t.default=(0,c.withRouter)((0,s.connect)(q,L)(D))},745:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(0),o=n(278),a=_interopRequireDefault(o),l=(n(102),n(101),n(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),a.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),i(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var i={};i[e]=n,t.setState(i)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var i=t||{},r=i.data,o=r||{},a=o.systemTime,l=o.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),d=this.isFreeActivation(e);if("string"==typeof c)return n&&n(c),"正在获取用户信息";if(!1===c)return n&&n("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===d)return n&&n("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===d)return function(){return!(!a||!l)&&!(a-l>72e4)}()?!1!==s||(n&&n("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t("正在获取用户信息，请稍后重试！"),"正在获取用户信息"):!1===n?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},i=n.data,r=i||{},o=r.systemTime,a=r.timeStamp;if(o&&a){return!!!(o-a>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,i=t.data;if(void 0!==n){return 1===i.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,i=t.msg,r=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var o=r.isReDevice;r.bindExpireTime;return 1===o}return i||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,i=t.data;if(void 0!==n){var r=i.vipStatus,o=i.expireTime;return 1===r&&(new Date).getTime()<o}return"正在获取用户信息"}}]),BaseComponent}(r.Component);t.default=s},748:function(e,t,n){e.exports=n.p+"img/common/tile_default.jpg?ede3715f1c8a57f43847b8f53ec156a1"},774:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),a=_interopRequireDefault(o),l=n(285),u=_interopRequireDefault(l),s={submitBtn:{position:"absolute",left:"50%",bottom:"80px",marginLeft:"-120px",width:"240px",height:"50px",borderRadius:"50px",overflow:"hidden"}},c=function(e){function ButtonPage(e){return _classCallCheck(this,ButtonPage),_possibleConstructorReturn(this,(ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call(this,e))}return _inherits(ButtonPage,e),r(ButtonPage,[{key:"render",value:function(){return a.default.createElement("section",{style:i({},{width:"100%"},this.props.style)},a.default.createElement("header",null,this.props.headerDom||a.default.createElement("div",null,a.default.createElement("img",{style:i({},{display:"block",margin:"130px auto 0",width:"100px"},this.props.imgStyle),src:this.props.src,alt:""}),a.default.createElement("div",{style:i({},{marginTop:"8px",textAlign:"center",color:"#ff8632",fontSize:"18px"},this.props.contentStyle)},this.props.content))),!this.props.hideButton&&a.default.createElement(u.default,{disabled:this.props.disabled,backgroundColor:"#ff8632",disabledBackgroundColor:"#ccc",label:this.props.buttonLabel,style:i({},s.submitBtn,this.props.raisedButtonStyles),buttonStyle:this.props.buttonStyles,labelStyle:i({},{lineHeight:"50px",fontSize:"18px",color:"#fff"},this.props.buttonLabelStyles),onClick:this.props.touchTap}))}}]),ButtonPage}(a.default.Component);t.default=c},837:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=_interopRequireDefault(i),o=n(22),a=_interopRequireDefault(o),l=n(20),u=_interopRequireDefault(l),s=function(e){return r.default.createElement(u.default,e,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))};s=(0,a.default)(s),s.displayName="ContentClear",s.muiName="SvgIcon",t.default=s},838:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),a=_interopRequireDefault(o),l=n(16),u=n(284),s=n(294),c=_interopRequireDefault(s),d=n(748),p=_interopRequireDefault(d),f=n(20),h=_interopRequireDefault(f),b={tile:{display:"block",margin:"0 auto",padding:0,width:"72px",height:"70px",boxSizing:"border-box"},tileImg:{display:"block",margin:"auto",width:"100%",height:"100%"}},m=function(e){return a.default.createElement(h.default,{style:e.style,viewBox:"0 0 612 792"},a.default.createElement("polygon",{points:"612,376.893 325.116,376.893 325.116,90.296 286.903,90.296 286.903,376.893 0,376.893 0,415.107 286.903,415.107 286.903,701.704 325.116,701.704 325.116,415.107 612,415.107"}))},g=function(e){function InputBox(e){_classCallCheck(this,InputBox);var t=_possibleConstructorReturn(this,(InputBox.__proto__||Object.getPrototypeOf(InputBox)).call(this,e));return t.addBtnTouchTap=t.addBtnTouchTap.bind(t),t.listenInputChange=t.listenInputChange.bind(t),t}return _inherits(InputBox,e),r(InputBox,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return a.default.createElement(u.GridList,{cellHeight:"auto",cols:this.props.cols,style:i({},{margin:0,padding:"0 10px",boxSizing:"border-box"},this.props.style)},this.props.data.map(function(t){return a.default.createElement(c.default,{key:t.id,"data-id":t.id,style:i({},b.tile,e.props.itemStyle),badgeStyle:i({},{display:t.isShowBadge?"block":"none",position:"absolute",backgroundColor:e.props.badgeBackgroundColor||"#a4c639"},e.props.badgeStyle),badgeContent:e.props.badgeContent},t.isShowAddBtn?a.default.createElement("div",{style:i({},b.tileImg,{backgroundColor:"#fff",border:"1px solid #ccc"}),onClick:function(){e.addBtnTouchTap()}},a.default.createElement(m,{style:{position:"relative",top:"20%",left:"20%",width:"60%",height:"60%",color:"#ccc"}}),a.default.createElement("input",{ref:"addImgInp",type:"file",accept:"image/*",style:{display:"none"},onChange:e.listenInputChange})):a.default.createElement("img",{src:t.imgUrl,style:b.tileImg,onError:function(e){e.target.src=p.default},onTouchTap:function(){e.props.imgTouchTap&&e.props.imgTouchTap(t)}}))}))}},{key:"addBtnTouchTap",value:function(){var e=this.props.addBtnTouchTap;if(e)return void e();var t=this.props.addBtn;return t||!0===t.isLoadImg?this.addImgInp.click():alert(t.disabledTip||"不能再添加图片咯")}},{key:"listenInputChange",value:function(){var e=this,t=this.addImgInp.files[0];if(t){var n=new FileReader;n.onload=function(){var t=n.result.split(",")[1],i="data:image/png;base64,"+t;e.props.inputChange(i)},n.readAsDataURL(t)}}},{key:"addImgInp",get:function(){return this.refs?(0,l.findDOMNode)(this.refs.addImgInp):{}}}]),InputBox}(a.default.Component);t.default=g}});