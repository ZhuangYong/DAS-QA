import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import bindActionCreators from "redux/es/bindActionCreators";
import PropTypes from "prop-types";
import {deleteRecording, getRecordsList, getUserInfo} from "../../actions/userActions";
import {formatTime, linkTo, reqHeader, timeToYmd, toRem} from "../../utils/comUtils";
import BaseComponent from "../../components/common/BaseComponent";
import MBottomNavigation from "../../components/common/MBottomNavigation";
import RecordingGrid from "../../components/recordingGrid/index";
import {Avatar, GridList, GridTile, FlatButton, Paper} from "material-ui";
import SvgIcon from 'material-ui/SvgIcon';

import FeedbackIcon from "../../../img/to_feedback.png";
import DeviceIcon from "../../../img/user_device.png";
import MyOrderingsIcon from "../../../img/user_myOrder.png";
import HeaderBgIcon from "../../../img/user_header_bg.png";
import VIPIcon from "../../../img/user_vip.png";
import VIPGrayIcon from "../../../img/user_vip_gray.png";
import VIPPayContent from "../../../img/vip_pay_content.png";
import PayIcon from "../../../img/common/icon_pay.png";
import {setGlobAlert} from "../../actions/common/actions";

import defaultAvatar from "../../../img/default_avatar.png";
import BottomDrawer from "../../components/recordingGrid/bottomDrawer";
import MallImg from "../../../img/mall/me.png";
import sysConfig from "../../utils/sysConfig";
import intl from 'react-intl-universal';

const styles = {
    headerImg: {
        display: "block",
        margin: `${toRem(40)} auto ${toRem(28)}`,
        width: toRem(60),
        height: toRem(60)
    },
    headerDesc: {
        height: toRem(95),
        textAlign: "center",
        color: "#222",
        lineHeight: "normal",
        fontSize: toRem(24)
    },
    gxStatusPan: {
        margin: 0,
        float: 'left',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.2rem'
    }
};

const RightIcon = (props) => (<SvgIcon
    style={props.style}>
    <path style={{fillRule: "evenodd", clipRule: "evenodd"}} d="M13.729,11.236L1.722,0.294c-0.394-0.392-1.033-0.392-1.427,0c-0.394,0.392-0.394,1.028,0,1.42l11.283,10.283L0.296,22.28c-0.394,0.392-0.394,1.028,0,1.42c0.394,0.392,1.033,0.392,1.427,0l12.007-10.942c0.21-0.209,0.3-0.486,0.286-0.76C14.029,11.723,13.939,11.446,13.729,11.236z"/>
</SvgIcon>);
const RightCircleIcon = (props) => (<SvgIcon
    style={props.style}
    viewBox='0 0 32 32'>
    <path style={{fillRule: "evenodd", clipRule: "evenodd"}} d="M20.536,15.121l-7.657-7.657c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414L18.586,16l-7.121,7.121c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.024,0.391,1.414,0l7.657-7.657c0.24-0.24,0.314-0.568,0.26-0.879C20.85,15.69,20.775,15.361,20.536,15.121z M16,0C7.163,0,0,7.164,0,16c0,8.837,7.163,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2c7.732,0,14,6.268,14,14C30,23.732,23.732,30,16,30z"/>
</SvgIcon>);

class UserIndex extends BaseComponent {

    constructor(props) {
        super(props);
        super.title(intl.get("title.my"));

        this.state = {
            userInfoData: {},
            recordsListTotalCounts: 0,
            recordsListData: [],
            open: false,
            deleteRecordingUid: null
        };

        this.updateRecordsList = this.updateRecordsList.bind(this);
        this.gxTimer = this.gxTimer.bind(this);
        this.showGxStatus = this.showGxStatus.bind(this);
    }

    componentDidUpdate(preProps) {
        if (preProps.recordsList.recordsListStamp !== this.props.recordsList.recordsListStamp) {
            this.updateRecordsList();
        }

        const {userInfoData} = this.props.userInfo;
        if (userInfoData && userInfoData.data && userInfoData.data.hasOwnProperty('time')) {
            this.gxTimer();
        }
    }

    componentDidMount() {

        if (super.isBindDevice(this.props.userInfo.userInfoData)) {
            const getRecordsListParams = {
                pageSize: 9,
                currentPage: 1
            };
            this.props.getRecordsListAction(getRecordsListParams, reqHeader(getRecordsListParams));
        }
    }

