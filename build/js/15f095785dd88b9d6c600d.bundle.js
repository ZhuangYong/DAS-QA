webpackJsonp([15],{1009:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=_interopRequireDefault(r),i=n(22),u=_interopRequireDefault(i),a=n(20),l=_interopRequireDefault(a),s=function(e){return o.default.createElement(l.default,e,o.default.createElement("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}))};s=(0,u.default)(s),s.displayName="EditorPublish",s.muiName="SvgIcon",t.default=s},1010:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=_interopRequireDefault(r),i=n(22),u=_interopRequireDefault(i),a=n(20),l=_interopRequireDefault(a),s=function(e){return o.default.createElement(l.default,e,o.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))};s=(0,u.default)(s),s.displayName="ActionDelete",s.muiName="SvgIcon",t.default=s},728:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),i=_interopRequireDefault(o),u=n(50),a=n(101),l=n(102),s=n(748),c=n(747),f=_interopRequireDefault(c),d=n(277),_=n(166),p=n(1009),m=_interopRequireDefault(p),h=n(1010),A=_interopRequireDefault(h),g=n(812),v=_interopRequireDefault(g),E=function(e){function ChooseList(e){_classCallCheck(this,ChooseList);var t=_possibleConstructorReturn(this,(ChooseList.__proto__||Object.getPrototypeOf(ChooseList)).call(this,e));return t.state={playList:[]},t.unChoose=t.unChoose.bind(t),t}return _inherits(ChooseList,e),r(ChooseList,[{key:"componentDidUpdate",value:function(e){e.songs.chooseListStamp!==this.props.songs.chooseListStamp&&this.updateSong()}},{key:"componentDidMount",value:function(){var e={};this.props.action_getChooseList(e,(0,d.reqHeader)(e))}},{key:"render",value:function(){var e=this,t=this.state.playList,n=this.state.playingSong;return i.default.createElement(_.Paper,null,i.default.createElement(_.List,null,n?i.default.createElement(_.ListItem,{key:n.musicNo,primaryText:n.musicName,secondaryText:n.actorName,rightToggle:i.default.createElement("div",null,i.default.createElement(v.default,null))}):"",t.map(function(t){return i.default.createElement(_.ListItem,{key:t.musicNo,primaryText:t.musicName,secondaryText:t.actorName,rightToggle:i.default.createElement("div",null,i.default.createElement(m.default,{onTouchTap:function(){e.setTop(t.musicNo)}}),i.default.createElement(A.default,{onTouchTap:function(){e.unChoose(t.musicNo)}}))})})))}},{key:"updateSong",value:function(){var e=this.props.songs.chooseList||{data:{recordJson:'{"list":[],"playing":{}}'}},t=e.data,n=this.handelList(t.recordJson),r=n.list,o=n.playing;"string"==typeof r&&(r=JSON.parse(r)),this.setState({playList:r,playingSong:o})}},{key:"handelList",value:function(e){return e?JSON.parse(e):{}}},{key:"setTop",value:function(e){var t=this,n={type:12,id:e},r=this.state.playList,o=r.find(function(t){if(t.musicNo===e)return t}),i=r.filter(function(e){if(e!==o)return e});this.props.action_setSongTop(n,(0,d.reqHeader)(n),function(){t.setState({playList:[o].concat(_toConsumableArray(i))})})}},{key:"unChoose",value:function(e){var t=this,n={type:13,id:e},r=this.state.playList;this.props.action_setSongTop(n,(0,d.reqHeader)(n),function(){t.setState({playList:r.filter(function(t){return t.musicNo!==e})})})}}]),ChooseList}(f.default),y=function(e,t){return{songs:e.app.songs}},S=function(e,t){return{action_setSongTop:(0,u.bindActionCreators)(s.setSongTop,e),action_getChooseList:(0,u.bindActionCreators)(s.getChooseList,e)}};t.default=(0,l.withRouter)((0,a.connect)(y,S)(E))},747:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),i=n(278),u=_interopRequireDefault(i),a=(n(102),n(101),n(19)),l=_interopRequireDefault(a),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),u.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),r(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var r={};r[e]=n,t.setState(r)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var r=t||{},o=r.data,i=o||{},u=i.systemTime,a=i.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof c)return n&&n(c),"正在获取用户信息";if(!1===c)return n&&n("",l.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===f)return n&&n("",l.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!u||!a)&&!(u-a>72e4)}()?!1!==s||(n&&n("",l.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",l.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},r=n.data,o=r||{},i=o.systemTime,u=o.timeStamp;if(i&&u){return!!!(i-u>72e4)||(t&&t("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){return 1===r.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,r=t.msg,o=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var i=o.isReDevice;o.bindExpireTime;return 1===i}return r||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){var o=r.vipStatus,i=r.expireTime;return 1===o&&(new Date).getTime()<i}return"正在获取用户信息"}}]),BaseComponent}(o.Component);t.default=s},748:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var n=s.default.apiDomain+a.default.API_QUERY_USER_SOUND;return function(r){(0,i.comFetch)(r,e,{url:n,headers:t,action:o.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t){var n=s.default.apiDomain+a.default.API_QUERY_ALBUM;return function(r){(0,i.comFetch)(r,e,{url:n,headers:t,action:o.default.SONG.API_GET_RECOMMEND},null)}}function push(e,t,n,r){var u=s.default.apiDomain+a.default.API_PUSH;return function(a){(0,i.comFetch)(a,e,{url:u,headers:t,action:o.default.SONG.API_PUSH},n,r)}}function pushLocal(e,t,n,r,u){var l=e+a.default.API_PUSH;return function(e){(0,i.comFetch)(e,t,{url:l,type:"get",headers:n,timeout:3e3,action:o.default.SONG.API_PUSH},r,u)}}function getChooseList(e,t){var n=s.default.apiDomain+a.default.API_CHOOSE_LIST;return function(r){(0,i.comFetch)(r,e,{url:n,headers:t,action:o.default.SONG.API_CHOOSE_LIST},null)}}function getHistorySongList(e,t){var n=s.default.apiDomain+a.default.API_CHOOSE_LIST;return function(r){(0,i.comFetch)(r,e,{url:n,headers:t,action:o.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,n){var r=s.default.apiDomain+a.default.API_SET_SONG_TOP;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_SET_SONG_TOP},n)}}function getSingerCategoryAlbum(e,t,n){var r=s.default.apiDomain+a.default.API_GET_SINGER_CATEGORY_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},n)}}function getActorsAlbum(e,t,n){var r=s.default.apiDomain+a.default.API_GET_ACTORS_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_GET_ACTORS_ALBUM},n)}}function getCatAlbum(e,t,n){var r=s.default.apiDomain+a.default.API_GET_CAT_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_GET_CAT_ALBUM},n)}}function getCatSongList(e,t,n){var r=s.default.apiDomain+a.default.API_GET_CAT_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_GET_CAT_SONG_LIST},n)}}function getRankAlbum(e,t,n){var r=s.default.apiDomain+a.default.API_QUERY_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_GET_RANK_ALBUM},n)}}function getAlbumRecommend(e,t,n){var r=s.default.apiDomain+a.default.API_QUERY_ALBUM_RECOMMEND;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND},n)}}function getAlbumRecommendSongList(e,t,n){var r=s.default.apiDomain+a.default.API_QUERY_ALBUM_RECOMMEND;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},n)}}function getRanking(e,t,n){var r=s.default.apiDomain+a.default.API_QUERY_ALBUM;return function(u){(0,i.comFetch)(u,e,{url:r,headers:t,action:o.default.SONG.API_QUERY_RANKING},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var r=n(19),o=_interopRequireDefault(r),i=n(23),u=n(103),a=_interopRequireDefault(u),l=n(70),s=_interopRequireDefault(l)},812:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=_interopRequireDefault(r),i=n(22),u=_interopRequireDefault(i),a=n(20),l=_interopRequireDefault(a),s=function(e){return o.default.createElement(l.default,e,o.default.createElement("path",{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}))};s=(0,u.default)(s),s.displayName="AvEqualizer",s.muiName="SvgIcon",t.default=s}});