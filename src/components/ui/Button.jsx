import React from 'react';

const Button = ({children, onClick,theme,className,onMouseEnter, onMouseLeave}) => {

    const themes = {
        default: {
            bg: '#BB2025',
            text: 'white',
            borderColor: '#BB2025'
        },
        white: {
            bg: 'white',
            text: '#BB2025',
            borderColor: '#BB2025'
        }
    }

    return (
        <button
            className={`hover:cursor-pointer rounded font-bold ${className}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                backgroundColor: themes[theme].bg,
                color: themes[theme].text,
                border: `2px solid ${themes[theme].borderColor}`
            }}
        >
            {children}
        </button>
    );
};

export default Button;