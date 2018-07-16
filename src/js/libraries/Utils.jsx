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
