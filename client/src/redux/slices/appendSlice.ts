import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { getErrorMsg } from '../../utils/HelperFunc';
import { setAuthError } from './authSlice';
import { Brand } from '../../interfaces/Brand';
import AppendService from '../../services/AppendService';
import { Model } from '../../interfaces/Model';
import { Generation } from '../../interfaces/Generation';
import { Engine } from '../../interfaces/Engine';
import { Drive } from '../../interfaces/Drive';
import { Gearbox } from '../../interfaces/Gearbox';
import { Modification } from '../../interfaces/Modification';
import { successAppendLink } from '../../Links';
import { History } from 'history';

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
  engineValue: any | null;
  driveValue: any | null;
  gearboxValue: any | null;
  modificationValue: any | null;
  images: any;
  vinNumber: string | null;
  mileage: string | null;
  color: string | null;
  comment: string | null;
  phone: string | null;
  countOwners: string | null;
  price: string | null;
  //inputs array value
  brands: Brand[];
  models: Model[];
  years: number[];
  bodies: Body[];
  generations: Generation[];
  engines: Engine[];
  drives: Drive[];
  gearboxes: Gearbox[];
  modifications: Modification[];
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
  engineValue: null,
  driveValue: null,
  gearboxValue: null,
  modificationValue: null,
  images: null,
  vinNumber: 'test',
  mileage: '4234',
  color: null,
  comment: null,
  phone: '9999999999',
  countOwners: null,
  price: '200000',
  //inputs array value
  brands: [],
  models: [],
  years: [],
  bodies: [],
  generations: [],
  engines: [],
  drives: [],
  gearboxes: [],
  modifications: [],
};

const appendSlice = createSlice({
  name: 'append',
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<{ brands: Brand[] }>) => {
      state.brands = action.payload.brands;
    },
    setModels: (state, action: PayloadAction<{ models: Model[] }>) => {
      state.models = action.payload.models;
    },
    setYears: (state, action: PayloadAction<{ years: number[] }>) => {
      state.years = action.payload.years;
    },
    setBodies: (state, action: PayloadAction<{ bodies: Body[] }>) => {
      state.bodies = action.payload.bodies;
    },
    setGenerations: (state, action: PayloadAction<{ generations: Generation[] }>) => {
      state.generations = action.payload.generations;
    },
    setEngines: (state, action: PayloadAction<{ engines: Engine[] }>) => {
      state.engines = action.payload.engines;
    },
    setDrives: (state, action: PayloadAction<{ drives: Drive[] }>) => {
      state.drives = action.payload.drives;
    },
    setGearboxes: (state, action: PayloadAction<{ gearboxes: Gearbox[] }>) => {
      state.gearboxes = action.payload.gearboxes;
    },
    setModifications: (state, action: PayloadAction<{ modifications: Modification[] }>) => {
      state.modifications = action.payload.modifications;
    },
    setImages: (state, action: PayloadAction<{ images: any }>) => {
      state.images = action.payload.images;
    },
    setVinNumber: (state, action: PayloadAction<{ vinNumber: any }>) => {
      state.vinNumber = action.payload.vinNumber;
    },
    setMileage: (state, action: PayloadAction<{ mileage: any }>) => {
      state.mileage = action.payload.mileage;
    },
    setColor: (state, action: PayloadAction<{ color: any }>) => {
      state.color = action.payload.color;
    },
    setComment: (state, action: PayloadAction<{ comment: any }>) => {
      state.comment = action.payload.comment;
    },
    setPhone: (state, action: PayloadAction<{ phone: any }>) => {
      state.phone = action.payload.phone;
    },
    setCountOwners: (state, action: PayloadAction<{ countOwners: any }>) => {
      state.countOwners = action.payload.countOwners;
    },
    setPrice: (state, action: PayloadAction<{ price: any }>) => {
      state.price = action.payload.price;
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
      state.engineValue = action.payload;
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
      state.gearboxValue = action.payload;
    },
    setChangeModification: (state, action: PayloadAction<string>) => {
      state.modificationValue = action.payload;
    },
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
  setImages,
  setYears,
  setBodies,
  setGenerations,
  setEngines,
  setDrives,
  setGearboxes,
  setModifications,
  setVinNumber,
  setColor,
  setPhone,
  setMileage,
  setComment,
  setPrice,
  setCountOwners,
} = appendSlice.actions;

export const fetchBrands = (): AppThunk => {
  return async dispatch => {
    try {
      const brands: Brand[] = await AppendService.getBrands();
      dispatch(setBrands({ brands: brands }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeBrand = (brandValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeBrand(brandValue));

      const models: Model[] = await AppendService.getModels(brandValue);
      dispatch(setModels({ models }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeModel = (modelValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeModel(modelValue));
      const years: number[] = await AppendService.getYears(modelValue);
      dispatch(setYears({ years }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeYear = (yearValue: string, modelValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeYear(yearValue));
      const bodies: Body[] = await AppendService.getBodies(modelValue, yearValue);
      dispatch(setBodies({ bodies }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeBody = (bodyValue: string, year: string, modelValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeBody(bodyValue));
      const generations: Generation[] = await AppendService.getGenerations(modelValue, year, bodyValue);
      dispatch(setGenerations({ generations }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeGeneration = (generationValue: string, modelValue: string, bodyValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeGeneration(generationValue));
      console.log(generationValue)
      const engines: Engine[] = await AppendService.getEngines(modelValue, bodyValue, generationValue);

      dispatch(setEngines({ engines }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeEngine = (engineValue: string, modelValue: string, bodyValue: string, generationValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeEngine(engineValue));
      const drives: Drive[] = await AppendService.getDrives(modelValue, bodyValue, generationValue, engineValue);
      dispatch(setDrives({ drives }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeDrive = (
  driveValue: string,
  modelValue: string,
  bodyValue: string,
  generationValue: string,
  engineValue: string,
): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeDrive(driveValue));
      const gearboxes: Gearbox[] = await AppendService.getGearboxes(modelValue, bodyValue, generationValue, engineValue, driveValue);
      dispatch(setGearboxes({ gearboxes }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeGearBox = (
  gearboxValue: string,
  modelValue: string,
  bodyValue: string,
  generationValue: string,
  engineValue: string,
  driveValue: string,
): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeGearBox(gearboxValue));
      const modifications: Modification[] = await AppendService.getModifications(
        modelValue,
        bodyValue,
        generationValue,
        engineValue,
        driveValue,
        gearboxValue,
      );
      dispatch(setModifications({ modifications }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeModification = (modificationValue: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setChangeModification(modificationValue));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeImages = (images: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setImages({ images }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeVinNumber = (vinNumber: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setVinNumber({ vinNumber }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeMileage = (mileage: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setMileage({ mileage }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeColor = (color: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setColor({ color }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeComment = (comment: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setComment({ comment }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changePhone = (phone: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setPhone({ phone }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changeCountOwners = (countOwners: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setCountOwners({ countOwners }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const changePrice = (price: any): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setPrice({ price }));
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const appendAdd = (
  history: History,
  modificationId: any,
  vinNumber: any,
  images: any,
  mileage: any,
  color: any,
  comment: any,
  phone: any,
  countOwners: any,
  price: any,
): AppThunk => {
  return async dispatch => {
    try {
      await AppendService.appendAdd(modificationId, vinNumber, images, mileage, color, comment, phone, countOwners, price);
      history.push(successAppendLink);
    } catch (e) {
      dispatch(setAuthError(getErrorMsg(e)));
    }
  };
};

export const selectAppendState = (state: RootState) => state.append;

export default appendSlice.reducer;
