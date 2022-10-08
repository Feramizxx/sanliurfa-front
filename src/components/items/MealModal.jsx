import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import Radio from "../ui/input/Radio";
import Checkbox from "../ui/input/Checkbox";
import Counter from "../ui/meal/Counter";
import CloseButton from "../ui/CloseButton";
import Taste from "../ui/meal/Taste";
import { CartContext } from './../../contexts/CartContext';
import { roundPrice } from './../../helpers/index';

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

const MealModal = ({ name, price, taste, closeModal, amount, modalIsOpen, image, description, additions }) => {
    const [totalPrice, setTotalPrice] = useState(price);
    const [currentAmount, setCurrentAmount] = useState(amount);
    const [display, setDisplay] = useState(additions ? additions.length / 4 : 0);
    const { addProduct } = useContext(CartContext);

    // TODO: add selected additions

    const onMoreClick = (e) => {
        e.preventDefault();
        setDisplay(additions.length);
    }

    const onHideClick = (e) => {
        e.preventDefault();
        setDisplay(additions.length / 4);
    }

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <div className={'max-w-[646px] h-screen overflow-y-scroll relative'} id={'meal-modal'}>
                <CloseButton close={closeModal} />
                {/* <Taste taste={taste} type={'modal'} /> */}
                <div className="bg-center bg-cover w-full h-[50vh]" style={{
                    backgroundImage: `url(${image})`
                }} />
                <div className={'px-7 py-6'}>
                    <div className={'flex justify-between items-center mb-1'}>
                        <h2 className={'font-medium text-4xl'}>{name}</h2>
                        <p className={'text-[#8F161A] text-[40px] font-semibold'}>{price}₼</p>
                    </div>
                    <p className={'font-light text-sm mb-8'}> {description} </p>
                    <form>
                        <h3 className={'font-medium text-xl mb-2'}>Ölçü</h3>
                        <div className={'flex mb-8'}>
                            <Radio size={'small'} label={'Kiçik'} name={'size'} />
                            <Radio size={'middle'} label={'Orta'} name={'size'} />
                            <Radio size={'large'} label={'Böyük'} name={'size'} />
                        </div>
                        <h3 className={'font-medium text-xl mb-2'}>Əlavələr</h3>
                        <div className={'flex flex-wrap mb-6'}>
                            {additions &&
                                <>
                                    {additions.map((addition, i) => {
                                        if (i <= display) {
                                            return (
                                                <Checkbox
                                                    name={addition.name}
                                                    price={addition.prices[0].price}
                                                    key={addition.sku}
                                                />
                                            )
                                        }
                                    })}
                                    <div className="flex justify-center w-full">
                                        <button
                                            className="bg-[#F1F1F1] rounded-full p-3"
                                            onClick={display === additions.length ? onHideClick : onMoreClick}
                                        > {display === additions.length ? "Gizlət" : "Hamsini göstər"} </button>
                                    </div>
                                </>
                            }
                        </div>
                        <h3 className={'font-medium text-xl mb-2'}>Qeydləriniz</h3>
                        <input type={'text'} className={'bg-[#F1F1F1] w-full outline-red transition-colors mb-7 py-4 px-6 rounded-full'} />
                        <div className={'flex justify-between items-center mb-4'}>
                            <h3 className={'font-medium text-xl mb-2'}>Ümumi məbləğ:</h3>
                            <p className={'text-[#8F161A] text-[40px] font-semibold'}>{totalPrice}₼</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <Counter type={'modal'} minNumber={1} defaultValue={amount}
                                countDecrease={() => {
                                    setCurrentAmount(currentAmount - 1)
                                    setTotalPrice(roundPrice(totalPrice - price))
                                }} countIncrease={() => {
                                    setCurrentAmount(currentAmount + 1)
                                    setTotalPrice(roundPrice(totalPrice + price))
                                }} />
                            <button
                                type={'button'}
                                className={'bg-red rounded-full grow ml-4 text-white text-2xl font-lights sm:text-lg'}
                                onClick={async () => {
                                    await addProduct({ name, image, description }, currentAmount, totalPrice)
                                    closeModal();
                                }}>
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