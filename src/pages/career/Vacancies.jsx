import React from 'react';
import List from "../../components/List";
import Vacancy from "./Vacancy";
import Modal from "react-modal";
import InfoBox from "./InfoBox";

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

const Vacancies = () => {
    const [vacancies, setVacancies] = React.useState([]);
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        const vacancies = [
            {
                id: 1,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 2,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 3,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 4,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 5,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 6,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 7,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            },
            {
                id: 8,
                name: 'Satış təmsilcisi',
                date: '19.06.2022',
                location: 'Bakı'
            }
        ];
        setVacancies(vacancies);
    },[]);

    const onVacancyClick = () => {
        setModal(true);
    }

    const onClose = () => {
        setModal(false);
    }

    return (
        <div className='overflow-y-hidden overflow-x-hidden bg-white h-[44em] mt-12 mb-12 sm:mb-0'>
            <h1 className='title text-primary-bg font-medium mx-12 mt-6'> Aktiv vakansiyalar </h1>
            <Modal isOpen={modal} onRequestClose={onClose} style={customStyles}>
                <InfoBox onClose={onClose} />
            </Modal>
            <List
                className='overflow-y-scroll flex items-center flex-col w-full h-full pr-[17px] sm:pl-1 pb-[17px] px box-content'
                data={vacancies}
                renderFunction={(vacancy) => <Vacancy vacancy={vacancy} onClick={onVacancyClick} key={vacancy.id} />}
            />
        </div>
    );
};

export default Vacancies;