import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import * as dataActions from "../../redux/actions/dataActions";
class DataPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(dataActions.loadData());
  }
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((item) => {
          return <div key={item.title}> {item.title}</div>;
        })}
      </>
    );
  }
}

DataPage.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { data } = state.dataReducer;
  console.log(data);
  return {
    data,
  };
}

export default connect(mapStateToProps)(DataPage);
