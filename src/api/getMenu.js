import axios from 'axios';
import { API_BASE_URL } from './config';

export const getMenu = async (limit = 8) => {
    const url = API_BASE_URL + `menu?limit=${limit}`;
    const response = await axios.get(url);
    return response.data.itemCategories[0].items;
}