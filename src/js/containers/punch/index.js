import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {FloatingActionButton, RaisedButton, Snackbar} from "material-ui";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {bindActionCreators} from "redux";
import Const from "../../utils/const";
import {qaDetail} from "../../actions/qa";
import {getUserSignInInfo, getUserScore, userSignIn} from "../../actions/userActions";
import {parseSimpleTime, parseTime, reqHeader} from "../../utils/comUtils";

const STEP_SCORE = 2;
const DAY_NUM = ["一", "二", "三", "四", "五", "六", "七"];
class SignIn extends BaseComponent {
    constructor(props) {
        super(props);
        super.title("签到");
        this.state = {
            signIns: [],
            nowSignIn: 0,
            preSignIn: 0,
            showMsg: false,
            msgText: '',
            loading: false,
            barrageSendToast: false,
            barrageToastMsg: ""
        };
        this.showMsg = this.showMsg.bind(this);
        this.refreshSignInInfo = this.refreshSignInInfo.bind(this);
        this.getTodayScore = this.getTodayScore.bind(this);
        this.doSignIn = this.doSignIn.bind(this);
    }

    componentDidMount() {
        this.refreshSignInInfo();
        this.refreshUserScore();
    }

    render() {
        const todayScore = parseInt(this.getTodayScore() || 0, 10);
        const yesterdayScore = parseInt(this.getYesterdayScore() || 0, 10);
        console.log(todayScore);
        const continueCount = (todayScore || yesterdayScore) ? ((todayScore || yesterdayScore) - 5) / 2 + 1 : 0;
        const todayDay = new Date().getDay();
        let signTip = "";
        if (todayScore) {
            signTip = `明日签到可领取${todayDay === 7 ? 5 : todayScore + STEP_SCORE}积分`;
        } else {
            signTip = `今日签到可领取${todayDay === 1 ? 5 : yesterdayScore + STEP_SCORE}积分`;
        }
        return (
            <div>
                <div className="punch-container">
                    <Card className="punch-head">
                        <CardHeader
                            title={<div className="score-title">
                                你的积分：{this.props.userInfo.userScoreInfo.totalScore || 0}
                            </div>}
                        />
                        <CardText className="punch-center-area">
                            <div className="punch-circle" onClick={!todayScore ? this.doSignIn : f => f}>
                                <FloatingActionButton mini={true} style={{}}>
                                    <div className="inner-button">
                                        {
                                            this.state.loading ? this.getLoading() : ""
                                        }
                                        {
                                            !this.state.loading ? <span className="status">
                                                                    {todayScore ? "已签到" : "可签到"}
                                                                  </span> : ""
                                        }
                                        {
                                            !this.state.loading ? <span className="count">
                                                                      已连续{continueCount}天
                                                                  </span> : ""
                                        }
                                    </div>
                                </FloatingActionButton>
                            </div>
                        </CardText>
                        <CardText className="punch-tip">
                            {signTip}
                        </CardText>

                        <CardActions className="day-check-shows">
                            {this.renderDays()}
                        </CardActions>
                    </Card>

                    <Card className="punch-bottom">
                        <CardText>
                            <div className="punch-rules-title">
                                <span>
                                    <font>积分签到规则</font>
                                </span>
                                <hr/>
                            </div>
                        </CardText>
                        <CardText>
                            <p>
                                <ActionGrade color="#f6d723" className="star"/>每人每天可签到一次
                            </p>
                            <p>
                                <ActionGrade color="#f6d723" className="star"/>如果连续签到，获得积分递增2积分，签到次周均从5分起签
                            </p>
                            <p>
                                <ActionGrade color="#f6d723" className="star"/>非连续签到，不能享受递增积分
                            </p>
                            <p>
                                <ActionGrade color="#f6d723" className="star"/>积分可用于工会组织的不定期福利抽奖，以及各类礼品兑换中
                            </p>
                        </CardText>
                        <CardActions className="bottom-buttons">
                            <RaisedButton label="进入积分福利社" backgroundColor="#2d73c9" labelColor="#ffffff" className="jump-button" onClick={() => location.href = "/dasapp/integral/giftPage"}/>
                        </CardActions>
                    </Card>
                </div>
                <Snackbar
                    open={this.state.barrageSendToast}
                    bodyStyle={{height: 'auto', minHeight: 48, lineHeight: '.7rem', display: 'flex', alignItems: 'center'}}
                    message={this.state.barrageToastMsg}
                    autoHideDuration={Const.TOAST_BOTTOM_SHOW_TIME}
                    onRequestClose={() => {
                        this.setState({
                            barrageSendToast: false
                        });
                    }}
                />
            </div>
        );
    }


