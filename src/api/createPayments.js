import axios from "axios";
import { API_BASE_URL } from "./config"

export const createPayment = async (data, token) => {
    const url = API_BASE_URL + 'payment';
    const response = await axios.post(url, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data;
}