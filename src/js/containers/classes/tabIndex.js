import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {List, Tab, Tabs, ListItem} from "material-ui";
import Divider from 'material-ui/Divider';
import {Card, CardText, CardTitle} from "material-ui/Card";
import Paper from "material-ui/Paper";
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import {linkTo, reqHeader} from "../../utils/comUtils";
import {bindActionCreators} from "redux";
import {classCatelogList, classPage} from "../../actions/classes";
import ScrollToTopIcon from "material-ui/svg-icons/editor/vertical-align-top";
import headTopBg from "../../../img/common/head_top_bg.png";
import Const from "../../utils/const";

const style = {
    tabs: {
        head: {
            display: "flex !important",
            height: '1.2rem',
            backgroundImage: 'url(' + headTopBg + '})'
        },
        tab: {
            label: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: '.4rem',
                img: {
                    marginRight: '.32rem',
                    width: '.587rem'
                }
            }
        }
    },
    dots: {
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        dot: {
            width: 10,
            height: 10,
            border: "1px solid",
            margin: 5,
            borderRadius: 5
        }
    },
    bottomPanel: {
        position: "fixed",
        width: "100%",
        height: '1.6rem',
        bottom: 0,
        boxShadow: "0px -2px 3px 0px rgba(128, 128, 128, 0.48)",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        submitButton: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#999999",
            backgroundColor: "#d7d7d7",
            width: '5.333rem',
            height: '1.067rem',
            fontSize: '.45rem',
            borderRadius: '1.067rem'
        },
        submitButtonOn: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '5.333rem',
            height: '1.067rem',
            fontSize: '.45rem',
            color: "#ffffff",
            borderRadius: '1.067rem'
        }
    }
};

class Home extends BaseComponent {
    constructor(props) {
        super(props);
        super.title("微课堂");
        this.state = {
            pageSize: 20,
            pageData: [],
            loading: false,
            currentPage: 0,
            lastPage: false,
            offLineLock: false,
            scrollTop: 0
        };
        this.getRecommendSongsContent = this.getRecommendSongsContent.bind(this);
    }

    componentDidMount() {
        this.ini();
        // this.props.actionQaList({}, reqHeader({}));
        super.componentDidMount();
        // this.setScrollDom(this.refs.qaList);
        // if (this.state.currentPage === 0) this.loadMoreAction();
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
        const pageData = this.props.classes.classCatelogList || [];
        let scrollTopStyle = {};
        if (!this.state.needScrollToTop) {
            scrollTopStyle = {
                opacity: 0
            };
        }
        return (
            <div>
                <Tabs
                    value={this.state.tabIndex}
                    inkBarStyle={{background: '#73d3fc', height: '.14rem', marginTop: '-.14rem'}}
                    tabItemContainerStyle={style.tabs.head}
                    contentContainerStyle={{
                        width: '100%',
                        overflow: "auto",
                        zIndex: -1
                    }}>
                    {
                        pageData.map(item => (
                            <Tab
                                value={pageData.indexOf(item)}
                                key={item.catelogId}
                                className={this.state.tabIndex === pageData.indexOf(item) ? "main-background-color" : ""}
                                buttonStyle={{flexDirection: "row", height: '1.2rem'}}
                                onActive={() => {
                                    this.handelChangeTab(pageData.indexOf(item));
                                }}
                                label={
                                    <div style={{
                                        ...style.tabs.tab.label,
                                        color: this.state.tabIndex === pageData.indexOf(item) ? "#73d3fc" : "white"
                                    }}>
                                        {item.name}
                                    </div>
                                }>
                                <div>
                                    <div style={style.home}
                                         ref="qaList"
                                         className="aq-list-page"
                                         onScroll={this.onScroll.bind(this)} onTouchEnd={this.onScroll.bind(this)}>
                                        {
                                            this.getTabContent()
                                        }
                                        {/*置顶操作*/}
                                        {
                                            <div className="scroll-to-top-button" style={scrollTopStyle} onTouchTap={() => {
                                                this.scrollTo(0);
                                            }}>
                                                <ScrollToTopIcon color="white"/>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </Tab>
                            )
                        )
                    }
                </Tabs>
            </div>
        );
    }


    getTabContent() {
        const {loading, lastPage} = this.state;
        return <Paper
                zDepth={0}
                style={style.paper}>
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
            </Paper>;
    }

    ini() {
        this.props.actionClassCatelogList({}, reqHeader({}), res => {
            if (res && this.state.currentPage === 0) {
                this.state.catelogId = (res || [])[0].catelogId;
                this.loadMoreAction();
            }
        });
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
            this.props.actionClassPage(param, reqHeader(param), resolve);
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
                <ListItem
                    key={item.contentId}
                    style={{borderBottom: '1px solid #dedede', fontSize: '.4rem'}}
                    onClick={() => window.location.href = item.link}
                    primaryText={<font style={{paddingLeft: 16}}>{item.title}</font>}
                    secondaryText={<CardText className="time-set">
                        <font color="#a9a9a9">{item.createTime.substr(0, 10)}</font>
                        <font color="#a9a9a9" style={{marginLeft: '.4rem'}}>{item.userName}</font>
                    </CardText>}
                    leftAvatar={<div style={{height: "58px", width: "58px", overflow: 'hidden', border: '1px solid #f6f6f6', borderRadius: 4}}>
                        <img style={{height: "100%"}} src={(item.thumbUrl.indexOf("http") === 0 ? "" : "http://yqdz.oss-cn-beijing.aliyuncs.com/") + item.thumbUrl}/>
                    </div>}
                />
            )
        );
    }

    handelChangeTab(index) {
        if (this.state.tabIndex !== index) {
            this.state.lastPage = false;
            this.state.currentPage = 0;
            this.state.pageData = [];
            this.setState({
                tabIndex: index
            });
            this.state.catelogId = (this.props.classes.classCatelogList || [])[index].catelogId;
            this.loadMoreAction();
        }

    }
}

// 映射state到props
const mapStateToProps = (state, ownProps) => {
    return {
        classes: state.app.classes,
        common: state.app.common,
    };
};
// 映射dispatch到props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionClassPage: bindActionCreators(classPage, dispatch),
        actionClassCatelogList: bindActionCreators(classCatelogList, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
