import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { commaShape, floor, priceDifferenceCalc } from '../../libraries/Utils';

class HeaderPostList extends React.Component {
  constructor(props) {
    super(props);
    this.floor = floor;
    this.commaShape = commaShape;
    this.priceDifferenceCalc = priceDifferenceCalc;
  }

  rate(nowPrice, lastPrice) {
    if (!lastPrice) return false;
    const calcResult = this.priceDifferenceCalc(nowPrice, lastPrice);
    if (calcResult === 0) return false;
    if (calcResult > 0) {
      return `+${calcResult}%`;
    }
    return `${calcResult}%`;
  }

  priceShape(nowPrice) {
    if (!nowPrice) return false;
    const priceFloor = this.floor(nowPrice, 2);
    return `${this.commaShape(priceFloor)}円`;
  }

  priceBoolean(nowPrice, lastPrice) {
    if (!lastPrice) return false;
    const calcResult = this.priceDifferenceCalc(nowPrice, lastPrice);
    if (calcResult > 0) {
      return 'plus';
    }
    return 'minus';
  }

  render() {
    const { match, ticker } = this.props;
    const tickerName = match.params.ticker;
    const tickerPage = ticker.find(t => (
      t.ticker === tickerName
    ));

    return (
      <header className="m-header02">
        <div className="m-header02-inner">
          <div className="m-header02-arrow">
            <Link to="/" className="m-header02-icon">
              &#xf3d2;
            </Link>
          </div>
          <div className="m-header02-title">
            <div className={`m-header02-ticker m-header02-${tickerPage.ticker}`} />
            <h1>
              {tickerPage.title}
            </h1>
            <div className="m-header02-priceBlock">
              <p className={`m-header02-lastPrice ${this.priceBoolean(tickerPage.nowPrice, tickerPage.lastPrice)}`}>
                {this.rate(tickerPage.nowPrice, tickerPage.lastPrice)}
              </p>
              <p className="m-header02-price">
                {this.priceShape(tickerPage.nowPrice)}
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

HeaderPostList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  ticker: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => (
  {
    ticker: state.thread,
  }
);

export default connect(mapStateToProps)(HeaderPostList);
