import axios from 'axios';
import { API_BASE_URL } from './config';

export const getCampaigns = async () => {
    const url = API_BASE_URL + 'campaigns';
    const response = await axios.get(url);
    return response.data;
}