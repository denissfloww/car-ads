import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { Ad } from '../../interfaces/Ad';
import { Brand } from '../../interfaces/Brand';
import { UserCompareAd } from '../../interfaces/UserCompareAd';
import { catalogLink } from '../../Links';
import AdService from '../../services/AdService';
import AppendService from '../../services/AppendService';
import { getErrorMsg } from '../../utils/HelperFunc';
import { AppThunk, RootState } from '../store';
import { setBrands } from './appendSlice';
import { setAuthError } from './authSlice';
import LocalStorageService from '../../services/LocalStorageService';
import FavouriteAd from '../../interfaces/FavouriteAd';
import {notify} from "./notifySlice";

interface InitialAdState {
  userAds: Ad[];
  ads: Ad[];
  adsLoading: boolean;
  userAdsLoading: boolean;
  error: string | null;
  ad: Ad | null;
  adLoading: boolean;
  isAdAlreadyComparing: boolean;
  isAdAlreadyFavourite: boolean;
  favouriteAdsLoading: boolean;
  userComparedAds: UserCompareAd[];
  favouriteAds: FavouriteAd[];
  countPage: number;
}

const initialState: InitialAdState = {
  userAds: [],
  ads: [],
  adsLoading: false,
  userAdsLoading: false,
  error: null,
  ad: null,
  adLoading: false,
  isAdAlreadyComparing: false,
  isAdAlreadyFavourite: false,
  userComparedAds: [],
  favouriteAds: [],
  favouriteAdsLoading: false,
  countPage: 1,
};

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    setUserAds: (state, action: PayloadAction<{ userAds: Ad[] }>) => {
      state.userAds = action.payload.userAds;
      state.userAdsLoading = false;
    },
    setAds: (state, action: PayloadAction<{ ads: Ad[] }>) => {
      state.ads = action.payload.ads;
      state.adsLoading = false;
    },
    setAdsLoading: state => {
      state.adsLoading = true;
    },
    setUserAdsLoading: state => {
      state.userAdsLoading = true;
    },
    setAdLoading: state => {
      state.adLoading = true;
    },
    setAd: (state, action: PayloadAction<{ ad: Ad }>) => {
      state.ad = action.payload.ad;
      state.adLoading = false;
    },
    setCheckAdAlreadyComparing: (state, action: PayloadAction<{ checkAdAlreadyCompare: any }>) => {
      state.isAdAlreadyComparing = action.payload.checkAdAlreadyCompare;
    },
    setCheckAdAlreadyFavourite: (state, action: PayloadAction<{ isAdAlreadyFavourite: any }>) => {
      state.isAdAlreadyFavourite = action.payload.isAdAlreadyFavourite;
    },
    setUserComparedAds: (state, action: PayloadAction<{ userComparedAds: UserCompareAd[] }>) => {
      state.userComparedAds = action.payload.userComparedAds;
    },
    setCountPage: (state, action: PayloadAction<{ countPage: number }>) => {
      state.countPage = action.payload.countPage;
    },
    setFavouriteAdsLoading: state => {
      state.favouriteAdsLoading = true;
    },
    setFavouriteAds: (state, action: PayloadAction<{ favouriteAds: FavouriteAd[] }>) => {
      state.favouriteAds = action.payload.favouriteAds;
      state.favouriteAdsLoading = false;
    },
  },
});

export const {
  setUserAds,
  setAdsLoading,
  setAds,
  setUserAdsLoading,
  setAdLoading,
  setAd,
  setCheckAdAlreadyComparing,
  setUserComparedAds,
  setCheckAdAlreadyFavourite,
  setCountPage,
  setFavouriteAdsLoading,
  setFavouriteAds,
} = adSlice.actions;

export const fetchUserAds = (userId: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setUserAdsLoading());
      const ads: Ad[] = await AdService.getUserAds(userId);
      dispatch(setUserAds({ userAds: ads }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const fetchAds = (page: number, size: number): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setAdsLoading());
      const countPage: number = await AdService.getPageCount(size);
      dispatch(setCountPage({ countPage }));
      const ads: Ad[] = await AdService.getAds(page, size);
      dispatch(setAds({ ads: ads }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const fetchAd = (adId: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setAdLoading());
      const ad: Ad = await AdService.getAd(adId);
      dispatch(setAd({ ad }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const checkCompareAd = (adId: string, userId: string): AppThunk => {
  return async dispatch => {
    try {
      const checkAdAlreadyCompare = await AdService.checkComparedAd(adId, userId);
      dispatch(setCheckAdAlreadyComparing({ checkAdAlreadyCompare }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const checkFavouriteAd = (adId: string, userId: string): AppThunk => {
  return async dispatch => {
    try {
      const isAdAlreadyFavourite = await AdService.checkAdIsFavorite(adId, userId);
      dispatch(setCheckAdAlreadyFavourite({ isAdAlreadyFavourite }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const insertAdToCompare = (adId: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.insertAdToCompare(adId);
      dispatch(setCheckAdAlreadyComparing({ checkAdAlreadyCompare: true }));
      dispatch(notify('Добавленно к сравнению', 'success'))
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const deleteAdFromCompare = (id: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.deleteCompareUserAd(id);
      const userId = LocalStorageService.getUser().id;
      const userComparedAds: UserCompareAd[] = await AdService.getUserComparedAds(userId);
      dispatch(setUserComparedAds({ userComparedAds }));
      dispatch(notify('Удалено из сравнений', 'success'))
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const insertAdToFavourite = (adId: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.insertAdToFavourite(adId);
      dispatch(setCheckAdAlreadyFavourite({ isAdAlreadyFavourite: true }));
      dispatch(notify('Добавленно в избранное', 'success'))
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const fetchUserCompareAds = (userId: string): AppThunk => {
  return async dispatch => {
    try {
      const userComparedAds: UserCompareAd[] = await AdService.getUserComparedAds(userId);
      dispatch(setUserComparedAds({ userComparedAds }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const deleteAd = (adId: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.deleteAd(adId);
      const userId = LocalStorageService.getUser().id;
      const ads: Ad[] = await AdService.getUserAds(userId);
      dispatch(setUserAds({ userAds: ads }));
      dispatch(notify('Объявленние удалено!', 'success'))
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const fetchFavouriteAds = (userId: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setFavouriteAdsLoading());
      const favouriteAds: FavouriteAd[] = await AdService.getUserFavouriteAds(userId);
      dispatch(setFavouriteAds({ favouriteAds }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const deleteAdFromFavourite= (id: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.deleteFavouriteAd(id);
      const user = LocalStorageService.getUser();
      dispatch(setFavouriteAdsLoading());
      const favouriteAds: FavouriteAd[] = await AdService.getUserFavouriteAds(user.id);
      dispatch(notify('Удалено из избранного', 'success'))
      dispatch(setFavouriteAds({ favouriteAds }));
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  };
};

export const updateAdStatus = (id: string, status: string): AppThunk => {
  return async dispatch => {
    try {
      await AdService.updateAdStatus(id, status);
      dispatch(setUserAdsLoading());
      const user = LocalStorageService.getUser();
      const ads: Ad[] = await AdService.getUserAds(user.id);
      dispatch(setUserAds({ userAds: ads }))
      dispatch(notify('Статус обновлен!', 'success'))
    } catch (e) {
      dispatch(notify(getErrorMsg(e), 'error'))
    }
  }
}

export const selectAdState = (state: RootState) => state.ad;

export default adSlice.reducer;
