import React, { Component } from 'react';

class LabelComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     if(JSON.stringify(this.props) !== JSON.stringify(nextProps))
    //         return true;
    //     else  return false;    
    // }   

    render() {
        const {text} = this.props;
        console.log(`Label rendered for ${text}`);
        return <label>{text}</label>; 
    }
}

function LabelComponent_Ex(props){
    const {text} = props;
    console.log(`Label rendered for ${text}`);
    return <label>{text}</label>; 
}
export default LabelComponent;
//export default React.memo(LabelComponent);