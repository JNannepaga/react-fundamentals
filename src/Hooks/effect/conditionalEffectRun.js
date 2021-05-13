import React,{useState, useEffect} from 'react';

function ConditionalEffectRun(props) {
    const [name, setName] =  useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('being effected');
        document.title = `clicked ${count} times`;
    },[count])

    return (
        <div>
          <input type='text' onChange={event=>setName(event.target.value)} value={name}/>
          <input type='button' onClick={()=>{setCount(count+1)}} value={count +"Clicked"}/>  
        </div>
    );
}

export default ConditionalEffectRun;