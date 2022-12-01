import React, { Component } from "react";

function handleClick() {
  console.log("Clique");
}

export default class App extends Component {
  render() {
    return <button onClick={handleClick}>Clique-me</button>;
  }
}
