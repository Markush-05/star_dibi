import React, { Component } from 'react';

import './error-button.css';


export default class ErrorButton extends Component {

    state = {
        reportError: false
    }
    
  render() {
    
    
    if(this.state.reportError){
        console.log ("render")
        this.foo.bar = 100000000 
    }

    return (
        <button className='btn btn-danger'
             onClick={() => this.setState({ reportError: true })}>
            Throw Error
        </button>
    );
  };
}
