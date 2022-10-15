import { API_BASE_URL } from "./config"
import axios from "axios";

export const getOrders = async (token) => {
    const url = API_BASE_URL + 'orders/current-user';
    const response = await axios.get(url, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data;
}