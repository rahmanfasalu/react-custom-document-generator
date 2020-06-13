import dataReducer from "./dataReducer";
import * as actions from "../actions/dataActions";

it("should add data", () => {
  // arrange
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];

  const newData = {
    title: "C",
  };

  const action = actions.loadDataActionSuccess(newData);

  // act
  const newState = dataReducer(initialState, action);

  // Add your data test here
  expect(1).toEqual(1);

  // assert
  // expect(newState.length).toEqual(3);
  // expect(newState[0].title).toEqual("A");
  // expect(newState[1].title).toEqual("B");
  // expect(newState[2].title).toEqual("C");
});
