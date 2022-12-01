import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    console.log("Clique");
  }

  handleClick2() {
    console.log("Outro clique");
  }

  handleClick3() {
    console.log("Mais um clique");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clique-me</button>
        <button onClick={this.handleClick2}>Clique-me</button>
        <button onClick={this.handleClick3}>Clique-me</button>
      </div>
    );
  }
}
