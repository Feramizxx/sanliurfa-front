import { createContext, useState } from 'react';
import { convertLinkToNumber } from '../helpers';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
    localStorage.setItem('link', String(convertLinkToNumber()));

    const _link = Number(localStorage.getItem('link'));
    const [link, setLink] = useState(_link ? _link : 1);
    const [loginFormErrorMessage, setLoginFormErrorMessage] = useState(null);
    const [messageBox, setMessageBox] = useState(false);
    const [loginForm, setLoginForm] = useState(false);

    const setValue = (value) => {
        localStorage.setItem('link', String(value));
        setLink(value);
    }

    return (
        <LinkContext.Provider value={{
            value: link,
            setValue,
            loginFormErrorMessage,
            setLoginFormErrorMessage,
            messageBox,
            setMessageBox,
            loginForm,
            setLoginForm
        }}>
            {children}
        </LinkContext.Provider>
    );
};

export default LinkContextProvider;