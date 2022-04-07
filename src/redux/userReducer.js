import { ON_LOG_OUT, ON_SUBMIT_DATA } from "./actionTypes";

const initialValues = {
  users: {
    avatar: "",
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    isLoggedIn: false,
  },
};

const reducerFunction = (state = initialValues, action) => {
  console.log(state);
  switch (action.type) {
    case ON_SUBMIT_DATA:
      console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };
    case ON_LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        users: initialValues,
      };
    default:
      return state;
  }
};

export default reducerFunction;
