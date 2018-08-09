import { REQUIRED } from '../defines/Defines';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'post',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = REQUIRED;
    }
  });
  return errors;
};

export default validate;
