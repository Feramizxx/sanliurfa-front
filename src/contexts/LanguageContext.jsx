import React from 'react';

export const LanguageContext = React.createContext();

const dictionary = {
    az: {
        links: {
            home: 'Əsas səhifə',
            about: 'Haqqımızda ',
            menu: ' Menyu',
            campaigns: 'Kampaniyalar',
            news: 'Xəbərlər',
            career: 'Karyera',
            contact: 'Əlaqə'
        }
    },
    en: {
        links: {
            home: 'Home',
            about: 'About Us',
            menu: 'Menu',
            campaigns: 'Campaigns',
            news: 'News',
            career: 'Career',
            contact: 'Contacts'
        }
    },
    ru: {
        links: {
            home: 'Домашняя Страница',
            about: 'О нас',
            menu: 'Меню',
            campaigns: 'Компании',
            news: 'Новости',
            career: 'Карьера',
            contact: 'Контакты'
        }
    }
}

const languages = ['az', 'en', 'ru'];

const LanguageContextProvider = ({ children }) => {
    const _language = localStorage.getItem('language');
    const [language, setLanguage] = React.useState(_language ? _language : 'az');

    const setValue = (value) => {
        localStorage.setItem('language', value);
        setLanguage(value);
    }

    return (
        <LanguageContext.Provider value={{
            content: dictionary[language],
            languages,
            value: language,
            setValue
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;