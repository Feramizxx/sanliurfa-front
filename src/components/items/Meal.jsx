import React, { useState } from "react";
import Stars from "../ui/meal/Stars";
import MealPlus from "../ui/meal/MealPlus";
import Counter from "../ui/meal/Counter";
import Taste from "../ui/meal/Taste";

const Meal = ({ data, type }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={`relative bg-white rounded-[32px] w-[270px] ${type === 'carousel' ? 'mr-12 xxs:mr-4' : ''}`}>
            {/* <Taste taste={data.vegan ? 'vegan' : (data.spicy ? 'spicy' : '')} type={'menu'} /> */}
            <div className={'relative z-0'}>
                <img src={data.picture} title={data.name} className={'rounded-[32px] mb-4'} />
                <Counter type={'menu'} minNumber={0} defaultValue={0}
                    countDecrease={() => { setCount(count - 1) }} countIncrease={() => { setCount(count + 1) }} />
            </div>
            <div className={'pl-5 pr-3 pb-3'}>
                <div className={'flex justify-between items-center'}>
                    <h5 className={'font-semibold text-base'}>{data.name}</h5>
                    {/* <p className={'text-[#8F161A] text-[32px] font-semibold'}>{data.price.middle}₼</p> */}
                </div>
                <p className={'font-normal text-[10px] opacity-70 mb-6'}>
                    {data.description}
                </p>
                <div className={'flex justify-between items-center'}>
                    {/* <Stars rating={data.rating} /> */}
                    {/* <MealPlus name={data.name} price={data.price} taste={data.vegan ? 'vegan' : (data.spicy ? 'spicy' : '')}
                        amount={count !== 0 ? count : 1} /> */}
                </div>
            </div>
        </div>
    )
}

export default Meal;