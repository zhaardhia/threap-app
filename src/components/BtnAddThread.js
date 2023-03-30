import React from 'react';
import PropTypes from 'prop-types';

const BtnAddThread = ({ toggleModal }) => (
  <button className=" bg-white fixed right-[16%] bottom-[38px] px-5 py-3 rounded-full shadow-lg lg:block hidden" onClick={() => toggleModal(true)}>
    <p className="text-black text-lg">+</p>
  </button>
);

BtnAddThread.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default BtnAddThread;
