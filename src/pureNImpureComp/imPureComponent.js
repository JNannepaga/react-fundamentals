import React, { Component } from 'react';

class ImPureComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        console.log('======ImPure Component======');
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default ImPureComponent;