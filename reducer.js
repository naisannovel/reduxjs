import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const dishReducer = (dishState = { isLoading: false, dish: [], errMsg: null }, action) => {
  switch (action.type) {
    case actionTypes.LOADING_DISH:
      return {
        ...dishState,
        isLoading: true,
        dish: [],
        errMsg: null
      };
    case actionTypes.LOAD_DISH:
      return {
        ...dishState,
        isLoading: false,
        dish: action.payload,
        errMsg: null
      };

    case actionTypes.ERROR_DISH:
      return {
        ...dishState,
        isLoading: false,
        dish: [],
        errMsg: action.payload
      }
    
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
