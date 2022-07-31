import React from 'react';
import { useNavigate } from 'react-router'

const Logo = ({theme, setCurrentLink}) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        setCurrentLink(1);
    }

    return (
        <img onClick={onClick} className='w-28 h-20 hover:cursor-pointer' src={theme === 'default'? require('../../assets/img/default-logo.png') : require('../../assets/img/white-logo.png') } alt="logo"/>
    );
};

export default Logo;