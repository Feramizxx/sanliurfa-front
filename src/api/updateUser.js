import { API_BASE_URL } from './config';
import axios from 'axios';

export const updateUser = async (data, token) => {
    const url = API_BASE_URL + 'user/current-user';
    const response = await axios.patch(url, data, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data;
}