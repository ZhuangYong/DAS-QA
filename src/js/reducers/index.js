import {combineReducers} from 'redux';

import user from './user';
import common from './common';
import qa from './qas';
import classes from "./classes";

let appReducer = combineReducers({
    user,
    common,
    qa,
    classes
});

export default appReducer;
