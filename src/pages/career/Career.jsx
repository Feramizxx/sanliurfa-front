import React from 'react';
import Vacancies from "./Vacancies";
import CareerForm from "./CareerForm";

const Career = () => {
    return (
        <div className='font-Roboto'>
            <div className='w-full bg-primary-bg h-20'/>
            <div className='grid grid-cols-2 mt-10'>
                <Vacancies />
                <CareerForm />
            </div>
        </div>
    );
};

export default Career;