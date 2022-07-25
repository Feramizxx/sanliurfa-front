import React from 'react';

const ContactForm = () => {
    function onSubmit(e) {
        e.preventDefault();
    }

    const [name,setName] = React.useState('');
    const [telephone,setTelephone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    return (
        <div className='bg-contact-form bg-no-repeat p-10 shadow-contact-form bg-contain rounded-l-3xl bg-white'>
            <form onSubmit={onSubmit}>
                <h1 className='contact-title text-primary-bg'> Təklif və şikayətlər </h1>

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
    );
};

export default ContactForm;