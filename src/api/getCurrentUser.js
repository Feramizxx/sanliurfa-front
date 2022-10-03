import axios from 'axios';
import { API_BASE_URL } from './config';

export const getCurrentUser = async (token) => {
    const url = API_BASE_URL + 'user/current-user';
    const resposne = await axios.get(url, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return resposne.data;
}