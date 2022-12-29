import { ActionType } from './action';

function filterCategoryReducer(filterCategory = null, action = {}) {
  switch (action.type) {
    case ActionType.FILTER_CATEGORY:
      return action.payload.category;
    default:
      return filterCategory;
  }
}

export default filterCategoryReducer;
