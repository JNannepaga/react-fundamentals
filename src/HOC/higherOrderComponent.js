import React, { Component } from 'react';

const HigherOrderComponent =(WrappedComponent) =>{
    return(
        <div>
            <WrappedComponent />
            <div>
                <input type='button' value='Like'/>
                <input type='button' value='Share'/>
                <input type='button' value='Subscribe'/>
            </div>
        </div>
    )
}

export default HigherOrderComponent;