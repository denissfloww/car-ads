import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ad } from "../../interfaces/Ad";
import { Brand } from "../../interfaces/Brand";
import AdService from "../../services/AdService";
import AppendService from "../../services/AppendService";
import { getErrorMsg } from "../../utils/HelperFunc";
import { AppThunk, RootState } from "../store";
import { setBrands } from "./appendSlice";
import { setAuthError } from "./authSlice";

interface InitialAdState {
  userAds: Ad[],
  ads: Ad[],
  adsLoading: boolean,
  userAdsLoading: boolean,
  error:  string | null;
}

const initialState: InitialAdState = {
  userAds: [],
  ads: [],
  adsLoading: false,
  userAdsLoading: false,
  error: null
}

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    setUserAds: (state, action: PayloadAction<{ userAds: Ad[] }>) => {
      state.userAds = action.payload.userAds;
      state.userAdsLoading = false
    },
    setAds: (state, action: PayloadAction<{ ads: Ad[] }>) => {
      state.ads = action.payload.ads;
      state.adsLoading = false;
    },
    setAdsLoading: state => {
      state.adsLoading = true;
    },
    setUserAdsLoading: state => {
      state.userAdsLoading = true
    }
  }
});

export const {
  setUserAds,
  setAdsLoading,
  setAds,
  setUserAdsLoading
} = adSlice.actions;

export const fetchUserAds = (userId: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setUserAdsLoading())
      const ads: Ad[] = await AdService.getUserAds(userId);
      dispatch(setUserAds({userAds: ads}));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const fetchAds = (): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setAdsLoading())
      const ads: Ad[] = await AdService.getAds();
      dispatch(setAds({ads: ads}))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const selectAdState = (state: RootState) => state.ad;

export default adSlice.reducer;