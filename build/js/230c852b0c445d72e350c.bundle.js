webpackJsonp([2],{725:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},i=n(0),l=_interopRequireDefault(i),s=n(101),u=n(102),c=n(284),f=n(27),p=_interopRequireDefault(f),d=n(287),h=n(747),m=_interopRequireDefault(h);n(758);var g=n(748),_=n(756),b=_interopRequireDefault(_),y=n(277),v=n(853),S=_interopRequireDefault(v),E=n(854),k=_interopRequireDefault(E),w=n(855),O=_interopRequireDefault(w),P=n(166),R=n(50),C=n(770),T=_interopRequireDefault(C),A=n(763),x=_interopRequireDefault(A),I=n(791),N=_interopRequireDefault(I),D={home:{paddingTop:"1.2rem",position:"absolute",height:"100%",overflowY:"auto",width:"100%"},topNav:{display:"table",width:"100%",item:{display:"table-cell",width:"33.33%",paddingTop:13,textAlign:"center"},img:{width:"45%"},label:{margin:6,fontSize:".4rem",color:"#ff6832"}},paper:{margin:4,minHeight:"5.2rem"},tile:{width:"100%",overflow:"hidden"},tileImg:{height:"3.067rem",width:"4.4rem",minWidth:"4.4rem",margin:"auto",display:"inherit",backgroundImage:"url("+N.default+")",backgroundRepeat:"no-repeat",backgroundSize:"auto 60%",backgroundColor:"#eaeaea",backgroundPosition:"center"},gridList:{display:"flex",flexWrap:"nowrap",overflowX:"auto",margin:"0 4px"},itemTitle:{fontSize:10,lineHeight:"12px",paddingTop:6,textAlign:"center"},loading:{position:"relative",display:"flex",justifyContent:"center",height:30,fontSize:"14px",marginBottom:88,alignItems:"center"},loadingBar:{boxShadow:"none",top:"none",left:"none",transform:"none",marginLeft:-50}},L=function(e){function Home(e){_classCallCheck(this,Home);var t=_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,e));return a(Home.prototype.__proto__||Object.getPrototypeOf(Home.prototype),"title",t).call(t,"金麦客"),t.state={defaultBack:"/",showMsg:!1,msgText:"",pageSize:20,pageData:[],loading:!1,currentPage:0,lastPage:!1,barrageSendToast:!1,barrageToastMsg:""},t.onPushSongFail=t.onPushSongFail.bind(t),t.onPushSongSuccess=t.onPushSongSuccess.bind(t),t.getRecommendSongsContent=t.getRecommendSongsContent.bind(t),t}return _inherits(Home,e),r(Home,[{key:"componentDidMount",value:function(){var e={id:"home"},t=e;this.props.action_getRanking(e,(0,y.reqHeader)(e)),this.props.action_getAlbumRecommend(t,(0,y.reqHeader)(t)),0===this.state.currentPage&&this.loadMoreAction()}},{key:"componentDidUpdate",value:function(e){this.state.stamp;if(e.songs.recommendSongsStamp!==this.props.songs.recommendSongsStamp){var t=this.props.songs.recommendSongs||{data:{result:[],lastPage:!1}},n=t.data,o=n.result,r=n.lastPage;this.setState({pageData:[].concat(_toConsumableArray(this.state.pageData),_toConsumableArray(o||[])),lastPage:r,loading:!1})}}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.songs.getAlbumRecommend||{data:{result:[]}},n=this.props.songs.getRanking||{data:{result:[]}};return l.default.createElement("div",null,l.default.createElement(b.default,{back:this.back}),l.default.createElement("div",{className:"home",style:D.home,onScroll:this.onScroll.bind(this)},l.default.createElement(p.default,{zDepth:0},l.default.createElement("div",{style:D.topNav},l.default.createElement("span",{style:D.topNav.item,onClick:function(){(0,y.linkTo)("catAlbum",!1,null)}},l.default.createElement("img",{src:S.default,style:D.topNav.img}),l.default.createElement("p",{style:D.topNav.label},"分类")),l.default.createElement("span",{style:D.topNav.item,onClick:function(){(0,y.linkTo)("singer/album",!1,null)}},l.default.createElement("img",{src:O.default,style:D.topNav.img}),l.default.createElement("p",{style:D.topNav.label},"歌星")),l.default.createElement("span",{style:D.topNav.item,onClick:function(){(0,y.linkTo)("songs/hotId/48/热歌/http%3A%2F%2Fimagetest___dot___j-make___dot___com___dot___cn%2Fimages%2Fkalaok%2F71A3C59FB3A1B4D7___dot___png",!1,null)}},l.default.createElement("img",{src:k.default,style:D.topNav.img}),l.default.createElement("p",{style:D.topNav.label},"热歌")))),l.default.createElement(p.default,{zDepth:0,style:o({},D.paper,{position:"relative"})},l.default.createElement(d.CardTitle,{style:{padding:"0 8px",height:"1.467rem"},titleStyle:{fontSize:".453rem",paddingTop:".22rem"},title:"精选推荐"}),l.default.createElement("div",{style:{width:"100%",overflowX:"auto",overflowY:"hidden",position:"absolute"}},t.data.result.map(function(e){return l.default.createElement(c.GridTile,{key:e.id,title:"",style:{display:"table-cell",padding:"0 .067rem"},titleStyle:{textAlign:"center",marginRight:"16px",marginTop:"20%",color:"black"},titleBackground:"transparent",onTouchTap:function(){(0,y.linkTo)("songs/recommendId/"+e.id+"/"+e.name+"/"+encodeURIComponent(e.wxPic||e.imgurl).replace(/\./g,"___dot___"),!1,null)}},l.default.createElement("div",{style:D.tile},l.default.createElement("img",{src:e.wxPic||e.imgurl,style:D.tileImg}),l.default.createElement("div",{style:D.itemTitle},e.name)))}))),l.default.createElement(p.default,{zDepth:0,style:o({},D.paper,{position:"relative"})},l.default.createElement(d.CardTitle,{style:{padding:"0 8px",height:"1.467rem"},titleStyle:{fontSize:".453rem",paddingTop:".22rem"},title:"经典排行"}),l.default.createElement("div",{style:{width:"100%",overflowX:"auto",overflowY:"hidden",position:"absolute"}},n.data.result.map(function(e){return l.default.createElement(c.GridTile,{key:e.id,title:"",style:{display:"table-cell",padding:"0 .067rem"},titleBackground:"transparent",onTouchTap:function(){(0,y.linkTo)("songs/hotId/"+e.id+"/"+e.name+"/"+encodeURIComponent(e.wxPic||e.imgurl).replace(/\./g,"___dot___"),!1,null)}},l.default.createElement("div",{style:D.tile},l.default.createElement("img",{src:e.wxPic||e.imgurl,style:D.tileImg}),l.default.createElement("div",{style:D.itemTitle},e.name)))}))),l.default.createElement(p.default,{zDepth:0,style:D.paper},l.default.createElement(d.CardTitle,{style:{padding:"0 8px"},titleStyle:{fontSize:14},title:"个性化推荐"}),l.default.createElement(P.List,{className:"song-list"},this.getRecommendSongsContent()),l.default.createElement("div",{style:D.loading},this.state.loading?l.default.createElement(P.RefreshIndicator,{size:30,left:70,top:0,loadingColor:"#FF9800",status:"loading",style:D.loadingBar}):"",l.default.createElement("span",null,this.state.lastPage?"亲爱滴，已经到底了":"正在加载")))),l.default.createElement(P.Snackbar,{open:this.state.barrageSendToast,message:this.state.barrageToastMsg,autoHideDuration:500,onRequestClose:function(){e.setState({barrageSendToast:!1})}}),l.default.createElement(T.default,{selectedIndex:0}))}},{key:"onScroll",value:function(e){if(!this.state.loading&&e.target.classList&&e.target.classList.contains("home")){e.target.scrollHeight-(e.target.scrollTop+e.target.clientHeight)<50&&this.loadMoreAction()}}},{key:"loadMoreAction",value:function(e,t){if(!this.state.loading&&!this.state.lastPage){var n=this.state.currentPage+1,o=this.state.pageSize,r={currentPage:n,pageSize:o,id:"48"};this.props.action_getRecommend(r,(0,y.reqHeader)(r),e),this.setState({currentPage:n,loading:!0})}}},{key:"getRecommendSongsContent",value:function(){var e=this;return this.state.pageData.map(function(t){return l.default.createElement(x.default,{key:t.id,song:t,onPushSongSuccess:e.onPushSongSuccess,onPushSongFail:e.onPushSongFail})})}},{key:"onPushSongSuccess",value:function(e){var t=e.nameNorm;this.setState({barrageSendToast:!0,barrageToastMsg:t+" 点歌成功"})}},{key:"onPushSongFail",value:function(e){this.setState({barrageSendToast:!0,barrageToastMsg:e})}}]),Home}(m.default),M=function(e,t){return{songs:e.app.songs}},j=function(e,t){return{action_getRecommend:(0,R.bindActionCreators)(g.getRecommend,e),action_getAlbumRecommend:(0,R.bindActionCreators)(g.getAlbumRecommend,e),action_getRanking:(0,R.bindActionCreators)(g.getRanking,e)}};t.default=(0,u.withRouter)((0,s.connect)(M,j)(L))},747:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(0),a=n(278),i=_interopRequireDefault(a),l=(n(102),n(101),n(19)),s=_interopRequireDefault(l),u=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),i.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),o(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var o={};o[e]=n,t.setState(o)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var o=t||{},r=o.data,a=r||{},i=a.systemTime,l=a.timeStamp,u=this.isVip(e),c=this.isBindDevice(e),f=this.isFreeActivation(e);if("string"==typeof c)return n&&n(c),"正在获取用户信息";if(!1===c)return n&&n("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===c){if(!0===f)return n&&n("",s.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===f)return function(){return!(!i||!l)&&!(i-l>72e4)}()?!1!==u||(n&&n("",s.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},o=n.data,r=o||{},a=r.systemTime,i=r.timeStamp;if(a&&i){return!!!(a-i>72e4)||(t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,o=t.data;if(void 0!==n){return 1===o.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,o=t.msg,r=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var a=r.isReDevice;r.bindExpireTime;return 1===a}return o||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,o=t.data;if(void 0!==n){var r=o.vipStatus,a=o.expireTime;return 1===r&&(new Date).getTime()<a}return"正在获取用户信息"}}]),BaseComponent}(r.Component);t.default=u},748:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var n=u.default.apiDomain+l.default.API_QUERY_USER_SOUND;return function(o){(0,a.comFetch)(o,e,{url:n,headers:t,action:r.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t){var n=u.default.apiDomain+l.default.API_QUERY_ALBUM;return function(o){(0,a.comFetch)(o,e,{url:n,headers:t,action:r.default.SONG.API_GET_RECOMMEND},null)}}function push(e,t,n,o){var i=u.default.apiDomain+l.default.API_PUSH;return function(l){(0,a.comFetch)(l,e,{url:i,headers:t,action:r.default.SONG.API_PUSH},n,o)}}function pushLocal(e,t,n,o,i){var s=e+l.default.API_PUSH;return function(e){(0,a.comFetch)(e,t,{url:s,type:"get",headers:n,timeout:3e3,action:r.default.SONG.API_PUSH},o,i)}}function getChooseList(e,t){var n=u.default.apiDomain+l.default.API_CHOOSE_LIST;return function(o){(0,a.comFetch)(o,e,{url:n,headers:t,action:r.default.SONG.API_CHOOSE_LIST},null)}}function getHistorySongList(e,t){var n=u.default.apiDomain+l.default.API_CHOOSE_LIST;return function(o){(0,a.comFetch)(o,e,{url:n,headers:t,action:r.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,n){var o=u.default.apiDomain+l.default.API_SET_SONG_TOP;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_SET_SONG_TOP},n)}}function getSingerCategoryAlbum(e,t,n){var o=u.default.apiDomain+l.default.API_GET_SINGER_CATEGORY_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},n)}}function getActorsAlbum(e,t,n){var o=u.default.apiDomain+l.default.API_GET_ACTORS_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_GET_ACTORS_ALBUM},n)}}function getCatAlbum(e,t,n){var o=u.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_GET_CAT_ALBUM},n)}}function getCatSongList(e,t,n){var o=u.default.apiDomain+l.default.API_GET_CAT_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_GET_CAT_SONG_LIST},n)}}function getRankAlbum(e,t,n){var o=u.default.apiDomain+l.default.API_QUERY_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_GET_RANK_ALBUM},n)}}function getAlbumRecommend(e,t,n){var o=u.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_QUERY_ALBUM_RECOMMEND},n)}}function getAlbumRecommendSongList(e,t,n){var o=u.default.apiDomain+l.default.API_QUERY_ALBUM_RECOMMEND;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},n)}}function getRanking(e,t,n){var o=u.default.apiDomain+l.default.API_QUERY_ALBUM;return function(i){(0,a.comFetch)(i,e,{url:o,headers:t,action:r.default.SONG.API_QUERY_RANKING},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var o=n(19),r=_interopRequireDefault(o),a=n(23),i=n(103),l=_interopRequireDefault(i),s=n(70),u=_interopRequireDefault(s)},749:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(71),i=_interopRequireDefault(a),l=n(0),s=_interopRequireDefault(l),u=n(1),c=_interopRequireDefault(u),f=n(277),p={position:"absolute",top:"66px"},d=function(e){function Input(e){_classCallCheck(this,Input);var t=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,e));return t.state={hash:(0,f.getRandomString)(24),value:"",errorText:""},t.handelValidate.bind(t),t}return _inherits(Input,e),r(Input,[{key:"componentDidMount",value:function(){var e=this.props.doValidate;e&&e(this.handelValidate.bind(this),this.state.hash)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.errorStyle,e.errorText,e.minLength,e.maxLength,e.bindState,e.validate,e.doValidate,_objectWithoutProperties(e,["onChange","errorStyle","errorText","minLength","maxLength","bindState","validate","doValidate"]));return s.default.createElement(i.default,o({ref:"input",errorStyle:p,errorText:this.state.errorText,onChange:this.handelChange.bind(this)},t))}},{key:"handelChange",value:function(e,t){this.setState({value:t}),this.handelValidate(t);var n=this.props.bindState;n&&n(t)}},{key:"handelValidate",value:function(e){e=e||this.state.value;var t="",n=this.props.validate,o=this.props.minLength,r=this.props.maxLength;if("string"==typeof e&&(o&&e.length<o&&(t="长度不能小于"+o),r&&e.length>r&&(t="长度不能大于"+r)),!t&&"string"==typeof n)switch(n){case"account":/^[a-zA-z]\w{3,15}$/.test(e)||(t=this.props.errorText)}return this.setState({errorText:t}),t}}]),Input}(s.default.Component);t.default=d,d.propTypes={minLength:c.default.number,maxLength:c.default.number,errorStyle:c.default.object,validate:c.default.any,bindState:c.default.func,doValidate:c.default.func}},750:function(e,t,n){e.exports=n.p+"fonts/iconfont.eot?c930aafad3dc193752b0fbea5b8f2745"},751:function(e,t,n){var o=n(752);"string"==typeof o&&(o=[[e.i,o,""]]);n(280)(o,{});o.locals&&(e.exports=o.locals)},752:function(e,t,n){t=e.exports=n(279)(),t.push([e.i,".search-header .search-bar-panel{top:0;z-index:6;width:100%;color:#fff;position:fixed;padding:.133rem .107rem;text-align:center;height:1.2rem;background-color:#ff6932;display:inline-table!important}.search-header .search-bar-panel .key-word-input{margin:0;padding:0;width:auto!important;display:flex!important;border-radius:1.2rem;background-color:#fe9e62!important;height:.93rem!important;border:1px solid #fe9e62}.search-header .search-bar-panel .key-word-input div:first-child{display:flex;width:100%;height:100%;justify-content:center;align-items:center;bottom:auto!important}.search-header .search-bar-panel .key-word-input hr{display:none!important}.search-header .search-bar-panel .key-word-input input{height:.9rem!important;padding-left:5%!important;color:#fff!important}.search-header .search-bar-panel .key-word-input font{font-size:.4rem}.search-header .search-bar-panel .key-word-input img.search{height:12px;margin-right:4px}.search-header .search-bar-panel .key-word-input img.voice{display:block;padding:6px 10px 6px 18px;width:40px;height:30px;position:absolute;right:12px;z-index:1}.search-header .search-bar-panel .search-button{width:14%;display:table-cell}.search-header .search-panel{width:100%;height:100%;z-index:2;position:fixed;background-color:#fff}.search-header .search-panel .search-words{height:100%;padding:12px}.search-header .search-panel .search-words .hot-words{display:flex;flex-wrap:wrap}.search-header .search-panel .search-words .hot-words .word{margin:4px 0 0 4px!important}.search-header .search-panel .search-words .history-words-title{height:.8rem;margin-top:.6rem}",""]),t.locals={barBaseHeight:"1.2rem"}},753:function(e,t,n){e.exports=n.p+"img/common/icon_voice.png?fb3acfa27b8a407b649d03a4a0f43840"},754:function(e,t,n){e.exports=n.p+"img/common/icon_search.png?0fb44260fa7b8de5f8c3c4dbf1ab4fa6"},756:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(0),a=_interopRequireDefault(r);n(751);var i=n(101),l=n(749),s=_interopRequireDefault(l),u=n(747),c=_interopRequireDefault(u),f=n(277),p=n(102),d=n(753),h=_interopRequireDefault(d),m=n(754),g=_interopRequireDefault(m),_=function(e){function SearchHeaderFake(e){return _classCallCheck(this,SearchHeaderFake),_possibleConstructorReturn(this,(SearchHeaderFake.__proto__||Object.getPrototypeOf(SearchHeaderFake)).call(this,e))}return _inherits(SearchHeaderFake,e),o(SearchHeaderFake,[{key:"render",value:function(){return a.default.createElement("div",{className:"search-header"},a.default.createElement("span",{className:"search-bar-panel"},a.default.createElement(s.default,{ref:"input",className:"key-word-input",hintText:a.default.createElement("div",null,a.default.createElement("img",{className:"search",src:g.default}),a.default.createElement("font",null,"请输入你要找的歌曲或歌星"),a.default.createElement("img",{onClick:function(){(0,f.linkTo)("voiceSearch",!1,"")},className:"voice",src:h.default})),hintStyle:{color:"white",textAlign:"center",width:"100%"},onTouchTap:function(){(0,f.linkTo)("song/search",!1,null)}})))}}]),SearchHeaderFake}(c.default);t.default=(0,p.withRouter)((0,i.connect)(function(){return{}},function(){return{}})(_))},758:function(e,t,n){var o=n(759);"string"==typeof o&&(o=[[e.i,o,""]]);n(280)(o,{});o.locals&&(e.exports=o.locals)},759:function(e,t,n){t=e.exports=n(279)(),t.push([e.i,"@font-face{font-family:silkiconfont;src:url("+n(750)+");src:url("+n(750)+'#iefix) format("embedded-opentype"),url('+n(760)+') format("woff"),url('+n(761)+') format("truetype"),url('+n(762)+'#silkiconfont) format("svg");font-weight:400;font-style:normal}@keyframes rotate{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg)}to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}.silk-listcontrol-wrapper{overflow:hidden}.silk-listcontrol-wrapper-default{position:absolute;top:0;bottom:0;left:0;width:100%}.silk-listcontrol-scroller{z-index:1;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-text-size-adjust:none;text-size-adjust:none}.silk-listcontrol-scroller-horizontal{display:inline-block}.silk-listcontrol-scroller-vertical{position:relative}.silk-listcontrol-loadwrapper{display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:50px;line-height:50px;position:absolute;color:#8f8e93;font-size:14px}.silk-listcontrol-loadwrapper-up{top:-50px}.silk-listcontrol-loadtip{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center}.silk-listcontrol-icon{font-family:silkiconfont!important;font-size:14px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale;color:#3587f2;transition:transform .4s;-webkit-transition:-webkit-transform .4s}.silk-listcontrol-text{padding-left:5px}',""])},760:function(e,t){e.exports="data:application/font-woff;base64,"},761:function(e,t,n){e.exports=n.p+"fonts/iconfont.ttf?12a921df8a802d25de8ab8424fb51dd7"},762:function(e,t,n){e.exports=n.p+"fonts/iconfont.svg?a5e81d2f2094a8fb82b6a84067a7fd4e"},763:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},a=n(0),i=_interopRequireDefault(a),l=n(166),s=n(102),u=n(50),c=n(1),f=_interopRequireDefault(c),p=n(748),d=n(747),h=_interopRequireDefault(d),m=n(277),g=n(101),_=n(764),b=_interopRequireDefault(_),y=n(281),v=n(70),S=(_interopRequireDefault(v),function(e){function SongItem(e){_classCallCheck(this,SongItem);var t=_possibleConstructorReturn(this,(SongItem.__proto__||Object.getPrototypeOf(SongItem)).call(this,e));return t.state={pushIng:{}},t.pushSong=t.pushSong.bind(t),t}return _inherits(SongItem,e),o(SongItem,[{key:"render",value:function(){var e=this.props.song;return i.default.createElement(l.ListItem,{className:"song-item",key:e.id,primaryText:i.default.createElement("div",null,i.default.createElement("div",{className:"song-title"},e.nameNorm,i.default.createElement("i",{className:"label-vip"},e.charge?i.default.createElement("img",{src:b.default,style:{height:".4rem"}}):""))),secondaryText:i.default.createElement("div",{className:"song-author"},e.actor&&e.actor.map(function(e){return e.nameNorm}).join(" ")),rightToggle:this.state.pushIng[e.serialNo]?i.default.createElement(l.CircularProgress,{size:16,thickness:1,style:{right:3,textAlign:"center"}}):i.default.createElement("div",{className:"choose-button",onTouchTap:this.pushSong},"点歌")})}},{key:"pushSong",value:function(){var e=this,t=this.props,n=t.song,o=t.onPushSongSuccess,a=(t.onPushSongFail,t.userInfo),i=t.ottInfo,l=t.action_setGlobAlert;if(!0===r(SongItem.prototype.__proto__||Object.getPrototypeOf(SongItem.prototype),"validUserStatus",this).call(this,a.userInfoData,i,l)){this.state.pushIng[n.serialNo]=!0,this.setState({pushIng:this.state.pushIng});var s={id:JSON.stringify(n),type:4},u=function(){e.state.pushIng[n.serialNo]=!1,setTimeout(function(){e.setState({pushIng:e.state.pushIng}),o&&o(n)},600)},c=function(t){e.state.pushIng[n.serialNo]=!1,e.setState({pushIng:e.state.pushIng}),e.props.action_setGlobAlert("点歌失败！")};(0,m.dynaPush)({ottInfo:this.props.ottInfo,userInfo:this.props.userInfo,param:s,localNetIsWork:this.props.localNetIsWork,action_pushLocal:this.props.action_pushLocal,action_setLocalNet:this.props.action_setLocalNet,action_push:this.props.action_push,action_setGlobAlert:this.props.action_setGlobAlert,success:u,fail:c})}}}]),SongItem}(h.default));S.propTypes={song:f.default.object,onPushSongSuccess:f.default.func,onPushSongFail:f.default.func},S.defaultProps={song:{}};var E=function(e,t){return{songs:e.app.songs,userInfo:e.app.user.userInfo,ottInfo:e.app.device.ottInfo,localNetIsWork:e.app.common.localNetIsWork}},k=function(e,t){return{action_push:(0,u.bindActionCreators)(p.push,e),action_pushLocal:(0,u.bindActionCreators)(p.pushLocal,e),action_setGlobAlert:(0,u.bindActionCreators)(y.setGlobAlert,e),action_setLocalNet:(0,u.bindActionCreators)(y.setLocalNet,e)}};t.default=(0,s.withRouter)((0,g.connect)(E,k)(S))},764:function(e,t,n){e.exports=n.p+"img/common/icon_vip.png?8c3ff5f6596510032abfa218fbedbd82"},770:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(0),i=_interopRequireDefault(a),l=n(166),s=n(277),u=n(1),c=_interopRequireDefault(u),f=n(747),p=_interopRequireDefault(f),d=n(25),h=n(101),m=n(771),g=_interopRequireDefault(m),_=n(772),b=_interopRequireDefault(_),y=n(773),v=_interopRequireDefault(y),S=n(774),E=_interopRequireDefault(S),k=n(775),w=_interopRequireDefault(k),O={nav:{height:60,position:"fixed",borderTop:"1px solid #efeeef",bottom:"0",zIndex:"2",playController:{position:"relative",paddingLeft:0,paddingRight:0,circle:{position:"absolute",top:-55,height:110,arc:{border:"1px solid #efeeef",position:"absolute",marginLeft:-34,left:"50%",width:68,height:40,bottom:40,borderRadius:"40px 40px 0 0",backgroundColor:"white"},maskLine:{height:56,borderTop:"1px solid white",width:64,position:"absolute",bottom:0,left:"50%",marginLeft:-32,backgroundColor:"white"},maskArc:{height:55,width:"100%",position:"absolute",bottom:0,backgroundColor:"white"},icon:{position:"absolute",left:"50%",marginLeft:-28,width:56,bottom:18}}},label:{position:"absolute",width:"100%",textAlign:"center",bottom:4,left:0}}},P=function(e){function MBottomNavigation(e){_classCallCheck(this,MBottomNavigation);var t=_possibleConstructorReturn(this,(MBottomNavigation.__proto__||Object.getPrototypeOf(MBottomNavigation)).call(this,e));return t.state={selectedIndex:t.props.selectedIndex},t}return _inherits(MBottomNavigation,e),r(MBottomNavigation,[{key:"render",value:function(){var e=this,t=0===this.state.selectedIndex?b.default:g.default,n=2===this.state.selectedIndex?E.default:v.default,r=["#999","#999","#999"];return r[this.state.selectedIndex]="#ff6832",i.default.createElement(l.BottomNavigation,{selectedIndex:this.state.selectedIndex,style:O.nav},i.default.createElement(l.BottomNavigationItem,{label:i.default.createElement("div",{style:o({},O.nav.label,{color:r[0]})},"主页"),icon:i.default.createElement("div",{style:{height:30,marginBottom:12}},i.default.createElement("img",{style:{height:"100%"},src:t})),onTouchTap:function(){return e.navSelect(0)}}),i.default.createElement(l.BottomNavigationItem,{style:O.nav.playController,label:i.default.createElement("div",{style:o({},O.nav.label,{color:r[1]})},"播控"),icon:i.default.createElement("div",{style:O.nav.playController.circle},i.default.createElement("div",{style:O.nav.playController.circle.arc}),i.default.createElement("div",{style:O.nav.playController.circle.maskLine}),i.default.createElement("div",{style:O.nav.playController.circle.maskArc}),i.default.createElement("img",{style:O.nav.playController.circle.icon,src:w.default})),onTouchTap:function(){return e.navSelect(1)}}),i.default.createElement(l.BottomNavigationItem,{label:i.default.createElement("div",{style:o({},O.nav.label,{color:r[2]})},"我的"),icon:i.default.createElement("div",{style:{height:30,marginBottom:12}},i.default.createElement("img",{style:{height:"100%"},src:n})),onTouchTap:function(){return e.navSelect(2)}}))}},{key:"navSelect",value:function(e){switch(this.setState({selectedIndex:e}),e){case 0:(0,s.linkTo)("home",!1,null);break;case 1:(0,s.linkTo)("controller/",!1,null);break;case 2:(0,s.linkTo)("user",!1,null)}}}]),MBottomNavigation}(p.default);P.propTypes={selectedIndex:c.default.number},P.defaultProps={selectedIndex:0};var R=function(e,t){return{}},C=function(e,t){return{}};t.default=(0,d.withRouter)((0,h.connect)(R,C)(P))},771:function(e,t,n){e.exports=n.p+"img/common/nav_index.png?f587230d14e97fe3edc24933ff28f97c"},772:function(e,t,n){e.exports=n.p+"img/common/nav_index_on.png?b4a94c832861bea691015dd45b804220"},773:function(e,t,n){e.exports=n.p+"img/common/nav_me.png?e84268d0fc58e6264bb6518f670f30b7"},774:function(e,t,n){e.exports=n.p+"img/common/nav_me_on.png?abfda0a35e4303b76b1647488e2c0859"},775:function(e,t,n){e.exports=n.p+"img/common/nav_controll.png?35546dfe602b00e96b2d7681785459c1"},791:function(e,t,n){e.exports=n.p+"img/common/blank.png?473a51fbb0dffbfc6689665711503aaf"},853:function(e,t,n){e.exports=n.p+"img/common/icon_catelog.png?2fc15c0ed8e426bee06b676356f5474a"},854:function(e,t,n){e.exports=n.p+"img/common/icon_hot_song.png?ddcee2c6983d492b17247a07f78f1ae5"},855:function(e,t,n){e.exports=n.p+"img/common/icon_singer.png?c01c0ce18e47d4af50b238494505fe46"}});