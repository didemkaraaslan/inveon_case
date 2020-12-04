import * as types from './types';

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
