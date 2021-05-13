import React from 'react';

const MyComponent =(props)=>{
    console.log('======Pure Component======');
    return(
    <React.Fragment>
        Hello {props.name}
    </React.Fragment>)
}

export const MemoComponent = React.memo(MyComponent);