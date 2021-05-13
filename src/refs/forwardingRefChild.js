import React, { Component } from 'react';

const ForwardingRefChildForward = React.forwardRef((props, ref)=>{
    return (
      <div>
            <input type='text' ref={ref}/> 
        </div>
    )
});
export default ForwardingRefChildForward;