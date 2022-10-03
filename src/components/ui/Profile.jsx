import React from "react";
import img from "../../assets/img/Children.png";
import "../../assets/styles/profil.css"
import OrderItems from "./meal/OrderItems";
import { useNavigate } from "react-router";
import useFetchCurrentUser from './../../hooks/useFetchCurretUser';
import PageLoader from './../PageLoader';

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser, isUserLoading, userError } = useFetchCurrentUser();

  if (isUserLoading) return <PageLoader />

  const navigateToOrders = () => {
    navigate("/orders")
  }

  return (
    <>
      <div className="pt-[200px]  w-[75%] mr-auto ml-auto">

        <form className="flex flex-col">
          <div className="xl:flex-col   xl:mr-auto xl:ml-auto items-center ml-[80px] flex w-max-[350px] w-fit ">
            <img className="w-36 h-36 rounded-full object-cover" src={img} />
            <div className="xl:flex xl:flex-col items-center xl:ml-[0px] ml-[8px]">
              <h1 className="mb-2 text-[32px] ">{currentUser.firstname} {currentUser.lastname}</h1>
              <span className="text-[16px] cursor-pointer xl:ml-2 ">Düzəliş etmək</span>
              <hr className="w-[68%]" />
            </div>
          </div>

          <div className="xl:flex  xl:flex-col w-[100%]  mt-[50px]">
            <span className="xl:ml-[0px] ml-[100px] lg:ml-[60px] font-semibold">Şəxsi məlumatlarım</span>
            <div id="profil-divBox" className="xl:flex xl:flex-col mt-[20px] grid   gap-y-5 grid-cols-2 place-items-center" >
              <input className="xl:w-[100%] w-[65%] p-2" placeholder="Ad" />
              <input className="xl:w-[100%]  w-[65%] p-2" placeholder="Soyad" />
              <input className="xl:w-[100%]  w-[65%] p-2" placeholder={`${currentUser.phone_number}`} />
              <input className="xl:w-[100%]  w-[65%] p-2" placeholder={`${currentUser.email}`} />
            </div>
          </div>


          <div id="profil-divBox" className="w-[100%]  mt-[50px]">
            <span className="xl:ml-[0px] ml-[100px] lg:ml-[60px] font-semibold">Ünvanlarım</span>
            <div className="xl:flex xl:flex-col mt-[20px] grid   gap-y-5 grid-cols-2 place-items-center" >

              <select className="xl:w-[100%] w-[65%] p-2" >
                <option value="volvo">Bakı</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select className="xl:w-[100%] w-[65%] p-2" >
                <option value="volvo">Xətai rayonu</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <input className="xl:w-[100%] w-[65%] p-2" placeholder="Babək prospekti" />
              <select className="xl:w-[100%] w-[65%] p-2" >
                <option value="volvo">75-ci mənzil</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="xl:flex xl:mt-8 p-4 xl:flex-col mt-[20px] grid grid-cols-4 place-items-center">
              <input className="xl:w-[100%]  w-[50%] p-2 mb-4 xl:ml-0" placeholder="Evim" />
              <input className="xl:w-[100%]  w-[50%] p-2 mb-4 xl:mr-0" placeholder="75-ci bina" />
              <input className="xl:w-[100%]  w-[50%] p-2 mb-4 xl:ml-0" placeholder="Blok A" />
              <input className="xl:w-[100%]  w-[50%] p-2 mb-4 xl:mr-0" placeholder="4-cü mərtəbə" />
            </div>
          </div>
        </form>

        {/* Orders section */}

      </div>

      <div>
        <div className=" flex w-[85%] mr-auto ml-auto justify-between">
          <span className="mt-10 font-semibold">Son Sifarişlərim</span>
          <button onClick={navigateToOrders} className="mt-10 font-semibold">Hamısı <hr /></button>
        </div>
        {/* <OrderItems /> */}
      </div></>

  );
};

export default Profile;
