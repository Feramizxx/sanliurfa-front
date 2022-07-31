import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import PageNav from "./PageNav";
import Card from "./Card";
import SeeAlso from "./SeeAlso";
import Monastr from "../../assets/img/foods/Monastr.png";
import Sezar from "../../assets/img/foods/Sezar.png";
import Cola from "../../assets/img/foods/Cola.png";

const Index = () => {
    const [meals, setMeals] = useState([
        {
            name: 'Monastr ət',
            picture: Monastr,
            description: 'Arcu praesent ut tellus pharetra, sed laoreet. Tellus massa egestas sapien nam quam tellus.',
            delivery: '30 dəqiqə',
            price: 12,
            number: 1,
            id: 1
        },
        {
            name: 'Sezar salatı',
            picture: Sezar,
            description: 'Arcu praesent ut tellus pharetra, sed laoreet. Tellus massa egestas sapien nam quam tellus.',
            delivery: '30 dəqiqə',
            price: 9,
            number: 2,
            id: 2
        },
        {
            name: 'Coca Cola',
            picture: Cola,
            description: 'Arcu praesent ut tellus pharetra, sed laoreet. Tellus massa egestas sapien nam quam tellus.',
            delivery: '30 dəqiqə',
            price: 3,
            number: 3,
            id: 3
        },
    ]);

    const removeMeal = (id) => {
        setMeals(meals.filter(meal => meal.id !== id));
    }

    return (
        <div className={'mt-12 mb-2'}>
            <PageNav next={'Addresses'}/>
            <div className={'py-20 px-48'}>
                {meals.map((meal, i) => {
                    return (
                        <Card data={meal} index={i + 1} remove={removeMeal} key={meal.id} />
                    )
                })}
            </div>
            <hr className={'w-11/12 mb-6 m-auto'}/>
            <div className={'px-48 flex justify-between text-2xl mb-8'}>
                <p>Çatdırılma</p>
                <p>Ödənişsiz</p>
            </div>
            <div className={'px-48 flex justify-between mb-10'}>
                <p className={'text-[32px] font-bold'}>Ümumi məbləğ</p>
                <p className={'text-[#8F161A] text-[48px] font-semibold'}>39₼</p>
            </div>
            <div className={'flex justify-end w-11/12 m-auto mb-12'}>
                <NavLink to={'/cart/addresses'}>
                    <button className={'bg-red py-4 px-24 rounded-full text-white text-2xl'}>Sifarişi təsdiqlə</button>
                </NavLink>
            </div>
            <div className={'px-16 mb-10'}>
                <h3 className={'text-[32px] text-red font-bold'}>Həmçinin bax</h3>
            </div>
            <SeeAlso />
        </div>
    )
}

export default Index;