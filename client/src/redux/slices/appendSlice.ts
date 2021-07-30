import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../store";
import {CredentialsPayload, UserState} from "../types";
import {History} from "history";
import AuthService from "../../services/AuthService";
import LocalStorageService from "../../services/LocalStorageService";
import {homeLink} from "../../Links";
import {getErrorMsg} from "../../utils/HelperFunc";
import {setAuthError, setAuthLoading, setUser} from "./authSlice";

interface InitialAppendState {
    showModels: boolean
    showYear: boolean
    modelValue: any | null;
    brandValue: any | null;
    yearValue: any | null;
    bodyValue: any | null;
    showBody: boolean
}

const initialState: InitialAppendState = {
    showModels: false,
    showYear: false,
    showBody: false,
    modelValue: null,
    brandValue: null,
    yearValue: null,
    bodyValue: null,

};

const appendSlice = createSlice({
    name: 'append',
    initialState,
    reducers: {
        setChangeBrand: (state, action: PayloadAction<string>) => {
            state.showModels = true;
            state.showYear = false;
            state.showBody = false;
            state.brandValue = action.payload;
            state.modelValue = null;
            state.yearValue = null;
            state.bodyValue = null;
        },
        setChangeModel: (state, action: PayloadAction<string>) => {
            state.showYear = true;
            state.showBody = false;
            state.modelValue = action.payload;
            state.yearValue = null;
            state.bodyValue = null;
        },
        setChangeYear: (state, action: PayloadAction<string>) => {
            state.showBody = true
            state.yearValue = action.payload;
            state.bodyValue = null;
        }
    }
});

export const { setChangeBrand, setChangeModel, setChangeYear } = appendSlice.actions;

export const changeBrand = (brandValue: string): AppThunk => {
    return async dispatch => {
        try {
            dispatch(setChangeBrand(brandValue))
        } catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    };
};

export const changeModel = (modelValue: string): AppThunk => {
    return async dispatch => {
        try{
            dispatch(setChangeModel(modelValue))
        }catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    }
}

export const changeYear = (yearValue: string): AppThunk => {
    return async dispatch => {
        try{
            dispatch(setChangeYear(yearValue))
        }catch (e) {
            dispatch(setAuthError(getErrorMsg(e)));
        }
    }
}

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;