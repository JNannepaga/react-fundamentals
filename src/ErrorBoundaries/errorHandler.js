import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state={
            isError: false
        }    
    }
    
    componentDidCatch(error)
    {
        console.log(`${new Date().getTime()} :: ${error}`);
    }
    
    static getDerivedStateFromError(error){
        return {isError: true}
    }

    render() {
        if(this.state.isError){
            return <h3>Something went wrong</h3>;
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorHandler;