import React, { Component } from 'react';

class HoverCounter extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <input type='button' onMouseOver={this.props.counterHandler} value='Click Me'/>
                <h3>{this.props.count}</h3>    
            </div>
        );
    }
}

export default HoverCounter;