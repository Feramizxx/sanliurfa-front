import axios from "axios"
import { API_BASE_URL } from './config';

export const getContactInfo = async (lang = 'en') => {
    const url = API_BASE_URL + 'contact-info/' + lang;
    const response = await axios.get(url);
    return response.data;
}