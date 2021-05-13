import React, { Component } from 'react';
import C2pChild from './c2PChild';

class C2pParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Manager: ''
        }
    }
    
    
    parentCallback =(data)=>{
        console.log(data);
        this.setState({
            Manager: data
        });
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <C2pChild parentCallback = {(data)=>parentCallback.bind.this(data)}/>
                <h3>{this.state.Manager}</h3>
            </div>
        );
    }
}

export default C2pParent;