import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;

// eslint-disable-next-line react/no-typos
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
