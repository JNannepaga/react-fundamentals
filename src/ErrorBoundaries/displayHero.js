import React from 'react';

function DisplayHero(props) {
    if(props.name === 'joker')
        throw "Invalid Hero";

    return (
        <div>
            Hello {props.name}    
        </div>
    );
}

export default DisplayHero;