import React, { Component } from "react";
import PropTypes from "prop-types";

class Progressbar extends Component {
  getBackgroudColor = () => {
    if (this.props.percentage === 100) {
      return "green";
    }
    return this.props.percentage > 50 ? "lightgreen" : "red";
  };

  progressBarWidth = () => {
    return parseInt(this.props.width * (this.props.percentage / 100), 10);
  };
  render() {
    const { width, height } = this.props;
    return (
      <div style={{ border: "1px solid lightgray", width: width }}>
        <div
          style={{
            background: this.getBackgroudColor(),
            width: this.progressBarWidth(),
            height: height,
          }}
        ></div>
      </div>
    );
  }
}

Progressbar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Progressbar;
