import React, {Component} from 'react'
import ErrorMessage from "../error-message";

export default class ErrorCatcher extends Component {

    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage/>
        } else {
            return this.props.children;
        }
    }
}
