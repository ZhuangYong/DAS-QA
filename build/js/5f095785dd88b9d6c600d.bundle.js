webpackJsonp([5],{1054:function(e,t,n){e.exports=n.p+"img/barrage/barrage.png?5efc482ebcefe8496e8f9a74a8916f3e"},1055:function(e,t,n){e.exports=n.p+"img/barrage/barrage_on.png?b16e4de2374d430c87c63a4e806b7eef"},1056:function(e,t,n){e.exports=n.p+"img/barrage/emotion.png?478e28a179c7ff9f84082a256d8d341d"},1057:function(e,t,n){e.exports=n.p+"img/barrage/emotion_on.png?446111469b48a4130e54a3243847d4d8"},737:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(e,t,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in i)return i.value;var r=i.get;if(void 0!==r)return r.call(n)},o=n(0),u=_interopRequireDefault(o),s=n(102),l=n(101),d=n(166),c=n(803),f=_interopRequireDefault(c),p=n(1054),h=_interopRequireDefault(p),g=n(1055),m=_interopRequireDefault(g),v=n(1056),_=_interopRequireDefault(v),b=n(1057),y=_interopRequireDefault(b),S=n(749),E=_interopRequireDefault(S),x=n(748),T=n(747),C=_interopRequireDefault(T),w=n(277),I=n(282),O=_interopRequireDefault(I),D=n(281),M=[{value:"哇塞!唱得太好听了"},{value:"偶像，请收下我的膝盖！"},{value:"偶像，请收下我的膝盖！"},{value:"歌神！请给我签个名吧"},{value:"我只是路过打酱油的~~"},{value:"来来来，唱完这一首还有三首~"},{value:"简直帅到无法形容"},{value:"美女美女我爱你，就像老鼠爱大米"},{value:"来，让我们嗨唱到天亮"},{value:"这音只应天上有,唱到迷人无处求"},{value:"帅锅，来来，陪我再唱一曲"}],R=[{id:1,name:"表情名字",url:"http://image.jmake.cp57.ott.cibntv.net/fk/9E29D511D9051A00.jpg"},{id:2,name:"表情名字",url:"http://image.jmake.cp57.ott.cibntv.net/fk/C3DA48D6BBEECF98.jpg"},{id:3,name:"表情名字",url:"http://image.jmake.cp57.ott.cibntv.net/fk/3C8D2171B0B5A2ED.jpg"},{id:10,name:"表情名字",url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=127721107,2495760160&fm=117&gp=0.jpg"},{id:11,name:"表情名字",url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=53750650,2324233921&fm=26&gp=0.jpg"},{id:12,name:"表情名字",url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3166025927,1572735166&fm=117&gp=0.jpg"},{id:13,name:"表情名字",url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1960126973,2266380470&fm=26&gp=0.jpg"}],L={tabs:{tab:{label:{display:"flex",justifyContent:"center",alignItems:"center",img:{marginRight:12,width:22}}}},dots:{position:"absolute",bottom:-20,width:"100%",display:"flex",justifyContent:"center",dot:{width:10,height:10,border:"1px solid",margin:5,borderRadius:5}},bottomPanel:{position:"fixed",width:"100%",height:60,bottom:0,textAlign:"center",boxShadow:"0px -2px 3px 0px rgba(128, 128, 128, 0.48)",backgroundColor:"white",submitButton:{display:"block",width:200,height:40,fontSize:"18px",padding:"10px",margin:"10px auto",color:"#999999",backgroundColor:"#d7d7d7",borderRadius:20},submitButtonOn:{display:"flex",justifyContent:"center",alignItems:"center",width:200,height:40,fontSize:"18px",margin:"10px auto",color:"#ffffff",backgroundColor:"#ff6832",borderRadius:20}}},P=function(e){function Barrage(e){_classCallCheck(this,Barrage);var t=_possibleConstructorReturn(this,(Barrage.__proto__||Object.getPrototypeOf(Barrage)).call(this,e));return r(Barrage.prototype.__proto__||Object.getPrototypeOf(Barrage.prototype),"title",t).call(t,"弹幕"),t.state={tabIndex:0,inputIng:!1,emotionPage:0,inputValue:"",inputImage:"",sendBarrageIng:!1,barrageSendToast:!1,barrageToastMsg:"发送成功"},t.onBlur=t.onBlur.bind(t),t.onFocus=t.onFocus.bind(t),t.getSendButton=t.getSendButton.bind(t),t.chooseEmotion=t.chooseEmotion.bind(t),t.chooseFastWord=t.chooseFastWord.bind(t),t.handelChangeTab=t.handelChangeTab.bind(t),t.sendBarrage=t.sendBarrage.bind(t),t.handelChangeEmotionPage=t.handelChangeEmotionPage.bind(t),t}return _inherits(Barrage,e),a(Barrage,[{key:"render",value:function(){var e=this,t=this.state,n=t.inputValue,a=t.inputImage,r=document.documentElement.clientHeight-(5.336+1.2)*(document.documentElement.clientWidth/10)-60,o=["#d7d7d7","#d7d7d7"];o[this.state.tabIndex]="#ff6833";var s=[h.default,_.default],l=[m.default,y.default];s[this.state.tabIndex]=l[this.state.tabIndex];var c=!window.sysInfo.isAndroid||!this.state.inputIng;return u.default.createElement("div",null,u.default.createElement("div",{style:{textAlign:"center",height:"5.336rem",overflow:"hidden"},onTouchTap:function(){a&&e.setState({inputImage:""})}},a?u.default.createElement("img",{src:a,alt:"",style:{height:"90%",maxWidth:"100%"}}):u.default.createElement(E.default,{hintText:"说点儿什么...",hintStyle:{top:0,padding:12},textareaStyle:{paddingLeft:12},multiLine:!0,rows:10,rowsMax:10,fullWidth:!0,value:n,onFocus:this.onFocus,onBlur:this.onBlur,bindState:this.bindState("inputValue")})),u.default.createElement(d.Tabs,{tabItemContainerStyle:{backgroundColor:"#d7d7d7"},contentContainerStyle:{position:"absolute",bottom:60,height:r||200,overflow:"auto",zIndex:-1}},u.default.createElement(d.Tab,{buttonStyle:{flexDirection:"row",height:"1.2rem",backgroundColor:o[0]},onActive:function(){e.handelChangeTab(0)},label:u.default.createElement("div",{style:i({},L.tabs.tab.label,{color:0===this.state.tabIndex?"white":"#9a9a9a"})},u.default.createElement("img",{src:s[0],style:L.tabs.tab.label.img}),"快速弹幕")},c&&this.getFastWord()),u.default.createElement(d.Tab,{buttonStyle:{flexDirection:"row",height:"1.2rem",backgroundColor:o[1]},onActive:function(){e.handelChangeTab(1)},label:u.default.createElement("div",{style:i({},L.tabs.tab.label,{color:1===this.state.tabIndex?"white":"#9a9a9a"})},u.default.createElement("img",{src:s[1],style:L.tabs.tab.label.img}),"表情")},u.default.createElement(f.default,{onChangeIndex:function(t){e.handelChangeEmotionPage(t)}},c&&this.getEmotion()),c&&this.getEmotionDots())),u.default.createElement("div",{style:L.bottomPanel},this.getSendButton()),u.default.createElement(d.Snackbar,{open:this.state.barrageSendToast,message:this.state.barrageToastMsg,autoHideDuration:500,onRequestClose:function(){e.setState({barrageSendToast:!1})}}))}},{key:"getEmotion",value:function(){for(var e=this,t=[],n=(R.length-R.length%6)/6+1,i=0;i<n;i++)!function(n){t.push(u.default.createElement("div",{key:"emotion_group_"+n,style:{display:"flex",flexWrap:"wrap",padding:"8px 4px"}},R.map(function(t,i){var a=(t.id,t.name,t.url);if(i>=6*n&&i<6*(n+1))return u.default.createElement("span",{key:i,onClick:function(){e.chooseEmotion(a)},style:{width:"33.33%",height:"3.334rem",overflow:"hidden",padding:6,fontSize:12,textAlign:"center"}},u.default.createElement("img",{src:a,alt:"",style:{maxWidth:"100%"}}))})))}(i);return t}},{key:"getEmotionDots",value:function(){for(var e=[],t=0,n=this.state.emotionPage,a=(R.length-R.length%6)/6+1;t<a;)e.push(u.default.createElement("i",{key:t,style:i({},L.dots.dot,{borderColor:n===t?"#ff6833":"#d7d7d7"})})),t++;return u.default.createElement("div",{style:L.dots},e)}},{key:"getFastWord",value:function(){var e=this;return u.default.createElement(d.List,null,M.map(function(t,n){return u.default.createElement(d.ListItem,{key:n,primaryText:t.value,onClick:function(){e.chooseFastWord(t.value)}})}))}},{key:"getSendButton",value:function(){var e=this,t=this.state,n=t.inputValue,i=t.inputImage,a=t.sendBarrageIng;return n||i?a?u.default.createElement("div",{style:L.bottomPanel.submitButtonOn},u.default.createElement(d.CircularProgress,{size:20,thickness:1,color:"white",style:{right:6}}),u.default.createElement("font",null,"发送中")):u.default.createElement("div",{style:L.bottomPanel.submitButtonOn,onClick:function(){e.sendBarrage()}},"发送"):u.default.createElement("div",{style:L.bottomPanel.submitButton},"发送")}},{key:"chooseEmotion",value:function(e){this.state.sendBarrageIng||this.setState({inputImage:e,inputValue:""})}},{key:"chooseFastWord",value:function(e){this.state.sendBarrageIng||this.setState({inputImage:"",inputValue:e})}},{key:"handelChangeTab",value:function(e){this.setState({tabIndex:e})}},{key:"handelChangeEmotionPage",value:function(e){this.setState({emotionPage:e})}},{key:"sendBarrage",value:function(){var e=this,t="";if(!0===r(Barrage.prototype.__proto__||Object.getPrototypeOf(Barrage.prototype),"validUserBindDevice",this).call(this,this.props.userInfoData,this.props.action_setGlobAlert)&&!0===r(Barrage.prototype.__proto__||Object.getPrototypeOf(Barrage.prototype),"validUserDeviceOnline",this).call(this,this.props.ottInfo,this.props.action_setGlobAlert)){var n=this.state,i=n.inputValue,a=n.inputImage,o=this.props.userInfo.userInfoData||{data:{}},u=o.data;if(i&&(t="txt"),a&&(t="img"),t){var s={type:14,id:JSON.stringify({model:"danmu",danmu:{type:t,data:{avatar:u.headerImg,content:i||a}}})};this.setState({sendBarrageIng:!0});var l=function(){e.setState({inputImage:"",inputValue:"",sendBarrageIng:!1,barrageSendToast:!0,barrageToastMsg:"发送成功"})},d=function(t){e.setState({sendBarrageIng:!1,barrageSendToast:!0,barrageToastMsg:t})};(0,w.dynaPush)({ottInfo:this.props.ottInfo,userInfo:this.props.userInfo,param:s,localNetIsWork:this.props.localNetIsWork,action_pushLocal:this.props.action_pushLocal,action_setLocalNet:this.props.action_setLocalNet,action_push:this.props.action_push,action_setGlobAlert:this.props.action_setGlobAlert,success:l,fail:d})}}}},{key:"onFocus",value:function(){this.setState({inputIng:!0})}},{key:"onBlur",value:function(){this.setState({inputIng:!1})}}]),Barrage}(C.default),A=function(e,t){return{userInfo:e.app.user.userInfo,common:e.app.common,userInfoData:e.app.user.userInfo.userInfoData,ottInfo:e.app.device.ottInfo,localNetIsWork:e.app.common.localNetIsWork}},N=function(e,t){return{action_push:(0,O.default)(x.push,e),action_setGlobAlert:(0,O.default)(D.setGlobAlert,e),action_pushLocal:(0,O.default)(x.pushLocal,e),action_setLocalNet:(0,O.default)(D.setLocalNet,e)}};t.default=(0,s.withRouter)((0,l.connect)(A,N)(P))},747:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(0),r=n(278),o=_interopRequireDefault(r),u=(n(102),n(101),n(19)),s=_interopRequireDefault(u),l=function(e){function BaseComponent(e){_classCallCheck(this,BaseComponent);var t=_possibleConstructorReturn(this,(BaseComponent.__proto__||Object.getPrototypeOf(BaseComponent)).call(this,e));return t.bindState.bind(t),t.title=t.title.bind(t),o.default.setHistory(t.props.history),t}return _inherits(BaseComponent,e),i(BaseComponent,[{key:"render",value:function(){return React.createElement("div",null)}},{key:"bindState",value:function(e){var t=this;return function(n){var i={};i[e]=n,t.setState(i)}}},{key:"title",value:function(e){document.title=e}},{key:"validUserStatus",value:function(e,t,n){var i=t||{},a=i.data,r=a||{},o=r.systemTime,u=r.timeStamp,l=this.isVip(e),d=this.isBindDevice(e),c=this.isFreeActivation(e);if("string"==typeof d)return n&&n(d),"正在获取用户信息";if(!1===d)return n&&n("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1;if(!0===d){if(!0===c)return n&&n("",s.default.COMMON.ALERT_TYPE_FREE_ACTIVE),!1;if(!1===c)return function(){return!(!o||!u)&&!(o-u>72e4)}()?!1!==l||(n&&n("",s.default.COMMON.ALERT_TYPE_BE_VIP),!1):(n&&n("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}}},{key:"validUserBindDevice",value:function(e,t){var n=this.isBindDevice(e);return"string"==typeof n?(t&&t(n),n):!1===n?(t&&t("",s.default.COMMON.ALERT_TYPE_BIND_DEVICE),!1):!0===n||void 0}},{key:"validUserDeviceOnline",value:function(e,t){var n=e||{},i=n.data,a=i||{},r=a.systemTime,o=a.timeStamp;if(r&&o){return!!!(r-o>72e4)||(t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1)}return t&&t("",s.default.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE),!1}},{key:"isFreeActivation",value:function(e){var t=e||{},n=t.status,i=t.data;if(void 0!==n){return 1===i.isFreeActivation}return"正在获取用户信息"}},{key:"isBindDevice",value:function(e){var t=e||{},n=t.status,i=t.msg,a=t.data;if(void 0!==n){if(-100===n)return"请使用微信操作";if(1===n){var r=a.isReDevice;a.bindExpireTime;return 1===r}return i||"获取用户信息失败，请稍后重试！"}return"正在获取用户信息"}},{key:"isVip",value:function(e){var t=e||{},n=t.status,i=t.data;if(void 0!==n){var a=i.vipStatus,r=i.expireTime;return 1===a&&(new Date).getTime()<r}return"正在获取用户信息"}}]),BaseComponent}(a.Component);t.default=l},748:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getShareAudio(e,t){var n=l.default.apiDomain+u.default.API_QUERY_USER_SOUND;return function(i){(0,r.comFetch)(i,e,{url:n,headers:t,action:a.default.AUDIO.API_GET_SHARE_AUDIO},null)}}function getRecommend(e,t){var n=l.default.apiDomain+u.default.API_QUERY_ALBUM;return function(i){(0,r.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_GET_RECOMMEND},null)}}function push(e,t,n,i){var o=l.default.apiDomain+u.default.API_PUSH;return function(u){(0,r.comFetch)(u,e,{url:o,headers:t,action:a.default.SONG.API_PUSH},n,i)}}function pushLocal(e,t,n,i,o){var s=e+u.default.API_PUSH;return function(e){(0,r.comFetch)(e,t,{url:s,type:"get",headers:n,timeout:3e3,action:a.default.SONG.API_PUSH},i,o)}}function getChooseList(e,t){var n=l.default.apiDomain+u.default.API_CHOOSE_LIST;return function(i){(0,r.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_CHOOSE_LIST},null)}}function getHistorySongList(e,t){var n=l.default.apiDomain+u.default.API_CHOOSE_LIST;return function(i){(0,r.comFetch)(i,e,{url:n,headers:t,action:a.default.SONG.API_CHOOSE_HISTORY_LIST},null)}}function setSongTop(e,t,n){var i=l.default.apiDomain+u.default.API_SET_SONG_TOP;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_SET_SONG_TOP},n)}}function getSingerCategoryAlbum(e,t,n){var i=l.default.apiDomain+u.default.API_GET_SINGER_CATEGORY_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_GET_SINGER_CATEGORY_ALBUM},n)}}function getActorsAlbum(e,t,n){var i=l.default.apiDomain+u.default.API_GET_ACTORS_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_GET_ACTORS_ALBUM},n)}}function getCatAlbum(e,t,n){var i=l.default.apiDomain+u.default.API_GET_CAT_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_GET_CAT_ALBUM},n)}}function getCatSongList(e,t,n){var i=l.default.apiDomain+u.default.API_GET_CAT_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_GET_CAT_SONG_LIST},n)}}function getRankAlbum(e,t,n){var i=l.default.apiDomain+u.default.API_QUERY_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_GET_RANK_ALBUM},n)}}function getAlbumRecommend(e,t,n){var i=l.default.apiDomain+u.default.API_QUERY_ALBUM_RECOMMEND;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_QUERY_ALBUM_RECOMMEND},n)}}function getAlbumRecommendSongList(e,t,n){var i=l.default.apiDomain+u.default.API_QUERY_ALBUM_RECOMMEND;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_QUERY_ALBUM_RECOMMEND_SONG_LIST},n)}}function getRanking(e,t,n){var i=l.default.apiDomain+u.default.API_QUERY_ALBUM;return function(o){(0,r.comFetch)(o,e,{url:i,headers:t,action:a.default.SONG.API_QUERY_RANKING},n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.getShareAudio=getShareAudio,t.getRecommend=getRecommend,t.push=push,t.pushLocal=pushLocal,t.getChooseList=getChooseList,t.getHistorySongList=getHistorySongList,t.setSongTop=setSongTop,t.getSingerCategoryAlbum=getSingerCategoryAlbum,t.getActorsAlbum=getActorsAlbum,t.getCatAlbum=getCatAlbum,t.getCatSongList=getCatSongList,t.getRankAlbum=getRankAlbum,t.getAlbumRecommend=getAlbumRecommend,t.getAlbumRecommendSongList=getAlbumRecommendSongList,t.getRanking=getRanking;var i=n(19),a=_interopRequireDefault(i),r=n(23),o=n(103),u=_interopRequireDefault(o),s=n(70),l=_interopRequireDefault(s)},749:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(71),o=_interopRequireDefault(r),u=n(0),s=_interopRequireDefault(u),l=n(1),d=_interopRequireDefault(l),c=n(277),f={position:"absolute",top:"66px"},p=function(e){function Input(e){_classCallCheck(this,Input);var t=_possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,e));return t.state={hash:(0,c.getRandomString)(24),value:"",errorText:""},t.handelValidate.bind(t),t}return _inherits(Input,e),a(Input,[{key:"componentDidMount",value:function(){var e=this.props.doValidate;e&&e(this.handelValidate.bind(this),this.state.hash)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.errorStyle,e.errorText,e.minLength,e.maxLength,e.bindState,e.validate,e.doValidate,_objectWithoutProperties(e,["onChange","errorStyle","errorText","minLength","maxLength","bindState","validate","doValidate"]));return s.default.createElement(o.default,i({ref:"input",errorStyle:f,errorText:this.state.errorText,onChange:this.handelChange.bind(this)},t))}},{key:"handelChange",value:function(e,t){this.setState({value:t}),this.handelValidate(t);var n=this.props.bindState;n&&n(t)}},{key:"handelValidate",value:function(e){e=e||this.state.value;var t="",n=this.props.validate,i=this.props.minLength,a=this.props.maxLength;if("string"==typeof e&&(i&&e.length<i&&(t="长度不能小于"+i),a&&e.length>a&&(t="长度不能大于"+a)),!t&&"string"==typeof n)switch(n){case"account":/^[a-zA-z]\w{3,15}$/.test(e)||(t=this.props.errorText)}return this.setState({errorText:t}),t}}]),Input}(s.default.Component);t.default=p,p.propTypes={minLength:d.default.number,maxLength:d.default.number,errorStyle:d.default.object,validate:d.default.any,bindState:d.default.func,doValidate:d.default.func}},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},769:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(808);Object.defineProperty(t,"checkIndexBounds",{enumerable:!0,get:function(){return _interopRequireDefault(i).default}});var a=n(809);Object.defineProperty(t,"computeIndex",{enumerable:!0,get:function(){return _interopRequireDefault(a).default}});var r=n(779);Object.defineProperty(t,"constant",{enumerable:!0,get:function(){return _interopRequireDefault(r).default}});var o=n(810);Object.defineProperty(t,"getDisplaySameSlide",{enumerable:!0,get:function(){return _interopRequireDefault(o).default}});var u=n(811);Object.defineProperty(t,"mod",{enumerable:!0,get:function(){return _interopRequireDefault(u).default}})},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3}},803:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(804),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=a.default},804:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function addEventListenerEnhanced(e,t,n,i){return(0,I.default)(e,t,n,i),{remove:function(){(0,D.default)(e,t,n,i)}}}function injectStyle(){if(!R){var e=document.createElement("style");e.innerHTML="\n      .react-swipeable-view-container {\n        display: -webkit-box;\n      }\n    ",document.body&&document.body.appendChild(e),R=!0}}function createTransition(e,t){return e+" "+t.duration+" "+t.easeFunction+" "+t.delay}function applyRotationMatrix(e,t){var n=P.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function adaptMouse(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function getDomTreeShapes(e,t){for(var n=[];e&&e!==t&&!e.hasAttribute("data-swipeable");){var i=window.getComputedStyle(e);"absolute"===i.getPropertyValue("position")||"hidden"===i.getPropertyValue("overflow-x")?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}function findNativeHandler(e){var t=e.domTreeShapes,n=e.pageX,i=e.startX,a=e.axis;return t.some(function(e){var t=n>=i;"x"!==a&&"y"!==a||(t=!t);var r=e[P.scrollPosition[a]],o=r>0,u=r+e[P.clientLength[a]]<e[P.scrollLength[a]];return!!(t&&u||!t&&o)&&(A=e.element,!0)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=_interopRequireDefault(i),r=n(169),o=_interopRequireDefault(r),u=n(9),s=_interopRequireDefault(u),l=n(6),d=_interopRequireDefault(l),c=n(2),f=_interopRequireDefault(c),p=n(3),h=_interopRequireDefault(p),g=n(4),m=_interopRequireDefault(g),v=n(5),_=_interopRequireDefault(v);t.getDomTreeShapes=getDomTreeShapes,t.findNativeHandler=findNativeHandler;var b=n(0),y=_interopRequireDefault(b),S=n(1),E=_interopRequireDefault(S),x=n(15),T=(_interopRequireDefault(x),n(805)),C=_interopRequireDefault(T),w=n(806),I=_interopRequireDefault(w),O=n(807),D=_interopRequireDefault(O),M=n(769),R=!1,L={container:{direction:"ltr",display:"flex"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},P={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate("+-e+"%, 0)"},"x-reverse":function(e){return"translate("+e+"%, 0)"},y:function(e){return"translate(0, "+-e+"%)"},"y-reverse":function(e){return"translate(0, "+e+"%)"}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}},A=null,N=function(e){function SwipeableViews(){var e,t,n,i;(0,f.default)(this,SwipeableViews);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n=(0,m.default)(this,(e=SwipeableViews.__proto__||(0,d.default)(SwipeableViews)).call.apply(e,[this].concat(r))),n.state={},n.rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.handleSwipeStart=function(e){var t=n.props.axis;if(null!==n.rootNode){var i=applyRotationMatrix(e.touches[0],t);n.viewLength=n.rootNode.getBoundingClientRect()[P.length[t]],n.startX=i.pageX,n.lastX=i.pageX,n.vx=0,n.startY=i.pageY,n.isSwiping=void 0,n.started=!0;var a=window.getComputedStyle(n.containerNode),r=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(r){var o=r.split("(")[1].split(")")[0].split(","),u=window.getComputedStyle(n.rootNode),s=applyRotationMatrix({pageX:parseInt(o[4],10),pageY:parseInt(o[5],10)},t);n.startIndex=-s.pageX/(n.viewLength-parseInt(u.paddingLeft,10)-parseInt(u.paddingRight,10))}}},n.handleSwipeMove=function(e){if(!n.started)return void n.handleTouchStart(e);if(null!==n.rootNode&&(null===A||A===n.rootNode)){var t=n.props,i=t.axis,a=t.children,r=t.ignoreNativeScroll,o=t.onSwitching,u=t.resistance,s=applyRotationMatrix(e.touches[0],i);if(void 0===n.isSwiping){var l=Math.abs(n.startX-s.pageX),d=Math.abs(n.startY-s.pageY),c=l>d&&l>M.constant.UNCERTAINTY_THRESHOLD;if(l>d&&e.preventDefault(),!0===c||d>M.constant.UNCERTAINTY_THRESHOLD)return n.isSwiping=c,void(n.startX=s.pageX)}if(!0===n.isSwiping){e.preventDefault(),n.vx=.5*n.vx+.5*(s.pageX-n.lastX),n.lastX=s.pageX;var f=(0,M.computeIndex)({children:a,resistance:u,pageX:s.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),p=f.index,h=f.startX;if(null===A&&!r){if(findNativeHandler({domTreeShapes:getDomTreeShapes(e.target,n.rootNode),startX:n.startX,pageX:s.pageX,axis:i}))return}h?n.startX=h:null===A&&(A=n.rootNode),n.setState({displaySameSlide:!1,isDragging:!0,indexCurrent:p},function(){o&&o(p,"move")})}}},n.handleSwipeEnd=function(){if(A=null,n.started&&(n.started=!1,!0===n.isSwiping)){var e=n.state.indexLatest,t=n.state.indexCurrent,i=e-t,a=void 0;a=Math.abs(n.vx)>n.props.threshold?n.vx>0?Math.floor(t):Math.ceil(t):Math.abs(i)>n.props.hysteresis?i>0?Math.floor(t):Math.ceil(t):e;var r=b.Children.count(n.props.children)-1;a<0?a=0:a>r&&(a=r),n.setState({indexCurrent:a,indexLatest:a,isDragging:!1},function(){n.props.onSwitching&&n.props.onSwitching(a,"end"),n.props.onChangeIndex&&a!==e&&n.props.onChangeIndex(a,e),t===e&&n.handleTransitionEnd()})}},n.handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n.handleSwipeStart(e)},n.handleTouchEnd=function(e){n.props.onTouchEnd&&n.props.onTouchEnd(e),n.handleSwipeEnd(e)},n.handleMouseDown=function(e){n.props.onMouseDown&&n.props.onMouseDown(e),e.persist(),n.handleSwipeStart(adaptMouse(e))},n.handleMouseUp=function(e){n.props.onMouseUp&&n.props.onMouseUp(e),n.handleSwipeEnd(adaptMouse(e))},n.handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n.started&&n.handleSwipeEnd(adaptMouse(e))},n.handleMouseMove=function(e){n.props.onMouseMove&&n.props.onMouseMove(e),n.started&&n.handleSwipeMove(adaptMouse(e))},n.handleScroll=function(e){if(n.props.onScroll&&n.props.onScroll(e),e.target===n.rootNode){if(n.ignoreNextScrollEvents)return void(n.ignoreNextScrollEvents=!1);var t=n.state.indexLatest,i=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;n.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,n.props.onChangeIndex&&i!==t&&n.props.onChangeIndex(i,t)}},i=t,(0,m.default)(n,i)}return(0,_.default)(SwipeableViews,e),(0,h.default)(SwipeableViews,[{key:"getChildContext",value:function(){var e=this;return{swipeableViews:{slideUpdateHeight:function(){e.updateHeight()}}}}},{key:"componentWillMount",value:function(){this.setState({indexCurrent:this.props.index,indexLatest:this.props.index,isDragging:!1,isFirstRender:!this.props.disableLazyLoading,heightLatest:0})}},{key:"componentDidMount",value:function(){var e=this;this.transitionListener=addEventListenerEnhanced(this.containerNode,C.default.end,function(t){t.target===e.containerNode&&e.handleTransitionEnd()}),this.touchMoveListener=addEventListenerEnhanced(this.rootNode,"touchmove",function(t){e.props.disabled||e.handleSwipeMove(t)},{passive:!1}),this.setState({isFirstRender:!1}),injectStyle()}},{key:"componentWillReceiveProps",value:function(e){var t=e.index;"number"==typeof t&&t!==this.props.index&&this.setState({displaySameSlide:(0,M.getDisplaySameSlide)(this.props,e),indexCurrent:t,indexLatest:t})}},{key:"componentDidUpdate",value:function(e,t){this.props.animateTransitions||t.indexCurrent===this.state.indexCurrent||this.handleTransitionEnd()}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove()}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"updateHeight",value:function(){if(null!==this.activeSlide){var e=this.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&this.state.heightLatest!==e.offsetHeight&&this.setState({heightLatest:e.offsetHeight})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.animateHeight,i=t.animateTransitions,r=t.axis,u=t.children,l=t.containerStyle,d=t.disabled,c=(t.disableLazyLoading,t.enableMouseEvents),f=(t.hysteresis,t.ignoreNativeScroll,t.index,t.onChangeIndex,t.onSwitching,t.onTransitionEnd,t.resistance,t.slideStyle),p=t.slideClassName,h=t.springConfig,g=t.style,m=(t.threshold,(0,s.default)(t,["animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),v=this.state,_=v.displaySameSlide,S=v.heightLatest,E=v.indexCurrent,x=v.isDragging,T=v.isFirstRender,C=d?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},w=!d&&c?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},I=(0,o.default)({},L.slide,f),O=void 0,D=void 0;if(x||!i||_)O="all 0s ease 0s",D="all 0s ease 0s";else if(O=createTransition("transform",h),D=createTransition("-webkit-transform",h),0!==S){var M=", "+createTransition("height",h);O+=M,D+=M}var R=P.transform[r](100*E),A={WebkitTransform:R,transform:R,height:null,WebkitFlexDirection:P.flexDirection[r],flexDirection:P.flexDirection[r],WebkitTransition:D,transition:O};return n&&(A.height=S),y.default.createElement("div",(0,a.default)({ref:function(t){e.rootNode=t},style:(0,o.default)({},P.root[r],g)},m,C,w,{onScroll:this.handleScroll}),y.default.createElement("div",{ref:function(t){e.containerNode=t},style:(0,o.default)({},A,L.container,l),className:"react-swipeable-view-container"},b.Children.map(u,function(t,i){if(T&&i>0)return null;var a=void 0,r=!0;return i===e.state.indexLatest&&(r=!1,n&&(a=function(t){e.activeSlide=t,e.updateHeight()},I.overflowY="hidden")),y.default.createElement("div",{ref:a,style:I,className:p,"aria-hidden":r,"data-swipeable":"true"},t)})))}}]),SwipeableViews}(b.Component);N.displayName="ReactSwipableView",N.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1},N.childContextTypes={swipeableViews:E.default.shape({slideUpdateHeight:E.default.func})},N.propTypes={},t.default=N},805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i=n(765),a=function(e){return e&&e.__esModule?e:{default:e}}(i),r="transform",o=void 0,u=void 0,s=void 0,l=void 0,d=void 0,c=void 0,f=void 0,p=void 0,h=void 0,g=void 0,m=void 0;if(a.default){var v=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,a=void 0,r="",o=0;o<n.length;o++){var u=n[o];if(u+"TransitionProperty"in e){r="-"+u.toLowerCase(),i=t[u]("TransitionEnd"),a=t[u]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!a&&"animationName"in e&&(a="animationend"),e=null,{animationEnd:a,transitionEnd:i,prefix:r}}();o=v.prefix,t.transitionEnd=u=v.transitionEnd,t.animationEnd=s=v.animationEnd,t.transform=r=o+"-"+r,t.transitionProperty=l=o+"-transition-property",t.transitionDuration=d=o+"-transition-duration",t.transitionDelay=f=o+"-transition-delay",t.transitionTiming=c=o+"-transition-timing-function",t.animationName=p=o+"-animation-name",t.animationDuration=h=o+"-animation-duration",t.animationTiming=g=o+"-animation-delay",t.animationDelay=m=o+"-animation-timing-function"}t.transform=r,t.transitionProperty=l,t.transitionTiming=c,t.transitionDelay=f,t.transitionDuration=d,t.transitionEnd=u,t.animationName=p,t.animationDuration=h,t.animationTiming=g,t.animationDelay=m,t.animationEnd=s,t.default={transform:r,end:u,property:l,timing:c,delay:f,duration:d}},806:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(765),a=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(){};a.default&&(r=function(){return document.addEventListener?function(e,t,n,i){return e.addEventListener(t,n,i||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,function(t){t=t||window.event,t.target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)})}:void 0}()),t.default=r,e.exports=t.default},807:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(765),a=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(){};a.default&&(r=function(){return document.addEventListener?function(e,t,n,i){return e.removeEventListener(t,n,i||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0}()),t.default=r,e.exports=t.default},808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(15),r=(function(e){e&&e.__esModule}(a),function(e){var t=(e.index,e.children);i.Children.count(t)});t.default=r},809:function(e,t,n){"use strict";function computeIndex(e){var t=e.children,n=e.startIndex,a=e.startX,o=e.pageX,u=e.viewLength,s=e.resistance,l=i.Children.count(t)-1,d=n+(a-o)/u,c=void 0;return s?d<0?d=Math.exp(d*r.default.RESISTANCE_COEF)-1:d>l&&(d=l+1-Math.exp((l-d)*r.default.RESISTANCE_COEF)):d<0?(d=0,c=(d-n)*u+o):d>l&&(d=l,c=(d-n)*u+o),{index:d,startX:c}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=computeIndex;var i=n(0),a=n(779),r=function(e){return e&&e.__esModule?e:{default:e}}(a)},810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){var n=!1;if(e.children.length&&t.children.length){var i=e.children[e.index],a=i?i.key:"empty";if(null!==a){var r=t.children[t.index];a===(r?r.key:"empty")&&(n=!0)}}return n};t.default=i},811:function(e,t,n){"use strict";function mod(e,t){var n=e%t;return n<0?n+t:n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=mod}});