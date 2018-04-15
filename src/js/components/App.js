import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import "../../sass/main.scss";
import {getUserConfig, getUserInfo} from "../actions/userActions";
import {
    getUserInfoFromSession,
    setCommonInfo,
    setGlobAlert,
    setWeixinConfigFinished,
    updateScreen
} from "../actions/common/actions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {
    chkDevice,
    getEncryptHeader,
    getQueryString,
    isGetUserInfo,
    linkTo,
    reqHeader,
    wxAuthorizedUrl,
    wxConfig,
    wxShare
} from "../utils/comUtils";
import {withRouter} from "react-router";
import {Dialog, FlatButton, Snackbar} from "material-ui";
import ActionTypes from "../actions/actionTypes";
import sysConfig from "../utils/sysConfig";
import BaseComponent from "./common/BaseComponent";
import intl from 'react-intl-universal';
import Routers from '../router';

window.sysInfo = chkDevice();
let wxConfigPaths = [];

class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMsg: false,
            showDialog: false,
            msgText: '',
            timer: null,
            barrageSendToast: false,
            updateDevice: false,
            checkLocalTimer: 0,
            checkLocalCount: 0,
            checkLocalBetween: 120,
        };
        this.msgOk = this.msgOk.bind(this);
        this.showMsg = this.showMsg.bind(this);
        this.configWeiXin = this.configWeiXin.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.validUserStatusDialog = this.validUserStatusDialog.bind(this);
        this.configWxPath = this.configWxPath.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        if (isGetUserInfo()) {
            this.updateUserInfo();
        } else {
            window.noUserInfo = true;
        }
        this.removeAppLoading();
        window.addEventListener('resize', this.sizeChange);
        this.props.action_updateScreen();
        const {isIos} = window.sysInfo;
        if (isIos) {
            this.configWeiXin();
        }
        this.configWxPath();
        window.wx && window.wx.ready(() => {
            wxShare({
                title: intl.get("index.we.chat.song"),
                desc: intl.get("audio.share.from"),
                link: wxAuthorizedUrl(sysConfig.appId, sysConfig.apiDomain, location.protocol + "//" + location.host),
                imgUrl: "http://wx.j-make.cn/img/logo.png",
                dataUrl: null
            });
        });

        window.lockResize = true;
        setTimeout(() => {
            let commonInfo = this.props.commonInfo || {};
            commonInfo.stopNavFlash = false;
            this.props.action_setCommonInfo(commonInfo);
        }, 30000);
    }

    componentDidUpdate(prevProps) {
        if (isGetUserInfo()) {
            if (window.noUserInfo === true) {
                this.updateUserInfo();
                window.noUserInfo = false;
            }
        }
        if (prevProps.userInfo.userInfoStamp !== this.props.userInfo.userInfoStamp) {
            const {userInfoData} = this.props.userInfo;
            window.sessionStorage.setItem("wxInfo", JSON.stringify(userInfoData));
        }
        this.configWxPath();
    }

    render() {
        let showAlert = !!this.props.globAlert && !this.props.alertData;
        if ((this.props.globAlert === intl.get("msg.network.die")) && window.lockShowNoWIfi) {
            setTimeout(() => {
                this.props.action_setGlobAlert("");
            }, 200);
            showAlert = false;
        }
        const validUserStatusDialog = this.validUserStatusDialog();
        return (
            this.state.initDone ? <div>
                <MuiThemeProvider className={"App"} muiTheme={getMuiTheme(lightBaseTheme)}>
                    <div className={`${this.state.showDialog ? "show-alert" : ""}`}>
                    <Routers/>
                    <Snackbar
                        open={showAlert}
                        bodyStyle={{height: 'auto', minHeight: 48, lineHeight: '.7rem', display: 'flex', alignItems: 'center'}}
                        message={this.props.globAlert}
                        autoHideDuration={2000}
                        onRequestClose={() => {
                            this.props.action_setGlobAlert("");
                        }}
                    />
                        {validUserStatusDialog}
                    </div>
                </MuiThemeProvider>
            </div> : <div/>
        );
    }

    removeAppLoading() {
        let appLoadingDiv = document.querySelector("#appLoadingDiv");
        let appLoadingStyle = document.querySelector("#appLoadingStyle");
        appLoadingDiv && appLoadingDiv.parentNode.removeChild(appLoadingDiv);
        appLoadingStyle && appLoadingStyle.parentNode.removeChild(appLoadingStyle);
        this.setState({ initDone: true });
    }

    // 点击msg的ok按钮
    msgOk() {
        this.setState({
            showMsg: false
        });
    }

    // 显示弹框
    showMsg(msg) {
        this.setState({
            showMsg: true,
            msgText: msg
        });
    }

    /**
     * 屏幕尺寸改变事件
     */
    sizeChange () {
        if (!this.state.timer) {
            this.state.timer = setTimeout(() => {
                this.props.action_updateScreen();
                clearTimeout(this.state.timer);
                this.state.timer = null;
            }, 500);
        }
    }

    validUserStatusDialog() {
        const {alertData, globAlert} = this.props;
        if (!alertData) return;
        const actionSetGlobAlert = this.props.action_setGlobAlert;
        let alertStr = "";
        let showAlert = true;
        let doAction;
        switch (alertData) {
            case ActionTypes.COMMON.ALERT_TYPE_BIND_DEVICE:
                alertStr = globAlert || intl.get("device.not.bind.do.bind");
                //TODO BIND DEVICE
                doAction = () => {
                    window.wx && window.wx.scanQRCode({
                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                        scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                        success: (res) => {
                            let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果

                            if (result.indexOf("/q/") <= 0) {
                                actionSetGlobAlert && actionSetGlobAlert(intl.get("msg.invalid.qr.code"), "");
                                return;
                            }

                            const userInfo = this.props.userInfo.userInfoData.data;
                            const params = {
                                openId: userInfo.openid,
                                url: result
                            };

                            this.props.action_bindDevice(params, reqHeader(params), (res) => {
                                const {status} = res;
                                if (status === 1) {
                                    const getUserInfoParams = {
                                        url: window.location.href.split("#")[0]
                                    };
                                    this.props.action_getUserInfo(getUserInfoParams, reqHeader(getUserInfoParams), (res) => {
                                        const {status} = res;
                                        if (status === 1) {
                                            window.location.reload(true);
                                        }
                                    });
                                    actionSetGlobAlert(intl.get("msg.bind.success"), "");

                                } else {
                                    actionSetGlobAlert(intl.get("msg.bind.fail"), "");
                                }
                            });
                        },
                        fail: (res) => {
                            console.log(res);
                            actionSetGlobAlert("", ActionTypes.COMMON.ALERT_TYPE_WX_API_FAIL);
                        }
                    });
                };
                break;
            // case ActionTypes.COMMON.ALERT_TYPE_FREE_ACTIVE:
            //     // alertStr = '激活vip免费体验';
            //     //TODO ACTIVE
            //     //linkTo("", false, "");
            //     break;
            case ActionTypes.COMMON.ALERT_TYPE_WX_API_FAIL:
                alertStr = intl.get("msg.operate.need.auth");
                //TODO ACTIVE
                //linkTo("", false, "");
                doAction = () => {
                    window.location.reload(true);
                };
                break;
            case ActionTypes.COMMON.ALERT_TYPE_BE_VIP:
                alertStr = intl.get("msg.recharge.as.vip");
                //TODO VIP
                doAction = () => {
                    linkTo("pay/home", false, "");
                };
                break;
            case ActionTypes.COMMON.ALERT_TYPE_GONG_XIANG_DONE:
                alertStr = <div>
                    <p style={{fontWeight: 'bold'}}>
                        {intl.get("msg.song.time.end")}
                    </p>
                    <p>
                        {intl.get("msg.song.continue")}
                    </p>
                </div>;
                doAction = () => {
                    linkTo("pay/home", false, "");
                };
                break;
            case ActionTypes.COMMON.ALERT_TYPE_DEVICE_NOT_ONLINE:
                showAlert = false;
                setTimeout(() => {
                    this.props.action_setGlobAlert(intl.get("msg.device.not.online"), "");
                }, 100);
                break;
            default:
                showAlert = false;
                break;
        }
        this.state.showDialog = showAlert;
        if (!alertStr) return;
        const handleClose = () => {
            this.state.showDialog = false;
            this.props.action_setGlobAlert("", "");
        };
        const handleSure = () => {
            this.state.showDialog = false;
            this.props.action_setGlobAlert("", "");
            doAction && doAction();
        };
        const actions = [
            <FlatButton
                label={intl.get("button.cancel")}
                className="cancel-button"
                primary={true}
                onClick={handleClose}
            />,
            <FlatButton
                label={intl.get("button.sure")}
                className="sure-button"
                primary={true}
                onClick={handleSure}
            />,
        ];
        return (
            <div>
                <Dialog
                    className="dialog-panel"
                    actionsContainerStyle={{borderTop: ".01rem solid #e0e0e0", textAlign: 'center'}}
                    contentStyle={{textAlign: 'center'}}
                    actions={actions}
                    modal={false}
                    open={showAlert}
                    // onRequestClose={handleClose}
                >
                    {alertStr}
                </Dialog>
            </div>
        );
    }

    /**
     * 更新用户信息
     */
    updateUserInfo() {
        let {isWeixin} = window.sysInfo;
        if (isWeixin) {
            // 获取用户信息
            // let wxInfo = {
            //     wxAuthKey: getQueryString("wak")
            // };
            // let wxInfoSession = JSON.parse(window.sessionStorage.getItem("wxInfo") || "{}");
            // if (wxInfoSession.status === -100) {
            //     window.sessionStorage.removeItem("wxInfo");
            //     wxInfoSession = {};
            // }
            // if (wxInfoSession.data && wxInfoSession.data.hasOwnProperty('time')) {
                const params = {
                    wxAuthKey: getQueryString("wak")
                };
            //     wxInfo = {
            //         wxId: wxInfoSession.data.uuid || "",
            //         deviceId: wxInfoSession.data.deviceId || ""
            //     };
                this.props.action_getUserInfo(params, reqHeader(params, getEncryptHeader(params)));
            // } else if (typeof wxInfoSession.status === "undefined" || !!wxInfo.wxId) {
            //     const params = {
            //         url: window.location.href.split("#")[0]
            //     };
            //     this.props.action_getUserInfo(params, reqHeader(params, getEncryptHeader(wxInfo)));
                // history.replaceState("", "", "/");
            // } else {
            //     this.props.action_getUserInfoFromSession();
            // }
        } else {
            window.sessionStorage.setItem("wxInfo", JSON.stringify({
                status: -100,
                msg: "",
                data: {}
            }));
            this.props.action_getUserInfoFromSession();
        }
    }

    configWeiXin() {
        const {isIos} = window.sysInfo;
        if (!isIos && location.pathname.indexOf('pay/home') >= 0) return;
        let param = {url: location.href.split('#')[0]};
        this.props.action_getUserConfig(param, reqHeader(param), (json) => {
            const {data} = json;
            setTimeout(() => {
                this.props.action_setWeixinConfigFinished(false);
                wxConfig(data);
                window.wx && window.wx.ready(() => {
                    this.props.action_setWeixinConfigFinished(true);
                });
            }, 500);
        });
    }

    configWxPath() {
        const {isWeixin, isIos} = window.sysInfo;
        if (isWeixin && !isIos) {
            if (!wxConfigPaths[this.props.history.location.pathname]) {
                this.configWeiXin();
                wxConfigPaths[this.props.history.location.pathname] = true;
            }
        }
    }
}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.app.user.userInfo,
        globAlert: state.app.common.globAlert,
        alertData: state.app.common.alertData,
        commonInfo: state.app.common.commonInfo,
        language: state.app.common.language,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action_getUserConfig: bindActionCreators(getUserConfig, dispatch),
        action_updateScreen: bindActionCreators(updateScreen, dispatch),
        action_getUserInfo: bindActionCreators(getUserInfo, dispatch),
        action_getUserInfoFromSession: bindActionCreators(getUserInfoFromSession, dispatch),
        action_setGlobAlert: bindActionCreators(setGlobAlert, dispatch),
        action_setWeixinConfigFinished: bindActionCreators(setWeixinConfigFinished, dispatch),
        action_setCommonInfo: bindActionCreators(setCommonInfo, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
