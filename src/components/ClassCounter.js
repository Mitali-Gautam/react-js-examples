import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    incrementcounter(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <button onClick={ () => this.incrementcounter()}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter