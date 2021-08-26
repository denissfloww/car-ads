import axios from 'axios';
import backEndUrl from '../BackEndUrl';
import LocalStorageService from './LocalStorageService';

const getUserAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/ads/${userId}`);
  return response.data;
};

const getAds = async (page: number ,size: number) => {
  const response = await axios.get(`${backEndUrl}/ad/ads`, {
    params: {
      page: page,
      size: size,
    }
  });
  return response.data;
};

const getPageCount = async (size: number) => {
  const response = await axios.get(`${backEndUrl}/ad/page/count`, {
    params: {
      size: size,
    }
  });
  return response.data;
};

const getAd = async (adId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/${adId}`);
  return response.data;
};

const checkComparedAd = async (adId: string, userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/compare/check`, {
    params: {
      userId: userId,
      adId: adId,
    },
  });
  return response.data;
};

const checkAdIsFavorite = async (adId: string, userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/favourite/check`, {
    params: {
      userId: userId,
      adId: adId,
    },
  });
  return response.data;
};

const insertAdToCompare = async (adId: string) => {
  const user = LocalStorageService.getUser();
  await axios.post(
    `${backEndUrl}/ad/compare/insert`,
    {
      userId: user.id,
      adId: adId,
    },
    {
      headers: {
        'x-auth-token': user.token,
      },
    },
  );
};

const insertAdToFavourite = async (adId: string) => {
  const user = LocalStorageService.getUser();
  await axios.post(
      `${backEndUrl}/ad/favourite/insert`,
      {
        userId: user.id,
        adId: adId,
      },
      {
        headers: {
          'x-auth-token': user.token,
        },
      },
  );
}

const getUserComparedAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/compare`, {
    params: {
      userId: userId,
    },
  });
  return response.data;
}

const AdService = {
  getUserAds,
  getAds,
  getAd,
  checkComparedAd,
  insertAdToCompare,
  checkAdIsFavorite,
  insertAdToFavourite,
  getUserComparedAds,
  getPageCount
};

export default AdService;
