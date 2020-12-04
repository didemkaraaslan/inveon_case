import * as types from '../actions/types';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

type ColorsType = 'red' | 'green' | 'blue';
type SizesType = 's' | 'm' | 'l' | 'xl';
type CategoriesType = 'female' | 'male';

export interface Filter {
  colors: Array<ColorsType>;
  sizes: Array<SizesType>;
  categories: Array<CategoriesType>;
}

const initialState = {
  colors: [],
  sizes: [],
  categories: [],
};
const filterReducer = (state: Filter = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.filters };
    // COLOR FILTER
    case types.ADD_COLOR_FILTER:
      if (state.colors.includes(action.payload)) {
        // This color already is set as a filter. Don't change the state.
        return state;
      }

      return {
        ...state,
        colors: state.colors.concat(action.payload),
      };

    case types.REMOVE_COLOR_FILTER:
      return {
        ...state,
        colors: state.colors.filter(
          (existingColor) => existingColor !== action.payload
        ),
      };

    // SIZE FILTER
    case types.ADD_SIZE_FILTER:
      if (state.sizes.includes(action.payload)) {
        // This size already is set as a filter. Don't change the state.
        return state;
      }

      return {
        ...state,
        sizes: state.sizes.concat(action.payload),
      };

    case types.REMOVE_SIZE_FILTER:
      return {
        ...state,
        sizes: state.sizes.filter(
          (existingSize) => existingSize !== action.payload
        ),
      };

    // CATEGORY FILTER
    case types.ADD_CATEGORY_FILTER:
      if (state.categories.includes(action.payload)) {
        // This category already is set as a filter. Don't change the state.
        return state;
      }

      return {
        ...state,
        categories: state.categories.concat(action.payload),
      };

    case types.REMOVE_CATEGORY_FILTER:
      return {
        ...state,
        categories: state.categories.filter(
          (existingCategory) => existingCategory !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default filterReducer;
