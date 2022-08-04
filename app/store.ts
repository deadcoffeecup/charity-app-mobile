import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form';

export const store = configureStore({
  reducer: {
    formValues: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
