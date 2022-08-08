import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import LinkContextProvider from "../../contexts/LinkContext";
import LanguageContextProvider from "../../contexts/LanguageContext";

const LayOut = ({children}) => {
    return (
        <LinkContextProvider>
            <LanguageContextProvider>
                <Header/>
                <main className='font-Roboto'>
                    {children}
                </main>
                <Footer/>
            </LanguageContextProvider>
        </LinkContextProvider>
    );
};

export default LayOut;