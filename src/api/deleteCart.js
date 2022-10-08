import { API_BASE_URL } from './config';
import axios from 'axios';

export const deleteCart = async (cartToken) => {
    const url = API_BASE_URL + 'carts';
    const response = await axios.delete(url, {
        headers: {
            cart_token: cartToken
        }
    });
    return response.data;
}