import React, { Component } from 'react';

function ButtonComponent(props)
{
    const {text, clickHandler} = props;
    console.log(`Button rendered for ${text}`);
    return (
        <div>
            <button onClick={clickHandler}>{text}</button>            
        </div>
    );
}
export default React.memo(ButtonComponent);