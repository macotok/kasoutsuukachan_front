import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import DATE_FORMAT from '../../defines/Defines';

const PostsList = (props) => {
  const { match, post } = props;
  const tickerName = match.params.ticker;
  const tickerPosts = post.filter(p => (
    p.ticker === tickerName
  ));

  return (
    <div className="m-postsList">
      <ul className="m-postsList-block">
        {tickerPosts.map(t => (
          <li className="m-postsList-list" key={t.id}>
            <div className="m-postsList-information">
              <p className="m-postsList-increment">
                {t.autoIncrement}
              </p>
              <p className="m-postsList-name">
                {t.name}
              </p>
              <p className="m-postsList-updateAt">
                {moment(t.updateAt).format(DATE_FORMAT)}
              </p>
            </div>
            <p className="m-postsList-replyNum">
              <button type="button" className="m-postsList-link" />
            </p>
            <p className="m-postsList-text">
              {t.text}
            </p>
            <div className="m-postsList-reaction">
              <p className="m-postsList-iine">
                <button type="button" className="m-postsList-link m-postsList-iineLink">
                  いいね
                </button>
              </p>
              <p className="m-postsList-iineCount">
                {t.good}
              </p>
              <p className="m-postsList-reply">
                <button type="button" className="m-postsList-link m-postsList-replyLink">
                  返信
                </button>
              </p>
            </div>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

PostsList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  post: PropTypes.arrayOf(PropTypes.shape({})),
};

PostsList.defaultProps = {
  post: [],
};

const mapStateToProps = state => (
  {
    post: state.post,
  }
);

export default connect(mapStateToProps)(PostsList);
