import {createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";
import {CredentialsPayload} from "../types";
import {History} from "history";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
import {homeLink} from "../../Links";
import {getErrorMsg} from "../../utils/HelperFunc";
import {setAuthError, setAuthLoading, setUser} from "./authSlice";

interface InitialAppendState {
    showModels: boolean
}

const initialState: InitialAppendState = {
    showModels: false
};

const appendSlice = createSlice({
    name: 'append',
    initialState,
    reducers: {
        setModel: state => {
            state.showModels = true;
        }
    }
});

export const { setModel } = appendSlice.actions;

export const changeBrand = (): AppThunk => {
    return async dispatch => {
        try {

        } catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    };
};

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;