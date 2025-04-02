import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootRedcuer';
import { authApi } from '@/features/api/authApi';




export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});
