import axios from 'axios';
import backEndUrl from '../BackEndUrl';
import {fetchBrands} from "../redux/slices/appendSlice";
import {useDispatch} from "react-redux";

interface Creditionals {
  username: string;
  password: string;
}

const login = async (creditionals: Creditionals) => {
  const response = await axios.post(`${backEndUrl}/login`, creditionals);
  return response.data;
};

const signup = async (creditionals: Creditionals) => {
  const response = await axios.post(`${backEndUrl}/signup`, creditionals);
  return response.data;
};

const AuthService = { login, signup };

export default AuthService;
