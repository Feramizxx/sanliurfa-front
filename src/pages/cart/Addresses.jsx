import React, { useState, useContext } from "react";
import PageNav from "./PageNav";
import { AuthContext } from './../../contexts/AuthContext';
import useFetchAddresses from './../../hooks/useFetchAddresses';
import PageLoader from './../../components/PageLoader';
import AdressItem from './../../components/ui/meal/AdressItem';
import { CartContext } from './../../contexts/CartContext';
import Button from './../../components/ui/Button';
import { useNavigate } from 'react-router';
import { scrollTop } from "../../helpers";
import useResetLink from "../../hooks/useResetLink";
import { LanguageContext } from "../../contexts/LanguageContext";

const Addresses = () => {
    useResetLink();
    const { token } = useContext(AuthContext);
    const { selectAddress } = useContext(CartContext);
    const { content } = useContext(LanguageContext);
    const { addresses, addressesAreLoading, setAddresses } = useFetchAddresses(token);
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    if (addressesAreLoading) return <PageLoader />;

    return (
        <div className={"mt-12 mb-2"}>
            <PageNav prev={"Cart"} next={"Payment"} />
            <div className={"py-20 px-48 lg2:px-10"}>
                {Array.isArray(addresses) && addresses.length !== 0 ? addresses.map((address) =>
                    <div key={address.id}
                        onClick={() => {
                            if (selected !== address.id) {
                                setSelected(address.id);
                                selectAddress(address);
                            } else {
                                setSelected(null);
                                selectAddress(null);
                            }
                        }}
                        className="hover:cursor-pointer"
                    >
                        <AdressItem
                            address={address}
                            setAddresses={setAddresses}
                            selected={selected === address.id}
                        />
                    </div>) :
                    <p className="w-full text-center text-red font-bold">
                        Siz hələ heç bir ünvan əlavə etməmisiniz...
                    </p>
                }
                <Button
                    theme={'default'}
                    onClick={() => {
                        scrollTop();
                        navigate('/profile/addresses')
                    }}
                    className="py-2 px-4 rounded-2xl float-right"
                > Mənim ünvanlarım </Button>
            </div>
        </div >
    );
};

{/* <div className={"flex justify-between mb-7 sm:flex-col"}>
                    <select
                        name="city"
                        className={"cart-input font-extralight sm:mb-7 sm:w-full"}
                    >
                        <option selected="selected" disabled="disabled">
                            Şəhər
                        </option>
                        {cities.map((city, i) =>
                            <option key={i}>
                                {city}
                            </option>
                        )}
                    </select>
                    <select
                        name="adress"
                        className={"cart-input font-extralight sm:w-full"}
                    >
                        <option selected="selected" disabled="disabled">
                            Rayon
                        </option>
                        {districts.map((district, i) =>
                            <option key={i}>
                                {district}
                            </option>
                        )}
                    </select>
                </div>
                <div className={"flex justify-between mb-7 sm:flex-col"}>
                    <input
                        required
                        name="street"
                        className={"cart-input sm:mb-7 sm:w-full"}
                        placeholder={"Küçə"}
                    />
                    <input
                        required
                        name="flat"
                        className={"cart-input sm:w-full"}
                        placeholder={"Mənzil"}
                    />
                </div>
                <div className={"flex justify-between mb-7 sm:flex-col"}>
                    <div className={"flex justify-between w-[47%] sm:mb-7 sm:w-full"}>
                        <input
                            required
                            name="title"
                            className={"cart-input"}
                            placeholder={"Başlıq"}
                        />
                        <input
                            required
                            name="building"
                            className={"cart-input"}
                            placeholder={"Bina"}
                        />
                    </div>
                    <div className={"flex justify-between w-[47%] sm:w-full"}>
                        <input
                            required
                            name="blok"
                            className={"cart-input"}
                            placeholder={"Blok"}
                        />
                        <input
                            required
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
                <div className={"mb-7 flex items-center"}>
                    <input
                        type="checkbox"
                        id={"remember"}
                        className={"mr-3 w-[30px] h-[30px] accent-emerald-600"}
                    />
                    <label htmlFor={"remember"} className={"text-xl"}>
                        Yadda saxla
                    </label>
                </div>
                <div className={"flex justify-end"}>
                    <button
                        type="submit"
                        className={
                            "bg-red py-4 px-32 rounded-full text-white text-2xl font-light sm:text-lg sm:px-20"
                        }
                    >
                        Növbəti
                    </button>
                </div> */}


export default Addresses;
