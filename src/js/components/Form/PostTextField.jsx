import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const PostTextField = ({
  label,
}) => (
  <TextField
    autoComplete="off"
    label={label}
    multiline
    rows="10"
    rowsMax="10"
    className="m-modal02-postTextarea"
    margin="normal"
  />
);

PostTextField.propTypes = {
  label: PropTypes.string,
};

PostTextField.defaultProps = {
  label: '',
};

export default PostTextField;
