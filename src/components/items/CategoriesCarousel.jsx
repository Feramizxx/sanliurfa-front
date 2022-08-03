import React, {useState} from "react";

const CategoriesCarousel = (props) => {
    const [categories] = useState([
        'Hamısı', 'Səhər yeməyi', 'Şorbalar', 'Kabablar', 'Pizzalar',
        'Soyuq qəlyanaltılar', 'Şorbalar', 'Kabablar', 'Pizzalar', 'Soyuq qəlyanaltılar'
    ])
    const [isActive, setIsActive] = useState(0);

    return (
        <div className={'mb-9 xs:mb-7'}>
            <ul id={'menu-categories'} className={'flex overflow-x-scroll'}>
                {categories.map((category, i) => {
                    return (
                        <li className={`md:text-xl sm:text-lg menu-li ${isActive === i ? 'menu-li-active' : ''} ${props.theme === 'red' ? 'menu-li-red' : ''} `}
                            key={i} onClick={() => setIsActive(i)}>{category}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategoriesCarousel;