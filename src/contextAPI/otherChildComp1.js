import React, { Component } from 'react';
import {UserConsumer} from './userContext';

class OtherChildComp1 extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <h3>welcome {userName}</h3>
                    }
                }
            </UserConsumer>
        );
    }
}

export default OtherChildComp1;