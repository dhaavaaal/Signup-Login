import { createStore } from 'redux';
import reducerFunction from './userReducer';

const store = createStore(reducerFunction);

export default store;
