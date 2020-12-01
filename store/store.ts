import {
  createStore,
  AnyAction,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import * as types from "./actions/types";
import { color, size } from "../enum.js";

export interface State {
  products: Array<{
    productID: string;
    productName: string;
    productPrice: number;
    productColor: color;
    productSize: size;
    inStock: boolean;
  }>;
}

const reducer = (state: State = { products: [] }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case types.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
