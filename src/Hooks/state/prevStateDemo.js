import React, {useState} from 'react';

function PrevStateDemo() 
{
    const state = useState(0);
    const count = state[0];
    const setState = state[1];

    return(
    <div>
        <input type='button' onClick = {()=>setState((prevCount)=>prevCount+1)} value='Increment'/>
        <input type='button' onClick = {()=>setState((prevCount)=>prevCount-1)} value='Decrement'/>
        <input type='button' onClick = {()=>setState(0)} value='Reset'/>
        <h3>{count}</h3>        
    </div>)
}

export default PrevStateDemo;