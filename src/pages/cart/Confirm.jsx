import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SeeAlso from "./SeeAlso";
import Circles from "../../assets/icons/cart/circles.svg";
import Ellipse from "../../assets/icons/cart/ellipse.svg";
import Check from "../../assets/icons/cart/checkConfirm.svg";
import { LinkContext } from './../../contexts/LinkContext';

const Confirm = () => {
    const { setValue } = useContext(LinkContext)

    const onLinkClick = () => {
        setValue(3);
    }

    return (
        <div className={'mt-12 mb-2'}>
            <div className={'py-5 flex flex-col items-center'}>
                <div className={'relative'}>
                    <img src={Circles} />
                    <img src={Ellipse} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                    <img src={Check} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                </div>
                <h1 className={'text-red text-5xl font-bold mb-4'}>Congrats!</h1>
                <p className={'mb-7'}>You booked successfully</p>
                <NavLink onClick={onLinkClick} to={'/menu'}>
                    <button className={'text-red text-lg font-medium rounded-full border-2 border-red w-full py-4 px-32 xs:px-24'}>Menyuya keç</button>
                </NavLink>
            </div>
            <div className={'px-16 mb-10'}>
                <h3 className={'text-[32px] text-red font-bold'}>Həmçinin bax</h3>
            </div>
            <SeeAlso />
        </div>
    )
}

export default Confirm;