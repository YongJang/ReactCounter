import React, { Component } from 'react';
import Counter from './Counter';
import Controlls from './Controlls';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleClickMultiply = this.handleClickMultiply.bind(this);
    this.handleClickDivide = this.handleClickDivide.bind(this);

    this.state = {value: 0};
  }

  handleClickUp() {
    this.setState((preValue) =>{
      value: preValue.value++;
    });
  }

  handleClickDown() {
    this.setState((preValue) =>{
      value: preValue.value--;
    });
  }

  handleClickMultiply() {
    this.setState((preValue) =>{
      value: preValue.value = preValue.value * 2;
    });
  }

  handleClickDivide() {
    this.setState((preValue) =>{
      value: preValue.value = preValue.value / 2;
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>React Counter</h2>
        </div>
        <Counter
          count = {this.state.value}
        />
        <Controlls
          clickUp = {this.handleClickUp}
          clickDown = {this.handleClickDown}
          clickMultiply = {this.handleClickMultiply}
          clickDivide = {this.handleClickDivide}
        />
      </div>
    );
  }
}

export default App;
