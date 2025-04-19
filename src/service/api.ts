import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

export async function getAllCountries() {
    const response = await api.get("/all")
    
    return response.data
}

    