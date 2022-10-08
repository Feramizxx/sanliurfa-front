import { API_BASE_URL } from './config';
import axios from 'axios';

export const getCart = async (cartToken) => {
    const url = API_BASE_URL + 'carts/single';
    const response = await axios.get(url, {
        headers: {
            cart_token: cartToken
        }
    });
    return response.data;
}