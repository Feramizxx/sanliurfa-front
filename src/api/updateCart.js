import axios from "axios"
import { API_BASE_URL } from './config';

export const updateCart = async (cartToken, data) => {
    const url = API_BASE_URL + 'carts';
    const response = await axios.patch(url, data, {
        headers: {
            cart_token: cartToken
        }
    });

    return response.data;
}