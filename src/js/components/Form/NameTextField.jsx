import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const NameTextField = ({
  label,
}) => (
  <TextField
    autoComplete="off"
    label={label}
    type="text"
    defaultValue="名無しの仮想通貨ちゃん"
    className="m-modal02-postName"
    margin="normal"
  />
);

NameTextField.propTypes = {
  label: PropTypes.string,
};

NameTextField.defaultProps = {
  label: '',
};

export default NameTextField;
