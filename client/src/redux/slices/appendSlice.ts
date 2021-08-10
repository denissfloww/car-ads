import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { getErrorMsg } from '../../utils/HelperFunc';
import { setAuthError } from './authSlice';
import {Brand} from "../../interfaces/Brand";
import AppendService from "../../services/AppendService";
import {Model} from "../../interfaces/Model";

interface InitialAppendState {
  showModels: boolean;
  showYear: boolean;
  showBody: boolean;
  showEngine: boolean;
  showGeneration: boolean;
  modelValue: any | null;
  brandValue: any | null;
  yearValue: any | null;
  bodyValue: any | null;
  generationValue: any | null;
  brands: Brand[];
  models: Model[];
}

const initialState: InitialAppendState = {
  showModels: false,
  showYear: false,
  showBody: false,
  showEngine: true,
  showGeneration: false,
  modelValue: null,
  brandValue: null,
  yearValue: null,
  bodyValue: null,
  generationValue: null,
  brands: [],
  models: []
};

const appendSlice = createSlice({
  name: 'append',
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<{ brands: Brand[] }>) => {
      state.brands = action.payload.brands;
    },
    setModels: (state, action: PayloadAction<{ models: Model[]}>) => {
      state.models = action.payload.models
    },
    setChangeBrand: (state, action: PayloadAction<string>) => {
      state.showModels = true;
      state.showYear = false;
      state.showBody = false;
      state.showGeneration = false;
      state.brandValue = action.payload;
      state.modelValue = null;
      state.yearValue = null;
      state.bodyValue = null;
    },
    setChangeModel: (state, action: PayloadAction<string>) => {
      state.showYear = true;
      state.showBody = false;
      state.showGeneration = false;
      state.modelValue = action.payload;
      state.yearValue = null;
      state.bodyValue = null;
    },
    setChangeYear: (state, action: PayloadAction<string>) => {
      state.showBody = true;
      state.showGeneration = false;
      state.yearValue = action.payload;
      state.bodyValue = null;
    },
    setChangeBody: (state, action: PayloadAction<string>) => {
      state.showGeneration = true;
      state.bodyValue = action.payload
    }
  },
});

export const { setChangeBrand, setChangeModel, setChangeYear, setBrands, setModels, setChangeBody } = appendSlice.actions;

export const fetchBrands = (): AppThunk => {
  return async dispatch => {
    try{
      const brands: Brand[] = await AppendService.getBrands();
      dispatch(setBrands({ brands: brands }));
    }catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeBrand = (brandValue: string): AppThunk => {
  return async dispatch => {
    try {

      const models: Model[] = await AppendService.getModelsByBrand(brandValue);
      dispatch(setModels( { models } ))

      dispatch(setChangeBrand(brandValue));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeModel = (modelValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeModel(modelValue));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeYear = (yearValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeYear(yearValue));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeBody = (bodyValue: string):AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeBody(bodyValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;
