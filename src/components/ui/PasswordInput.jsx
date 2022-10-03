import React from 'react';

const PasswordInput = ({ value, setValue, placeholder, label, id }) => {
    const [type, setType] = React.useState('password');

    const onClick = () => {
        setType(type === 'password' ? 'text' : 'password');
    }

    return (
        <>
            <label htmlFor={id}> {label} </label>
            <div className={'relative'}>
                <input
                    className='auth-form-input p-3'
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required={true}
                    placeholder={placeholder}
                />
                <svg className={'absolute right-3 top-4 hover:cursor-pointer'} onClick={onClick} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1615 9.05311C14.1615 10.7991 12.7455 12.2141 10.9995 12.2141C9.2535 12.2141 7.8385 10.7991 7.8385 9.05311C7.8385 7.30611 9.2535 5.89111 10.9995 5.89111C12.7455 5.89111 14.1615 7.30611 14.1615 9.05311Z" stroke="#9FA5C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.998 16.3549C14.806 16.3549 18.289 13.6169 20.25 9.05292C18.289 4.48892 14.806 1.75092 10.998 1.75092H11.002C7.194 1.75092 3.711 4.48892 1.75 9.05292C3.711 13.6169 7.194 16.3549 11.002 16.3549H10.998Z" stroke="#9FA5C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </>
    );
};

export default PasswordInput;