import React from 'react';

export const LanguageContext = React.createContext();

const dictionary = {
    aze: {
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
    }
}

const languages = ['aze','en'];

const LanguageContextProvider = ({children}) => {
    const _language = localStorage.getItem('language');
    const [language, setLanguage] = React.useState(_language? _language : 'aze');

    const setValue = (value) => {
        localStorage.setItem('language',value);
        setLanguage(value);
    }

    return (
        <LanguageContext.Provider value={{
            dictionary,
            languages,
            value: language,
            setValue
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;