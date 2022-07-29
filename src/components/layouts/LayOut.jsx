import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import * as helpers from '../../helpers'

const LayOut = ({children}) => {
    const initialLink = localStorage.getItem('currentLink');
    const [currentLink, setCurrentLink] = React.useState(initialLink? Number(initialLink) : 1);

    return (
        <>
            <Header currentLink={currentLink} setCurrentLink={setCurrentLink}/>
            <main>
                {children}
            </main>
            <Footer theme={helpers.getFooterTheme(currentLink)} setCurrentLink={setCurrentLink}/>
        </>
    );
};

export default LayOut;