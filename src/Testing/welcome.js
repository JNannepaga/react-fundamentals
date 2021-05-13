import React, { Component } from 'react';
import {loadUsers} from './api';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: null,
            error: false,
            errMsg: ''
        }
    }
    
    componentDidMount(){
        this.setState({
            isLoading: true
        });
        this.setUsers();
    }
    
    setUsers= async ()=>{
        try{
            const user = await loadUsers();
            this.setState({
                isLoading: false,
                user: user,
                error: false,
                errMsg: ''
            });
        }
        catch(error)
        {
            this.setState({
                isLoading: false,
                user: null,
                error: true,
                errMsg: error
            });
        }
    }
        
    render() {
        const {isLoading, user, error, errMsg} = this.state;
        return (
            <React.Fragment>
                <h2 className='helloWorld'>Welcome to Malips World</h2>
                {
                    isLoading ? <h3 className='loader'>Loading...</h3> :
                    user != null ? <h2 className='userCard'>Welcome {user.title}</h2> :
                    error ? <h3 className='error'>{errMsg}</h3> : <h4 className='error'>No Data Found</h4>
                }
            </React.Fragment>
        )
    }
}

export default Welcome;