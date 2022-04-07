import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import signupImage from "../../images/prac-08.png";
import userImage from "../../images/github-user.png";
import InputField from "../../components/InputField/InputField";
import styles from "./SignupPage.module.css";
import "yup-phone";
import { onSubmitData } from "../../redux/actions";
import { useNavigate } from "react-router";
import TextError from "../../components/TextError/TextError";

const validationSchema = Yup.object({
  // avatar: Yup.mixed().required("Image Required!"),
  avatar: Yup.mixed()
    .required("Image Required!")
    .test("fileSize", "File must be less than 2MB", (value) => {
      console.log(value);
      return value !== undefined && value && value.size < 2000000;
    }),
  name: Yup.string()
    .required("Name is a required field")
    .min(15, "Name must be minimum 15 charaters long"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is a required field"),
  phonenumber: Yup.string().phone("IN", true).required("Required Field"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmpassword: Yup.string()
    .required("Required Field")
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
  const reader = new FileReader();
  reader.readAsDataURL(values.avatar);
  console.log(reader);
  reader.onloadend = () => {
    const newuser = { ...user, avatar: reader.result };
    localStorage.setItem("userDetails", JSON.stringify(newuser));
  };
  dispatch(onSubmitData(user));
  navigate("/home");
  resetForm();
};

const SignupPage = () => {
  const userInput = useSelector((state) => state.users);
  const [image, setImage] = useState(userImage);
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
        return (
          <div className={styles["signup-form-container"]}>
            <div className={styles["inner-signup-form"]}>
              <Form>
                <h1>SignUp</h1>
                <div className={styles["input-fields"]}>
                  <div className={styles["user-profile"]}>
                    <img
                      alt="user-profile"
                      src={image}
                      className={styles["avatar-preview"]}
                    />
                  </div>
                  <div className={styles["upload-photo"]}>
                    <button
                      type="button"
                      onBlur={formik.handleBlur}
                      name="avatar"
                      id="avatar"
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
                      accept=".png, .jpg, .jpeg"
                      innerRef={ref}
                      onChange={(event) => {
                        console.log(event);
                        if (event.currentTarget.files) {
                          const file = event.currentTarget.files[0];
                          formik.setFieldValue("avatar", file);
                          console.log(event.currentTarget.files[0]);
                          setImage(
                            URL.createObjectURL(event.currentTarget.files[0])
                          );
                        }
                      }}
                      value={undefined}
                    />
                    <ErrorMessage
                      name="avatar"
                      component={TextError}
                      style={{ display: "block" }}
                    />
                  </div>

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
                    // disabled={!formik.isValid || formik.isSubmitting}
                    className={`${styles.button} ${styles["submit-button"]}`}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className={`${styles.button} ${styles["reset-button"]}`}
                    onClick={() => {
                      formik.resetForm();
                      setImage(userImage);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </Form>
            </div>
            <div className={styles["image-container"]}>
              <img
                src={signupImage}
                alt="RequiredImage"
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
