import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchData() 
{
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resp => {
            setData(resp.data);
        })
        .catch(ex => console.log(ex));
    },[])
    
    return (
        <div>
            {
                data.map(user => 
                    <div key={user.id}>
                        <h3>{user.id}</h3>
                        <div>{user.title}</div>
                    </div>
                )
            }
        </div>
    );
}

export default FetchData;