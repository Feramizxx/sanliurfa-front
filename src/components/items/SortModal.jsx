import React from "react";
import Modal from 'react-modal';
import Radio from "../ui/input/Radio";
import CloseButton from "../ui/CloseButton";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const SortModal = ({ modalIsOpen, closeModal, setMeals }) => {
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <div className={'max-w-[646px] relative px-8 pb-6 pt-20'}>
                <CloseButton close={closeModal} theme={'red'} />
                <h2 className={'text-4xl font-bold text-center mb-8'}>Sort</h2>
                <form>
                    <div className={'min-w-[280px] mb-5'}>
                        <Radio
                            size={'a-z'}
                            label={'A-dan Z-yə'}
                            onClick={(e) => {
                                e.preventDefault();
                                setMeals(prev => prev.sort((a, b) => {
                                    return a.name.localeCompare(b.name, 'az', { sensitivity: 'base' });
                                }));
                            }}
                        />
                        <Radio
                            size={'z-a'}
                            label={'Z-dən A-ya'}
                            onClick={(e) => {
                                e.preventDefault();
                                setMeals(prev => prev.sort((a, b) => {
                                    return b.name.localeCompare(a.name, 'az', { sensitivity: 'base' });
                                }));
                            }}
                        />
                        <Radio
                            size={'cheap-expensive'}
                            label={'Ucuzdan bahaya'}
                            onClick={(e) => {
                                e.preventDefault();
                                setMeals(prev => prev.sort((a, b) => {
                                    if (a.itemSizes[0].prices[0].price > b.itemSizes[0].prices[0].price) { return 1; }
                                    if (a.itemSizes[0].prices[0].price < b.itemSizes[0].prices[0].price) { return -1; }
                                    return 0;
                                }));
                            }}
                        />
                        <Radio
                            size={'expensive-cheap'}
                            label={'Bahadan ucuza'}
                            onClick={(e) => {
                                e.preventDefault();
                                setMeals(prev => prev.sort((a, b) => {
                                    if (a.itemSizes[0].prices[0].price < b.itemSizes[0].prices[0].price) { return 1; }
                                    if (a.itemSizes[0].prices[0].price > b.itemSizes[0].prices[0].price) { return -1; }
                                    return 0;
                                }));
                            }}
                        />
                    </div>
                    <div className={'flex'}>
                        <button type={'button'}
                            className={'bg-red rounded-full grow text-white text-2xl font-light py-4'}
                            onClick={closeModal}>
                            Çeşidləməni tamamla
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default SortModal;