import React, { Component } from "react";
import Quote from "./Quote";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          quote:
            "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
          character: "Homer Simpson",
          image:
            "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        }
      ]
    };
  }

  getNewQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Once the data is collected, we update our state with the new data
        this.setState({
          quotes: data
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getNewQuote()}>Get New Quote</button>
        {this.state.quotes.map(quote => (
          <Quote key={quote.character} {...quote} />
        ))}
      </div>
    );
  }
}

export default Quotes;
