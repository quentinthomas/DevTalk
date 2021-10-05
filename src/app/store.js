import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/counter/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
