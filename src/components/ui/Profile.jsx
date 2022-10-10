import { useState, useRef, useContext } from "react";
import "../../assets/styles/profil.css"
import { useNavigate } from "react-router";
import useFetchCurrentUser from './../../hooks/useFetchCurretUser';
import PageLoader from './../PageLoader';
import useHover from './../../hooks/useHover';
import useFileUpload from './../../hooks/useFileUpload';
import { uploadProfileImage } from './../../api/uploadProfileImage';
import { AuthContext } from './../../contexts/AuthContext';
import { STORAGE_BASE_URL } from "../../api/config";
import Button from './Button';
import { updateUser } from './../../api/updateUser';
import { AxiosError } from 'axios';
import { validateNumber } from './meal/AddressesPage';

export const rewriteEmpty = (str) => {
  return str === '' ? undefined : str;
}

const Profile = () => {
  const navigate = useNavigate();
  const [phoneFirstClick, setPhoneFirstClick] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { currentUser, isUserLoading, userError } = useFetchCurrentUser(refetch);
  const [hover, onMouseEnter, onMouseLeave] = useHover();
  const { token, logOut } = useContext(AuthContext)
  const fileInputRef = useRef({});
  const [onButtonClick, onInputChange] = useFileUpload(
    fileInputRef,
    ['jpg', 'jpeg', 'png'],
    setErrorMessage,
    null,
    async (image) => {
      const data = await uploadProfileImage(image, token);
      setRefetch(!refetch);
    }
  );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const reset = () => {
    setFirstName('');
    setFirstName('');
    setEmail('');
    setPhone('');
  }

  if (isUserLoading) return <PageLoader />

  if (userError && userError instanceof AxiosError) {
    if (userError.response.status === 401) {
      logOut();
      navigate('/');
    }
  }

  const navigateToOrders = () => {
    navigate("/orders")
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        firstname: rewriteEmpty(firstName),
        lastname: rewriteEmpty(lastName),
        email: rewriteEmpty(email),
        phone_number: rewriteEmpty(phone)
      }

      await updateUser(data, token);
      reset();
      setRefetch(!refetch);
    } catch (error) {
      alert(error);
    }
  }

  const onPhoneClick = () => {
    if (phoneFirstClick) {
      setPhone('+994');
      setPhoneFirstClick(false);
    }
  }

  return (
    <>
      <div className="pt-[12em] w-[75%] mr-auto ml-auto">
        <form onSubmit={onSubmit} className="flex flex-col mb-6">
          <div className="xl:flex-col xl:mr-auto xl:ml-auto items-center ml-[80px] flex w-max-[350px] w-fit ">
            <div
              className="w-36 h-36 rounded-full bg-gray-200 bg-center bg-cover relative"
              style={{ backgroundImage: `url(${currentUser.imageUrl ? STORAGE_BASE_URL + currentUser.imageUrl : require('../../assets/img/default-avatar.png')})` }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {hover &&
                <>
                  <div onClick={onButtonClick} className="bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full rounded-full hover:cursor-pointer flex items-center justify-center">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 14C12.433 14 14 12.433 14 10.5C14 8.567 12.433 7 10.5 7C8.567 7 7 8.567 7 10.5C7 12.433 8.567 14 10.5 14Z" fill="white" fillOpacity="0.48" />
                      <path d="M7.35 0L5.4285 2.11111H2.1C0.945 2.11111 0 3.06111 0 4.22222V16.8889C0 18.05 0.945 19 2.1 19H18.9C20.055 19 21 18.05 21 16.8889V4.22222C21 3.06111 20.055 2.11111 18.9 2.11111H15.5715L13.65 0H7.35ZM10.5 15.8333C7.602 15.8333 5.25 13.4689 5.25 10.5556C5.25 7.64222 7.602 5.27778 10.5 5.27778C13.398 5.27778 15.75 7.64222 15.75 10.5556C15.75 13.4689 13.398 15.8333 10.5 15.8333Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                </>
              }
              <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={onInputChange}
                  ref={fileInputRef}
              />
            </div>
            <div className="xl:flex xl:flex-col items-center xl:ml-[0px] ml-[8px]">
              <h1 className="mb-2 text-[32px] ">{currentUser.firstname} {currentUser.lastname}</h1>
              {/* <span classNa me="text-[16px] cursor-pointer xl:ml-2 ">Düzəliş etmək</span> */}
              <hr className="w-full" />
            </div>
          </div>
          {errorMessage !== '' &&
            <p className="font-bold text-red max-w-[300px] text-center p-2"> {errorMessage} </p>
          }
          <div className="xl:flex  xl:flex-col w-[100%]  mt-[50px]">
            <span className="xl:ml-[0px] ml-[100px] lg:ml-[60px] font-semibold">Şəxsi məlumatlarım</span>
            <div id="profil-divBox" className="xl:flex xl:flex-col mt-[20px] grid   gap-y-5 grid-cols-2 place-items-center" >
              <input
                className="profile-input"
                placeholder={currentUser.firstname || "Ad"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="profile-input"
                placeholder={currentUser.lastname || 'Soyad'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="profile-input"
                placeholder={`${currentUser.phone_number || 'Mobil nömrə'}`}
                value={phone}
                onChange={(e) => validateNumber(e, setPhone, true)}
                onClick={onPhoneClick}
              />
              <input
                className="profile-input"
                placeholder={`${currentUser.email || 'Elektron ünvan'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full relative my-6">
            <Button
              theme={'default'}
              className="py-2 rounded-2xl absolute right-0 px-4"
            >
              Yadda saxla
            </Button>
          </div>
        </form>

        {/* Orders section */}

      </div >

      {/* <div>
        <div className=" flex w-[85%] mr-auto ml-auto justify-between">
          <span className="mt-10 font-semibold">Son Sifarişlərim</span>
          <button onClick={navigateToOrders} className="mt-10 font-semibold">Hamısı <hr /></button>
        </div>
        <OrderItems />
      </div> */}
    </>

  );
};

export default Profile;
