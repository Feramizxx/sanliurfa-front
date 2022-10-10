import React from 'react';
// import List from "../../components/List";
import List from "../../components/List";
import Vacancy from "./Vacancy";
import Modal from "react-modal";
import InfoBox from "./InfoBox";
import useFetchVacancies from './../../hooks/useFetchVacancies';
import { useContext, useState } from 'react';
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../../components/PageLoader';

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

const Vacancies = ({ vacancies, vacanciesError }) => {
    const [modal, setModal] = useState(false);
    const [clickedVacancy, setClickedVacancy] = useState(null);

    const onVacancyClick = (vacancy) => {
        setClickedVacancy(vacancy)
        setModal(true);
    }

    const onClose = () => {
        setModal(false);
    }

    return (
        <div className={`overflow-y-hidden  overflow-x-hidden bg-white h-[40em] mt-12 mb-1 min-sm:mb-0 flex justify-start flex-col`}>
            <h1 className='title text-primary-bg font-medium mx-12 mt-6'> Aktiv vakansiyalar </h1>
            <Modal isOpen={modal} onRequestClose={onClose} style={customStyles}>
                <InfoBox onClose={onClose} vacancy={clickedVacancy} />
            </Modal>
            {!vacanciesError ?
                <List
                    className='overflow-y-scroll flex flex-col w-full h-full min-sm:pl-1 pb-[17px] pr-[17px] box-content'
                    data={vacancies}
                    renderFunction={(vacancy) => <Vacancy vacancy={vacancy} onClick={() => onVacancyClick(vacancy)} key={vacancy.id} />}
                /> :
                <div className='w-full h-full flex items-center justify-center'>
                    <p className='text-xl font-bold text-red'> Could not load vacancies... </p>
                </div>
            }
        </div>
    );
};

export default Vacancies;