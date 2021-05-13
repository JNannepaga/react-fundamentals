import React, { useState } from 'react';

export function useInputHook(initialValue) {
    const [state, setState] = useState(initialValue);
    
    const Reset = () => {
        setState(initialValue);
    }

    const bind = {
        onChange: (event) => {
            setState(event.target.value)
        },
        
        value: state
    }

    return [bind, Reset]
}