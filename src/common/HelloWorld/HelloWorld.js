import React, { Component } from "react";
import { PropTypes } from "prop-types";

/** This will render the input message as it is  */
class HelloWorld extends Component {
  state = {
    message: "Default",
  };
  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}

HelloWorld.propTypes = {
  /** message of string */
  message: PropTypes.string,
};

HelloWorld.defaultProps = {
  message: "default message",
};
export default HelloWorld;
