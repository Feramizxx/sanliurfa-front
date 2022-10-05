import axios from 'axios';
import { API_BASE_URL } from './config';

export const updateAddress = async (token, data, id) => {
    const url = API_BASE_URL + `addresses/${id}`;
    const response = await axios.patch(url, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data;
}