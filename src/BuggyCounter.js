import React, { Component } from "react";

class BuggyCounter extends Component {
  state = {
    counter: 0
  };

  handleCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };
  render() {
    if (this.state.counter > 5) {
      // Simulate an error
      throw new Error("Opss!");
    }
    return <button onClick={this.handleCounter}>{this.state.counter}</button>;
  }
}

export default BuggyCounter;
