webpackJsonp([10],{748:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},a=n(0),i=_interopRequireDefault(a),u=n(105),l=n(106),c=n(766),s=n(765),f=_interopRequireDefault(s),d=n(780),p=_interopRequireDefault(d),h=n(169),m=n(53),_=n(282),b=n(294),g=_interopRequireDefault(b),v=n(767),y=_interopRequireDefault(v),O={albumImg:{height:"2.8rem",width:"4.6rem",overflow:"hidden",backgroundImage:"url("+g.default+")",backgroundRepeat:"no-repeat",backgroundSize:"auto 60%",backgroundColor:"#eaeaea",backgroundPosition:"center"}},E=function(e){function SingerAlumb(e){_classCallCheck(this,SingerAlumb);var t=_possibleConstructorReturn(this,(SingerAlumb.__proto__||Object.getPrototypeOf(SingerAlumb)).call(this,e));return o(SingerAlumb.prototype.__proto__||Object.getPrototypeOf(SingerAlumb.prototype),"title",t).call(t,"歌星"),t.state={},t}return _inherits(SingerAlumb,e),r(SingerAlumb,[{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){var e={id:"home"};this.props.action_getSingerCategoryAlbum(e,(0,_.reqHeader)(e))}},{key:"render",value:function(){var e=this.props.songs.getSingerAlbum;return i.default.createElement(h.Paper,{zDepth:0,style:{paddingBottom:66}},i.default.createElement(p.default,null),i.default.createElement(h.List,{style:{padding:"50px .133rem"},className:"singer-album-list"},e&&e.data&&e.data.result&&e.data.result.map(function(e){return i.default.createElement(h.ListItem,{innerDivStyle:{padding:"0.133rem"},key:e.id,onClick:function(){(0,_.linkTo)("singer/"+e.id+"/"+e.name,!1,null)},primaryText:i.default.createElement("div",{style:O.albumImg},i.default.createElement("img",{style:{width:"100%"},src:e.wxPic||e.ottPic}))})})),i.default.createElement(y.default,{selectedIndex:0}))}}]),SingerAlumb}(f.default),A=function(e,t){return{songs:e.app.songs}},S=function(e,t){return{action_getSingerCategoryAlbum:(0,m.bindActionCreators)(c.getSingerCategoryAlbum,e)}};t.default=(0,l.withRouter)((0,u.connect)(A,S)(E))},765:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),a=n(283),i=_interopRequireDefault(a),u=(n(106),n(105),n(19)),l=_interopRequireDefault(u),c=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),i.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),r(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var r={};r[e]=n,t.setState(r)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var r=t||{},o=r.data,a=o||{},i=a.systemTime,u=a.timeStamp,c=this.isVip(e),s=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof s)return n&&n(s),"正在获取用户信息";if(!1===s)return n&&n("",l.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===s){if(!0===f)return n&&n("",l.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!i||!u)&&!(i-u>72e4)}()?!1!==c||(n&&n("",l.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",l.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},r=n.data,o=r||{},a=o.systemTime,i=o.timeStamp;if(a&&i){return!!!(a-i>72e4)||(t&&t("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",l.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){return 1===r.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,r=t.msg,o=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var a=o.isReDevice;o.bindExpireTime;return 1===a}return r||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,r=t.data;if(void 0!==n){var o=r.vipStatus,a=r.expireTime;return 1===o&&(new Date).getTime()<a}return"正在获取用户信息"}}]),BaseComponent}(o.Component);t.default=c},766:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var n=c.default.apiDomain+u.default.API_QUERY_USER_SOUND;return function(r){(0,a.comFetch)(r,e,{url:n,headers:t,action:o.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t,n,r){var i=c.default.apiDomain+u.default.API_QUERY_ALBUM;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_GET_RECOMMEND},n,r)}}function push(e,t,n,r){var i=c.default.apiDomain+u.default.API_PUSH;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_PUSH},n,r)}}function pushLocal(e,t,n,r,i){var l=e+u.default.API_PUSH;return function(e){(0,a.comFetch)(e,t,{url:l,type:"get",headers:n,timeout:3e3,action:o.default.SONG.API_PUSH},r,i)}}function getChooseList(e,t,n,r){var i=c.default.apiDomain+u.default.API_CHOOSE_LIST;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_CHOOSE_LIST},n,r)}}function getHistorySongList(e,t){var n=c.default.apiDomain+u.default.API_CHOOSE_LIST;return function(r){(0,a.comFetch)(r,e,{url:n,headers:t,action:o.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,n){var r=c.default.apiDomain+u.default.API_SET_SONG_TOP;return function(i){(0,a.comFetch)(i,e,{url:r,headers:t,action:o.default.SONG.API_SET_SONG_TOP},n)}}function getSingerCategoryAlbum(e,t,n,r){var i=c.default.apiDomain+u.default.API_GET_SINGER_CATEGORY_ALBUM;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},n,r)}}function getActorsAlbum(e,t,n,r){var i=c.default.apiDomain+u.default.API_GET_ACTORS_ALBUM;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_GET_ACTORS_ALBUM},n,r)}}function getCatAlbum(e,t,n){var r=c.default.apiDomain+u.default.API_GET_CAT_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:r,headers:t,action:o.default.SONG.API_GET_CAT_ALBUM},n)}}function getCatSongList(e,t,n,r){var i=c.default.apiDomain+u.default.API_GET_CAT_ALBUM;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_GET_CAT_SONG_LIST},n,r)}}function getRankAlbum(e,t,n,r){var i=c.default.apiDomain+u.default.API_QUERY_ALBUM;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_GET_RANK_ALBUM},n,r)}}function getAlbumRecommend(e,t,n){var r=c.default.apiDomain+u.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,a.comFetch)(i,e,{url:r,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND},n)}}function getAlbumRecommendSongList(e,t,n,r){var i=c.default.apiDomain+u.default.API_QUERY_ALBUM_RECOMMEND;return function(u){(0,a.comFetch)(u,e,{url:i,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},n,r)}}function getRanking(e,t,n){var r=c.default.apiDomain+u.default.API_QUERY_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:r,headers:t,action:o.default.SONG.API_QUERY_RANKING},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var r=n(19),o=_interopRequireDefault(r),a=n(24),i=n(107),u=_interopRequireDefault(i),l=n(72),c=_interopRequireDefault(l)},767:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(0),i=_interopRequireDefault(a),u=n(169),l=n(282),c=n(1),s=_interopRequireDefault(c),f=n(765),d=_interopRequireDefault(f),p=n(25),h=n(105),m=n(768),_=_interopRequireDefault(m),b=n(769),g=_interopRequireDefault(b),v=n(770),y=_interopRequireDefault(v),O=n(771),E=_interopRequireDefault(O),A=n(772),S=_interopRequireDefault(A),C={nav:{height:60,position:"fixed",borderTop:"1px solid #efeeef",bottom:"0",zIndex:"2",playController:{position:"relative",paddingLeft:0,paddingRight:0,circle:{position:"absolute",top:-35,height:90,arc:{border:"1px solid #efeeef",position:"absolute",marginLeft:-34,left:"50%",width:68,height:40,bottom:40,borderRadius:"40px 40px 0 0",backgroundColor:"white"},maskLine:{height:56,borderTop:"1px solid white",width:64,position:"absolute",bottom:0,left:"50%",marginLeft:-32,backgroundColor:"white"},maskArc:{height:55,width:"100%",position:"absolute",bottom:0,backgroundColor:"white"},icon:{position:"absolute",left:"50%",marginLeft:-28,width:56,bottom:18}}},label:{position:"absolute",width:"100%",textAlign:"center",bottom:4,left:0}}},R=function(e){function MBottomNavigation(e){_classCallCheck(this,MBottomNavigation);var t=_possibleConstructorReturn(this,(MBottomNavigation.__proto__||Object.getPrototypeOf(MBottomNavigation)).call(this,e));return t.state={selectedIndex:t.props.selectedIndex},t}return _inherits(MBottomNavigation,e),o(MBottomNavigation,[{key:"render",value:function(){var e=this,t=0===this.state.selectedIndex?g.default:_.default,n=2===this.state.selectedIndex?E.default:y.default,o=["#999","#999","#999"];return o[this.state.selectedIndex]="#ff6832",i.default.createElement(u.BottomNavigation,{selectedIndex:this.state.selectedIndex,style:C.nav},i.default.createElement(u.BottomNavigationItem,{label:i.default.createElement("div",{style:r({},C.nav.label,{color:o[0]})},"主页"),icon:i.default.createElement("div",{style:{height:30,marginBottom:12}},i.default.createElement("img",{style:{height:"100%"},src:t})),onTouchTap:function(){return e.navSelect(0)}}),i.default.createElement(u.BottomNavigationItem,{style:C.nav.playController,label:i.default.createElement("div",{style:r({},C.nav.label,{color:o[1]})},"播控"),icon:i.default.createElement("div",{style:C.nav.playController.circle},i.default.createElement("div",{style:C.nav.playController.circle.arc}),i.default.createElement("div",{style:C.nav.playController.circle.maskLine}),i.default.createElement("div",{style:C.nav.playController.circle.maskArc}),i.default.createElement("img",{style:C.nav.playController.circle.icon,src:S.default})),onTouchTap:function(){return e.navSelect(1)}}),i.default.createElement(u.BottomNavigationItem,{label:i.default.createElement("div",{style:r({},C.nav.label,{color:o[2]})},"我的"),icon:i.default.createElement("div",{style:{height:30,marginBottom:12}},i.default.createElement("img",{style:{height:"100%"},src:n})),onTouchTap:function(){return e.navSelect(2)}}))}},{key:"navSelect",value:function(e){switch(this.setState({selectedIndex:e}),e){case 0:(0,l.linkTo)("",!1,null);break;case 1:(0,l.linkTo)("controller/",!1,null);break;case 2:(0,l.linkTo)("user",!1,null)}}}]),MBottomNavigation}(d.default);R.propTypes={selectedIndex:s.default.number},R.defaultProps={selectedIndex:0};var P=function(e,t){return{}},w=function(e,t){return{}};t.default=(0,p.withRouter)((0,h.connect)(P,w)(R))},768:function(e,t,n){e.exports=n.p+"img/common/nav_index.png?f587230d14e97fe3edc24933ff28f97c"},769:function(e,t,n){e.exports=n.p+"img/common/nav_index_on.png?b4a94c832861bea691015dd45b804220"},770:function(e,t,n){e.exports=n.p+"img/common/nav_me.png?e84268d0fc58e6264bb6518f670f30b7"},771:function(e,t,n){e.exports=n.p+"img/common/nav_me_on.png?abfda0a35e4303b76b1647488e2c0859"},772:function(e,t,n){e.exports=n.p+"img/common/nav_controll.png?35546dfe602b00e96b2d7681785459c1"},773:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(73),i=_interopRequireDefault(a),u=n(0),l=_interopRequireDefault(u),c=n(1),s=_interopRequireDefault(c),f=n(282),d={position:"absolute",top:"66px"},p=function(e){function Input(e){_classCallCheck(this,Input);var t=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,e));return t.state={hash:(0,f.getRandomString)(24),value:"",errorText:"",trim:t.props.trim||!1},t.handelValidate.bind(t),t}return _inherits(Input,e),o(Input,[{key:"componentDidMount",value:function(){var e=this.props.doValidate;e&&e(this.handelValidate.bind(this),this.state.hash)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.errorStyle,e.errorText,e.minLength,e.maxLength,e.bindState,e.validate,e.doValidate,e.trim,_objectWithoutProperties(e,["onChange","errorStyle","errorText","minLength","maxLength","bindState","validate","doValidate","trim"]));return l.default.createElement(i.default,r({ref:"input",errorStyle:d,errorText:this.state.errorText,onChange:this.handelChange.bind(this)},t))}},{key:"handelChange",value:function(e,t){this.state.trim&&(t=t.trim()),this.setState({value:t}),this.handelValidate(t);var n=this.props.bindState;n&&n(t)}},{key:"handelValidate",value:function(e){e=e||this.state.value;var t="",n=this.props.validate,r=this.props.minLength,o=this.props.maxLength;if("string"==typeof e&&(r&&e.length<r&&(t="长度不能小于"+r),o&&e.length>o&&(t="长度不能大于"+o)),!t&&"string"==typeof n)switch(n){case"account":/^[a-zA-z]\w{3,15}$/.test(e)||(t=this.props.errorText)}return this.setState({errorText:t}),t}}]),Input}(l.default.Component);t.default=p,p.propTypes={minLength:s.default.number,maxLength:s.default.number,errorStyle:s.default.object,validate:s.default.any,bindState:s.default.func,doValidate:s.default.func}},776:function(e,t,n){var r=n(777);"string"==typeof r&&(r=[[e.i,r,""]]);n(285)(r,{});r.locals&&(e.exports=r.locals)},777:function(e,t,n){t=e.exports=n(284)(),t.push([e.i,".search-header .search-bar-panel{top:0;z-index:6;width:100%;color:#fff;position:fixed;padding:.13rem .107rem;text-align:center;height:1.2rem;background:-webkit-gradient(linear,0 100,283 0,from(#ff6932),to(#ff8332));display:inline-table!important}.search-header .search-bar-panel .key-word-input{margin:0;padding:0;overflow:hidden;width:100%!important;display:flex!important;border-radius:1.2rem;background-color:#fe9e62!important;height:.93rem!important;border:1px solid #fe9e62}.search-header .search-bar-panel .key-word-input div:first-child{display:flex;width:90%;height:100%;justify-content:center;align-items:center;bottom:auto!important}.search-header .search-bar-panel .key-word-input hr{display:none!important}.search-header .search-bar-panel .key-word-input input{height:.9rem!important;padding-left:5%!important;color:#fff!important}.search-header .search-bar-panel .key-word-input font{font-size:.4rem}.search-header .search-bar-panel .key-word-input img.search{height:12px;margin-right:4px}.search-header .search-bar-panel .key-word-input img.voice{display:block;padding:6px 10px 6px 18px;width:40px;height:30px;position:absolute;right:12px;z-index:1}.search-header .search-bar-panel .search-button{width:14%;display:table-cell}.search-header .search-panel{width:100%;height:100%;z-index:2;position:fixed;background-color:#fff}.search-header .search-panel .search-words{height:100%;padding:12px;padding-top:0}.search-header .search-panel .search-words .hot-words{display:flex;flex-wrap:wrap}.search-header .search-panel .search-words .hot-words .word{margin:4px 0 0 4px!important}.search-header .search-panel .search-words .history-words-title{height:.8rem;margin-top:.6rem}",""]),t.locals={barBaseHeight:"1.2rem"}},778:function(e,t,n){e.exports=n.p+"img/common/icon_voice.png?fb3acfa27b8a407b649d03a4a0f43840"},779:function(e,t,n){e.exports=n.p+"img/common/icon_search.png?0fb44260fa7b8de5f8c3c4dbf1ab4fa6"},780:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),a=_interopRequireDefault(o);n(776);var i=n(105),u=n(773),l=_interopRequireDefault(u),c=n(765),s=_interopRequireDefault(c),f=n(282),d=n(106),p=n(778),h=_interopRequireDefault(p),m=n(779),_=_interopRequireDefault(m),b=function(e){function SearchHeaderFake(e){return _classCallCheck(this,SearchHeaderFake),_possibleConstructorReturn(this,(SearchHeaderFake.__proto__||Object.getPrototypeOf(SearchHeaderFake)).call(this,e))}return _inherits(SearchHeaderFake,e),r(SearchHeaderFake,[{key:"render",value:function(){return a.default.createElement("div",{className:"search-header"},a.default.createElement("span",{className:"search-bar-panel",style:{display:"flex!important"}},a.default.createElement(l.default,{ref:"input",className:"key-word-input",hintText:a.default.createElement("div",null,a.default.createElement("img",{className:"search",src:_.default}),a.default.createElement("font",null,"请输入你要找的歌曲或歌星"),a.default.createElement("img",{onClick:function(){(0,f.linkTo)("voiceSearch",!1,"")},className:"voice",src:h.default})),hintStyle:{color:"white",textAlign:"center",width:"100%"},onTouchTap:function(){(0,f.linkTo)("song/search",!1,null)}})))}}]),SearchHeaderFake}(s.default);t.default=(0,d.withRouter)((0,i.connect)(function(){return{}},function(){return{}})(b))}});