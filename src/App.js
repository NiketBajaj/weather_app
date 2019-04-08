import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div className="bodySection">
        <Home />
      </div>
    );
  }
}

export default App;

async function syncData(str) {
  let data = await doDataCall(str);
  console.log(data);
}

function doDataCall(str) {
  return str + " World";
}

syncData("Hello");
