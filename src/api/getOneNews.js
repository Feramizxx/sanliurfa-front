import { API_BASE_URL } from './config';
import axios from 'axios';

export const getOneNews = async (id) => {
    const url = API_BASE_URL + 'news/get-one/' + id;
    const response = await axios.get(url);
    return response.data;
}