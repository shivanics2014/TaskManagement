import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.ts';
import taskReducer from './taskSlice.ts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
