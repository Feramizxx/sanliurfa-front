import { useState, useContext } from 'react';
import Button from "./ui/Button";
import { useNavigate } from "react-router";
import { AxiosError } from 'axios';
import { login } from './../api/login';
import { AuthContext } from '../contexts/AuthContext';

const LoginForm = ({ isVisible, setIsVisible, onLinkClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const { loginUser } = useContext(AuthContext);


    const onClick = () => {
        onLinkClick(0);
        navigate('signup');
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password }
        try {
            const token = await login(data);
            loginUser(token);
        } catch (error) {
            if (error instanceof AxiosError && error.response.status === 400) {
                setErrorMessage('Email or password is incorrect.');
            } else {
                setErrorMessage('Could not log you in, please try again later.')
            }
        }
    }

    const onMouseEnter = () => {
        setIsVisible(true);
    }

    const onMouseLeave = () => {
        setIsVisible(false);
    }

    return (
        <form onSubmit={onSubmit} className={'absolute w-[15em] bg-white p-3 mt-[15.8em] right-0 md:w-[20em] sm:right-[-2em] login-form'}
            style={{
                display: isVisible ? 'block' : 'none',
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {errorMessage !== '' &&
                <p className='form-error'> {errorMessage} </p>
            }
            <input
                className={'auth-form-input'}
                type="email"
                required={true}
                placeholder={'Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className={'auth-form-input'}
                type="password"
                required={true}
                placeholder={'Şifrə'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className='flex justify-between w-full items-center'>
                <Button
                    theme={'default'}
                    className={'py-1 px-6 mt-2'}
                >
                    Daxil Ol
                </Button>
                <a href="#" style={{
                    color: '#007AFF',
                    fontSize: '12px'
                }}> Forgot Password? </a>
            </div>
            <hr className={'my-3'} />
            <Button
                theme={'default'}
                onClick={onClick}
                className={'w-full py-1'}
            >
                Qeydiyyatdan Keç
            </Button>
        </form>
    );
};

export default LoginForm;