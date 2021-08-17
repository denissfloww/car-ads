import authReducer from './slices/authSlice';
import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import appendReducer from './slices/appendSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    append: appendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
