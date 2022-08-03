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

const InfoBox = ({onClose}) => {
    const [modal, setModal] = React.useState(false);

    const onModalClose = () => {
        setModal(false);
    }

    const onOpen = () => {
        setModal(true);
    }

    return (
        <div className='bg-white relative pl-14 overflow-y-scroll'
            style={{
                maxWidth: 800,
                height: 600
            }}
        >
            <CloseButton theme={'red'} close={onClose}/>
            <div className={'flex items-center justify-between pb-12 pt-16 sm:flex-col'}>
                <p className={'text-3xl text-primary-bg font-bold'}> Satış təmsilcisi </p>
                <div className={'flex items-center text-lg sm:pt-2'}>
                    <svg className={'mr-3'} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.033 31.066C24.3355 31.066 31.066 24.3355 31.066 16.033C31.066 7.7305 24.3355 1 16.033 1C7.7305 1 1 7.7305 1 16.033C1 24.3355 7.7305 31.066 16.033 31.066Z" stroke="#BB2025" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.6339 19.8174L16.0978 16.0435M16.0605 4.92102V16.0324V4.92102Z" stroke="#BB2025" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={'text-primary-bg pr-6'}> Bitmə tarixi: 05.08.2022 </p>
                </div>
            </div>
            <div className={'underline text-lg'}>
                <h3 className={'text-primary-bg font-bold mb-6'}> İş barədə məlumat: </h3>
                <ul className={'info-box-list'}>
                    <li> Məhsulların anbardan götürülməs </li>
                    <li> Əmək haqqı 550 AZN </li>
                    <li> İş qrafiki həftə içi 9:00 – 18:00, istirahət günü – şənbə, bazar </li>
                    <li> AR qanunvericiliyinə əsasən sənədləşmə </li>
                    <li> Yanacaq və telefon danışıq haqqının verilməsi </li>
                </ul>
            </div>
            <div className={'underline text-lg'}>
                <h3 className={'text-primary-bg font-bold my-6'}> Namizədə tələblər: </h3>
                <ul className={'info-box-list'}>
                    <li> Orta təhsil </li>
                    <li> Sürücülük vəsiqəsi (BC kateqoriya) </li>
                    <li> Yük daşıma avtomobilini idarə etmə bacarığı </li>
                    <li> HoReCa sektorunda işləmək, qazanmaq və karyera qurmaq həvəsi </li>
                    <li> Bakı şəhərinin rayonları və məntəqələrini yaxşı tanımalı </li>
                    <li>
                        CV-lərinizi <span className={'text-primary-bg'}> shanlıurfa.az </span> email ünvanına yazıb göndərin, mövzu hissəsində vakansiyanın adını qeyd edin. Yalnız email vasitəsi
                        ilə göndərilən CV-lər qəbul olunur
                    </li>
                </ul>
            </div>
            <button className={'py-2 px-6 my-6 font-bold rounded-3xl bg-primary-bg text-white'} onClick={onOpen}> Müraciət et </button>
            <Modal isOpen={modal} onRequestClose={onModalClose} style={customStyles}>
                <SmallCareerForm onClose={onModalClose}/>
            </Modal>
        </div>
    );
};

export default InfoBox;