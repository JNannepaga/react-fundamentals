import React from 'react';
import Card from './card';

function BindingMechanism(props) {
    const myCard = Card.apply('kee');
    //myCard.name = 'Joe__'
    return (
        <div>
        Rendering...{myCard}            
        </div>
    );
}

export default BindingMechanism;