import ActionTypes from "./actionTypes";
import {comFetch} from "../utils/fetchUtils";
import apiUrl from "./apiUrl";
import sysConfig from "../utils/sysConfig";

export function qaList(data, headers) {
    const url = sysConfig.apiDomain + apiUrl.API_QA_LIST;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.QA.API_QA_LIST
        }, null);
    };
}

export function qaDetail(data, headers, success) {
    const url = sysConfig.apiDomain + apiUrl.API_QA_DETAIL;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.QA.API_QA_DETAIL
        }, success);
    };
}

export function qaExams(data, headers) {
    const url = sysConfig.apiDomain + apiUrl.API_QA_EXAMS;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.QA.API_QA_EXAMS
        }, null);
    };
}

export function qaExamItems(data, headers, success, fail) {
    const url = sysConfig.apiDomain + apiUrl.API_QA_EXAMS_ITEMS;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.QA.API_QA_EXAMS_ITEMS
        }, success, fail);
    };
}

export function qaExamDo(data, headers, success, fail) {
    const url = sysConfig.apiDomain + apiUrl.API_QA_EXAMS_DO;
    return (dispatch) => {
        comFetch(dispatch, data, {
            url: url,
            headers: headers,
            action: ActionTypes.QA.API_QA_EXAMS_DO
        }, success, fail);
    };
}
