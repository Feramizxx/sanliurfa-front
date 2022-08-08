import React from "react";
import CheckIcon from "../../assets/icons/cart/check.svg";
import CheckIconRed from "../../assets/icons/cart/checkConfirm.svg";
import {useLocation} from "react-router";

const CartNavItem = (props) => {
    let url = useLocation().pathname.split('/');
    url = url[url.length - 1];

    let order;
    switch (url) {
        case '' : case 'cart': { order = 0; break; }
        case 'addresses': { order = 1; break; }
        case 'payment': { order = 2; break; }
        case 'confirm': { order = 3; break; }
        default: break;
    }

    return (
        <div className={'flex flex-col items-end'}>
            <div className={'flex items-center'}>
                {!props.first && <hr className={'w-[146px] sm:w-[73px] transition-all border-t' + (order >= props.order ? ' border-red' : '')}/>}
                <div className={'rounded-full border-2 relative flex transition-all ' + (order >= props.order  ? 'border-red ' : '')
                                + (order === props.order ? 'w-[32px] h-[32px] sm:w-[28px] sm:h-[28px]' : 'w-[28px] h-[28px] sm:w-[24px] sm:h-[24px]')}>
                    {order !== props.order &&
                        <img src={order > props.order ? CheckIconRed : CheckIcon}
                             className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] h-[13px] transition-all'}/>
                    }
                    <p className={'font-light absolute right-1/2 translate-x-1/2 top-full sm:text-xs transition-all '
                                    + (order >=  props.order ? 'text-red'  : 'text-[#5E5E5E]')
                                    + (order === props.order ? ' underline text-lg sm:text-base' : '')}>
                        {props.name === '' ? 'Cart' : props.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartNavItem;