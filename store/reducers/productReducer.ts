import * as types from '../actions/types';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

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
