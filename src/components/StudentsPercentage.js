import React, {useState} from "react";

function StudentsPercentage() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('')

  return (
    <div>
        <h2>Calculate students perentage</h2>
        <input type="text" name="studen" value={newStudent}/>
    </div>
  )
}

export default StudentsPercentage