import { Component } from "react";
import Chatting from "./Chatting";

class App extends Component<{}, {}> {
  state = {};

  render() {
    return (
      <div>
        <Chatting></Chatting>
      </div>
    );
  }
}

export default App;
