import { combineReducers } from 'redux';

import user from './user';
import common from './common';
import qa from './qas';
import audio from './play/audio';
import songs from './songs';
import search from './search';
import pay from './pay';
import device from './device';

let appReducer = combineReducers({
    user,
    common,
    qa,
    audio,
    songs,
    search,
    pay,
    device
});

export default appReducer;
