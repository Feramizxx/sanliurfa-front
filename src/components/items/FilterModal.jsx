import React, { useState } from "react";
import Modal from "react-modal";
import Checkbox from "../../components/ui/input/Checkbox";
import CloseButton from "../../components/ui/CloseButton";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

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

const FilterModal = ({ modalIsOpen, closeModal, categories, setMeals }) => {
    const { content } = useContext(LanguageContext);

    const onClick = (meals) => {
        setMeals(meals);
    }

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <div className={'max-w-[646px] relative px-8 pb-6 pt-20'}>
                <CloseButton close={closeModal} theme={'red'} />
                <h2 className={'text-4xl font-bold text-center mb-8'}>{content.pages.menu.filter.heading}</h2>
                <form>
                    <h3 className={'font-medium text-xl mb-2'}>{content.pages.menu.filter.category}</h3>
                    <div className={'flex flex-wrap mb-6'}>
                        {categories.map((category) => {
                            return (
                                <Checkbox
                                    name={category.name}
                                    price={null}
                                    key={category.id}
                                    onClick={() => onClick(category.meals)}
                                />
                            )
                        })}
                    </div>
                    {/* <h3 className={'font-medium text-xl mb-2'}>Çeşidlər </h3>
                    <div className={'flex flex-wrap mb-10'}>
                        {choices.map((choice, i) => {
                            return (
                                <Checkbox name={choice} price={null} key={i} />
                            )
                        })}
                    </div> */}
                    <div className={'flex'}>
                        <button type={'button'}
                            className={'bg-red rounded-full grow text-white text-2xl font-light py-4 px-6'}
                            onClick={closeModal}>
                            {content.buttons.finishFilter}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default FilterModal;