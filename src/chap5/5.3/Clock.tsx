import { Component } from "react";
import DateAndTime from "date-and-time";

type Props = {
  formatString: string;
};
type State = {
  currentTime: Date;
};

class Clock extends Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    });
  };

  render() {
    return (
      <div className="boxStyle">
        <h3>{DateAndTime.format(this.state.currentTime, this.props.formatString)}</h3>
      </div>
    );
  }
}

export default Clock;
