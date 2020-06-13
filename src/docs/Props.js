import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PropsTable = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e9ecef;
    color: #222;
  }
`;

const Props = ({ props }) => {
  return (
    <PropsTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{props[key].description}</td>
              <td>{props[key].type.name}</td>
              <td>
                {props[key].defaultValue && props[key].defaultValue.value}
              </td>
              <td>{props[key].required && "X"}</td>
            </tr>
          );
        })}
      </tbody>
    </PropsTable>
  );
};

Props.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Props;
