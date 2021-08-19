import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ad } from "../../interfaces/Ad";
import { Brand } from "../../interfaces/Brand";
import AdService from "../../services/AdService";
import AppendService from "../../services/AppendService";
import { getErrorMsg } from "../../utils/HelperFunc";
import { AppThunk, RootState } from "../store";
import { setBrands } from "./appendSlice";
import { setAuthError } from "./authSlice";

interface InitialAppendState {
  userAds: Ad[]
}

const initialState: InitialAppendState = {
  userAds: []
}

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    setAds: (state, action: PayloadAction<{ userAds: Ad[] }>) => {
      state.userAds = action.payload.userAds;
    },
  }
});

export const {
  setAds
} = adSlice.actions;

export const fetchUserAds = (userId: string): AppThunk => {
  return async dispatch => {
    try {
      const ads: Ad[] = await AdService.getUserAds(userId);
      dispatch(setAds({userAds: ads}));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const selectAdState = (state: RootState) => state.append;

export default adSlice.reducer;