import React, { Component } from 'react';
import ImmdChildComp from './ImmdChildComp';
import {UserProvider} from './userContext';

class ContextAPIImpl extends Component {
    render() {
        return (
            <div>
                <UserProvider value='joee__'>
                    <ImmdChildComp/>
                </UserProvider>
            </div>
        );
    }
}

export default ContextAPIImpl;