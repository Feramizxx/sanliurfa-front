import React from 'react';
import Button from "../../components/ui/Button";
import {useNavigate} from "react-router";
import PasswordInput from "../../components/ui/PasswordInput";

const Signup = () => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onClick = () => {
        navigate('/');
    }

    return (
        <div className={'sm:flex sm:justify-center sm:items-center pt-40 px-3 pb-3 mb-8'}>
            <form onSubmit={onSubmit} className={'flex justify-center items-center flex-col sm:max-w-[600px]'}>
                <h3 className='font-bold text-[1.5rem] text-primary-bg'> Sign Up </h3>
                <div>
                    <label htmlFor="name"> First Name </label>
                    <input
                        className='auth-form-input p-3'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                        placeholder={'Jezeniel'}
                    />

                    <label htmlFor="surname"> Last Name </label>
                    <input
                        className='auth-form-input p-3'
                        type="text"
                        id="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required={true}
                        placeholder={'Zapanta'}
                    />

                    <label htmlFor="phone"> Mobile Number </label>
                    <input
                        className='auth-form-input p-3'
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required={true}
                        placeholder={'Enter your mobile number'}
                    />

                    <label htmlFor="email"> Email Address </label>
                    <input
                        className='auth-form-input p-3'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        placeholder={'Enter your email address'}
                    />

                    <label htmlFor="password"> Password </label>
                    <PasswordInput
                        id="password"
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter Password'}
                    />

                    <ul className={'text-xs list-disc list-inside text-input-text my-3'}>
                        <li> Password should be 8-20 characters </li>
                        <li> Password should have a number or acceptable characters </li>
                    </ul>

                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <PasswordInput
                        id="confirmPassword"
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        required={true}
                        placeholder={'Re-type password'}
                    />
                </div>
                <div className={'w-full flex'}>
                    <Button
                        theme={'white'}
                        onClick={onClick}
                        className={'w-full py-3'}
                    >
                        Back
                    </Button>
                    <Button
                        theme={'default'}
                        className={'w-full py-3 ml-1'}
                    >
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Signup;