import React, { Component } from 'react';

class RenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
               <h3>{this.props.render(true)}</h3>
            </div>
        );
    }
}

export default RenderProps;