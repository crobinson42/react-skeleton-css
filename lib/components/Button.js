import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = ({ primary, pull, className, ...props }) => {
  let _className = primary ? "button-primary" : className;
  _className += pull ? ` u-pull-${pull}` : "";

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  pull: "",
  style: {},
  className: "button",
  primary: false
};

Button.propTypes = {
  pull: PropTypes.oneOf(["left", "right", ""]),
  style: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired
};

export default Button;
