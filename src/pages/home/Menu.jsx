import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoriesCarousel from "../../components/items/CategoriesCarousel";
import MealsCarousel from "../../components/items/MealsCarousel";
import Card from "../../components/items/Card";
import Clock from "../../assets/icons/card/clock.svg";
import Location from "../../assets/icons/card/location.svg";
import Van from "../../assets/icons/card/van.svg";
import { scrollTop } from "../../helpers";
import useFetchContactInfo from './../../hooks/useFetchContactInfo';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LinkContext } from '../../contexts/LinkContext';
import useFetchMenu from './../../hooks/useFetchMenu';
import PageLoader from './../../components/PageLoader';

const Menu = () => {
    const { value, content } = useContext(LanguageContext);
    const { setValue } = useContext(LinkContext);
    const { contactInfo, contactInfoError, isContactInfoLoading } = useFetchContactInfo(value);
    const { menu, isMenuLoading, menuError } = useFetchMenu(8);
    const [meals, setMeals] = useState([]);

    const onLinkClick = () => {
        scrollTop();
        setValue(3);
    }

    if (isMenuLoading) return <PageLoader />

    return (
        <>
            {!contactInfoError && !menuError ?
                <div className='pt-14 pb-20'>
                    <div className={'px-14'}>
                        <div className='flex justify-between items-end mb-8'>
                            <h2 className="font-bold text-[64px] md:text-[40px] text-[#BB2025]">{content.titles.menu}</h2>
                            <NavLink to="/menu" onClick={onLinkClick}
                                className="font-light text-[32px] md:text-[20px] text-[#8F161A] underline decoration-2 underline-offset-2">
                                {content.links.more}
                            </NavLink>
                        </div>
                        <CategoriesCarousel theme={'white'} categories={menu} setMeals={setMeals} />
                    </div>
                    <div className="bg-red pt-20 pb-24 mb-6 relative">
                        <MealsCarousel meals={meals} />
                        <div className="absolute top-0 left-0 w-full overflow-hidden">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                                className="relative block h-[76px]" style={{ 'width': 'calc(128% + 1.3px)' }}>
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="fill-white"></path>
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none"
                                className="relative block h-[76px]" style={{ 'width': 'calc(128% + 1.3px)' }}>
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    className="fill-white"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={'flex justify-center md:flex-col md:items-center'}>
                        <Card heading={isContactInfoLoading ? 'Loading...' : contactInfo.contacts.working_hours || 'Working hours are not provided...'} subheading={content.titles.workingHours} icon={Clock} />
                        <Card heading={isContactInfoLoading ? 'Loading...' : contactInfo.contacts.address || 'Address is not provided...'} subheading={content.titles.address} icon={Location} central={true} />
                        <Card heading={'7/24'} subheading={content.titles.delivery} icon={Van} />
                    </div>
                </div> :
                <div className="w-full text-xl font-bold items-center justify-center flex text-red bg-white h-[30vh]">
                    <p> Could not load contact info... </p>
                </div>
            }
        </>
    )
}

export default Menu;