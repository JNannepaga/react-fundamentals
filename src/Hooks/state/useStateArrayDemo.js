import React, {useState} from 'react';

function UseStateArrayDemo(){
    const initialState = [
        {
            firstName: 'Subha',
            lastName: 'Pranks'
        },
        {
            firstName: 'Joe',
            lastName: 'Sam'
        }
    ]

    const [students, AddStudent] = useState(initialState);
    const [student, CreateStudent] = useState({
        firstName: '',
        lastName: ''
    });

    return(
        <div>
            <label>FirstName</label>
            <input type='text' onChange={event=>CreateStudent({...student, firstName: event.target.value})} />
            
            <label>LastName</label>
            <input type='text' onChange={event=>CreateStudent({...student, lastName: event.target.value})} />
            <h3>{student.firstName} {student.lastName}</h3>
            <input type='button' value='Create Student' onClick={()=>{AddStudent([...students, student])}}/>
        
            {
                students.map((stu,index) => {
                    return(<div key={index}>welcome {stu.firstName} {stu.lastName} </div>);
                })
            }
        </div>
    )
}

export default UseStateArrayDemo;