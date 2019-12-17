import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const FormikBody = ({ isSubmitting }) => (
  <Form>
    <h1>Any place in your app!</h1>
    <ErrorMessage className="form-error" name="email" component="div" />
    <Field type="email" name="email" />
    <ErrorMessage className="form-error" name="password" component="div" />
    <Field type="password" name="password" />
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

export { FormikBody };
