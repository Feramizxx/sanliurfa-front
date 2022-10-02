import axios from "axios"
import { API_BASE_URL } from './config';

export const getSliderImages = async () => {
    const url = API_BASE_URL + 'slider-images';
    const response = await axios.get(url);
    return response.data;
}