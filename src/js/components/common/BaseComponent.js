/**
 * Created by walljack@163.com on 2017/7/18.
 */

import {Component} from "react";
import navUtils from "../../utils/navUtils";

export default class BaseComponent extends Component {

    constructor(props) {
        super(props);
        this.bindState.bind(this);

        navUtils.setHistory(this.props.history);
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
}
