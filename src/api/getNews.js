import { API_BASE_URL } from './config';
import axios from 'axios';

export const getNews = async (lang = 'en', limit) => {
    const url = API_BASE_URL + `news/${lang}${limit ? `?limit=${limit}` : ''}`;
    const response = await axios.get(url);
    return response.data;
}