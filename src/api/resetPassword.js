import { API_BASE_URL } from "./config"
import axios from "axios";

export const resetPassword = async (data) => {
    const url = API_BASE_URL + 'auth/reset-password';
    const resposne = await axios.patch(url, data);
    return resposne.data;
}