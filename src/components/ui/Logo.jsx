import React from 'react';
import { useNavigate } from 'react-router'
import {LinkContext} from "../../contexts/LinkContext";
import {scrollTop} from "../../helpers";

const Logo = ({theme}) => {
    const linkContext = React.useContext(LinkContext);
    const navigate = useNavigate();

    const onClick = () => {
        scrollTop();
        linkContext.setValue(1);
        navigate('/');
    }

    return (
        <img onClick={onClick} className='w-28 h-20 hover:cursor-pointer' src={theme === 'default'? require('../../assets/img/default-logo.png') : require('../../assets/img/white-logo.png') } alt="logo"/>
    );
};

export default Logo;