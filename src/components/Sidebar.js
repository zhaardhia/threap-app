/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { filterCategoryForum } from '../states/filterCategory/action';
import { getUniqueCategory } from '../data/index';

const Sidebar = ({ authUser, logOut, xyz }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const filterCategoryVal = useSelector((states) => states.filterCategory);
  const forums = useSelector((states) => states.forums);
  const categoryFiltered = getUniqueCategory(forums);

  const dispatch = useDispatch(); // get dispatch function from store

  function filterCategory(category) {
    if (filterCategoryVal && filterCategoryVal == category) {
      dispatch(filterCategoryForum({ category: null }));
    } else {
      dispatch(filterCategoryForum({ category }));
    }
  }

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-[#565254] items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="70" height="8"></rect>
          <rect y="20" width="70" height="8"></rect>
          <rect y="40" width="70" height="8"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[15rem] bg-white border-2 text-xl flex flex-col gap-5 p-10 pl-10 text-[#565254] fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        <button
          className="mt-20 font-semibold text-[#565254] text-left"
          type="button"
          onClick={logOut}
        >
          Logout
        </button>
        <a href="/" className="font-semibold text-[#565254]">All Threads</a>
        <p className="font-semibold text-[#565254]">Leaderboards</p>
        <hr className="my-7" />
        <p>Category:</p>
        <div className="flex flex-col gap-2 font-thin text-md my-5 text-left">
          {
            categoryFiltered.map((value) => (
              <button onClick={(() => filterCategory(value.category))}>{value.category}</button>
            ))
          }
        </div>
      </div>
    </>
  );
};

// // <button>#kacang</button>
// <button>#helm</button>
// <button onClick={() => filterCategory('react')}>#sukro</button>

// const authUserShape = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,

// };

Sidebar.propTypes = {
  // authUser: PropTypes.shape(authUserShape).isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Sidebar;
