import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.Feedback__controls}>
    {options.map((option) => (
      <li key={option}>
        <button
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          className={styles.Feedback__option}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
