import React, {memo} from 'react';
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";

const Contact = memo(() => {
    return (
        <div className='font-Roboto flex justify-center mb-20'>
            <div className='bg-contact-page bg-contain bg-no-repeat w-[100vw] h-[100vh] absolute -z-10 mt-20'/>
            <img className='w-[5vw] absolute left-[58vw] top-[20vh] transition-all hover:cursor-pointer hover:w-[6vw]' src={require('../../assets/img/tower.png')} alt="a tower"/>
            <div className='mt-96 grid grid-cols-2'>
                <ContactForm />
                <ContactData />
            </div>
        </div>
    );
});

export default Contact;