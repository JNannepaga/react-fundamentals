import React, { Component } from 'react';
import DisplayHero from './displayHero';
import ErrorHandler from  './errorHandler';

class ErrorBoundaryImpl extends Component {
    render() {
        return (
            <div>
                <ErrorHandler>
                    <DisplayHero name='Batman'/>
                </ErrorHandler>
                <ErrorHandler>
                    <DisplayHero name='SuperMan'/>
                </ErrorHandler>
                <ErrorHandler>
                    <DisplayHero name='joker'/>
                </ErrorHandler>
            </div>
        );
    }
}

export default ErrorBoundaryImpl;