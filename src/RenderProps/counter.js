import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count : 0
        }
    }
    
    counterHandler = () => {
        this.setState(prevState => ({
            count : prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.counterHandler)}
            </div>
        );
    }
}

export default Counter;