import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const BackHome = () => (
  <p className="m-text01">
    <Link to="/" className="m-text01-link">
      スレッド一覧に戻る
    </Link>
  </p>
);

export default withRouter(BackHome);
