import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { CredentialsPayload, UserState } from '../types';
import AuthService from '../../services/AuthService';
import LocalStorageService from '../../services/LocalStorageService';
import { History } from 'history';
import { homeLink, loginLink } from '../../Links';
import { getErrorMsg } from '../../utils/HelperFunc';
import {push} from 'react-router-redux'
import {fetchUserAds} from "./adSlice";

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setAuthLoading: state => {
      state.loading = true;
      state.error = null;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuthError: state => {
      state.error = null;
    },
    removeUser: state => {
      state.user = null;
    },
  },
});

export const { setUser, setAuthLoading, setAuthError, clearAuthError, removeUser } = authSlice.actions;

export const login = (creditionals: CredentialsPayload, history: History): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setAuthLoading());
      const userData = await AuthService.login(creditionals);
      dispatch(setUser(userData));
      LocalStorageService.saveUser(userData);
      history.push(homeLink);
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const signup = (creditionals: CredentialsPayload, history: History): AppThunk => {
  return async dispath => {
    try {
      dispath(setAuthLoading());
      const userData = await AuthService.signup(creditionals);
      dispath(setUser(userData));
      LocalStorageService.saveUser(userData);

      history.push(homeLink);
    } catch (e) {
      dispath(setAuthError(getErrorMsg(e)));
    }
  };
};

export const logout = (history: any): AppThunk => {
  return dispatch => {
    dispatch(removeUser());
    LocalStorageService.removeUser();
    push(loginLink)
  };
};

export const autoLogin = (): AppThunk => {
  return (dispatch) => {
    const loggedUser = LocalStorageService.getUser();
    if (loggedUser) {
      dispatch(setUser(loggedUser));
      dispatch(fetchUserAds(loggedUser.id));
    }
  };
};

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
