import React, {useState} from "react";
import Meal from "./Meal";
import GreeceSalad from "../../assets/img/foods/GreeceSaladSmall.png";
import CursusFeugiat from "../../assets/img/foods/CursusFeugiat.png";
import JustoEst from "../../assets/img/foods/JustoEst.png";

const MealsCarousel = () => {
    const [meals] = useState([
        {
            name: 'Tincidunt nullam',
            description: 'Adipiscing faucibus suspendisse aliquet. Aliquam faucibus lacus elementum euismod integer.',
            picture: GreeceSalad,
            rating: 4,
            vegan: true,
            spicy: false,
            price: {
                small: 10,
                middle: 12,
                large: 14
            }
        },
        {
            name: 'Cursus feugiat',
            description: 'Quam justo, viverra enim, urna purus magnis. Ridiculus rhoncus tellus eu aliquam.',
            picture: CursusFeugiat,
            rating: 5,
            vegan: false,
            spicy: true,
            price: {
                small: 12,
                middle: 15,
                large: 18
            }
        },
        {
            name: 'Justo Est',
            description: 'Et orci vel euismod scelerisque arcu rhoncus. Tortor lectus fermentum mauris auctor adipiscing at.',
            picture: JustoEst,
            rating: 3,
            vegan: false,
            spicy: false,
            price: {
                small: 6.5,
                middle: 9,
                large: 11.5
            }
        },
        {
            name: 'Tincidunt nullam',
            description: 'Adipiscing faucibus suspendisse aliquet. Aliquam faucibus lacus elementum euismod integer.',
            picture: GreeceSalad,
            rating: 4,
            vegan: true,
            spicy: false,
            price: {
                small: 10,
                middle: 12,
                large: 14
            }
        },
        {
            name: 'Cursus feugiat',
            description: 'Quam justo, viverra enim, urna purus magnis. Ridiculus rhoncus tellus eu aliquam.',
            picture: CursusFeugiat,
            rating: 5,
            vegan: false,
            spicy: true,
            price: {
                small: 12,
                middle: 15,
                large: 18
            }
        },
        {
            name: 'Justo Est',
            description: 'Et orci vel euismod scelerisque arcu rhoncus. Tortor lectus fermentum mauris auctor adipiscing at.',
            picture: JustoEst,
            rating: 3,
            vegan: false,
            spicy: false,
            price: {
                small: 6.5,
                middle: 9,
                large: 11.5
            }
        },
    ])

    return (
        <div className={'px-14'}>
            <ul id={'menu-meals'} className={'flex overflow-x-scroll'}>
                {meals.map((meal, i) => {
                    return (
                        <li className={'flex'} key={i}><Meal data={meal} type={'carousel'} key={i} /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MealsCarousel;