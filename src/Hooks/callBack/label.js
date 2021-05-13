import React, { Component } from 'react';

function LabelComponent(props){
    const {text} = props;
    console.log(`Label rendered for ${text}`);
    return <label>{text}</label>; 
}
export default React.memo(LabelComponent);