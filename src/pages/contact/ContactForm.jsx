import { useState } from 'react';
import { postContactRequest } from './../../api/postContactRequest';
import MyModal from './../../components/MyModal';

const ContactForm = () => {
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

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
                    <h1 className='title text-primary-bg'> Təklif və şikayətlər </h1>

                    <label htmlFor="name">Ad, Soyad</label>
                    <input
                        className='contact-input'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="telephone">Əlaqə nömrəsi</label>
                    <input
                        className='contact-input'
                        type="text"
                        id="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        className='contact-input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="message">Mesajınız</label>
                    <textarea
                        className='contact-input resize-none'
                        id="message"
                        cols="40" rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required={true}
                    />
                    <button className='text-white bg-primary-bg rounded-3xl p-2 w-44'> Göndər </button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;