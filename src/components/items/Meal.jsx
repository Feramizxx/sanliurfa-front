import React, { useState } from "react";
import Stars from "../ui/meal/Stars";
import MealPlus from "../ui/meal/MealPlus";
import Counter from "../ui/meal/Counter";
import Taste from "../ui/meal/Taste";

const Meal = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className={`relative bg-white rounded-[32px] w-[270px] ${props.type === 'carousel' ? 'mr-12 xxs:mr-4' : ''}`}>
            <Taste taste={props.data.vegan ? 'vegan' : (props.data.spicy ? 'spicy' : '')} type={'menu'} />
            <div className={'relative z-0'}>
                <img src={props.data.picture} title={props.data.name} className={'rounded-[32px] mb-4'} />
                <Counter type={'menu'} minNumber={0} defaultValue={0}
                    countDecrease={() => { setCount(count - 1) }} countIncrease={() => { setCount(count + 1) }} />
            </div>
            <div className={'pl-5 pr-3 pb-3'}>
                <div className={'flex justify-between items-center'}>
                    <h5 className={'font-semibold text-base'}>{props.data.name}</h5>
                    <p className={'text-[#8F161A] text-[32px] font-semibold'}>{props.data.price.middle}₼</p>
                </div>
                <p className={'font-normal text-[10px] opacity-70 mb-6'}>
                    {props.data.description}
                </p>
                <div className={'flex justify-between items-center'}>
                    <Stars rating={props.data.rating} />
                    <MealPlus name={props.data.name} price={props.data.price} taste={props.data.vegan ? 'vegan' : (props.data.spicy ? 'spicy' : '')}
                        amount={count !== 0 ? count : 1} />
                </div>
            </div>
        </div>
    )
}

export default Meal;