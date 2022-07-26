import React, {useState} from "react";

const CategoriesCarousel = () => {
    const [categories] = useState([
        'Hamısı', 'Səhər yeməyi', 'Şorbalar', 'Kabablar', 'Pizzalar',
        'Soyuq qəlyanaltılar', 'Şorbalar', 'Kabablar', 'Pizzalar', 'Soyuq qəlyanaltılar'
    ])
    const [isActive, setIsActive] = useState(0);

    return (
        <div className={'mb-9'}>
            <ul id={'menu-categories'} className={'flex overflow-x-scroll'}>
                {categories.map((category, i) => {
                    return (
                        <li className={`menu-li ${isActive === i ? 'menu-li-active' : ''}`} key={i} onClick={() => setIsActive(i)}>
                            {category}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategoriesCarousel;