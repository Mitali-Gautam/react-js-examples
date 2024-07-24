import React,{useReducer} from 'react'

const counterReducer  = (state,action) => {
    switch(action.type) {
        case 'Inrement':
            return {count : state.count + 1}
        case 'Decrement':
            return {count : state.count - 1}
        default: 
        return state
    }
};

function UseReducerCounter() {
    const [state,dispatch] = useReducer(counterReducer,{count : 0})

    const increment = () => {
        dispatch({type:'Inrement'})
    }

    const decrement = () => {
        dispatch({type:'Decrement'})
    }

  return (
    <div>
        <h1>Counter: {state.count}</h1>
         <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseReducerCounter