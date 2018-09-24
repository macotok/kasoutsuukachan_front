import PropTypes from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PAGE_SCROLL_POSITION_PADDING } from '../../defines/Defines';

const PageScroll = (props) => {
  const { headerHeight } = props;
  const headerHeightChange = headerHeight ? headerHeight + PAGE_SCROLL_POSITION_PADDING : false;
  const pageScrollPosition = { top: headerHeightChange };
  return (
    <div className="m-pageScroll" style={pageScrollPosition}>
      <div className="m-pageScroll-icon">
        <AnchorLink href="#app" className="m-pageScroll-link  m-pageScroll-up">
          &#xf366;
        </AnchorLink>
      </div>
      <div className="m-pageScroll-icon">
        <AnchorLink href="#m-postsList-last" className="m-pageScroll-link m-pageScroll-down">
          &#xf35d;
        </AnchorLink>
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
