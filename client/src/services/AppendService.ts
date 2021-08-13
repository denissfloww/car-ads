import axios from "axios";
import backEndUrl from "../BackEndUrl";

const getBrands = async () => {
    const response = await axios.get(`${backEndUrl}/append/brands`);
    return response.data;
};

const getModels = async (brandId: string) => {
    const response = await axios.get(`${backEndUrl}/append/models`,
        {
            params:
                {
                    brandId: 1
                }
        }
    );
    return response.data;
}

const getYears = async (modelId: string) => {
    const response = await axios.get(`${backEndUrl}/append/years`,{
        params: {
            modelId: 1
        }
    })

    return response.data
}

const AppendService = { getBrands, getModels, getYears };

export default AppendService;