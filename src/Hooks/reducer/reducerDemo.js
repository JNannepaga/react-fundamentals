import React,{useReducer} from 'react';

function ReducerDemo() {
    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const RESET = 'RESET';

    const initialState = 0;
    const reducer = (state, action)=>{
        let newState = 0;

        switch (action) {
            case INCREMENT:
                newState = state + 1;
                break;

            case DECREMENT:
                newState = state - 1;
                break;

            case RESET:
                newState = 0;
                break;

            default:
                newState = state;
                break;
        }

        return newState;
    }

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <input type='button' onClick={()=>{dispatch(INCREMENT)}} value='Increment'/>
            <input type='button' onClick={()=>{dispatch(RESET)}} value='Reset'/>
            <input type='button' onClick={()=>{dispatch(DECREMENT)}} value='Decrement'/>
            <h3>{count}</h3>
        </div>
    );
}

export default ReducerDemo;