import React, { Component } from 'react';
import OtherChildComp1 from './otherChildComp1';
import OtherChildComp2 from './otherChildComp2';

class ImmdChildComp extends Component {
    render() {
        return (
            <div>
                <h1>I'm immediate Component of Parent</h1>
                <OtherChildComp1/>
                <OtherChildComp2/>
            </div>
        );
    }
}

export default ImmdChildComp;