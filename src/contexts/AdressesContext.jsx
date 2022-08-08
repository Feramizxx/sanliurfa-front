import { createContext, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
export const AdressContext = createContext();

const AdressContextProvider = (props) => {
  const navigate = useNavigate();

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

    if (data.city === "") {
      alert("Zəhmət olmasa şəhər seçin");
    } else {
      const newAdresses = [...Adress, newAdress];
      setnewAdress(newAdresses);
      setIshown(false);
      console.log("ok");
    }
  };

  const handleSubmitForm2 = (e) => {
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
      console.log("ok");
    }
    navigate("/cart/payment");
  };
  const myfunc=(e)=>{
    e.preventDefault();
    navigate("/cart/payment")
}

  const removeHandler = (e) => {
    setnewAdress((current) =>
      current.filter((item, index) => {
        return e.target.value !== item.id;
      })
    );
  };
  const [isShown, setIshown] = useState(false);
  const toggleAdressShowPopupHandle = () => {
    setIshown(!isShown);
  };
  const [Adress, setnewAdress] = useState([]);
  const [data, setData] = useState({
    id: "",
    city: "",
    adress: "",
    street: " ",
    flat: "",
    title: "",
    building: "",
    floor: " ",
    blok: " ",
  });
  return (
    <AdressContext.Provider
      value={{
        myfunc,
        data,
        setData,
        Adress,
        setnewAdress,
        isShown,
        setIshown,
        toggleAdressShowPopupHandle,
        handleFormChange,
        handleSubmitForm,
        removeHandler,
        handleSubmitForm2,
        districts,
        cities,
      }}
    >
      {props.children}
    </AdressContext.Provider>
  );
};

export default AdressContextProvider;
