import { useState } from 'react';
import Button from '../../components/ui/Button';
import { validatePasswordCharacter } from './../signup/Signup';
import { useParams, useNavigate } from 'react-router';
import { resetPassword } from './../../api/resetPassword';
import MyModal from '../../components/MyModal';

const ERRORS_STATUS = {
    PASSWORDS_MISMATCH: "PASSWORD_MISMATCH",
    PASSWORD_LENGTH: "PASSWORD_LENGTH",
    PASSWORD_SYMBOLS: "PASSWORD_SYBMOLS"
}

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('Password was successfully changed, redirecting to home page...');
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmedPassword) {
            if (password.length >= 8 && password.length <= 20) {
                if (validatePasswordCharacter(password)) {
                    const data = { password, token }
                    try {
                        await resetPassword(data);
                    } catch (error) {
                        setModalMessage('Something went wrong, please try later on. Redirecting to home page...')
                    } finally {
                        setError(null);
                        setModal(true);
                    }

                } else {
                    setError({
                        status: ERRORS_STATUS.PASSWORD_SYMBOLS,
                        message: "Password must contain only letters and numbers."
                    })
                }
            } else {
                setError({
                    status: ERRORS_STATUS.PASSWORD_LENGTH,
                    message: "Password length must be between 8 and 20 characters"
                });
            }
        } else {
            setError({
                status: ERRORS_STATUS.PASSWORDS_MISMATCH,
                message: "Password and confirmed password are not the same."
            });
        }
    }

    return (
        <>
            <MyModal visible={modal} onClose={() => {
                setModal(false);
                navigate('/');
            }}>
                <p className='font-bold text-xl text-red p-6 bg-white rounded-xl'> {modalMessage} </p>
            </MyModal>
            <div className='py-40 flex items-center justify-center h-[100vh] '>
                <form onSubmit={onSubmit} className="w-full max-w-[400px] p-2 border-2 border-gray-200 flex flex-col items-center">
                    <h2 className='text-xl text-center text-red font-bold'> New Password </h2>

                    {error && (error.status === ERRORS_STATUS.PASSWORD_LENGTH || error.status === ERRORS_STATUS.PASSWORD_SYMBOLS) &&
                        <p className='form-error'> {error.message} </p>
                    }
                    <div className='w-full mt-2'>
                        <label htmlFor="password"> Password </label>
                        <input
                            required={true}
                            id='password'
                            type="password"
                            className="auth-form-input"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && error.status === ERRORS_STATUS.PASSWORDS_MISMATCH &&
                        <p className='form-error'> {error.message} </p>
                    }
                    <div className='w-full my-2'>
                        <label htmlFor="confirm-password"> Confirm Password </label>
                        <input
                            required={true}
                            id='confirm-password'
                            type="password"
                            className="auth-form-input"
                            placeholder='Confirm your password'
                            value={confirmedPassword}
                            onChange={(e) => setConfirmedPassword(e.target.value)}
                        />
                    </div>

                    <Button
                        theme={'default'}
                        className="py-1 px-8 rounded"
                    > Reset Password </Button>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;