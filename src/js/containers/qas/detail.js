import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import {Snackbar} from "material-ui";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import {bindActionCreators} from "redux";
import Const from "../../utils/const";
import {qaDetail, qaExamDo, qaExamItems, qaExams} from "../../actions/qa";
import {reqHeader} from "../../utils/comUtils";
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logoTitle from "../../../img/qa/logo_w1@3x.png";
import logoBottom from "../../../img/qa/logo_w2@3x.png";
import detailBg from "../../../img/qa/detail_bg_560@3x.png";

class Detail extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageData: [],
            tempExamItems: {},
            tempExamItemsChecked: {},
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
        this.checkChange = this.checkChange.bind(this);
        this.checkBoxCheckChange = this.checkBoxCheckChange.bind(this);
        this.getDefaultSelected = this.getDefaultSelected.bind(this);
        this.getDefaultChecked = this.getDefaultChecked.bind(this);
        this.getCurrentExam = this.getCurrentExam.bind(this);
        this.submitExam = this.submitExam.bind(this);
        this.showMsg = this.showMsg.bind(this);
    }

    componentDidMount() {
        this.getQaDetail();
    }

    componentDidUpdate(preProps) {
        if (preProps.qa.qaExamsStamp !== this.props.qa.qaExamsStamp || preProps.qa.qaDetailStamp !== this.props.qa.qaDetailStamp) {
            const {qaExams, qaDetail} = this.props.qa;
            this.setState({
                pageData: [qaDetail || {}, ...(qaExams || [])],
            });
            super.title(qaDetail.title);
        }
        if (preProps.qa.qaExamItemsStamp !== this.props.qa.qaExamItemsStamp) {
            const {qaExamItems = []} = this.props.qa;
            this.state.tempExamItems[qaExamItems[0].examId] = qaExamItems;
            this.setState({
                tempExamItems: this.state.tempExamItems
            });
        }
    }

    render() {
        const detail = this.props.qa.qaDetail || {};
        const detailLoaded = (parseInt(detail.id, 10) === parseInt(this.props.match.params.id, 10));
        const currentExam = this.state.pageData[this.state.pageIndex];
        const {examId} = currentExam || {};
        return (
            <div className="detail-page">
                <div>
                    {
                        !detailLoaded ? this.getLoading() : ""
                    }
                    {
                        this.state.pageIndex === 0 && detailLoaded ? <Card className="qa-detail">
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
                            {
                                <CardMedia className="thumb-img">
                                    {
                                        detail.thumbUrl ? <img src={"http://yqdz.oss-cn-beijing.aliyuncs.com/" + detail.thumbUrl} onError={e => e.target.src = detailBg}/> : <div/>
                                    }
                                    {
                                        detail.content ? <div className="detail-content" dangerouslySetInnerHTML={{__html: detail.content}} /> : <div/>
                                    }
                                </CardMedia>
                            }
                            <CardText className="txt-introduction">
                                <font>活动简介：</font>{detail.introduction}
                            </CardText>
                            <CardText className="txt-time">
                                <font>答题时间：</font>{`${(detail.startTime || "").split(" ")[0]} 至 ${(detail.endTime || "").split(" ")[0]}`}
                            </CardText>
                            {/*<CardText className="txt-win-way">
                                <font>奖品及发放方式：</font>神秘大奖会根据获奖名单线下发放
                            </CardText>*/}
                            <CardActions className="qa-buttons">
                                <FlatButton backgroundColor={this.getBackgroundColor(detail)} className={`status-${this.getStatus(detail)}`} label={this.getStatusStr(detail)} onClick={this.nextStep}/>
                            </CardActions>
                            <CardText>
                                <img src={logoBottom} style={{width: '50%', marginLeft: '25%'}}/>
                            </CardText>
                        </Card> : ""
                    }
                    {
                        this.state.pageIndex !== 0 && this.state.pageData.length > 1 ? <Card className="qa-detail">
                            <CardText className="txt-win-way">
                                {
                                    currentExam.content && <div dangerouslySetInnerHTML={{__html: currentExam.content}} />
                                }
                            </CardText>
                            <CardTitle title={<div className="qa-title">
                                {`(${this.state.pageIndex}/${this.state.pageData.length - 1})`}{currentExam.title}
                            </div>}/>
                            {
                                !this.state.loading && currentExam && !currentExam.multiSelect ? <RadioButtonGroup name="shipSpeed" key={currentExam.examId} defaultSelected={this.getDefaultSelected()} onChange={this.checkChange}>
                                    {
                                        this.getStepExamItems().map(item => {
                                            return <RadioButton
                                                key={item.itemId}
                                                className="item-radio"
                                                value={item.itemId}
                                                label={<div style={{fontSize: '.38rem'}}>
                                                    <font color="#808080">{item.orderNo}.</font> {item.title}
                                                    </div>}
                                            />;
                                        })
                                    }
                                </RadioButtonGroup> : ""
                            }
                            {
                                !this.state.loading && currentExam && currentExam.multiSelect ? <div>
                                    {
                                        this.getStepExamItems().map(item => {
                                            return <Checkbox
                                                key={item.itemId}
                                                className="item-radio"
                                                value={item.itemId}
                                                onCheck={this.checkBoxCheckChange}
                                                defaultChecked={this.getDefaultChecked(item.itemId)}
                                                label={<div style={{fontSize: '.38rem'}}>
                                                    <font color="#808080">{item.orderNo}.</font> {item.title}
                                                </div>}
                                            />;
                                        })
                                    }
                                </div> : ""
                            }
                            {
                                this.state.loading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{this.getLoading()}</div> : ""
                            }

                            <CardActions className="qa-buttons">
                                {
                                    this.state.pageIndex === 1 ? <FlatButton className="status-0" label="返回" onClick={this.detailStep}/> : ""
                                }
                                {
                                    this.state.pageIndex > 1 ? <FlatButton className="status-0" label="上一题" onClick={this.preStep}/> : ""
                                }
                                {
                                    this.state.pageData.length - 1 === this.state.pageIndex ? <FlatButton className="status-0"
                                                                                                          onClick={this.submitExam}
                                                                                                          label={this.state.loading ? this.getLoading() : "提交"}/> : <FlatButton className="status-0"
                                                                                                                                     onClick={this.nextStep}
                                                                                                                                     label="继续"/>
                                }

                            </CardActions>
                            <CardText>
                                <img src={logoBottom} style={{width: '50%', marginLeft: '25%'}}/>
                            </CardText>
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

    /**
     * 从接口获取问卷详情
     */
    getQaDetail() {
        const {id} = this.props.match.params;
        this.props.actionQaDetail({id: id}, reqHeader({}), res => {
            this.getQaExams(res.exams);
        });
    }

    /**
     * 从接口获取题目
     * @param ids
     */
    getQaExams(ids) {
        this.props.actionQaExams({ids: ids}, reqHeader({}));
    }

    getStatusStr(detail = {}) {
        switch (this.getStatus(detail)) {
            case 1:
                return "进入问卷";
            case 2:
                return "尚未开始";
            case 3:
                return "已结束";
            case 4:
                return "已参加";
            default: return "未确定";

        }
    }

    /**
     * 计算问卷状态 1：进行中，2：未开始，3：已经结束，4：已经做过，5：其他
     * @param detail
     * @returns {number}
     */
    getStatus(detail = {}) {
        const {startTime, endTime, userExamItemId} = detail;
        if (userExamItemId) return 4;
        if (!startTime || !endTime) return 5;
        const s = new Date(startTime.replace(/-/g, "/").substr(0, 19)).getTime();
        const e = new Date(endTime.replace(/-/g, "/").substr(0, 19)).getTime();
        const n = new Date().getTime();
        if (n > s && n < e) {
           return 1;
        } else if (n < s) {
            return 2;
        } else if (n > e) {
            return 3;
        }
    }

    /**
     * 进入下一题
     */
    nextStep() {
        if (this.getStatus(this.props.qa.qaDetail) !== 1) return;
        if (this.state.pageIndex > 0 && !this.state.tempExamItemsChecked[this.state.pageData[this.state.pageIndex].examId]) {
            this.showMsg("不能跳过答题！");
            return;
        }
        if (this.state.pageData.length > 1) {
            if (this.state.pageIndex < this.state.pageData.length) {
                const pageIndex = this.state.pageIndex + 1;
                this.setState({
                    pageIndex: pageIndex
                });
                const examItem = this.state.pageData[pageIndex];
                const {examId} = examItem;
                if (!this.state.tempExamItems[examId]) {
                    this.setState({loading: true});
                    this.props.actionQaExamItems({id: examId}, reqHeader({}), res => {
                        this.setState({loading: false});
                    }, err => {
                        this.setState({loading: false});
                    });
                }
                document.querySelector(".detail-page").scrollTop = 0;
            }
        } else {
            this.showMsg("答题准备中！");
        }
    }

    /**
     * 上一题
     */
    preStep() {
        if (this.state.pageIndex !== 1) {
            this.setState({
                pageIndex: this.state.pageIndex - 1
            });
        }
        document.querySelector(".detail-page").scrollTop = 0;
    }

    /**
     * 进入问卷详情
     */
    detailStep() {
        this.setState({
            pageIndex: 0
        });
    }

    /**
     * 获取当前题目
     * @returns {*}
     */
    getCurrentExam() {
        const pageIndex = this.state.pageIndex;
        return this.state.pageData[pageIndex];
    }

    /**
     * 获取题目对应选项
     * @returns {*|Array}
     */
    getStepExamItems() {
        const pageIndex = this.state.pageIndex;
        const examItem = this.state.pageData[pageIndex];
        const {examId} = examItem;
        return this.state.tempExamItems[examId] || [];
    }

    /**
     * 获取默认选项
     * @returns {*}
     */
    getDefaultSelected() {
        const pageIndex = this.state.pageIndex;
        const examItem = this.state.pageData[pageIndex];
        const {examId} = examItem;
        return this.state.tempExamItemsChecked[examId];
    }

    /**
     * 获取默认选项，多选框
     * @param examId
     * @param itemId
     * @returns {boolean}
     */
    getDefaultChecked(itemId) {
        const {examId} = this.getCurrentExam();
        const v = (this.state.tempExamItemsChecked[examId] || "");
        return v.split(",").some(v => v + "" === itemId + "");
    }

    /**
     * 单选框选择变化
     * @param e
     * @param v
     */
    checkChange(e, v) {
        const pageIndex = this.state.pageIndex;
        const examItem = this.state.pageData[pageIndex];
        const {examId} = examItem;
        this.state.tempExamItemsChecked[examId] = v;
    }

    /**
     * 多选框选择变化
     * @param e
     * @param b
     */
    checkBoxCheckChange(e, b) {
        const pageIndex = this.state.pageIndex;
        const examItem = this.state.pageData[pageIndex];
        const {examId} = examItem;
        const ov = this.state.tempExamItemsChecked[examId] || "";
        const v = e.currentTarget.value;
        if (b) {
            let ovs = ov.split(",");
            if (!ovs.some(iv => iv === v)) {
                ovs.push(v);
                this.state.tempExamItemsChecked[examId] = ovs.join(",");
            }
        } else {
            this.state.tempExamItemsChecked[examId] = ov.split(",").filter(i => i !== v).join(",");
        }
        if (this.state.tempExamItemsChecked[examId].indexOf(",") === 0) this.state.tempExamItemsChecked[examId] = this.state.tempExamItemsChecked[examId].substr(1);
        this.setState({
            tempExamItemsChecked: this.state.tempExamItemsChecked
        });
    }

    /**
     * 提交问卷
     */
    submitExam() {
        if (this.state.loading) return;
        let answers = [];
        const {id: qaId} = this.props.qa.qaDetail;
        this.setState({loading: true});
        this.state.pageData.map(exam => {
            const {examId, contentId} = exam;
            let v = this.state.tempExamItemsChecked[examId];
            if (v) {
                v = v + "";
                if (v.indexOf(",") > 0) {
                    v.split(",").map(iv => {
                        const answer = {questionnaireId: qaId, examid: examId, itemid: parseInt(iv, 10), contentid: contentId};
                        answers.push(answer);
                    });
                } else {
                    const answer = {questionnaireId: qaId, examid: examId, itemid: parseInt(v, 10), contentid: contentId};
                    answers.push(answer);
                }
            }
        });
        this.props.actionQaExamDo({answers: JSON.stringify(answers)}, reqHeader({}), res => {
            // this.setState({
            //     loading: false,
            // });
            const {config = []} = this.state.pageData[0];
            const score = (config.find(c => c.config === "faqs") || {}).configValue;
            this.showMsg(`提交成功，感谢参与，已获得${score}积分！`);
            setTimeout(() => {
                location.reload();
            }, 1000);
        }, err => {
            this.setState({
                loading: false,
            });
            this.showMsg(`提交失败${err ? ":" + err : ""}，请稍后重试！`);
        });
    }
    showMsg(msg) {
        this.setState({
            barrageToastMsg: msg,
            barrageSendToast: true
        });
    }

    getLoading() {
        return <svg className="rotate loading-rotate" viewBox="0 0 40 40">
            <circle className="loading-circle" cx="20" cy="20" r="18.25" fill="none" strokeWidth="3.5" strokeMiterlimit="20"/>
        </svg>;
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
        actionQaExamDo: bindActionCreators(qaExamDo, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail));
