import { configureStore } from '@reduxjs/toolkit';
import { loginApi } from './login/login';

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});