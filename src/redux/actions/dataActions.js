import * as types from "./actionTypes";
import { allServices } from "../../api/dataApi";

export function loadDataAction() {
  return { type: types.LOAD_DATA_ACTION };
}

export function loadDataActionSuccess(data) {
  return { type: types.LOAD_DATA_ACTION_SUCCESS, data };
}

export function loadData() {
  return function (dispatch) {
    // dispatch(loadDataAction());
    var data = allServices.getData();
    dispatch(loadDataActionSuccess(data));
  };
}
