import { createStore, AnyAction, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import * as types from "./actions/types";

type ColorsType = "kırmızı" | "yeşil" | "mavi";
type SizesType = "s" | "m" | "l" | "xl";
type CategoriesType = "female" | "male";

export interface Product {
  productID: string;
  productName: string;
  productPrice: number;
  productColor: ColorsType;
  productSize: SizesType;
  productCategory: CategoriesType;
  inStock: boolean;
}

export interface Filter {
  colors: Array<ColorsType>;
  sizes: Array<SizesType>;
  categories: Array<CategoriesType>;
}

export interface State {
  products: Array<Product>;
  basket: Array<Product>;
  filters: Filter;
}

const reducer = (
  state: State = {
    products: [],
    basket: [],
    filters: {
      colors: [],
      sizes: [],
      categories: [],
    },
  },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case types.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case types.ADD_TO_BASKET:
      // Check if the product is already in the basket
      const isInTheBasket = state.basket.some(
        (item) => item.productID === action.payload.productID
      );

      if (isInTheBasket) return { ...state };
      return { ...state, basket: [action.payload, ...state.basket] };

    case types.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter(
          (item) => item.productID !== action.payload
        ),
      };
    default:
      return state;
  }
};

const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
