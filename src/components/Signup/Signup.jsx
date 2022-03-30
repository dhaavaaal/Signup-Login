import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import InputField from '../InputField/InputField';
import styles from './Signup.module.css';
import 'yup-phone';

const validationSchema = Yup.object({
  name: Yup.string().required('Required Field'),
  email: Yup.string().email('Invalid email format').required('Required Field'),
  phonenumber: Yup.string().phone('IN', true).required('Required Field'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const onSubmit = (values) => {
  console.log(values);
};

const Signup = () => {
  const userInput = useSelector((state) => state.users);
  return (
    <Formik
      initialValues={userInput}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className={styles['signup-form-container']}>
            <div className={styles['inner-signup-form']}>
              <Form>
                <h1>Sign Up</h1>
                <div className={styles['input-fields']}>
                  <InputField label='Name' type='text' id='name' name='name' />
                  <InputField
                    label='Email'
                    type='email'
                    id='email'
                    name='email'
                  />
                  <InputField
                    label='PhoneNo'
                    type='tel'
                    id='phonenumber'
                    name='phonenumber'
                  />
                  <InputField
                    label='Password'
                    type='password'
                    id='password'
                    name='password'
                  />
                  <InputField
                    label='Confirm Password'
                    type='password'
                    id='confirmpassword'
                    name='confirmpassword'
                  />
                </div>
                <div className={styles['form-buttons']}>
                  <button
                    type='submit'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
                  </button>
                  <button type='reset'>Reset</button>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signup;
