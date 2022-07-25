import React from 'react';
import { ReactComponent as Logo } from '../../assets/javachip-logo-footer.svg';

const TheJavaChipLogo = ({ className }) => {
    return (
        <Logo className={`w-48 h-20 ${className}`}/>
    );
};

export default TheJavaChipLogo;