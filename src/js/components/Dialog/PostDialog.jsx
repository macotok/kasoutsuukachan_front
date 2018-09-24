import { Dialog, Slide } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Eject } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import PostForm from '../Post/PostForm';

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

const submit = (values) => {
  console.log(values);
};

const PostDialog = (props) => {
  const {
    isOpen,
    closeDialog,
    classes,
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
                投稿する
              </h2>
              <p className="m-modal02-close">
                <button type="button" className="m-modal02-icon" onClick={closeDialog}>
                  &#xf2d7;
                </button>
              </p>
              <PostForm onSubmit={submit} {...props} />
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
  classes: PropTypes.shape({}).isRequired,
  closeDialog: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

PostDialog.defaultProps = {
  isOpen: false,
};

export default withStyles(styles)(PostDialog);
