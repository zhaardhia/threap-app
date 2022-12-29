const ActionType = {
  FILTER_CATEGORY: 'FILTER_CATEGORY',
};

function filterCategoryForum({ category }) {
  return {
    type: ActionType.FILTER_CATEGORY,
    payload: {
      category,
    },
  };
}

export {
  ActionType,
  filterCategoryForum,
};
