import * as types from '../actions/types';
import { HYDRATE } from 'next-redux-wrapper';

const productReducer = (state = [], action) => {
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
