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

const deleteAd = async (id: any) => {
  const user = LocalStorageService.getUser();
  await axios.delete(`${backEndUrl}/ad/delete`, {
    headers: {
      'x-auth-token': user.token,
    },
    data: {
      id: id,
    },
  });
}

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

const deleteCompareUserAd = async (id: string) => {
  const user = LocalStorageService.getUser();
  await axios.delete(`${backEndUrl}/ad/compare/delete/${id}`,
      {
        headers: {
          'x-auth-token': user.token,
        },
      }
  );
}

const deleteFavouriteAd = async (id: string) => {
  const user = LocalStorageService.getUser();
  await axios.delete(`${backEndUrl}/ad/favourite/delete/${id}`,
      {
        headers: {
          'x-auth-token': user.token,
        },
      }
  );
}

const updateAdStatus = async (id: string, status: string) => {
  const user = LocalStorageService.getUser();
  await axios.put(
      `${backEndUrl}/ad/update`,
      {
        id: id,
        status: status,
      },
      {
        headers: {
          'x-auth-token': user.token,
        },
      },
  );
  // await axios.put(`${backEndUrl}/ad/update`,
  //     {
  //       id: id,
  //       status: status,
  //     },
  //     {
  //       headers: {
  //         'x-auth-token': user.token,
  //       }
  //     }
  // );
}

const getUserComparedAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/compare`, {
    params: {
      userId: userId,
    },
  });
  return response.data;
}

const getUserFavouriteAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/favourite`, {
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
  getPageCount,
  deleteAd,
  deleteCompareUserAd,
  getUserFavouriteAds,
  deleteFavouriteAd,
  updateAdStatus
};

export default AdService;
