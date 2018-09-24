import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import ReplyButton from './ReplyButton';
import ReplyNumber from './ReplyNumber';
import { DATE_FORMAT } from '../../defines/Defines';

const PostList = (props) => {
  const { tickerPostList, headerHeight } = props;
  const headerHeightChange = headerHeight || false;
  const pageScrollPosition = { paddingTop: headerHeightChange };
  return (
    <div className="m-postsList" style={pageScrollPosition}>
      <ul className="m-postsList-block">
        {tickerPostList.map(t => (
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
            {
              t.replyNumber
                ? (
                  <ReplyNumber
                    replyNumber={t.replyNumber}
                  />
                )
                : null
            }
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
              <ReplyButton
                postId={t.id}
              />
            </div>
          </li>
        ))
        }
      </ul>
      <div id="m-postsList-last" />
    </div>
  );
};

PostList.propTypes = {
  headerHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  tickerPostList: PropTypes.arrayOf(PropTypes.shape({})),
};

PostList.defaultProps = {
  tickerPostList: [],
};

const mapStateToProps = (state, props) => {
  const { match } = props;
  const postList = state.post;
  const tickerPostList = postList.filter(p => (
    p.ticker === match.params.ticker
  ));

  return {
    tickerPostList,
  };
};

export default connect(mapStateToProps)(PostList);
