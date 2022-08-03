import React from "react";
import CheckIcon from "../../assets/icons/cart/check.svg";
import {NavLink, useNavigate} from "react-router-dom";

const CartNavItem = (props) => {
    return (
        <div className={'flex flex-col items-end'}>
            <div className={'flex items-center'}>
                {!props.first && <hr className={'w-[146px] sm:w-[73px]'} />}
                <NavLink to={props.name.toLowerCase()} className={'cursor-pointer'}>
                    <div className={'rounded-full w-[28px] h-[28px] border-2 relative flex sm:w-[24px] sm:h-[24px]'}>
                        <img src={CheckIcon} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                        <p className={'text-[#5E5E5E] font-light absolute right-1/2 translate-x-1/2 top-full sm:text-xs'}>
                            {props.name === '' ? 'Cart' : props.name}
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default CartNavItem;