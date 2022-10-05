import FormData from "form-data"
import { API_BASE_URL } from './config';
import axios from "axios";

export const uploadProfileImage = async (image, token) => {
    const url = API_BASE_URL + 'user/upload/avatar';
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const data = new FormData();
    data.append('avatar', image);

    const response = await axios.patch(url, data, config);
    return response.data;
}