import axios from "axios";
import backEndUrl from "../BackEndUrl";

const getBrands = async () => {
    const response = await axios.get(`${backEndUrl}/append/brands`);
    return response.data;
};

const getModelsByBrand = async (brandId: string) => {
    const response = await axios.get(`${backEndUrl}/append/models/1`);
    return response.data;
}

const AppendService = { getBrands, getModelsByBrand };

export default AppendService;