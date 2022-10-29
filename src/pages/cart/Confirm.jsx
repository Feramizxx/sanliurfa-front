import React, { useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SeeAlso from "./SeeAlso";
import Circles from "../../assets/icons/cart/circles.svg";
import Ellipse from "../../assets/icons/cart/ellipse.svg";
import Check from "../../assets/icons/cart/checkConfirm.svg";
import { LinkContext } from './../../contexts/LinkContext';
import useResetLink from './../../hooks/useResetLink';
import { CartContext } from "../../contexts/CartContext";
import { useEffect } from "react";
import { createDelivery } from "../../api/createDelivery";
import { LanguageContext } from "../../contexts/LanguageContext";
import MyModal from "../../components/MyModal";
import { AuthContext } from "../../contexts/AuthContext";
import { AxiosError } from "axios";

const Confirm = () => {
    const { setValue } = useContext(LinkContext);
    const { paymentToken } = useParams();
    const { removeCart, paymentType, cartToken } = useContext(CartContext);
    const { token } = useContext(AuthContext);
    const { content } = useContext(LanguageContext);
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    useResetLink();

    const errorMessage = content.errors.deliveryFailed;

    const onLinkClick = () => {
        setValue(3);
    }

    const sendDeliveryRequest = async () => {
        const data = { paymentType, paymentToken }
        const tokens = {
            access_token: token,
            cart_token: cartToken
        }
        try {
            await createDelivery(data, tokens);
            removeCart(cartToken);
        } catch (error) {
            if (error instanceof AxiosError && error.response.status === 403) {
                navigate('/');
            } else {
                setModal(true)
            }
        }
    }

    useEffect(() => {
        sendDeliveryRequest();
    }, []);

    return (
        <>
            <MyModal visible={modal} onClose={() => setModal(false)}>
                <p className="bg-white p-6 text-red text-xl rounded-2xl font-bold max-w-[700px]"> {errorMessage} </p>
            </MyModal>
            <div className={'mt-12 mb-2'}>
                <div className={'py-5 flex flex-col items-center'}>
                    <div className={'relative'}>
                        <img src={Circles} />
                        <img src={Ellipse} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                        <img src={Check} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                    </div>
                    <h1 className={'text-red text-5xl font-bold mb-4'}>{content.titles.congrats}</h1>
                    <p className={'mb-7'}>{content.pages.cart.successfullBooking}</p>
                    <NavLink onClick={onLinkClick} to={'/menu'}>
                        <button className={'text-red text-lg font-medium rounded-full border-2 border-red w-full py-4 px-32 xs:px-24'}>{content.buttons.gotoMenu}</button>
                    </NavLink>
                </div>
                <div className={'px-16 mb-10'}>
                    <h3 className={'text-[32px] text-red font-bold'}>{content.titles.seeAlso}</h3>
                </div>
                <SeeAlso />
            </div>
        </>
    )
}

export default Confirm;