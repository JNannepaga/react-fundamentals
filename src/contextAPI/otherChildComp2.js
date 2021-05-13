import React, { Component } from 'react';
import {UserContext} from './userContext';

class OtherChildComp2 extends Component {
    render() {
        return (
            <h3>welcome {this.context}</h3>
        );
    }
}

OtherChildComp2.contextType = UserContext;

export default OtherChildComp2;