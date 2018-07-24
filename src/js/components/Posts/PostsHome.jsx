import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import DATE_FORMAT from '../../defines/Defines';

const PostsHome = (props) => {
  const { post } = props;
  const postList = post.slice(-10);
  return (
    <div className="m-postsList m-postsListTop">
      <h2 className="m-title01">
        最新投稿一覧
      </h2>
      <ul className="m-postsList-block">
        {postList.map(p => (
          <li className="m-postsList-list" key={p.id}>
            <a href={`/${p.ticker}`} className="m-postsList-link02">
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
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostsHome.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({})),
};

PostsHome.defaultProps = {
  post: [],
};

const mapStateToProps = state => (
  {
    post: state.post,
  }
);

export default connect(mapStateToProps)(PostsHome);
