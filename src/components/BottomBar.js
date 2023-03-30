import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const BottomBar = ({ toggleModal }) => {
  const location = useLocation();

  return (
    <div className="bg-white fixed bottom-0 md:right-12 px-5 py-3 rounded-t-xl shadow-lg lg:hidden flex md:w-[90%] w-full justify-evenly">
      <Link to="/" className="flex flex-col items-center">
        <Icon icon="material-symbols:home" width={20} />
        <p className="text-[0.7rem]">Home</p>
      </Link>
      {location.pathname === '/' && (
        <button className="flex flex-col items-center" onClick={() => toggleModal(true)}>
          <Icon icon="material-symbols:chat-add-on" width={20} />
          <p className="text-[0.7rem]">Add Thread</p>
        </button>
      )}
      <Link to="/leaderboards" className="flex flex-col items-center">
        <Icon icon="icon-park-solid:ranking-list" width={20} />
        <p className="text-[0.7rem]">Leaderboard</p>
      </Link>
      <div className="flex flex-col items-center">
        <Icon icon="majesticons:logout" width={20} />
        <p className="text-[0.7rem]">Logout</p>
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default BottomBar;
