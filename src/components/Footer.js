import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ year, link, developer }) => (
  <footer>
    <p className="text-center mt-10 mb-24">
      {year}
      {' '}
      -
      {' '}
      <a href={link} className="underline" target="_blank" rel="noreferrer">{developer}</a>
    </p>
  </footer>
);

Footer.propTypes = {
  year: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

export default Footer;
