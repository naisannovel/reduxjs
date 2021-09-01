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
    
    case actionTypes.ADD_DISH:
      return {
        ...dishState,
        dish: dishState.dish.concat(action.payload)
      }

    default:
      return dishState;
  }
};


export const reducer = combineReducers({
  dish: dishReducer,
});
