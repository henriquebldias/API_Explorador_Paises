import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

export async function getAllCountries() {
    const response = await api.get("/all")
    
    return response.data
}

export async function getCountryByName(name: string) {
    const response = await api.get(`/name/${name}`)
    
    return response.data
}

export async function getCountryByRegion(region: string) {
    const response = await api.get(`/region/${region}`)
    
    return response.data
}