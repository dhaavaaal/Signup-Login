import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import image from "../../images/prac-08.png";
import InputField from "../InputField/InputField";
import styles from "./SignupPage.module.css";
import "yup-phone";

const validationSchema = Yup.object({
  name: Yup.string().required("Required Field"),
  email: Yup.string().email("Invalid email format").required("Required Field"),
  phonenumber: Yup.string().phone("IN", true).required("Required Field"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  const user = {
    username: values.username,
    email: values.email,
    password: values.password,
  };
  console.log(user);
  //registerUser(user)
  //re direct here ?
  // resetForm();
};

const SignupPage = () => {
  const userInput = useSelector((state) => state.users);
  return (
    <Formik
      initialValues={userInput}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        const user = {
          username: values.username,
          email: values.email,
          password: values.password,
        };
        console.log(user);
        //registerUser(user)
        //re direct here ?
        // resetForm();
      }}
      validateOnMount
      enableReinitialize
    >
      {(formik, handleChange) => {
        // console.log(formik);
        return (
          <div className={styles["signup-form-container"]}>
            <div className={styles["inner-signup-form"]}>
              <form onSubmit={handleChange}>
                <h1>SignUp</h1>
                <div className={styles["input-fields"]}>
                  <button className={styles["photo-upload"]}>Photo +</button>
                  <InputField label="Name" type="text" id="name" name="name" />
                  <InputField
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <InputField
                    label="PhoneNo"
                    type="tel"
                    id="phonenumber"
                    name="phonenumber"
                  />
                  <InputField
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                  />
                  <InputField
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                  />
                </div>
                <div className={styles["form-buttons"]}>
                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className={`${styles.button} ${styles["submit-button"]}`}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className={`${styles.button} ${styles["reset-button"]}`}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <div className={styles["image-container"]}>
              <img
                src={image}
                alt="ReauiredImage"
                className={styles["image-styling"]}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignupPage;
