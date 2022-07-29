import React, {memo, useState} from "react";
import CategoriesCarousel from "../../components/items/CategoriesCarousel";
import Filter from "../../assets/icons/buttons/filter.svg";
import Modal from "react-modal";
import Checkbox from "../../components/ui/input/Checkbox";
import CloseButton from "../../components/ui/CloseButton";
import GreeceSalad from "../../assets/img/foods/GreeceSaladSmall.png";
import CursusFeugiat from "../../assets/img/foods/CursusFeugiat.png";
import JustoEst from "../../assets/img/foods/JustoEst.png";
import Meal from "../../components/items/Meal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root');

const Menu = memo(() => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [categories] = useState(['Breakfast', 'Lunch', 'Dinner', 'Hot drinks', 'Cold drinks', 'Dessert', 'Snacks', 'Salad']);
    const [choices] = useState(['Toyuqlu', 'Ətli', 'Dəniz məhsullu', 'Vegeterian', 'Dietik']);
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
            <div className={'bg-red font-Roboto py-40 px-28'}>
                <CategoriesCarousel theme={'red'}/>
                <div className={'mb-8'}>
                    <div className={'flex cursor-pointer mt-14'} onClick={openModal}>
                        <p className={'text-white mr-4'}>Filtrlə</p>
                        <img src={Filter}/>
                    </div>
                </div>
                <ul id={'menu-meals'} className={'flex flex-wrap justify-between'}>
                    {meals.map((meal, i) => {
                        return (
                            <li className={'flex mb-12'} key={i}><Meal data={meal} type={'list'} key={i} /></li>
                        )
                    })}
                </ul>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div className={'w-[646px] relative px-8 pb-6 pt-20'}>
                    <CloseButton close={closeModal} theme={'red'} />
                    <h2 className={'text-4xl font-bold text-center mb-8'}>Filter</h2>
                    <form>
                        <h3 className={'font-medium text-xl mb-2'}>Kateqoriya</h3>
                        <div className={'flex flex-wrap mb-6'}>
                            {categories.map((category, i) => {
                                return (
                                    <Checkbox name={category} price={null} key={i}/>
                                )
                            })}
                        </div>
                        <h3 className={'font-medium text-xl mb-2'}>Çeşidlər </h3>
                        <div className={'flex flex-wrap mb-10'}>
                            {choices.map((choice, i) => {
                                return (
                                    <Checkbox name={choice} price={null} key={i}/>
                                )
                            })}
                        </div>
                        <div className={'flex'}>
                            <button type={'button'}
                                    className={'bg-red rounded-full grow text-white text-2xl font-light py-4'}
                                    onClick={closeModal}>
                                Filtrləməni tamamla
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
})

export default Menu;