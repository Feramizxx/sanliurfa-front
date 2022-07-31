import React from "react";
import Counter from "../../components/ui/meal/Counter";

const Card = (props) => {
    return (
        <div className={'shadow-contact-input py-4 px-8 rounded-[20px] flex justify-between mb-10'}>
            <div className={'flex items-center'}>
                <div className={'text-[13px] text-white text-center font-medium bg-red rounded-full w-[22px] h-[22px] mr-6'}>{props.index}</div>
                <img className={'h-[137px] mr-8'} src={props.data.picture} />
                <div className={'flex flex-col justify-between h-full py-3'}>
                    <h3 className={'text-xl font-medium'}>{props.data.name}</h3>
                    <p className={'text-xs max-w-[335px] font-light'}>{props.data.description}</p>
                    <p className={'text-xs font-light'}>Çatdırılma: <span>{props.data.delivery}</span></p>
                </div>
            </div>
            <div className={'flex items-center'}>
                <div className={'flex flex-col justify-between items-center h-full py-3 mr-24'}>
                    <p className={'text-[#8F161A] text-[32px] font-semibold'}>{props.data.price}₼</p>
                    <Counter minNumber={1} defaultValue={props.data.number} />
                </div>
                <p className={'text-[#D21414] underline cursor-pointer'} onClick={() => {props.remove(props.data.id)}}>Sil</p>
            </div>
        </div>
    )
}

export default Card;