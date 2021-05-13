import React, {useState} from 'react';

function UseStateDemo() {
    const state = useState(0);
    const count = state[0];
    const setCount = state[1];

    return (
        <div>
            <input type='button' onClick={()=>{setCount(count+1)}} value= 'Click Me' />
            <h3>{count}</h3>         
        </div>
    );
}

export default UseStateDemo;