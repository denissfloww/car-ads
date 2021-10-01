import axios from 'axios';
import backendUrl from '../BackendUrl';
import LocalStorageService from './LocalStorageService';

const getUserAds = async (userId: string) => {
  const response = await axios.get(`${backendUrl}/ad/ads/${userId}`);
  return response.data;
};

const getAds = async (page: number ,size: number) => {
  const response = await axios.get(`${backendUrl}/ad/ads`, {
    params: {
      page: page,
      size: size,
    }
  });
  return response.data;
};

const deleteAd = async (id: any) => {
  const user = LocalStorageService.getUser();
  await axios.delete(`${backendUrl}/ad/delete`, {
    headers: {
      'x-auth-token': user.token,
    },
    data: {
      id: id,
    },
  });
}

const getPageCount = async (size: number) => {
  const response = await axios.get(`${backendUrl}/ad/page/count`, {
    params: {
      size: size,
    }
  });
  return response.data;
};

const getAd = async (adId: string) => {
  const response = await axios.get(`${backendUrl}/ad/${adId}`);
  return response.data;
};

const checkComparedAd = async (adId: string, userId: string) => {
  const response = await axios.get(`${backendUrl}/ad/compare/check`, {
    params: {
      userId: userId,
      adId: adId,
    },
  });
  return response.data;
};

const checkAdIsFavorite = async (adId: string, userId: string) => {
  const response = await axios.get(`${backendUrl}/ad/favourite/check`, {
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
    `${backendUrl}/ad/compare/insert`,
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
      `${backendUrl}/ad/favourite/insert`,
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
  await axios.delete(`${backendUrl}/ad/compare/delete/${id}`,
      {
        headers: {
          'x-auth-token': user.token,
        },
      }
  );
}

const deleteFavouriteAd = async (id: string) => {
  const user = LocalStorageService.getUser();
  await axios.delete(`${backendUrl}/ad/favourite/delete/${id}`,
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
      `${backendUrl}/ad/update`,
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
  // await axios.put(`${backendUrl}/ad/update`,
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
  const response = await axios.get(`${backendUrl}/ad/compare`, {
    params: {
      userId: userId,
    },
  });
  return response.data;
}

const getUserFavouriteAds = async (userId: string) => {
  const response = await axios.get(`${backendUrl}/ad/favourite`, {
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
