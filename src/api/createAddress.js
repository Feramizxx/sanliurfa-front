import { API_BASE_URL } from './config';
import axios from 'axios';

export const createAddress = async (token, data) => {
    const url = API_BASE_URL + 'addresses';
    const resposne = await axios.post(url, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return resposne.data;
}