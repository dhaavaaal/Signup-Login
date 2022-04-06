import { ON_SUBMIT_DATA, ON_LOG_OUT } from "./actionTypes";

const onSubmitData = (userData) => {
  return {
    type: ON_SUBMIT_DATA,
    payload: userData,
  };
};

const onLogOut = () => {
  return {
    type: ON_LOG_OUT,
  };
};

export { onSubmitData, onLogOut };
