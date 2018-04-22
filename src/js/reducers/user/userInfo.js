import ActionTypes from "../../../js/actions/actionTypes";
import {fetchProcess} from "../../../js/utils/fetchUtils";

const initState = {
    userInfoStamp: 0,
    userScoreInfo: 0
};

export default (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.USER.API_GET_USER_INFO:
            return fetchProcess(state, action, {
                data: "userInfoData",
                msg: "userInfoMsg",
                loading: "userInfoLoading",
                stamp: "userInfoStamp"
            });
        case ActionTypes.USER.API_GET_USER_SCORE:
            return fetchProcess(state, action, {
                data: "userScoreInfo",
                msg: "userScoreInfoMsg",
                loading: "userScoreInfoLoading",
                stamp: "userScoreInfoStamp"
            });
        case ActionTypes.COMMON.COMMON_UPDATE_USER_INFO:
            return Object.assign({}, state, {
                userInfoData: JSON.parse(window.sessionStorage.getItem("wxInfo") || "{}"),
                userInfoMsg: "get user info from session",
                loading: false,
                userInfoStamp: 1
            });
        default:
            return state;
    }
};
