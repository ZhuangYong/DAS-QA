/**
 * Created by Zed on 2017/8/18.
 */

import ActionTypes from "./actionTypes";
import {comFetch} from "../utils/fetchUtils";
import apiUrl from "./apiUrl";
import sysConfig from "../utils/sysConfig";

export function getPayList(data, headers) {
    const url = sysConfig.apiDomain + apiUrl.API_GET_PAY_LIST;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.Pay.API_GET_PAY_LIST
        }, null);
    };
}

export function alipayPay(data, headers, callback) {
    const url = sysConfig.apiDomain + apiUrl.API_ALI_PAY;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.Pay.API_ALI_PAY
        }, callback);
    };
}

export function getWXPayParams(data, headers, callback) {
    const url = sysConfig.apiDomain + apiUrl.API_GET_WX_PAY_PARAMS;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.Pay.API_GET_WX_PAY_PARAMS
        }, callback);
    };
}

export function deviceRegister(data, headers, callback) {
    const url = sysConfig.apiDomain + apiUrl.API_DEVICE_REGISTER;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.Pay.API_DEVICE_REGISTER
        }, callback);
    };
}
