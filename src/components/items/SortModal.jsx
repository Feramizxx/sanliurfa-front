import React, {useState} from "react";
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

const SortModal = (props) => {
    return (
        <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal} style={customStyles}>
            <div className={'max-w-[646px] relative px-8 pb-6 pt-20'}>
                <CloseButton close={props.closeModal} theme={'red'}/>
                <h2 className={'text-4xl font-bold text-center mb-8'}>Sort</h2>
                <form>
                    <div className={'min-w-[280px] mb-5'}>
                        <Radio size={'a-z'} label={'A-dan Z-yə'} name={'sort'}/>
                        <Radio size={'z-a'} label={'Z-dən A-ya'} name={'sort'}/>
                        <Radio size={'cheap-expensive'} label={'Ucuzdan bahaya'} name={'sort'}/>
                        <Radio size={'expensive-cheap'} label={'Bahadan ucuza'} name={'sort'}/>
                    </div>
                    <div className={'flex'}>
                        <button type={'button'}
                                className={'bg-red rounded-full grow text-white text-2xl font-light py-4'}
                                onClick={props.closeModal}>
                            Çeşidləməni tamamla
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default SortModal;