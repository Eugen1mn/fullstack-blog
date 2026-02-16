import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './formReducers';

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
