import React, { useState, useContext } from "react";
import Counter from "../../components/ui/meal/Counter";
import { LanguageContext } from "../../contexts/LanguageContext";
import { CartContext } from './../../contexts/CartContext';

const Card = ({ index, meal, amount, price, clickable = true }) => {
    const [count, setCount] = useState(amount);
    const { incrementProduct, removeProduct, decrementProduct } = useContext(CartContext);
    const { content } = useContext(LanguageContext);

    return (
        <div
            className={'shadow-contact-input py-4 px-8 rounded-[20px] flex justify-between mb-10 lg:flex-col lg:items-center'}>
            <div className={'flex items-center lg2:flex-col'}>
                <div className={'flex items-center sm:justify-center'}>
                    <div className={'text-[13px] text-white flex items-center justify-center font-medium bg-red rounded-full w-[22px] h-[22px] mr-6 sm:mr-1 xs:hidden'}>
                        {index}
                    </div>
                    <img className={'h-[137px] mr-8 xl:h-[60px] sm:mr-0 rounded-xl'} src={meal.image} />
                </div>
                <div className={'flex flex-col justify-between h-full py-3'}>
                    <h3 className={'text-xl font-medium xl:text-base'}>{meal.name}</h3>
                    <p className={'text-xs max-w-[335px] font-light xl:max-w-[220px]'}>{meal.description}</p>
                    {/* <p className={'text-xs font-light'}>Çatdırılma: <span>{props.data.delivery}</span></p> */}
                </div>
            </div>
            <div className={'flex items-center sm:flex-col'}>
                <div className={'flex flex-col justify-between items-center h-full py-3 mr-24 xl:mr-2'}>
                    <p className={'text-[#8F161A] text-[32px] font-semibold xl:text-[24px]'}>{price}₼</p>
                    <Counter
                        minNumber={1}
                        defaultValue={amount}
                        countDecrease={async () => {
                            if (clickable) {
                                await decrementProduct(meal.name);
                                setCount(count - 1)
                            }
                        }}
                        countIncrease={async () => {
                            if (clickable) {
                                await incrementProduct(meal.name);
                                setCount(count + 1);
                            }
                        }}
                    />
                </div>
                {clickable &&
                    <p className={'text-[#D21414] underline cursor-pointer'} onClick={async () => {
                        await removeProduct(meal.name);
                    }}>{content.buttons.delete}</p>
                }
            </div>
        </div >
    )
}

export default Card;