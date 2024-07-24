import React,{useReducer} from 'react'

// src/reducer.js
const studentReducer = (state, action) => {
    switch (action.type) {
      case 'AddName':
        return { ...state, name: action.value };
      case 'AddPercentage':
        return { ...state, percentage: action.value };
      default:
        return state;
    }
  };
  
  
function StudentUseReducer() {
    const [state, dispatch] = useReducer(studentReducer, {name: '',percentage: 0,});

    const setName = (name) => {
        dispatch({type : 'AddName', value : name})
    }

    const setPercentage = (percentage) => {
        dispatch({type : 'AddPercentage', value:percentage})
    }

  return (
    <div>
        <h1>Student Information </h1>
        <p>Name : {state.name }</p>
        <p>Percentage : {state.percentage}</p>

        <input type='text' 
            name="name" 
            onChange={(e) => setName(e.target.value)}
           
        />
        <input type='text' name="percentage" onChange={(e) => setPercentage(e.target.value)}/>
    </div>
  )
}

export default StudentUseReducer