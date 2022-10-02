
import { API_BASE_URL } from './config';
import axios from 'axios';

export const getVacancies = async (lang = 'en') => {
    const url = API_BASE_URL + 'vacancies/' + lang;
    const response = await axios.get(url);
    return response.data;
}