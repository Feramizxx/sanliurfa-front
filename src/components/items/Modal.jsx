import React from 'react';

const Modal = ({isVisible, setIsVisible, children}) => {
    const onShadowClick = () => {
        setIsVisible(false);
    }

    const onClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className='fixed bg-black bg-opacity-20 z-50 top-0 right-0 left-0 bottom-0' style={{display: isVisible? 'block' : 'none'}} onClick={onShadowClick}>
            <div className='m-52' onClick={onClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;