import React, { useState, useEffect } from 'react';
import TrackPosition from './trackPosition';

function DisplayToggler(){

    const [show, setShow] = useState(true);

    return (
        <div>
            <input type='button' onClick={()=>
            {
                setShow(prevState=>!prevState)
            }} value='Toogle'/>

            {show && <TrackPosition />}
        </div>
    );
    
}

export default DisplayToggler;