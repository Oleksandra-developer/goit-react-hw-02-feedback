import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import styles from "./components/FeedbackOptions/Feedback.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback =()=> Object.values(this.state).reduce(
      (state, acc) => (acc += state),
      0
  );
  countPositiveFeedbackPercentage=() => Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    );
  render() {
    const { good, neutral, bad } = this.state;
    // const countTotalFeedback = Object.values(this.state).reduce(
    //   (state, acc) => (acc += state),
    //   0
    // );
    // const countPositiveFeedbackPercentage = Math.floor(
    //   (good / countTotalFeedback) * 100
    // );
    return (
      <div className={styles.feedback_container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePersentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
