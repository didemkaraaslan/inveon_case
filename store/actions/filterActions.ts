import * as types from "./types";

export const addColorFilter = (color: ColorsType) => {
  return {
    type: types.ADD_COLOR_FILTER,
    payload: color,
  };
};

export const removeColorFilter = (color: ColorsType) => {
  return {
    type: types.REMOVE_COLOR_FILTER,
    payload: color,
  };
};

export const addSizeFilter = (size: SizesType) => {
  return {
    type: types.ADD_SIZE_FILTER,
    payload: size,
  };
};

export const removeSizeFilter = (size: SizesType) => {
  return {
    type: types.REMOVE_SIZE_FILTER,
    payload: size,
  };
};

export const addCategoryFilter = (category: CategoriesType) => {
  return {
    type: types.ADD_CATEGORY_FILTER,
    payload: category,
  };
};

export const removeCategoryFilter = (category: CategoriesType) => {
  return {
    type: types.REMOVE_CATEGORY_FILTER,
    payload: category,
  };
};
