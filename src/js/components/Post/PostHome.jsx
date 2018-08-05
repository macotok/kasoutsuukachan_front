import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import DATE_FORMAT from '../../defines/Defines';

const PostHome = (props) => {
  const { postList } = props;
  return (
    <div className="m-postsList m-postsListTop">
      <h2 className="m-title01">
        最新投稿一覧
      </h2>
      <ul className="m-postsList-block">
        {postList.map(p => (
          <li className="m-postsList-list" key={p.id}>
            <Link to={`/${p.ticker}`} className="m-postsList-link02">
              <div className="m-postsList-information">
                <p className="m-postsList-name">
                  {p.name}
                </p>
                <p className="m-postsList-updateAt">
                  {moment(p.updateAt).format(DATE_FORMAT)}
                </p>
              </div>
              <p className="m-postsList-text">
                {p.text}
              </p>
              <div className="m-postsList-reaction">
                <p className="m-postsList-iine">
                  いいね
                </p>
                <p className="m-postsList-iineCount">
                  {p.good}
                </p>
                <p className={`m-postsList-ticker m-postsList-${p.ticker}`} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostHome.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.shape({})),
};

PostHome.defaultProps = {
  postList: [],
};

const mapStateToProps = (state) => {
  const postList = state.post.slice(-10);
  return {
    postList,
  };
};

export default connect(mapStateToProps)(PostHome);
