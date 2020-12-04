import * as types from "../actions/types";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

const basketReducer = (state: Array<Product> = [], action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return [...state, ...action.payload.basket];
    case types.ADD_TO_BASKET:
      // Check if the product is already in the basket
      const isInTheBasket = state.some(
        (item) => item.productID === action.payload.productID
      );
      if (isInTheBasket) return [...state];

      return [action.payload, ...state];

    case types.REMOVE_FROM_BASKET:
      return state.filter((item) => item.productID !== action.payload);

    default:
      return state;
  }
};

export default basketReducer;
