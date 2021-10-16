import adSlice from "./slices/adSlice";
import authReducer from './slices/authSlice';
import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import appendReducer from './slices/appendSlice';
import adReducer from "./slices/adSlice"
import notifySlice from "./slices/notifySlice";
import newsSlice from "./slices/newsSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    append: appendReducer,
    ad: adReducer,
    notify: notifySlice,
    news: newsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
