import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type='button' onClick={this.props.counterHandler} value='Click Me'/>
                <h3>{this.props.count}</h3>    
            </div>
        );
    }
}

export default ClickCounter;