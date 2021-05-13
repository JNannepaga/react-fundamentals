import React, { Component } from 'react';
import P2CChildRef from './p2CChildRef';

class P2CParentRef extends Component {
    constructor(props) {
        super(props);
        this.focusRef = React.createRef();
    }

    selectMe=()=>{
        this.focusRef.current.focus();
    }

    render() {
        return (
            <div>
                <button onClick={this.selectMe}>Select</button>
                <P2CChildRef focusRef = {this.focusRef}/>
            </div>
        );
    }
}

export default P2CParentRef;