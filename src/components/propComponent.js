import React from 'react'

function Card({ children }) {
    return (
        <div className="card">
          {children}
        </div>
      );
}

function propComponent(props) {
    let person = props.person;
    let size = props.size;
  return (
    <div>
        <Card>
            <img className='avatar'
            src = {person.imageId}
            alt = {person.lastName}
            width={size}
            height={size}/>
        </Card>
    </div>
  )
}

export default propComponent;