import * as types from "./types";

export const addToBasket = (product: Product) => {
  return {
    type: types.ADD_TO_BASKET,
    payload: product,
  };
};

export const removeFromBasket = (productID: string) => {
  return {
    type: types.REMOVE_FROM_BASKET,
    payload: productID,
  };
};
