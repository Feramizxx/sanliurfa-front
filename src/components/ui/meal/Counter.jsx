import React, {useState} from "react";
import GrayMinus from "../../../assets/icons/counter/minusGray.svg";
import BlackMinus from "../../../assets/icons/counter/minusBlack.svg";
import Plus from "../../../assets/icons/counter/plus.svg";

const Counter = (props) => {
    const [amount, setAmount] = useState(props.defaultValue);

    return (
        <div className={`${props.type === 'menu' ? 'absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} 
                         shadow-counter rounded-full bg-white w-fit`}>
            <div className={'flex py-2'}>
                <img src={(amount > props.minNumber) ? BlackMinus : GrayMinus} onClick={() => {
                     if(amount > props.minNumber) setAmount(amount - 1)
                }} className={`border-r cursor-pointer ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
                <div className={`${props.type === 'modal' ? 'text-2xl px-7 py-2' : 'text-base px-5'}`}>{amount}</div>
                <img src={Plus} onClick={() => setAmount(amount + 1)}
                     className={`border-l cursor-pointer ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
            </div>
        </div>
    )
}

export default Counter;