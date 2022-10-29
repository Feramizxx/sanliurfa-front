import React, { useState } from "react";
import Stars from "../ui/meal/Stars";
import MealPlus from "../ui/meal/MealPlus";
import Counter from "../ui/meal/Counter";
import Taste from "../ui/meal/Taste";
import { STORAGE_BASE_URL } from "../../api/config";

const Meal = ({ meal, type }) => {
    const [count, setCount] = useState(0);
    const price = meal.itemSizes[0].prices[0].price;
    const image = meal.imageUrl ? STORAGE_BASE_URL + meal.imageUrl : null;
    const description = meal.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sint ipsa vero minus est?';
    const additions = meal.itemSizes[0].itemModifierGroups[0];

    return (
        <div className={`relative bg-white rounded-[32px] w-[270px] ${type === 'carousel' ? 'mr-12 xxs:mr-4' : ''}`}>
            {/* <Taste taste={meal.vegan ? 'vegan' : (meal.spicy ? 'spicy' : '')} type={'menu'} /> */}
            <div className={'relative z-0'}>
                {image ?
                    <div style={{
                        backgroundImage: `url(${image})`
                    }} title={meal.name} className={'rounded-[32px] w-full mb-4 min-h-[35vh] bg-cover bg-center'} /> :
                    <div className="w-full bg-gray-200 min-h-[35vh] rounded-[32px] mb-4" />
                }
                <Counter type={'menu'} minNumber={0} defaultValue={0}
                    countDecrease={() => { setCount(count - 1) }} countIncrease={() => { setCount(count + 1) }} />
            </div>
            <div className={'pl-5 pr-3 pb-3'}>
                <div className={'flex justify-between items-center'}>
                    <h5 className={'font-semibold text-base'}>{meal.name}</h5>
                    <p className={'text-[#8F161A] text-[32px] font-semibold'}>{price}₼</p>
                </div>
                <p className={'font-normal text-[10px] opacity-70 mb-6 mt-3'}>
                    {description}
                </p>
                <div className={'flex justify-end items-center'}>
                    {/* <Stars rating={3} /> */}
                    <MealPlus
                        name={meal.name}
                        price={price}
                        taste={'spicy'}
                        amount={count !== 0 ? count : 1}
                        image={image}
                        description={description}
                        additions={additions ? additions.items : null}
                        itemId={meal.itemId}
                    />
                </div>
            </div>
        </div>
    )
}

export default Meal;