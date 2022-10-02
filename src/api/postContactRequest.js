
import axios from 'axios';
import { API_BASE_URL } from './config';

export const postContactRequest = async (data) => {
    const url = API_BASE_URL + 'mail/contact';
    const response = await axios.post(url, data);
    return response;
}