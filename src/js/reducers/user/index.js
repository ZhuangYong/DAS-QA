/**
 * Created by Zed on 2017/8/18.
 */
import {combineReducers} from 'redux';

import userConfig from "./userConfig";
import userInfo from "./userInfo";

let appReducer = combineReducers({
    userConfig,
    userInfo,
});

export default appReducer;
