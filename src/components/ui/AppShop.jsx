import React from 'react';

const AppShop = ({logo, href, name, description, theme, className, isBordered}) => {
    const themes = {
        white: {
            bg: 'white',
            text: 'black',
        },
        black: {
            bg: 'black',
            text: 'white',
        }
    }

    return (
        <a
            href={href}
            className={`flex items-center justify-evenly w-44 rounded-3xl p-1 ${className}`}
            style={{
                color: themes[theme].text,
                backgroundColor: themes[theme].bg,
                border: isBordered? '2px solid black' : 'none'
            }}
        >
            <img src={logo} alt="app-shop-logo" className='w-5 h-6'/>
            <div>
                <p className={'font-medium text-sm'}> {description} </p>
                <p className={'font-bold'}> {name} </p>
            </div>
        </a>
    );
};

export default AppShop;