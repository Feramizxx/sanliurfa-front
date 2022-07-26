import React from "react";
import CloseIcon from "../../assets/icons/buttons/close.svg";

const CloseButton = (props) => {
    return (
        <div className={'absolute top-0 right-0 -translate-x-6 translate-y-6 cursor-pointer'} onClick={props.close}>
            <div className={'rounded-full bg-white w-8 h-8 relative'}>
                <img src={CloseIcon} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}/>
            </div>
        </div>
    )
}

export default CloseButton;