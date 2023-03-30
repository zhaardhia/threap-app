/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryForum } from '../states/filterCategory/action';
import { getUniqueCategory } from '../data/index';

const CategoryHomeSection = () => {
  const filterCategoryVal = useSelector((states) => states.filterCategory);
  const forums = useSelector((states) => states.forums);
  const categoryFiltered = getUniqueCategory(forums);
  const dispatch = useDispatch(); // get dispatch function from store

  const filterCategory = (category) => {
    if (filterCategoryVal && filterCategoryVal === category) {
      dispatch(filterCategoryForum({ category: null }));
    } else {
      dispatch(filterCategoryForum({ category }));
    }
  };
  return (
    <div className="mx-auto flex gap-2 my-8 overflow-x-auto w-fit">
      {
        categoryFiltered.map((value) => (
          <button
            className={`text-white border border-stone-700 border-dotted px-1 py-2 my-3 rounded-xl ${filterCategoryVal === value.category ? 'bg-slate-500' : ''}`}
            key={value.id}
            onClick={(() => filterCategory(value.category))}>
            #
            {value.category}
          </button>
        ))
      }
    </div>
  );
};

export default CategoryHomeSection;
