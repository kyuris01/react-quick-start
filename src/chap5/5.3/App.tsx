import React, { Component } from "react";
import Clock from "../5.4.4/Clock";

type Props = {};

type State = {
  formatString: string;
};

class App extends Component<Props, State> {
  state = {
    formatString: "HH:mm:ss",
  };

  render() {
    return (
      <div className="boxStyle">
        <h2>간단한 디지털 시계</h2>

        <hr />
        <Clock formatString={this.state.formatString}></Clock>
      </div>
    );
  }
}

export default App;
