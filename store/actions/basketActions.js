import * as types from './types';

export const addToBasket = (product) => {
  return {
    type: types.ADD_TO_BASKET,
    payload: product,
  };
};

export const removeFromBasket = (productID) => {
  return {
    type: types.REMOVE_FROM_BASKET,
    payload: productID,
  };
};
