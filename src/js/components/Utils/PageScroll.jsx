import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_SCROLL_POSITION_PADDING } from '../../defines/Defines';

const PageScroll = (props) => {
  const { headerHeight } = props;
  const headerHeightChange = headerHeight ? headerHeight + PAGE_SCROLL_POSITION_PADDING : false;
  const pageScrollPosition = { top: headerHeightChange };
  return (
    <div className="m-pageScroll" style={pageScrollPosition}>
      <div className="m-pageScroll-icon">
        <button type="button" className="m-pageScroll-link  m-pageScroll-up">
          &#xf366;
        </button>
      </div>
      <div className="m-pageScroll-icon">
        <button type="button" className="m-pageScroll-link m-pageScroll-down">
          &#xf35d;
        </button>
      </div>
    </div>
  );
};

PageScroll.propTypes = {
  headerHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default PageScroll;
