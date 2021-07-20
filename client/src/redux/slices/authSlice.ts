import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

export interface UserState {
    id: string;
    username: string;
    token: string;
}

interface InitialAuthState {
    user: UserState | null;
    loading: boolean;
    error: string | null;
}

const initialState: InitialAuthState = {
    user: null,
    loading: false,
    error: null,
};

export interface CredentialsPayload {
    username: string;
    password: string;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload;
            state.loading = false;
        },
        testing: (state) => {
            state.loading = true
        },
        cancelll: (state) => {
            state.loading = false
        }
    }
})

export const { setUser, testing, cancelll } = authSlice.actions

export const login = (creditionals: CredentialsPayload) : AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(testing())
        }
        catch (e) {

        }
    }
}

export const cancel = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(cancelll())
        }
        catch (e) {

        }
    }
}

export const selectAuthState = (state: RootState) => state.auth

export default authSlice.reducer;