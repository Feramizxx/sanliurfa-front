import React from "react";
import img from "../../assets/img/Children.png";
import "../../assets/styles/profil.css"
import OrderItems from "./meal/OrderItems";

const Profil = () => {
  return (
    <>
    <div className="pt-[200px]  w-[75%] mr-auto ml-auto">
      <form className="flex flex-col">
        <div className=" ml-[80px] flex w-[350px] items-center">
          <img className="w-36 h-36 rounded-full object-cover" src={img} />
          <div className="ml-2">
            <h1 className="mb-2 text-[32px]">Leyli Aliyeva</h1>
            <span className="text-[16px] cursor-pointer ">Düzəliş etmək</span>
            <hr className="w-[68%]"/>
          </div>
        </div>

        <div className="w-[100%]  mt-[50px]">
        <span className="ml-[100px] lg:ml-[60px] font-semibold">Şəxsi məlumatlarım</span>
        <div id="profil-divBox" className=" mt-[20px] grid   gap-y-5 grid-cols-2 place-items-center" >
          <input  className="w-[65%] p-2" placeholder="salam" />
          <input  className="w-[65%] p-2" placeholder="salam" />
          <input  className="w-[65%] p-2" placeholder="salam" />
          <input  className="w-[65%] p-2" placeholder="salam" />
        </div>
        </div>
       

        <div id="profil-divBox" className="w-[100%]  mt-[50px]">
        <span className="ml-[100px] lg:ml-[60px] font-semibold">Şəxsi məlumatlarım</span>
        <div className=" mt-[20px] grid   gap-y-5 grid-cols-2 place-items-center" >
          <input  className="w-[65%] p-2" placeholder="salam" />
          <select className="w-[65%] p-2" placeholder="salam">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select className="w-[65%] p-2" placeholder="salam">
              <option value="volvo">Xetai</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          <select className="w-[65%] p-2" placeholder="salam">
              <option value="volvo">Xetai</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
        </div>
        <div className="mt-[20px] grid grid-cols-4 place-items-center">
        <input  className="ml-6 w-[40%] p-2" placeholder="salam" />
          <input  className=" mr-6 w-[40%] p-2" placeholder="salam" />
          <input  className="ml-6 w-[40%] p-2" placeholder="salam" />
          <input  className=" mr-6 w-[40%] p-2" placeholder="salam" />
        </div>
        </div>
      </form>

{/* Orders section */}

    </div>
    
    <div>
  <div className=" flex w-[85%] mr-auto ml-auto justify-between">
    <span className="mt-10 font-semibold">Son Sifarişlərim</span>
    <span className="mt-10 font-semibold">Hamısı <hr/></span>
  </div>
<OrderItems />
</div></>
    
  );
};

export default Profil;
