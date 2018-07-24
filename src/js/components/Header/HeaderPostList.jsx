import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rate, priceShape, priceBoolean } from '../../libraries/Utils';

const HeaderPostList = (props) => {
  const { tickerList } = props;
  return (
    <header className="m-header02">
      <div className="m-header02-inner">
        <div className="m-header02-arrow">
          <Link to="/" className="m-header02-icon">
            &#xf3d2;
          </Link>
        </div>
        <div className="m-header02-title">
          <div className={`m-header02-ticker m-header02-${tickerList.ticker}`} />
          <h1>
            {tickerList.title}
          </h1>
          <div className="m-header02-priceBlock">
            <p className={`m-header02-lastPrice ${priceBoolean(tickerList.nowPrice, tickerList.lastPrice)}`}>
              {rate(tickerList.nowPrice, tickerList.lastPrice)}
            </p>
            <p className="m-header02-price">
              {priceShape(tickerList.nowPrice)}
            </p>
          </div>
        </div>
        <div className="m-header02-btn">
          <button type="button" className="m-header02-icon">
            &#xf12c;
          </button>
        </div>
      </div>
    </header>
  );
};

HeaderPostList.propTypes = {
  tickerList: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, props) => {
  const { match } = props;
  const threadList = state.thread;
  const tickerList = threadList.find(t => (
    t.ticker === match.params.ticker
  ));

  return {
    tickerList,
  };
};

export default connect(mapStateToProps)(HeaderPostList);
