/**
 * Created by walljack@163.com on 2017/11/14.
 */
import React from 'react';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

import NotFound from "../components/common/notfound";
import Bundle from "../components/Bundle";

import Home from "../containers/qas";
import qaDetail from "../containers/qas/detail";
import Punch from "../containers/punch/index";
import Classes from "../containers/classes/tabIndex";
import WcPage from "../containers/classes/wcPage";
import Login from "../containers/user/login";

const HomeContainer = () => (
    <Bundle load={Home}>
        {Component => <Component />}
    </Bundle>
);

const ClassesContainer = () => (
    <Bundle load={Classes}>
        {Component => <Component />}
    </Bundle>
);

const WcPageContainer = () => (
    <Bundle load={WcPage}>
        {Component => <Component />}
    </Bundle>
);
const QaDetailContainer = () => (
    <Bundle load={qaDetail}>
        {Component => <Component />}
    </Bundle>
);
const PunchContainer = () => (
    <Bundle load={Punch}>
        {Component => <Component />}
    </Bundle>
);
const LoginContainer = () => (
    <Bundle load={Login}>
        {Component => <Component />}
    </Bundle>
);

export default class router extends React.Component {
    render() {
        return (
            <Switch ref="switch">
                <Route path={`/`} exact component={HomeContainer}/>
                <Route path={`/qa`} exact component={HomeContainer}/>
                <Route path={`/qa/exam/:id`} component={QaDetailContainer}/>
                <Route path={`/qa/punch`} component={PunchContainer}/>

                <Route path={`/wc`} exact component={ClassesContainer}/>
                <Route path={`/wc/:catelogId/:title`} exact component={WcPageContainer}/>

                <Route path={`/login`} component={LoginContainer}/>

                {/*
                        *state: home/aliPaySuccess/aliPayFailed(页面状态)
                        * openid: 用户微信openId
                        * pollingId: OTT轮询id
                        * deviceId: OTT设备id
                        */}
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}
