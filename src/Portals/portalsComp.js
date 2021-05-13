import React from 'react';
import ReactDOM from 'react-dom';


function PortalsComp(props)
{
    return ReactDOM.createPortal(    
    <div>
        <h1>Hello portal</h1> 
     </div>, document.getElementById('root-portal'))
};

export default PortalsComp;