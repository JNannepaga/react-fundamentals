import React, { Component } from 'react';
import Welcome from './welcome';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        } 
    }

    incrementCounter =()=>{
        this.setState(prevState=> ({
            count : prevState.count + 1
        })
        );
    }

    decrementCounter =()=>{
        this.setState(prevState=> ({
            count : prevState.count - 1
        })
        );
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <Welcome/><br/>
                <button className='increment' onClick={this.incrementCounter}>Increment</button>
                <h3>counter: {count}</h3>
                <button className='decrement' onClick={this.decrementCounter}>Decrement</button>
            </div>
        );
    }
}

export default Counter;