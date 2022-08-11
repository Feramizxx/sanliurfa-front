import React from 'react';
import Button from "./ui/Button";
import {useNavigate} from "react-router";

const LoginForm = ({isVisible, setIsVisible, onLinkClick}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const onClick = () => {
        onLinkClick(0);
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
        <form onSubmit={onSubmit} className={'absolute w-[15em] bg-white p-3 mt-[18em] right-0 md:w-[20em] sm:right-[-2em] login-form'}
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
            {/*<button className='w-full bg-[#333333] rounded-xl text-white font-light flex items-center justify-evenly text-sm py-2 px-6 mb-2'>*/}
            {/*    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M20.369 10.728C20.3698 10.0466 20.3118 9.36637 20.1956 8.69479H10.6998V12.546H16.1385C16.0272 13.1611 15.7917 13.7474 15.446 14.2697C15.1004 14.7919 14.6519 15.2393 14.1275 15.5847V18.0846H17.3734C19.2739 16.3444 20.369 13.7709 20.369 10.728Z" fill="#4285F4"/>*/}
            {/*        <path d="M10.6997 20.5C13.417 20.5 15.7049 19.6139 17.3734 18.0862L14.1274 15.5864C13.224 16.1947 12.0605 16.5419 10.6997 16.5419C8.07334 16.5419 5.84414 14.7836 5.04699 12.4143H1.70319V14.9906C2.54126 16.6467 3.82635 18.0389 5.415 19.0118C7.00364 19.9847 8.8333 20.4999 10.6997 20.5Z" fill="#34A853"/>*/}
            {/*        <path d="M5.04698 12.414C4.62556 11.1724 4.62556 9.82793 5.04698 8.58639V6.01013H1.70317C0.998154 7.40333 0.630981 8.94096 0.630981 10.5002C0.630981 12.0594 0.998154 13.597 1.70317 14.9902L5.04698 12.414Z" fill="#FBBC04"/>*/}
            {/*        <path d="M10.6997 4.45879C12.1357 4.43549 13.5232 4.97429 14.5624 5.95872L17.4363 3.10469C15.6139 1.40488 13.1997 0.471659 10.6997 0.500656C8.8333 0.500741 7.00364 1.01598 5.415 1.98886C3.82635 2.96174 2.54126 4.35397 1.70319 6.0101L5.04699 8.58636C5.84414 6.21704 8.07334 4.45879 10.6997 4.45879Z" fill="#EA4335"/>*/}
            {/*    </svg>*/}
            {/*    <p> Or sign in with Google </p>*/}
            {/*</button>*/}
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