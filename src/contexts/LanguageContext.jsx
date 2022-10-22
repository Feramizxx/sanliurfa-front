import React from 'react';
import { az, ru, en } from '../assets/storage';

export const LanguageContext = React.createContext();

const dictionary = { az, en, ru }
const languages = ['en', 'az', 'ru'];

const LanguageContextProvider = ({ children }) => {
    const _language = localStorage.getItem('language');
    const [language, setLanguage] = React.useState(_language ? _language : 'en');

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