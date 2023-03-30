/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomBar from './BottomBar';
import { toggleModalThreadActionCreator } from '../states/modalThread/action';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  function toggleModal(isOpen) {
    dispatch(toggleModalThreadActionCreator({ isOpen }));
  }

  return (
    <div>
      <Navbar app="Threap" />
      {children}
      <BottomBar toggleModal={toggleModal} />
      <Footer year="2022" link="https://github.com/zhaardhia" developer="zhaardhia" />
    </div>
  );
};

export default Layout;
