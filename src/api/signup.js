import axios from 'axios';
import { API_BASE_URL } from './config';

export const signup = async (data) => {
    const url = API_BASE_URL + 'auth/register';
    const response = await axios.post(url, data);
    return response.data.access_token;
}