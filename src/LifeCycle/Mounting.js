//Constructor()
//GetDerivedStateFromProps(nextProps, prevState)
//Render()
//ComponentDidMount()

import React, { Component } from 'react';

class Mounting extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            name: props.name
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(`Get Derived State From Props is triggered with
        Props as ${JSON.stringify(nextProps)}
        State as ${JSON.stringify(prevState)}`);
        if(nextProps.name !== prevState.name){
            console.log('props got updated');
            return {
                name: nextProps.name
            }
        }
        return null;
    }

    increment=(event)=>{
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement=(event)=>{
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {

        return (
            <div>
                <h3>hello {this.props.name} {this.state.count}</h3>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }

    componentDidMount(){
        console.log('All async operations here...!');
    }
}

export default Mounting;