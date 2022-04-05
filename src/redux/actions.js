import { ON_SUBMIT_DATA } from './actionTypes';

const onSubmitData = (userData, isLoggedIn) => {
  return {
    type: ON_SUBMIT_DATA,
    payload: userData,
  };
};

export { onSubmitData };
