import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ year, link, developer }) => (
  <footer>
    <p className="text-center my-10">
      {year}
      {' '}
      -
      {' '}
      <a href={link} className="underline">
        &copy;
        {' '}
        {developer}
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  year: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

export default Footer;
