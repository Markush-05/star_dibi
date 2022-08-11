import React, { Component } from 'react';
import ErrorBoundery from '../error-boundery'

const Row = ({left , right }) => {
    return (
        <div className='row mb2'>
            <div className='col-mb-6'>
            <ErrorBoundery>
               {left}
            </ErrorBoundery>
                
            </div>
            <div className='col-mb-6'>
            <ErrorBoundery>
                {right}
            </ErrorBoundery>
               
            </div>
        </div>
    )
}

export default Row
