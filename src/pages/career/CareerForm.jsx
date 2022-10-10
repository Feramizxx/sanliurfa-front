import useFileUpload from './../../hooks/useFileUpload';
import { useState, useRef } from 'react';
import FormData from 'form-data'
import MyModal from './../../components/MyModal';
import { postVacancyRequest } from './../../api/postVacancyRequest.';
import Dropdown from '../../components/DropDown';

const NO_VACANCY_MESSAGE = 'Hazirda boş vakansiya yoxdur...'

const CareerForm = ({ vacancies, setVacancies, vacanciesError }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('+994');
    const [email, setEmail] = useState('');
    const [vacancy, setVacancy] = useState(vacancies[0].vacancy || NO_VACANCY_MESSAGE);
    const [file, setFile] = useState(null);
    const [modal, setModal] = useState(false);
    const fileInputRef = useRef({});
    const [onCVButtonClick, onFileChange] = useFileUpload(
        fileInputRef,
        ['pdf'],
        setErrorMessage,
        setFile
    );

    const onSubmit = async (e) => {
        e.preventDefault();
        if (vacancy !== NO_VACANCY_MESSAGE) {
            if (errorMessage === '') {
                const formData = new FormData();
                formData.append('cv', file);
                formData.append('fullName', name);
                formData.append('phoneNumber', telephone);
                formData.append('email', email);
                formData.append('vacancy', vacancy);
                try {
                    console.log('Sending...')
                    const data = await postVacancyRequest(formData);
                    setModalMessage("Successfully sent a vacancy request.")
                } catch (error) {
                    setModalMessage("Could not sent a vacancy request. Please try again later.")
                } finally {
                    setModal(true);
                }
            }
        } else {
            setErrorMessage(NO_VACANCY_MESSAGE)
        }
    }

    return (
        <>
            <MyModal visible={modal} onClose={() => setModal(false)}>
                <p className='text-xl text-red font-bold bg-white rounded-2xl p-6'> {modalMessage} </p>
            </MyModal>
            <form className='bg-primary-bg text-white lg:px-12 px-24 py-12' onSubmit={onSubmit}>
                <h1 className='title font-medium text-white'> Ərizə forması </h1>
                <div>
                    <label htmlFor="name">Ad, Soyad</label>
                    <input
                        className='career-input'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="telephone">Əlaqə nömrəsi</label>
                    <input
                        className='career-input'
                        type="text"
                        id="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        className='career-input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    />

                    <label htmlFor="vacancy">Vakansiya</label>
                    {vacanciesError || vacancies.length === 0 ?
                        <input
                            className='career-input'
                            type="text"
                            id="vacancy"
                            value={vacancy}
                            onChange={null}
                            required={true}
                        /> :
                        <Dropdown
                            data={vacancies}
                            setCurrentCb={(vacancy) => setVacancy(vacancy.vacancy)}
                            setData={setVacancies}
                            sortCb={(vacancy) => vacancy.vacancy}
                            displayCb={(vacancy) => vacancy.vacancy}
                        />
                    }

                    <div className='mb-12'>
                        <p> CV </p>
                        <div className='flex items-center'>
                            <svg className='mr-2' width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10785 12.3256L10.7253 3.70812C11.6045 2.82893 12.797 2.335 14.0403 2.335C15.2837 2.335 16.4762 2.82893 17.3553 3.70812C18.2345 4.58731 18.7285 5.77975 18.7285 7.02312C18.7285 8.26648 18.2345 9.45892 17.3553 10.3381L7.41035 20.2812C7.05672 20.6228 6.58309 20.8118 6.09147 20.8075C5.59985 20.8032 5.12958 20.606 4.78194 20.2584C4.4343 19.9108 4.23711 19.4405 4.23283 18.9489C4.22856 18.4572 4.41755 17.9836 4.7591 17.63L14.7022 7.68499C14.873 7.50818 14.9675 7.27136 14.9654 7.02555C14.9632 6.77974 14.8646 6.54461 14.6908 6.37079C14.517 6.19697 14.2818 6.09837 14.036 6.09624C13.7902 6.0941 13.5534 6.18859 13.3766 6.35937L3.43347 16.3062C3.07531 16.6522 2.78963 17.066 2.59309 17.5235C2.39656 17.981 2.29311 18.4731 2.28878 18.971C2.28446 19.4689 2.37934 19.9627 2.56789 20.4236C2.75645 20.8844 3.03489 21.3031 3.38699 21.6552C3.73909 22.0073 4.15778 22.2858 4.61865 22.4743C5.07951 22.6629 5.57331 22.7578 6.07123 22.7534C6.56915 22.7491 7.06122 22.6457 7.51874 22.4491C7.97625 22.2526 8.39005 21.9669 8.73597 21.6087L18.681 11.6656C19.9117 10.4348 20.6032 8.76556 20.6032 7.02499C20.6032 5.28442 19.9117 3.61514 18.681 2.38437C17.4502 1.1536 15.7809 0.462158 14.0403 0.462158C12.2998 0.462158 10.6305 1.1536 9.39972 2.38437L0.780348 11C0.690807 11.0865 0.619386 11.1899 0.570253 11.3043C0.521119 11.4187 0.495258 11.5417 0.494176 11.6662C0.493094 11.7907 0.516814 11.9141 0.563953 12.0293C0.611091 12.1445 0.680703 12.2492 0.768728 12.3372C0.856752 12.4253 0.961426 12.4949 1.07664 12.542C1.19186 12.5891 1.31531 12.6129 1.43979 12.6118C1.56427 12.6107 1.68729 12.5848 1.80166 12.5357C1.91604 12.4866 2.01949 12.4152 2.10597 12.3256H2.10785Z" fill="white" />
                            </svg>
                            {file &&
                                <p className='font-bold my-1 mx-2'> Uploaded </p>
                            }
                            <div
                                className='bg-white text-primary-bg rounded-3xl px-6 py-1 hover:cursor-pointer'
                                onClick={onCVButtonClick}
                            >
                                Yüklə
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={onFileChange}
                            />
                        </div>
                        {errorMessage !== '' &&
                            <p className='font-bold mt-3 mx-2'> {errorMessage} </p>
                        }
                    </div>
                    <button className='text-primary-bg bg-white rounded-3xl py-2 px-12 font-bold'> Göndər </button>
                </div>
            </form >
        </>
    );
};

export default CareerForm;