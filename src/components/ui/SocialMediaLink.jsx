import React from 'react';

const SocialMediaLink = ({children, href,className}) => {
    return (
        <a href={ href } className={`${className}
            w-10 h-10 rounded-3xl border-solid
            border-white border-opacity-20 border-2 flex items-center justify-center
        `}>
            { children }
        </a>
    );
};

export default SocialMediaLink;