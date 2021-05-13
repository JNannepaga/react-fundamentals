import React, {useState} from 'react';

function UseStateObjectDemo(props) {
    const state = useState({firstName:'', lastName: ''});
    const name = state[0];
    const setName = state[1];

    return (
        <div>
            <label>FirstName</label>
            <input type='text' 
            onChange={event=> setName({...name, firstName: event.target.value})} />
            
            <label>LastName</label>
            <input type='text' 
            onChange={event=> setName({...name, lastName: event.target.value})} />
            <h3>{name.firstName} {name.lastName}</h3>
        </div>
    );
}


export default UseStateObjectDemo;