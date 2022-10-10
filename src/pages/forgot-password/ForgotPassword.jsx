import { useState } from 'react';
import Button from '../../components/ui/Button';
import { AxiosError } from 'axios';
import { forgotPassword } from './../../api/forgotPassword';
import MyModal from '../../components/MyModal';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [modalMessage, setModalMessage] = useState('Please confirm your password change via confirmation link that we sent to your email address. Redirecting to home page...')
    const [modal, setModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email);
        } catch (error) {
            if (error instanceof AxiosError && error.response.status === 404) {
                setErrorMessage('User with this email does not exist.');
            } else {
                setModalMessage('Something went wrong, please try again later on. Redirecting to home page...');
            }
        } finally {
            if (errorMessage === '') {
                setModal(true);
            }
        }
    }

    return (
        <>
            <MyModal visible={modal} onClose={() => {
                setModal(false);
                navigate('/');
            }}>
                <p className='text-xl font-bold text-red p-6 bg-white rounded-2xl'> {modalMessage} </p>
            </MyModal>
            <div className='flex items-center justify-center h-screen pt-40'>
                <form onSubmit={onSubmit} className="w-full flex flex-col items-center max-w-[400px] border-2 border-gray-200 p-6">
                    <h2 className='text-xl font-bold text-red'> Forgot Password </h2>
                    <div className='my-3 w-full'>
                        {errorMessage !== '' &&
                            <p className='form-error'> {errorMessage} </p>
                        }
                        <label htmlFor="email"> Email </label>
                        <input
                            id='email'
                            required={true}
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth-form-input"
                        />
                    </div>
                    <Button theme={'default'} className="py-1 px-8 rounded"> Confirm </Button>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;