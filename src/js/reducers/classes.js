/**
 * Created by walljack@163.com on 2017/8/1.
 */
import ActionTypes from "../actions/actionTypes";
import {fetchProcess} from "../utils/fetchUtils";

let initState = {
    classPage: null,
    classPageStamp: 0,
    classCatelogList: null,
    classCatelogListStamp: 0,
};
export default (state = initState, action = {}) => {
    switch (action.type) {
        case ActionTypes.CLASS.API_CLASS_CATELOG:
            return fetchProcess(state, action, {
                data: "classCatelogList",
                stamp: "classCatelogListStamp",
                msg: "classCatelogListMsg",
                loading: "loading"
            });
        case ActionTypes.CLASS.API_CLASS_PAGE:
            return fetchProcess(state, action, {
                data: "classPage",
                stamp: "classPageStamp",
                msg: "classPageMsg",
                loading: "loading"
            });
        default:
            return state;
    }
};
