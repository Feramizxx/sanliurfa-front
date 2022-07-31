import React from 'react';
import Button from "./ui/Button";
import {useNavigate} from "react-router";

const LoginForm = ({isVisible, setIsVisible}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const onClick = () => {
        navigate('signup');
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onMouseEnter = () => {
        setIsVisible(true);
    }

    const onMouseLeave = () => {
        setIsVisible(false);
    }

    return (
        <form onSubmit={onSubmit} className={'absolute w-[15em] bg-white p-3 mt-[16em] right-0 md:w-[20em]'}
            style={{
                display: isVisible? 'block' : 'none',
            }}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
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
            <hr className={'my-3'}/>
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