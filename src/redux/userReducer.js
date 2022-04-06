import { ON_SUBMIT_DATA } from "./actionTypes";

const initialValues = {
  isLoggedIn: false,
  users: {
    name: "Simform Solutions",
    email: "simform@simformsolutions.com",
    phonenumber: "9876730828",
    password: "",
    confirmpassword: "",
  },
};

const reducerFunction = (state = initialValues, action) => {
  switch (action.type) {
    case ON_SUBMIT_DATA:
      console.log(action.payload);
      return {
        users: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducerFunction;
