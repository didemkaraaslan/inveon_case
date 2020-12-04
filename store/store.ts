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
import basketReducer from "./reducers/basketReducer";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productReducer,
  filters: filterReducer,
});

const makeStore: MakeStore<State> = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
