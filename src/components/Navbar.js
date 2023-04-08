/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { toggleDarkModeActionCreator } from '../states/darkMode/action';

const Navbar = () => {
  const location = useLocation();
  const stylingRouteHome = location.pathname === '/' ? 'text-slate-700' : 'text-slate-500';
  const stylingRouteLeaderboards = location.pathname === '/leaderboards' ? 'text-slate-700' : 'text-slate-500';
  const {
    authUser,
    darkMode,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  return (
    <div className="md:w-[60%] w-[80%] top-[2%] md:left-[20%] left-[10%] fixed h-[4rem] bg-slate-100 shadow-lg rounded-2xl p-3 flex justify-between items-center z-10">
      <div className="flex items-center">
        <img src={require('../images/threapLogo.png')} className="w-[50px]" />
        <Link to="/" className="text-xl text-slate-500">
          Hi,
          {' '}
          <strong>{authUser.name}</strong>
        </Link>
      </div>
      <div className="lg:flex hidden gap-7">
        <Link to="/" className={`text-lg ${stylingRouteHome}`}>Home</Link>
        <Link to="/leaderboards" className={`text-lg ${stylingRouteLeaderboards}`}>Leaderboard</Link>
        <Link to="/leaderboards" className="text-lg text-slate-500">Logout</Link>
        <button onClick={() => dispatch(toggleDarkModeActionCreator({ isTrue: !darkMode }))}>toggle</button>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Navbar;
