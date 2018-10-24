import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }

    render(){
        if (this.state.hasError === true){
            return <h1>Oopps, that is not good for the user </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;