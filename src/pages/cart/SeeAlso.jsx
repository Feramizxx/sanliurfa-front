import React, { useState } from "react";
import Modal from "react-modal";
import Meal from "../../components/items/Meal";
import useFetchMenu from './../../hooks/useFetchMenu';
import PageLoader from './../../components/PageLoader';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root');

const SeeAlso = () => {
    const { menu, isMenuLoading, menuError } = useFetchMenu(8);
    if (isMenuLoading) return <PageLoader />

    return (
        <>
            <div className={'m-auto w-5/6'}>
                <ul id={'see-also-meals'} className={'flex flex-wrap justify-between md:flex-col md:items-center'}>
                    {menu[0].meals.map((meal) => {
                        return (
                            <li className={'flex mb-12 ml-2 shadow-see-also-card rounded-[26px]'} key={meal.id}>
                                <Meal meal={meal} type={'list'} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SeeAlso;