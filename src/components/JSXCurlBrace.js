import React from 'react'

export default function JSXCurlBrace() {
    const person = {
        name : 'mitali',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };

  return (
    <div style={person.theme}>
        <h1>{person.name}</h1>
        <img className='avatar' src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"/>
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    </div>
  )
}
