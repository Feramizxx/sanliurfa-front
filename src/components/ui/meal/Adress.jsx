import React, { useState, useLayoutEffect } from "react";
import "../../../assets/styles/adress.css";
import { nanoid } from "nanoid";
import AdressItem from "./AdressItem";
import "../../../assets/styles/adress.css"
import { NavLink } from "react-router-dom";
const Adress = () => {
  const [cities] = useState([
    "Baku",
    "Ganja",
    "Sumgait",
    "Nakhchivan",
    "Sheki",
  ]);
  const [districts] = useState([
    "Narimanov",
    "Nasimi",
    "Bayil",
    "Sabayil",
    "Garadagh",
  ]);
  const [flats] = useState(["Menzil1", "Menzil2", "Menzil3"]);
  const [Adress, setnewAdress] = useState([]);
  const [data, setData] = useState({
    id: "",
    city: "",
    adress: "",
    street: " ",
    flat: "",
    title: "",
    building: "",
    floor: "",
    blok: "",
  });
  const [isShown, setIshown] = useState(false);
  const toggleAdressShowPopupHandle = () => {
    setIshown(!isShown);
  };

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newData = { ...data };
    newData[fieldName] = fieldValue;
    setData(newData);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newAdress = {
      id: nanoid(),
      city: data.city,
      adress: data.adress,
      street: data.street,
      flat: data.flat,
      title: data.title,
      building: data.building,
      floor: data.floor,
      blok: data.blok,
    };

    if (data.city == "") {
      alert("Zəhmət olmasa şəhər seçin");
    } else {
      const newAdresses = [...Adress, newAdress];
      setnewAdress(newAdresses);
      setIshown(false);
      console.log(newAdresses);
    }
  };

  const removeHandler = (e) => {
    setnewAdress((current) =>
      current.filter((item, index) => {
        return e.target.value !== item.id;
      })
    );
  };

  return (
    <div className="pt-[150px] pb-20">
      <div className="relative w-[95%] mr-auto ml-auto justify-between flex flex-row md:flex-col items-center mb-10 ">
        <h1 className="text-[32px] md:mb-1 text-red">Ünvanlarım</h1>

        {/* {isShown && (
          <form
            onMouseLeave={()=>setIshown(false)} 
            autoComplete="off"
            action="#"
            id="profil-divBox"
            onSubmit={handleSubmitForm}
            className="p-2 md:top-24 absolute right-0 top-16 flex flex-col  w-[300px] h-[300px] "
          >
            <select
              required
              onChange={handleFormChange}
              name="city"
              className="p-2 mb-2"
            >
              <option>Şəhər seçin</option>
              <option>Bakı</option>
              <option>Xırdalan</option>
              <option>Sumqayıt</option>
              <option>Ağcəbədi</option>
              <option>Ağdam</option>
            </select>
            <input
              autocomplete="off"
              type="text"
              required
              onChange={handleFormChange}
              name="adress"
              className="p-2 mb-2 mt-1"
              placeholder="Ünvan"
            />
            <div className="flex flex-wrap items-center">
              <input
               autocomplete="off"
                type="text"   
                required
                onChange={handleFormChange}
                name="name"
                className="p-2 mb-2 mt-1 mr-4 w-[47%]"
                placeholder="Ad"
              />
              <input
               autocomplete="off"
                type="text"
                required
                onChange={handleFormChange}
                name="surName"
                className="p-2 mb-2 mt-1 w-[47%]"
                placeholder="Soyad"
              />
            </div>
            <input
             autocomplete="off"
              required
              onChange={handleFormChange}
              name="number"
              className="p-2 mb-2 mt-1"
              type="number"
              placeholder="Mobil Nömrə"
            />
            <button className="bg-red py-3 px-10 rounded-[80px] mt-6 text-[20px]  text-white">
              Save
            </button>
            
          </form>
        )} */}

        <button
          className="w-fit bg-red py-2 px-10 rounded-[80px]  text-[20px]  text-white"
          onClick={toggleAdressShowPopupHandle}
        >
          +Yeni ünvan
        </button>
      </div>

      {isShown && (
        <div className="flex py-2 adresses-container w-fit mr-auto ml-auto flex-col  ">
          <div className="flex  w-[92%] ml-auto mr-auto   justify-between  ">
            <span className="text-red  font-semibold text-[32px]">
             Yeni Ünvan
            </span>
            <button className="h-[50%] rounded-[100%]   mt-[12px] px-2 py-0 leading-0 text-[18px]   text-white  bg-red">
              X
            </button>
          </div>
          <form onSubmit={handleSubmitForm} className={" py-10  px-10"}>
            <div className={"flex justify-between mb-7"}>
              <select
                required
                onChange={handleFormChange}
                name="city"
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
                required
                onChange={handleFormChange}
                name="adress"
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
                onChange={handleFormChange}
                name="street"
                className={"cart-input"}
                placeholder={"Küçə"}
              />
              {/* <select className={"cart-input font-extralight"}>
                <option selected="selected" disabled="disabled">
                  Mənzil
                </option>
                {flats.map((flat, i) => {
                  return <option key={i}>{flat}</option>;
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
                  onChange={handleFormChange}
                  name="title"
                  className={"cart-input"}
                  placeholder={"Başlıq"}
                />
                <input
                  required
                  onChange={handleFormChange}
                  name="building"
                  className={"cart-input"}
                  placeholder={"Bina"}
                />
              </div>
              <div className={"flex justify-between w-[47%]"}>
                <input
                  required
                  onChange={handleFormChange}
                  name="blok"
                  className={"cart-input"}
                  placeholder={"Blok"}
                />
                <input
                  required
                  onChange={handleFormChange}
                  name="floor"
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
            {/* <div className={'mb-7 flex items-center'}>
                    <input type='checkbox' id={'remember'} className={'mr-3 w-[30px] h-[30px] accent-emerald-600'} />
                    <label htmlFor={'remember'} className={'text-xl'}>Yadda saxla</label>
                </div> */}
            <div className={"flex justify-end"}>
              <button
                className={
                  "bg-red py-4 px-32 rounded-full text-white text-2xl font-light"
                }
              >
                Yadda Saxla
              </button>
            </div>
          </form>
        </div>
      )}

      {Adress.map((item, index) => (
        <AdressItem
          removeAdress={removeHandler}
          adressData={Adress}
          key={index}
          id={item.id}
          city={item.city}
          adress={item.adress}
          street={item.street}
          flat={item.flat}
          title={item.title}
          building={item.building}
          floor={item.floor}
          blok={item.blok}
        />
      ))}
    </div>
  );
};

export default Adress;
