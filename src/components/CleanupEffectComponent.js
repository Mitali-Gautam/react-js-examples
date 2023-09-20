import React, {useState, useEffect} from 'react'

function CleanupEffectComponent() {
    const [count,setCount] = useState(0)

    const incrementCount = () =>{
        setCount(count + 1)
    }

    useEffect(() => {
        // This effect runs after every render, including the initial render
        console.log('Effect ran');
    
        // Cleanup function
        return () => {
          // This code will run when the component unmounts or when `count` changes
          console.log('Cleanup function ran');
        };
      }, [count]); // Dependency array with `count`

  return (
    <div>
        <button onClick={incrementCount}>Count {count}</button>
    </div>
  )
}

export default CleanupEffectComponent