    componentWillUnmount() {
        if (this.state.gxTimer) {
            clearInterval(this.state.gxTimer);
            this.state.gxTimer = 0;
        }
    }

    render() {
        const userInfoData = this.props.userInfo.userInfoData;
        const {data} = userInfoData || {data: {}};
        let {headerImg} = data;
        headerImg = headerImg || "";
        const actionSetGlobAlert = this.props.action_setGlobAlert;
        const recordsList = this.state.recordsListData;
        const recordsListTotalCounts = this.state.recordsListTotalCounts;
        let bindDeviceStatus = parseInt(data.isReDevice, 10);
        if (bindDeviceStatus === 3) bindDeviceStatus = intl.get("device.bind.expired");
        if (bindDeviceStatus === 2) bindDeviceStatus = intl.get("device.disconnected");
        return (
            <div>
                <section>
                    <header style={{
                        width: "100%",
                        height: toRem(230),
                        background: `url(${HeaderBgIcon}) center no-repeat`,
                        backgroundSize: "cover"
                    }}>

                        <Avatar style={{
                            float: "left",
                            marginTop: toRem(22),
                            marginLeft: toRem(60),
                            width: toRem(160),
                            height: toRem(160),
                            border: `${toRem(7)} solid rgba(255, 255, 255, .3)`,
                            backgroundColor: "rgba(255, 255, 255)",
                            background: `url(${defaultAvatar}) no-repeat center`,
                            backgroundSize: "cover"
                        }} src={headerImg} alt=""/>

                        <div style={{
                            float: "left",
                            paddingTop: toRem(65),
                            marginLeft: toRem(23)
                        }}>
                            <div style={{
                                height: toRem(50),
                                lineHeight: toRem(50),
                                fontSize: toRem(30),
                                color: "#fff"
                            }}>{data.nickName || intl.get("device.anonymous")}</div>
                            {
                                typeof data.time !== 'undefined' ? this.showGxStatus(data) : this.showVIPStatus(data)
                            }
                        </div>
                    </header>

                    <GridList
                        cellHeight={"auto"}
                        style={{margin: 0, clear: "both"}}
                        cols={(userInfoData && typeof userInfoData.data.time !== 'undefined') ? 2 : 3}>

                        <GridTile
                            onTouchTap={() => {
                                if (super.validUserBindDevice(userInfoData, actionSetGlobAlert) !== true) return;
                                actionSetGlobAlert(intl.get("device.connected.add.song"));
                            }}>
                            <img
                                src={DeviceIcon}
                                style={styles.headerImg}
                            />
                            <div style={styles.headerDesc}>
                                <p style={{margin: "0"}}>{intl.get("device.connect")}</p>
                                <p style={{margin: `${toRem(10)} 0 0`, fontSize: toRem(20), color: "#999"}}>
                                    {parseInt(data.isReDevice, 10) === 1 ? intl.get("device.connected") + data.deviceId.replace(data.deviceId.slice(4, data.deviceId.length - 4), "***") : bindDeviceStatus}
                                </p>
                            </div>
                        </GridTile>

                        <GridTile
                            onTouchTap={() => {
                                if (super.validUserBindDevice(userInfoData, actionSetGlobAlert) !== true) return;
                                linkTo(`user/feedback/home`, false, null);
                            }}>
                            <img
                                src={FeedbackIcon}
                                style={styles.headerImg}
                            />
                            <div style={styles.headerDesc}>{intl.get("title.feedback")}</div>
                        </GridTile>

                        {
                            (userInfoData && typeof userInfoData.data.time !== 'undefined') ? <div></div> : <GridTile
                                onTouchTap={() => {
                                    // linkTo(`user/orderForm`, false, null);
                                    linkTo(`user/myOrder`, false, null);
                                }}>
                                <img
                                    src={MyOrderingsIcon}
                                    style={{...styles.headerImg, width: "auto"}}
                                />
                                <div style={styles.headerDesc}>{intl.get("title.my.order")}</div>
                            </GridTile>
                        }

                    </GridList>

                </section>

                {!(data.channel === "nst_yinba") && (<section>
                    <header style={{
                        width: "100%",
                        height: "55px",
                        borderTop: "5px solid #d9d5d5"
                    }}>
                        <div style={{
                            float: "left",
                            marginLeft: toRem(20),
                            lineHeight: toRem(110),
                            color: "#222",
                            fontSize: toRem(34),
                            fontWeight: "bold"
                        }}>{intl.get("title.my.record")}</div>
                        <div style={{
                            float: "right",
                            marginRight: toRem(20)
                        }}
                             onClick={() => {
                                 if (super.validUserBindDevice(userInfoData, actionSetGlobAlert) !== true) return;

                                 if (recordsListTotalCounts < 1) {
                                     actionSetGlobAlert(intl.get("audio.empty"));
                                     return;
                                 }
                                 linkTo(`user/recordings`, false, null);
                             }}>
                            <span style={{
                                lineHeight: toRem(110),
                                color: "#999",
                                fontSize: toRem(24)
                            }}>{intl.get("audio.total", {number: recordsListTotalCounts})}</span>

                            <RightCircleIcon style={{
                                position: "relative",
                                top: toRem(5),
                                marginLeft: toRem(20),
                                color: "#ff7d4f",
                                width: toRem(30),
                                height: toRem(30)
                            }}/>
                        </div>
                    </header>

                    <RecordingGrid
                        data={(recordsList && recordsList.length) ? recordsList.filter((i, index) => index < 3) : []}
                        operateClick={(uid) => {
                            this.setState({
                                deleteRecordingUid: uid,
                                open: true
                            });
                        }}
                    />

                </section>)}

                <Paper
                    zDepth={0}
                    style={{margin: '.3rem .267rem 2.2rem .267rem'}}
                >
                    <img src={MallImg} style={{width: '100%'}} onClick={f => location.href = sysConfig.mallIndex}/>
                </Paper>

                <MBottomNavigation selectedIndex={2}/>

                <BottomDrawer
                    open={this.state.open}
                    onRequestChange={() => {
                        this.setState({
                            open: false
                        });
                    }}
                    actions={[
                        <button
                            style={{
                                width: "80%",
                                height: "100%",
                                color: "#ff6832",
                                fontSize: toRem(38),
                                background: "#fff",
                                border: "none"
                            }}
                            onClick={() => {
                                const uid = this.state.deleteRecordingUid;
                                const params = {
                                    uid: uid
                                };
                                this.props.deleteRecordingAction(params, reqHeader(params), (res) => {
                                    const {status} = res;
                                    if (status === 1) {
                                        const getRecordsListParams = {
                                            pageSize: 9,
                                            currentPage: 1
                                        };
                                        this.props.getRecordsListAction(getRecordsListParams, reqHeader(getRecordsListParams));
                                    }
                                    this.setState({
                                        open: false
                                    });
                                });
                            }}
                        >{intl.get("button.delete")}</button>
                    ]}
                />
            </div>
        );
    }

