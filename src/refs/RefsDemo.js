import React, { Component, createRef } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.tb_UserNameRef = React.createRef();
    }
    
    onClick =(event)=>{
        this.tb_UserNameRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.tb_UserNameRef}/>        
                <button onClick={this.onClick}>userName</button>
            </div>
        );
        
    }
}

export default RefsDemo;