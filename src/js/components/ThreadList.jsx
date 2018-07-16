import React from 'react';
import db from '../../../api/stub';
import { commaShape, floor, priceDifferenceCalc } from '../libraries/Utils';

class ThreadList extends React.Component {
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
    return (
      <div className="m-threadList01">
        <h2 className="m-title01">
          スレッド一覧
        </h2>
        <ul className="m-threadList01-block">
          {db.thread.map(t => (
            <li className="m-threadList01-list" key={t.id}>
              <a href={`/${t.ticker}`}>
                <div className={`m-threadList01-icon m-threadList01-${t.ticker}`} />
                <p className="m-threadList01-text">
                  {t.title}
                </p>
                <div className="m-threadList01-right">
                  <p className={`m-threadList01-lastPrice ${this.priceBoolean(t.nowPrice, t.lastPrice)}`}>
                    {this.rate(t.nowPrice, t.lastPrice)}
                  </p>
                  <p className="m-threadList01-price">
                    {this.priceShape(t.nowPrice)}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ThreadList;
