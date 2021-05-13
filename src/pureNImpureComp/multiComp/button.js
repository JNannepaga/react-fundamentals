import React, { Component } from 'react';

class ButtonComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     if(JSON.stringify(this.props) !== JSON.stringify(nextProps))
    //         return true;
    //     else  return false;    
    // }   


    render() {
        const {text, clickHandler} = this.props;
        console.log(`Button rendered for ${text}`);
        return (
            <div>
                <button onClick={clickHandler}>{text}</button>            
            </div>
        );
    }
}

function ButtonComponent_Ex(props)
{
    const {text, clickHandler} = props;
    console.log(`Button rendered for ${text}`);
    return (
        <div>
            <button onClick={clickHandler}>{text}</button>            
        </div>
    );
}
//export default React.memo(ButtonComponent);
export default ButtonComponent;