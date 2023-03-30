import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => (
  <div className="md:w-[90%] w-[80%] top-[2%] md:left-[5%] left-[10%] fixed h-[4rem] bg-slate-100 shadow-lg rounded-2xl p-3 flex justify-between items-center z-10">
    <Link to="/" className="text-2xl">Threap</Link>
    <div className="lg:flex hidden gap-3">
      <Link to="/" className="text-lg">Home</Link>
      <Link to="/leaderboards" className="text-lg">Leaderboard</Link>
      <Link to="/leaderboards" className="text-lg">Logout</Link>
    </div>
    {/* <Sidebar /> */}
  </div>
);

export default Navbar;
