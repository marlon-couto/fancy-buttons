import React, { Component } from "react";

function handleClick() {
  console.log("Clique");
}

function handleClick2() {
  console.log("Outro clique");
}

function handleClick3() {
  console.log("Mais um clique");
}

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Clique-me</button>
        <button onClick={handleClick2}>Clique-me</button>
        <button onClick={handleClick3}>Clique-me</button>
      </div>
    );
  }
}
