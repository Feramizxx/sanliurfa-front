import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import LinkContextProvider from "../../contexts/LinkContext";
import LanguageContextProvider from "../../contexts/LanguageContext";
import AuthContextProvider from '../../contexts/AuthContext';

const LayOut = ({ children }) => {
    return (
        <AuthContextProvider>
            <LinkContextProvider>
                <LanguageContextProvider>
                    <Header />
                    <main className='font-Roboto'>
                        {children}
                    </main>
                    <Footer />
                </LanguageContextProvider>
            </LinkContextProvider>
        </AuthContextProvider>
    );
};

export default LayOut;