import React, {useState} from "react";

const StudentList = () =>{
     // Initialize state for the list of countries
    const [students, setStudents] = useState(['Mit']);
     // Initialize state for the input field
    const [newStudent, setNewStudent] = useState({name : ''});

    // Function to add a new student to the list
    const addStudent = ()=> {
          // Use previous state to append the new student
        setStudents(previousStudent => [...previousStudent, newStudent.name])
         // Clear the input field
        setNewStudent('')
    };

    return(
        <div className="App">
           Student Name : <input type="text" name="student" value = {newStudent.name} onChange={e => setNewStudent({name : e.target.value})}/>
           <button onClick={addStudent}>Add Student</button>
           <h2>Student List</h2>

           <ul>
                {students.map((stud,index) => (
                    <li key={index}>{stud}</li>
                ))}
           </ul>
        </div>
    )
}

export default StudentList;
