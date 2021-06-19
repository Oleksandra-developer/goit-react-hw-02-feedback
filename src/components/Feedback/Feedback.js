import React, { Component } from "react";
import Value from "./Value";
import ControlsButtons from "./ControlBtns";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  // // static defaultProps = {
  // //   initialValue: 0,
  // // };

  // // static propTypes = {
  // //   //
  // // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  handleNeutralFeedback = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  handleBadFeedback = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.good + this.state.neutral;
    console.log(total);
    return total;
  };
  //   totalFeedback = this.total;
  countPositiveFeedbackPercentage = () => {
    // let positivePersentage = 0;
    const positivePersentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return positivePersentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    // console.log(total);
    return (
      <div className={styles.feedback_container}>
        <h2>Please leave feedback</h2>

        <ControlsButtons
          goodClick={this.handleGoodFeedback}
          neutralClick={this.handleNeutralFeedback}
          badClick={this.handleBadFeedback}
        />

        <h3 className="title_statistics">Statistics</h3>
        <Value
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePersentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
// console.log(Feedback.clickHandler());

export default Feedback;
