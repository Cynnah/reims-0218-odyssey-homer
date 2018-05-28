import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
