import authReducer from './slices/authSlice';
import {configureStore, Action} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;