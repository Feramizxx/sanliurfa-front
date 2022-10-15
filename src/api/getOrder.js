import { API_BASE_URL } from "./config"
import axios from "axios";

export const getOrder = async (id) => {
    const url = API_BASE_URL + 'orders/one-order/' + id;
    const response = await axios.get(url);
    return response.data;
}