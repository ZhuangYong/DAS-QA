/**
 * Created by walljack@163.com on 2017/8/1.
 */
import ActionTypes from "../actions/actionTypes";
import {fetchProcess} from "../utils/fetchUtils";

let initState = {
    qaList: null,
    qaDetail: null,
    qaExams: null,
    qaListStamp: 0,
    qaDetailStamp: 0,
    qaExamsStamp: 0
};
export default (state = initState, action = {}) => {
    switch (action.type) {
        case ActionTypes.QA.API_QA_LIST:
            return fetchProcess(state, action, {
                data: "qaList",
                stamp: "qaListStamp",
                msg: "qaListMsg",
                loading: "loading"
            });
        case ActionTypes.QA.API_QA_DETAIL:
            return fetchProcess(state, action, {
                data: "qaDetail",
                stamp: "qaDetailStamp",
                msg: "qaDetailMsg",
                loading: "loading"
            });
        case ActionTypes.QA.API_QA_EXAMS:
            return fetchProcess(state, action, {
                data: "qaExams",
                stamp: "qaExamsStamp",
                msg: "qaExamsMsg",
                loading: "loading"
            });
        case ActionTypes.QA.API_QA_EXAMS_ITEMS:
            return fetchProcess(state, action, {
                data: "qaExamItems",
                stamp: "qaExamItemsStamp",
                msg: "qaExamItemsMsg",
                loading: "loading"
            });
        default:
            return state;
    }
};
