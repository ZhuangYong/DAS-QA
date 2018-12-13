/**
 * Created by walljack@163.com on 2017/7/18.
 */

import {Component} from "react";
import navUtils from "../../utils/navUtils";
import {setCookie} from "../../utils/comUtils";

export default class BaseComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollDom: null,
            scrollTop: 0,
            cacheTop: 0,
            cachePageData: null
        };
        this.bindState.bind(this);
        this.title = this.title.bind(this);
        navUtils.setHistory(this.props.history);

        if (this.props.location.pathname.indexOf("login") < 0) {
            let currentLocation = this.props.location.pathname;
            if (currentLocation.indexOf("/") === 0) {
                currentLocation = currentLocation.substr(1);
            }
            setCookie("lastLocation", currentLocation);
        }
    }

    componentDidMount() {
        const cacheState = window.sessionStorage.getItem("c_" + this.props.match.url);
        if (cacheState) {
            this.state = Object.assign({}, JSON.parse(cacheState));
            window.sessionStorage.removeItem("c_" + this.props.match.path);
            this.setState({
                cacheTop: this.state.scrollTop,
                cachePageData: this.state.pageData
            });
        }
    }
    componentWillUnmount() {
        if (this.state.scrollDom) {
            this.state.scrollDom.removeEventListener('scroll', this.onScrollHandle.bind(this));
            window.sessionStorage.setItem("c_" + this.props.match.path, JSON.stringify({
                scrollTop: this.state.scrollTop,
                pageData: this.state.pageData,
                currentPage: this.state.currentPage,
                lastPage: this.state.lastPage,
            }));
        }
    }

    componentDidUpdate() {
        if (this.state.cachePageData) {
            this.setState({
                pageData: this.state.cachePageData
            });
            this.state.cachePageData = null;
        }
        if (this.state.cacheTop) {
            this.refs.qaList.scrollTop = this.state.cacheTop;
            this.state.cacheTop = 0;
        }
    }
    render() {
        return (
            <div/>
        );
    }

    bindState(stateName) {
        return (value) => {
            let state = {};
            state[stateName] = value;
            this.setState(state);
        };
    }

    title(title) {
        document.title = title;
    }

    setScrollDom(dom) {
        this.state.scrollDom = dom;
        dom.addEventListener('scroll', this.onScrollHandle.bind(this));
    }

    onScrollHandle(event) {
        this.state.scrollTop = event.target.scrollTop;
    }
}
