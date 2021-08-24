import axios from 'axios';
import backEndUrl from '../BackEndUrl';

const getUserAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/ads/${userId}`);
  return response.data;
}

const getAds = async () => {
  const response = await axios.get(`${backEndUrl}/ad/ads`);
  return response.data;
}

const getAd = async (adId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/${adId}`);
  return response.data;
}

const AdService = {
  getUserAds,
  getAds,
  getAd
};

export default AdService;