import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[posts, setPosts] = useState([])
    const [id,setId] = useState({id:1});
    const [idFrombButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id.id}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFrombButtonClick])
  return (
    <div>
        <input type='text' value={id.id} onChange={e=> setId({id : e.target.value})}/>
        <button onClick={handleClick}>click</button>
        <div>{posts.title}</div>
        {/* <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul> */}
    </div>
  )
}

export default DataFetching