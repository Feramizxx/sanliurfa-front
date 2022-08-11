import React, {useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
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

const CategoriesCarousel = (props) => {
    const [categories] = useState([
        'Hamısı', 'Səhər yeməyi', 'Şorbalar', 'Kabablar', 'Pizzalar',
        'Soyuq qəlyanaltılar', 'Şorbalar', 'Kabablar', 'Pizzalar', 'Soyuq qəlyanaltılar'
    ])
    const [isActive, setIsActive] = useState(0);

    return (
        <div className={'mb-9 xs:mb-7'}>
            <Carousel responsive={responsive} arrows={false} swipeable={true} draggable={true} itemClass="mr-20 max-w-max">
                {categories.map((category, i) => {
                    return (
                        <div className={`md:text-xl sm:text-lg menu-li ${isActive === i ? 'menu-li-active' : ''} ${props.theme === 'red' ? 'menu-li-red' : ''} `}
                            key={i} onClick={() => setIsActive(i)}>{category}
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CategoriesCarousel;