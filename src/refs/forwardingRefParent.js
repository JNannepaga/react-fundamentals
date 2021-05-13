import React, { Component } from 'react';
import ForwardingRefChild from './forwardingRefChild';

class ForwardingRefParent extends Component {
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
                <ForwardingRefChild ref = {this.focusRef}/>
            </div>
        );
    }
}

export default ForwardingRefParent;