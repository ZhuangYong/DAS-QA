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
import {classCatelogList, classPage} from "../../actions/classes";

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

class Home extends BaseComponent {
    constructor(props) {
        super(props);
        super.title("微课堂");
        this.state = {};
        this.getRecommendSongsContent = this.getRecommendSongsContent.bind(this);
    }

    componentDidMount() {
        this.ini();
    }

    render() {
        return (
            <div>
                <div style={style.home}
                     className="aq-list-page">

                    <Paper
                        zDepth={0}
                        style={style.paper}
                    >
                        <List className="qa-list">
                            {this.getRecommendSongsContent()}
                        </List>
                    </Paper>
                </div>
            </div>
        );
    }

    /**
     * 获取列表内容
     * */
    getRecommendSongsContent() {
        const pageData = this.props.classes.classCatelogList || [];

        return pageData.map(item => (
            <Card key={item.catelogId} onClick={() => linkTo(`wc/${item.catelogId}/${item.name}`, false, "")}>
                <CardTitle title={<div style={{fontSize: '.4rem', lineHeight: '.4rem'}}>
                    {item.name}
                </div>}/>
            </Card>
            )
        );
    }

    ini() {
        this.props.actionClassCatelogList({}, reqHeader({}));
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
        actionClassCatelogList: bindActionCreators(classCatelogList, dispatch),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
