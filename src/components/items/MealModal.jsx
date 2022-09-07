import React, { useState } from "react";
import Modal from 'react-modal';
import GreeceSalad from "../../assets/img/foods/GreeceSalad.png";
import Radio from "../ui/input/Radio";
import Checkbox from "../ui/input/Checkbox";
import Counter from "../ui/meal/Counter";
import CloseButton from "../ui/CloseButton";
import Taste from "../ui/meal/Taste";

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

const MealModal = (props) => {
    const [additions] = useState([
        { name: 'Chinese', price: 2.00 },
        { name: 'Greek', price: 0.70 },
        { name: 'Japanese', price: 1.50 },
        { name: 'Korean', price: 1.20 },
        { name: 'British', price: 2.20 },
        { name: 'Mexican', price: 1.40 },
        { name: 'Russian', price: 0.60 },
        { name: 'Italian', price: 1.50 },
        { name: 'Thai', price: 2.00 },
        { name: 'Indonesian', price: 1.80 },
        { name: 'Indian', price: 1.20 },
    ]);
    const [totalPrice, setTotalPrice] = useState(props.price.middle);
    const [amount, setAmount] = useState(props.amount);

    return (
        <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal} style={customStyles}>
            <div className={'max-w-[646px] max-h-[800px] xl:max-h-[700px] lg:max-h-[600px] overflow-y-scroll relative'} id={'meal-modal'}>
                <CloseButton close={props.closeModal} />
                <Taste taste={props.taste} type={'modal'} />
                <img src={GreeceSalad} />
                <div className={'px-7 py-6'}>
                    <div className={'flex justify-between items-center mb-1'}>
                        <h2 className={'font-medium text-4xl'}>{props.name}</h2>
                        <p className={'text-[#8F161A] text-[40px] font-semibold'}>{props.price.middle}₼</p>
                    </div>
                    <p className={'font-light text-sm mb-8'}>Buratta, rukola, pomidor, qırmızı turp, balzamik sous,
                        qırmızı soğan, pesto rosso sousu</p>
                    <form>
                        <h3 className={'font-medium text-xl mb-2'}>Ölçü</h3>
                        <div className={'flex mb-8'}>
                            <Radio size={'small'} label={'Kiçik'} name={'size'} />
                            <Radio size={'middle'} label={'Orta'} name={'size'} />
                            <Radio size={'large'} label={'Böyük'} name={'size'} />
                        </div>
                        <h3 className={'font-medium text-xl mb-2'}>Əlavələr</h3>
                        <div className={'flex flex-wrap mb-6'}>
                            {additions.map((addition, i) => {
                                return (
                                    <Checkbox name={addition.name} price={addition.price} key={i} />
                                )
                            })}
                        </div>
                        <h3 className={'font-medium text-xl mb-2'}>Qeydləriniz</h3>
                        <input type={'text'} className={'bg-[#F1F1F1] w-full outline-red transition-colors mb-7 py-4 px-6 rounded-full'} />
                        <div className={'flex justify-between items-center mb-4'}>
                            <h3 className={'font-medium text-xl mb-2'}>Ümumi məbləğ:</h3>
                            <p className={'text-[#8F161A] text-[40px] font-semibold'}>{totalPrice * props.amount}₼</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <Counter type={'modal'} minNumber={1} defaultValue={props.amount}
                                countDecrease={() => { setAmount(amount - 1) }} countIncrease={() => { setAmount(amount + 1) }} />
                            <button type={'button'} className={'bg-red rounded-full grow ml-4 text-white text-2xl font-lights sm:text-lg'} onClick={props.closeModal}>
                                Səbətə əlavə et
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default MealModal;