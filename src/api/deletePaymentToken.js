import { API_BASE_URL } from "./config"
import axios from "axios";

export const deletePaymentToken = async (paymentToken, token) => {
    const url = API_BASE_URL + 'payment/' + paymentToken;
    const response = await axios.delete(url, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return response.data.message;
}