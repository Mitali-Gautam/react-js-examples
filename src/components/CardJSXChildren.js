import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <div className='card-content'>
                {props.children}
            </div>
        </div>
    )
}

function CardJSXChildren() {

  return (
    <div>
        
      <Card>
        <h2>Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  )
}

export default CardJSXChildren;