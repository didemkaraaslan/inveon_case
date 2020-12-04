import {
  createStore,
  AnyAction,
  applyMiddleware,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import basketReducer from './reducers/basketReducer';
import filterReducer from './reducers/filterReducer';
import productReducer from './reducers/productReducer';

import * as types from './actions/types';

type ColorsType = 'red' | 'green' | 'blue';
type SizesType = 's' | 'm' | 'l' | 'xl';
type CategoriesType = 'female' | 'male';

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

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productReducer,
  filters: filterReducer,
});

// state: State = {
//   products: [],
//   basket: [],
//   filters: {
//     colors: [],
//     sizes: [],
//     categories: [],
//   },
// },
// action: AnyAction

const makeStore: MakeStore<State> = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
