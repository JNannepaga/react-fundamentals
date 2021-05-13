import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';

const SUCCESS = 'Success';
const FAILED = 'Failed';

const initialState = {
    data: null,
    error: false,
    errorMsg: null
}

const Reducer = (state, action) => {
    switch(action.type)
    {
        case SUCCESS :
            return {...state, data: action.payload, error: false, errorMsg: null};
        
        case FAILED:
            return {...state, error: true, errorMsg: action.payload}
    }
}

function FetchAPIReducer(props) {
    const [state, dispacth] = useReducer(Reducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resp => {
            setLoading(false);
            dispacth({type: SUCCESS, payload: resp.data})
        })
        .catch(ex =>{
            setLoading(false);
            dispacth({type: FAILED, payload: ex.message})
        });
    },[])

    return (
        <div>
            {loading ?  <h3>Loading...</h3> :state.data != null && !(loading && state.error) &&
             state.error ?  <h3>{state.errorMsg}</h3> :  
             state.data == null ? <h3>No Data Present</h3> :
             state.data.map(user => 
                    <div key={user.id}>
                        <h4>{user.id}</h4>
                        <div>{user.title}</div>
                    </div>
                )
            }
        </div>
    );
}

export default FetchAPIReducer;