import React, { Component } from 'react';
import ErrorMessage from '../errore-indicator'

export default class ErrorBoundery extends Component{
    state= {
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })

    }

    render() {

        if (this.state.hasError){
            return <ErrorMessage/>
        }

        return this.props.children;
        
    }

}