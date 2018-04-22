import {combineReducers} from 'redux';

import user from './user';
import common from './common';
import qa from './qas';

let appReducer = combineReducers({
    user,
    common,
    qa,
});

export default appReducer;
