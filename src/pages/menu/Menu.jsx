import React, { memo, useState, useEffect } from "react";
import CategoriesCarousel from "../../components/items/CategoriesCarousel";
import FilterModal from "../../components/items/FilterModal";
import SortModal from "../../components/items/SortModal";
import Filter from "../../assets/icons/buttons/filter.svg";;
import useFetchMenu from './../../hooks/useFetchMenu';
import PageLoader from './../../components/PageLoader';
import Meal from './../../components/items/Meal';

const Menu = memo(() => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [sortModalIsOpen, setSortModalIsOpen] = useState(false);
    const { menu, isMenuLoading, menuError } = useFetchMenu();
    const [meals, setMeals] = useState([]);

    if (isMenuLoading) return <PageLoader />

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openSortModal() {
        setSortModalIsOpen(true);
    }

    function closeSortModal() {
        setSortModalIsOpen(false);
    }

    return (
        <>
            {
                !menuError ?
                    <>
                        <div className={'bg-red py-40 px-28 md:px-8'}>
                            <CategoriesCarousel theme={'red'} categories={menu} setMeals={setMeals} />
                            <div className={'flex justify-start items-center mb-8'}>
                                <div className={'flex cursor-pointer pr-6 border-r border-white xs:mt-0'} onClick={openModal}>
                                    <p className={'text-white mr-4'}>Filtrlə</p>
                                    <img src={Filter} />
                                </div>
                                <div className={'flex cursor-pointer pl-6'} onClick={openSortModal}>
                                    <p className={'text-white mr-4'}>Sort</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort text-white"
                                        width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
                                        <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
                                    </svg>
                                </div>
                            </div>
                            <ul id={'menu-meals'} className={'flex flex-wrap justify-between sm:flex-nowrap sm:flex-col sm:items-center'}>
                                {(meals.legth === 0 ? menu[0].meals : meals).map((meal) => {
                                    return (
                                        <li className={'flex mb-12'} key={meal.id}>
                                            <Meal meal={meal} type={'list'} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <FilterModal setMeals={setMeals} modalIsOpen={modalIsOpen} closeModal={closeModal} categories={menu} />
                        <SortModal setMeals={setMeals} modalIsOpen={sortModalIsOpen} closeModal={closeSortModal} />
                    </>
                    :
                    <div className="bg-red w-screen h-screen flex items-center justify-center">
                        <p className="text-white font-bold text-xl"> Could not load menu... </p>
                    </div>
            }
        </>
    )
})

export default Menu;