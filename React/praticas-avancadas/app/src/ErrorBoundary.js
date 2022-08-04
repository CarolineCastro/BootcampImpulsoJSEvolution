import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h1>ErrorPage</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;