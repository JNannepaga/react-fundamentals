import React, { Component } from 'react';
import LabelComponent from './label';
import ButtonComponent from './button';

class MultiCompParent extends Component {
    constructor(props) {
        super(props);
        this.state={
            age: 20,
            salary: 10000
        }
    }
    
    incrementAge=(event)=>{
        this.setState({
            age: 25
        });
    }
    
    incrementSalary=(event)=>{
        this.setState({
            salary : 20000
        });
    }

    render() {
        const {age, salary} = this.state;
        return (
            <div>
                <LabelComponent text = {age}/>
                <ButtonComponent text = {age} clickHandler= {this.incrementAge} />
                <LabelComponent text = {salary}/>
                <ButtonComponent text = {salary} clickHandler= {this.incrementSalary} />
            </div>
        );
    }
}

function MultiCompParent_Ex(props){
    const age = 20;
    const salary = 1000;
    const incrementAge=(event)=>{
        this.setState(prevState =>({
            age: prevState.age + 1
        }));
    }
    
    const incrementSalary=(event)=>{
        this.setState(prevState =>({
            salary : prevState.salary + 1000
        }));
    }

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