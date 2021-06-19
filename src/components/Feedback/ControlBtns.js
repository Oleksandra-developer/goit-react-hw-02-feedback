import React from "react";

const ControlsButtons = ({ goodClick, neutralClick, badClick }) => (
  <ul className="Feedback__controls">
    <li>
      <button type="button" onClick={goodClick}>
        Good
      </button>
    </li>
    <li>
      <button type="button" onClick={neutralClick}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" onClick={badClick}>
        Bad
      </button>
    </li>
  </ul>
);

export default ControlsButtons;
