import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
//import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const isWorking = this.state.working ? "Break" : "Work";
    const rotate = this.state.working ? "rotate" : "";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${rotate}`} alt="logo" />
          <button onClick={this.handleClick}>{isWorking}</button>
        </header>
      </div>
    );
  }
}

export default App;

