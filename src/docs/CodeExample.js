import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Pre = styled.pre`
  background: #f0f0f0;
  padding: 10px;
`;
class CodeExample extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Pre
        ref={(ref) => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </Pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeExample;
