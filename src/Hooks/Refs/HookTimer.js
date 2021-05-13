import React, { useEffect, useRef, useState } from 'react';

function HookTimer() 
{
    let interval = useRef();
    const [count, setCount] = useState(0);
    
    const Tick = () => {
        setCount(prevState => prevState + 1);        
    }

    useEffect(()=>{
        interval.current = setInterval(Tick, 1000);
        
        return ()=>{
            clearInterval(interval.current);
        }

    }, [])

    return (
        <div>
            <button onClick={()=>clearInterval(interval.current)}>Clear Counter</button>
            <h3>{count}</h3>        
        </div>
    );
}

export default HookTimer;