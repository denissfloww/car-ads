import axios from 'axios';
import backendUrl from '../BackendUrl';
import AuthService from "./AuthService";
import LocalStorageService from "./LocalStorageService";

const getBrands = async () => {
  const response = await axios.get(`${backendUrl}/append/brands`);
  return response.data;
};

const getModels = async (brandValue: any) => {
  const response = await axios.get(`${backendUrl}/append/models`, {
    params: {
      brandId: brandValue.id,
    },
  });
  return response.data;
};

const getYears = async (modelValue: any) => {
  const response = await axios.get(`${backendUrl}/append/years`, {
    params: {
      modelId: modelValue.id,
    },
  });

  return response.data;
};

const getBodies = async (modelValue: any, year: string) => {
  const response = await axios.get(`${backendUrl}/append/bodies`, {
    params: {
      modelId: modelValue.id,
      year: year,
    },
  });

  return response.data;
};

const getGenerations = async (modelValue: any, year: string, bodyValue: any) => {
  const response = await axios.get(`${backendUrl}/append/generations`, {
    params: {
      modelId: modelValue.id,
      year: year,
      bodyId: bodyValue.id,
    },
  });

  return response.data;
};

const getEngines = async (modelValue: any, bodyValue: any, generationId: any) => {
  const response = await axios.get(`${backendUrl}/append/engines`, {
    params: {
      modelId: modelValue.id,
      bodyId: bodyValue.id,
      generationId: generationId,
    },
  });

  return response.data;
};

const getDrives = async (modelValue: any, bodyValue: any, generationId: any, engineValue: any) => {
  const response = await axios.get(`${backendUrl}/append/drives`, {
    params: {
      modelId: modelValue.id,
      bodyId: bodyValue.id,
      generationId: generationId,
      engineId: engineValue.id,
    },
  });

  return response.data;
};

const getGearboxes = async (modelValue: any, bodyValue: any, generationId: any, engineValue: any, driveValue: any) => {
  const response = await axios.get(`${backendUrl}/append/gearboxes`, {
    params: {
      modelId: modelValue.id,
      bodyId: bodyValue.id,
      generationId: generationId,
      engineId: engineValue.id,
      driveId: driveValue.id,
    },
  });

  return response.data;
};

const getModifications = async (
  modelValue: any,
  bodyValue: any,
  generationId: any,
  engineValue: any,
  driveValue: any,
  gearboxValue: any,
) => {
  const response = await axios.get(`${backendUrl}/append/modifications`, {
    params: {
      modelId: modelValue.id,
      bodyId: bodyValue.id,
      generationId: generationId,
      engineId: engineValue.id,
      driveId: driveValue.id,
      gearboxId: gearboxValue.id,
    },
  });

  return response.data;
};

const appendAdd = async (
  modificationId: any,
  vinNumber: any,
  images: any,
  mileage: any,
  color: any,
  comment: any,
  phone: any,
  countOwners: any,
  price: any,
  yearRelease: any
) => {
  const user = LocalStorageService.getUser()
  console.log(user.token)
  console.log(modificationId, vinNumber, images, mileage, color, comment, phone, countOwners, price);

  const bodyFormData = new FormData();
  images.forEach((image: any)=>{
    bodyFormData.append("images", image);
  });

  bodyFormData.append("modificationId", modificationId);
  bodyFormData.append("mileage", mileage);
  bodyFormData.append("vin", vinNumber);
  bodyFormData.append("color", color);
  bodyFormData.append("description", comment);
  bodyFormData.append("phone", phone);
  bodyFormData.append("ownersСount", countOwners);
  bodyFormData.append("price", price);
  bodyFormData.append("userId", user.id);
  bodyFormData.append("yearRelease", yearRelease);

  await axios.post(
    `${backendUrl}/ad/upload`,
    bodyFormData,{
    headers:{
      'x-auth-token':user.token,
      'Content-Type': 'multipart/form-data'
    }
  })

};

const AppendService = {
  getBrands,
  getModels,
  getYears,
  getBodies,
  getGenerations,
  getEngines,
  getDrives,
  getGearboxes,
  getModifications,
  appendAdd,
};

export default AppendService;
