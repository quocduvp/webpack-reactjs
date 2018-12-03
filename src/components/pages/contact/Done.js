import React, { Component } from 'react'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

export default class Done extends Component {
  state = {
    toggle: false
  }
  handleToggle(e){
    e.preventDefault()
    Alert.error('Test message 3');
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
