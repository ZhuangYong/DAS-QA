webpackJsonp([8],{732:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,r)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(r)},i=r(0),l=_interopRequireDefault(i),u=r(101),s=r(102),c=r(748),f=r(747),d=_interopRequireDefault(f),p=r(756),h=_interopRequireDefault(p),m=r(166),g=r(815),_=_interopRequireDefault(g),y=r(50),b=r(277),v=r(296),S=_interopRequireDefault(v),E={commonSingerList:{position:"absolute",height:"100%",overflowY:"auto",width:"100%"},loading:{position:"relative",display:"flex",justifyContent:"center",height:30,fontSize:"14px",marginBottom:14,alignItems:"center"},loadingBar:{boxShadow:"none",top:"none",left:"none",transform:"none",marginLeft:-50},hotFilter:{position:"absolute",top:"1.7rem",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",fontSize:".4rem",color:"#ff6832",icon:{width:".5rem",display:"flex",height:".5rem",borderRadius:"50%",marginLeft:".267rem",alignItems:"center",justifyContent:"center",border:"1px solid #ff6832"}}},A=function(e){function SingerList(e){_classCallCheck(this,SingerList);var t=_possibleConstructorReturn(this,(SingerList.__proto__||Object.getPrototypeOf(SingerList)).call(this,e)),r=t.props.match.params||{},n=r.title;return o(SingerList.prototype.__proto__||Object.getPrototypeOf(SingerList.prototype),"title",t).call(t,n),t.state={pageSize:20,pageData:[],loading:!1,currentPage:0,lastPage:!1,keyWord:"",id:0,openHotChoose:!1,anchorEl:null},t.onScroll=t.onScroll.bind(t),t.getHotKey=t.getHotKey.bind(t),t.refreshPage=t.refreshPage.bind(t),t.loadMoreAction=t.loadMoreAction.bind(t),t.handleHotPanel=t.handleHotPanel.bind(t),t}return _inherits(SingerList,e),a(SingerList,[{key:"componentDidUpdate",value:function(e){if(e.songs.getSingerAlbumStamp!==this.props.songs.getSingerAlbumStamp){var t=this.props.songs.getSingerAlbum||{data:{result:[],lastPage:!1}},r=t.data,n=r.result,a=r.lastPage;this.setState({pageData:[].concat(_toConsumableArray(this.state.pageData),_toConsumableArray(n||[])),lastPage:a,loading:!1})}}},{key:"componentDidMount",value:function(){0===this.state.currentPage&&this.loadMoreAction()}},{key:"render",value:function(){var e=this,t=(this.props.songs.getSingerAlbum,this.props.common),r=t.w,n=(t.h,r/375*42),a=this.state.keyWord;return l.default.createElement(m.Paper,{zDepth:0},l.default.createElement(h.default,null),l.default.createElement("div",{className:"common-singer-list",style:E.commonSingerList,onScroll:this.onScroll.bind(this)},l.default.createElement("div",{style:E.hotFilter},a||"热门",l.default.createElement("div",{style:E.hotFilter.icon,onClick:this.handleHotPanel},l.default.createElement(S.default,{color:"#ff6832"})),l.default.createElement(m.Popover,{style:{boxShadow:"rgba(128, 128, 128, 0.51) 1px 1px 20px 3px"},open:this.state.openHotChoose,anchorEl:this.state.anchorEl,anchorOrigin:{horizontal:"middle",vertical:"top"},targetOrigin:{horizontal:"middle",vertical:"bottom"},onRequestClose:function(){e.setState({openHotChoose:!1})}},l.default.createElement("div",{className:"hot-key"},this.getHotKey()))),l.default.createElement(m.List,{className:"single-list",style:{paddingTop:"2.4rem"}},this.state.pageData.map(function(e){return l.default.createElement(m.ListItem,{innerDivStyle:{paddingLeft:"2rem"},className:"single-item",key:e.id,onTouchTap:function(){(0,b.linkTo)("songs/singerId/"+e.id+"/"+e.nameNorm,!1,null)},leftAvatar:l.default.createElement(m.Avatar,{style:{overflow:"hidden"},src:e.image,size:n}),rightIcon:l.default.createElement(_.default,null),primaryText:l.default.createElement("div",{style:{fontSize:".4rem"}},e.nameNorm)})})),l.default.createElement("div",{style:E.loading},this.state.loading?l.default.createElement(m.RefreshIndicator,{size:30,left:70,top:0,loadingColor:"#FF9800",status:"loading",style:E.loadingBar}):"",l.default.createElement("span",null,this.state.lastPage?"亲爱滴，已经到底了":"正在加载"))))}},{key:"onScroll",value:function(e){if(!this.state.loading&&e.target.classList&&e.target.classList.contains("common-singer-list")){e.target.scrollHeight-(e.target.scrollTop+e.target.clientHeight)<50&&this.loadMoreAction()}}},{key:"loadMoreAction",value:function(){if(!this.state.loading&&!this.state.lastPage){var e=this.state.currentPage+1,t=this.state,r=t.pageSize,a=t.keyWord,o=t.id,i=n({currentPage:e,pageSize:r,keyword:a,id:o},this.props.match.params);this.props.action_getSingerList(i,(0,b.reqHeader)(i)),this.setState({currentPage:e,loading:!0})}}},{key:"refreshPage",value:function(){this.setState({pageData:[]}),this.state.currentPage=0,this.state.loading=!1,this.state.lastPage=!1,this.loadMoreAction()}},{key:"handleHotPanel",value:function(e){e.preventDefault(),this.setState({openHotChoose:!0,anchorEl:e.currentTarget})}},{key:"getHotKey",value:function(){var e=this,t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=this.state.keyWord,n=[],a=!0,o=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(a=(u=s.next()).done);a=!0)!function(){var t=u.value;r===t?n.push(l.default.createElement("p",{className:"active",key:t},t)):n.push(l.default.createElement("p",{onClick:function(){e.chooseKey(t)},key:t},t))}()}catch(e){o=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw i}}return n}},{key:"chooseKey",value:function(e){this.setState({openHotChoose:!1,keyWord:e}),this.state.keyWord=e,this.refreshPage()}}]),SingerList}(d.default),O=function(e,t){return{songs:e.app.songs,common:e.app.common}},P=function(e,t){return{action_getSingerList:(0,y.bindActionCreators)(c.getSingerCategoryAlbum,e)}};t.default=(0,s.withRouter)((0,u.connect)(O,P)(A))},747:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),o=r(278),i=_interopRequireDefault(o),l=(r(102),r(101),r(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),i.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),n(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(r){var n={};n[e]=r,t.setState(n)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,r){var n=t||{},a=n.data,o=a||{},i=o.systemTime,l=o.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof c)return r&&r(c),"正在获取用户信息";if(!1===c)return r&&r("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===f)return r&&r("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!i||!l)&&!(i-l>72e4)}()?!1!==s||(r&&r("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(r&&r("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var r=this.isBindDevice(e);return"string"==typeof r?(t&&t(r),r):!1===r?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===r||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var r=e||{},n=r.data,a=n||{},o=a.systemTime,i=a.timeStamp;if(o&&i){return!!!(o-i>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){return 1===n.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},r=t.status,n=t.msg,a=t.data;if(void 0!==r){if(-100===r)return"请使用微信操作";if(1===r){var o=a.isReDevice;a.bindExpireTime;return 1===o}return n||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){var a=n.vipStatus,o=n.expireTime;return 1===a&&(new Date).getTime()<o}return"正在获取用户信息"}}]),BaseComponent}(a.Component);t.default=s},748:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var r=s.default.apiDomain+l.default.API_QUERY_USER_SOUND;return function(n){(0,o.comFetch)(n,e,{url:r,headers:t,action:a.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t){var r=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(n){(0,o.comFetch)(n,e,{url:r,headers:t,action:a.default.SONG.API_GET_RECOMMEND},null)}}function push(e,t,r,n){var i=s.default.apiDomain+l.default.API_PUSH;return function(l){(0,o.comFetch)(l,e,{url:i,headers:t,action:a.default.SONG.API_PUSH},r,n)}}function pushLocal(e,t,r,n,i){var u=e+l.default.API_PUSH;return function(e){(0,o.comFetch)(e,t,{url:u,type:"get",headers:r,timeout:3e3,action:a.default.SONG.API_PUSH},n,i)}}function getChooseList(e,t){var r=s.default.apiDomain+l.default.API_CHOOSE_LIST;return function(n){(0,o.comFetch)(n,e,{url:r,headers:t,action:a.default.SONG.API_CHOOSE_LIST},null)}}function getHistorySongList(e,t){var r=s.default.apiDomain+l.default.API_CHOOSE_LIST;return function(n){(0,o.comFetch)(n,e,{url:r,headers:t,action:a.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,r){var n=s.default.apiDomain+l.default.API_SET_SONG_TOP;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_SET_SONG_TOP},r)}}function getSingerCategoryAlbum(e,t,r){var n=s.default.apiDomain+l.default.API_GET_SINGER_CATEGORY_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},r)}}function getActorsAlbum(e,t,r){var n=s.default.apiDomain+l.default.API_GET_ACTORS_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_ACTORS_ALBUM},r)}}function getCatAlbum(e,t,r){var n=s.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_CAT_ALBUM},r)}}function getCatSongList(e,t,r){var n=s.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_CAT_SONG_LIST},r)}}function getRankAlbum(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_RANK_ALBUM},r)}}function getAlbumRecommend(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_QUERY_ALBUM_RECOMMEND},r)}}function getAlbumRecommendSongList(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},r)}}function getRanking(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(i){(0,o.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_QUERY_RANKING},r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var n=r(19),a=_interopRequireDefault(n),o=r(23),i=r(103),l=_interopRequireDefault(i),u=r(70),s=_interopRequireDefault(u)},749:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(71),i=_interopRequireDefault(o),l=r(0),u=_interopRequireDefault(l),s=r(1),c=_interopRequireDefault(s),f=r(277),d={position:"absolute",top:"66px"},p=function(e){function Input(e){_classCallCheck(this,Input);var t=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,e));return t.state={hash:(0,f.getRandomString)(24),value:"",errorText:""},t.handelValidate.bind(t),t}return _inherits(Input,e),a(Input,[{key:"componentDidMount",value:function(){var e=this.props.doValidate;e&&e(this.handelValidate.bind(this),this.state.hash)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.errorStyle,e.errorText,e.minLength,e.maxLength,e.bindState,e.validate,e.doValidate,_objectWithoutProperties(e,["onChange","errorStyle","errorText","minLength","maxLength","bindState","validate","doValidate"]));return u.default.createElement(i.default,n({ref:"input",errorStyle:d,errorText:this.state.errorText,onChange:this.handelChange.bind(this)},t))}},{key:"handelChange",value:function(e,t){this.setState({value:t}),this.handelValidate(t);var r=this.props.bindState;r&&r(t)}},{key:"handelValidate",value:function(e){e=e||this.state.value;var t="",r=this.props.validate,n=this.props.minLength,a=this.props.maxLength;if("string"==typeof e&&(n&&e.length<n&&(t="长度不能小于"+n),a&&e.length>a&&(t="长度不能大于"+a)),!t&&"string"==typeof r)switch(r){case"account":/^[a-zA-z]\w{3,15}$/.test(e)||(t=this.props.errorText)}return this.setState({errorText:t}),t}}]),Input}(u.default.Component);t.default=p,p.propTypes={minLength:c.default.number,maxLength:c.default.number,errorStyle:c.default.object,validate:c.default.any,bindState:c.default.func,doValidate:c.default.func}},751:function(e,t,r){var n=r(752);"string"==typeof n&&(n=[[e.i,n,""]]);r(280)(n,{});n.locals&&(e.exports=n.locals)},752:function(e,t,r){t=e.exports=r(279)(),t.push([e.i,".search-header .search-bar-panel{top:0;z-index:6;width:100%;color:#fff;position:fixed;padding:.133rem .107rem;text-align:center;height:1.2rem;background-color:#ff6932;display:inline-table!important}.search-header .search-bar-panel .key-word-input{margin:0;padding:0;overflow:hidden;width:100%!important;display:flex!important;border-radius:1.2rem;background-color:#fe9e62!important;height:.93rem!important;border:1px solid #fe9e62}.search-header .search-bar-panel .key-word-input div:first-child{display:flex;width:90%;height:100%;justify-content:center;align-items:center;bottom:auto!important}.search-header .search-bar-panel .key-word-input hr{display:none!important}.search-header .search-bar-panel .key-word-input input{height:.9rem!important;padding-left:5%!important;color:#fff!important}.search-header .search-bar-panel .key-word-input font{font-size:.4rem}.search-header .search-bar-panel .key-word-input img.search{height:12px;margin-right:4px}.search-header .search-bar-panel .key-word-input img.voice{display:block;padding:6px 10px 6px 18px;width:40px;height:30px;position:absolute;right:12px;z-index:1}.search-header .search-bar-panel .search-button{width:14%;display:table-cell}.search-header .search-panel{width:100%;height:100%;z-index:2;position:fixed;background-color:#fff}.search-header .search-panel .search-words{height:100%;padding:12px}.search-header .search-panel .search-words .hot-words{display:flex;flex-wrap:wrap}.search-header .search-panel .search-words .hot-words .word{margin:4px 0 0 4px!important}.search-header .search-panel .search-words .history-words-title{height:.8rem;margin-top:.6rem}",""]),t.locals={barBaseHeight:"1.2rem"}},753:function(e,t,r){e.exports=r.p+"img/common/icon_voice.png?fb3acfa27b8a407b649d03a4a0f43840"},754:function(e,t,r){e.exports=r.p+"img/common/icon_search.png?0fb44260fa7b8de5f8c3c4dbf1ab4fa6"},756:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),o=_interopRequireDefault(a);r(751);var i=r(101),l=r(749),u=_interopRequireDefault(l),s=r(747),c=_interopRequireDefault(s),f=r(277),d=r(102),p=r(753),h=_interopRequireDefault(p),m=r(754),g=_interopRequireDefault(m),_=function(e){function SearchHeaderFake(e){return _classCallCheck(this,SearchHeaderFake),_possibleConstructorReturn(this,(SearchHeaderFake.__proto__||Object.getPrototypeOf(SearchHeaderFake)).call(this,e))}return _inherits(SearchHeaderFake,e),n(SearchHeaderFake,[{key:"render",value:function(){return o.default.createElement("div",{className:"search-header"},o.default.createElement("span",{className:"search-bar-panel"},o.default.createElement(u.default,{ref:"input",className:"key-word-input",hintText:o.default.createElement("div",null,o.default.createElement("img",{className:"search",src:g.default}),o.default.createElement("font",null,"请输入你要找的歌曲或歌星"),o.default.createElement("img",{onClick:function(){(0,f.linkTo)("voiceSearch",!1,"")},className:"voice",src:h.default})),hintStyle:{color:"white",textAlign:"center",width:"100%"},onTouchTap:function(){(0,f.linkTo)("song/search",!1,null)}})))}}]),SearchHeaderFake}(c.default);t.default=(0,d.withRouter)((0,i.connect)(function(){return{}},function(){return{}})(_))},815:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=_interopRequireDefault(n),o=r(22),i=_interopRequireDefault(o),l=r(20),u=_interopRequireDefault(l),s=function(e){return a.default.createElement(u.default,e,a.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}))};s=(0,i.default)(s),s.displayName="HardwareKeyboardArrowRight",s.muiName="SvgIcon",t.default=s}});