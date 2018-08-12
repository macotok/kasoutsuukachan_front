import { REQUIRED, POST_ERROR_MESSAGE } from '../defines/Defines';

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

  const hasPostInput = values.post || null;
  if (hasPostInput) {
    if (hasPostInput.length > 300) {
      errors.post = POST_ERROR_MESSAGE;
    }
  }
  return errors;
};

export default validate;
