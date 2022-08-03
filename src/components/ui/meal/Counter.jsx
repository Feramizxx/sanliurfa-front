import React, {useState} from "react";
import GrayMinus from "../../../assets/icons/counter/minusGray.svg";
import BlackMinus from "../../../assets/icons/counter/minusBlack.svg";
import Plus from "../../../assets/icons/counter/plus.svg";

const Counter = (props) => {
    const [amount, setAmount] = useState(props.defaultValue);

    const decrease = () => {
        if(amount > props.minNumber) {
            setAmount(amount - 1);
            props.countDecrease();
        }
    }

    const increase = () => {
        setAmount(amount + 1);
        props.countIncrease();
    }

    return (
        <div className={`${props.type === 'menu' ? 'absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} 
                         shadow-counter rounded-full bg-white w-fit`}>
            <div className={'flex py-2'}>
                <img src={(amount > props.minNumber) ? BlackMinus : GrayMinus} onClick={() => decrease()}
                     className={`border-r cursor-pointer sm:px-4 sm:py-1 sm:w-12 ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
                <div className={`${props.type === 'modal' ? 'text-2xl px-7 py-2 sm:px-4 sm:py-1 sm:text-lg' : 'text-base px-5'}`}>{amount}</div>
                <img src={Plus} onClick={() => increase()}
                     className={`border-l cursor-pointer sm:px-4 sm:py-1 sm:w-12 ${props.type === 'modal' ? 'w-20 px-7 py-2' : 'px-5'}`} />
            </div>
        </div>
    )
}

export default Counter;