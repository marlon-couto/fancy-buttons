import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.handleBtn1 = this.handleBtn1.bind(this);
    this.handleBtn2 = this.handleBtn2.bind(this);
    this.handleBtn3 = this.handleBtn3.bind(this);

    this.state = {
      clickCount1: 0,
      clickCount2: 0,
      clickCount3: 0,
    };
  }

  handleBtn1() {
    this.setState(({ clickCount1 }) => ({
      clickCount1: clickCount1 + 1,
    }));
  }

  handleBtn2() {
    this.setState(({ clickCount2 }) => ({
      clickCount2: clickCount2 + 1,
    }));
  }

  handleBtn3() {
    this.setState(({ clickCount3 }) => ({
      clickCount3: clickCount3 + 1,
    }));
  }

  render() {
    const { clickCount1, clickCount2, clickCount3 } = this.state;
    return (
      <div>
        <button onClick={this.handleBtn1}>Cliques: {clickCount1}</button>
        <button onClick={this.handleBtn2}>Cliques: {clickCount2}</button>
        <button onClick={this.handleBtn3}>Cliques: {clickCount3}</button>
      </div>
    );
  }
}
