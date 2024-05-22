import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevprops,prevState){
        if(prevprops.number !== this.props.number){
            console.log('class:componentDidUpdate');
        }
    }
  render() {
    return (
      <div>
        <h4>list</h4>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
