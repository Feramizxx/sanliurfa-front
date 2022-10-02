import React, { createContext } from 'react';
import { convertLinkToNumber } from '../helpers';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
    localStorage.setItem('link', String(convertLinkToNumber()));

    const _link = Number(localStorage.getItem('link'));
    const [link, setLink] = React.useState(_link ? _link : 1);

    const setValue = (value) => {
        localStorage.setItem('link', String(value));
        setLink(value);
    }

    return (
        <LinkContext.Provider value={{
            value: link,
            setValue
        }}>
            {children}
        </LinkContext.Provider>
    );
};

export default LinkContextProvider;