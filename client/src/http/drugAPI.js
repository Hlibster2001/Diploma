import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}



export const createDrug = async (drug) => {
    const {data} = await $authHost.post('api/drug', drug)
    return data
}

export const fetchDrugs = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/drug', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneDrug = async (id) => {
    const {data} = await $host.get('api/drug/' + id)
    return data
}