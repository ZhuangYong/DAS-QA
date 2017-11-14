webpackJsonp([17],{774:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},i=n(0),l=_interopRequireDefault(i),a=n(285),u=_interopRequireDefault(a),c=n(87),s=n(88),f=n(289),p=_interopRequireDefault(f),d=n(1),m=_interopRequireDefault(d),y=n(290),h=n(284),g=n(170),b=_interopRequireDefault(g),_=n(788),v=_interopRequireDefault(_),O=n(820),R=_interopRequireDefault(O),w=n(169),E={loading:{position:"relative",display:"flex",justifyContent:"center",height:(0,h.toRem)(100),fontSize:(0,h.toRem)(28),alignItems:"center",clear:"both",backgroundColor:"#fff"},deselect:{position:"absolute",top:"50%",left:"10px",marginTop:"-10px",width:"20px",height:"20px",border:"1px solid #999",borderRadius:"20px"},selected:{position:"absolute",top:"50%",left:"10px",marginTop:"-10px",width:"20px",height:"20px",backgroundColor:"#878979",borderRadius:"20px"}},C=function(e){return l.default.createElement(w.SvgIcon,{style:e.style},l.default.createElement("path",{style:{fillRule:"evenodd",clipRule:"evenodd"},d:"M13.729,11.236L1.722,0.294c-0.394-0.392-1.033-0.392-1.427,0c-0.394,0.392-0.394,1.028,0,1.42l11.283,10.283L0.296,22.28c-0.394,0.392-0.394,1.028,0,1.42c0.394,0.392,1.033,0.392,1.427,0l12.007-10.942c0.21-0.209,0.3-0.486,0.286-0.76C14.029,11.723,13.939,11.446,13.729,11.236z"}))},P=function(e){function invoiceList(e){_classCallCheck(this,invoiceList);var t=_possibleConstructorReturn(this,(invoiceList.__proto__||Object.getPrototypeOf(invoiceList)).call(this,e));return o(invoiceList.prototype.__proto__||Object.getPrototypeOf(invoiceList.prototype),"title",t).call(t,"开票历史"),t.state={orderForm:{},orderList:[],offLine:!1,currentPage:0,pageSize:999},t}return _inherits(invoiceList,e),r(invoiceList,[{key:"componentDidUpdate",value:function(e){if(e.orderForm.invoiceListStamp!==this.props.orderForm.invoiceListStamp){var t=this.props.orderForm.invoiceListData||{data:{}},n=t.data,r=n||{result:[]},o=r.result;this.setState({orderList:o})}}},{key:"componentDidMount",value:function(){0===this.state.currentPage&&this.loadMoreAction()}},{key:"render",value:function(){var e=this.state.orderList;return l.default.createElement("section",{style:{backgroundColor:"#d7d7d7",minHeight:document.documentElement.clientHeight||document.body.clientHeight}},e.length>0?l.default.createElement("div",null,e.map(function(e){return l.default.createElement("section",{key:e.id,style:{position:"relative",marginBottom:(0,h.toRem)(20),backgroundColor:"#fff"}},l.default.createElement("ul",{style:{listStyle:"none",padding:(0,h.toRem)(20)+" "+(0,h.toRem)(20),margin:0,fontSize:(0,h.toRem)(28),color:"#999",lineHeight:(0,h.toRem)(60)},onClick:function(){3===parseInt(e.status,10)&&(0,h.linkTo)("user/InvoiceDetail/"+e.id,!1,null)}},l.default.createElement("li",null,l.default.createElement("span",null,e.time),l.default.createElement("span",{style:{color:3===parseInt(e.status,10)?"#fd6934":"#999",float:"right"}},l.default.createElement("span",null,3===e.status?"已开票":"待出票"),l.default.createElement(C,{style:{marginLeft:(0,h.toRem)(10),width:(0,h.toRem)(16.5),height:(0,h.toRem)(24),color:3===parseInt(e.status,10)?"#fd6934":"#999"}}))),l.default.createElement("li",null,"发票类型: ",l.default.createElement("span",{style:{color:"#212121"}},"增值税普通发票")),l.default.createElement("li",null,"发票金额: ",l.default.createElement("span",{style:{color:"#212121"}},"¥",e.amount))))}),l.default.createElement("div",{style:E.loading},l.default.createElement("span",null,"亲爱滴，已经到底了"))):l.default.createElement("div",null,this.state.offLine?l.default.createElement(v.default,{style:{paddingTop:(0,h.toRem)(350)}}):l.default.createElement(R.default,{style:{paddingTop:(0,h.toRem)(350)}})))}},{key:"loadMoreAction",value:function(){var e=this,t=this.state.currentPage+1,n=this.state.pageSize,r={page:t,pageSize:n};this.props.getInvoiceListAction(r,(0,h.reqHeader)(r),null,function(t,n){n.code===b.default.CODE_OFF_LINE&&e.setState({offLine:!0})})}}]),invoiceList}(u.default);P.defaultProps={orderForm:{}},P.propTypes={orderForm:m.default.object};var j=function(e,t){return{orderForm:e.app.user.orderForm}},k=function(e,t){return{getInvoiceListAction:(0,p.default)(y.getInvoiceList,e)}};t.default=(0,s.withRouter)((0,c.connect)(j,k)(P))},779:function(e,t,n){e.exports=n.p+"img/common/bg_no_network.png?ec6f187423c8d73d62f1171882f62080"},788:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(0),l=_interopRequireDefault(i),a=n(779),u=_interopRequireDefault(a),c={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},s=function(e){function NoWifi(e){return _classCallCheck(this,NoWifi),_possibleConstructorReturn(this,(NoWifi.__proto__||Object.getPrototypeOf(NoWifi)).call(this,e))}return _inherits(NoWifi,e),o(NoWifi,[{key:"componentDidMount",value:function(){window.lockShowNoWIfi=!0}},{key:"componentWillUnmount",value:function(){window.lockShowNoWIfi=!1}},{key:"render",value:function(){var e=this.props.style||{};return l.default.createElement("div",{style:r({},c.noResult,e)},l.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),l.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},"网络已被带走"))}}]),NoWifi}(l.default.Component);t.default=s},820:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(0),l=_interopRequireDefault(i),a=n(821),u=_interopRequireDefault(a),c={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},s=function(e){function NoOrdering(e){return _classCallCheck(this,NoOrdering),_possibleConstructorReturn(this,(NoOrdering.__proto__||Object.getPrototypeOf(NoOrdering)).call(this,e))}return _inherits(NoOrdering,e),o(NoOrdering,[{key:"render",value:function(){var e=this.props.style||{};return l.default.createElement("div",{style:r({},c.noResult,e)},l.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),l.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},this.props.message||"还没有订单哟"))}}]),NoOrdering}(l.default.Component);t.default=s},821:function(e,t,n){e.exports=n.p+"img/common/bg_no_ordering.png?16e8c25df8f49bf6c2cdd60f114afccc"}});