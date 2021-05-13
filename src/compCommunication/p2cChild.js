import React, { Component } from 'react';

class P2cChild extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default P2cChild;