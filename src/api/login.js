import axios from 'axios';
import { API_BASE_URL } from './config';

export const login = async (data) => {
    const url = API_BASE_URL + 'auth/login';
    const response = await axios.post(url, data);
    return response.data.access_token;
}