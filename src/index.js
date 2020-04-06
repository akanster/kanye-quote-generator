import React from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
//import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentQuote: "" };
  }

  componentDidMount = () => {
    this.loadQuote();
  };

  loadQuote = () => {
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(data => {
        this.setState({ currentQuote: data.quote });
      });
  };

  render() {
    return (
      <div className="App">
        <Container textAlign="center">
          {this.state.currentQuote}
          <br />
          <Button primary onClick={this.loadQuote}>
            Load Quote
          </Button>
        </Container>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
