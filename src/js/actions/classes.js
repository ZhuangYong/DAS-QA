import ActionTypes from "./actionTypes";
import {comFetch} from "../utils/fetchUtils";
import apiUrl from "./apiUrl";
import sysConfig from "../utils/sysConfig";

export function classPage(data, headers) {
    const url = sysConfig.apiDomain + apiUrl.API_CLASS_PAGE;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.CLASS.API_CLASS_PAGE
        }, null);
    };
}
export function classCatelogList(data, headers, callback) {
    const url = sysConfig.apiDomain + apiUrl.API_CLASS_CATELOG_LIST;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.CLASS.API_CLASS_CATELOG
        }, callback);
    };
}

