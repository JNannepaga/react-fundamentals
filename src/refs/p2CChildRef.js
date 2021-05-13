import React, { Component } from 'react';

class P2CChildRef extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.props.focusRef}/>
            </div>
        );
    }
}

export default P2CChildRef;