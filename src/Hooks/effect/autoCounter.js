import React, {useState, useEffect} from 'react';

function AutoCounter(props) {
    const [count, setCount] = useState(0);
    const tick= () => {
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        console.log(`event subscriptions ${count}`);
        const timeInterval = setInterval(tick, 1000);

        return ()=>{
            console.log('cleanup');
            clearInterval(timeInterval);
        }
    },[]);

    return (
        <div>
         <h3>Timer : {count}sec</h3>        
        </div>
    );
}

export default AutoCounter;