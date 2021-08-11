import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { getErrorMsg } from '../../utils/HelperFunc';
import { setAuthError } from './authSlice';
import {Brand} from "../../interfaces/Brand";
import AppendService from "../../services/AppendService";
import {Model} from "../../interfaces/Model";

interface InitialAppendState {
  //show some inputs state
  showModels: boolean;
  showYear: boolean;
  showBody: boolean;
  showGeneration: boolean;
  showEngine: boolean;
  showDrive: boolean;
  showGearBox: boolean;
  showModification: boolean;
  //inputs current value
  brandValue: any | null;
  modelValue: any | null;
  yearValue: any | null;
  bodyValue: any | null;
  generationValue: any | null;
  engineValue:any | null;
  driveValue:any | null;
  gearboxValue: any | null;
  modificationValue: any | null;
  images: any;
  //inputs array value
  brands: Brand[];
  models: Model[];
}

const initialState: InitialAppendState = {
  //show some inputs state
  showModels: false,
  showYear: false,
  showBody: false,
  showGeneration: false,
  showEngine: false,
  showDrive: false,
  showGearBox: false,
  showModification: false,
  //inputs current value
  brandValue: null,
  modelValue: null,
  yearValue: null,
  bodyValue: null,
  generationValue: null,
  engineValue:null,
  driveValue:null,
  gearboxValue: null,
  modificationValue: null,
  images: null,
  //inputs array value
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
    setImages: (state, action: PayloadAction<{ images: any}>) => {
      state.images = action.payload.images
    },
    setChangeBrand: (state, action: PayloadAction<string>) => {
      state.showModels = true;
      state.showYear = false;
      state.showBody = false;
      state.showGeneration = false;
      state.showEngine = false;
      state.showDrive = false;
      state.showGearBox = false;
      state.showModification = false;
      state.brandValue = action.payload;
      state.modelValue = null;
      state.yearValue = null;
      state.bodyValue = null;
      state.generationValue = null;
      state.engineValue = null;
      state.driveValue = null;
      state.gearboxValue = null;

    },
    setChangeModel: (state, action: PayloadAction<string>) => {
      state.showYear = true;
      state.showBody = false;
      state.showGeneration = false;
      state.showEngine = false;
      state.showDrive = false;
      state.showGearBox = false;
      state.showModification = false;
      state.modelValue = action.payload;
      state.yearValue = null;
      state.bodyValue = null;
      state.generationValue = null;
      state.engineValue = null;
      state.driveValue = null;
      state.gearboxValue = null;
    },
    setChangeYear: (state, action: PayloadAction<string>) => {
      state.showBody = true;
      state.showGeneration = false;
      state.showEngine = false;
      state.showDrive = false;
      state.showGearBox = false;
      state.showModification = false;
      state.yearValue = action.payload;
      state.bodyValue = null;
      state.generationValue = null;
      state.engineValue = null;
      state.driveValue = null;
      state.gearboxValue = null;
    },
    setChangeBody: (state, action: PayloadAction<string>) => {
      state.showGeneration = true;
      state.showEngine = false;
      state.showDrive = false;
      state.showGearBox = false;
      state.showModification = false;
      state.bodyValue = action.payload;
      state.generationValue = null;
      state.engineValue = null;
      state.driveValue = null;
      state.gearboxValue = null;
    },
    setChangeGeneration: (state, action: PayloadAction<string>) => {
      state.showEngine = true;
      state.showDrive = false;
      state.showGearBox = false;
      state.showModification = false;
      state.generationValue = action.payload;
      state.engineValue = null;
      state.driveValue = null;
      state.gearboxValue = null;
    },
    setChangeEngine: (state, action: PayloadAction<string>) => {
      state.showDrive = true;
      state.showGearBox = false;
      state.showModification = false;
      state.engineValue = action.payload
      state.driveValue = null;
      state.gearboxValue = null;
    },
    setChangeDrive: (state, action: PayloadAction<string>) => {
      state.showGearBox = true;
      state.showModification = false;
      state.driveValue = action.payload;
      state.gearboxValue = null;
    },
    setChangeGearBox: (state, action: PayloadAction<string>) => {
      state.showModification = true;
      state.gearboxValue = action.payload
    },
    setChangeModification: (state, action: PayloadAction<string>) => {
      state.modificationValue = action.payload
    }
  },
});

export const {
  setChangeBrand,
  setChangeModel,
  setChangeYear,
  setBrands,
  setModels,
  setChangeBody,
  setChangeGeneration,
  setChangeEngine,
  setChangeDrive,
  setChangeGearBox,
  setChangeModification,
  setImages
} = appendSlice.actions;

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

export const changeGeneration = (generationValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeGeneration(generationValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeEngine = (engineValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeEngine(engineValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeDrive = (driveValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeDrive(driveValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeGearBox = (gearboxValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeGearBox(gearboxValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeModification = (gearboxValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeModification(gearboxValue))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const changeImages = (images: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setImages({images}))
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  }
}

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;
