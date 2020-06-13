import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DATA_ACTION:
      return state;
    case types.LOAD_DATA_ACTION_SUCCESS:
      return { data: action.data };
    default:
      return state;
  }
}
