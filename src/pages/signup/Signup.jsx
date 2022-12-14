import { useState } from 'react';
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router";
import PasswordInput from "../../components/ui/PasswordInput";
import { AxiosError } from 'axios';
import { signup } from '../../api/signup';
import MyModal from '../../components/MyModal';
import { validateNumber } from './../../components/ui/meal/AddressesPage';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const PASSWORD_MATCHING_ERROR = 'PASSWORDS_MATCHING_ERROR';
const PASSWORD_LENGTH_ERROR = 'PASSWORD_LENGTH_ERROR';
const INVALID_CHARS_ERROR = 'INVALID_CHARS_ERROR';
const USER_ALREADY_EXIST_ERROR = 'USER_ALREADY_EXIST_ERROR';

export const validatePasswordCharacter = (password) => /^[A-Za-z0-9]*$/.test(password);

const Signup = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('+994');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [modalMessage, setModalMessage] = useState('Please confirm your account in your email inbox. We sent you a confirmation link...');
    const [modal, setModal] = useState(false);
    const { content } = useContext(LanguageContext);

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            if (password.length >= 8 && password.length <= 20) {
                if (validatePasswordCharacter(password)) {

                    const data = {
                        firstname: name,
                        lastname: surname,
                        email,
                        password,
                        phone_number: phone
                    }
                    try {
                        await signup(data);
                        setModal(true);
                        setErrorMessage(null);
                    } catch (error) {
                        if (error instanceof AxiosError) {
                            if (error.response.status === 409) {
                                setErrorMessage({
                                    status: USER_ALREADY_EXIST_ERROR,
                                    message: 'This gmail or phone number already exist, please provide another email address.'
                                })
                            }
                        } else {
                            setModalMessage('Something went wrong, please try again later on.');
                            setModal(true);
                        }
                    }
                } else {
                    setErrorMessage({ status: INVALID_CHARS_ERROR });
                }
            } else {
                setErrorMessage({ status: PASSWORD_LENGTH_ERROR });
            }
        } else {
            setErrorMessage({
                status: PASSWORD_MATCHING_ERROR,
                message: 'Password and confirmed password are not matching to each other.'
            });
        }
    }

    const onClick = () => {
        navigate('/');
    }


    return (
        <>
            <MyModal visible={modal} onClose={() => setModal(false)}>
                <p className='text-xl font-bold text-red p-6 bg-white rounded-xl'> {modalMessage} </p>
            </MyModal>
            <div className={'min-sm:flex min-sm:justify-center min-sm:items-center pt-40 px-3 pb-3 mb-8'}>
                <form onSubmit={onSubmit} className={'flex justify-center items-center flex-col min-sm:max-w-[600px]'}>
                    <h3 className='font-bold text-[1.5rem] text-primary-bg'> {content.auth.signup} </h3>
                    <div>
                        <label htmlFor="name"> {content.inputs.firstName} </label>
                        <input
                            className='auth-form-input p-3'
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                            placeholder={'Jezeniel'}
                        />

                        <label htmlFor="surname"> {content.inputs.secondName} </label>
                        <input
                            className='auth-form-input p-3'
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required={true}
                            placeholder={'Zapanta'}
                        />

                        <label htmlFor="phone"> {content.inputs.mobileNumber} </label>
                        {errorMessage && errorMessage.status === USER_ALREADY_EXIST_ERROR &&
                            <p className='form-error'> {errorMessage.message} </p>
                        }
                        <input
                            className='auth-form-input p-3'
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => validateNumber(e, setPhone, true)}
                            required={true}
                            placeholder={content.inputs.mobileNumber}
                        />

                        <label htmlFor="email"> {content.inputs.email} </label>
                        {errorMessage && errorMessage.status === USER_ALREADY_EXIST_ERROR &&
                            <p className='form-error'> {errorMessage.message} </p>
                        }
                        <input
                            className='auth-form-input p-3'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            placeholder={content.inputs.email}
                        />

                        <label htmlFor="password"> {content.inputs.password} </label>
                        <PasswordInput
                            id="password"
                            value={password}
                            setValue={setPassword}
                            placeholder={content.inputs.password}
                        />

                        <ul className={'text-xs list-disc list-inside my-3'}>
                            <li className={`${errorMessage && errorMessage.status === PASSWORD_LENGTH_ERROR ? 'form-error' : 'text-input-text'}`}> {content.restrictions.passwordLength} </li>
                            <li className={`${errorMessage && errorMessage.status === INVALID_CHARS_ERROR ? 'form-error' : 'text-input-text'}`}> {content.restrictions.passwordContent} </li>
                        </ul>

                        <label htmlFor="confirmPassword"> {content.inputs.confirmPassword} </label>
                        {errorMessage && errorMessage.status === PASSWORD_MATCHING_ERROR &&
                            <p className='form-error'> {errorMessage.message} </p>
                        }
                        <PasswordInput
                            id="confirmPassword"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            required={true}
                            placeholder={content.inputs.confirmPassword}
                        />
                    </div>
                    <div className={'w-full flex'}>
                        <div
                            onClick={onClick}
                            className={'hover:cursor-pointer w-full py-3 rounded font-bold flex items-center justify-center text-[#BB2025] border-2 border-[#BB2025]'}
                        >
                            {content.buttons.back}
                        </div>
                        <Button
                            theme={'default'}
                            className={'w-full py-3 ml-1'}
                        >
                            {content.auth.signup}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;