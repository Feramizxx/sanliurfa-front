import React, { memo } from 'react';
import Vacancies from "./Vacancies";
import CareerForm from "./CareerForm";

const Career = memo(() => {
    return (
        <div>
            <div className='w-full bg-primary-bg h-20' />
            <div className='min-sm:grid min-sm:grid-cols-2 mt-10'>
                <Vacancies />
                <CareerForm />
            </div>
        </div>
    );
})

export default Career;