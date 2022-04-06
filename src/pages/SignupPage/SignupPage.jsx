import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import image from "../../images/prac-08.png";
import InputField from "../../components/InputField/InputField";
import styles from "./SignupPage.module.css";
import "yup-phone";
import { onSubmitData } from "../../redux/actions";
import { useNavigate } from "react-router";
import DropZone from "react-dropzone";
import { User } from "react-feather";

const validationSchema = Yup.object({
  // avatar: Yup.required("Image Required!"),
  name: Yup.string().required("Required Field"),
  email: Yup.string().email("Invalid email format").required("Required Field"),
  phonenumber: Yup.string().phone("IN", true).required("Required Field"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmpassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = (dispatch, navigate, values, { resetForm }) => {
  console.log(values);
  const avatarURL = URL.createObjectURL(values.avatar);
  console.log(values.avatar);
  const user = {
    avatar: avatarURL,
    name: values.name,
    email: values.email,
    phonenumber: values.phonenumber,
    isLoggedIn: true,
  };
  console.log(user);
  localStorage.setItem("userDetails", JSON.stringify(user));
  dispatch(onSubmitData(user));
  navigate("/home");
  resetForm();
};

const SignupPage = () => {
  const userInput = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();

  return (
    <Formik
      initialValues={userInput}
      validationSchema={validationSchema}
      onSubmit={onSubmit.bind(null, dispatch, navigate)}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className={styles["signup-form-container"]}>
            <div className={styles["inner-signup-form"]}>
              <Form>
                <h1>SignUp</h1>
                <div className={styles["input-fields"]}>
                  <button
                    type="button"
                    name="avatar"
                    className={styles["photo-upload"]}
                    onClick={() => ref.current.click()}
                  >
                    Photo +
                  </button>
                  <Field
                    style={{ display: "none" }}
                    type="file"
                    id="avatar"
                    name="avatar"
                    innerRef={ref}
                    onChange={(event) => {
                      if (event.currentTarget.files) {
                        const file = event.currentTarget.files[0];
                        console.log(file);
                        formik.setFieldValue("avatar", file);
                      }
                    }}
                    value={undefined}
                    // as={ref}
                  />

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
                    onClick={() => formik.resetForm()}
                  >
                    Reset
                  </button>
                </div>
              </Form>
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
