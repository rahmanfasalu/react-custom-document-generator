import React from "react";
import PropTypes from "prop-types";
import Example from "./Example";
import Props from "./Props";

const DocsComponentPage = ({ component }) => {
  const { name, description, props, examples } = component;

  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Output</h3>
      {examples.length > 0
        ? examples.map((example) => (
            <Example
              key={example.name}
              example={example}
              componentName={name}
            />
          ))
        : "No examples exist."}

      <h3>Props</h3>
      {props ? <Props props={props} /> : "This component accepts no props."}
    </div>
  );
};

DocsComponentPage.propTypes = {
  component: PropTypes.object.isRequired,
};

export default DocsComponentPage;
