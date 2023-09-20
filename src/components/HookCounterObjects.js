import React, {useState} from 'react'

function HookCounterObjects() {
  const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <form>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
        <h2>Yout First Name is : {name.firstName}</h2>
        <h2>Yout Last Name is : {name.lastName}</h2>
    </form>
  )
}

export default HookCounterObjects