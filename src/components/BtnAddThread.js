import React from 'react';
import PropTypes from 'prop-types';

const BtnAddThread = ({ toggleModal }) => {
  const x = 0;
  return (
    <button className=" bg-white fixed right-[30rem] bottom-[38px] px-5 py-3 rounded-full shadow-lg" onClick={() => toggleModal(true)}>
      <p className="text-black text-lg">+</p>
    </button>
  );
};

BtnAddThread.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default BtnAddThread;
