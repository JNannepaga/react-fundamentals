import React from 'react';
import {AdminConsumer, UserConsumer} from './multiContext';

function MultiNonScopedContextChild() {
    return (
        <div>
        <AdminConsumer>
            {
                (admin)=>{
                   return (
                   <UserConsumer>
                       {
                           user => 
                           {
                            return <div>Im out of user context with values {admin} and user = {user}</div>
                           }
                       }
                        
                    </UserConsumer>)
                }
            }
        </AdminConsumer>            
        </div>
    );
}

export default MultiNonScopedContextChild;