    showMsg(msg) {
        this.setState({
            barrageToastMsg: msg,
            barrageSendToast: true
        });
    }

    renderDays() {
        let days = [];
        for (let i = 0; i < 7; i++) {
            const signInDay = this.state.signIns.find(p => p.createTime.split(" ")[0].replace(/-/g, "/").replace(/\/0/g, "/").indexOf(this.getWeek(i)) >= 0);
            if (signInDay) {
                days.push(this.getDaysStr(signInDay.score ? "+" + signInDay.score : "签", "星期" + DAY_NUM[i]));
            } else {
                days.push(this.getDaysStr("签", "星期" + DAY_NUM[i]));
            }
        }
        return days;
    }

    getTodayScore() {
        const signInToday = this.state.signIns.find(p => parseSimpleTime(p.createTime.split(" ")[0]) === parseSimpleTime(new Date(this.getWeek(new Date().getDay() - 1))));
        if (signInToday && signInToday.score) return parseInt(signInToday.score, 10);
        return 0;
    }

    getYesterdayScore() {
        const day = new Date().getDay();
        if (day === 1) return 0;
        const signInYesterday = this.state.signIns.find(p => parseSimpleTime(p.createTime.split(" ")[0]) === parseSimpleTime(new Date(this.getWeek(day - 2))));
        if (signInYesterday && signInYesterday.score) return parseInt(signInYesterday.score, 10);
        return 0;
    }

    getDaysStr(msg1, msg2) {
        const current = DAY_NUM.indexOf(msg2.replace("星期", "")) === new Date().getDay() - 1;
        return <div className="day-check-item" key={msg2}>
                    <span>
                        <FloatingActionButton mini={true}>
                            {
                                this.state.loading && current ? this.getLoading() : <font color="white" style={{fontSize: '.36rem'}}>{msg1}</font>
                            }
                        </FloatingActionButton>
                    </span>
                    <span className="title">
                        {msg2}
                    </span>
                </div>;
    }
    getLoading() {
        return <svg className="rotate loading-rotate" viewBox="0 0 40 40">
            <circle className="loading-circle" cx="20" cy="20" r="18.25" fill="none" strokeWidth="3.5" strokeMiterlimit="20"/>
        </svg>;
    }

    getWeek(i) {
        const now = new Date();
        const firstDay = new Date(now - (now .getDay() - 1) * 86400000);
        firstDay.setDate(firstDay.getDate() + i);
        let mon = Number(firstDay.getMonth()) + 1;
        return now .getFullYear() + "/" + mon + "/" + firstDay.getDate();
    }

    refreshSignInInfo() {
        this.setState({loading: true});
        this.props.actionGetUserSignInInfo({}, reqHeader({}), res => {
            this.setState({
                signIns: res,
                loading: false
            });
        }, err => {
            this.setState({loading: false});
        });
    }

    doSignIn() {
        this.setState({loading: true});
        this.props.actionUserSignIn({}, reqHeader({}), res => {
            this.showMsg("签到成功");
            this.refreshUserScore();
            this.refreshSignInInfo();
        }, err => {
            this.showMsg("操作失败，请稍后重试！");
            this.setState({loading: false});
        });
    }

    refreshUserScore() {
        this.props.actionGetUserScore({}, reqHeader({}));
    }
}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        qa: state.app.qa,
        userInfo: state.app.user.userInfo,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionGetUserScore: bindActionCreators(getUserScore, dispatch),
        actionQaDetail: bindActionCreators(qaDetail, dispatch),
        actionGetUserSignInInfo: bindActionCreators(getUserSignInInfo, dispatch),
        actionUserSignIn: bindActionCreators(userSignIn, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn));
