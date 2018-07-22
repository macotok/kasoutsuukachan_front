const floor = (num, ten) => (
  Math.floor(num * (10 ** ten)) / (10 ** ten)
);

const commaShape = (num) => {
  const commaCheck = String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  if (commaCheck.indexOf(',') !== -1) {
    const numberFloor = Math.floor(num);
    const numberShape = String(numberFloor).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return numberShape;
  }
  return commaCheck;
};

const priceDifferenceCalc = (nowPrice, lastPrice) => {
  const calcDiff = nowPrice - lastPrice;
  const calc = (calcDiff / lastPrice) * 100;
  const calcResult = floor(calc, 2);
  return calcResult;
};

// 昨日の値と比較して%で表示
export const rate = (nowPrice, lastPrice) => {
  if (!lastPrice) return false;
  const calcResult = priceDifferenceCalc(nowPrice, lastPrice);
  if (calcResult === 0) return false;
  if (calcResult > 0) {
    return `+${calcResult}%`;
  }
  return `${calcResult}%`;
};

// 3桁以上はカンマをつける
export const priceShape = (nowPrice) => {
  if (!nowPrice) return false;
  const priceFloor = floor(nowPrice, 2);
  return `${commaShape(priceFloor)}円`;
};

// 昨日の値と比較してプラスかマイナスかでテキストの色を変える
export const priceBoolean = (nowPrice, lastPrice) => {
  if (!lastPrice) return false;
  const calcResult = priceDifferenceCalc(nowPrice, lastPrice);
  if (calcResult > 0) {
    return 'plus';
  }
  return 'minus';
};
