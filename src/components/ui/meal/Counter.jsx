import React, {useState} from "react";
import GrayMinus from "../../../assets/icons/counter/minusGray.svg";
import BlackMinus from "../../../assets/icons/counter/minusBlack.svg";
import Plus from "../../../assets/icons/counter/plus.svg";

const Counter = (props) => {
    const [amount, setAmount] = useState(props.type === 'menu' ? 0 : 1);

    return (
        <div className={`${props.type === 'menu' ? 'absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} 
                         shadow-counter rounded-full bg-white w-fit`}>
            <div className={'flex py-2'}>
                <img src={(props.type === 'menu' && amount) || (props.type === 'modal' && amount > 1) ? BlackMinus : GrayMinus} onClick={() => {
                     if((props.type === 'menu' && amount) || (props.type === 'modal' && amount > 1)) setAmount(amount - 1)
                }} className={`border-r cursor-pointer ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
                <div className={`${props.type === 'modal' ? 'text-2xl px-7 py-2' : 'text-base px-5'}`}>{amount}</div>
                <img src={Plus} onClick={() => setAmount(amount + 1)}
                     className={`border-l cursor-pointer ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
            </div>
        </div>
    )
}

export default Counter;