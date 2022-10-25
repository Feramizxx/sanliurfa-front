import { useContext } from 'react';
import { useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { postContactRequest } from './../../api/postContactRequest';
import MyModal from './../../components/MyModal';

const ContactForm = () => {
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const { content } = useContext(LanguageContext);

    const onClose = () => {
        setModal(false);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            fullName: name,
            mobile: telephone,
            email,
            message
        }

        try {
            await postContactRequest(data);
            setModalMessage('Your message was successfully sent');
        } catch (error) {
            setModalMessage('Could not sent your message');
        } finally {
            setModal(true)
        }
    }

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
            <MyModal visible={modal} onClose={onClose}>
                <div className='bg-white p-6 rounded-xl'>
                    <p className='tex-xl font-bold'> {modalMessage} </p>
                </div>
            </MyModal>
            <div className='bg-contact-form bg-no-repeat p-10 shadow-contact-form bg-contain rounded-l-[40px] bg-white'>
                <form onSubmit={onSubmit}>
                    <h1 className='title text-primary-bg'> {content.titles.suggestions} </h1>

                    <label htmlFor="name">{content.inputs.firstName}, {content.inputs.secondName}</label>
                    <input
                        className='contact-input'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="telephone"> {content.inputs.mobileNumber} </label>
                    <input
                        className='contact-input'
                        type="text"
                        id="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="email"> {content.inputs.email} </label>
                    <input
                        className='contact-input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="message"> {content.inputs.message} </label>
                    <textarea
                        className='contact-input resize-none'
                        id="message"
                        cols="40" rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required={true}
                    />
                    <button className='text-white bg-primary-bg rounded-3xl p-2 w-44'> {content.buttons.send} </button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;