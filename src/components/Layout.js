/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar app="Threap" />
    {children}
    <Footer year="2022" link="https://github.com/zhaardhia" developer="zhaardhia" />
  </div>
);

export default Layout;
