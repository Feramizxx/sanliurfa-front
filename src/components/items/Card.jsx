import React from "react";

const Card = (props) => {
    return (
        <div className={`w-[253px] flex flex-col items-center shadow-card rounded-2xl py-6 ${props.central ? 'mx-16 md:my-8' : ''}`}>
            <img src={props.icon} className={'mb-3'} />
            <h5 className={'text-base mb-2'}>{props.heading}</h5>
            <p className={'text-base opacity-50'}>{props.subheading}</p>
        </div>
    )
}

export default Card;