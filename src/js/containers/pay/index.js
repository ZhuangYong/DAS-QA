/**
 * Created by Zed on 2017/8/18.
 */
import React from "react";
import BaseComponent from "../../components/common/BaseComponent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import bindActionCreators from "redux/es/bindActionCreators";
import PropTypes from "prop-types";
import {alipayPay, getPayList, getWXPayParams} from "../../actions/payAction";
import {getEncryptHeader, linkTo, reqHeader} from "../../utils/comUtils";

import RaisedButton from 'material-ui/RaisedButton';
import CheckboxIcon from '../../../img/pay_checkbox.png';
import CheckboxSelectedIcon from '../../../img/pay_checkbox_selected.png';

const styles = {
    submitBtn: {
        display: "block",
        borderRadius: "50px",
        margin: "0 auto",
        width: "240px",
        height: "50px"
    },
    itemBox: {
        width: "100%",
        height: "50px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        borderBottom: "1px solid #b2b2b2"
    },
    itemBoxActive: {
        width: "100%",
        height: "50px",
        backgroundColor: "#e8e2d8",
        boxSizing: "border-box",
        borderBottom: "1px solid #b2b2b2"
    },
    itemLeft: {
        float: "left",
        marginLeft: "20px",
        maxWidth: "70%",
        lineHeight: "50px",
        fontSize: "16px",
        color: "#252525"
    },
    itemRight: {
        float: "right",
        marginRight: "20px",
        maxWidth: "20%",
        lineHeight: "50px",
        fontSize: "16px",
        color: "#c48848"
    }
};

class Pay extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            matchParams: this.props.match.params,
            payListActiveId: null,
            payListActivePrice: null,
            isCheckboxChecked: true,
            payList: []
        };

        this.pay = this.pay.bind(this);
        this.wxPay = this.wxPay.bind(this);
        this.aliPay = this.aliPay.bind(this);
    }

    componentDidUpdate(preProps) {
        if (preProps.result.payListStamp !== this.props.result.payListStamp) {
            const {data} = this.props.result.payListData || {data: []};
            this.setState({
                payListActiveId: data[0].productId,
                payListActivePrice: data[0].price,
                payList: data
            });
        }
    }

    componentDidMount() {
        const getPayListParams = {};
        this.props.getPayListAction(getPayListParams, reqHeader(getPayListParams));
    }

    render() {
        const payList = this.state.payList;
        const payListActiveId = this.state.payListActiveId;
        const payListActivePrice = this.state.payListActivePrice;
        const isCheckboxChecked = this.state.isCheckboxChecked;
        return (
            <div>
                <section>
                    <header style={styles.itemBox}>
                        <div style={styles.itemLeft}>VIP会员套餐</div>
                    </header>

                    <ul style={{
                        padding: 0,
                        margin: 0,
                        listStyle: "none"
                    }}>
                        {payList.map((tile) => (<li
                            key={tile.productId}
                            style={payListActiveId === tile.productId ? styles.itemBoxActive : styles.itemBox}
                            onTouchTap={() => {
                                this.setState({
                                    payListActivePrice: tile.price,
                                    payListActiveId: tile.productId
                                });
                            }}
                        >
                            <div style={styles.itemLeft}>{tile.productName}</div>
                            <div style={styles.itemRight}>{tile.price}</div>
                        </li>))}

                    </ul>

                    <div style={styles.itemLeft}>
                        <input
                            type="checkbox"
                            id="payCheckBox"
                            style={{display: "none"}}
                            checked={isCheckboxChecked}
                            onChange={() => {
                                this.setState({
                                    isCheckboxChecked: !isCheckboxChecked
                                });
                            }}
                        />
                        <label htmlFor="payCheckBox">
                            <img
                                src={isCheckboxChecked ? CheckboxSelectedIcon : CheckboxIcon}
                                alt=""
                                style={{
                                    position: "relative",
                                    top: "2px",
                                    marginRight: "5px",
                                    width: "15px",
                                    height: "15px"
                                }}
                            />
                            同意并阅读
                        </label>
                        <span
                            style={{color: "#2522ff"}}
                            onTouchTap={() => {
                                linkTo(`protocol`, false, null);
                            }}
                        >《金麦客支付协议》</span>
                    </div>
                </section>
                <section
                    style={{padding: "20px 10px", width: "100%", clear: "both"}}
                >
                    <header style={{
                        marginBottom: "20px",
                        textAlign: "center",
                        color: "#252525",
                        fontSize: "14px"
                    }}>支付金额: <span style={{color: "#c48848"}}>{payListActivePrice}元</span></header>
                    <RaisedButton
                        disabled={!isCheckboxChecked && payListActiveId !== null}
                        backgroundColor="#ff8632"
                        disabledBackgroundColor="#ccc"
                        label="确认支付"
                        style={styles.submitBtn}
                        buttonStyle={styles.submitBtn}
                        labelStyle={{lineHeight: "50px", fontSize: "18px", color: "#fff"}}
                        onClick={this.pay}
                    />
                </section>
            </div>
        );
    }

    pay() {
        const {isWeixin} = window.sysInfo;
        if (isWeixin) {
            this.wxPay();
        } else {
            this.aliPay();
        }
    }

    wxPay() {
        const productId = this.state.payListActiveId;
        const matchParams = this.state.matchParams;
        let header = null;
        let params = {
            productId: productId
        };
        if (typeof matchParams.openid !== "undefined") {
            params.uuid = matchParams.pollingId;
            params.openid = matchParams.openid;
            header = reqHeader(params, getEncryptHeader({
                deviceId: matchParams.deviceId
            }));
        } else {
            header = reqHeader(params);
        }
        this.props.getWXPayParamsAction(params, header, (res) => {
            const {data} = res;
            window.wx.chooseWXPay({
                timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: data.paySign, // 支付签名
                success: function (res) {
                    // 支付成功后的回调函数

                },
                cancel: function (res) {

                },
                fail: function (res) {

                }
            });
        });
    }

    aliPay() {
        const productId = this.state.payListActiveId;
        const matchParams = this.state.matchParams;
        const params = {
            uuid: matchParams.pollingId,
            productId: productId
        };
        const header = getEncryptHeader({
            deviceId: matchParams.deviceId
        });
        this.props.alipayAction(params, reqHeader(params, header), (res) => {
            const {data} = res;

            window.location.href = data.payUrl;
        });
    }
}


Pay.defaultProps = {
    result: {}
};

Pay.propTypes = {
    result: PropTypes.object
};

const mapStateToProps = (state, ownPorps) => {
    return {
        result: state.app.pay
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPayListAction: bindActionCreators(getPayList, dispatch),
        getWXPayParamsAction: bindActionCreators(getWXPayParams, dispatch),
        alipayAction: bindActionCreators(alipayPay, dispatch)
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pay));

