// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button onClick={() => alert('Button clicked')} className={light}>
          {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;
