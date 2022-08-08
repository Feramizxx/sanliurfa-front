import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import * as helpers from '../../helpers'
import LinkContextProvider from "../../contexts/LinkContext";

const LayOut = ({children}) => {
    const [currentLink, setCurrentLink] = React.useState(1);


    return (
        <LinkContextProvider>
            <Header/>
            <main className='font-Roboto'>
                {children}
            </main>
            <Footer/>
        </LinkContextProvider>
    );
};

export default LayOut;