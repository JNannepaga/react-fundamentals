import React, { Component } from 'react';

class PureComponentDemo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        console.log('======Pure Component======');
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default PureComponentDemo;