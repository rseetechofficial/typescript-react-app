import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const onSubmit = (values: any) => {
    console.log('Form data:', values);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
