import React, {useState} from "react";
import Counter from "../../components/ui/meal/Counter";

const Card = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div
            className={'shadow-contact-input py-4 px-8 rounded-[20px] flex justify-between mb-10 lg:flex-col lg:items-center'}>
            <div className={'flex items-center lg2:flex-col'}>
                <div className={'flex items-center sm:justify-center'}>
                    <div className={'text-[13px] text-white text-center font-medium bg-red rounded-full w-[22px] h-[22px] mr-6 sm:mr-1 xs:hidden'}>
                        {props.index}
                    </div>
                    <img className={'h-[137px] mr-8 xl:h-[60px] sm:mr-0'} src={props.data.picture}/>
                </div>
                <div className={'flex flex-col justify-between h-full py-3'}>
                    <h3 className={'text-xl font-medium xl:text-base'}>{props.data.name}</h3>
                    <p className={'text-xs max-w-[335px] font-light xl:max-w-[220px]'}>{props.data.description}</p>
                    <p className={'text-xs font-light'}>Çatdırılma: <span>{props.data.delivery}</span></p>
                </div>
            </div>
            <div className={'flex items-center sm:flex-col'}>
                <div className={'flex flex-col justify-between items-center h-full py-3 mr-24 xl:mr-2'}>
                    <p className={'text-[#8F161A] text-[32px] font-semibold xl:text-[24px]'}>{props.data.price}₼</p>
                    <Counter minNumber={1} defaultValue={props.data.number}
                             countDecrease={() => {setCount(count - 1)}} countIncrease={() => {setCount(count + 1)}} />
                </div>
                <p className={'text-[#D21414] underline cursor-pointer'} onClick={() => {
                    props.remove(props.data.id)
                }}>Sil</p>
            </div>
        </div>
    )
}

export default Card;