import PropTypes from 'prop-types';
import React from 'react';

const ThreadEdit = (props) => {
  const { threadId } = props;
  return (
    <div className="m-threadEdit01">
      <div className="m-threadEdit01-submit">
        <button className="m-threadEdit01-link" type="button" data-threadid={threadId}>
          編集
        </button>
      </div>
      <div className="m-threadEdit01-delete">
        <button className="m-threadEdit01-link" type="button">
          削除
        </button>
      </div>
    </div>
  );
};

ThreadEdit.propTypes = {
  threadId: PropTypes.number.isRequired,
};

export default ThreadEdit;
