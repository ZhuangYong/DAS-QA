import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Paper from "material-ui/Paper";
import {List, ListItem} from "material-ui";
import SvgIcon from 'material-ui/SvgIcon';
import BaseComponent from "../../components/common/BaseComponent";
import "../../../sass/common/Scroller.scss";
import {linkTo, reqHeader} from "../../utils/comUtils";
import {bindActionCreators} from "redux";
import {classCatelogList} from "../../actions/classes";

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
        const RightIcon = (props) => (<SvgIcon
            style={props.style}>
            <path d="M13.729,11.236L1.722,0.294c-0.394-0.392-1.033-0.392-1.427,0c-0.394,0.392-0.394,1.028,0,1.42l11.283,10.283L0.296,22.28c-0.394,0.392-0.394,1.028,0,1.42c0.394,0.392,1.033,0.392,1.427,0l12.007-10.942c0.21-0.209,0.3-0.486,0.286-0.76C14.029,11.723,13.939,11.446,13.729,11.236z"/>
        </SvgIcon>);
        return pageData.map(item => (
            <ListItem
                key={item.catelogId}
                style={{borderBottom: '1px solid #dedede', fontSize: '.4rem'}}
                onClick={() => linkTo(`wc/${item.catelogId}/${encodeURI(encodeURI(item.name))}/`, false, "")}
                primaryText={item.name}
                rightToggle={<RightIcon style={{width: '.4rem'}}/>}
                />
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
