import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const NameTextField = ({
  input,
  label,
}) => (
  <TextField
    autoComplete="off"
    label={label}
    type="text"
    defaultValue="名無しの仮想通貨ちゃん"
    className="m-modal02-postName"
    margin="normal"
    onChange={e => input.onChange(e.target.value)}
  />
);

NameTextField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
};

NameTextField.defaultProps = {
  label: '',
};

export default NameTextField;
