import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <ul>
    <li className="feedback_value">Good: {good};</li>
    <li className="feedback_value">Neutral: {neutral};</li>
    <li className="feedback_value">Bad: {bad};</li>

    {total ? <li className="feedback_value">Total: {total};</li> : null}
    {total ? (
      <li className="feedback_value">
        Positive feedback: {positivePersentage}%;
      </li>
    ) : null}
  </ul>
);
Statistics.defaultProps = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default Statistics;
