import React,{useRef} from 'react';

function FocusInput(props) {
    const inputRef = useRef();

    const onFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type='text' ref={inputRef}/>            
            <input type='button' value='click to Foucs' onClick={onFocus}/>
        </div>
    );
}

export default FocusInput;