import { API_BASE_URL } from "./config"
import axios from "axios";

export const createDelivery = async (data, tokens) => {
    const url = API_BASE_URL + 'delivery';
    const response = await axios.post(url, data, {
        headers: {
            authorization: `Bearer ${tokens.access_token}`,
            'cart_token': tokens.cart_token
        }
    });
    return response.data;

}