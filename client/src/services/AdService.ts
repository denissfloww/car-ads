import axios from 'axios';
import backEndUrl from '../BackEndUrl';

const getUserAds = async (userId: string) => {
  const response = await axios.get(`${backEndUrl}/ad/ads/${userId}`);
  return response.data;
}

const AdService = {
  getUserAds
};

export default AdService;