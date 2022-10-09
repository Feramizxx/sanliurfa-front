import { API_BASE_URL } from './config';
import axios from 'axios';

export const forgotPassword = async (email) => {
    const url = API_BASE_URL + 'auth/forgot-password';
    const response = await axios.post(url, { email });
    return response.data;
}