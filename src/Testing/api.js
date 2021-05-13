import axios from 'axios';

export async function loadUsers()
{  
   return await malipsApi.get(process.env.URL_GET_USERS)
    .then(resp =>{
        const data = resp.data;
        return data;
    }).catch(err=>{
        const errorMessage = err.message;
        throw errorMessage;
    });
}


const malipsApi = {
    get: URL => {
        return axios({
            method: 'GET',
            url: URL
        });
    }
}