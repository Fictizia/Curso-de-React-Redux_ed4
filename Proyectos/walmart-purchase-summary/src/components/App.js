import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="wm-app">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
