import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const dishReducer = (dishState = { isLoading: false, dish: [] }, action) => {
  switch (action.type) {
    case actionTypes.LOADING_DISH:
      return {
        ...dishState,
        isLoading: true,
        dish: [],
      };
    case actionTypes.LOAD_DISH:
      return {
        ...dishState,
        isLoading: false,
        dish: action.payload,
      };

    default:
      return dishState;
  }
};

const commentReducer = (commentState = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
    // return ...;

    default:
      return commentState;
  }
};

export const reducer = combineReducers({
  dish: dishReducer,
  comment: commentReducer,
});
