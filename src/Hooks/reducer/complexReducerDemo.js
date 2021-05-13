import React, {useReducer, useState} from 'react';

function ComplexReducerDemo() {
    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    const RESET = 'RESET';

    const initialState = 0;
    const reducer = (state, action)=>{
        let newState = 0;

        switch (action.type) {
            case INCREMENT:
                newState = state + action.payload;
                break;

            case DECREMENT:
                newState = state - action.payload;
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
    const [payload, setPayload] = useState(0);
    return (
        <div>
            <input type='text' onChange={(event)=>{setPayload(event.target.value)}} value={payload} />
            <input type='button' onClick={()=>{dispatch({type: INCREMENT, payload: Number.parseInt(payload)})}} value='Increment'/>
            <input type='button' onClick={()=>{dispatch({type: RESET, payload: Number.parseInt(payload)})}} value='Reset'/>
            <input type='button' onClick={()=>{dispatch({type: DECREMENT, payload: Number.parseInt(payload)})}} value='Decrement'/>
            <h3>{count}</h3>
        </div>
    );
}

export default ComplexReducerDemo;