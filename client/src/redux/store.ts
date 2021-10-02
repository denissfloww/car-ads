import authReducer from './slices/authSlice';
import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import appendReducer from './slices/appendSlice';
import adReducer from "./slices/adSlice"
import notifyReducer from "./slices/notificationsSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    append: appendReducer,
    ad: adReducer,
    notify: notifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
