import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import React from 'react';

const validationSchema = Yup.object( {
    username: Yup.string().required( "Name is required" ),
    email: Yup.string().email( "Please enter a valid email" ).required( "Email is required" ),
    password: Yup.string().min(8, "Password must be at least 9 characters").required("Password is required")
} );

export default function FormikForm() {
  return (
      <Formik
          initialValues={{username: "", email: "", password: ""}}
          validationSchema={validationSchema}
          onSubmit={(values)=> console.log(values)}
      >
          <Form>
              <Field type='text' name="username" />
              <ErrorMessage name='username' component="div" />
              <Field type='text' name="email" />
              <ErrorMessage name='email' component='div' />
              <Field type='password' name="password" />
              <ErrorMessage name='password' component='div' />
              <button type='submit'>Submit</button>
          </Form>
      </Formik>
  )
}
