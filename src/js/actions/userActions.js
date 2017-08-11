/**
 * Created by walljack@163.com on 2017/7/24.
 */

import {comFetch} from "../utils/fetchUtils";
import apiUrl from "./apiUrl";
import ActionTypes from "./actionTypes";
import sysConfig from "../utils/sysConfig";

export function getUserInfo(data, headers) {
    const url = sysConfig.apiDomain + apiUrl.API_GET_USER_INFO;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "post",
            headers: headers,
            action: ActionTypes.USER.API_GET_USER_INFO
        }, null);
    };

}

export function getRecordsList(data, headers) {

    const url = sysConfig.apiDomain + apiUrl.API_RECORDS_LIST;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "post",
            headers: headers,
            action: ActionTypes.USER.API_GET_RECORDS_LIST
        }, null);
    };
}

export function getPhotoAlbumList(data, headers) {

    const url = apiUrl.API_PHOTO_ALBUM_LIST;

    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "get",
            headers: headers,
            action: ActionTypes.USER.API_GET_PHOTO_ALBUM_LIST
        }, null);
    };
}

export function uploadImg(data, headers, callback) {

    const url = apiUrl.API_PHOTO_ALBUM_UPLOAD;

    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "get",
            headers: headers,
            action: ActionTypes.USER.API_PHOTO_ALBUM_UPLOAD
        }, callback);
    };
}

export function deleteImg(data, headers, callback) {

    const url = apiUrl.API_PHOTO_ALBUM_DELETE;

    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "get",
            headers: headers,
            action: ActionTypes.USER.API_PHOTO_ALBUM_DELETE
        }, callback);
    };
}

export function getOrderForm(data, headers, callback) {

    const url = apiUrl.API_GET_ORDER_FORM;

    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            type: "get",
            headers: headers,
            action: ActionTypes.USER.API_GET_ORDER_FORM
        }, callback);
    };
}

