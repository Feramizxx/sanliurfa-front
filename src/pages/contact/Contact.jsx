import React, { memo } from 'react';
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";
import { routerStyle, mapStyle, iframeStyle } from './open-street-map-style'
const Contact = memo(() => {
    return (
        <div className='flex justify-center mb-20'>
            <div style={routerStyle}>
                <div style={mapStyle}>
                    <iframe
                        style={iframeStyle}
                        src="https://maps.google.com/maps?q=%C5%9Eanl%C4%B1%20Urfa%20restoran%2075%20Khudu%20Mammadov,%20Baku&t=&z=19&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0" />
                    <a href="https://123movies-to.org" /><br />
                    <a href="https://www.embedgooglemap.net">using google map on website</a>
                </div>
            </div>
            <div className='mt-96 min-sm:grid min-sm:mx-6 z-10'
                style={{
                    gridTemplateColumns: 'minmax(0, 40em) minmax(0, 30em)'
                }}
            >
                <ContactForm />
                <ContactData />
            </div>
        </div>
    );
});

export default Contact;