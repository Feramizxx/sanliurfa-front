import React, { useState, useContext, useEffect } from "react";
import PageNav from "./PageNav";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AdressContext } from "../../contexts/AdressesContext";

const Addresses = () => {
  const {
    myfunc,
    handleFormChange,
    handleSubmitForm2,
    districts,
    cities,
  } = useContext(AdressContext);
  const [saveAdress, setsaveAdress] = useState(false);
  const saveAdressHandle = () => {
    setsaveAdress(!saveAdress);
  };

  console.log(saveAdress);
  return (
    <div className={"mt-12 mb-2"}>
      <PageNav prev={"Cart"} next={"Payment"} />
      <form
        onSubmit={saveAdress ? handleSubmitForm2 : myfunc}
        className={"py-20 px-48"}
      >
        <div className={"flex justify-between mb-7"}>
          <select
            name="city"
            onChange={handleFormChange}
            className={"cart-input font-extralight"}
          >
            <option selected="selected" disabled="disabled">
              Şəhər
            </option>
            {cities.map((city, i) => {
              return <option key={i}>{city}</option>;
            })}
          </select>
          <select
            name="adress"
            onChange={handleFormChange}
            className={"cart-input font-extralight"}
          >
            <option selected="selected" disabled="disabled">
              Rayon
            </option>
            {districts.map((district, i) => {
              return <option key={i}>{district}</option>;
            })}
          </select>
        </div>
        <div className={"flex justify-between mb-7"}>
          <input
            required
            name="street"
            onChange={handleFormChange}
            className={"cart-input"}
            placeholder={"Küçə"}
          />
          {/* <select onChange={handleFormChange}  className={'cart-input font-extralight'}>
                        <option selected='selected' disabled='disabled'>Mənzil</option>
                        {flats.map((flat, i) => {
                            return (
                                <option key={i}>{flat}</option>
                            )
                        })}
                    </select> */}
          <input
            required
            onChange={handleFormChange}
            name="flat"
            className={"cart-input"}
            placeholder={"Mənzil"}
          />
        </div>
        <div className={"flex justify-between mb-7"}>
          <div className={"flex justify-between w-[47%]"}>
            <input
              required
              name="title"
              onChange={handleFormChange}
              className={"cart-input"}
              placeholder={"Başlıq"}
            />
            <input
              required
              name="building"
              onChange={handleFormChange}
              className={"cart-input"}
              placeholder={"Bina"}
            />
          </div>
          <div className={"flex justify-between w-[47%]"}>
            <input
              required
              name="blok"
              onChange={handleFormChange}
              className={"cart-input"}
              placeholder={"Blok"}
            />
            <input
              required
              name="floor"
              onChange={handleFormChange}
              className={"cart-input"}
              placeholder={"Mərtəbə"}
            />
          </div>
        </div>
        <div className={"mb-7"}>
          <textarea
            className={"cart-input w-full"}
            rows={6}
            placeholder={"Qeyd"}
          ></textarea>
        </div>
        <div className={"mb-7 flex items-center"}>
          <input
            onClick={saveAdressHandle}
            type="checkbox"
            id={"remember"}
            className={"mr-3 w-[30px] h-[30px] accent-emerald-600"}
          />
          <label htmlFor={"remember"} className={"text-xl"}>
            Yadda saxla
          </label>
        </div>
        <div className={"flex justify-end"}>
          {/* <NavLink to={"/cart/payment"}> */}
          <button
            type="submit"
            className={
              "bg-red py-4 px-32 rounded-full text-white text-2xl font-light"
            }
          >
            Növbəti
          </button>
          {/* </NavLink> */}
        </div>
      </form>
    </div>
  );
};

export default Addresses;
