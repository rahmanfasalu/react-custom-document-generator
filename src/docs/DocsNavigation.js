import React, { Component } from "react";
import { PropTypes } from "prop-types";
class DocsNavigation extends Component {
  render() {
    const { components } = this.props;
    return (
      <>
        <ul className="navigation">
          {components.map((name) => {
            return (
              <li key={name}>
                <a href={`#${name}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

DocsNavigation.propTypes = {
  components: PropTypes.array.isRequired,
};

export default DocsNavigation;
