import React from 'react';

const PageScroll = () => (
  <div className="m-pageScroll is-hidden">
    <p className="m-pageScroll-icon">
      <button type="button" className="m-pageScroll-link  m-pageScroll-up">
        &#xf366;
      </button>
    </p>
    <p className="m-pageScroll-icon">
      <button type="button" className="m-pageScroll-link m-pageScroll-down">
        &#xf35d;
      </button>
    </p>
  </div>
);

export default PageScroll;
