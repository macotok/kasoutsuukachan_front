import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { Send } from '@material-ui/icons';
import ReplyText from '../Dialog/ReplyText';
import NameTextField from '../Form/NameTextField';
import PostTextField from '../Form/PostTextField';

const PostForm = (props) => {
  const { classes, replyData } = props;
  return (
    <form className="m-modal02-post">
      <ReplyText
        replyData={replyData}
      />
      <div className="m-modal02-postHeader">
        <Field
          name="name"
          component={NameTextField}
          label="名前"
        />
      </div>
      <div className="m-modal02-postInner">
        <div>
          <Field
            name="text"
            component={PostTextField}
            label="投稿"
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
  );
};

PostForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  replyData: PropTypes.shape({}),
};

PostForm.defaultProps = {
  replyData: {},
};

export default reduxForm({
  form: 'PostForm',
})(PostForm);
