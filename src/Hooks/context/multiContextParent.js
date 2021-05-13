import React from 'react';
import {AdminProvider, UserProvider} from './multiContext';
import MultiContextChild from './multiContextChild';
import MultiContextChildHook from './multiContextChildHook';
import MultiNonScopedContextChild from './multiNonScopedContextChild';

function MultiContextParent(props) {
    return (
        <div>
            <AdminProvider value={'admin@gmail.com'}>
                <MultiNonScopedContextChild/>
                <UserProvider value={'user@gmail.com'}>
                    <MultiContextChild/>
                    <MultiContextChildHook/>
                </UserProvider>
            </AdminProvider>
        </div>
    );
}

export default MultiContextParent;