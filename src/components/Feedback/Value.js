import React from "react";

const Value = ({ good, neutral, bad, total, positivePersentage }) => (
  <div>
    <p className="feedback_value">Good: {good};</p>
    <p className="feedback_value">Neutral: {neutral};</p>
    <p className="feedback_value">Bad: {bad};</p>

    {total && <p className="feedback_value">Total: {total};</p>}
    {positivePersentage && (
      <p className="feedback_value">
        Positive feedback: {positivePersentage}%;
      </p>
    )}
  </div>
);

export default Value;
