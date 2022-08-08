import React, {useState} from "react";
import PageNav from "./PageNav";
import {NavLink} from "react-router-dom";

const Addresses = () => {
    const [cities] = useState(['Baku', 'Ganja', 'Sumgait', 'Nakhchivan', 'Sheki']);
    const [districts] = useState(['Narimanov', 'Nasimi', 'Bayil', 'Sabayil', 'Garadagh']);
    const [flats] = useState(['Menzil1', 'Menzil2', 'Menzil3']);

    return (
        <div className={'mt-12 mb-2'}>
            <PageNav prev={'Cart'} next={'Payment'}/>
            <form className={'py-20 px-48 lg2:px-10'}>
                <div className={'flex justify-between mb-7 sm:flex-col'}>
                    <select className={'cart-input font-extralight sm:mb-7 sm:w-full'}>
                        <option selected='selected' disabled='disabled'>Şəhər</option>
                        {cities.map((city, i) => {
                            return (
                                <option key={i}>{city}</option>
                            )
                        })}
                    </select>
                    <select className={'cart-input font-extralight sm:w-full'}>
                        <option selected='selected' disabled='disabled'>Rayon</option>
                        {districts.map((district, i) => {
                            return (
                                <option key={i}>{district}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={'flex justify-between mb-7 sm:flex-col'}>
                    <input className={'cart-input sm:mb-7 sm:w-full'} placeholder={'Küçə'} />
                    <select className={'cart-input font-extralight sm:w-full'}>
                        <option selected='selected' disabled='disabled'>Mənzil</option>
                        {flats.map((flat, i) => {
                            return (
                                <option key={i}>{flat}</option>
                            )
                        })}
                    </select>
                </div>
                <div className={'flex justify-between mb-7 sm:flex-col'}>
                    <div className={'flex justify-between w-[47%] sm:mb-7 sm:w-full'}>
                        <input className={'cart-input'} placeholder={'Başlıq'} />
                        <input className={'cart-input'} placeholder={'Bina'} />
                    </div>
                    <div className={'flex justify-between w-[47%] sm:w-full'}>
                        <input className={'cart-input'} placeholder={'Blok'} />
                        <input className={'cart-input'} placeholder={'Mərtəbə'} />
                    </div>
                </div>
                <div className={'mb-7'}>
                    <textarea className={'cart-input w-full'} rows={6} placeholder={'Qeyd'}></textarea>
                </div>
                <div className={'mb-7 flex items-center'}>
                    <input type='checkbox' id={'remember'} className={'mr-3 w-[30px] h-[30px] accent-emerald-600'} />
                    <label htmlFor={'remember'} className={'text-xl'}>Yadda saxla</label>
                </div>
                <div className={'flex justify-end'}>
                    <NavLink to={'/cart/payment'}>
                        <button className={'bg-red py-4 px-32 rounded-full text-white text-2xl font-light sm:text-lg sm:px-20'}>
                            Növbəti
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default Addresses;