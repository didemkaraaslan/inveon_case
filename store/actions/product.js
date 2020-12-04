import * as types from './types';
// const fs = require('fs-extra');

// export const getProducts = () => async (dispatch) => {
//   const { products } = await fs.readJson('data/products.json');
//   dispatch({
//     type: types.FETCH_PRODUCTS,
//     payload: ['sss'],
//   });
// };

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

export const addColorFilter = (color) => {
  return {
    type: types.ADD_COLOR_FILTER,
    payload: color,
  };
};

export const removeColorFilter = (color) => {
  return {
    type: types.REMOVE_COLOR_FILTER,
    payload: color,
  };
};

export const addSizeFilter = (size) => {
  return {
    type: types.ADD_SIZE_FILTER,
    payload: size,
  };
};

export const removeSizeFilter = (size) => {
  return {
    type: types.REMOVE_SIZE_FILTER,
    payload: size,
  };
};

export const addCategoryFilter = (category) => {
  return {
    type: types.ADD_CATEGORY_FILTER,
    payload: category,
  };
};

export const removeCategoryFilter = (category) => {
  return {
    type: types.REMOVE_CATEGORY_FILTER,
    payload: category,
  };
};
