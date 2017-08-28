//common relative
const COMMON = {
    API_LOCAL_TEST_PUSH: "API_LOCAL_TEST_PUSH",
    COMMON_UPDATE_SCREEN: "COMMON_UPDATE_SCREEN",
    COMMON_UPDATE_USER_INFO: "COMMON_UPDATE_USER_INFO",
    COMMON_GLOB_ALERT: "COMMON_GLOB_ALERT",
    COMMON_LOCAL_NETWORK_STATUS: "COMMON_LOCAL_NETWORK_STATUS",
    ALERT_TYPE_BIND_DEVICE: "ALERT_TYPE_BIND_DEVICE",
    ALERT_TYPE_FREE_ACTIVE: "ALERT_TYPE_FREE_ACTIVE",
    ALERT_TYPE_BE_VIP: "ALERT_TYPE_BE_VIP",
    ALERT_TYPE_DEVICE_NOT_ONLINE: "ALERT_TYPE_DEVICE_NOT_ONLINE"
};

//user relative
const USER = {
    // OTT登录
    API_OTT_LOGIN: "API_OTT_LOGIN",

    // 获取用户信息
    API_GET_USER_INFO: "API_GET_USER_INFO",

    // 查询我的相册列表
    API_GET_PHOTO_ALBUM_LIST: "API_GET_PHOTO_ALBUM_LIST",
    // 上传我的相册图片
    API_PHOTO_ALBUM_UPLOAD: "API_PHOTO_ALBUM_UPLOAD",
    // 删除我的相册图片
    API_PHOTO_ALBUM_DELETE: "API_PHOTO_ALBUM_DELETE",

    // 获取录音分享列表
    API_GET_RECORDS_LIST: "API_GET_RECORDS_LIST",
    // 获取我的订单列表
    API_GET_ORDER_FORM: "API_GET_ORDER_FORM",

    // 意见反馈问题列表
    API_GET_FEEDBACK_QUESTION_LIST: "API_GET_FEEDBACK_QUESTION_LIST",
    // 意见反馈提交
    API_GET_FEEDBACK_SUBMIT: "API_GET_FEEDBACK_SUBMIT",

    // base64上传图片
    API_UPLOAD_IMG_BASE64: "API_UPLOAD_IMG_BASE64",
    // 微信API上传图片
    API_UPLOAD_IMG_WX: "API_UPLOAD_IMG_WX",
    // 获取微信js sdk config参数
    API_GET_USER_CONFIG: "API_GET_USER_CONFIG"
};

const SONG = {
    API_GET_RECOMMEND: "API_GET_RECOMMEND",
    API_PUSH: "API_PUSH",
    API_CHOOSE_LIST: "API_CHOOSE_LIST",
    API_CHOOSE_HISTORY_LIST: "API_CHOOSE_HISTORY_LIST",
    API_SET_SONG_TOP: "API_SET_SONG_TOP",
    API_GET_SINGER_CATEGORY_ALBUM: "API_GET_SINGER_CATEGORY_ALBUM",
    API_GET_ACTORS_ALBUM: "API_GET_ACTORS_ALBUM",
    API_GET_CAT_ALBUM: "API_GET_CAT_ALBUM",
    API_GET_CAT_SONG_LIST: "API_GET_CAT_SONG_LIST",
    API_GET_RANK_ALBUM: "API_GET_RANK_ALBUM",
    API_QUERY_ALBUM_RECOMMEND: "API_QUERY_ALBUM_RECOMMEND",
    API_QUERY_ALBUM_RECOMMEND_SONG_LIST: "API_QUERY_ALBUM_RECOMMEND_SONG_LIST",
    API_QUERY_RANKING: "API_QUERY_RANKING",
    API_GET_FEEDBACK_QUESTION_LIST: "API_GET_FEEDBACK_QUESTION_LIST",
    API_GET_FEEDBACK_SUBMIT: "API_GET_FEEDBACK_SUBMIT"
};
//audio relative
const AUDIO = {
    API_GET_SHARE_AUDIO: "API_GET_SHARE_AUDIO"
};

const SEARCH = {
    API_GET_HOT_WORD: "API_GET_HOT_WORD",
    API_SEARCH: "API_SEARCH"
};

const Pay = {
    // 获取支付列表
    API_GET_PAY_LIST: "API_GET_PAY_LIST",
    // 支付宝支付
    API_ALI_PAY: "API_ALI_PAY",
    // 获取微信支付参数
    API_GET_WX_PAY_PARAMS: "API_GET_WX_PAY_PARAMS",
    // OTT免费激活
    API_DEVICE_REGISTER: "API_DEVICE_REGISTER"
};

const DEVICE = {
    API_GET_OTT_DEVICE_STATUS: "API_GET_OTT_DEVICE_STATUS"
};

export default {
    COMMON,
    USER,
    AUDIO,
    SONG,
    SEARCH,
    Pay,
    DEVICE
};


