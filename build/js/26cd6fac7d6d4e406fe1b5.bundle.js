webpackJsonp([26],{766:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),i=_interopRequireDefault(o),u=n(87),a=n(106),c=n(287),l=_interopRequireDefault(c),s=function(e){function Pay(e){return _classCallCheck(this,Pay),_possibleConstructorReturn(this,(Pay.__proto__||Object.getPrototypeOf(Pay)).call(this,e))}return _inherits(Pay,e),r(Pay,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.state,n=e.pollingId,r=e.deviceId,o=e.openid,i="pay?state="+(t||"")+"&pollingId="+(n||"")+"&deviceId="+(r||"")+"&openid="+(o||"");this.props.history.replace("/"+i)}},{key:"render",value:function(){return i.default.createElement("div",null)}}]),Pay}(l.default),f=function(e,t){return{}},p=function(e,t){return{}};t.default=(0,a.withRouter)((0,u.connect)(f,p)(s))}});