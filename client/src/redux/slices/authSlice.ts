import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { UserState, CredentialsPayload } from '../types';
import AuthService from '../../services/AuthService';
import LocalStorageService from '../../services/LocalStorageService';
import { History } from 'history';
import { homeLink } from '../../Links';
import { getErrorMsg } from '../../utils/HelperFunc';

interface InitialAuthState {
  user: UserState | null;
  loading: boolean;
  error: string | null;
}

const a = 0;
const initialState: InitialAuthState = {
  user: null,
  loading: false,
  error: null
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
    setAuthLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    removeUser: (state) => {
      state.user = null;
    },
    cancelll: (state) => {
      state.loading = false;
    }
  }
});

export const {
  setUser,
  setAuthLoading,
  cancelll,
  setAuthError,
  clearAuthError,
  removeUser
} = authSlice.actions;

export const login = (
  creditionals: CredentialsPayload,
  history: History
): AppThunk => {
  return async (dispatch) => {
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

export const signup = (
  creditionals: CredentialsPayload,
  history: History
): AppThunk => {
  return async (dispath) => {
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

export const cancel = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(cancelll());
    } catch (e) {
      throw new Error(e);
    }
  };
};

export const logout = (): AppThunk => {
  return (dispatch) => {
    dispatch(removeUser());
    LocalStorageService.removeUser();
  };
};

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
