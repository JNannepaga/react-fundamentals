import React from 'react';
import './button.css';

function MyButton(props) {
    const {styling, children} = props;
    return <button style={`button ${styling}`}>{children}</button>;
}

export default MyButton;