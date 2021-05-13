import React from 'react';
import useCounter from './useCounter';

function Counter2() {
    const [count, Increment, Decrement, Reset] = useCounter(10, 10);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Counter2;