    updateRecordsList() {
        const {status, data, msg} = this.props.recordsList.recordsListData || {};
        const {result} = data || {result: []};
        this.setState({
            recordsListTotalCounts: data.totalCount,
            recordsListData: result.filter((item) => {
                item.defaultImg = this.randomDefaultImg();
                return item;
            })
        });
    }

    /**
     * 返回vip状态的dom结构
     * @param data: userInfo数据
     * @returns {XML}: 返回虚拟daom
     */
    showVIPStatus(data) {
        let vipStatus = data.vipStatus;
        const isReDevice = data.isReDevice;
        if (typeof vipStatus === "undefined") return;
        if (isReDevice !== 1) vipStatus = -1;

        let vipParams = {
            bgColor: vipStatus === 0 ? "#373737" : "#1f100f",
            imgUrl: vipStatus === 0 ? VIPGrayIcon : VIPIcon,
            content: null,
            contentColor: vipStatus === 0 ? "#fff" : "#f3c752",
            rightColor: vipStatus === 0 ? "#fff" : "#f3c752",
            borderColor: vipStatus === 0 ? "#ababaa" : "#ffcb63",
            _content: (text) => {
                if (!text) {
                    return (<img style={{
                        marginLeft: toRem(15),
                        marginRight: toRem(15),
                        width: toRem(86),
                        height: toRem(22)
                    }} src={VIPPayContent} alt="VIP充值"/>);
                }
                return (<div style={{
                    marginLeft: toRem(15),
                    marginRight: toRem(15),
                    lineHeight: toRem(50),
                    fontSize: toRem(24),
                    color: vipParams.contentColor
                }}>{text}</div>);
            }
        };

        switch (vipStatus) {
            case -1:
                vipParams.content = vipParams._content();
                break;
            case 0:
                vipParams.content = vipParams._content(intl.get("vip.expired"));
                break;
            case 1:
                vipParams.content = vipParams._content(timeToYmd(data.expireTime, ".") + intl.get("expired"));
                break;
            default:
                vipParams.content = vipParams._content();
                break;
        }

        return (<div
            style={{
                display: "flex",
                alignItems: "center",
                height: toRem(50),
                backgroundColor: vipParams.bgColor,
                borderRadius: toRem(10),
                border: `${toRem(2)} solid ${vipParams.borderColor}`,
                boxSizing: "initial"
            }}
            onTouchTap={() => {
                if (super.validUserBindDevice(this.props.userInfo.userInfoData, this.props.action_setGlobAlert) !== true) return;

                if (super.isFreeActivation(this.props.userInfo.userInfoData)) {
                    linkTo(`deviceRegister`, false, null);
                    return;
                }
                const {isIos} = window.sysInfo;
                if (isIos) {
                    // linkTo(`pay/home`, false, null);
                    location.href = '/pay/home';
                } else {
                    linkTo(`pay/home`, false, null);
                }
            }}>
            <img style={{
                width: toRem(100),
                height: toRem(50)
            }} src={vipParams.imgUrl} alt=""/>
            {vipParams.content}
            <RightIcon style={{
                marginRight: toRem(15),
                color: vipParams.rightColor,
                width: toRem(16.5),
                height: toRem(24)
            }}/>
        </div>);
    }

