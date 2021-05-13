import React from 'react';
import {useInputHook} from './useInputHook';

function UserForm() {
    const [bindfirstName, ResetFirstName] = useInputHook('');
    const [bindLastName, ResetLastName] = useInputHook('');
    return (
        <div>
            <h3>{bindfirstName.value} {bindLastName.value}</h3>
            <input type='text' {...bindfirstName} /><br/>
            <input type='text' {...bindLastName} />
        </div>
    );
}

export default UserForm;