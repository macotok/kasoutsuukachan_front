import { NUMBER_DIGITS } from '../defines/Defines';

/**
 * 任意の桁で四捨五入
 * @param num 四捨五入する値
 * @param ten どの桁で四捨五入するか
 * @returns 四捨五入した値
 */
const floor = (num, digits) => (
  Math.floor(num * (10 ** digits)) / (10 ** digits)
);

const arrangeNotComma = (num) => {
  const commaCheck = String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  if (commaCheck.indexOf(',') !== -1) {
    const numberFloor = Math.floor(num);
    return String(numberFloor).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }
  return commaCheck;
};

const priceDifferenceCalc = (nowPrice, lastPrice) => {
  const calcDiff = nowPrice - lastPrice;
  const calc = (calcDiff / lastPrice) * 100;
  return floor(calc, NUMBER_DIGITS);
};

// 昨日の値と比較して%で表示
export const rate = (nowPrice, lastPrice) => {
  if (!lastPrice) return false;
  const calcResult = priceDifferenceCalc(nowPrice, lastPrice);
  const prefix = calcResult > 0 ? '+' : '';
  return calcResult !== 0 && `${prefix}${calcResult}%`;
};

// 3桁以上はカンマをつける
export const priceShape = (nowPrice) => {
  if (!nowPrice) return false;
  return `${arrangeNotComma(floor(nowPrice, NUMBER_DIGITS))}円`;
};

// 昨日の値と比較してプラスかマイナスかでテキストの色を変える
export const priceBoolean = (nowPrice, lastPrice) => {
  if (!lastPrice) return false;
  const calcResult = priceDifferenceCalc(nowPrice, lastPrice);
  return calcResult > 0 ? 'plus' : 'minus';
};
