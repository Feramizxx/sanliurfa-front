import React from 'react';

const SocialMediaLink = ({children, href,className,theme}) => {
    const themes = {
        default: {
            borderColor: 'rgba(255,255,255,0.2)'
        },
        white: {
            borderColor: 'rgba(0,0,0,0.2)'
        }
    }

    return (
        <a href={ href } className={`${className}
            w-10 h-10 rounded-3xl flex items-center justify-center  
        `} style={{
            border: `2px solid ${themes[theme].borderColor}`
        }}>
            { children }
        </a>
    );
};

export default SocialMediaLink;