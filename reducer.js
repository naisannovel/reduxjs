import { combineReducers } from "redux";
import * as actionTypes from './actionTypes';

const dishReducer = (dishState = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_DISH:
    // return ...;

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
