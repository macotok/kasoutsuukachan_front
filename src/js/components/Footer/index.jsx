import React from 'react';
import PropTypes from 'prop-types';
import BackHome from './BackHome';
import Sns from './Sns';
import Nav from './Nav';
import CopyRight from './CopyRight';

const Footer = (props) => {
  const { isBackHome } = props;
  return (
    <div>
      {isBackHome ? <BackHome /> : null}
      <Sns />
      <Nav />
      <CopyRight />
    </div>
  );
};

Footer.propTypes = {
  isBackHome: PropTypes.bool,
};

Footer.defaultProps = {
  isBackHome: true,
};

export default Footer;
