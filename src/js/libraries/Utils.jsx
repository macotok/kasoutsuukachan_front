export const floor = (num, ten) => (
  Math.floor(num * (10 ** ten)) / (10 ** ten)
);

export const commaShape = (num) => {
  const commaCheck = String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  if (commaCheck.indexOf(',') !== -1) {
    const numberFloor = Math.floor(num);
    const numberShape = String(numberFloor).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return numberShape;
  }
  return commaCheck;
};

export const priceDifferenceCalc = (nowPrice, lastPrice) => {
  const calcDiff = nowPrice - lastPrice;
  const calc = (calcDiff / lastPrice) * 100;
  const calcResult = floor(calc, 2);
  return calcResult;
};
