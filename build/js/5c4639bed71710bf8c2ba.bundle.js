webpackJsonp([5],{749:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)},i=r(0),l=_interopRequireDefault(i),u=r(105),s=r(106),c=r(766),f=r(765),d=_interopRequireDefault(f),p=r(780),h=_interopRequireDefault(p),m=r(169),g=r(840),_=_interopRequireDefault(g),y=r(53),b=r(282),v=r(305),E=_interopRequireDefault(v),S=r(767),O=_interopRequireDefault(S),P=r(287),R=_interopRequireDefault(P),C=r(794),T=_interopRequireDefault(C),w=r(286),A=r(784),k=_interopRequireDefault(A),D=r(786),L=_interopRequireDefault(D),x=r(778),I=_interopRequireDefault(x),N={commonSingerList:{position:"absolute",height:"100%",overflowY:"auto",width:"100%"},loadingBar:{boxShadow:"none",top:"none",left:"none",transform:"none",marginLeft:-50},hotFilter:{position:"absolute",top:"1.7rem",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",fontSize:".4rem",color:"#ff6832",icon:{width:".5rem",display:"flex",height:".5rem",borderRadius:"50%",marginLeft:".267rem",alignItems:"center",justifyContent:"center",border:"1px solid #ff6832"}}},M=function(e){function SingerList(e){_classCallCheck(this,SingerList);var t=_possibleConstructorReturn(this,(SingerList.__proto__||Object.getPrototypeOf(SingerList)).call(this,e)),r=t.props.match.params||{},n=r.id,o=r.title;a(SingerList.prototype.__proto__||Object.getPrototypeOf(SingerList.prototype),"title",t).call(t,o);var i=t.props.common.singerList.id,l=i===n?t.props.common.singerList:{},u=l.pageData,s=l.loading,c=l.currentPage,f=l.lastPage,d=l.keyWord,p=l.scrollTop;return t.state={pageSize:20,pageData:u||[],loading:s||!1,currentPage:c||0,lastPage:void 0!==f&&f,keyWord:void 0!==d?d:"",id:n,openHotChoose:!1,anchorEl:null,cacheData:{},scrollTop:p||0,initialScrollTop:!1,dataLoaded:!1,offLine:!1},t.onScroll=t.onScroll.bind(t),t.getHotKey=t.getHotKey.bind(t),t.refreshPage=t.refreshPage.bind(t),t.loadMoreAction=t.loadMoreAction.bind(t),t.handleHotPanel=t.handleHotPanel.bind(t),t}return _inherits(SingerList,e),o(SingerList,[{key:"componentDidUpdate",value:function(e){if(e.songs.getSingerAlbumStamp!==this.props.songs.getSingerAlbumStamp){var t=this.props.songs.getSingerAlbum||{data:{result:[],lastPage:!1}},r=t.data,n=r.result,o=r.lastPage,a=[].concat(_toConsumableArray(this.state.pageData),_toConsumableArray(n||[])),i={id:this.state.id,pageData:a,lastPage:o,currentPage:this.state.currentPage,keyWord:this.state.keyWord};this.setState({pageData:a,lastPage:o,loading:!1,cacheData:i,dataLoaded:!0,offLine:!1}),this.props.action_setSingerList(i)}}},{key:"componentDidMount",value:function(){if(!this.state.initialScrollTop){console.log(this.state.scrollTop);var e=this.state.scrollTop;e&&(this.refs.commSingerList.scrollTop=e);var t={id:this.state.id,pageData:this.state.pageData,lastPage:this.state.lastPage,currentPage:this.state.currentPage,keyWord:this.state.keyWord};this.state.cacheData=t,this.state.initialScrollTop=!0}0===this.state.currentPage&&this.loadMoreAction()}},{key:"render",value:function(){var e=this,t=(this.props.songs.getSingerAlbum,this.props.common),r=t.w,n=(t.h,r/375*42),o=this.state.keyWord,a={};return this.state.needScrollToTop||(a={opacity:0}),l.default.createElement(m.Paper,{zDepth:0},l.default.createElement("img",{src:I.default,style:{display:"none"}}),l.default.createElement(h.default,null),l.default.createElement("div",{ref:"commSingerList",className:"common-singer-list",style:N.commonSingerList,onScroll:this.onScroll.bind(this)},l.default.createElement("div",{style:N.hotFilter},l.default.createElement("div",{style:{width:"3rem",display:"flex",justifyContent:"center",alignItems:"center"},onTouchTap:this.handleHotPanel},o||"热门",l.default.createElement("div",{style:N.hotFilter.icon},l.default.createElement(E.default,{color:"#ff6832"}))),l.default.createElement(m.Popover,{style:{boxShadow:"rgba(128, 128, 128, 0.51) 1px 1px 20px 3px"},open:this.state.openHotChoose,anchorEl:this.state.anchorEl,anchorOrigin:{horizontal:"middle",vertical:"top"},targetOrigin:{horizontal:"middle",vertical:"bottom"},onRequestClose:function(){e.setState({openHotChoose:!1})}},l.default.createElement("div",{className:"hot-key"},this.getHotKey()))),this.state.offLine&&0!==this.state.currentPage&&0===this.state.pageData.length?l.default.createElement(L.default,{style:{position:"absolute",top:"-1rem"}}):"",this.state.dataLoaded&&this.state.currentPage>=1&&0===this.state.pageData.length?l.default.createElement(k.default,{style:{position:"absolute",top:"-1rem"}}):l.default.createElement("div",null,l.default.createElement(m.List,{className:"single-list",style:{paddingTop:"2.4rem"}},this.state.pageData.map(function(t){return l.default.createElement(m.ListItem,{innerDivStyle:{paddingLeft:"2rem",paddingTop:".553rem"},className:"single-item",key:t.id,onClick:function(){var r=e.state,n=r.cacheData,o=r.scrollTop;n.scrollTop=o,e.props.action_setSingerList(n),(0,b.linkTo)("songs/singerId/"+t.id+"/"+t.nameNorm,!1,null)},leftAvatar:l.default.createElement(m.Avatar,{style:{overflow:"hidden",height:"1.12rem",width:"1.12rem"},src:t.image,size:n}),rightIcon:l.default.createElement(_.default,{style:{top:".01rem",margin:".4rem",height:".64rem",width:".64rem"}}),primaryText:l.default.createElement("div",{style:{fontSize:".4rem"}},t.nameNorm)})})),l.default.createElement("div",{className:"loading-bottom"},this.state.loading?l.default.createElement("div",null,l.default.createElement(m.RefreshIndicator,{size:30,left:70,top:0,loadingColor:"#FF9800",status:"loading",style:N.loadingBar}),l.default.createElement("span",null,"正在加载")):"",l.default.createElement("span",null,this.state.lastPage?"亲爱滴，已经到底了":""),l.default.createElement("span",null,!this.state.loading&&this.state.offLine&&0!==this.state.currentPage&&0!==this.state.pageData.length?R.default.STRING_NO_WIFI:"")))),l.default.createElement("div",{className:"scroll-to-top-button",style:a,onClick:function(){e.scrollTo(0)}},l.default.createElement(T.default,{color:"white"})),l.default.createElement(O.default,{selectedIndex:0}))}},{key:"onScroll",value:function(e){if(e.target.classList&&e.target.classList.contains("common-singer-list")){this.state.scrollTarget=e.target;var t=e.target.scrollHeight-(e.target.scrollTop+e.target.clientHeight);this.state.scrollTop=e.target.scrollTop,!this.state.loading&&t<50&&this.loadMoreAction(),e.target.scrollTop>R.default.NEED_SCROLL_TOP_HEIGHT?this.setState({needScrollToTop:!0}):this.setState({needScrollToTop:!1})}}},{key:"scrollTo",value:function(e){var t=this.state||{scrollTo:function(e){return e}},r=t.scrollTarget;r.scrollTop=e,setTimeout(function(){r.scrollTop=e},100)}},{key:"loadMoreAction",value:function(){var e=this;if(!this.state.loading&&!this.state.lastPage){var t=this.state.currentPage+1,r=this.state,o=r.pageSize,a=r.keyWord,i=r.id,l=n({currentPage:t,pageSize:o,keyword:a,id:i},this.props.match.params);this.props.action_getSingerList(l,(0,b.reqHeader)(l),null,function(t,r){r.code===R.default.CODE_OFF_LINE&&e.setState({offLine:!0,loading:!1})}),this.setState({currentPage:t,loading:!0})}}},{key:"refreshPage",value:function(){this.setState({pageData:[]}),this.state.currentPage=0,this.state.loading=!1,this.state.lastPage=!1,this.loadMoreAction()}},{key:"handleHotPanel",value:function(e){e.preventDefault(),this.setState({openHotChoose:!0,anchorEl:e.currentTarget})}},{key:"getHotKey",value:function(){var e=this,t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=this.state.keyWord,n=[];n.push(""===r?l.default.createElement("p",{className:"active",key:"热门"},l.default.createElement("font",{style:{fontSize:".4rem"}},"热门")):l.default.createElement("p",{onClick:function(){e.chooseKey("")},key:"热门"},l.default.createElement("font",{style:{fontSize:".4rem"}},"热门")));var o=!0,a=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(o=(u=s.next()).done);o=!0)!function(){var t=u.value;r===t?n.push(l.default.createElement("p",{className:"active",key:t},t)):n.push(l.default.createElement("p",{onClick:function(){e.chooseKey(t)},key:t},t))}()}catch(e){a=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw i}}return n}},{key:"chooseKey",value:function(e){this.setState({openHotChoose:!1,keyWord:e,dataLoaded:!1}),this.state.keyWord=e,this.refreshPage()}}]),SingerList}(d.default),j=function(e,t){return{songs:e.app.songs,common:e.app.common}},q=function(e,t){return{action_getSingerList:(0,y.bindActionCreators)(c.getSingerCategoryAlbum,e),action_setSingerList:(0,y.bindActionCreators)(w.setSingerList,e)}};t.default=(0,s.withRouter)((0,u.connect)(j,q)(M))},765:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),a=r(283),i=_interopRequireDefault(a),l=(r(106),r(105),r(19)),u=_interopRequireDefault(l),s=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),i.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),n(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(r){var n={};n[e]=r,t.setState(n)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,r){var n=t||{},o=n.data,a=o||{},i=a.systemTime,l=a.timeStamp,s=this.isVip(e),c=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof c)return r&&r(c),"正在获取用户信息";if(!1===c)return r&&r("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===f)return r&&r("",u.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!i||!l)&&!(i-l>72e4)}()?!1!==s||(r&&r("",u.default.COMMON.ALERT_TYPE_BE_VIP),!1):(r&&r("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var r=this.isBindDevice(e);return"string"==typeof r?(t&&t(r),r):!1===r?(t&&t("",u.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===r||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var r=e||{},n=r.data,o=n||{},a=o.systemTime,i=o.timeStamp;if(a&&i){return!!!(a-i>72e4)||(t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",u.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){return 1===n.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},r=t.status,n=t.msg,o=t.data;if(void 0!==r){if(-100===r)return"请使用微信操作";if(1===r){var a=o.isReDevice;o.bindExpireTime;return 1===a}return n||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},r=t.status,n=t.data;if(void 0!==r){var o=n.vipStatus,a=n.expireTime;return 1===o&&(new Date).getTime()<a}return"正在获取用户信息"}}]),BaseComponent}(o.Component);t.default=s},766:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var r=s.default.apiDomain+l.default.API_QUERY_USER_SOUND;return function(n){(0,a.comFetch)(n,e,{url:r,headers:t,action:o.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t,r,n){var i=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_GET_RECOMMEND},r,n)}}function push(e,t,r,n){var i=s.default.apiDomain+l.default.API_PUSH;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_PUSH},r,n)}}function pushLocal(e,t,r,n,i){var u=e+l.default.API_PUSH;return function(e){(0,a.comFetch)(e,t,{url:u,type:"get",headers:r,timeout:3e3,action:o.default.SONG.API_PUSH},n,i)}}function getChooseList(e,t,r,n){var i=s.default.apiDomain+l.default.API_CHOOSE_LIST;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_CHOOSE_LIST},r,n)}}function getHistorySongList(e,t){var r=s.default.apiDomain+l.default.API_CHOOSE_LIST;return function(n){(0,a.comFetch)(n,e,{url:r,headers:t,action:o.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,r){var n=s.default.apiDomain+l.default.API_SET_SONG_TOP;return function(i){(0,a.comFetch)(i,e,{url:n,headers:t,action:o.default.SONG.API_SET_SONG_TOP},r)}}function getSingerCategoryAlbum(e,t,r,n){var i=s.default.apiDomain+l.default.API_GET_SINGER_CATEGORY_ALBUM;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},r,n)}}function getActorsAlbum(e,t,r,n){var i=s.default.apiDomain+l.default.API_GET_ACTORS_ALBUM;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_GET_ACTORS_ALBUM},r,n)}}function getCatAlbum(e,t,r){var n=s.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:n,headers:t,action:o.default.SONG.API_GET_CAT_ALBUM},r)}}function getCatSongList(e,t,r,n){var i=s.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_GET_CAT_SONG_LIST},r,n)}}function getRankAlbum(e,t,r,n){var i=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_GET_RANK_ALBUM},r,n)}}function getAlbumRecommend(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,a.comFetch)(i,e,{url:n,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND},r)}}function getAlbumRecommendSongList(e,t,r,n){var i=s.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:o.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},r,n)}}function getRanking(e,t,r){var n=s.default.apiDomain+l.default.API_QUERY_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:n,headers:t,action:o.default.SONG.API_QUERY_RANKING},r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var n=r(19),o=_interopRequireDefault(n),a=r(24),i=r(107),l=_interopRequireDefault(i),u=r(72),s=_interopRequireDefault(u)},767:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),i=_interopRequireDefault(a),l=r(169),u=r(282),s=r(1),c=_interopRequireDefault(s),f=r(765),d=_interopRequireDefault(f),p=r(25),h=r(105),m=r(768),g=_interopRequireDefault(m),_=r(769),y=_interopRequireDefault(_),b=r(770),v=_interopRequireDefault(b),E=r(771),S=_interopRequireDefault(E),O=r(772),P=_interopRequireDefault(O),R={nav:{height:"1.4rem",position:"fixed",borderTop:"1px solid #efeeef",bottom:-1,zIndex:"2",playController:{position:"relative",paddingLeft:0,paddingRight:0,circle:{position:"absolute",top:"-.93rem",height:"2.4rem",arc:{border:"1px solid #efeeef",position:"absolute",marginLeft:"-.907rem",left:"50%",width:"1.813rem",height:"1.067rem",bottom:"1.1rem",borderRadius:"1.067rem 1.067rem 0 0",backgroundColor:"white"},maskLine:{height:"1.493rem",borderTop:"1px solid white",width:"1.707rem",position:"absolute",bottom:0,left:"50%",marginLeft:"-.853rem",backgroundColor:"white"},maskArc:{height:"1.467rem",width:"100%",position:"absolute",bottom:0,backgroundColor:"white"},icon:{position:"absolute",left:"50%",marginLeft:"-.7rem",width:"1.4rem",bottom:".56rem",backgroundColor:"#ff6d32",borderRadius:"50%"}}},label:{position:"absolute",width:"100%",textAlign:"center",bottom:4,left:0,fontSize:".267rem"}}},C=function(e){function MBottomNavigation(e){_classCallCheck(this,MBottomNavigation);var t=_possibleConstructorReturn(this,(MBottomNavigation.__proto__||Object.getPrototypeOf(MBottomNavigation)).call(this,e));return t.state={selectedIndex:t.props.selectedIndex},t}return _inherits(MBottomNavigation,e),o(MBottomNavigation,[{key:"render",value:function(){var e=this,t=0===this.state.selectedIndex?y.default:g.default,r=2===this.state.selectedIndex?S.default:v.default,o=["#999","#999","#999"];return o[this.state.selectedIndex]="#ff6832",i.default.createElement(l.BottomNavigation,{selectedIndex:this.state.selectedIndex,style:R.nav},i.default.createElement(l.BottomNavigationItem,{style:{paddingTop:".213rem",paddingBottom:".113rem",maxWidth:"100%"},label:i.default.createElement("div",{style:n({},R.nav.label,{color:o[0],bottom:".107rem"})},"主页"),icon:i.default.createElement("div",{style:{height:".667rem",marginBottom:".4rem",display:"flex",justifyContent:"center",alignItems:"center"}},i.default.createElement("img",{style:{height:".667rem",width:".62rem"},src:t})),onTouchTap:function(){return e.navSelect(0)}}),i.default.createElement(l.BottomNavigationItem,{style:n({},R.nav.playController,{maxWidth:"100%"}),label:i.default.createElement("div",{style:n({},R.nav.label,{color:o[1],bottom:".107rem"})},"播控"),icon:i.default.createElement("div",{style:R.nav.playController.circle},i.default.createElement("div",{style:R.nav.playController.circle.arc}),i.default.createElement("div",{style:R.nav.playController.circle.maskLine}),i.default.createElement("div",{style:R.nav.playController.circle.maskArc}),i.default.createElement("img",{style:R.nav.playController.circle.icon,src:P.default})),onTouchTap:function(){return e.navSelect(1)}}),i.default.createElement(l.BottomNavigationItem,{style:{paddingTop:".213rem",paddingBottom:".113rem",maxWidth:"100%"},label:i.default.createElement("div",{style:n({},R.nav.label,{color:o[2],bottom:".107rem"})},"我的"),icon:i.default.createElement("div",{style:{height:".667rem",marginBottom:".4rem",display:"flex",justifyContent:"center",alignItems:"center"}},i.default.createElement("img",{style:{height:".667rem",width:".667rem"},src:r})),onTouchTap:function(){return e.navSelect(2)}}))}},{key:"navSelect",value:function(e){switch(this.setState({selectedIndex:e}),e){case 0:(0,u.linkTo)("",!1,null);break;case 1:(0,u.linkTo)("controller/",!1,null);break;case 2:(0,u.linkTo)("user",!1,null)}}}]),MBottomNavigation}(d.default);C.propTypes={selectedIndex:c.default.number},C.defaultProps={selectedIndex:0};var T=function(e,t){return{}},w=function(e,t){return{}};t.default=(0,p.withRouter)((0,h.connect)(T,w)(C))},768:function(e,t,r){e.exports=r.p+"img/common/nav_index.png?f587230d14e97fe3edc24933ff28f97c"},769:function(e,t,r){e.exports=r.p+"img/common/nav_index_on.png?b4a94c832861bea691015dd45b804220"},770:function(e,t,r){e.exports=r.p+"img/common/nav_me.png?e84268d0fc58e6264bb6518f670f30b7"},771:function(e,t,r){e.exports=r.p+"img/common/nav_me_on.png?abfda0a35e4303b76b1647488e2c0859"},772:function(e,t,r){e.exports=r.p+"img/common/nav_controll_gif.png?b6c8794a706723245e6e70d34944ded5"},773:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(73),i=_interopRequireDefault(a),l=r(0),u=_interopRequireDefault(l),s=r(1),c=_interopRequireDefault(s),f=r(282),d={position:"absolute",top:"66px"},p=function(e){function Input(e){_classCallCheck(this,Input);var t=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,e));return t.state={hash:(0,f.getRandomString)(24),value:"",errorText:"",trim:t.props.trim||!1},t.handelValidate.bind(t),t}return _inherits(Input,e),o(Input,[{key:"componentDidMount",value:function(){var e=this.props.doValidate;e&&e(this.handelValidate.bind(this),this.state.hash)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.errorStyle,e.errorText,e.minLength,e.maxLength,e.bindState,e.validate,e.doValidate,e.trim,_objectWithoutProperties(e,["onChange","errorStyle","errorText","minLength","maxLength","bindState","validate","doValidate","trim"]));return u.default.createElement(i.default,n({ref:"input",errorStyle:d,errorText:this.state.errorText,onChange:this.handelChange.bind(this)},t))}},{key:"handelChange",value:function(e,t){this.state.trim&&(t=t.trim()),this.setState({value:t}),this.handelValidate(t);var r=this.props.bindState;r&&r(t)}},{key:"handelValidate",value:function(e){e=e||this.state.value;var t="",r=this.props.validate,n=this.props.minLength,o=this.props.maxLength;if("string"==typeof e&&(n&&e.length<n&&(t="长度不能小于"+n),o&&e.length>o&&(t="长度不能大于"+o)),!t&&"string"==typeof r)switch(r){case"account":/^[a-zA-z]\w{3,15}$/.test(e)||(t=this.props.errorText)}return this.setState({errorText:t}),t}}]),Input}(u.default.Component);t.default=p,p.propTypes={minLength:c.default.number,maxLength:c.default.number,errorStyle:c.default.object,validate:c.default.any,bindState:c.default.func,doValidate:c.default.func}},774:function(e,t,r){var n=r(775);"string"==typeof n&&(n=[[e.i,n,""]]);r(285)(n,{});n.locals&&(e.exports=n.locals)},775:function(e,t,r){t=e.exports=r(284)(),t.push([e.i,".search-header .search-bar-panel{top:0;z-index:6;width:100%;color:#fff;position:fixed;padding:.13rem .107rem;text-align:center;height:1.2rem;background:-webkit-gradient(linear,0 100,283 0,from(#ff6932),to(#ff8332));display:inline-table!important}.search-header .search-bar-panel .key-word-input{margin:0;padding:0;overflow:hidden;width:100%!important;display:flex!important;border-radius:1.2rem;background-color:#fe9e62!important;height:.93rem!important;border:1px solid #fe9e62}.search-header .search-bar-panel .key-word-input div:first-child{display:flex;width:90%;height:100%;justify-content:center;align-items:center;bottom:auto!important}.search-header .search-bar-panel .key-word-input hr{display:none!important}.search-header .search-bar-panel .key-word-input input{height:.9rem!important;padding-left:5%!important;color:#fff!important;font-size:.4rem!important}.search-header .search-bar-panel .key-word-input font{font-size:.4rem}.search-header .search-bar-panel .key-word-input img.search{height:.32rem;margin-right:.107rem}.search-header .search-bar-panel .key-word-input img.voice{display:block;padding:.16rem .267rem .16rem .48rem;width:1.067rem;height:.8rem;position:absolute;right:.32rem;z-index:1}.search-header .search-bar-panel .search-button{width:1.4rem;display:table-cell}.search-header .search-panel{width:100%;height:100%;z-index:2;position:fixed;background-color:#fff}.search-header .search-panel .search-words{height:100%;padding:12px;padding-top:0}.search-header .search-panel .search-words .hot-words{display:flex;flex-wrap:wrap}.search-header .search-panel .search-words .hot-words .word{margin:4px 0 0 4px!important}.search-header .search-panel .search-words .history-words-title{height:.8rem;margin-top:.6rem}.search-header.gray .search-bar-panel{top:1.2rem;background:#d7d7d7}.search-header.gray .search-bar-panel .key-word-input{background-color:#fff!important;border:1px solid #fff!important}.search-header.gray .search-bar-panel .key-word-input div:first-child{color:#999}",""]),t.locals={barBaseHeight:"1.2rem"}},776:function(e,t,r){e.exports=r.p+"img/common/icon_voice.png?fb3acfa27b8a407b649d03a4a0f43840"},777:function(e,t,r){e.exports=r.p+"img/common/icon_search.png?0fb44260fa7b8de5f8c3c4dbf1ab4fa6"},778:function(e,t,r){e.exports=r.p+"img/common/bg_no_network.png?ec6f187423c8d73d62f1171882f62080"},780:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),a=_interopRequireDefault(o);r(774);var i=r(105),l=r(773),u=_interopRequireDefault(l),s=r(765),c=_interopRequireDefault(s),f=r(282),d=r(106),p=r(776),h=_interopRequireDefault(p),m=r(777),g=_interopRequireDefault(m),_=r(781),y=_interopRequireDefault(_),b=r(782),v=_interopRequireDefault(b),E=function(e){function SearchHeaderFake(e){return _classCallCheck(this,SearchHeaderFake),_possibleConstructorReturn(this,(SearchHeaderFake.__proto__||Object.getPrototypeOf(SearchHeaderFake)).call(this,e))}return _inherits(SearchHeaderFake,e),n(SearchHeaderFake,[{key:"render",value:function(){var e=this.props.grayTheme||"",t=g.default,r=h.default;return"gray"===e&&(t=v.default,r=y.default),a.default.createElement("div",{className:"search-header "+e,onTouchTap:function(){(0,f.linkTo)("song/search",!1,null)}},a.default.createElement("span",{className:"search-bar-panel",style:{display:"flex!important"}},a.default.createElement(u.default,{ref:"input",className:"key-word-input",hintText:a.default.createElement("div",null,a.default.createElement("img",{className:"search",src:t}),a.default.createElement("font",null,"请输入你要找的歌曲或歌星"),a.default.createElement("img",{onTouchTap:function(e){e.preventDefault(),e.stopPropagation(),(0,f.linkTo)("voiceSearch",!1,"")},className:"voice",src:r})),hintStyle:{color:"white",textAlign:"center",width:"100%"}})))}}]),SearchHeaderFake}(c.default);t.default=(0,d.withRouter)((0,i.connect)(function(){return{}},function(){return{}})(E))},781:function(e,t,r){e.exports=r.p+"img/common/icon_voice_gray.png?2a3901e992d5705d0be944c98c155048"},782:function(e,t,r){e.exports=r.p+"img/common/icon_search_gray.png?abedcb8e0409cebc1dc4a1314c17b21b"},784:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),i=_interopRequireDefault(a),l=r(785),u=_interopRequireDefault(l),s={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c=function(e){function NoResult(e){return _classCallCheck(this,NoResult),_possibleConstructorReturn(this,(NoResult.__proto__||Object.getPrototypeOf(NoResult)).call(this,e))}return _inherits(NoResult,e),o(NoResult,[{key:"render",value:function(){var e=this.props.style||{};return i.default.createElement("div",{style:n({},s.noResult,e)},i.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),i.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},this.props.message||"没有任何东东哟"))}}]),NoResult}(i.default.Component);t.default=c},785:function(e,t,r){e.exports=r.p+"img/common/bg_no_result.png?0e0d84b85deaafc6c825178837effa30"},786:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),i=_interopRequireDefault(a),l=r(778),u=_interopRequireDefault(l),s={noResult:{height:"100%",width:"100%",zIndex:-1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c=function(e){function NoWifi(e){return _classCallCheck(this,NoWifi),_possibleConstructorReturn(this,(NoWifi.__proto__||Object.getPrototypeOf(NoWifi)).call(this,e))}return _inherits(NoWifi,e),o(NoWifi,[{key:"render",value:function(){var e=this.props.style||{};return i.default.createElement("div",{style:n({},s.noResult,e)},i.default.createElement("img",{src:u.default,style:{maxWidth:"7rem"}}),i.default.createElement("p",{style:{color:"#7e7e7e",margin:0,fontSize:".4rem"}},"网络已被带走"))}}]),NoWifi}(i.default.Component);t.default=c},794:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=_interopRequireDefault(n),a=r(23),i=_interopRequireDefault(a),l=r(20),u=_interopRequireDefault(l),s=function(e){return o.default.createElement(u.default,e,o.default.createElement("path",{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"}))};s=(0,i.default)(s),s.displayName="EditorVerticalAlignTop",s.muiName="SvgIcon",t.default=s},840:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=_interopRequireDefault(n),a=r(23),i=_interopRequireDefault(a),l=r(20),u=_interopRequireDefault(l),s=function(e){return o.default.createElement(u.default,e,o.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}))};s=(0,i.default)(s),s.displayName="HardwareKeyboardArrowRight",s.muiName="SvgIcon",t.default=s}});