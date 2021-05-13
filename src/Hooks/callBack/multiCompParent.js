import React, { useState, useCallback } from 'react';
import LabelComponent from './label';
import ButtonComponent from './button';

function MultiCompParent(props){
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(10000);

    const incrementAge = useCallback(()=>{
        setAge(age + 1);
    }, [age]);
    
    const incrementSalary= useCallback(()=>{
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <LabelComponent text = {age}/>
            <ButtonComponent text = {age} clickHandler= {incrementAge} />
            <LabelComponent text = {salary}/>
            <ButtonComponent text = {salary} clickHandler= {incrementSalary} />
        </div>
    );
}

export default MultiCompParent;