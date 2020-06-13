import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";

it("Should handle creating data", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  // Add your store test here
  expect(1).toEqual(1);
});
