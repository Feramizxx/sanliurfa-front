import { API_BASE_URL } from './config';
import axios from 'axios';

export const postVacancyRequest = async (formData) => {
    const url = API_BASE_URL + 'mail/career';
    const reponse = await axios.post(url, formData);
    return reponse.data;
}