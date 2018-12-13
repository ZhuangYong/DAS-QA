import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import {RaisedButton, TextField} from "material-ui";
import {Card, CardActions} from 'material-ui/Card';
import "../../../sass/login.scss";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import IconUser from "../../../img/login/icon_head@login.png";
import IconNumber from "../../../img/login/icon_eno@login.png";
import IconPhone from "../../../img/login/icon_phone@login.png";
import AvatarDefault from "../../../img/common/default-avatar.png";
import {login, wxInfo} from "../../actions/userActions";
import {getCookie, getEncryptHeader, getQueryString, linkTo, reqHeader} from "../../utils/comUtils";

class SignIn extends BaseComponent {
    constructor(props) {
        super(props);
        super.title("登录");
        this.state = {
            name: "",
            employeeNo: "",
            phone: "",
            wxInfo: "",
            showMsg: false,
            loading: false,
        };
        this.showMsg = this.showMsg.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.getWxInfo = this.getWxInfo.bind(this);
    }

    componentDidMount() {
        this.getWxInfo();
    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <Card className="login-head">
                        <p style={{color: 'white', textAlign: 'center', margin: 0, paddingTop: '.4rem', fontSize: '.4rem'}}>登录</p>
                        <CardActions className="avatar">
                            <img src={this.state.wxInfo.headImgUrl || this.state.wxInfo.thumbUrl || AvatarDefault}/>
                        </CardActions>
                    </Card>

                    <Card className="form-container">
                        <div className="login-form">
                            <div className="input name">
                                <img src={IconUser}/>
                                <TextField
                                    hintText="姓名"
                                    value={this.state.name}
                                    onChange={(t, v) => this.setState({name: v.substr(0, 20)})}
                                    underlineShow={false}
                                />
                                {
                                    this.state.name ? <CancelIcon color="gray" onClick={() => this.setState({name: ""})}/> : ""
                                }
                            </div>
                            <div className="input name">
                                <img src={IconNumber}/>
                                <TextField
                                    hintText="工号"
                                    value={this.state.employeeNo}
                                    onChange={(t, v) => this.setState({employeeNo: v.substr(0, 11)})}
                                    underlineShow={false}
                                />
                                {
                                    this.state.employeeNo ? <CancelIcon color="gray" onClick={() => this.setState({employeeNo: ""})}/> : ""
                                }
                            </div>
                            <div className="input name">
                                <img src={IconPhone}/>
                                <TextField
                                    hintText="联系电话"
                                    value={this.state.phone}
                                    onChange={(t, v) => this.setState({phone: v.substr(0, 13)})}
                                    underlineShow={false}
                                />
                                {
                                    this.state.phone ? <CancelIcon color="gray" onClick={() => this.setState({phone: ""})}/> : ""
                                }
                            </div>
                            <RaisedButton disabled={!this.state.name || !this.state.employeeNo || !this.state.phone || this.state.loading} fullWidth={true} label={
                                this.state.loading ? this.getLoading() : "员工登录"
                            } onClick={this.doLogin} labelColor="#ffffff" backgroundColor="#007aff" style={{marginTop: '.6rem'}}/>
                        </div>
                    </Card>
                </div>
            </div>
        );
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

    doLogin() {
        this.setState({loading: true});
        const {name, employeeNo, phone} = this.state;
        const params = {
            name: name,
            employeeNo: employeeNo,
            phone: phone,
            wak: getQueryString("wak", this.props.location) || ""
        };
        this.props.actionLogin(params, reqHeader({}, getEncryptHeader(params)), res => {
            window.sessionStorage.setItem("token", res.token);
            linkTo(getCookie("lastLocation") || "qa", false, null);
            this.setState({loading: false});
        }, err => this.setState({loading: false}));
    }

    getWxInfo() {
        const params = {
            wak: getQueryString("wak", this.props.location) || "",
        };
        this.props.actionWxInfo(params, reqHeader({}, getEncryptHeader(params)), res => {
            this.setState({wxInfo: res});
        });
    }
}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        // userWxInfo: state.app.user.userWxInfo,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionLogin: bindActionCreators(login, dispatch),
        actionWxInfo: bindActionCreators(wxInfo, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn));
