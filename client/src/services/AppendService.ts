import axios from "axios";
import backEndUrl from "../BackEndUrl";

const getBrands = async () => {
    const response = await axios.get(`${backEndUrl}/append/brands`);
    return response.data;
};

const getModels = async (brandValue: string) => {
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

const getYears = async (modelValue: any) => {
    const modelId = JSON.stringify(modelValue, null, ' ')
    console.log(modelValue.id)

    const response = await axios.get(`${backEndUrl}/append/years`,{
        params: {
            modelId: 1
        }
    })

    return response.data
}

const getBodies = async (modelValue: string, year: string) => {
    const response = await axios.get(`${backEndUrl}/append/bodies`,{
        params: {
            modelId: 1,
            year: 2019
        }
    })

    return response.data
}

const getGenerations = async (modelValue: any, year: string, bodyValue: any) => {
    const response = await axios.get(`${backEndUrl}/append/generations`,{
        params: {
            modelId: 1,
            year: 2019,
            bodyId: 1
        }
    })

    return response.data
}

const getEngines = async (modelValue: any, bodyValue: any, generationValue: any,) => {
    const response = await axios.get(`${backEndUrl}/append/engines`,{
        params: {
            modelId: 1,
            bodyId: 1,
            generationId: 8

        }
    })

    return response.data
}

const getDrives = async (modelValue: any, bodyValue: any, generationValue: any, engineValue: any) => {
    const response = await axios.get(`${backEndUrl}/append/drives`,{
        params: {
            modelId: 1,
            bodyId: 1,
            generationId: 8,
            engineId: 1
        }
    })

    return response.data
}

const getGearboxes = async (modelValue: any, bodyValue: any, generationValue: any, engineValue: any, driveValue: any) => {
    const response = await axios.get(`${backEndUrl}/append/gearboxes`,{
        params: {
            modelId: 1,
            bodyId: 1,
            generationId: 8,
            engineId: 1,
            driveId: 3,
        }
    })

    return response.data
}

const getModifications = async (modelValue: any, bodyValue: any, generationValue: any, engineValue: any, driveValue: any, gearboxValue: any ) => {
    const response = await axios.get(`${backEndUrl}/append/modifications`,{
        params: {
            modelId: 1,
            bodyId: 1,
            generationId: 8,
            engineId: 1,
            driveId: 3,
            gearboxId: 2
        }
    })

    return response.data
}

const AppendService = { getBrands, getModels, getYears, getBodies, getGenerations, getEngines, getDrives, getGearboxes, getModifications };

export default AppendService;