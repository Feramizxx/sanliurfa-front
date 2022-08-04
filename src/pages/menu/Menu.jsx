import React, {memo, useState} from "react";
import CategoriesCarousel from "../../components/items/CategoriesCarousel";
import FilterModal from "../../components/items/FilterModal";
import Filter from "../../assets/icons/buttons/filter.svg";
import GreeceSalad from "../../assets/img/foods/GreeceSaladSmall.png";
import CursusFeugiat from "../../assets/img/foods/CursusFeugiat.png";
import JustoEst from "../../assets/img/foods/JustoEst.png";
import Meal from "../../components/items/Meal";

const Menu = memo(() => {
    const [modalIsOpen, setIsOpen] = useState(false);
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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={'bg-red py-40 px-28'}>
                <CategoriesCarousel theme={'red'}/>
                <div className={'mb-8'}>
                    <div className={'flex cursor-pointer mt-12 xs:mt-0'} onClick={openModal}>
                        <p className={'text-white mr-4'}>Filtrlə</p>
                        <img src={Filter}/>
                    </div>
                </div>
                <ul id={'menu-meals'} className={'flex flex-wrap justify-between md:flex-nowrap md:flex-col md:items-center'}>
                    {meals.map((meal, i) => {
                        return (
                            <li className={'flex mb-12'} key={i}><Meal data={meal} type={'list'} key={i} /></li>
                        )
                    })}
                </ul>
            </div>
            <FilterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
    )
})

export default Menu;