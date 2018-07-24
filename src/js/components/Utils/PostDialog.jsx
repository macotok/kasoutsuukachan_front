import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const PostDialog = (props) => {
  const { isOpen, closeDialog } = props;
  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        TransitionComponent={Transition}
      >
        <div className="m-modal02 is-modal">
          <div className="m-modal02-container">
            <div className="m-modal02-inner">
              <h2 className="m-modal02-title">
                投稿する
              </h2>
              <p className="m-modal02-close is-modalClose">
                <button type="button" className="m-modal02-icon" onClick={closeDialog}>
                  &#xf2d7;
                </button>
              </p>
              <form className="m-modal02-post">
                <div className="m-modal02-postHeader">
                  <input type="text" name="name" placeholder="名無しの仮想通貨ちゃん" maxLength="14" className="m-modal02-postName" />
                  <p className="m-modal02-postReplyNumber"></p>
                  <p className="m-modal02-postCount">
                    300
                  </p>
                </div>
                <div className="m-modal02-postInner">
                  <textarea className="m-modal02-postTextarea" name="text" />
                  <input className="m-modal02-postSubmit" type="submit" value="投稿" />
                </div>
              </form>
              <p className="m-modal02-close02 is-modalClose">
                <button type="button" onClick={closeDialog}>
                  閉じる
                </button>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

PostDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func,
};

PostDialog.defaultProps = {
  closeDialog: () => {},
};

export default PostDialog;
