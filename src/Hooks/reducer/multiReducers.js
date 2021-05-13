import React,{useReducer} from 'react';

function MultiReducerDemo() {
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

    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <input type='button' onClick={()=>{dispatch1(INCREMENT)}} value='Increment'/>
                <input type='button' onClick={()=>{dispatch1(RESET)}} value='Reset'/>
                <input type='button' onClick={()=>{dispatch1(DECREMENT)}} value='Decrement'/>
                <h3>{count1}</h3>
            </div>
            <div>
                <input type='button' onClick={()=>{dispatch2(INCREMENT)}} value='Increment'/>
                <input type='button' onClick={()=>{dispatch2(RESET)}} value='Reset'/>
                <input type='button' onClick={()=>{dispatch2(DECREMENT)}} value='Decrement'/>
                <h3>{count2}</h3>
            </div>
        </>
    );
}

export default MultiReducerDemo;