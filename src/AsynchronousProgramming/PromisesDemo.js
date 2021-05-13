const DbData = [
    {accountNum : 4041, password : 'abc123', balance : 3000},
    {accountNum : 4042, password : 'abc123', balance : 250},
    {accountNum : 4043, password : 'abc123', balance : 1000}
];

export const Login=(accountNum, password)=>{
    return new Promise((resolve, reject)=>{
        const user = DbData.find(x=> 
                x.accountNum === accountNum &&
                x.password === password);
        if(user != null){
            resolve(user);
        }
        else{
            reject('Invalid Credentials');
        }
    });
}

export const DebitAmount = (user) =>{
    return new Promise((resolve, reject)=>{
        const minBalance = 1000;

        if(user != null &&  user.balance > minBalance)
        {
            user.withdrawlBalance =  (user.balance - minBalance);
            resolve(user);
        }
            
        else
            reject('Insufficient balance');
    })
    
}

