import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import postReducer from '../reducers/postReducer';
import signupReducer from '../reducers/signupReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
    post: postReducer,
  },
});
