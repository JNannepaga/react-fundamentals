import React, {useReducer} from 'react';
import {ReducerProvider, INCREMENT, DECREMENT, RESET} from './counterContext';
import Counter1 from './counter1';
import Counter2 from './counter2';

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

function BaseCounter(props) {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>{count}</h3>
            <ReducerProvider value={dispatch}>
                <Counter1/>
                <Counter2/>
            </ReducerProvider>
        </div>
    );
}

export default BaseCounter;