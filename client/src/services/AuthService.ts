import axios from "axios";
import { useSelector } from "react-redux";
import backEndUrl from "../BackEndUrl";
import { selectAuthState } from "../redux/slices/authSlice";
import LocalStorageService from "./LocalStorageService";

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

const getUser = async () => {
    const { user } = useSelector(selectAuthState);
    return user ? user : LocalStorageService.getUser()
}

const getJwtToken = async () => {
  return LocalStorageService.getUser().token
}

const AuthService = { login, signup, getUser, getJwtToken };

export default AuthService;
