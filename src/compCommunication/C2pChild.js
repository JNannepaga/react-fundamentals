import React, { Component } from 'react';

class C2pChild extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: ''
        }
    }

    onChange =(event)=>{
        this.setState({
            name: event.target.value
        });
    }
    
    render() {
        return (
            <div>
                {this.props.parentCallback('babai')}
                <h1>Child</h1>
                <input type='text' onChange={this.onChange} />
            </div>
        );
    }
}

export default C2pChild;