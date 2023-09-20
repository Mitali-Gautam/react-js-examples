import React,{useState,useEffect} from 'react'

function HookCounterUseEffect() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Initial text');

    const incrementCount = () =>{
        setCount(count + 1)
    }

    const changeText =() => {
        setText("changed text")
    }

    /*  conditionally run effects */
    useEffect(() => {
        console.log('count')
        document.title = `Clicked ${count} times`;
    },[count])

    useEffect(() => {
        console.log('text')
       
    },[text])

     /* conditionally run effects  */
    return (
        <div>
            <button onClick={incrementCount}>Inccement {count}</button>
            <button onClick={changeText}> Text Change {text} </button>
        </div>
    )
}

export default HookCounterUseEffect