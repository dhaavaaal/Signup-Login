import { ErrorMessage, Field } from "formik";
import React from "react";
import styles from "./InputField.module.css";
import TextError from "../TextError/TextError";

const InputField = (props) => {
  return (
    <>
      <div className={styles["all-inputs"]}>
        <label htmlFor="name">{props.label}*</label>
        <Field
          type={props.type}
          id={props.id}
          name={props.name}
          style={props.style}
          className={styles.input}
        />
        <ErrorMessage name={props.name} component={TextError} />
      </div>
    </>
  );
};

export default InputField;
