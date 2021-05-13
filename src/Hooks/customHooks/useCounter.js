import {useState} from 'react';

function useCounter(initialState = 0, value = 1) 
{
    const [count, setCount] = useState(initialState);

    const Increment =()=>{
        setCount(count + value);
    }

    const Decrement =()=>{
        setCount(count - value);
    }

    const Reset =()=>{
        setCount(initialState);
    }

    return [count, Increment, Decrement, Reset];
}

export default useCounter;