    /**
     *
     * @param data
     * @returns {XML}
     */
    showGxStatus(data) {
        let vipStatus = data.vipStatus;
        return (<div
            style={{
                alignItems: "center",
                color: "#ffcb63",
                fontSize: '.32rem',
                height: toRem(50),
                backgroundColor: vipStatus === 0 ? "#373737" : "#1f100f",
                borderRadius: toRem(10),
                border: `${toRem(2)} solid ${vipStatus === 0 ? "#ababaa" : "#ffcb63"}`,
                boxSizing: "initial"
            }}
            onTouchTap={() => {
                if (super.validUserBindDevice(this.props.userInfo.userInfoData, this.props.action_setGlobAlert) !== true) return;

                if (super.isFreeActivation(this.props.userInfo.userInfoData)) {
                    linkTo(`deviceRegister`, false, null);
                    return;
                }
                const {isIos} = window.sysInfo;
                if (isIos) {
                    // linkTo(`pay/home`, false, null);
                    location.href = '/pay/home';
                } else {
                    linkTo(`pay/home`, false, null);
                }
            }}>
            {
                !window.gxTime ? <p style={styles.gxStatusPan}>
                    {intl.get("song.sing.now")}
                </p> : <p style={styles.gxStatusPan}>
                    {intl.get("song.rest.time")}：<font>{formatTime(this.state.gxTime || window.gxTime)}</font>
                </p>
            }

            <img style={{
                width: toRem(100),
                height: toRem(50),
                float: 'right'
            }} src={PayIcon} />
        </div>);
    }

    randomDefaultImg() {
        return `../../../img/album/${parseInt(Math.random() * 3, 10) + 1}.png`;
    }

    gxTimer() {
        const {gxTimer} = this.state;
        if (!gxTimer) {
            this.state.gxTimer = setInterval(() => {
                if (window.gxTime <= 0) {
                    if (typeof this.state.gxTime === 'undefined') {
                        this.setState({
                            gxTime: 0
                        });
                    }
                    return;
                }
                this.setState({
                    gxTime: window.gxTime
                });
            }, 1000);
        }
    }
}


UserIndex.defaultProps = {
    userInfo: {},
    recordsList: {}
};

UserIndex.propTypes = {
    userInfo: PropTypes.object,
    recordsList: PropTypes.object
};

const mapStateToProps = (state, ownPorps) => {
    return {
        userInfo: state.app.user.userInfo,
        recordsList: state.app.songs
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userInfoAction: bindActionCreators(getUserInfo, dispatch),
        action_setGlobAlert: bindActionCreators(setGlobAlert, dispatch),
        deleteRecordingAction: bindActionCreators(deleteRecording, dispatch),
        getRecordsListAction: bindActionCreators(getRecordsList, dispatch)
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndex));
