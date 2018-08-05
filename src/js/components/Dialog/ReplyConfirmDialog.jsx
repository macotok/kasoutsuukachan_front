import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Slide } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Eject } from '@material-ui/icons';
import moment from 'moment';
import DATE_FORMAT from '../../defines/Defines';
import ReplyNumber from '../Post/ReplyNumber';
import ReplyButton from '../Post/ReplyButton';

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

const ReplyConfirmDialog = (props) => {
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
        <div className="m-modal02">
          <div className="m-modal02-container">
            <div className="m-modal02-inner">
              <h2 className="m-modal02-title">
                返信内容を確認
              </h2>
              <p className="m-modal02-close">
                <button type="button" className="m-modal02-icon" onClick={closeDialog}>
                  &#xf2d7;
                </button>
              </p>
              <div className="m-postsList-information">
                <p className="m-postsList-increment">
                  {replyData.autoIncrement}
                </p>
                <p className="m-postsList-name">
                  {replyData.name}
                </p>
                <p className="m-postsList-updateAt">
                  {moment(replyData.updateAt).format(DATE_FORMAT)}
                </p>
              </div>
              {
                replyData.replyNumber
                  ? (
                    <ReplyNumber
                      replyNumber={replyData.replyNumber}
                    />
                  )
                  : null
              }
              <p className="m-postsList-text">
                {replyData.text}
              </p>
              <div className="m-postsList-reaction">
                <p className="m-postsList-iine">
                  <button type="button" className="m-postsList-link m-postsList-iineLink">
                    いいね
                  </button>
                </p>
                <p className="m-postsList-iineCount">
                  {replyData.good}
                </p>
                <ReplyButton
                  postId={replyData.id}
                />
              </div>
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

ReplyConfirmDialog.propTypes = {
  isOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
  classes: PropTypes.shape({}).isRequired,
  replyData: PropTypes.shape({}),
};

ReplyConfirmDialog.defaultProps = {
  isOpen: false,
  closeDialog: () => {},
  replyData: {},
};

export default withStyles(styles)(ReplyConfirmDialog);
