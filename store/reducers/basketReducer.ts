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
