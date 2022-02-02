import { Component } from "react";
import "./App.css";
import { FeedbackOptions } from "./Components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./Components/Notification/Notification";
import { Statistics } from "./Components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          title="Please leave feedback"
          options={Object.keys(this.state)}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // total={null}
          // positivePercentage={null}
        />
        <Notification message="There is no feedback" />
      </>
    );
  }
}

export default App;
