/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

const ButtonAdd = ({
  ctaLabel, onClick, type, style,
}) => (
  <button className={`px-5 py-2 rounded-lg ${type === 'addThread' ? 'bg-[#f5e0a0]' : type === 'addComment' ? 'bg-[#d6ece7]' : ''} shadow-md ${style}`} onClick={onClick}>{ctaLabel}</button>
);

ButtonAdd.propTypes = {
  type: PropTypes.oneOf(['addThread', 'addComment']).isRequired,
  ctaLabel: PropTypes.string.isRequired,
};

export default ButtonAdd;
