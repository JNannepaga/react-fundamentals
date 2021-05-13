import React, {useContext} from 'react';
import ReducerContext, {INCREMENT, DECREMENT, RESET} from './counterContext';

function Counter2() {
    const dispatch = useContext(ReducerContext);

    return (
        <div>
            Counter 2
            <input type='button' onClick={()=>{dispatch(INCREMENT)}} value='Increment'/>
            <input type='button' onClick={()=>{dispatch(RESET)}} value='Reset'/>
            <input type='button' onClick={()=>{dispatch(DECREMENT)}} value='Decrement'/>      
        </div>
    );
}

export default Counter2;