import React, {useState} from 'react';
import {useDocHook} from './customDocHook';

function DocTitle1  (props) {
    const [count, setCount] = useState(0);
    useDocHook(count)

    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>click me</button>
            <h3>{count}</h3>
        </div>
    )
}   

export default DocTitle1;