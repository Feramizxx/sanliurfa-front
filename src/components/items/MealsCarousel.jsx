import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Meal from "./Meal";
import GreeceSalad from "../../assets/img/foods/GreeceSaladSmall.png";
import CursusFeugiat from "../../assets/img/foods/CursusFeugiat.png";
import JustoEst from "../../assets/img/foods/JustoEst.png";
import useFetchMenu from './../../hooks/useFetchMenu';
import PageLoader from "../PageLoader";

const responsive = {
    largeDesktop: {
        breakpoint: { max: 1535, min: 1279 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 1279, min: 917 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 917, min: 767 },
        items: 2
    },
    largeMobile: {
        breakpoint: { max: 767, min: 639 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 639, min: 530 },
        items: 1
    },
    smallMobile: {
        breakpoint: { max: 530, min: 0 },
        items: 1
    }
};

const MealsCarousel = () => {
    const { menu, menuError, isMenuLoading } = useFetchMenu(8);

    if (isMenuLoading) return <PageLoader />

    return (
        <div className={'px-14'}>
            <Carousel responsive={responsive} arrows={false} swipeable={true} draggable={true} itemClass="max-w-max">
                {menu.map((meal, i) => {
                    return (
                        <div className={'flex'} key={meal.id}><Meal data={meal} type={'carousel'} key={i} /></div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default MealsCarousel;