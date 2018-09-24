import Button from '@material-ui/core/Button';
import { Send } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import ReplyText from '../Dialog/ReplyText';
import NameTextField from '../Form/NameTextField';
import PostTextField from '../Form/PostTextField';
import { POST_MAX_LENGTH } from '../../defines/Defines';
import validate from '../../libraries/Validate';

const PostForm = (props) => {
  const {
    classes,
    replyData,
    handleSubmit,
    textLength,
  } = props;
  const textLengthCheck = POST_MAX_LENGTH - textLength;
  return (
    <form onSubmit={handleSubmit} className="m-modal02-post">
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
            name="post"
            component={PostTextField}
            label="投稿"
          />
        </div>
        <p className="m-modal02-postCount">
          {textLengthCheck}
        </p>
        <div>
          <Button type="submit" variant="contained" color="primary" className={`m-modal02-postSubmit ${classes.button}`}>
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
  handleSubmit: PropTypes.func.isRequired,
  replyData: PropTypes.shape({}),
  textLength: PropTypes.number.isRequired,
};

PostForm.defaultProps = {
  replyData: {},
};

const mapStateToProps = (state) => {
  const formValues = state.form.PostForm.values;
  const hasFormInput = formValues || null;
  const hasTextInput = hasFormInput ? formValues.post : null;
  // redux-formから残りの文字数を生成
  return {
    textLength: hasTextInput ? (formValues.post).length : 0,
  };
};

const enhance = compose(
  reduxForm({
    form: 'PostForm',
    validate,
  }),
  connect(mapStateToProps),
);

export default enhance(PostForm);
