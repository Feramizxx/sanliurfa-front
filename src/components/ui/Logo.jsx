import React from 'react';

const Logo = ({theme}) => {
    return (
        <img className='w-28 h-20' src={theme === 'default'? require('../../assets/img/default-logo.png') : require('../../assets/img/white-logo.png') } alt="logo"/>
    );
};

export default Logo;