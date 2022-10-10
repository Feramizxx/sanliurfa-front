import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "./PageNav";
import Card from "./Card";
import SeeAlso from "./SeeAlso";
import { CartContext } from './../../contexts/CartContext';
import { AuthContext } from './../../contexts/AuthContext';
import { LinkContext } from './../../contexts/LinkContext';

const Index = () => {
    const { items, totalPrice } = useContext(CartContext);
    const { isAuth } = useContext(AuthContext);
    const { setLoginForm, setLoginFormErrorMessage, setMessageBox } = useContext(LinkContext);
    const navigate = useNavigate();

    const onError = () => {
        setMessageBox(true);
        setLoginForm(true);
        setLoginFormErrorMessage('Sifarişi davam etmək olmaq üçünç birincisi daxil olun.');
    }

    const onConfirmClick = (e, to) => {
        e.stopPropagation();
        if (isAuth) {
            navigate(to);
        } else {
            onError();
        }
    }

    return (
        <div className={'mt-12 mb-2'}>
            <PageNav next={'Addresses'} onError={onError} />
            <div className={'py-20 px-48 sm:px-10'}>
                {items.map((item, index) =>
                    <Card
                        meal={item.meal}
                        index={index + 1}
                        price={item.price}
                        amount={item.amount}
                        key={index}
                    />
                )}
            </div>
            <hr className={'w-11/12 mb-6 m-auto'} />
            <div className={'px-48 flex justify-between text-2xl mb-8 md:text-base sm:px-10'}>
                <p>Çatdırılma</p>
                <p>Ödənişsiz</p>
            </div>
            <div className={'px-48 flex justify-between mb-10 sm:px-10'}>
                <p className={'text-[32px] font-bold md:text-lg'}>Ümumi məbləğ</p>
                <p className={'text-[#8F161A] text-[48px] font-semibold md:text-xl'}>{totalPrice}₼</p>
            </div>
            <div className={'flex justify-end w-11/12 m-auto mb-12'}>
                <div onClick={(e) => onConfirmClick(e, '/cart/addresses')}>
                    <button className={'bg-red py-4 px-24 rounded-full text-white text-2xl xs:text-base xs:px-12'}>Sifarişi təsdiqlə</button>
                </div>
            </div>
            <div className={'px-16 mb-10'}>
                <h3 className={'text-[32px] text-red font-bold'}>Həmçinin bax</h3>
            </div>
            <SeeAlso />
        </div>
    )
}

export default Index;