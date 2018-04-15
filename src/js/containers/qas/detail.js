import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import {RaisedButton, Snackbar} from "material-ui";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {bindActionCreators} from "redux";
import Const from "../../utils/const";
import intl from 'react-intl-universal';
import {qaDetail, qaExamItems, qaExams} from "../../actions/qa";
import {reqHeader} from "../../utils/comUtils";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logoTitle from "../../../img/qa/logo_w1@3x.png";

class Detail extends BaseComponent {
    constructor(props) {
        super(props);
        super.title(intl.get("title.home"));
        this.state = {
            pageData: [],
            pageIndex: 0,
            showMsg: false,
            msgText: '',
            loading: false,
            barrageSendToast: false,
            barrageToastMsg: "",
        };
        this.getQaDetail = this.getQaDetail.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.preStep = this.preStep.bind(this);
        this.detailStep = this.detailStep.bind(this);
    }

    componentDidMount() {
        this.getQaDetail();
    }

    componentDidUpdate(preProps) {
        if (preProps.qa.qaExamsStamp !== this.props.qa.qaExamsStamp || preProps.qa.qaDetailStamp !== this.props.qa.qaDetailStamp) {
            const {qaExams = [], qaDetail = {}} = this.props.qa;
            this.setState({
                pageData: [qaDetail, ...qaExams],
            });
        }
    }

    render() {
        const detail = this.props.qa.qaDetail || {};
        return (
            <div>
                <div>
                    {
                        this.state.pageIndex === 0 ? <Card className="qa-detail">
                            <CardTitle title={<div className="qa-title">
                                {detail.title}
                            </div>} subtitle={
                                <div className="sub-title">
                                    <img className="logo-title" src={logoTitle}/>
                                    <div>
                                        发布者：{detail.name}
                                    </div>
                                    <div>
                                        发布时间：{(detail.createTime || "").replace(/-/g, "/").split(" ")[0]}
                                    </div>
                                </div>
                            } />
                            <CardMedia>
                                <img src="images/nature-600-337.jpg" alt="" />
                            </CardMedia>
                            <CardText className="txt-introduction">
                                <font>活动简介：</font>{detail.introduction}
                            </CardText>
                            <CardText className="txt-time">
                                <font>答题时间：</font>{`${(detail.startTime || "").split(" ")[0]} 至 ${(detail.endTime || "").split(" ")[0]}`}
                            </CardText>
                            <CardText className="txt-win-way">
                                <font>奖品及发放方式：</font>神秘大奖会根据获奖名单线下发放
                            </CardText>
                            <CardActions className="qa-buttons">
                                <FlatButton backgroundColor={this.getBackgroundColor(detail)} className={`status-${this.getStatus(detail)}`} label={this.getStatusStr(detail)} onClick={this.nextStep}/>
                            </CardActions>
                        </Card> : ""
                    }
                    {
                        this.state.pageIndex !== 0 && this.state.pageData.length > 1 ? <Card className="qa-detail">
                            <CardTitle title={<div className="qa-title">
                                {this.state.pageData[this.state.pageIndex].title}
                            </div>} subtitle={
                                <div className="sub-title">
                                    <img className="logo-title" src={logoTitle}/>
                                    <div>
                                        发布者：{detail.name}
                                    </div>
                                    <div>
                                        发布时间：{(detail.createTime || "").replace(/-/g, "/").split(" ")[0]}
                                    </div>
                                </div>
                            } />
                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                                <RadioButton
                                    iconStyle={{color: "red"}}
                                    className="item-radio"
                                    value="light"
                                    label="Simple"
                                />
                                <RadioButton
                                    className="item-radio"
                                    value="not_light"
                                    label="Selected by default"
                                />
                            </RadioButtonGroup>
                            <CardActions className="qa-buttons">
                                {
                                    this.state.pageIndex === 1 ? <FlatButton className="status-1" label="返回" onClick={this.detailStep}/> : ""
                                }
                                {
                                    this.state.pageIndex > 1 ? <FlatButton className="status-1" label="上一题" onClick={this.preStep}/> : ""
                                }
                                {
                                    this.state.pageData.length - 1 === this.state.pageIndex ? <FlatButton className="status-1"
                                                                                                      label="提交"/> : <FlatButton className="status-1"
                                                                                                                                 onClick={this.nextStep}
                                                                                                                                 label="继续"/>
                                }

                            </CardActions>
                        </Card> : ""
                    }
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
    getBackgroundColor(detail = {}) {
        switch (this.getStatus(detail)) {
            case 1:
                // 可以参加
                return "#feb20f";
            case 2:
            case 3:
                // 未开始、已结束
                return "#fff0cf";
            case 4:
                // 已参加
                return "#fd3110";
            default: return "未确定";

        }
    }
    getQaDetail() {
        const {id} = this.props.match.params;
        this.props.actionQaDetail({id: id}, reqHeader({}), res => {
            this.getQaExams(res.exams);
        });
    }
    getQaExams(ids) {
        ids && this.props.actionQaExams({ids: ids}, reqHeader({}));
    }

    getStatusStr(detail = {}) {
        switch (this.getStatus(detail)) {
            case 1:
                return "进入问卷";
            case 2:
                return "尚未开始";
            case 3:
                return "已结束";
            default: return "未确定";

        }
    }

    getStatus(detail = {}) {
        const {startTime, endTime} = detail;
        if (!startTime || !endTime) return 4;
        const s = new Date(startTime.replace("-", "/")).getTime();
        const e = new Date(endTime.replace("-", "/")).getTime();
        const n = new Date().getTime();
        if (n > s && n < e) {
           return 1;
        } else if (n < s) {
            return 2;
        } else if (n > e) {
            return 3;
        }
    }

    nextStep() {
        if (this.state.pageData.length > 1) {
            if (this.state.pageIndex < this.state.pageData.length) {
                this.setState({
                    pageIndex: this.state.pageIndex + 1
                });
            }
        }
    }

    preStep() {
        if (this.state.pageIndex !== 1) {
            this.setState({
                pageIndex: this.state.pageIndex - 1
            });
        }
    }
    detailStep() {
        this.setState({
            pageIndex: 0
        });
    }
}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        qa: state.app.qa,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionQaDetail: bindActionCreators(qaDetail, dispatch),
        actionQaExams: bindActionCreators(qaExams, dispatch),
        actionQaExamItems: bindActionCreators(qaExamItems, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail));
