import React, { useContext, useState } from "react";
import PageNav from "./PageNav";
import CartProduct from "./CartProduct";
import { NavLink, useNavigate } from "react-router-dom";
import SheetIcon from "../../assets/icons/cart/sheet.svg";
import SeeAlso from "./SeeAlso";
import { CartContext } from './../../contexts/CartContext';
import useResetLink from './../../hooks/useResetLink';
import { AuthContext } from "../../contexts/AuthContext";
import MyModal from "../../components/MyModal";
import { createDelivery } from "../../api/createDelivery";
import { createPayment } from "../../api/createPayments";
import { LanguageContext } from "../../contexts/LanguageContext";
import { roundPrice } from "../../helpers";

// TODO:
// 1 --> if a payment type is card then send a request to the create payment
//  # DTO:
//      lang: "AZ" | "EN" | "RU",
//      amount: totalAmount / 100
// 2 --> you will get a response with a bank url => redirect to it
// 3 --> if payment could not succeed add a related page which takes token as a param
//  4 --> send a deletion request for token
//  5 --> if deletion could not succeed then redirect to home page
// 6 --> if payment could succeed redirect to congrats page with token in param
//  7 --> if error returns on create delivery then redirect to home page


const ERRORS = {
    PAYMENT_TYPE_IS_MISSING: "PAYMENT_TYPE_IS_MISSING",
    ADDRESS_IS_MISSING: "ADDRESS_IS_MISSING"
}

const Payment = () => {
    const { items, totalPrice, cartToken, removeCart, addressId, paymentType, setPaymentType } = useContext(CartContext);
    const { token } = useContext(AuthContext);
    const { value, content } = useContext(LanguageContext);
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useResetLink();


    const onSubmit = async (e) => {
        e.preventDefault();

        if (paymentType !== '') {
            if (addressId !== null) {
                try {
                    const data = {
                        paymentType,
                        language: value.toUpperCase(),
                        amount: String(totalPrice)
                    }
                    const result = await createPayment(data, token);

                    if (paymentType === 'Cash') {
                        navigate('/cart/confirm/' + result.payment_token);
                        return;
                    }

                    const { TKKPG } = result;
                    const sessionID = TKKPG.Response.Order.SessionID;
                    const orderID = TKKPG.Response.Order.OrderID;
                    const url = `${TKKPG.Response.Order.URL}?SessionID=${sessionID}&OrderID=${orderID}`;
                    window.location.replace(url)
                } catch (error) {
                    setModalMessage(content.errors.deliveryFailed);
                    setModal(true);
                }
            } else {
                setError(ERRORS.ADDRESS_IS_MISSING);
            }
        } else {
            setError(ERRORS.PAYMENT_TYPE_IS_MISSING);
        }
    }

    return (
        <>
            <MyModal visible={modal} onClose={() => setModal(false)}>
                <p className="bg-white p-6 text-red text-xl rounded-2xl font-bold max-w-[700px]"> {modalMessage} </p>
            </MyModal>
            <div className={'mt-12 mb-2'}>
                <PageNav prev={'Addresses'} next={'Confirm'} onClick={onSubmit} />
                <div className={'pt-20 pb-10 px-48 lg2:px-10'}>
                    <div className={'flex items-start lg:flex-col-reverse'}>
                        <div className={'grow p-4 mr-5 border-2 rounded-lg lg:w-full'}>
                            <h5 className={'font-medium'}>Ödəmə üsulu</h5>
                            <hr className={'my-3'} />
                            <form onSubmit={onSubmit}>
                                <div>
                                    {error && error === ERRORS.PAYMENT_TYPE_IS_MISSING &&
                                        <p className="form-error"> Ödəmə üsulu seçin </p>
                                    }
                                    <div className={'mb-3'}>
                                        <input
                                            type={'radio'}
                                            id={'by-card'}
                                            className={'mr-2 accent-red'}
                                            name={'payment-method'}
                                            onChange={() => setPaymentType("Card")}
                                        />
                                        <label htmlFor={'by-card'}>Kartla</label>
                                    </div>
                                    <div>
                                        <input
                                            type={'radio'}
                                            id={'by-cash'}
                                            className={'mr-2 accent-red'}
                                            name={'payment-method'}
                                            onChange={() => setPaymentType("Cash")}
                                        />
                                        <label htmlFor={'by-cash'}>Nağd pulla</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={'p-4 border-2 rounded-lg w-2/3 lg:w-full lg:mb-4'}>
                            <div className={'flex mb-3'}>
                                <img src={SheetIcon} className={'mr-4'} />
                                <h5 className={'font-medium'}>Səbətim</h5>
                            </div>
                            <div className={'flex justify-between mb-3'}>
                                <p>Product name</p>
                                <div className={'flex justify-between w-1/3 xs:w-1/2'}>
                                    <p>Portion</p>
                                    <p className={'pr-3'}>Price</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                {items.map((item, index) => {
                                    return (
                                        <CartProduct item={item} key={index} />
                                    )
                                })}
                            </div>
                            <hr className={'mt-2 mb-3'} />
                            <h4 className={'text-xl text-[#8F161A] text-end'}>Ümumi məbləğ: <b>{totalPrice}</b> ₼</h4>
                        </div>
                    </div>
                    <div className={'mt-6 flex flex-col items-end'}>
                        <div className={'mb-6 w-1/3 lg:w-full'}>
                            <NavLink to={'/cart'}>
                                <div className={'text-red text-lg font-medium rounded-full border-2 border-red w-full py-4 flex items-center justify-center'}>Review
                                    your order
                                </div>
                            </NavLink>
                        </div>
                        <div className={'w-1/3 lg:w-full'}>
                            <div>
                                <button onClick={onSubmit} className={'text-white text-lg font-medium rounded-full bg-red w-full py-4'}>
                                    Complete your order
                                </button>
                                {error && error === ERRORS.ADDRESS_IS_MISSING &&
                                    <p className="form-error text-center"> Çatdırılma ünvanını seçin </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'px-16 mb-10'}>
                    <h3 className={'text-[32px] text-red font-bold'}>Həmçinin bax</h3>
                </div>
                <SeeAlso />
            </div >
        </>
    )
}

export default Payment;