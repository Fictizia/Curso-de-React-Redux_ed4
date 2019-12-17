import emailValidation from "./emailValidation";

export default (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }

  if (emailValidation(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password) {
    errors.password = 'Wrong password';
  }

  return errors;
}
