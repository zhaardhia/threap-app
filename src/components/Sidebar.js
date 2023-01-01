/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryForum } from '../states/filterCategory/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { getUniqueCategory } from '../data/index';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
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

  const logOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-[#565254] items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Icon icon="maki:cross" />
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-30 cursor-pointer mt-3"
          fill="#FFF"
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
        className={`top-0 right-0 w-[15rem] bg-[#FACFAD] text-xl flex flex-col gap-5 p-10 pl-10 text-[#565254] fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <button
          className="mt-20 font-semibold text-[#565254] text-left"
          type="button"
          onClick={logOut}
        >
          Logout
        </button>
        <Link to="/" className="font-semibold text-[#565254]">All Threads</Link>
        <Link to="/leaderboards" className="font-semibold text-[#565254]">Leaderboards</Link>
        <hr className="my-7" />
        <p>Category:</p>
        <div className="flex flex-col gap-2 font-thin text-md my-5 text-left">
          {
            categoryFiltered.map((value) => (
              <button key={value.id} onClick={(() => filterCategory(value.category))}>{value.category}</button>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
