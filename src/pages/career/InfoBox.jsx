import React from 'react';
import CloseButton from "../../components/ui/CloseButton";
import Modal from "react-modal";
import CareerForm from "./CareerForm";
import SmallCareerForm from "./SmallCareerForm";

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

const InfoBox = ({ onClose, vacancy }) => {
    return (
        <div className='bg-white relative pl-14 overflow-y-scroll'
            style={{
                maxWidth: 800,
                height: 600
            }}
        >
            <CloseButton theme={'red'} close={onClose} />
            <div className={'flex items-center justify-between pb-12 pt-16 sm:flex-col'}>
                <p className={'text-3xl text-primary-bg font-bold mr-3'}> {vacancy.vacancy || 'Vacancy is not provided...'} </p>
                <div className={'flex items-center text-lg sm:pt-2'}>
                    <svg className={'mr-3'} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.033 31.066C24.3355 31.066 31.066 24.3355 31.066 16.033C31.066 7.7305 24.3355 1 16.033 1C7.7305 1 1 7.7305 1 16.033C1 24.3355 7.7305 31.066 16.033 31.066Z" stroke="#BB2025" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22.6339 19.8174L16.0978 16.0435M16.0605 4.92102V16.0324V4.92102Z" stroke="#BB2025" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className={'text-primary-bg pr-6'}> Bitmə tarixi: {vacancy.expiresAt || 'Expiration date is not provided...'} </p>
                </div>
            </div>
            <div className={'underline text-lg'}>
                <h3 className={'text-primary-bg font-bold mb-6'}> İş barədə məlumat: </h3>
                {(Array.isArray(vacancy.information) && vacancy.information.length === 0) ?
                    <p> Information is not provided... </p> :
                    <ul className='info-box-list'>
                        {vacancy.information.map(info => <li key={info.id}> {info.information} </li>)}
                    </ul>
                }

            </div>
            <div className={'underline text-lg'}>
                <h3 className={'text-primary-bg font-bold my-6'}> Namizədə tələblər: </h3>
                {(Array.isArray(vacancy.requirements) && vacancy.requirements.length === 0) ?
                    <p> Requirements are not provided... </p> :
                    <ul className='info-box-list'>
                        {vacancy.requirements.map(requirement => <li key={requirement.id}> {requirement.requirement} </li>)}
                    </ul>
                }
            </div>
        </div>
    );
};

export default InfoBox;