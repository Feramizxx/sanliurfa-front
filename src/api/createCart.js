import axios from "axios"
import { API_BASE_URL } from './config';

export const createCart = async () => {
    const url = API_BASE_URL + 'carts';
    const response = await axios.post(url);
    return response.data.cart_token;
}