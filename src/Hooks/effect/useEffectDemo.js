import React,{useState, useEffect} from 'react';

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `cliked ${count} times`;
    })

    return (
        <div>
            <button onClick={()=>{setCount(count + 1)}}>cliked {count} times </button>        
        </div>
    );
}

export default UseEffectDemo;