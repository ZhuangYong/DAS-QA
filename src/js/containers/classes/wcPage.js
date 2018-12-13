import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Paper from "material-ui/Paper";
import {Card, CardText, CardTitle} from "material-ui/Card";
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";

import ScrollToTopIcon from "material-ui/svg-icons/editor/vertical-align-top";
import {linkTo, reqHeader} from "../../utils/comUtils";
import {List, Snackbar} from "material-ui";
import {bindActionCreators} from "redux";
import Const from "../../utils/const";
import {qaList} from "../../actions/qa";
import {classPage} from "../../actions/classes";

const style = {
    home: {
        paddingTop: 0,
        position: "absolute",
        height: "100%",
        overflowY: "auto",
        width: "100%",
        backgroundColor: "#f0f0f0"
    },
    topNav: {
        display: "table",
        width: "100%",
        item: {
            display: "table-cell",
            width: "33.33%",
            paddingTop: '.347rem',
            textAlign: "center"
        },
        img: {
            width: "1.5rem"
        },
        label: {
            margin: '.16rem',
            fontSize: ".4rem",
            color: "#ff6832"
        }
    },
    paper: {
        margin: 0,
        minHeight: '5.2rem',
        backgroundColor: "transparent"
    },
    tile: {
        width: "100%",
        overflow: "hidden"
    },
    tileImg: {
        height: '3.067rem',
        width: '4.27rem',
        minWidth: '4.27rem',
        margin: "auto",
        display: "inherit",
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        margin: "0 4px"
    },
    itemTitle: {
        fontSize: '.32rem',
        paddingTop: '.08rem',
        height: '.6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    loadingBar: {
        boxShadow: "none",
        top: "none",
        left: "none",
        transform: "none",
        marginLeft: -50,
    },
    loadingRotate: {
        width: '.42rem',
        height: '.42rem',
        marginRight: '.2rem',
        position: 'relative',
        loadingCircle: {
            stroke: '#FF9800',
            strokeLinecap: 'round',
            transition: 'all 850ms ease-in-out 0ms',
            strokeDasharray: '80, 114',
            strokeDashoffset: '-403.668'
        }
    },
};

class WcPage extends BaseComponent {
    constructor(props) {
        super(props);
        const {catelogId, title} = this.props.match.params;
        super.title(title);
        this.state = {
            catelogId: parseInt(catelogId, 10),
            pageSize: 20,
            pageData: [],
            loading: false,
            currentPage: 0,
            lastPage: false,
            offLineLock: false,
            scrollTop: 0
        };
        this.getRecommendSongsContent = this.getRecommendSongsContent.bind(this);
        this.loadMoreAction = this.loadMoreAction.bind(this);
    }

    componentDidMount() {
        // this.props.actionQaList({}, reqHeader({}));
        super.componentDidMount();
        this.setScrollDom(this.refs.qaList);
        if (this.state.currentPage === 0) this.loadMoreAction();
    }

    componentDidUpdate(preProps) {
        super.componentDidUpdate();
        if (preProps.classes.classPageStamp !== this.props.classes.classPageStamp) {
            const classPage = this.props.classes.classPage || {data: [], lastPage: false};
            const {data, totalPage, currentPage} = classPage;
            this.setState({
                pageData: [...this.state.pageData, ...(data || [])],
                lastPage: totalPage === currentPage,
                loading: false
            });
        }
    }

    render() {
        const {loading, lastPage} = this.state;
        let scrollTopStyle = {};
        if (!this.state.needScrollToTop) {
            scrollTopStyle = {
                opacity: 0
            };
        }
        return (
            <div>
                <div style={style.home}
                     ref="qaList"
                     className="aq-list-page"
                     onScroll={this.onScroll.bind(this)} onTouchEnd={this.onScroll.bind(this)}>

                    <Paper
                        zDepth={0}
                        style={style.paper}
                    >
                        <List className="qa-list">
                            {this.getRecommendSongsContent()}
                        </List>


                        <div className="loading-bottom">
                            <div>
                                <svg className="rotate loading-rotate" viewBox="0 0 40 40" style={{display: loading ? "" : "none"}}>
                                    <circle className="loading-circle" cx="20" cy="20" r="18.25" fill="none" strokeWidth="3.5" strokeMiterlimit="20"/>
                                </svg>
                                <span>
                                    {
                                        loading ? "正在加载" : ""
                                    }
                                    {
                                        lastPage ? "无更多数据" : ""
                                    }
                                </span>
                            </div>
                        </div>
                    </Paper>
                </div>
                {/*置顶操作*/}
                {
                    <div className="scroll-to-top-button" style={scrollTopStyle} onTouchTap={() => {
                        this.scrollTo(0);
                    }}>
                        <ScrollToTopIcon color="white"/>
                    </div>
                }

            </div>
        );
    }

    onScroll(e) {
        if (e.target.classList && e.target.classList.contains("aq-list-page")) {
            this.state.scrollTarget = e.target;
            const betweenBottom = e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight);
            this.state.scrollTop = e.target.scrollTop;
            if (!this.state.offLineLock && !this.state.loading && betweenBottom < 50) {
                this.loadMoreAction();
            }
            if (e.target.scrollTop > Const.NEED_SCROLL_TOP_HEIGHT) {
                this.setState({
                    needScrollToTop: true
                });
            } else {
                this.setState({
                    needScrollToTop: false
                });
            }
        }
    }

    scrollTo(to) {
        const {scrollTarget} = this.state || {scrollTo: f => f};
        scrollTarget.scrollTop = to;
        setTimeout(() => {
            scrollTarget.scrollTop = to;
        }, 100);
    }

    /**
     * 上拉加载更多动作
     * */
    loadMoreAction(resolve, reject) {
        if (this.state.loading || this.state.lastPage) return;
        const currentPage = this.state.currentPage + 1;
        const pageSize = this.state.pageSize;
        const {catelogId} = this.state;

        if (catelogId > 0) {
            let param = {currentPage, pageSize, catelogId};
            //个性化推荐
            this.props.actionClassPage(param, reqHeader(param), resolve, () => {});
            this.setState({
                currentPage: currentPage,
                loading: true
            });
        }
    }

    /**
     * 获取列表内容
     * */
    getRecommendSongsContent() {
        const pageData = this.state.pageData;

        return pageData.map(item => (
            <Card key={item.contentId} className="qa-item" onClick={() => window.location.href = item.link}>
                <CardTitle title={<div className="qa-title">
                    {item.title}
                </div>} subtitle={
                    <div className="sub-title">
                        <div>
                            <img style={{maxWidth: "100%"}} src={(item.thumbUrl.indexOf("http") === 0 ? "" : "http://yqdz.oss-cn-beijing.aliyuncs.com/") + item.thumbUrl}/>
                        </div>
                    </div>
                } />

                <Divider/>
                <CardText className="qa-introduction">
                    {item.description}
                </CardText>
                <CardText className="time-set">
                    <font color="#a9a9a9">发布时间：</font> {item.createTime.substr(0, 19)}
                </CardText>
            </Card>
            )
        );
    }

}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        classes: state.app.classes,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionClassPage: bindActionCreators(classPage, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(WcPage));
