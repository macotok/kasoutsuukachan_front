import PropTypes from 'prop-types';
import React from 'react';
import BackHome from './BackHome';
import CopyRight from './CopyRight';
import Nav from './Nav';
import Sns from './Sns';

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
