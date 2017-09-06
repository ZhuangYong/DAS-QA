webpackJsonp([21],{761:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(0),o=_interopRequireDefault(i),u=n(105),a=n(106),s=n(762),f=_interopRequireDefault(s),l=function(e){function Pay(e){return _classCallCheck(this,Pay),_possibleConstructorReturn(this,(Pay.__proto__||Object.getPrototypeOf(Pay)).call(this,e))}return _inherits(Pay,e),r(Pay,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.state,n=e.pollingId,r=e.deviceId,i=e.openid,o="pay?state="+(t||"")+"&pollingId="+(n||"")+"&deviceId="+(r||"")+"&openid="+(i||"");this.props.history.replace("/"+o)}},{key:"render",value:function(){return o.default.createElement("div",null)}}]),Pay}(f.default),c=function(e,t){return{}},p=function(e,t){return{}};t.default=(0,a.withRouter)((0,u.connect)(c,p)(l))},762:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(0),o=n(283),u=_interopRequireDefault(o),a=(n(106),n(105),n(19)),s=_interopRequireDefault(a),f=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),u.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),r(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var r={};r[e]=n,t.setState(r)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var r=t||{},i=r.data,o=i||{},u=o.systemTime,a=o.timeStamp,f=this.isVip(e),l=this.isBindDevice(e),c=this.isFreeActivation(e);if("string"==typeof l)return n&&n(l),"正在获取用户信息";if(!1===l)return n&&n("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===l){if(!0===c)return n&&n("",s.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===c)return function(){return!(!u||!a)&&!(u-a>72e4)}()?!1!==f||(n&&n("",s.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},r=n.data,i=r||{},o=i.systemTime,u=i.timeStamp;if(o&&u){return!!!(o-u>72e4)||(t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){return 1===r.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,r=t.msg,i=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var o=i.isReDevice;i.bindExpireTime;return 1===o}return r||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){var i=r.vipStatus,o=r.expireTime;return 1===i&&(new Date).getTime()<o}return"正在获取用户信息"}}]),BaseComponent}(i.Component);t.default=f}});