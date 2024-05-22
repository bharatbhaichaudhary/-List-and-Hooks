import React, { Component } from 'react'
import Counter from './Counter';
import Counter_1 from './Counter_1';

export default class List extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log('claas :componentDidMount');
    }

    componentWillUnmount(){
        console.log('calss: componentWillUnmount');
    }
    inc() {
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div>
        <Counter number={this.state.count}/>
        <Counter_1 number={this.state.count}/>
        <button onClick={()=> this.inc()}>+</button>
      </div>
    )
  }
}
