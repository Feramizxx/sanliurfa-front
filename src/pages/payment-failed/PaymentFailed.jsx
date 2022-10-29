import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { deletePaymentToken } from "../../api/deletePaymentToken";
import { AuthContext } from "../../contexts/AuthContext";
import { LanguageContext } from "../../contexts/LanguageContext";

const PAYMENT_TOKEN_WAS_NOT_FOUND = "Could not find payment token!"

const PaymentFailed = () => {
    const { content } = useContext(LanguageContext);
    const { token } = useContext(AuthContext);
    const { paymentToken } = useParams();
    const navigate = useNavigate();

    const deleteToken = async () => {
        const message = await deletePaymentToken(paymentToken, token);
        if (message === PAYMENT_TOKEN_WAS_NOT_FOUND) navigate('/');
    }

    useEffect(() => {
        deleteToken();
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center pt-40">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
            >
                <path
                    className="fill-red"
                    d="M31.3 21.35q1.15 0 1.925-.8.775-.8.775-1.9 0-1.15-.775-1.925-.775-.775-1.925-.775-1.1 0-1.9.775-.8.775-.8 1.925 0 1.1.8 1.9.8.8 1.9.8Zm-14.6 0q1.15 0 1.925-.8.775-.8.775-1.9 0-1.15-.775-1.925-.775-.775-1.925-.775-1.1 0-1.9.775-.8.775-.8 1.925 0 1.1.8 1.9.8.8 1.9.8Zm7.3 5.8q-3.35 0-6.075 1.875T13.9 34h2.65q1.1-2.1 3.1-3.25t4.4-1.15q2.35 0 4.325 1.175T31.5 34h2.6q-1.25-3.15-4-5T24 27.15ZM24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm0-20Zm0 17q7.1 0 12.05-4.95Q41 31.1 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.1 0-12.05 4.95Q7 16.9 7 24q0 7.1 4.95 12.05Q16.9 41 24 41Z"
                />
            </svg>
            <h1 className="text-2xl text-red font-bold ml-3"> {content.errors.paymentFailed}... </h1>
        </div>
    );
}

export default PaymentFailed;