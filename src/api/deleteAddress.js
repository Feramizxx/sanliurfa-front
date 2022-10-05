import axios from 'axios';
import { API_BASE_URL } from './config';

export const deleteAddress = async (token, id) => {
    const url = API_BASE_URL + `addresses/${id}`;
    const resposne = await axios.delete(url, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return resposne.data;
}