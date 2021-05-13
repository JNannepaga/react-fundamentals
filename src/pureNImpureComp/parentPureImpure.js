import React, { Component } from 'react';
import PureComponent from './pureComponent';
import ImpureComponent from './imPureComponent';
import {MemoComponent} from './memoComponent';

class ParentPureImpure extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Bickey'
            })
        }, 1000);
    }
    
    render() {
        return (
            <div>
                {/* <PureComponent name={this.state.name} /> */}
                <MemoComponent />
                <ImpureComponent name={this.state.name} />
            </div>
        );
    }
}

export default ParentPureImpure;