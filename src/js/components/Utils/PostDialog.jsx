import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Slide, TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Send, Eject } from '@material-ui/icons';
import ReplyMoreText from './ReplyMoreText';

const styles = theme => ({
  button: {
    margin: '10px 0',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const PostDialog = (props) => {
  const {
    isOpen,
    closeDialog,
    classes,
    replyData,
  } = props;

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
                <ReplyMoreText
                  replyData={replyData}
                />
                <div className="m-modal02-postHeader">
                  <TextField
                    autoComplete="off"
                    label="名前"
                    type="text"
                    name="name"
                    placeholder="名無しの仮想通貨ちゃん"
                    className="m-modal02-postName"
                    margin="normal"
                  />
                </div>
                <div className="m-modal02-postInner">
                  <div>
                    <TextField
                      label="投稿"
                      name="text"
                      multiline
                      rows="10"
                      rowsMax="10"
                      className="m-modal02-postTextarea"
                      margin="normal"
                    />
                  </div>
                  <p className="m-modal02-postCount">
                    300
                  </p>
                  <div>
                    <Button variant="contained" color="primary" className={`m-modal02-postSubmit ${classes.button}`}>
                      投稿
                      <Send className={classes.rightIcon} />
                    </Button>
                  </div>
                </div>
              </form>
              <div>
                <Button variant="contained" color="default" onClick={closeDialog} className={`m-modal02-close02 ${classes.button}`}>
                  閉じる
                  <Eject className={classes.rightIcon} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

PostDialog.propTypes = {
  isOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  classes: PropTypes.shape({}).isRequired,
  replyData: PropTypes.shape({}),
};

PostDialog.defaultProps = {
  isOpen: false,
  closeDialog: () => {},
  replyData: {},
};

export default withStyles(styles)(PostDialog);
