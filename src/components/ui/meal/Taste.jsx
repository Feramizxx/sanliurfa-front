import React from "react";
import Leaf from "../../../assets/icons/taste/leaf.svg";
import Pepper from "../../../assets/icons/taste/pepper.svg";

const Taste = (props) => {
    if (props.taste !== '') return (
        <div className={`absolute top-0 z-[1] ${props.type === 'menu' ? 'right-0' : 'left-0 translate-x-6 translate-y-6'}`}>
            <div className={`relative bg-white rounded-full ${props.type === 'menu' ? 'w-[52px] h-[52px]' : 'w-8 h-8'}`}>
                <img src={props.taste === 'vegan' ? Leaf : (props.taste === 'spicy' ? Pepper : '')}
                     className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${props.type === 'modal' ? 'w-5 h-5' : ''}`} />
            </div>
        </div>
    );
    else return <></>
}

export default Taste;