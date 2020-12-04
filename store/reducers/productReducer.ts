import * as types from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

const productReducer = (state: Array<Product> = [], action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return [...state, ...action.payload.products];
    case types.FETCH_PRODUCTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default productReducer;
