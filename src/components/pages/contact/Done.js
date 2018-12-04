import React, { Component } from 'react'


export default class Done extends Component {
  state = {
    toggle: false
  }
  handleToggle(e){
    e.preventDefault()
    
  }
  render() {
    return (
      <div>
        Success
        <button onClick={this.handleToggle.bind(this)}>Show message</button>
      </div>
    )
  }
}
