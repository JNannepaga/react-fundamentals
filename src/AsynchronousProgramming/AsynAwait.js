import axios from 'axios';
import {Login, DebitAmount} from './PromisesDemo';

export async function AnalyseCustomerAccounts() 
{
    try{
        const user = await Login(4041, 'abc123');
        const message = await DebitAmount(user);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${1}`);
        console.log(response.data);
        console.log(`Welcome to MALIPS bank.co \n ${JSON.stringify(message)}`);
    }
    catch(ex){
        console.log(`Welcome to MALIPS bank.co \n ${ex}`);
    }
}
