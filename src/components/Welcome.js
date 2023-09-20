import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} -- {this.props.lastName} -- {this.props.children} </h1>
    }
}

export default Welcome