import React, { useState } from "react";
import Modal from "react-modal";
import Checkbox from "../../components/ui/input/Checkbox";
import CloseButton from "../../components/ui/CloseButton";

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

const FilterModal = (props) => {
    const [categories] = useState(['Breakfast', 'Lunch', 'Dinner', 'Hot drinks', 'Cold drinks', 'Dessert', 'Snacks', 'Salad']);
    const [choices] = useState(['Toyuqlu', 'Ətli', 'Dəniz məhsullu', 'Vegeterian', 'Dietik']);

    return (
        <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal} style={customStyles}>
            <div className={'max-w-[646px] relative px-8 pb-6 pt-20'}>
                <CloseButton close={props.closeModal} theme={'red'} />
                <h2 className={'text-4xl font-bold text-center mb-8'}>Filter</h2>
                <form>
                    <h3 className={'font-medium text-xl mb-2'}>Kateqoriya</h3>
                    <div className={'flex flex-wrap mb-6'}>
                        {categories.map((category, i) => {
                            return (
                                <Checkbox name={category} price={null} key={i} />
                            )
                        })}
                    </div>
                    <h3 className={'font-medium text-xl mb-2'}>Çeşidlər </h3>
                    <div className={'flex flex-wrap mb-10'}>
                        {choices.map((choice, i) => {
                            return (
                                <Checkbox name={choice} price={null} key={i} />
                            )
                        })}
                    </div>
                    <div className={'flex'}>
                        <button type={'button'}
                            className={'bg-red rounded-full grow text-white text-2xl font-light py-4'}
                            onClick={props.closeModal}>
                            Filtrləməni tamamla
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default FilterModal;