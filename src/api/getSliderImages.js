import axios from "axios"
import { API_BASE_URL } from './config';

export const getSliderImages = async () => {
    const url = API_BASE_URL + 'slider-images';
    console.log(url)
    const response = await axios.get(url);
    return response.data;
}