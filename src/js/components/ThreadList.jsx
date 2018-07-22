import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rate, priceShape, priceBoolean } from '../libraries/Utils';

const ThreadList = (props) => {
  const { thread } = props;
  return (
    <div className="m-threadList01">
      <h2 className="m-title01">
        スレッド一覧
      </h2>
      <ul className="m-threadList01-block">
        {thread.map(t => (
          <li className="m-threadList01-list" key={t.id}>
            <Link to={`/${t.ticker}`}>
              <div className={`m-threadList01-icon m-threadList01-${t.ticker}`} />
              <p className="m-threadList01-text">
                {t.title}
              </p>
              <div className="m-threadList01-right">
                <p className={`m-threadList01-lastPrice ${priceBoolean(t.nowPrice, t.lastPrice)}`}>
                  {rate(t.nowPrice, t.lastPrice)}
                </p>
                <p className="m-threadList01-price">
                  {priceShape(t.nowPrice)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ThreadList.propTypes = {
  thread: PropTypes.arrayOf(PropTypes.shape({})),
};

ThreadList.defaultProps = {
  thread: [],
};

const mapStateToProps = state => (
  {
    thread: state.thread,
  }
);

export default connect(mapStateToProps)(ThreadList);
