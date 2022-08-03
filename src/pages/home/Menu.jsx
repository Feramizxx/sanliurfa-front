import React from "react";
import {NavLink} from "react-router-dom";
import CategoriesCarousel from "../../components/items/CategoriesCarousel";
import MealsCarousel from "../../components/items/MealsCarousel";
import Card from "../../components/items/Card";
import Clock from "../../assets/icons/card/clock.svg";
import Location from "../../assets/icons/card/location.svg";
import Van from "../../assets/icons/card/van.svg";

const Menu = () => {
    return (
        <div className='pt-14 pb-20'>
            <div className={'px-14'}>
                <div className='flex justify-between items-end mb-8'>
                    <h2 className="font-bold text-[64px] md:text-[40px] text-[#BB2025]">Menyu</h2>
                    <NavLink to="menu"
                       className="font-light text-[32px] md:text-[20px] text-[#8F161A] underline decoration-2 underline-offset-2">Daha
                        çox</NavLink>
                </div>
                <CategoriesCarousel theme={'white'} />
            </div>
            <div className="bg-red pt-20 pb-24 mb-6 relative">
                <MealsCarousel />
                <div className="absolute top-0 left-0 w-full overflow-hidden">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                         className="relative block h-[76px]" style={{'width': 'calc(128% + 1.3px)'}}>
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-white"></path>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                         className="relative block h-[76px]" style={{'width': 'calc(128% + 1.3px)'}}>
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-white"></path>
                    </svg>
                </div>
            </div>
            <div className={'flex justify-center md:flex-col md:items-center'}>
                <Card heading={'Bu gün 08:00 - 22:00 '} subheading={'İş saatları'} icon={Clock} />
                <Card heading={'Məhəmməd Hadi küç. 23/24'} subheading={'Adresimiz'} icon={Location} central={true} />
                <Card heading={'7/24'} subheading={'Çatdırılma'} icon={Van} />
            </div>
        </div>
    )
}

export default Menu;