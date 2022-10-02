import axios from "axios"
import { API_BASE_URL } from './config';

export const getSocialMediaLinks = async () => {
    const url = API_BASE_URL + 'social-network-links';
    const response = await axios.get(url);
    return response.data;
}