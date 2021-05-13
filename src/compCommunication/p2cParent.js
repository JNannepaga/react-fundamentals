import React, { Component } from 'react';
import P2cChild from './p2cChild';

class P2cParent extends Component {
    constructor(props){
        super(props);
        this.state = {
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
                <input type='text' onChange={this.onChange}/>
                <P2cChild name={this.state.name}/>
            </div>
        );
    }
}

export default P2cParent;