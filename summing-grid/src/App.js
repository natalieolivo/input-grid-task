import React, { Component } from "react";
import Grid from "./Grid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid tiles={4} />
      </div>
    );
  }
}

export default App;
