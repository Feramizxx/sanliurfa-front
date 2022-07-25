import React from 'react';
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";

const Contact = () => {
    return (
        <div className='font-Roboto flex justify-center'>
            <div className='bg-contact-page bg-contain bg-no-repeat w-full h-full absolute -z-10 mt-20'>
                <img className='w-20 relative left-[56em] top-[5em]' src={require('../../assets/img/tower.png')} alt="a tower"/>
            </div>
            <div className='mt-96 grid grid-cols-2'>
                <ContactForm />
                <ContactData />
            </div>
        </div>
    );
};

export default Contact;