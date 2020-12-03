import * as types from './types';
// const fs = require('fs-extra');

// export const getProducts = () => async (dispatch) => {
//   const { products } = await fs.readJson('data/products.json');
//   dispatch({
//     type: types.FETCH_PRODUCTS,
//     payload: ['sss'],
//   });
// };

export const addToBasket = (product) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_BASKET,
    payload: product,
  });
};

export const removeFromBasket = (productID) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_BASKET,
    payload: productID,
  });
};
