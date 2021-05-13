import Mounting from './Mounting';
import React, { Component } from 'react';
import Updating from './Updating';

class LyfeCycleImplmnt extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'keli'
        }
    }

    onNameChange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.onNameChange} value={this.state.name}/>
                {/* <Mounting name={this.state.name}/> */}
                <Updating/>
            </div>
        );
    }
}

export default LyfeCycleImplmnt;