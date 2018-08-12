import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const PostTextField = ({
  input,
  label,
  meta: { touched, error },
}) => {
  const isError = !!(touched && error);
  const styles = {
    color: '#F00',
  };
  return (
    <div>
      <TextField
        autoComplete="off"
        label={label}
        error={isError}
        multiline
        rows="10"
        rowsMax="10"
        className="m-modal02-postTextarea"
        margin="normal"
        {...input}
        onChange={e => input.onChange(e.target.value)}
      />
      <p style={styles}>
        {isError ? error : null}
      </p>
    </div>
  );
};

PostTextField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
};

PostTextField.defaultProps = {
  label: '',
};

export default PostTextField;
