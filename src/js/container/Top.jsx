import React from 'react';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import Sns from '../components/Sns';
import FooterNav from '../components/FooterNav';
import CopyRight from '../components/CopyRight';

const Top = () => (
  <div>
    <Header />
    <Sns />
    <FooterNav />
    <CopyRight />
  </div>
);

export default withRouter(Top);
