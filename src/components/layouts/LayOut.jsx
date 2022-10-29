import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import GlobalContextProvider from '../../contexts/GlobalContext';

const LayOut = ({ children }) => {
    return (
        <GlobalContextProvider>
            <Header />
            <main className='font-Roboto overflow-x-hidden'>
                {children}
            </main>
            <Footer />
        </GlobalContextProvider>
    );
};

export default LayOut;