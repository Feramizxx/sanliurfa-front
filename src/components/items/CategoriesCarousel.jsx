import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    default: {
        breakpoint: { max: 4000, min: 1535 },
        items: 5
    },
    largeDesktop: {
        breakpoint: { max: 1535, min: 1279 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1279, min: 917 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 917, min: 767 },
        items: 2
    },
    largeMobile: {
        breakpoint: { max: 767, min: 639 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 639, min: 530 },
        items: 2
    },
    smallMobile: {
        breakpoint: { max: 530, min: 0 },
        items: 1
    }
};

const CategoriesCarousel = ({ theme, categories, setMeals }) => {
    const [isActive, setIsActive] = useState(categories[0].id);

    const onClick = (meals, id) => {
        setMeals(meals);
        setIsActive(id);
    }

    useEffect(() => {
        setMeals(categories[0].meals)
    }, []);

    return (
        <div className={'mb-9 xs:mb-7'}>
            <Carousel responsive={responsive} arrows={false} swipeable={true} draggable={true} itemClass="mr-20 max-w-max">
                {categories.map((category) => {
                    const id = category.id;
                    return (
                        <div className={`md:text-xl sm:text-lg menu-li ${isActive === id ? 'menu-li-active' : ''} ${theme === 'red' ? 'menu-li-red' : ''} `}
                            key={id} onClick={() => onClick(category.meals, category.id)}>{category.name}
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CategoriesCarousel;