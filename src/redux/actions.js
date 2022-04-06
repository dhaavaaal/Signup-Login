import { ON_SUBMIT_DATA } from "./actionTypes";

const onSubmitData = (userData) => {
  return {
    type: ON_SUBMIT_DATA,
    payload: userData,
  };
};

export { onSubmitData };
