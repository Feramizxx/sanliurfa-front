import React, { useState,useLayoutEffect } from "react";
import "../../../assets/styles/adress.css";
import {nanoid} from "nanoid"
import AdressItem from "./AdressItem";

const Adress = () => {
 
  const [Adress,setnewAdress]=useState([])
  const [data, setData] = useState({
  id: "",
  city:"",
  adress: "",
  name: "",
  surName: "",
  number: ""
  });
  const [isShown, setIshown] = useState(false);
  const toggleAdressShowPopupHandle = () => {
    setIshown(!isShown);
  };

  
  



  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName=e.target.getAttribute("name")
    const fieldValue=e.target.value;
    const newData={...data}
    newData[fieldName]=fieldValue
    setData(newData);
    
  };
 const handleSubmitForm=(e)=>{
 e.preventDefault();
 const newAdress={
  id:nanoid(),
  city: data.city,
  adress: data.adress,
  name: data.name,
  surName: data.surName,
  number: data.number
 }

 if(data.city==""){
  alert("Zəhmət olmasa şəhər seçin")
 }
 else{
 const newAdresses=[...Adress,newAdress ]
 setnewAdress(newAdresses)
 setIshown(false)
 console.log(newAdresses)
 }
 }


 const removeHandler=(e)=>{
  setnewAdress( (current)=>current.filter((item,index)=>{ 
   return e.target.value !==item.id
    }))}
    

  return (
    <div className="pt-[150px] pb-20">
      <div className="relative w-[95%] mr-auto ml-auto justify-between flex flex-row md:flex-col items-center mb-10 ">
        <h1 className="text-[32px] md:mb-1 text-red">Ünvanlarım</h1>

        {isShown && (
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
        )}

        <button
          className="w-fit bg-red py-2 px-10 rounded-[80px]  text-[20px]  text-white"
          onClick={toggleAdressShowPopupHandle}
        >
          +Yeni ünvan
        </button>
      </div>
      {Adress.map((item, index) => (
        <AdressItem
          removeAdress={removeHandler}
          adressData={Adress}
          key={index}
          id={item.id}
          city={item.city}
          name={item.name}
          adress={item.adress}
          surName={item.surName}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default Adress;
