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
    showYear: boolean
    modelValue: string | null;
    showBody: boolean
}

const initialState: InitialAppendState = {
    showModels: false,
    showYear: false,
    modelValue: null,
    showBody: false,
};

const appendSlice = createSlice({
    name: 'append',
    initialState,
    reducers: {
        setChangeBrand: state => {
            state.showModels = true;
            state.showYear = false;
            state.showBody = false;
            state.modelValue = null
        },
        setChangeModel: state => {
            state.showYear = true;
            state.showBody = false
        },
        setChangeYear: state => {
            state.showBody = true
        }
    }
});

export const { setChangeBrand, setChangeModel, setChangeYear } = appendSlice.actions;

export const changeBrand = (): AppThunk => {
    return async dispatch => {
        try {
            dispatch(setChangeBrand())
        } catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    };
};

export const changeModel = (): AppThunk => {
    return async dispatch => {
        try{
            dispatch(setChangeModel())
        }catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    }
}

export const changeYear = (): AppThunk => {
    return async dispatch => {
        try{
            dispatch(setChangeYear())
        }catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    }
}

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;