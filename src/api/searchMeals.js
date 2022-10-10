import { API_BASE_URL } from './config';
import axios from 'axios';

export const searchMeals = async (target) => {
    const url = API_BASE_URL + `menu/search=${target}`;
    const response = await axios.get(url);
    return response.data;
}