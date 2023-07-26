import { configureStore } from "@reduxjs/toolkit";
import userReducer from './auth/user.slice'
const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if you have any.
  },
});

export default store;