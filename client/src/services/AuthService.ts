import axios from 'axios'
import backEndUrl from "../BackEndUrl";

interface Creditionals {
    username: string;
    password: string;
}

const login = async (creditionals : Creditionals) => {
    const response = await axios.post(`${backEndUrl}/login`, creditionals);
    return response.data;
}

const AuthService = { login }

export default AuthService;