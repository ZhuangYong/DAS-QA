import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {syncHistoryWithStore} from "react-router-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import configStore from "../js/components/Store";
import App from './components/App';
// promise
require('es6-promise').polyfill();

const supportsHistory = 'pushState' in window.history;
const browserHistory = createBrowserHistory({
    forceRefresh: true
});
injectTapEventPlugin();

// 创建store
let store = configStore();

/* Configure history */
const createSelectLocationState = () => {
    let prevRoutingState, prevRoutingStateJS;
    return (state) => {
        const routingState = state['routing'];
        if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS ? routingState.toJS() : null;
        }
        return prevRoutingState;
    };
};

// 同步browserHistory
let history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: createSelectLocationState(),
});
render(
    <Provider store={store}>
        <Router history={history} onEnter={e => console.log(e)}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('reactApp')
);
