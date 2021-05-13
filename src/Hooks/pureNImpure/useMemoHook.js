import React, { useState, useMemo } from 'react';

function UseMemoHook(props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    
    const doSomething = useMemo(() => {
        let n = 2000000000;
        while(n > 0) {
            n = n-1;
        }
        return count1%2 === 0 ;
    }, [count1])

    return (
        <div>
            <button onClick={()=>{setCount1(count1 + 1)}}>{count1}</button>
            <span>{doSomething ? 'Even' : 'Odd'}</span>
            <button onClick={()=>{setCount2(count2 + 1)}}>{count2}</button>
        </div>
    );
    
}

export default UseMemoHook;