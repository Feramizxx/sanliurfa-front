import React, {useState} from "react";
import Modal from "react-modal";
import CloseButton from "../../components/ui/CloseButton";
import Meal from "../../components/items/Meal";
import GreeceSalad from "../../assets/img/foods/GreeceSaladSmall.png";
import CursusFeugiat from "../../assets/img/foods/CursusFeugiat.png";
import JustoEst from "../../assets/img/foods/JustoEst.png";
import Checkbox from "../../components/ui/input/Checkbox";

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

const SeeAlso = () => {
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
    ]);
    const [categories] = useState(['Breakfast', 'Lunch', 'Dinner', 'Hot drinks', 'Cold drinks', 'Dessert', 'Snacks', 'Salad']);
    const [choices] = useState(['Toyuqlu', 'Ətli', 'Dəniz məhsullu', 'Vegeterian', 'Dietik']);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={'m-auto w-5/6'}>
                <ul id={'see-also-meals'} className={'flex flex-wrap justify-between md:flex-col md:items-center'}>
                    {meals.map((meal, i) => {
                        return (
                            <li className={'flex mb-12 ml-2 shadow-see-also-card rounded-[26px]'} key={i}>
                                <Meal data={meal} type={'list'} key={i}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SeeAlso;