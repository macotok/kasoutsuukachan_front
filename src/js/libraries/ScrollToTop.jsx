const scrollTop = (position, speed) => {
  const topScroll = () => {
    $('html, body').animate({
      scrollTop: position,
    }, speed);
  };
  return topScroll();
};

export default scrollTop;
