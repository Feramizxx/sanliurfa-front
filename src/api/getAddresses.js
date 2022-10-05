import { API_BASE_URL } from './config';
import axios from 'axios';

export const getAddresses = async (token) => {
    const url = API_BASE_URL + 'addresses/current-user';
    const response = await axios.get(url, {
        headers: { authorization: `Bearer ${token}` }
    });
    return response.data;
}