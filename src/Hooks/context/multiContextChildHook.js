import React, {useContext} from 'react';
import {AdminContext, UserContext} from './multiContext';

function MultiContextChildHook() {

    const admin = useContext(AdminContext);
    const user = useContext(UserContext);

        return <div>Im out of user context with values {admin} and user = {user}</div>
    
}

export default MultiContextChildHook;