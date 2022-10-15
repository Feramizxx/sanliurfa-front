import { API_BASE_URL } from "./config"
import axios from "axios";

export const getOneAddress = async (id) => {
    const url = API_BASE_URL + 'addresses/one-address/' + id;
    const response = await axios.get(url);
    return response.data;
}