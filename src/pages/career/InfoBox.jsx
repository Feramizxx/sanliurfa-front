import React from 'react';
import CloseButton from "../../components/ui/CloseButton";

const InfoBox = ({onClose}) => {
    return (
        <div className='bg-white'>
            <CloseButton theme={'default'} onClick={onClose}/>
            <div>
                <p> Satış təmsilcisi </p>
                <div>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.033 31.066C24.3355 31.066 31.066 24.3355 31.066 16.033C31.066 7.7305 24.3355 1 16.033 1C7.7305 1 1 7.7305 1 16.033C1 24.3355 7.7305 31.066 16.033 31.066Z" stroke="#BB2025" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.6339 19.8174L16.0978 16.0435M16.0605 4.92102V16.0324V4.92102Z" stroke="#BB2025" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p> Bitmə tarixi: 05.08.2022 </p>
                </div>
            </div>
            <div>
                <h3> İş barədə məlumat: </h3>
                <ul>
                    <li> Məhsulların anbardan götürülməs </li>
                    <li> Əmək haqqı 550 AZN </li>
                    <li> İş qrafiki həftə içi 9:00 – 18:00, istirahət günü – şənbə, bazar </li>
                    <li> AR qanunvericiliyinə əsasən sənədləşmə </li>
                    <li> Yanacaq və telefon danışıq haqqının verilməsi </li>
                </ul>
            </div>
            <div>
                <h3> Namizədə tələblər: </h3>
                <ul>
                    <li> Orta təhsil </li>
                    <li> Sürücülük vəsiqəsi (BC kateqoriya) </li>
                    <li> Yük daşıma avtomobilini idarə etmə bacarığı </li>
                    <li> HoReCa sektorunda işləmək, qazanmaq və karyera qurmaq həvəsi </li>
                    <li> Bakı şəhərinin rayonları və məntəqələrini yaxşı tanımalı </li>
                    <li>
                        CV-lərinizi shanlıurfa.az email ünvanına yazıb göndərin, mövzu hissəsində vakansiyanın adını qeyd edin. Yalnız email vasitəsi
                        ilə göndərilən CV-lər qəbul olunur
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InfoBox;