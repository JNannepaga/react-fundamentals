import React, {useState, useEffect} from 'react';

function TrackPosition(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const trackMouseMovement = (event) => {
        setX(event.clientX);
        setY(event.clientY);
    };

    useEffect(() => {
        console.log('subscibre to events');
        document.addEventListener('mousemove', trackMouseMovement);

        return () => {
            console.log('clean up');
            document.removeEventListener('mousemove', trackMouseMovement);
        }
    },[]);

    return (
        <div>
            x position = {x}          
            y position = {y}
        </div>
    );
}

export default TrackPosition;