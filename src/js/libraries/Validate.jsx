import { POST_ERROR_MESSAGE, POST_MAX_LENGTH, REQUIRED } from '../defines/Defines';

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
    if (hasPostInput.length > POST_MAX_LENGTH) {
      errors.post = POST_ERROR_MESSAGE;
    }
  }
  return errors;
};

export default validate;
